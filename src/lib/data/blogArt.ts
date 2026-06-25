import { artGradient } from "@/lib/data/gameArt";

/**
 * Designed gradient tiles for blog cards that have no real cover image.
 *
 * Most of the 100+ SEO posts ship without a bespoke cover. Rather than route
 * them through the dynamic /og image (which next/image refuses to optimize —
 * local paths with a query string return HTTP 400, producing broken thumbnails),
 * we render an on-brand gradient tile keyed by category. No network image, never
 * broken, consistent with the home "art tile" treatment.
 */
type Hue = { rgb: string; base: string };

const CATEGORY_ART: Record<string, Hue> = {
  Marketing: { rgb: "240,34,78", base: "#241317" }, // accent crimson
  Community: { rgb: "91,214,176", base: "#13201c" }, // mint
  Steam: { rgb: "64,124,220", base: "#141a26" }, // steam blue
  PR: { rgb: "178,126,46", base: "#231f15" }, // amber
  TikTok: { rgb: "224,80,150", base: "#241622" }, // magenta
  Influencers: { rgb: "150,110,240", base: "#1c1726" }, // violet
  YouTube: { rgb: "214,58,58", base: "#241616" }, // youtube red
};

const FALLBACK_ART: Hue = { rgb: "120,116,108", base: "#17150f" };

export function blogTileArt(category?: string): Hue {
  return (category && CATEGORY_ART[category]) || FALLBACK_ART;
}

/** Radial-hue-over-dark-linear background string for a cover-less blog card. */
export function blogGradient(category?: string): string {
  return artGradient(blogTileArt(category), { alpha: 0.5, pos: "32% 24%", spread: "60%" });
}

/**
 * Self-hosted topical cover images per category (dark gamer-editorial art),
 * served from /public/blog-assets/covers. Each category has N numbered variants;
 * a post is assigned one deterministically from its slug so the same post always
 * shows the same image while a category spreads across its variants.
 *
 * Keep these counts in sync with the files in public/blog-assets/covers.
 */
const COVER_VARIANTS: Record<string, number> = {
  marketing: 3,
  community: 3,
  steam: 3,
  pr: 3,
  tiktok: 3,
  influencers: 3,
  youtube: 2,
  twitch: 2,
  mobile: 2,
};

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Topical category cover for a post without a bespoke cover, or undefined. */
export function blogCover(category: string | undefined, slug: string): string | undefined {
  if (!category) return undefined;
  const key = category.toLowerCase();
  const count = COVER_VARIANTS[key];
  if (!count) return undefined;
  const variant = (hashSlug(slug) % count) + 1;
  return `/blog-assets/covers/${key}-${variant}.jpg`;
}
