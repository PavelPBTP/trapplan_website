import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { stagger } from "@/lib/stagger";
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

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[40px]">
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

  const outcomes = [
    { title: t(locale, "about.outcome.01.title"), body: t(locale, "about.outcome.01.body") },
    { title: t(locale, "about.outcome.02.title"), body: t(locale, "about.outcome.02.body") },
    { title: t(locale, "about.outcome.03.title"), body: t(locale, "about.outcome.03.body") },
    { title: t(locale, "about.outcome.04.title"), body: t(locale, "about.outcome.04.body") },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-[-40px] h-[460px] w-[860px] -translate-x-1/2 opacity-50 blur-[20px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
          }}
        />
        <div className="tp-grain" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-14 pt-[88px] lg:px-8">
          <Eyebrow number="01" label={t(locale, "nav.about_us")} className="mb-[22px]" />
          <h1 className="mb-5 max-w-[820px] font-display text-[44px] font-bold leading-[1.02] tracking-[-0.03em] text-bone text-balance md:text-[56px]">
            {t(locale, "about.hero.title")}
          </h1>
          <p className="mb-10 max-w-2xl text-[18px] leading-[1.6] text-secondary">
            {t(locale, "about.hero.subtitle")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={withLocale(locale, "/form")} glow>
              {t(locale, "about.hero.cta_primary")} ↗
            </Button>
            <Button href={withLocale(locale, "/blog")} variant="secondary">
              {t(locale, "about.hero.cta_secondary")}
            </Button>
          </div>
        </div>
      </section>

      {/* How we think */}
      <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow number="02" label={t(locale, "about.how_we_think.title")} className="mb-6" />
            <SectionTitle>{t(locale, "about.how_we_think.title")}</SectionTitle>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-secondary">
              {t(locale, "about.how_we_think.body")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-7">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={stagger(i)} className="block">
                <div className="flex items-start justify-between gap-4 rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card px-7 py-7">
                  <div>
                    <div className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent)]">{p.n}</div>
                    <div className="mt-3 font-display text-[18px] font-semibold text-bone">{p.title}</div>
                    <p className="mt-3 text-[14px] leading-[1.6] text-secondary">{p.body}</p>
                  </div>
                  <div className="mt-1 h-2 w-2 flex-none rounded-full bg-[var(--accent)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-[rgba(244,241,234,0.07)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow number="03" label={t(locale, "about.what_you_get.title")} className="mb-6" />
            <SectionTitle>{t(locale, "about.what_you_get.title")}</SectionTitle>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-secondary">
              {t(locale, "about.what_you_get.body")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={stagger(i)} className="block">
                <div className="h-full rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-[rgba(244,241,234,0.04)] px-7 py-7">
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                    {t(locale, "about.outcome.label")}
                  </div>
                  <div className="mt-3 font-display text-[18px] font-semibold text-bone">{o.title}</div>
                  <p className="mt-3 text-[14px] leading-[1.6] text-secondary">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow number="04" label={t(locale, "about.principles.title")} className="mb-6" />
            <SectionTitle>{t(locale, "about.principles.title")}</SectionTitle>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-secondary">
              {t(locale, "about.principles.body")}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {values.map((v, i) => (
                <Reveal key={v.n} delay={stagger(i)} className="block">
                  <div className="rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card px-7 py-7">
                    <div className="font-mono text-[12px] tracking-[0.18em] text-[var(--accent)]">{v.n}</div>
                    <div className="mt-3 font-display text-[18px] font-semibold text-bone">{v.title}</div>
                    <p className="mt-3 text-[14px] leading-[1.6] text-secondary">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={withLocale(locale, "/form")} glow>
                {t(locale, "cta.lets_talk")} ↗
              </Button>
              <Button href="mailto:hello@trapplan.com" variant="secondary" external>
                hello@trapplan.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
