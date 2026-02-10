import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import SteamPricingPlannerClient from "./steam-pricing-planner-client";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/steam-pricing-planner"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/steam-pricing-planner"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "seo.steam_pricing_planner.title");
  const description = t(locale, "seo.steam_pricing_planner.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/steam-pricing-planner"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [
        {
          url: new URL("/og", origin).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

export default async function SteamPricingPlannerPage() {
  const locale = await getRequestLocale();

  return (
    <>
      <main className="bg-[#F3F3F3]">
        <SteamPricingPlannerClient locale={locale} />
        <Footer />
      </main>
    </>
  );
}
