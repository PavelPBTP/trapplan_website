import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import CreativeContentPipelineClient from "./creative-content-pipeline-client";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = withLocale(locale, "/creative-content-pipeline");
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, withLocale(l, "/creative-content-pipeline")]),
  ) as Record<string, string>;

  const title = t(locale, "seo.creative_content_pipeline.title");
  const description = t(locale, "seo.creative_content_pipeline.desc");

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
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

export default function CreativeContentPipelinePage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <CreativeContentPipelineClient />
        <Footer />
      </main>
    </>
  );
}
