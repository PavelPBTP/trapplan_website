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
