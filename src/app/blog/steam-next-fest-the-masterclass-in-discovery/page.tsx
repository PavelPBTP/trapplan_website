import type { Metadata } from "next";

import CardArticle from "@/components/ui/CardArticle";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampText } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(
    withLocale(locale, "/blog/steam-next-fest-the-masterclass-in-discovery"),
    origin,
  ).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/blog/steam-next-fest-the-masterclass-in-discovery"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "seo.blog.masterclass.title");
  const description = clampText(t(locale, "seo.blog.masterclass.desc"), 160);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(
          withLocale("en", "/blog/steam-next-fest-the-masterclass-in-discovery"),
          origin,
        ).toString(),
      },
    },
    openGraph: {
      type: "article",
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

export default async function SteamNextFestMasterclassPage() {
  const locale = await getRequestLocale();
  const coverPath = "/images/steam-next-fest-the-masterclass-in-discovery.png";

  const paraCounts = [1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3];
  const sections = Array.from({ length: 11 }, (_, i) => {
    const idx = i + 1;
    const prefix = `blog.masterclass.s${String(idx).padStart(2, "0")}` as const;
    return {
      title: t(locale, `${prefix}.title` as any),
      paragraphs: Array.from({ length: paraCounts[i] }, (_, j) =>
        t(locale, `${prefix}.p${String(j + 1).padStart(2, "0")}` as any),
      ),
      ...(idx === 11 ? { isCta: true } : {}),
    };
  });

  const data = {
    title: t(locale, "seo.blog.masterclass.title"),
    lead: t(locale, "seo.blog.masterclass.desc"),
    cards: sections.map((s, idx) => ({
      id: `step-${idx + 1}`,
      question: s.title,
      answer: s.paragraphs.join("\n\n"),
    })),
  };

  return (
    <CardArticle
      data={data}
      cover={{ src: coverPath, alt: "Steam Next Fest February 2026" }}
    />
  );
}
