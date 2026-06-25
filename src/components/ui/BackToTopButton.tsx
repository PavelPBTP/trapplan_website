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
      className="fixed bottom-24 left-5 z-40 hidden items-center justify-center rounded-full border border-[rgba(244,241,234,0.18)] bg-[rgba(19,17,16,0.9)] px-3 py-3 text-bone backdrop-blur transition-colors hover:border-[rgba(244,241,234,0.4)] md:inline-flex"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
