import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import CreativeContentPipelineClient from "./creative-content-pipeline-client";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/creative-content-pipeline"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/creative-content-pipeline"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "seo.creative_content_pipeline.title");
  const description = t(locale, "seo.creative_content_pipeline.desc");

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/creative-content-pipeline"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: new URL("/og", origin).toString(), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

export default function CreativeContentPipelinePage() {
  return (
    <>
      <main className="bg-void-alt">
        <CreativeContentPipelineClient />
        <Footer />
      </main>
    </>
  );
}
