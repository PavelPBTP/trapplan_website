"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VercelAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false },
);
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights),
  { ssr: false },
);

const STORAGE_KEY = "tp-consent";

function readConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export default function ConsentGatedAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(readConsent());

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setEnabled(detail === "accepted");
    };
    window.addEventListener("tp-consent-change", handler);
    return () => window.removeEventListener("tp-consent-change", handler);
  }, []);

  if (!enabled) return null;
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}
