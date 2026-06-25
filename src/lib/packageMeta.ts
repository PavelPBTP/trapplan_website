import type { Metadata } from "next";
import { PACKAGE_DETAILS } from "@/lib/data/packageDetails";
import { SUPPORTED_LOCALES, withLocale, type Locale } from "@/lib/i18n.shared";

const ORIGIN = "https://www.trapplan.com";

/** Builds canonical + hreflang + OG/Twitter metadata for a package detail page. */
export function buildPackageMetadata(locale: Locale, href: string): Metadata {
  const detail = PACKAGE_DETAILS[href];
  const title = detail.metaTitle;
  const description = detail.metaDescription;
  const canonical = new URL(withLocale(locale, href), ORIGIN).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, href), ORIGIN).toString()]),
  ) as Record<string, string>;
  const ogImage = new URL("/og", ORIGIN).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": new URL(withLocale("en", href), ORIGIN).toString() },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: detail.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
