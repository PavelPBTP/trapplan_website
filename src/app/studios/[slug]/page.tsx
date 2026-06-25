import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";
import ArtTile from "@/components/ui/ArtTile";
import Button from "@/components/ui/Button";
import { STUDIO_PAGES } from "@/lib/data/studios";
import { artGradient } from "@/lib/data/gameArt";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampWithSuffix } from "@/lib/seo";

export function generateStaticParams() {
  return STUDIO_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const s = STUDIO_PAGES.find((x) => x.slug === slug);
  if (!s) return {};

  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, `/studios/${slug}`), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, `/studios/${slug}`), origin).toString()]),
  ) as Record<string, string>;
  const excerptUses = STUDIO_PAGES.reduce((acc, p) => acc + (p.excerpt === s.excerpt ? 1 : 0), 0);
  const baseDescription =
    excerptUses > 1 ? `${s.excerpt} (${s.client} — ${s.title})` : s.excerpt;
  const localeLabel: Record<string, string> = {
    en: "Studio page",
    es: "Página de estudio",
    it: "Pagina studio",
    fr: "Page studio",
    de: "Studio-Seite",
    zh: "工作室页面",
  };
  const label = localeLabel[locale] ?? localeLabel.en;

  const description = clampWithSuffix(baseDescription, `(${label})`, 160);

  const localeMarker = locale === "en" ? "" : `(${locale.toUpperCase()})`;
  const title = localeMarker ? `${s.title} ${localeMarker}` : s.title;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", `/studios/${slug}`), origin).toString(),
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
          alt: s.title,
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

export default async function StudioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const s = STUDIO_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <main>
      <section className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8">
        <ArtTile
          className="min-h-[240px]"
          radius={16}
          gradient={artGradient({ rgb: "176,42,48", base: "#241a17" }, { alpha: 0.45, pos: "32% 28%", spread: "66%" })}
          ghostName={s.title}
          ghostSize={40}
          tag={s.client.toUpperCase()}
          priority
        />
        <div className="mt-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
            {s.client.toUpperCase()} · {s.date}
          </div>
          <h1 className="mt-3 font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-bone text-balance md:text-[48px]">
            {s.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.6] text-secondary">{s.excerpt}</p>
          <div className="mt-9 flex flex-wrap gap-[14px]">
            <Button href={withLocale(locale, "/form")} glow>
              {t(locale, "cta.request_quote")} ↗
            </Button>
            <Button href={withLocale(locale, "/our-cases")} variant="secondary">
              {t(locale, "cases.cta_view_all")} →
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
