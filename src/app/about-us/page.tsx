import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/about-us"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/about-us"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "seo.about.title");
  const description = t(locale, "seo.about.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/about-us"), origin).toString(),
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

function NumberBadge({ n }: { n: string }) {
  return (
    <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/50">{n}</div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[32px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[40px]">
      {children}
    </h2>
  );
}

export default async function AboutUsPage() {
  const locale = await getRequestLocale();
  const principles = [
    {
      n: "01",
      title: t(locale, "about.principle.01.title"),
      body: t(locale, "about.principle.01.body"),
    },
    {
      n: "02",
      title: t(locale, "about.principle.02.title"),
      body: t(locale, "about.principle.02.body"),
    },
    {
      n: "03",
      title: t(locale, "about.principle.03.title"),
      body: t(locale, "about.principle.03.body"),
    },
  ];

  const values = [
    {
      n: "04",
      title: t(locale, "about.value.04.title"),
      body: t(locale, "about.value.04.body"),
    },
    {
      n: "05",
      title: t(locale, "about.value.05.title"),
      body: t(locale, "about.value.05.body"),
    },
    {
      n: "06",
      title: t(locale, "about.value.06.title"),
      body: t(locale, "about.value.06.body"),
    },
  ];

  return (
    <main className="bg-[#F3F3F3]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_20%,rgba(255,10,91,0.14),transparent_55%),radial-gradient(circle_at_76%_10%,rgba(0,0,0,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <Breadcrumbs
            trail={[
              { name: t(locale, "ui.breadcrumb.home"), href: withLocale(locale, "/") },
              { name: t(locale, "nav.about_us"), href: withLocale(locale, "/about-us") },
            ]}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <NumberBadge n="01" />
            <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
          </div>

          <h1 className="mt-8 text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[56px]">
            {t(locale, "about.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/65">
            {t(locale, "about.hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={withLocale(locale, "/form")}
              className="inline-flex items-center justify-center rounded-full bg-[#FF0A5B] px-7 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
            >
              {t(locale, "about.hero.cta_primary")}
            </Link>
            <Link
              href={withLocale(locale, "/blog")}
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3 text-[13px] font-semibold text-black/80 transition-colors duration-200 hover:bg-black/5 hover:text-black"
            >
              {t(locale, "about.hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="02" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>{t(locale, "about.how_we_think.title")}</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-black/65">
                  {t(locale, "about.how_we_think.body")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4">
                {principles.map((p) => (
                  <div
                    key={p.n}
                    className="rounded-2xl border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/60">
                          {p.n}
                        </div>
                        <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                          {p.title}
                        </div>
                        <p className="mt-3 text-[14px] leading-6 text-black/60">{p.body}</p>
                      </div>
                      <div className="mt-1 h-2 w-2 flex-none rounded-full bg-[#FF0A5B]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="03" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>{t(locale, "about.what_you_get.title")}</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-black/65">
                  {t(locale, "about.what_you_get.body")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/60">
                    {t(locale, "about.outcome.label")}
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    {t(locale, "about.outcome.01.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    {t(locale, "about.outcome.01.body")}
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/60">
                    {t(locale, "about.outcome.label")}
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    {t(locale, "about.outcome.02.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    {t(locale, "about.outcome.02.body")}
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/60">
                    {t(locale, "about.outcome.label")}
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    {t(locale, "about.outcome.03.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    {t(locale, "about.outcome.03.body")}
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/60">
                    {t(locale, "about.outcome.label")}
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    {t(locale, "about.outcome.04.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    {t(locale, "about.outcome.04.body")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="04" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>{t(locale, "about.principles.title")}</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-white/65">
                  {t(locale, "about.principles.body")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {values.map((v) => (
                  <div
                    key={v.n}
                    className="rounded-2xl border border-white/10 bg-white/5 px-7 py-7"
                  >
                    <div className="text-[12px] font-extrabold tracking-[0.18em] text-white/40">
                      {v.n}
                    </div>
                    <div className="mt-3 text-[18px] font-extrabold tracking-tight text-white">
                      {v.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-6 text-white/65">{v.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={withLocale(locale, "/form")}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF0A5B] px-7 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  {t(locale, "cta.lets_talk")}
                </Link>
                <a
                  href="mailto:hello@trapplan.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-7 py-3 text-[13px] font-semibold text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  hello@trapplan.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
