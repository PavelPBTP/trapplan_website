import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import SteamFestivalPlannerClient from "./steam-festival-planner-client";

export const metadata: Metadata = {
  title: "Steam Festival Planner",
  description:
    "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
  alternates: {
    canonical: "/steam-festival-planner",
  },
  openGraph: {
    type: "website",
    url: "/steam-festival-planner",
    title: "Steam Festival Planner",
    description:
      "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Festival Planner",
    description:
      "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
  },
};

export default function SteamFestivalPlannerPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <SteamFestivalPlannerClient />
        <InternalLinksSection currentPath="/steam-festival-planner" variant="compact" />
        <Footer />
      </main>
    </>
  );
}
