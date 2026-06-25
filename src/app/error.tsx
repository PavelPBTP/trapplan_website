"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="font-display text-[32px] font-bold text-bone">Something went wrong</h2>
      <p className="mt-3 text-[14px] text-secondary">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-6 inline-flex h-[52px] items-center gap-2 rounded-[6px] bg-[var(--accent)] px-7 font-display text-[15px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06]"
      >
        Try again
      </button>
    </div>
  );
}
