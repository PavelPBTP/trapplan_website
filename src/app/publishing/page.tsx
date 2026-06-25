import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { MonoEyebrow } from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { stagger } from "@/lib/stagger";
import { breadcrumbList, SITE_ORIGIN } from "@/lib/seo";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";
import { t, type CopyKey } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/publishing"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/publishing"), origin).toString()]),
  ) as Record<string, string>;
  const title = t(locale, "seo.publishing.title");
  const description = t(locale, "seo.publishing.description");
  const ogImage = new URL("/og", origin).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": new URL(withLocale("en", "/publishing"), origin).toString() },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const HOW_CARDS: { titleKey: CopyKey; bodyKey: CopyKey; tagsKey: CopyKey }[] = [
  { titleKey: "publishing.how.card1.title", bodyKey: "publishing.how.card1.body", tagsKey: "publishing.how.card1.tags" },
  { titleKey: "publishing.how.card2.title", bodyKey: "publishing.how.card2.body", tagsKey: "publishing.how.card2.tags" },
  { titleKey: "publishing.how.card3.title", bodyKey: "publishing.how.card3.body", tagsKey: "publishing.how.card3.tags" },
  { titleKey: "publishing.how.card4.title", bodyKey: "publishing.how.card4.body", tagsKey: "publishing.how.card4.tags" },
];

export default async function PublishingPage() {
  const locale = await getRequestLocale();
  const submitHref = withLocale(locale, "/form");

  return (
    <div data-accent="teal">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          { name: t(locale, "nav.publishing") },
        ])}
      />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[rgba(244,241,234,0.07)]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute left-[-160px] top-[-280px] h-[760px] w-[760px] rounded-full blur-[50px]"
              style={{
                background: "radial-gradient(circle at center, rgba(91,214,176,0.34), transparent 62%)",
                animation: "tp-aurora1 17s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-[-360px] right-[-120px] h-[760px] w-[760px] rounded-full blur-[60px]"
              style={{
                background: "radial-gradient(circle at center, rgba(47,169,140,0.30), transparent 62%)",
                animation: "tp-aurora2 21s ease-in-out infinite",
              }}
            />
          </div>
          <div className="tp-grain" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[-34px] overflow-hidden leading-[0.7]">
            <div className="whitespace-nowrap text-center font-anton text-[120px] tracking-[-0.02em] text-[rgba(244,241,234,0.035)] md:text-[300px]">
              PUBLISHING
            </div>
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-[92px] lg:px-8">
            <MonoEyebrow label={t(locale, "publishing.hero.badge")} dot className="mb-[30px]" />
            <h1 className="max-w-[1080px] font-anton text-[54px] font-normal uppercase leading-[0.92] tracking-[-0.01em] text-bone text-balance md:text-[108px]">
              {t(locale, "publishing.hero.title_l1")}
              <br />
              {t(locale, "publishing.hero.title_l2_pre")}
              <span className="text-teal">{t(locale, "publishing.hero.title_accent")}</span>
              {t(locale, "publishing.hero.title_l2_post")}
            </h1>
            <div className="mt-9 flex flex-wrap items-end justify-between gap-10">
              <p className="max-w-[560px] text-[20px] leading-[1.55] text-[#B6B0A6]">
                {t(locale, "publishing.hero.lede")}
              </p>
              <div className="flex flex-wrap gap-[14px]">
                <Button href={submitHref} size="lg" glow>
                  {t(locale, "cta.submit_game")} <span>↗</span>
                </Button>
                <Button href="#how" variant="secondary" size="lg">
                  {t(locale, "nav.how_we_help")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee items={t(locale, "publishing.marquee").split("|")} />

        {/* Values */}
        <section id="values">
          <div className="mx-auto max-w-[1280px] px-6 pb-[10px] pt-6 lg:px-8">
            {([
              { title: "publishing.value1.title", body: "publishing.value1.body", border: true },
              { title: "publishing.value2.title", body: "publishing.value2.body", border: false },
            ] as const).map((row) => (
              <div
                key={row.title}
                className={`grid grid-cols-1 items-start gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] ${
                  row.border ? "border-b border-[rgba(244,241,234,0.08)]" : ""
                }`}
              >
                <div>
                  <div className="mb-[22px] h-[4px] w-10 bg-teal" />
                  <h2 className="font-anton text-[36px] font-normal uppercase leading-[0.96] tracking-[-0.005em] text-bone md:text-[56px]">
                    {t(locale, row.title)}
                  </h2>
                </div>
                <p className="max-w-[560px] pt-[10px] text-[19px] leading-[1.6] text-secondary">
                  {t(locale, row.body)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IP band */}
        <section
          id="ip"
          className="relative overflow-hidden border-y border-[rgba(91,214,176,0.2)]"
          style={{ background: "linear-gradient(165deg, rgba(91,214,176,0.14), #0C0B0A 60%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(ellipse at center, rgba(91,214,176,0.16), transparent 70%)" }}
          />
          <div className="tp-grain" />
          <div className="relative mx-auto max-w-[1100px] px-6 py-[120px] text-center lg:px-8">
            <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
              {t(locale, "publishing.ip.eyebrow")}
            </div>
            <h2 className="mb-6 font-anton text-[46px] font-normal uppercase leading-[0.95] tracking-[-0.01em] text-bone text-balance md:text-[82px]">
              {t(locale, "publishing.ip.title")}
            </h2>
            <p className="mx-auto max-w-[600px] text-[19px] leading-[1.6] text-[#B6B0A6]">
              {t(locale, "publishing.ip.body")}
            </p>
          </div>
        </section>

        {/* How we help */}
        <section id="how" className="border-t border-[rgba(244,241,234,0.07)]">
          <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-teal">
              {t(locale, "nav.how_we_help")}
            </span>
            <h2 className="mb-[50px] mt-4 max-w-[680px] font-anton text-[36px] font-normal uppercase leading-[0.96] tracking-[-0.005em] text-bone md:text-[56px]">
              {t(locale, "publishing.how.title")}
            </h2>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
              {HOW_CARDS.map((card, i) => (
                <Reveal key={card.titleKey} delay={stagger(i)} className="block">
                  <div className="h-full rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-9 transition-colors hover:border-[rgba(91,214,176,0.45)]">
                    <h3 className="mb-[10px] font-display text-[24px] font-semibold text-bone">
                      {t(locale, card.titleKey)}
                    </h3>
                    <p className="mb-[22px] max-w-[460px] text-[15px] leading-[1.6] text-secondary">
                      {t(locale, card.bodyKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t(locale, card.tagsKey)
                        .split("|")
                        .map((tag) => (
                          <Tag key={tag} mono>
                            {tag}
                          </Tag>
                        ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Agency vs publishing */}
        <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
          <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-teal">
              {t(locale, "publishing.compare.eyebrow")}
            </span>
            <h2 className="mb-10 mt-4 font-anton text-[36px] font-normal uppercase leading-[0.96] tracking-[-0.005em] text-bone md:text-[56px]">
              {t(locale, "publishing.compare.title")}
            </h2>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
              <div className="rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-[38px]">
                <div className="mb-[14px] font-mono text-[12px] uppercase tracking-[0.12em] text-secondary">
                  {t(locale, "publishing.compare.agency.label")}
                </div>
                <h3 className="mb-[14px] font-display text-[26px] font-semibold text-bone">
                  {t(locale, "publishing.compare.agency.title")}
                </h3>
                <p className="mb-[22px] text-[15px] leading-[1.65] text-secondary">
                  {t(locale, "publishing.compare.agency.body")}
                </p>
                <a
                  href={withLocale(locale, "/#packages")}
                  className="font-mono text-[13px] text-bone no-underline transition-colors hover:text-teal"
                >
                  {t(locale, "publishing.compare.agency.cta")} ↗
                </a>
              </div>
              <div
                className="overflow-hidden rounded-[16px] border border-[rgba(91,214,176,0.42)] p-[38px]"
                style={{ background: "linear-gradient(160deg, rgba(91,214,176,0.12), #131110)" }}
              >
                <div className="mb-[14px] font-mono text-[12px] uppercase tracking-[0.12em] text-teal">
                  {t(locale, "publishing.compare.pub.label")}
                </div>
                <h3 className="mb-[14px] font-display text-[26px] font-semibold text-bone">
                  {t(locale, "publishing.compare.pub.title")}
                </h3>
                <p className="mb-[22px] text-[15px] leading-[1.65] text-secondary">
                  {t(locale, "publishing.compare.pub.body")}
                </p>
                <a
                  href={submitHref}
                  className="font-mono text-[13px] text-teal no-underline transition hover:brightness-110"
                >
                  {t(locale, "cta.submit_game")} ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-[rgba(244,241,234,0.07)]">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-1/2 top-1/2 h-[480px] w-[840px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(ellipse at center, rgba(91,214,176,0.13), transparent 70%)",
                animation: "tp-aurora1 19s ease-in-out infinite",
              }}
            />
          </div>
          <div className="tp-grain" />
          <div className="relative mx-auto max-w-[1100px] px-6 py-[120px] text-center lg:px-8">
            <h2 className="mb-5 font-anton text-[44px] font-normal uppercase leading-[0.95] tracking-[-0.01em] text-bone text-balance md:text-[76px]">
              {t(locale, "publishing.cta.title")}
            </h2>
            <p className="mx-auto mb-9 max-w-[560px] text-[19px] leading-[1.6] text-[#B6B0A6]">
              {t(locale, "publishing.cta.body")}
            </p>
            <Button href={submitHref} size="lg" glow>
              {t(locale, "cta.submit_game")} ↗
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
