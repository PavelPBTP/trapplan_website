"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

// One shared observer for every Reveal on the page.
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = "in";
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  return sharedObserver;
}

interface RevealProps {
  as?: ElementType;
  /** Per-item stagger delay in ms (clamped by the caller). */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Fade-up on scroll. SSR renders children with no hidden state (visible without
 * JS / for crawlers); on mount, below-the-fold items are hidden then revealed
 * when scrolled into view. Respects prefers-reduced-motion.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.dataset.reveal = "in";
      return;
    }

    // Already in (or near) the viewport on mount → show immediately, no flash.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.dataset.reveal = "in";
      return;
    }

    el.dataset.reveal = ""; // hidden
    const observer = getObserver();
    if (!observer) {
      el.dataset.reveal = "in";
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
