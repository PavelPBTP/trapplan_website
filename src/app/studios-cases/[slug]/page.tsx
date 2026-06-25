import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import ArtTile from "@/components/ui/ArtTile";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { stagger } from "@/lib/stagger";
import { CASE_STUDIES } from "@/lib/data/cases";
import { GAME_ART, CASE_ART, artGradient, type GameArt } from "@/lib/data/gameArt";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbList, clampWithSuffix, SITE_ORIGIN } from "@/lib/seo";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};

  const localeLabel: Record<string, string> = {
    en: "Case study",
    es: "Caso",
    it: "Caso studio",
    fr: "Étude de cas",
    de: "Case Study",
    zh: "案例",
  };
  const label = localeLabel[locale] ?? localeLabel.en;
  const description = clampWithSuffix(c.excerpt, `(${label}: ${c.client})`, 160);
  const localeMarker = locale === "en" ? "" : `(${locale.toUpperCase()})`;
  const title = localeMarker ? `${c.title} ${localeMarker}` : c.title;

  const origin = "https://www.trapplan.com";
  const url = new URL(withLocale(locale, `/studios-cases/${slug}`), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, `/studios-cases/${slug}`), origin).toString()]),
  ) as Record<string, string>;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": new URL(withLocale("en", `/studios-cases/${slug}`), origin).toString() },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: new URL("/og", origin).toString(), width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

/** Renders a KPI value, animating pure-integer values with count-up. */
function Kpi({ label, value }: { label: string; value: string }) {
  const numeric = /^[\d,]+$/.test(value);
  return (
    <div className="rounded-[12px] border border-[rgba(244,241,234,0.08)] bg-void px-5 py-5">
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">{label}</div>
      <div className="mt-2 whitespace-nowrap font-mono text-[26px] text-bone [font-variant-numeric:tabular-nums]">
        {numeric ? <CountUp value={parseInt(value.replace(/,/g, ""), 10)} /> : value}
      </div>
    </div>
  );
}

export default async function StudiosCasesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  const art: GameArt = GAME_ART[CASE_ART[c.slug]];
  const sections = c.body ?? [];
  const formHref = withLocale(locale, "/form");

  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: t(locale, "blog.ui.home"), url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          {
            name: t(locale, "cases.eyebrow"),
            url: new URL(withLocale(locale, "/our-cases"), SITE_ORIGIN).toString(),
          },
          { name: c.title },
        ])}
      />
      {/* Header / breadcrumb */}
      <section className="mx-auto max-w-[1240px] px-6 pt-10 lg:px-8">
        <div className="flex items-center justify-between font-mono text-[12px] tracking-[0.06em]">
          <Link
            href={withLocale(locale, "/our-cases")}
            className="text-secondary no-underline transition-colors hover:text-bone"
          >
            {t(locale, "studios_cases.ui.back_to_cases")}
          </Link>
          <span className="text-tertiary">
            {c.date} · {c.client}
          </span>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16 pt-8 lg:px-8">
        <ArtTile
          className="min-h-[300px] md:min-h-[360px]"
          radius={16}
          gradient={artGradient(art, { alpha: 0.5, pos: "32% 28%", spread: "64%" })}
          ghostName={art.ghostName}
          ghostSize={52}
          ghostBottom={26}
          tag={c.client.toUpperCase()}
          cover={art.landscape}
          coverAlt={c.title}
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
        />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
              {c.client.toUpperCase()} · {c.date}
            </div>
            <h1 className="mb-5 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-bone text-balance md:text-[52px]">
              {c.title}
            </h1>
            <p className="max-w-2xl text-[18px] leading-[1.6] text-secondary">{c.excerpt}</p>
          </div>

          <aside className="rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-7 lg:sticky lg:top-[96px] lg:self-start">
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-tertiary">
              {t(locale, "studios_cases.ui.case_snapshot")}
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                  {t(locale, "studios_cases.ui.client")}
                </div>
                <div className="mt-1 font-display text-[15px] font-semibold text-bone">{c.client}</div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                  {t(locale, "studios_cases.ui.date")}
                </div>
                <div className="mt-1 font-display text-[15px] font-semibold text-bone">{c.date}</div>
              </div>
            </div>
            <div className="mt-6 rounded-[12px] border border-[rgba(244,241,234,0.08)] bg-void px-5 py-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                {t(locale, "studios_cases.ui.note")}
              </div>
              <div className="mt-2 text-[14px] leading-[1.6] text-secondary">
                {t(locale, "studios_cases.ui.note_body")}
              </div>
            </div>
            <Button href={formHref} glow className="mt-6 w-full">
              {t(locale, "studios_cases.ui.work_with_us")} ↗
            </Button>
          </aside>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
          {sections.length ? (
            <div className="mx-auto flex max-w-[820px] flex-col gap-[18px]">
              {sections.map((section, idx) => (
                <Reveal key={section.title} delay={stagger(idx)} className="block">
                  <div className="rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 hidden shrink-0 font-display text-[42px] font-bold leading-none text-[rgba(244,241,234,0.14)] sm:block">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-bone">
                          {section.title}
                        </h2>
                        <div className="mt-3 space-y-3">
                          {section.paragraphs.map((p) => (
                            <p key={p} className="text-[15px] leading-[1.7] text-secondary">
                              {p}
                            </p>
                          ))}
                        </div>
                        {section.kpis?.length ? (
                          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
                            {section.kpis.map((kpi) => (
                              <Kpi key={kpi.label} label={kpi.label} value={kpi.value} />
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-[820px] rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-8">
              <h2 className="font-display text-[22px] font-semibold text-bone">
                {t(locale, "studios_cases.ui.summary")}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-secondary">
                {t(locale, "studios_cases.ui.no_sections")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(244,241,234,0.07)]">
        <div className="mx-auto max-w-[1240px] px-6 py-[90px] text-center lg:px-8">
          <h2 className="mb-[18px] font-display text-[42px] font-bold tracking-[-0.025em] text-bone text-balance">
            {t(locale, "studios_cases.ui.next_step_title")}
          </h2>
          <p className="mx-auto mb-[34px] max-w-[520px] text-[17px] leading-[1.6] text-secondary">
            {t(locale, "studios_cases.ui.next_step_body")}
          </p>
          <Button href={formHref} glow>
            {t(locale, "studios_cases.ui.contact_us")} ↗
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
