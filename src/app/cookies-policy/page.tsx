import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/cookies-policy"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/cookies-policy"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = `${t(locale, "legal.cookies.title")} — Trap Plan`;
  const description = t(locale, "legal.cookies.lede");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/cookies-policy"), origin).toString(),
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

export default async function CookiesPolicyPage() {
  const locale = await getRequestLocale();
  const sections: { titleKey: "legal.cookies.s1.title" | "legal.cookies.s2.title" | "legal.cookies.s3.title" | "legal.cookies.s4.title"; bodyKey: "legal.cookies.s1.body" | "legal.cookies.s2.body" | "legal.cookies.s3.body" | "legal.cookies.s4.body" }[] = [
    { titleKey: "legal.cookies.s1.title", bodyKey: "legal.cookies.s1.body" },
    { titleKey: "legal.cookies.s2.title", bodyKey: "legal.cookies.s2.body" },
    { titleKey: "legal.cookies.s3.title", bodyKey: "legal.cookies.s3.body" },
    { titleKey: "legal.cookies.s4.title", bodyKey: "legal.cookies.s4.body" },
  ];

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pt-10 pb-14 lg:px-10">
          <Breadcrumbs
            trail={[
              { name: t(locale, "ui.breadcrumb.home"), href: withLocale(locale, "/") },
              { name: t(locale, "legal.cookies.title"), href: withLocale(locale, "/cookies-policy") },
            ]}
            className="mb-6"
          />
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            {t(locale, "legal.cookies.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            {t(locale, "legal.cookies.lede")}
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-black/10 bg-white px-7 py-8">
            {sections.map((s) => (
              <div key={s.titleKey}>
                <h2 className="text-[18px] font-bold tracking-tight text-black">
                  {t(locale, s.titleKey)}
                </h2>
                <p className="mt-2 text-[15px] leading-7 text-black/65">
                  {t(locale, s.bodyKey)}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13px] text-black/55">
            Questions about cookies?{" "}
            <a href="mailto:privacy@trapplan.com" className="font-semibold text-[#FF0A5B] hover:underline">
              privacy@trapplan.com
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
