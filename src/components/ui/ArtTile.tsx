import Image from "next/image";
import type { CSSProperties } from "react";

interface ArtTileProps {
  /** Full CSS background string (radial hue over dark linear). See artGradient(). */
  gradient: string;
  /** Oversized ghost title baked into the tile. */
  ghostName?: string;
  /** Ghost title font-size in px. */
  ghostSize?: number;
  /** Ghost title bottom offset in px (defaults to design's 14px). */
  ghostBottom?: number;
  /** Mono platform/studio pill, top-left. */
  tag?: string;
  /** Real/mock cover image source. */
  cover?: string;
  coverAlt?: string;
  /** Pass true for above-the-fold tiles. */
  priority?: boolean;
  /** next/image sizes hint. */
  sizes?: string;
  /** Border radius in px. */
  radius?: number;
  /** Extra classes (aspect ratio / sizing). */
  className?: string;
  style?: CSSProperties;
}

/**
 * The signature "art tile": a designed gradient fallback that never looks
 * broken, with optional cover art layered over it. Hover-zoom is driven by an
 * ancestor carrying the `.art-zoom` class (see globals.css).
 */
export default function ArtTile({
  gradient,
  ghostName,
  ghostSize = 24,
  ghostBottom,
  tag,
  cover,
  coverAlt = "",
  priority = false,
  sizes = "(max-width: 720px) 50vw, 20vw",
  radius = 12,
  className = "",
  style,
}: ArtTileProps) {
  return (
    <div
      className={`gart ${className}`}
      style={{ background: gradient, borderRadius: radius, ...style }}
    >
      <div className="gscan" />
      {ghostName ? (
        <div
          className="gname"
          style={{ fontSize: ghostSize, ...(ghostBottom ? { bottom: ghostBottom } : null) }}
        >
          {ghostName}
        </div>
      ) : null}
      {tag ? <span className="gtag">{tag}</span> : null}
      {cover ? (
        <Image
          className="gcover"
          src={cover}
          alt={coverAlt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", borderRadius: radius }}
        />
      ) : null}
    </div>
  );
}
