"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/components/layout/headerTypes";

interface MobileNavProps {
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}

export default function MobileNav({ navItems, ctaHref, ctaLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-[rgba(244,241,234,0.18)] text-bone"
      >
        <span className="relative block h-[14px] w-[18px]">
          <span
            className="absolute left-0 block h-[1.5px] w-full bg-current transition-transform"
            style={{ top: open ? "6px" : "1px", transform: open ? "rotate(45deg)" : "none" }}
          />
          <span
            className="absolute left-0 top-[6px] block h-[1.5px] w-full bg-current transition-opacity"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute left-0 block h-[1.5px] w-full bg-current transition-transform"
            style={{ top: open ? "6px" : "11px", transform: open ? "rotate(-45deg)" : "none" }}
          />
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-[rgba(12,11,10,0.97)] backdrop-blur-[14px]"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-[rgba(244,241,234,0.07)] py-4 font-display text-[22px] font-semibold no-underline"
                style={{ color: item.teal ? "#5BD6B0" : "#F4F1EA" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={close}
              className="mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-[6px] bg-[var(--accent)] font-display text-[16px] font-semibold text-[var(--accent-on)] no-underline"
            >
              {ctaLabel} <span className="text-[13px]">↗</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
