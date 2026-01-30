"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton({
  minScrollY = 600,
}: {
  minScrollY?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= minScrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minScrollY]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed left-5 bottom-24 z-40 hidden items-center justify-center rounded-full border border-black/10 bg-white/95 px-3 py-3 text-black shadow-[0_18px_40px_rgba(0,0,0,0.10)] backdrop-blur transition-colors hover:bg-white md:inline-flex"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
