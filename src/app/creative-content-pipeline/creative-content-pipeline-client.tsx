"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { isLocale, withLocale } from "@/lib/i18n.shared";
import { usePathname } from "next/navigation";
import { t } from "@/lib/copy";

type FlowBlock = {
  title: string;
  body: string;
  bullets: string[];
};

type FAQItem = {
  q: string;
  a: string;
};

function Hero() {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(maybeLocale) ? maybeLocale : "en";
  const formHref = withLocale(locale, "/form");
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14">
      <div className="rounded-[28px] bg-card shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 gap-8 px-6 pt-10 pb-10 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-tertiary">
              <span className="h-[8px] w-[8px] rounded-full bg-[var(--accent)]" />
              {t(locale, "creative_content_pipeline.ui.hero.kicker")}
            </div>

            <h1 className="mt-4 text-[44px] font-extrabold leading-[0.98] tracking-tight text-bone lg:text-[56px]">
              {t(locale, "creative_content_pipeline.ui.hero.title")}
            </h1>
            <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-secondary">
              {t(locale, "creative_content_pipeline.ui.hero.body")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={formHref}
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(240,34,78,0.30)] transition-colors hover:brightness-[1.06]"
              >
                {t(locale, "creative_content_pipeline.ui.hero.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="text-[13px] font-semibold text-secondary">
                {t(locale, "creative_content_pipeline.ui.hero.note")}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-center lg:justify-end">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#241a17] to-[#0c0b0a] sm:h-[260px] lg:h-[300px] lg:w-[520px]">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_25%,rgba(240,34,78,0.14),transparent_58%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
              <Image
                src="/images/TrailerHero.avif"
                alt={t(locale, "creative_content_pipeline.ui.hero.image_alt")}
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-cover opacity-90"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineFlow() {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(maybeLocale) ? maybeLocale : "en";

  const blocks = useMemo<FlowBlock[]>(
    () => [
      {
        title: t(locale, "creative_content_pipeline.ui.block1.title"),
        body: t(locale, "creative_content_pipeline.ui.block1.body"),
        bullets: [
          t(locale, "creative_content_pipeline.ui.block1.bullet1"),
          t(locale, "creative_content_pipeline.ui.block1.bullet2"),
          t(locale, "creative_content_pipeline.ui.block1.bullet3"),
        ],
      },
      {
        title: t(locale, "creative_content_pipeline.ui.block2.title"),
        body: t(locale, "creative_content_pipeline.ui.block2.body"),
        bullets: [
          t(locale, "creative_content_pipeline.ui.block2.bullet1"),
          t(locale, "creative_content_pipeline.ui.block2.bullet2"),
          t(locale, "creative_content_pipeline.ui.block2.bullet3"),
        ],
      },
      {
        title: t(locale, "creative_content_pipeline.ui.block3.title"),
        body: t(locale, "creative_content_pipeline.ui.block3.body"),
        bullets: [
          t(locale, "creative_content_pipeline.ui.block3.bullet1"),
          t(locale, "creative_content_pipeline.ui.block3.bullet2"),
          t(locale, "creative_content_pipeline.ui.block3.bullet3"),
        ],
      },
    ],
    [locale],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14 lg:px-10">
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-3 text-[14px] font-extrabold text-[var(--accent)]">
            <span className="h-[10px] w-[10px] rounded-full bg-[var(--accent)]" />
            {t(locale, "creative_content_pipeline.ui.pipeline.kicker")}
          </div>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-bone lg:text-[44px]">
            {t(locale, "creative_content_pipeline.ui.pipeline.title")}
          </h2>
          <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-secondary">
            {t(locale, "creative_content_pipeline.ui.pipeline.subtitle")}
          </p>
        </div>

        {blocks.map((b) => (
          <div key={b.title} className="rounded-[22px] bg-card px-6 py-7 shadow-[0_30px_70px_rgba(0,0,0,0.06)] lg:px-10">
            <div className="flex items-center justify-between gap-6">
              <div className="text-[22px] font-extrabold leading-tight tracking-tight text-bone">{b.title}</div>
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[var(--accent)]" />
            </div>
            <p className="mt-4 max-w-[86ch] text-[14px] leading-6 text-secondary">{b.body}</p>
            <ul className="mt-5 space-y-2">
              {b.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] leading-6 text-secondary">
                  <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SideBySideFAQ() {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(maybeLocale) ? maybeLocale : "en";
  const formHref = withLocale(locale, "/form");
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: t(locale, "creative_content_pipeline.ui.faq.q1"),
        a: t(locale, "creative_content_pipeline.ui.faq.a1"),
      },
      {
        q: t(locale, "creative_content_pipeline.ui.faq.q2"),
        a: t(locale, "creative_content_pipeline.ui.faq.a2"),
      },
      {
        q: t(locale, "creative_content_pipeline.ui.faq.q3"),
        a: t(locale, "creative_content_pipeline.ui.faq.a3"),
      },
      {
        q: t(locale, "creative_content_pipeline.ui.faq.q4"),
        a: t(locale, "creative_content_pipeline.ui.faq.a4"),
      },
    ],
    [locale],
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
      <div className="overflow-hidden rounded-[28px] bg-card shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-[var(--accent)]/[0.06]" />
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(240,34,78,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0b0a]/90 via-[#0c0b0a]/40 to-[#0c0b0a]/90" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center gap-2 text-[14px] font-extrabold text-[var(--accent)]">
                <span className="h-[10px] w-[10px] rounded-full bg-[var(--accent)]" />
                FAQ
              </div>
              <div className="mt-4 text-[32px] font-extrabold leading-[1.02] tracking-tight text-bone">
                {t(locale, "creative_content_pipeline.ui.faq.side_title")}
              </div>
              <p className="mt-4 max-w-[42ch] text-[14px] leading-6 text-secondary">
                {t(locale, "creative_content_pipeline.ui.faq.side_body")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 lg:p-10">
            <div className="space-y-3">
              {items.map((item, idx) => {
                const isOpen = idx === openIndex;

                return (
                  <div key={item.q} className="overflow-hidden rounded-2xl border border-[rgba(244,241,234,0.1)]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                      className="flex w-full items-center justify-between gap-6 bg-card px-5 py-4 text-left"
                    >
                      <div className="text-[14px] font-extrabold leading-6 text-bone">{item.q}</div>
                      <div
                        className={`text-tertiary transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`border-t border-[rgba(244,241,234,0.1)] bg-[rgba(244,241,234,0.04)] px-5 py-4 text-[14px] leading-6 text-secondary transition-opacity duration-200 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href={formHref}
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-[13px] font-semibold text-white transition-colors hover:brightness-[1.06]"
              >
                {t(locale, "creative_content_pipeline.ui.faq.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CreativeContentPipelineClient() {
  return (
    <>
      <Hero />
      <PipelineFlow />
      <SideBySideFAQ />
    </>
  );
}
