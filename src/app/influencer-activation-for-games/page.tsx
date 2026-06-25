import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import RelatedServices from "@/components/sections/RelatedServices";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/influencer-activation-for-games"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/influencer-activation-for-games"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "seo.influencer_activation.title");
  const description = t(locale, "seo.influencer_activation.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/influencer-activation-for-games"), origin).toString(),
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

function SectionKicker({ children }: { children: string }) {
  return <div className="text-[12px] font-semibold tracking-wide text-tertiary">{children}</div>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight text-bone">
      {children}
    </h2>
  );
}

function CTAButtons({ locale }: { locale: Parameters<typeof t>[0] }) {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_18px_42px_rgba(255,31,109,0.28)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.40)]"
      >
        {t(locale, "cta.lets_talk")}
      </a>
    </div>
  );
}


export default async function InfluencerActivationForGamesPage() {
  const locale = await getRequestLocale();

  const deliverables = [
    t(locale, "influencer_activation.deliverables.01"),
    t(locale, "influencer_activation.deliverables.02"),
    t(locale, "influencer_activation.deliverables.03"),
    t(locale, "influencer_activation.deliverables.04"),
    t(locale, "influencer_activation.deliverables.05"),
    t(locale, "influencer_activation.deliverables.06"),
  ];

  const faqs = [
    {
      q: t(locale, "influencer_activation.faq.01.q"),
      a: t(locale, "influencer_activation.faq.01.a"),
    },
    {
      q: t(locale, "influencer_activation.faq.02.q"),
      a: t(locale, "influencer_activation.faq.02.a"),
    },
    {
      q: t(locale, "influencer_activation.faq.03.q"),
      a: t(locale, "influencer_activation.faq.03.a"),
    },
  ];

  return (
    <main className="bg-card">
      <section className="relative overflow-hidden bg-card">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,31,109,0.14),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(244,241,234,0.1)] bg-card px-4 py-2 text-[12px] font-semibold text-secondary">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {t(locale, "influencer_activation.badge")}
              </div>

              <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-bone sm:text-[54px]">
                {t(locale, "influencer_activation.hero.title")}
              </h1>

              <p className="mt-4 text-[18px] leading-7 text-secondary">
                {t(locale, "influencer_activation.hero.kicker")}
              </p>

              <p className="mt-6 text-[15px] leading-7 text-secondary">
                {t(locale, "influencer_activation.hero.body")}
              </p>

              <CTAButtons locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "influencer_activation.how_it_works.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "influencer_activation.how_it_works.title")}</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-tertiary">
                    {t(locale, "influencer_activation.phase.01.kicker")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-bone">
                    {t(locale, "influencer_activation.phase.01.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-secondary">
                    {t(locale, "influencer_activation.phase.01.desc")}
                  </p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-tertiary">
                    {t(locale, "influencer_activation.phase.02.kicker")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-bone">
                    {t(locale, "influencer_activation.phase.02.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-secondary">
                    {t(locale, "influencer_activation.phase.02.desc")}
                  </p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-tertiary">
                    {t(locale, "influencer_activation.phase.03.kicker")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-bone">
                    {t(locale, "influencer_activation.phase.03.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-secondary">
                    {t(locale, "influencer_activation.phase.03.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "influencer_activation.deliverables.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "influencer_activation.deliverables.title")}</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {deliverables.map((label) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-[rgba(244,241,234,0.1)] bg-card p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[var(--accent)]/70" aria-hidden />
                      <div className="text-[14px] font-semibold leading-6 text-secondary">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTAButtons locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "influencer_activation.faq.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "influencer_activation.faq.title")}</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[18px] border border-[rgba(244,241,234,0.1)] bg-card px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <div className="text-[15px] font-semibold leading-7 text-bone">{item.q}</div>
                      <div className="mt-1 text-faint transition-transform duration-200 group-open:rotate-45">
                        <span className="text-[18px] leading-none">+</span>
                      </div>
                    </summary>
                    <div className="mt-3 text-[15px] leading-7 text-secondary">{item.a}</div>
                  </details>
                ))}
              </div>

              <div className="mt-10">
                <CTAButtons locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-void-alt">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                {t(locale, "influencer_activation.contact.title")}
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {t(locale, "influencer_activation.contact.body")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[24px] bg-card px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="text-[12px] font-semibold tracking-wide text-tertiary">
                  {t(locale, "influencer_activation.contact.card_kicker")}
                </div>
                <div className="mt-3 text-[22px] font-extrabold tracking-tight text-bone">
                  {t(locale, "influencer_activation.contact.card_title")}
                </div>
                <div className="mt-7">
                  <Link
                    href={withLocale(locale, "/form")}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,31,109,0.30)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.42)]"
                  >
                    {t(locale, "influencer_activation.contact.submit")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices locale={locale} currentHref="/influencer-activation-for-games" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: t(locale, "faq.influencer_activation.q1"), acceptedAnswer: { "@type": "Answer", text: t(locale, "faq.influencer_activation.a1") } },
            { "@type": "Question", name: t(locale, "faq.influencer_activation.q2"), acceptedAnswer: { "@type": "Answer", text: t(locale, "faq.influencer_activation.a2") } },
            { "@type": "Question", name: t(locale, "faq.influencer_activation.q3"), acceptedAnswer: { "@type": "Answer", text: t(locale, "faq.influencer_activation.a3") } },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: t(locale, "seo.influencer_activation.title"),
          description: t(locale, "seo.influencer_activation.desc"),
          provider: {
            "@type": "Organization",
            name: "TrapPlan",
            url: "https://www.trapplan.com",
          },
          areaServed: "Worldwide",
        }) }}
      />
      <Footer />
    </main>
  );
}
