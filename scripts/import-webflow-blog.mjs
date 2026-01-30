import fs from "node:fs";
import path from "node:path";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnE_JF8-zLu6RvDEpkpTGyb2rdcmXaRPOyT4gelNXlYYpACAA5nWpEXyPZnK7X3p1AiNaVInwkxOkE/pub?output=csv&gid=2034853401";

const EXCLUDE_SLUGS = new Set([
  "steam-next-fest-2026-the-ultimate-strategy-guide",
]);

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\u00a0/g, " ")
    .trim();
}

function htmlToBlocks(html) {
  const out = [];
  if (!html || typeof html !== "string") return out;

  // Normalize
  let s = html
    .replace(/\r\n/g, "\n")
    .replace(/<p>\s*‍\s*<\/p>/g, "")
    .replace(/<p>\s*&nbsp;\s*<\/p>/g, "")
    .replace(/\n+/g, "\n");

  // Tokenize by major tags we support
  const re =
    /<(h2|h3|p|ul|figure)([^>]*)>([\s\S]*?)<\/\1>/gi;

  let match;
  while ((match = re.exec(s))) {
    const tag = match[1].toLowerCase();
    const inner = match[3] ?? "";

    if (tag === "h2") {
      const text = decodeEntities(stripTags(inner));
      if (text) out.push({ type: "h2", text });
      continue;
    }

    if (tag === "h3") {
      const text = decodeEntities(stripTags(inner));
      if (text) out.push({ type: "h3", text });
      continue;
    }

    if (tag === "p") {
      const text = decodeEntities(stripTags(inner));
      if (text) out.push({ type: "p", text });
      continue;
    }

    if (tag === "ul") {
      const items = Array.from(inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi))
        .map((m) => decodeEntities(stripTags(m[1] ?? "")))
        .filter(Boolean);
      if (items.length) out.push({ type: "ul", items });
      continue;
    }

    if (tag === "figure") {
      const img = /<img[^>]*src="([^"]+)"[^>]*>/i.exec(inner);
      if (img?.[1]) {
        const alt = /<img[^>]*alt="([^"]*)"[^>]*>/i.exec(inner)?.[1];
        out.push({ type: "image", src: img[1], alt: alt ? decodeEntities(alt) : undefined });
      }
      continue;
    }
  }

  // Fallback: if nothing parsed, put as a single paragraph
  if (!out.length) {
    const text = decodeEntities(stripTags(s));
    if (text) out.push({ type: "p", text });
  }

  return out;
}

function estimateReadingMinutes(text) {
  const words = text
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}

function guessCategory(slug, title) {
  const s = `${slug} ${title}`.toLowerCase();
  if (s.includes("steam") || s.includes("wishlist") || s.includes("next-fest")) return "Steam";
  if (s.includes("tiktok") || s.includes("tik-tok")) return "TikTok";
  if (s.includes("twitch")) return "Twitch";
  if (s.includes("youtube") || s.includes("you-tube")) return "YouTube";
  if (s.includes("discord")) return "Community";
  if (s.includes("influencer") || s.includes("creator") || s.includes("streamer")) return "Influencers";
  if (s.includes("mobile")) return "Mobile";
  if (s.includes("pr") || s.includes("public-relations") || s.includes("communications")) return "PR";
  return "Marketing";
}

function csvParse(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let i = 0;
  let inQuotes = false;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cell += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (ch === ",") {
      row.push(cell);
      cell = "";
      i += 1;
      continue;
    }

    if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      i += 1;
      continue;
    }

    if (ch === "\r") {
      i += 1;
      continue;
    }

    cell += ch;
    i += 1;
  }

  // last cell
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function toIsoDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

function jsString(s) {
  return JSON.stringify(s ?? "");
}

function generateTs(posts) {
  const lines = [];
  lines.push('import type { BlogPost } from "@/lib/data/blog";');
  lines.push("");
  lines.push("export const WEBFLOW_BLOG_POSTS: BlogPost[] = [");

  for (const p of posts) {
    lines.push("  {");
    lines.push(`    slug: ${jsString(p.slug)},`);
    lines.push(`    title: ${jsString(p.title)},`);
    lines.push(`    date: ${jsString(p.date)},`);
    lines.push(`    excerpt: ${jsString(p.excerpt)},`);
    lines.push(`    readingMinutes: ${p.readingMinutes},`);
    lines.push(`    category: ${jsString(p.category)},`);
    lines.push(`    authorName: ${jsString(p.authorName)},`);
    lines.push(`    cover: ${jsString(p.cover)},`);
    lines.push("    content: [");

    for (const b of p.content) {
      if (b.type === "p") {
        lines.push(`      { type: "p", text: ${jsString(b.text)} },`);
      } else if (b.type === "h2") {
        lines.push(`      { type: "h2", text: ${jsString(b.text)} },`);
      } else if (b.type === "h3") {
        lines.push(`      { type: "h3", text: ${jsString(b.text)} },`);
      } else if (b.type === "ul") {
        lines.push(
          `      { type: "ul", items: ${JSON.stringify(b.items)} },`,
        );
      } else if (b.type === "image") {
        const alt = b.alt ? `, alt: ${jsString(b.alt)}` : "";
        lines.push(
          `      { type: "image", src: ${jsString(b.src)}${alt} },`,
        );
      }
    }

    lines.push("    ],");
    lines.push("  },");
  }

  lines.push("];\n");
  return lines.join("\n");
}

async function main() {
  const res = await fetch(CSV_URL, {
    headers: {
      Accept: "text/csv,text/plain,*/*",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch CSV: ${res.status} ${res.statusText}`);
  }
  const csvText = await res.text();

  const rows = csvParse(csvText);
  const header = rows.shift();
  if (!header) throw new Error("CSV is empty");

  const idx = Object.fromEntries(header.map((h, i) => [h, i]));

  const postsBySlug = new Map();

  for (const r of rows) {
    const title = r[idx["Name"]] ?? "";
    const slug = r[idx["Slug"]] ?? "";
    if (!slug || EXCLUDE_SLUGS.has(slug)) continue;

    const archived = String(r[idx["Archived"]] ?? "").toUpperCase() === "TRUE";
    const draft = String(r[idx["Draft"]] ?? "").toUpperCase() === "TRUE";
    if (archived || draft) continue;

    const publishedOn = r[idx["Published On"]] ?? r[idx["Created On"]] ?? "";
    const date = toIsoDate(publishedOn) ?? "2026-01-01";

    const excerpt = r[idx["Text and Meta Description"]] ?? "";
    const author = r[idx["Author"]] ?? "";
    const cover = r[idx["Thumbnail Image"]] ?? "";

    const rich = r[idx["Rich Text"]] ?? "";
    const content = htmlToBlocks(rich);

    const readingMinutes = estimateReadingMinutes(stripTags(rich));
    const category = guessCategory(slug, title);

    const candidate = {
      slug,
      title,
      date,
      excerpt: excerpt || title,
      readingMinutes,
      category,
      authorName: author || "",
      cover: cover || "",
      content,
    };

    const existing = postsBySlug.get(slug);
    if (!existing) {
      postsBySlug.set(slug, candidate);
      continue;
    }

    const existingTime = new Date(existing.date).getTime();
    const candidateTime = new Date(candidate.date).getTime();
    if (candidateTime >= existingTime) postsBySlug.set(slug, candidate);
  }

  const posts = Array.from(postsBySlug.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const outPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "data",
    "blog.webflow.ts",
  );

  fs.writeFileSync(outPath, generateTs(posts), "utf8");

  console.log(`Generated ${posts.length} posts -> ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
