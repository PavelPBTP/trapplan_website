"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  /** Custom number formatter; defaults to en-US grouping. */
  format?: (n: number) => string;
  className?: string;
}

const defaultFormat = (n: number) => n.toLocaleString("en-US");

/**
 * Animates 0 → value (easeOutCubic) when scrolled into view, with a guaranteed
 * final value. SSR renders the final value so it's correct without JS and for
 * crawlers. Respects prefers-reduced-motion.
 */
export default function CountUp({
  value,
  durationMs = 950,
  prefix = "",
  suffix = "",
  format = defaultFormat,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    el.textContent = `${prefix}${format(0)}${suffix}`;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = `${prefix}${format(Math.round(value * eased))}${suffix}`;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = `${prefix}${format(value)}${suffix}`;
          };
          requestAnimationFrame(step);
          // Guarantee the final value even if rAF is throttled (background tab).
          setTimeout(() => {
            el.textContent = `${prefix}${format(value)}${suffix}`;
          }, durationMs + 250);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs, prefix, suffix, format]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(value)}${suffix}`}
    </span>
  );
}
