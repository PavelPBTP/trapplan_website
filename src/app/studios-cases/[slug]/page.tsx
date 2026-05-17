import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";
import { CASE_STUDIES } from "@/lib/data/cases";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampWithSuffix } from "@/lib/seo";

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
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, `/studios-cases/${slug}`), origin).toString(),
    ]),
  ) as Record<string, string>;
  const images = c.coverImage
    ? [
        {
          url: c.coverImage.src,
          alt: c.coverImage.alt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", `/studios-cases/${slug}`), origin).toString(),
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: c.coverImage ? [c.coverImage.src] : undefined,
    },
  };
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

  const sections = c.body ?? [];

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10">
          <Breadcrumbs
            trail={[
              { name: t(locale, "ui.breadcrumb.home"), href: withLocale(locale, "/") },
              { name: t(locale, "nav.our_cases"), href: withLocale(locale, "/our-cases") },
              { name: c.title, href: withLocale(locale, `/studios-cases/${c.slug}`) },
            ]}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <Link
              href={withLocale(locale, "/our-cases")}
              className="text-[13px] font-semibold text-black/60 hover:text-black"
            >
              {t(locale, "studios_cases.ui.back_to_cases")}
            </Link>
            <div className="text-[13px] font-semibold text-black/60">
              {c.date} | {c.client}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {c.coverImage ? (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl border border-black/10 bg-zinc-50">
                  <Image
                    src={c.coverImage.src}
                    alt={c.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className={`h-[260px] w-full rounded-3xl bg-gradient-to-br ${c.theme}`} />
              )}
              <h1 className="mt-8 text-[40px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[52px]">
                {c.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-black/65">{c.excerpt}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-[92px]">
                <div className="rounded-3xl border border-black/10 bg-white p-7">
                  <div className="text-[12px] font-extrabold tracking-[0.16em] text-black/50">
                    {t(locale, "studios_cases.ui.case_snapshot")}
                  </div>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-[12px] font-semibold text-black/55">{t(locale, "studios_cases.ui.client")}</div>
                      <div className="mt-1 text-[15px] font-extrabold text-black">{c.client}</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-black/55">{t(locale, "studios_cases.ui.date")}</div>
                      <div className="mt-1 text-[15px] font-extrabold text-black">{c.date}</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-black/10 bg-zinc-50 px-5 py-5">
                    <div className="text-[12px] font-semibold tracking-wide text-black/55">
                      {t(locale, "studios_cases.ui.note")}
                    </div>
                    <div className="mt-2 text-[14px] leading-6 text-black/65">
                      {t(locale, "studios_cases.ui.note_body")}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={withLocale(locale, "/form")}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
                    >
                      {t(locale, "studios_cases.ui.work_with_us")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {sections.length ? (
                <div className="relative">
                  <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-black/10 sm:block" />
                  <div className="space-y-8">
                    {sections.map((section, idx) => {
                      return (
                        <div
                          key={section.title}
                          className="rounded-3xl border border-black/10 bg-white px-7 py-7"
                        >
                          <div className="flex items-start gap-4">
                            <div className="hidden shrink-0 sm:block">
                              <div className="mt-[2px] flex h-8 w-8 items-center justify-center rounded-full bg-black text-[12px] font-extrabold text-white">
                                {String(idx + 1).padStart(2, "0")}
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h2 className="text-[20px] font-extrabold leading-tight tracking-tight text-black">
                                {section.title}
                              </h2>
                              <div className="mt-3 space-y-3">
                                {section.paragraphs.map((p) => (
                                  <p key={p} className="text-[15px] leading-7 text-black/65">
                                    {p}
                                  </p>
                                ))}
                              </div>

                              {section.kpis?.length ? (
                                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                  {section.kpis.map((kpi) => (
                                    <div
                                      key={kpi.label}
                                      className="rounded-2xl border border-black/10 bg-zinc-50 px-5 py-5"
                                    >
                                      <div className="text-[12px] font-semibold tracking-wide text-black/55">
                                        {kpi.label}
                                      </div>
                                      <div className="mt-2 whitespace-nowrap text-[24px] font-extrabold tracking-tight text-black sm:text-[26px]">
                                        {kpi.value}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-black/10 bg-white px-7 py-7">
                  <h2 className="text-[20px] font-extrabold leading-tight tracking-tight text-black">
                    {t(locale, "studios_cases.ui.summary")}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-black/65">
                    {t(locale, "studios_cases.ui.no_sections")}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-[92px]">
                <div className="rounded-3xl border border-black/10 bg-white p-7">
                  <div className="text-[12px] font-extrabold tracking-[0.16em] text-black/50">{t(locale, "studios_cases.ui.next_step")}</div>
                  <h3 className="mt-4 text-[22px] font-extrabold tracking-tight text-black">
                    {t(locale, "studios_cases.ui.next_step_title")}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    {t(locale, "studios_cases.ui.next_step_body")}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={withLocale(locale, "/form")}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
                    >
                      {t(locale, "studios_cases.ui.contact_us")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
