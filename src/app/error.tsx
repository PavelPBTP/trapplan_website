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
      <h2 className="text-[32px] font-extrabold text-black">Something went wrong</h2>
      <p className="mt-3 text-[14px] text-black/60">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-6 inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
      >
        Try again
      </button>
    </div>
  );
}
