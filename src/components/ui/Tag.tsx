import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  /** Mono tags (used on Publishing cards) vs. body tags (used on services). */
  mono?: boolean;
  className?: string;
}

/** Hairline-bordered pill used for service/capability tags. */
export default function Tag({ children, mono = false, className = "" }: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-[6px] border border-[rgba(244,241,234,0.12)] px-[12px] py-[6px]",
        mono
          ? "font-mono text-[12px] text-[#c2bcb1]"
          : "text-[12.5px] text-secondary",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
