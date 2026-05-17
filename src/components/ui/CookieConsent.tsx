"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tp-consent";
type ConsentValue = "accepted" | "rejected";

interface CookieConsentProps {
  title: string;
  body: string;
  acceptLabel: string;
  rejectLabel: string;
  learnMoreLabel: string;
  learnMoreHref: string;
}

function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage unavailable — silently ignore
  }
}

export default function CookieConsent(props: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const handle = (value: ConsentValue) => {
    writeConsent(value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("tp-consent-change", { detail: value }));
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={props.title}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-[max(env(safe-area-inset-bottom),16px)] sm:bottom-4 sm:left-auto sm:right-4 sm:px-0"
    >
      <div className="mx-auto max-w-md rounded-3xl bg-black p-5 text-[14px] text-white shadow-[0_18px_44px_rgba(0,0,0,0.35)]">
        <p className="font-semibold">{props.title}</p>
        <p className="mt-2 text-white/80">
          {props.body}{" "}
          <Link
            href={props.learnMoreHref}
            className="font-semibold text-[#FF6FA0] underline-offset-4 hover:underline"
          >
            {props.learnMoreLabel}
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="rounded-full bg-[#FF0A5B] px-5 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
          >
            {props.acceptLabel}
          </button>
          <button
            type="button"
            onClick={() => handle("rejected")}
            className="rounded-full border border-white/20 px-5 py-2 text-[12px] font-semibold text-white transition-colors hover:border-white/40"
          >
            {props.rejectLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
