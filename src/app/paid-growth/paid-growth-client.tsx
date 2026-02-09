"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { isLocale, withLocale } from "@/lib/i18n.shared";
import { usePathname } from "next/navigation";
import { t } from "@/lib/copy";

type ValueBlock = {
  title: string;
  body: string;
  bullets: string[];
};

type FAQItem = {
  q: string;
  a: string;
};

function Hero({ locale }: { locale: "en" | "es" | "it" | "fr" | "de" | "zh" }) {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const resolvedLocale = isLocale(maybeLocale) ? maybeLocale : locale;
  const formHref = withLocale(resolvedLocale, "/form");
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14">
      <div className="rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 gap-8 px-6 pt-10 pb-10 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-black/50">
              <span className="h-[8px] w-[8px] rounded-full bg-[#FF0A5B]" />
              {t(resolvedLocale, "paid_growth.ui.hero.kicker")}
            </div>

            <h1 className="mt-4 text-[44px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[56px]">
              {t(resolvedLocale, "paid_growth.ui.hero.title")}
            </h1>
            <p className="mt-4 max-w-[70ch] text-[14px] leading-6 text-black/60">
              {t(resolvedLocale, "paid_growth.ui.hero.body")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={formHref}
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.30)] transition-colors hover:bg-[#E6004E]"
              >
                {t(resolvedLocale, "paid_growth.ui.hero.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="text-[13px] font-semibold text-black/60">
                {t(resolvedLocale, "paid_growth.ui.hero.note")}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-center lg:justify-end">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-white to-[#FFF5F8] sm:h-[260px] lg:h-[300px] lg:w-[520px]">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,10,91,0.14),transparent_58%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
              <Image
                src="/images/PaidHero.avif"
                alt={t(resolvedLocale, "paid_growth.ui.hero.image_alt")}
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-contain opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValueBlocks({ locale }: { locale: "en" | "es" | "it" | "fr" | "de" | "zh" }) {
  const blocks = useMemo<ValueBlock[]>(
    () => [
      {
        title: t(locale, "paid_growth.ui.block1.title"),
        body: t(locale, "paid_growth.ui.block1.body"),
        bullets: [
          t(locale, "paid_growth.ui.block1.bullet1"),
          t(locale, "paid_growth.ui.block1.bullet2"),
          t(locale, "paid_growth.ui.block1.bullet3"),
          t(locale, "paid_growth.ui.block1.bullet4"),
        ],
      },
      {
        title: t(locale, "paid_growth.ui.block2.title"),
        body: t(locale, "paid_growth.ui.block2.body"),
        bullets: [
          t(locale, "paid_growth.ui.block2.bullet1"),
          t(locale, "paid_growth.ui.block2.bullet2"),
          t(locale, "paid_growth.ui.block2.bullet3"),
          t(locale, "paid_growth.ui.block2.bullet4"),
        ],
      },
      {
        title: t(locale, "paid_growth.ui.block3.title"),
        body: t(locale, "paid_growth.ui.block3.body"),
        bullets: [
          t(locale, "paid_growth.ui.block3.bullet1"),
          t(locale, "paid_growth.ui.block3.bullet2"),
          t(locale, "paid_growth.ui.block3.bullet3"),
          t(locale, "paid_growth.ui.block3.bullet4"),
        ],
      },
    ],
    [locale],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14 lg:px-10">
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
            {t(locale, "paid_growth.ui.core_value.kicker")}
          </div>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-black lg:text-[44px]">
            {t(locale, "paid_growth.ui.core_value.title")}
          </h2>
          <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-black/60">
            {t(locale, "paid_growth.ui.core_value.subtitle")}
          </p>
        </div>

        {blocks.map((b) => (
          <div key={b.title} className="rounded-[22px] bg-white px-6 py-7 shadow-[0_30px_70px_rgba(0,0,0,0.06)] lg:px-10">
            <div className="flex items-center justify-between gap-6">
              <div className="text-[22px] font-extrabold leading-tight tracking-tight text-black">{b.title}</div>
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#FF0A5B]" />
            </div>
            <p className="mt-4 max-w-[86ch] text-[14px] leading-6 text-black/60">{b.body}</p>
            <ul className="mt-5 space-y-2">
              {b.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] leading-6 text-black/70">
                  <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#FF0A5B]" />
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

function IndieAccordionFAQ({ locale }: { locale: "en" | "es" | "it" | "fr" | "de" | "zh" }) {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const resolvedLocale = isLocale(maybeLocale) ? maybeLocale : locale;
  const formHref = withLocale(resolvedLocale, "/form");
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: t(resolvedLocale, "paid_growth.ui.faq.q1"),
        a: t(resolvedLocale, "paid_growth.ui.faq.a1"),
      },
      {
        q: t(resolvedLocale, "paid_growth.ui.faq.q2"),
        a: t(resolvedLocale, "paid_growth.ui.faq.a2"),
      },
      {
        q: t(resolvedLocale, "paid_growth.ui.faq.q3"),
        a: t(resolvedLocale, "paid_growth.ui.faq.a3"),
      },
      {
        q: t(resolvedLocale, "paid_growth.ui.faq.q4"),
        a: t(resolvedLocale, "paid_growth.ui.faq.a4"),
      },
      {
        q: t(resolvedLocale, "paid_growth.ui.faq.q5"),
        a: t(resolvedLocale, "paid_growth.ui.faq.a5"),
      },
    ],
    [resolvedLocale],
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
      <div className="rounded-[28px] bg-white px-6 py-10 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
        <div className="flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
          {t(resolvedLocale, "paid_growth.ui.faq.kicker")}
        </div>
        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-black lg:text-[44px]">
          {t(resolvedLocale, "paid_growth.ui.faq.title")}
        </h2>

        <div className="mt-8 space-y-3">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                  className="flex w-full items-center justify-between gap-6 bg-white px-5 py-4 text-left"
                >
                  <div className="text-[14px] font-extrabold leading-6 text-black">{item.q}</div>
                  <div
                    className={`text-black/50 transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
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
                      className={`border-t border-black/10 bg-black/[0.02] px-5 py-4 text-[14px] leading-6 text-black/65 transition-opacity duration-200 ${
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

        <div className="mt-10">
          <Link
            href={formHref}
            className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
          >
            {t(resolvedLocale, "paid_growth.ui.faq.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PaidGrowthClient() {
  const pathname = usePathname() || "/";
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(maybeLocale) ? maybeLocale : "en";

  return (
    <>
      <Hero locale={locale} />
      <CoreValueBlocks locale={locale} />
      <IndieAccordionFAQ locale={locale} />
    </>
  );
}
