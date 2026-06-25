import type { ReactNode } from "react";

interface EyebrowProps {
  /** Section number (e.g. "01"); rendered in the accent color. */
  number?: string;
  label: ReactNode;
  className?: string;
}

/**
 * Numbered section eyebrow: `01 — Label` with an accent number, a hairline
 * dash, and a secondary label.
 */
export function Eyebrow({ number, label, className = "" }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-[14px] ${className}`}>
      {number ? (
        <span className="font-display text-[13px] font-bold text-[var(--accent)]">
          {number}
        </span>
      ) : null}
      <span className="h-px w-[30px] bg-[rgba(244,241,234,0.2)]" />
      <span className="text-[14px] text-secondary">{label}</span>
    </div>
  );
}

interface MonoEyebrowProps {
  label: ReactNode;
  /** Show the glowing accent status dot. */
  dot?: boolean;
  className?: string;
}

/**
 * Uppercase mono eyebrow in the accent color, optionally with a glowing status
 * dot. Used for "Also from TrapPlan", "Now accepting submissions", etc.
 */
export function MonoEyebrow({ label, dot = false, className = "" }: MonoEyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-[9px] font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--accent)] ${className}`}
    >
      {dot ? (
        <span
          className="h-[7px] w-[7px] rounded-full bg-[var(--accent)]"
          style={{ boxShadow: "0 0 12px var(--accent)" }}
        />
      ) : null}
      {label}
    </div>
  );
}
