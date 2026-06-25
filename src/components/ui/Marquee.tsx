interface MarqueeProps {
  items: string[];
  /** Animation duration in seconds. */
  durationSec?: number;
}

function MarqueeTrack({ items, ariaHidden = false }: { items: string[]; ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-[34px] pr-[34px]" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center gap-[34px]">
          {item}
          <span className="text-teal" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

/** Infinite horizontal ticker (pure CSS, reduced-motion safe via globals). */
export default function Marquee({ items, durationSec = 32 }: MarqueeProps) {
  return (
    <div className="overflow-hidden border-y border-[rgba(244,241,234,0.07)] bg-void-alt py-[18px]">
      <div
        className="flex w-max font-anton text-[26px] uppercase tracking-[0.01em] text-[#2A2722]"
        style={{ animation: `tp-marquee ${durationSec}s linear infinite` }}
      >
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} ariaHidden />
      </div>
    </div>
  );
}
