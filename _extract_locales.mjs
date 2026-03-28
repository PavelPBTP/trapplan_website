import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "src", "lib", "copy.ts");
const OUT = join(__dirname, "src", "lib", "copy");

// Read the original copy.ts (with the truncation marker)
const content = readFileSync(SRC, "utf-8");
const lines = content.split("\n");

// Find the TRUNCATE_MARKER and remove everything from it onward
const markerIdx = lines.findIndex(l => l.includes("__TRUNCATE_MARKER__"));
if (markerIdx !== -1) {
  const cleanedLines = lines.slice(0, markerIdx);
  writeFileSync(SRC, cleanedLines.join("\n") + "\n");
  console.log(`Truncated copy.ts at line ${markerIdx + 1} (removed ${lines.length - markerIdx} lines)`);
}

// Now extract EN and ES locale files from a backup of the original data
// We need to read the original file before our edits. Since we've already
// modified copy.ts, we need to extract from the remaining old content.
// The old locale data is in lines[markerIdx+1..end] but mixed with the old
// COPY_PARTIAL structure. Let's reconstruct it.

// Actually, we need to find the original COPY_PARTIAL boundaries in the
// current (partially modified) file. The marker is at markerIdx, and
// everything after it is old COPY_PARTIAL content starting from en block.

// The old content after the marker starts with the en locale data (minus
// the first few lines which were already replaced by our edit).
// It's safer to read en/es data from the remaining lines.

// Find the start of each locale section in the old content
const oldContent = lines.slice(markerIdx + 1);

// For EN: the content starts right at the marker and goes to "  }," before "  es: {"
// For ES: starts at "  es: {" and goes to "  }," before "  it: {"
// But since we already created it/fr/de/zh files, we only need en and es.

// Find es start in old content
const esStartIdx = oldContent.findIndex(l => l.trimStart().startsWith("es: {"));
const itStartIdx = oldContent.findIndex(l => l.trimStart().startsWith("it: {"));

if (esStartIdx === -1 || itStartIdx === -1) {
  console.log("Could not find es/it boundaries in old content. The en/es files need manual creation.");
  console.log("esStartIdx:", esStartIdx, "itStartIdx:", itStartIdx);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });

// Extract EN content - from start of old content to line before esStartIdx
// The en content is wrapped in the COPY_PARTIAL structure: first lines are the
// continuation of "en: {" block content (we lost "en: {" in the edit)
const enLines = oldContent.slice(0, esStartIdx);
// Remove trailing "}," if present
let enBlock = enLines.join("\n").trim();
if (enBlock.endsWith(",")) enBlock = enBlock.slice(0, -1);
// This block is just the key-value pairs without the enclosing braces
// We need to wrap it in { }
const enContent = `import type { CopyKey } from "@/lib/copy";

const en: Record<CopyKey, string> = {
${enBlock}
};

export default en;
`;
writeFileSync(join(OUT, "en.ts"), enContent);
console.log("Wrote en.ts");

// Extract ES content
const esLines = oldContent.slice(esStartIdx, itStartIdx);
let esBlock = esLines.join("\n").trim();
// Remove "es: " prefix
const esColonIdx = esBlock.indexOf(": ");
esBlock = esBlock.slice(esColonIdx + 2);
if (esBlock.endsWith(",")) esBlock = esBlock.slice(0, -1);

const esContent = `import type { CopyKey } from "@/lib/copy";

const es: Partial<Record<CopyKey, string>> = ${esBlock};

export default es;
`;
writeFileSync(join(OUT, "es.ts"), esContent);
console.log("Wrote es.ts");

console.log("Done! Now run: npx tsc --noEmit to verify TypeScript compiles.");
