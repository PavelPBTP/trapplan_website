import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/content-rules"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/content-rules"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "legal.content_rules.meta_title");
  const description = t(locale, "legal.content_rules.meta_desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/content-rules"), origin).toString(),
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

export default async function ContentRulesPage() {
  const locale = await getRequestLocale();
  return (
    <main>
      <section>
        <div className="mx-auto max-w-[920px] px-6 py-16 lg:px-8">
          <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-bone sm:text-[48px]">
            {t(locale, "legal.content_rules.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-secondary">
            {t(locale, "legal.content_rules.lede")}
          </p>

          <div className="mt-10 space-y-8 rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card px-7 py-8">
            <div>
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.015em] text-bone">
                {t(locale, "legal.content_rules.section1.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.7] text-secondary">
                {t(locale, "legal.content_rules.section1.body")}
              </p>
            </div>

            <div>
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.015em] text-bone">
                {t(locale, "legal.content_rules.section2.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.7] text-secondary">
                {t(locale, "legal.content_rules.section2.body")}
              </p>
            </div>

            <div>
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.015em] text-bone">
                {t(locale, "legal.content_rules.section3.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.7] text-secondary">
                {t(locale, "legal.content_rules.section3.body")}
              </p>
            </div>

            <div>
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.015em] text-bone">
                {t(locale, "legal.content_rules.section4.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.7] text-secondary">
                {t(locale, "legal.content_rules.section4.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
