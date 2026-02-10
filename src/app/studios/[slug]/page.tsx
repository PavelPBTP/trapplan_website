import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";
import { STUDIO_PAGES } from "@/lib/data/studios";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";

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

  const clampText = (s: string, maxLen: number) => {
    const t = (s ?? "").trim();
    if (t.length <= maxLen) return t;
    return t.slice(0, maxLen - 1).trimEnd() + "…";
  };

  const clampWithSuffix = (base: string, suffix: string, maxLen: number) => {
    const b = (base ?? "").trim();
    const s = (suffix ?? "").trim();
    if (!s) return clampText(b, maxLen);
    const combined = `${b} ${s}`.trim();
    if (combined.length <= maxLen) return combined;
    const maxBase = Math.max(0, maxLen - s.length - 2);
    const clippedBase = b.length > maxBase ? b.slice(0, Math.max(0, maxBase - 1)).trimEnd() + "…" : b;
    return `${clippedBase} ${s}`.trim();
  };

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
  const { slug } = await params;
  const s = STUDIO_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <div className={`h-[220px] w-full rounded-3xl bg-gradient-to-br ${s.theme}`} />
          <div className="mt-10">
            <div className="text-[13px] font-semibold text-black/60">
              {s.date} | {s.client}
            </div>
            <h1 className="mt-3 text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
              {s.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-black/65">{s.excerpt}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
