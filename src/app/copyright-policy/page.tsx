import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/copyright-policy"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/copyright-policy"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "legal.copyright.meta_title");
  const description = t(locale, "legal.copyright.meta_desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/copyright-policy"), origin).toString(),
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
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

export default async function CopyrightPolicyPage() {
  const locale = await getRequestLocale();
  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            {t(locale, "legal.copyright.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            {t(locale, "legal.copyright.lede")}
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-black/10 bg-white px-7 py-8">
            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">
                {t(locale, "legal.copyright.section1.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                {t(locale, "legal.copyright.section1.body")}
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">
                {t(locale, "legal.copyright.section2.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                {t(locale, "legal.copyright.section2.body")}
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">
                {t(locale, "legal.copyright.section3.title")}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                {t(locale, "legal.copyright.section3.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
