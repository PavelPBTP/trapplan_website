import { writeFile } from "node:fs/promises";

const SITEMAP_URL = process.env.SITEMAP_URL ?? "https://www.trapplan.com/sitemap.xml";
const CONCURRENCY = Number(process.env.CONCURRENCY ?? 16);
const TIMEOUT_MS = 25000;
const MAX_URLS = Number(process.env.MAX_URLS ?? 0);

function fetchWithTimeout(url, opts = {}) {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
  return fetch(url, { ...opts, signal: ac.signal, redirect: "manual" }).finally(() =>
    clearTimeout(timer),
  );
}

async function fetchText(url, opts) {
  const res = await fetchWithTimeout(url, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function getSitemapUrls(rootSitemap) {
  const out = new Set();
  const queue = [rootSitemap];
  while (queue.length) {
    const sm = queue.shift();
    try {
      const xml = await fetchText(sm, { headers: { "user-agent": "trapplan-audit/1" } });
      const subs = [...xml.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) =>
        m[1].trim(),
      );
      if (subs.length > 0) {
        queue.push(...subs);
      } else {
        const urls = [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) =>
          m[1].trim(),
        );
        for (const u of urls) out.add(u);
      }
    } catch (err) {
      console.warn(`failed to read sitemap ${sm}: ${err.message}`);
    }
  }
  return [...out];
}

function attr(html, tag, attrName) {
  const re = new RegExp(`<${tag}\\b[^>]*\\b${attrName}=["']([^"']*)["'][^>]*>`, "i");
  const m = html.match(re);
  return m ? m[1] : null;
}

function metaAttrFor(html, prop) {
  const re = new RegExp(
    `<meta\\b(?:[^>]*?\\b(?:property|name)=["']${prop}["'])[^>]*?\\bcontent=["']([^"']*)["'][^>]*>`,
    "i",
  );
  const m = html.match(re);
  if (m) return m[1];
  const re2 = new RegExp(
    `<meta\\b(?:[^>]*?\\bcontent=["']([^"']*)["'])[^>]*?\\b(?:property|name)=["']${prop}["'][^>]*>`,
    "i",
  );
  const m2 = html.match(re2);
  return m2 ? m2[1] : null;
}

function titleOf(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : null;
}

function uniqueImageSrcs(html) {
  const out = new Set();
  for (const m of html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    out.add(m[1]);
  }
  return [...out];
}

function uniqueLinks(html) {
  const out = new Set();
  for (const m of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    out.add(m[1]);
  }
  return [...out];
}

function nextImageOriginal(url) {
  if (!url.includes("/_next/image")) return null;
  try {
    const u = new URL(url, "https://placeholder.local");
    return u.searchParams.get("url");
  } catch {
    return null;
  }
}

async function pingImage(rawSrc, pageUrl) {
  let target = rawSrc;
  const orig = nextImageOriginal(rawSrc);
  if (orig) target = decodeURIComponent(orig);
  let absUrl;
  try {
    absUrl = new URL(target, pageUrl).toString();
  } catch {
    return { src: rawSrc, ok: false, status: "invalid-url" };
  }
  if (absUrl.startsWith("data:")) return { src: rawSrc, ok: true, status: 200 };
  try {
    const res = await fetchWithTimeout(absUrl, { method: "GET", headers: { range: "bytes=0-0" } });
    return { src: rawSrc, abs: absUrl, ok: res.ok, status: res.status };
  } catch (err) {
    return { src: rawSrc, abs: absUrl, ok: false, status: `error: ${err.message}` };
  }
}

async function auditPage(url) {
  const result = {
    url,
    status: null,
    title: null,
    titleLen: 0,
    description: null,
    descLen: 0,
    og: { title: null, url: null, image: null, type: null },
    twitter: { card: null, image: null },
    brokenImages: [],
    redirectLinks: [],
    issues: [],
  };

  let html;
  try {
    const res = await fetchWithTimeout(url, {
      headers: { "user-agent": "trapplan-audit/1", accept: "text/html" },
    });
    result.status = res.status;
    if (res.status >= 300 && res.status < 400) {
      result.issues.push(`3xx redirect → ${res.headers.get("location")}`);
      return result;
    }
    if (!res.ok) {
      result.issues.push(`non-ok status ${res.status}`);
      return result;
    }
    html = await res.text();
  } catch (err) {
    result.status = "error";
    result.issues.push(`fetch failed: ${err.message}`);
    return result;
  }

  result.title = titleOf(html);
  result.titleLen = result.title?.length ?? 0;
  result.description = metaAttrFor(html, "description");
  result.descLen = result.description?.length ?? 0;
  result.og.title = metaAttrFor(html, "og:title");
  result.og.url = metaAttrFor(html, "og:url");
  result.og.image = metaAttrFor(html, "og:image");
  result.og.type = metaAttrFor(html, "og:type");
  result.twitter.card = metaAttrFor(html, "twitter:card");
  result.twitter.image = metaAttrFor(html, "twitter:image");

  if (!result.title) result.issues.push("missing title");
  else if (result.titleLen < 30) result.issues.push(`title short (${result.titleLen})`);
  else if (result.titleLen > 65) result.issues.push(`title long (${result.titleLen})`);

  if (!result.description) result.issues.push("missing description");
  else if (result.descLen < 120) result.issues.push(`description short (${result.descLen})`);
  else if (result.descLen > 160) result.issues.push(`description long (${result.descLen})`);

  if (!result.og.image) result.issues.push("missing og:image");
  if (!result.og.url) result.issues.push("missing og:url");

  const imgs = uniqueImageSrcs(html);
  const imgResults = await Promise.all(imgs.map((src) => pingImage(src, url)));
  result.brokenImages = imgResults.filter((r) => !r.ok);
  if (result.brokenImages.length > 0) {
    result.issues.push(`${result.brokenImages.length} broken image(s)`);
  }

  return result;
}

async function runPool(items, worker, concurrency) {
  const out = new Array(items.length);
  let i = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (i < items.length) {
        const idx = i++;
        try {
          out[idx] = await worker(items[idx], idx);
        } catch (err) {
          out[idx] = { url: items[idx], status: "throw", issues: [err.message] };
        }
        done++;
        if (done % 50 === 0 || done === items.length) {
          process.stdout.write(`\r  ${done}/${items.length}`);
        }
      }
    }),
  );
  process.stdout.write("\n");
  return out;
}

function buildDuplicateGroups(results) {
  const map = new Map();
  for (const r of results) {
    if (!r?.description) continue;
    const key = r.description.trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(r.url);
  }
  return [...map.entries()]
    .filter(([, urls]) => urls.length > 1)
    .map(([desc, urls]) => ({ count: urls.length, desc, urls }))
    .sort((a, b) => b.count - a.count);
}

async function main() {
  console.log(`fetching sitemap ${SITEMAP_URL}…`);
  let urls = await getSitemapUrls(SITEMAP_URL);
  console.log(`got ${urls.length} URLs`);
  if (MAX_URLS > 0) urls = urls.slice(0, MAX_URLS);

  console.log(`auditing with concurrency ${CONCURRENCY}…`);
  const results = await runPool(urls, auditPage, CONCURRENCY);

  const dupes = buildDuplicateGroups(results);
  const failed = results.filter((r) => r.status === "error" || r.status === "throw");
  const redirects = results.filter((r) => typeof r.status === "number" && r.status >= 300 && r.status < 400);
  const brokenImagePages = results.filter((r) => r.brokenImages?.length > 0);
  const allBrokenImages = new Map();
  for (const r of brokenImagePages) {
    for (const img of r.brokenImages) {
      const key = img.abs ?? img.src;
      if (!allBrokenImages.has(key)) allBrokenImages.set(key, []);
      allBrokenImages.get(key).push(r.url);
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    sitemapUrl: SITEMAP_URL,
    counts: {
      total: results.length,
      failed: failed.length,
      redirects: redirects.length,
      pagesWithBrokenImages: brokenImagePages.length,
      uniqueBrokenImages: allBrokenImages.size,
      missingDescription: results.filter((r) => !r.description).length,
      missingOgImage: results.filter((r) => !r.og?.image).length,
      missingOgUrl: results.filter((r) => !r.og?.url).length,
      shortTitle: results.filter((r) => r.titleLen > 0 && r.titleLen < 30).length,
      longTitle: results.filter((r) => r.titleLen > 65).length,
      shortDescription: results.filter((r) => r.descLen > 0 && r.descLen < 120).length,
      longDescription: results.filter((r) => r.descLen > 160).length,
      duplicateMetaDescriptionGroups: dupes.length,
    },
  };

  const fullReport = {
    ...summary,
    duplicateDescriptionGroups: dupes,
    brokenImages: [...allBrokenImages.entries()].map(([img, urls]) => ({ img, pageCount: urls.length, samplePages: urls.slice(0, 5) })),
    redirects: redirects.map((r) => ({ url: r.url, issues: r.issues })),
    failed: failed.map((r) => ({ url: r.url, issues: r.issues })),
  };

  await writeFile("audit-report.json", JSON.stringify(fullReport, null, 2));
  await writeFile("audit-full.json", JSON.stringify(results, null, 2));

  console.log("\n=== SUMMARY ===");
  for (const [k, v] of Object.entries(summary.counts)) console.log(`  ${k}: ${v}`);
  console.log("\nReport written to audit-report.json (summary) and audit-full.json (per-page).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
