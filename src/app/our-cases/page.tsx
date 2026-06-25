import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import CaseFilterGrid, { type CaseCard } from "@/components/sections/CaseFilterGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/data/cases";
import { GAME_ART, CASE_ART, artGradient, type GameArt } from "@/lib/data/gameArt";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbList, itemList, SITE_ORIGIN } from "@/lib/seo";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/our-cases"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/our-cases"), origin).toString()]),
  ) as Record<string, string>;
  const title = t(locale, "seo.our_cases.title");
  const description = t(locale, "seo.our_cases.desc");
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": new URL(withLocale("en", "/our-cases"), origin).toString() },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: new URL("/og", origin).toString(), width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og", origin).toString()] },
  };
}

export default async function OurCasesPage() {
  const locale = await getRequestLocale();

  const cards: CaseCard[] = CASE_STUDIES.map((c) => {
    const art: GameArt = GAME_ART[CASE_ART[c.slug]];
    return {
      slug: c.slug,
      href: withLocale(locale, c.href),
      filter: c.client.toLowerCase(),
      category: `${c.client.toUpperCase()} · ${art.ghostName.toUpperCase()}`,
      title: c.title,
      highlight: c.excerpt,
      gradient: artGradient(art, { alpha: 0.5, pos: "32% 26%", spread: "64%" }),
      ghostName: art.ghostName,
      tag: c.client.toUpperCase(),
      cover: art.landscape,
    };
  });

  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: t(locale, "blog.ui.home"), url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          { name: t(locale, "nav.our_cases") },
        ])}
      />
      <JsonLd
        data={itemList(
          t(locale, "seo.our_cases.title"),
          CASE_STUDIES.map((c) => new URL(withLocale(locale, c.href), SITE_ORIGIN).toString()),
        )}
      />
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-[-40px] h-[420px] w-[820px] -translate-x-1/2 opacity-50 blur-[20px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
          }}
        />
        <div className="tp-grain" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-6 pt-[88px] lg:px-8">
          <Eyebrow number={t(locale, "cases.eyebrow")} label={t(locale, "cases.catalog.sub")} className="mb-[22px]" />
          <h1 className="mb-5 max-w-[760px] font-display text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-bone text-balance md:text-[54px]">
            {t(locale, "our_cases.ui.title")}
          </h1>
          <p className="max-w-[600px] text-[18px] leading-[1.6] text-secondary">
            {t(locale, "our_cases.ui.subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-[90px] pt-6 lg:px-8">
        <CaseFilterGrid
          cards={cards}
          labels={{
            all: t(locale, "cases.filter.all"),
            wargaming: t(locale, "cases.filter.wargaming"),
            gaijin: t(locale, "cases.filter.gaijin"),
          }}
        />
      </section>

      <section className="border-t border-[rgba(244,241,234,0.07)]">
        <div className="mx-auto max-w-[1240px] px-6 py-[90px] text-center lg:px-8">
          <h2 className="mb-[18px] font-display text-[42px] font-bold tracking-[-0.025em] text-bone text-balance">
            {t(locale, "our_cases.ui.next_step_title")}
          </h2>
          <p className="mx-auto mb-[34px] max-w-[520px] text-[17px] leading-[1.6] text-secondary">
            {t(locale, "our_cases.ui.next_step_body")}
          </p>
          <Button href={withLocale(locale, "/form")} glow>
            {t(locale, "cta.request_quote")} ↗
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
