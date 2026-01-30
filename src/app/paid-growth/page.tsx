import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import PaidGrowthClient from "./paid-growth-client";

export const metadata: Metadata = {
  title: "Paid Growth for Steam and Console Games",
  description:
    "High-ticket paid growth for Steam and Console games. Channel strategy, clean tracking, attribution, and a structured handoff.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/paid-growth",
  },
  openGraph: {
    type: "website",
    url: "/paid-growth",
    title: "Paid Growth for Steam and Console Games",
    description:
      "High-ticket paid growth for Steam and Console games. Channel strategy, clean tracking, attribution, and a structured handoff.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Growth for Steam and Console Games",
    description:
      "High-ticket paid growth for Steam and Console games. Channel strategy, clean tracking, attribution, and a structured handoff.",
  },
};

export default function PaidGrowthPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <PaidGrowthClient />
        <Footer />
      </main>
    </>
  );
}
