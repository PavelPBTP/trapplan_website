"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_ON_SUFFIXES = ["/form"];

interface MobileCTAProps {
  href: string;
  label: string;
}

export default function MobileCTA({ href, label }: MobileCTAProps) {
  const pathname = usePathname();
  if (HIDE_ON_SUFFIXES.some((s) => pathname.endsWith(s) || pathname.endsWith(`${s}/`))) {
    return null;
  }
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:hidden"
    >
      <Link
        href={href}
        className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0A5B] px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(255,10,91,0.35)] transition-colors hover:bg-[#E6004E]"
      >
        {label}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
