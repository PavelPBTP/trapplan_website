import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
import { Eyebrow, MonoEyebrow } from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbList, SITE_ORIGIN } from "@/lib/seo";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { stagger } from "@/lib/stagger";

// ── Content (EN-first; other locales fall back to EN via t()) ──────────────

const REASONS = [
  {
    title: "The store-page promise is unclear",
    body: "Visitors land, can't tell what the game is in three seconds, and bounce. Wishlists never fire because the page never earns the intent.",
  },
  {
    title: "The capsule doesn't earn the click",
    body: "Most discovery happens at thumbnail size. If the capsule loses against neighbours in the Discovery Queue, traffic never reaches the page at all.",
  },
  {
    title: "Traffic doesn't match the page",
    body: "Sending broad, low-intent clicks to a page built for a niche audience tanks conversion and trains the algorithm to show you less.",
  },
] as const;

const SERVICES = [
  {
    n: "01",
    title: "Store-page & capsule audit",
    body: "We pull apart positioning, capsule, short description, tags and the first scroll, then rebuild them around one clear promise that converts cold traffic.",
  },
  {
    n: "02",
    title: "Wishlist velocity tracking",
    body: "We set realistic targets from your genre and stage, then track wishlist velocity against clean Steamworks data — not vanity reach numbers.",
  },
  {
    n: "03",
    title: "Creator & UGC traffic",
    body: "Structured TikTok, YouTube and Twitch activations that send qualified, on-promise traffic — hooks aligned to your capsule so conversion holds.",
  },
  {
    n: "04",
    title: "Festival & event timing",
    body: "We plan around Next Fest and seasonal sales so your spikes land when Steam is watching and wishlist conversions compound.",
  },
  {
    n: "05",
    title: "Regional pricing & conversion",
    body: "We pressure-test regional pricing so cross-border traffic converts instead of bouncing on a price that reads wrong in-market.",
  },
  {
    n: "06",
    title: "Reporting tied to Steamworks",
    body: "Every campaign maps outbound CTR to in-platform conversion rate and wishlist velocity, so you always know what actually moved the number.",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We diagnose where wishlists leak — capsule, page, traffic mix, pricing — and rank fixes by impact.",
  },
  {
    n: "02",
    title: "Plan",
    body: "A concrete plan: what to change on the page, which channels to run, and the velocity target to hit.",
  },
  {
    n: "03",
    title: "Execute",
    body: "We run the store-page work and creator campaigns together so traffic and conversion improve in lockstep.",
  },
  {
    n: "04",
    title: "Measure",
    body: "Weekly read on wishlist velocity and conversion rate against clean tracking — we double down on what compounds.",
  },
] as const;

const DELIVERABLES = [
  "Capsule & store-page conversion audit",
  "Wishlist velocity target & tracking setup",
  "Channel plan (TikTok / YouTube / Twitch)",
  "Festival & sale calendar",
  "Regional pricing review",
  "Steamworks-based weekly reporting",
] as const;

const FAQ = [
  {
    q: "Why are my Steam wishlists not growing?",
    a: "In most cases it is a conversion problem, not a traffic problem. The store-page promise is unclear, the capsule does not earn clicks at thumbnail size, or the traffic you send does not match the page. We diagnose which one is costing you wishlists and fix it first.",
  },
  {
    q: "How fast can wishlists grow?",
    a: "It depends on genre, stage and budget. Once the page converts and qualified traffic is flowing, wishlist velocity usually responds within the first few campaign waves. We set a realistic target from your data before we start.",
  },
  {
    q: "Do you guarantee a specific number of wishlists?",
    a: "No serious partner can honestly guarantee an exact number — anyone who does is selling you reach, not results. We commit to a clear process, a realistic target, and transparent Steamworks-based reporting so you can see exactly what moved.",
  },
  {
    q: "What do you need from us to start?",
    a: "Access to your Steamworks data, your current store page, and a short call about positioning and budget. From there we run the audit and come back with a prioritised plan.",
  },
  {
    q: "Can I just use the wishlist calculator?",
    a: "Yes. The Steam Wishlist Calculator is free and lets you set targets and sanity-check your current velocity. It is a good first step before deciding whether you want hands-on help.",
  },
] as const;

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/no-wishlists-on-steam"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/no-wishlists-on-steam"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "seo.no_wishlists.title");
  const description = t(locale, "seo.no_wishlists.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/no-wishlists-on-steam"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: new URL("/og", origin).toString(), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function NoWishlistsOnSteamPage() {
  const locale = await getRequestLocale();
  const canonical = new URL(withLocale(locale, "/no-wishlists-on-steam"), SITE_ORIGIN).toString();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Steam wishlist growth",
    name: "Steam Wishlist Growth",
    url: canonical,
    areaServed: "Worldwide",
    description:
      "Hands-on Steam wishlist growth: store-page and capsule conversion, qualified creator traffic, festival timing and Steamworks-based reporting.",
    provider: { "@type": "Organization", name: "TrapPlan", url: SITE_ORIGIN },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          { name: "Steam wishlist growth" },
        ])}
      />
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      {/* Hero */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-[104px] lg:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-[-40px] h-[520px] w-[900px] -translate-x-1/2 opacity-50 blur-[20px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
          }}
        />
        <div className="tp-grain" />

        <div className="relative max-w-[820px]">
          <MonoEyebrow label="Steam wishlist growth" dot />
          <h1 className="mt-5 font-display text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-bone text-balance md:text-[64px]">
            Your Steam wishlists stalled.{" "}
            <span className="text-[var(--accent)]">We fix the engine behind them.</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-[19px] leading-[1.6] text-secondary">
            Low wishlist growth is almost always a conversion problem, not a traffic problem. We
            rebuild the store page, send qualified traffic, and track velocity against real
            Steamworks data — so attention turns into wishlists that compound.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-[14px]">
            <Button href={withLocale(locale, "/form")} size="lg" glow>
              Request a quote <span>↗</span>
            </Button>
            <Button href={withLocale(locale, "/steam-wishlist-calculator")} variant="secondary" size="lg">
              Steam Wishlist Calculator <span>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Reframe / reasons */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <Eyebrow number="01" label="Why wishlists stall" />
        <h2 className="mt-5 max-w-[760px] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-bone md:text-[40px]">
          More traffic won&apos;t help a page that doesn&apos;t convert.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-[14px] md:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              as="div"
              delay={stagger(i)}
              className="rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-7"
            >
              <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-bone">
                {r.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-secondary">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <Eyebrow number="02" label="What we do" />
        <h2 className="mt-5 max-w-[760px] font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-bone md:text-[40px]">
          A wishlist-growth program, not a one-off boost.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.n}
              as="div"
              delay={stagger(i)}
              className="group rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-7 transition-colors hover:border-[rgba(244,241,234,0.18)]"
            >
              <div className="font-mono text-[12px] tracking-[0.1em] text-[var(--accent)]">{s.n}</div>
              <h3 className="mt-3 font-display text-[18px] font-semibold tracking-[-0.01em] text-bone">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-secondary">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <Eyebrow number="03" label="How it works" />
        <div className="mt-10 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              as="div"
              delay={stagger(i)}
              className="relative rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-7"
            >
              <div className="font-display text-[34px] font-bold leading-none text-[rgba(244,241,234,0.14)]">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-[18px] font-semibold tracking-[-0.01em] text-bone">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-secondary">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Deliverables */}
        <div className="mt-8 rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
            What you get
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[15px] leading-[1.5] text-secondary">
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--accent)]" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <Eyebrow number="04" label="FAQ" />
        <div className="mt-8 max-w-[820px] divide-y divide-[rgba(244,241,234,0.08)] border-y border-[rgba(244,241,234,0.08)]">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-semibold tracking-[-0.01em] text-bone">
                {f.q}
                <span className="font-mono text-[18px] text-tertiary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.65] text-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-[1240px] px-6 pb-24 pt-8 lg:px-8">
        <div className="relative overflow-hidden rounded-[18px] border border-[rgba(244,241,234,0.1)] bg-card px-8 py-12 text-center md:py-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[600px] -translate-x-1/2 opacity-40 blur-[24px]"
            style={{
              background:
                "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
            }}
          />
          <h2 className="relative font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-bone md:text-[36px]">
            Let&apos;s find what&apos;s costing you wishlists.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-secondary">
            Send us your store page and Steamworks numbers — we&apos;ll come back with a prioritised
            plan to grow wishlist velocity.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-[14px]">
            <Button href={withLocale(locale, "/form")} size="lg" glow>
              Request a quote <span>↗</span>
            </Button>
            <Link
              href={withLocale(locale, "/#cases")}
              className="text-[15px] font-medium text-secondary no-underline transition-colors hover:text-bone"
            >
              See live-game case studies →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
