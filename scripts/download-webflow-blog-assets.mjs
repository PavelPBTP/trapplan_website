import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "webflow");

const SOURCE_FILES = [
  path.join(ROOT, "src", "lib", "data", "blog.webflow.ts.bak.1769596744903"),
  path.join(ROOT, "src", "lib", "data", "blog.webflow.ts.bak.1769607559770"),
].filter((p) => fs.existsSync(p));

function sha1(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

function extFromUrl(url) {
  const clean = url.split("?")[0].split("#")[0];
  const m = /\.([a-z0-9]+)$/i.exec(clean);
  return m ? m[1].toLowerCase() : "bin";
}

function parseUrlsFromTs(ts) {
  const urls = new Set();

  // URLs in the generated .bak files are always string literals.
  // Match inside quotes to avoid truncation on characters like ')'.
  for (const m of ts.matchAll(/"(https:\/\/cdn\.prod\.website-files\.com\/[^\"]+)"/g)) {
    if (m[1]) urls.add(m[1]);
  }

  return Array.from(urls);
}

async function downloadToFile(url, filePath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      Accept: "image/*,*/*;q=0.8",
    },
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const arr = new Uint8Array(await res.arrayBuffer());
  await fs.promises.writeFile(filePath, arr);
}

async function main() {
  if (!SOURCE_FILES.length) {
    throw new Error("No source .bak files found.");
  }

  await fs.promises.mkdir(OUT_DIR, { recursive: true });

  const allUrls = new Set();
  for (const f of SOURCE_FILES) {
    const ts = await fs.promises.readFile(f, "utf8");
    for (const u of parseUrlsFromTs(ts)) allUrls.add(u);
  }

  const urls = Array.from(allUrls);
  console.log(`Found ${urls.length} unique CDN URLs.`);

  const tasks = urls.map((url) => {
    const ext = extFromUrl(url);
    const filename = `${sha1(url)}.${ext}`;
    const outPath = path.join(OUT_DIR, filename);
    return { url, outPath, filename };
  });

  const missing = tasks.filter((t) => !fs.existsSync(t.outPath));
  console.log(`Missing ${missing.length} files. Output: ${OUT_DIR}`);

  const concurrency = 10;
  let idx = 0;
  let ok = 0;
  let fail = 0;

  async function worker() {
    while (idx < missing.length) {
      const cur = missing[idx++];
      try {
        await downloadToFile(cur.url, cur.outPath);
        ok += 1;
        if (ok % 25 === 0 || ok === missing.length) {
          console.log(`Downloaded ${ok}/${missing.length}`);
        }
      } catch (e) {
        fail += 1;
        console.warn(`Failed: ${cur.url} -> ${cur.filename} (${e instanceof Error ? e.message : String(e)})`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  console.log(`Done. ok=${ok}, fail=${fail}.`);
  console.log("Next steps:");
  console.log("- Ensure /webflow/* is served by Next.js from public/webflow.");
  console.log("- Reload /blog and a couple /blog/[slug] pages.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
