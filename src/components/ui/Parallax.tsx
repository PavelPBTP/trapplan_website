"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface ParallaxProps {
  /** Translate factor applied to scrollY (design uses -0.06). */
  factor?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Translates its content vertically with scroll. Disabled for reduced motion. */
export default function Parallax({ factor = -0.06, className, style, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el.style.transform = `translateY(${(window.scrollY || 0) * factor}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
