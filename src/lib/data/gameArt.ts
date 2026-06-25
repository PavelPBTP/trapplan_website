/**
 * Per-game art configuration for the "art tile" component.
 *
 * Each tile renders a designed gradient fallback (radial hue over a warm dark
 * linear gradient) so it never looks broken, with an optional real/mock cover
 * image layered on top. Mock covers live in /public/mockups and are placeholders
 * for licensed key art.
 */

export interface GameArt {
  /** Stable id used as a lookup key. */
  id: string;
  /** Oversized ghost title baked into the tile. */
  ghostName: string;
  /** Mono platform/studio pill, top-left. */
  tag: string;
  /** Radial hue as an "r,g,b" triplet (alpha applied per-context). */
  rgb: string;
  /** Warm dark base color for the linear gradient. */
  base: string;
  /** Portrait cover (hero band). */
  portrait?: string;
  /** Landscape cover (case cards). */
  landscape?: string;
}

export const GAME_ART = {
  misery: {
    id: "misery",
    ghostName: "Misery",
    tag: "STEAM",
    rgb: "176,42,48",
    base: "#241a17",
    portrait: "/mockups/misery.png",
  },
  warthunder: {
    id: "warthunder",
    ghostName: "War Thunder",
    tag: "GAIJIN",
    rgb: "178,126,46",
    base: "#231f15",
    portrait: "/mockups/warthunder.png",
    landscape: "/mockups/warthunder-l.png",
  },
  warthunderEu: {
    id: "warthunderEu",
    ghostName: "War Thunder · EU",
    tag: "GAIJIN",
    rgb: "178,126,46",
    base: "#231f15",
    landscape: "/mockups/warthunder-eu.png",
  },
  crossout: {
    id: "crossout",
    ghostName: "CrossOut",
    tag: "GAIJIN",
    rgb: "194,90,42",
    base: "#241c16",
    portrait: "/mockups/crossout.png",
    landscape: "/mockups/crossout-l.png",
  },
  warships: {
    id: "warships",
    ghostName: "World of Warships",
    tag: "WARGAMING",
    rgb: "64,124,138",
    base: "#161f20",
    portrait: "/mockups/warships.png",
    landscape: "/mockups/warships-l.png",
  },
  enlisted: {
    id: "enlisted",
    ghostName: "Enlisted",
    tag: "GAIJIN",
    rgb: "116,130,78",
    base: "#1d2017",
    portrait: "/mockups/enlisted.png",
    landscape: "/mockups/enlisted-l.png",
  },
  briefs: {
    id: "briefs",
    ghostName: "Creator briefs",
    tag: "FEATURED CASE",
    rgb: "176,42,48",
    base: "#241a17",
    landscape: "/mockups/briefs.png",
  },
} as const satisfies Record<string, GameArt>;

export type GameArtId = keyof typeof GAME_ART;

interface GradientOptions {
  alpha?: number;
  /** radial center, e.g. "35% 22%" */
  pos?: string;
  /** radial spread, e.g. "62%" */
  spread?: string;
}

/** Maps each case-study slug to a game-art tile. */
export const CASE_ART: Record<string, GameArtId> = {
  "created-a-brief-for-youtube-and-twitch": "briefs",
  "dedicated-ad-campaign-for-the-czech-audience": "warships",
  "performance-based-campaigns-for-warthunder": "warthunder",
  "twitch-ad-campaigns-for-crossout": "crossout",
  "twitch-ad-campaigns-for-enlisted": "enlisted",
  "youtube-ad-campaigns-for-warthunder-in-europe": "warthunderEu",
  "youtube-ad-campaigns-for-world-of-tanks-in-usa": "warthunder",
  "youtube-ad-campaigns-for-world-of-warships-in-europe": "warships",
};

/** Curated set for the Home cases grid: first entry is the featured case. */
export const HOME_CASE_SLUGS = [
  "created-a-brief-for-youtube-and-twitch",
  "dedicated-ad-campaign-for-the-czech-audience",
  "performance-based-campaigns-for-warthunder",
  "twitch-ad-campaigns-for-crossout",
  "twitch-ad-campaigns-for-enlisted",
  "youtube-ad-campaigns-for-warthunder-in-europe",
] as const;

/** Compose the radial-hue-over-dark-linear background string for a game tile. */
export function artGradient(
  game: Pick<GameArt, "rgb" | "base">,
  { alpha = 0.5, pos = "35% 22%", spread = "62%" }: GradientOptions = {},
): string {
  return `radial-gradient(ellipse at ${pos}, rgba(${game.rgb},${alpha}), transparent ${spread}), linear-gradient(160deg, ${game.base}, #0c0b0a)`;
}
