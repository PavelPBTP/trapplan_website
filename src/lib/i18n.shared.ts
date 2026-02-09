export const SUPPORTED_LOCALES = ["en", "es", "it", "fr", "de", "zh"] as const;
export const DEFAULT_LOCALE = "en" as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(maybe: string): maybe is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(maybe);
}

export function stripLocalePrefix(pathname: string): string {
  if (!pathname) return "/";
  if (!pathname.startsWith("/")) return pathname;

  const seg = pathname.split("/").filter(Boolean)[0];
  if (!seg || !isLocale(seg)) return pathname;

  const stripped = pathname.replace(new RegExp(`^/${seg}(?=/|$)`), "");
  return stripped || "/";
}

export function withLocale(locale: Locale, href: string): string {
  if (!href) return href;

  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href)) return href;

  const hashIdx = href.indexOf("#");
  const queryIdx = href.indexOf("?");
  const cutIdx =
    hashIdx === -1 ? (queryIdx === -1 ? -1 : queryIdx) : queryIdx === -1 ? hashIdx : Math.min(hashIdx, queryIdx);

  const base = cutIdx === -1 ? href : href.slice(0, cutIdx);
  const suffix = cutIdx === -1 ? "" : href.slice(cutIdx);

  const basePath = base.startsWith("/") ? base : `/${base}`;
  const stripped = stripLocalePrefix(basePath);

  if (stripped === "/") return `/${locale}${suffix}`;
  return `/${locale}${stripped}${suffix}`;
}
