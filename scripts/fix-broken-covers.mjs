import { readFile, writeFile, readdir } from "node:fs/promises";

const POSTS_FILES = [
  "src/lib/data/blog.posts.ts",
  "src/lib/data/blog.de.ts",
  "src/lib/data/blog.es.ts",
  "src/lib/data/blog.fr.ts",
  "src/lib/data/blog.it.ts",
  "src/lib/data/blog.zh.ts",
];
const ASSETS_DIR = "public/blog-assets";
const REF_RE = /\/blog-assets\/([a-f0-9]+)\.([a-z]+)/g;

async function processFile(file, present, presentByHash) {
  let src = await readFile(file, "utf8");
  let extFixed = 0;

  src = src.replace(REF_RE, (match, hash, ext) => {
    const filename = `${hash}.${ext}`;
    if (present.has(filename)) return match;
    const alt = presentByHash.get(hash);
    if (alt && alt !== filename) {
      extFixed++;
      return `/blog-assets/${alt}`;
    }
    return match;
  });

  let coverRemoved = 0;
  src = src.replace(
    /^\s*cover:\s*"\/blog-assets\/([a-f0-9]+)\.([a-z]+)"\s*,?\s*$/gm,
    (line, hash, ext) => {
      const filename = `${hash}.${ext}`;
      if (present.has(filename)) return line;
      coverRemoved++;
      return "";
    },
  );

  let blockRemoved = 0;
  src = src.replace(
    /^\s*\{[^{}]*?type:\s*"image"[^{}]*?src:\s*"\/blog-assets\/([a-f0-9]+)\.([a-z]+)"[^{}]*?\}\s*,?\s*$/gm,
    (block, hash, ext) => {
      const filename = `${hash}.${ext}`;
      if (present.has(filename)) return block;
      blockRemoved++;
      return "";
    },
  );

  await writeFile(file, src);
  return { coverRemoved, blockRemoved, extFixed };
}

async function main() {
  const present = new Set(await readdir(ASSETS_DIR));
  const presentByHash = new Map();
  for (const name of present) {
    const dot = name.lastIndexOf(".");
    if (dot > 0) presentByHash.set(name.slice(0, dot), name);
  }

  for (const file of POSTS_FILES) {
    const r = await processFile(file, present, presentByHash);
    if (r.coverRemoved + r.blockRemoved + r.extFixed > 0) {
      console.log(
        `${file}: cover -${r.coverRemoved}, block -${r.blockRemoved}, ext fixed ${r.extFixed}`,
      );
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
