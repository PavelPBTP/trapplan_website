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
  const description =
    excerptUses > 1 ? `${s.excerpt} (${s.client} — ${s.title})` : s.excerpt;

  return {
    title: s.title,
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
      title: s.title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description,
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
