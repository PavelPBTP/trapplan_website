import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import SteamPricingPlannerClient from "./steam-pricing-planner-client";

export const metadata: Metadata = {
  title: "Steam Pricing Planner & Calculator",
  description:
    "Calculate recommended Steam regional prices using Purchasing Power Parity (PPP) and live FX rates.",
  alternates: {
    canonical: "/steam-pricing-planner",
  },
  openGraph: {
    type: "website",
    url: "/steam-pricing-planner",
    title: "Steam Pricing Planner & Calculator",
    description:
      "Calculate recommended Steam regional prices using Purchasing Power Parity (PPP) and live FX rates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Pricing Planner & Calculator",
    description:
      "Calculate recommended Steam regional prices using Purchasing Power Parity (PPP) and live FX rates.",
  },
};

export default function SteamPricingPlannerPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <SteamPricingPlannerClient />
        <Footer />
      </main>
    </>
  );
}
