export function clampText(s: string, maxLen: number): string {
  const t = (s ?? "").trim();
  if (t.length <= maxLen) return t;
  return t.slice(0, maxLen - 1).trimEnd() + "…";
}

export const SITE_ORIGIN = "https://www.trapplan.com";

export interface Crumb {
  name: string;
  /** Absolute URL; omit for the current (last) item. */
  url?: string;
}

/** Builds a schema.org BreadcrumbList JSON-LD object. */
export function breadcrumbList(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: it.url } : {}),
    })),
  };
}

/** Builds a schema.org ItemList JSON-LD object from ordered URLs. */
export function itemList(name: string, urls: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: urls.length,
    itemListElement: urls.map((url, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url,
    })),
  };
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
