export function clampText(s: string, maxLen: number): string {
  const t = (s ?? "").trim();
  if (t.length <= maxLen) return t;
  return t.slice(0, maxLen - 1).trimEnd() + "…";
}

export function clampWithSuffix(base: string, suffix: string, maxLen: number): string {
  const b = (base ?? "").trim();
  const s = (suffix ?? "").trim();
  if (!s) return clampText(b, maxLen);
  const combined = `${b} ${s}`.trim();
  if (combined.length <= maxLen) return combined;
  const maxBase = Math.max(0, maxLen - s.length - 2);
  const clippedBase = b.length > maxBase ? b.slice(0, Math.max(0, maxBase - 1)).trimEnd() + "…" : b;
  return `${clippedBase} ${s}`.trim();
}
