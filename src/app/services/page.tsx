import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { t } from "@/lib/copy";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { clampText, ogImageUrl } from "@/lib/seo";

const SERVICE_PAGES: { slug: string; title: string; tagline: string }[] = [
  {
    slug: "go-to-market-strategy",
    title: "Go-to-Market Strategy",
    tagline: "A launch plan from positioning to release week.",
  },
  {
    slug: "influencer-marketing-for-games",
    title: "Influencer Marketing for Games",
    tagline: "Creator campaigns tied to wishlists and installs.",
  },
  {
    slug: "influencer-marketing-remote-team",
    title: "Influencer Remote Team",
    tagline: "A senior IM pod inside your studio process.",
  },
  {
    slug: "performance-based-campaigns",
    title: "Performance Campaigns",
    tagline: "Paid and influencer planned as one motion.",
  },
  {
    slug: "reddit-campaigns",
    title: "Reddit Campaigns",
    tagline: "Subreddit research, organic posts and Reddit Ads.",
  },
  {
    slug: "social-media-for-games",
    title: "Social Media for Games",
    tagline: "TikTok, X, Instagram, YouTube and Discord — one team.",
  },
  {
    slug: "content-production",
    title: "Content Production",
    tagline: "Trailers, key art and store copy at studio quality.",
  },
  {
    slug: "game-key-distibution",
    title: "Game Key Distribution",
    tagline: "Vetted creators, signed briefs, tracked deliveries.",
  },
  {
    slug: "pr-and-communications",
    title: "PR & Communications",
    tagline: "Press releases, embargoes and review outreach.",
  },
];

const PACKAGE_PAGES: { slug: string; title: string; tagline: string }[] = [
  { slug: "gameplay-trailer", title: "Gameplay Trailer", tagline: "Turnkey trailer in every store-ready format." },
  { slug: "influencer-micro-campaign", title: "Influencer Micro-Campaign", tagline: "Fixed-scope creator burst — vetted, briefed, reported." },
  { slug: "paid-ads-setup", title: "Paid Ads Setup", tagline: "Tracking, audiences, creatives ready to scale." },
  { slug: "pr-starter-pack", title: "PR Starter Pack", tagline: "Positioning, press kit and first outreach round." },
  { slug: "reddit-launch-support", title: "Reddit Launch Support", tagline: "Launch-week Reddit support, paid and organic." },
  { slug: "tiktok-package-20-videos", title: "TikTok Package — 20 Videos", tagline: "Native TikTok content tuned for game discovery." },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/services"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/services"), origin).toString()]),
  ) as Record<string, string>;

  const title = `${t(locale, "services.title")} | Trap Plan`;
  const description = clampText(t(locale, "services_hub.subtitle"), 160);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/services"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [
        {
          url: ogImageUrl(origin, { title }),
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
      images: [ogImageUrl(origin, { title })],
    },
  };
}

export default async function ServicesHubPage() {
  const locale = await getRequestLocale();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t(locale, "services.title"),
    url: `https://www.trapplan.com${withLocale(locale, "/services")}`,
    numberOfItems: SERVICE_PAGES.length,
    itemListElement: SERVICE_PAGES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.trapplan.com${withLocale(locale, `/services/${s.slug}`)}`,
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14">
        <Breadcrumbs
          trail={[
            { name: t(locale, "ui.breadcrumb.home"), href: withLocale(locale, "/") },
            { name: t(locale, "nav.services"), href: withLocale(locale, "/services") },
          ]}
        />

        <h1 className="mt-6 text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
          {t(locale, "services_hub.title")}
        </h1>
        <p className="mt-5 max-w-3xl text-[16px] leading-7 text-black/65">
          {t(locale, "services_hub.subtitle")}
        </p>

        <section className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PAGES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={withLocale(locale, `/services/${s.slug}`)}
                  className="group block h-full rounded-[20px] border border-black/10 bg-white p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <h2 className="text-[20px] font-extrabold leading-tight tracking-tight text-black group-hover:text-[#FF0A5B]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">{s.tagline}</p>
                  <span className="mt-5 inline-block text-[14px] font-semibold text-[#FF0A5B]">
                    {t(locale, "services_hub.cta_learn_more")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-black">
            {t(locale, "services_hub.packages_title")}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-black/65">
            {t(locale, "services_hub.packages_subtitle")}
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGE_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={withLocale(locale, `/${p.slug}`)}
                  className="group block h-full rounded-[20px] border border-black/10 bg-zinc-50 p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-[18px] font-extrabold leading-tight tracking-tight text-black group-hover:text-[#FF0A5B]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">{p.tagline}</p>
                  <span className="mt-5 inline-block text-[14px] font-semibold text-[#FF0A5B]">
                    {t(locale, "services_hub.cta_learn_more")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-[24px] bg-black py-12 text-center text-white">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight">
              {t(locale, "cta.lets_talk")}
            </h2>
            <Link
              href={withLocale(locale, "/form")}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#FF0A5B] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
            >
              {t(locale, "cta.work_with_us")}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

