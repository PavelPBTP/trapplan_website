import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import SteamFestivalPlannerClient from "./steam-festival-planner-client";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = withLocale(locale, "/steam-festival-planner");
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, withLocale(l, "/steam-festival-planner")]),
  ) as Record<string, string>;

  const title = t(locale, "seo.steam_festival_planner.title");
  const description = t(locale, "seo.steam_festival_planner.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SteamFestivalPlannerPage() {
  const locale = await getRequestLocale();

  return (
    <>
      <main className="bg-[#F3F3F3]">
        <SteamFestivalPlannerClient locale={locale} />
        <Footer />
      </main>
    </>
  );
}
