import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = withLocale(locale, "/games-co-publishing");
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, withLocale(l, "/games-co-publishing")]),
  ) as Record<string, string>;

  const title = t(locale, "seo.games_co_publishing.title");
  const description = t(locale, "seo.games_co_publishing.desc");

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function SectionKicker({ children }: { children: string }) {
  return <div className="text-[12px] font-semibold tracking-wide text-white/55">{children}</div>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">{children}</h2>
  );
}

function CTAButtons({ locale }: { locale: Parameters<typeof t>[0] }) {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#FF1F6D] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_70px_rgba(255,31,109,0.40)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_22px_90px_rgba(255,31,109,0.55)]"
      >
        {t(locale, "games_co_publishing.cta.lets_talk")}
      </a>
    </div>
  );
}

function ContactField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-black/60">{label}</span>
      <input
        className="mt-2 w-full rounded-[12px] bg-[#F5F5F5] px-4 py-4 text-[14px] text-black placeholder:text-black/40 outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FF1F6D]/40"
        placeholder={placeholder}
      />
    </label>
  );
}

function MessageField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-black/60">{label}</span>
      <textarea
        className="mt-2 w-full resize-y rounded-[12px] bg-[#F5F5F5] px-4 py-4 text-[14px] text-black placeholder:text-black/40 outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FF1F6D]/40"
        placeholder={placeholder}
        rows={5}
      />
    </label>
  );
}

function SectionBackdrop({ variant, className }: { variant: "operator" | "cyborg" | "mech"; className?: string }) {
  const strokeA = "rgba(56,189,248,0.28)";
  const strokeB = "rgba(255,31,109,0.22)";
  const fillDark = "rgba(0,0,0,0.22)";

  if (variant === "operator") {
    return (
      <svg
        viewBox="0 0 520 520"
        className={className}
        role="img"
        aria-label="Cyberpunk operator silhouette"
      >
        <defs>
          <filter id="opGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <linearGradient id="opNeon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38BDF8" stopOpacity="0.32" />
            <stop offset="0.6" stopColor="#FF1F6D" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        <g opacity="0.9">
          <path
            d="M265 88c56 0 94 42 94 94 0 42-22 74-55 88v44c0 10 8 18 18 18h40c24 0 44 20 44 44v64H124v-64c0-24 20-44 44-44h40c10 0 18-8 18-18v-44c-33-14-55-46-55-88 0-52 38-94 94-94z"
            fill={fillDark}
            stroke="url(#opNeon)"
            strokeWidth="3"
          />
          <path d="M214 188h102" stroke={strokeA} strokeWidth="6" strokeLinecap="round" opacity="0.75" />
          <path d="M236 214h58" stroke={strokeB} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
          <path d="M150 412h220" stroke="rgba(255,255,255,0.10)" strokeWidth="2" opacity="0.75" />
          <path d="M192 160c10-20 34-34 73-34 38 0 62 14 72 34" stroke={strokeA} strokeWidth="4" opacity="0.65" />
          <circle cx="330" cy="214" r="4" fill="rgba(56,189,248,0.55)" filter="url(#opGlow)" />
          <circle cx="190" cy="214" r="4" fill="rgba(255,31,109,0.45)" filter="url(#opGlow)" />
        </g>
      </svg>
    );
  }

  if (variant === "cyborg") {
    return (
      <svg viewBox="0 0 520 520" className={className} role="img" aria-label="Cyborg head silhouette">
        <defs>
          <filter id="cyGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <g opacity="0.9">
          <path
            d="M260 86c78 0 134 58 134 132 0 56-24 92-52 116v44c0 16 10 28 26 28h26v50H126v-50h26c16 0 26-12 26-28v-44c-28-24-52-60-52-116 0-74 56-132 134-132z"
            fill={fillDark}
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="2"
          />
          <path d="M188 210h144" stroke={strokeA} strokeWidth="10" strokeLinecap="round" opacity="0.65" />
          <path d="M210 210h54" stroke={strokeB} strokeWidth="10" strokeLinecap="round" opacity="0.65" />
          <path d="M344 164l54-28" stroke={strokeA} strokeWidth="4" opacity="0.55" />
          <path d="M360 256l60 10" stroke={strokeB} strokeWidth="3" opacity="0.45" />
          <circle cx="372" cy="146" r="6" fill="rgba(56,189,248,0.25)" filter="url(#cyGlow)" />
          <circle cx="412" cy="266" r="5" fill="rgba(255,31,109,0.18)" filter="url(#cyGlow)" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 520" className={className} role="img" aria-label="Mech silhouette">
      <defs>
        <linearGradient id="mx" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8" stopOpacity="0.24" />
          <stop offset="0.65" stopColor="#FF1F6D" stopOpacity="0.18" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <g opacity="0.9">
        <path
          d="M160 170l70-60h60l70 60v84l-30 38v96H190v-96l-30-38v-84z"
          fill={fillDark}
          stroke="url(#mx)"
          strokeWidth="3"
        />
        <path d="M210 210h100" stroke={strokeA} strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <path d="M238 250h44" stroke={strokeB} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <path d="M190 388h140" stroke="rgba(255,255,255,0.10)" strokeWidth="2" opacity="0.7" />
        <path d="M120 238h40" stroke={strokeA} strokeWidth="4" opacity="0.5" />
        <path d="M360 238h40" stroke={strokeB} strokeWidth="4" opacity="0.45" />
      </g>
    </svg>
  );
}

export default async function GamesCoPublishingPage() {
  const locale = await getRequestLocale();
  const partnershipPillars = [
    {
      title: t(locale, "games_co_publishing.model.pillar.01.title"),
      copy: t(locale, "games_co_publishing.model.pillar.01.body"),
    },
    {
      title: t(locale, "games_co_publishing.model.pillar.02.title"),
      copy: t(locale, "games_co_publishing.model.pillar.02.body"),
    },
    {
      title: t(locale, "games_co_publishing.model.pillar.03.title"),
      copy: t(locale, "games_co_publishing.model.pillar.03.body"),
    },
  ];

  const executionAreas = [
    {
      title: t(locale, "games_co_publishing.execution.area.01.title"),
      copy: t(locale, "games_co_publishing.execution.area.01.body"),
    },
    {
      title: t(locale, "games_co_publishing.execution.area.02.title"),
      copy: t(locale, "games_co_publishing.execution.area.02.body"),
    },
    {
      title: t(locale, "games_co_publishing.execution.area.03.title"),
      copy: t(locale, "games_co_publishing.execution.area.03.body"),
    },
    {
      title: t(locale, "games_co_publishing.execution.area.04.title"),
      copy: t(locale, "games_co_publishing.execution.area.04.body"),
    },
    {
      title: t(locale, "games_co_publishing.execution.area.05.title"),
      copy: t(locale, "games_co_publishing.execution.area.05.body"),
    },
  ];

  const steps = [
    {
      label: t(locale, "games_co_publishing.process.step.01.label"),
      title: t(locale, "games_co_publishing.process.step.01.title"),
      copy: t(locale, "games_co_publishing.process.step.01.body"),
    },
    {
      label: t(locale, "games_co_publishing.process.step.02.label"),
      title: t(locale, "games_co_publishing.process.step.02.title"),
      copy: t(locale, "games_co_publishing.process.step.02.body"),
    },
    {
      label: t(locale, "games_co_publishing.process.step.03.label"),
      title: t(locale, "games_co_publishing.process.step.03.title"),
      copy: t(locale, "games_co_publishing.process.step.03.body"),
    },
  ];

  const faqs = [
    {
      q: t(locale, "games_co_publishing.faq.01.q"),
      a: t(locale, "games_co_publishing.faq.01.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.02.q"),
      a: t(locale, "games_co_publishing.faq.02.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.03.q"),
      a: t(locale, "games_co_publishing.faq.03.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.04.q"),
      a: t(locale, "games_co_publishing.faq.04.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.05.q"),
      a: t(locale, "games_co_publishing.faq.05.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.06.q"),
      a: t(locale, "games_co_publishing.faq.06.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.07.q"),
      a: t(locale, "games_co_publishing.faq.07.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.08.q"),
      a: t(locale, "games_co_publishing.faq.08.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.09.q"),
      a: t(locale, "games_co_publishing.faq.09.a"),
    },
    {
      q: t(locale, "games_co_publishing.faq.10.q"),
      a: t(locale, "games_co_publishing.faq.10.a"),
    },
  ];

  return (
    <main className="bg-[#050508] text-white">
      <section className="relative overflow-hidden bg-[#050508]">
        <div className="pointer-events-none absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-90 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,31,109,0.26),transparent_55%),radial-gradient(circle_at_75%_35%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[64px]">
                {t(locale, "games_co_publishing.hero.title")}
              </h1>

              <p className="mt-5 text-[18px] leading-7 text-white/75 sm:text-[20px]">
                {t(locale, "games_co_publishing.hero.kicker")}
              </p>

              <p className="mt-7 text-[15px] leading-7 text-white/65">
                {t(locale, "games_co_publishing.hero.body")}
              </p>

              <CTAButtons locale={locale} />
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[52%] lg:block" aria-hidden>
            <div
              className="absolute right-[-60px] top-[-40px] h-[760px] w-[760px] opacity-[0.95]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(closest-side at 52% 46%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(closest-side at 52% 46%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
              }}
            >
              <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_35%_35%,rgba(255,31,109,0.20),transparent_60%),radial-gradient(circle_at_70%_45%,rgba(56,189,248,0.16),transparent_60%)] blur-2xl" />
              <svg
                viewBox="0 0 900 700"
                className="relative h-full w-full -rotate-[6deg] scale-[1.02]"
                role="img"
                aria-label="Game-themed illustration"
              >
                <defs>
                  <radialGradient id="bgPink" cx="30%" cy="30%" r="70%">
                    <stop offset="0" stopColor="#FF1F6D" stopOpacity="0.30" />
                    <stop offset="1" stopColor="#FF1F6D" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="bgBlue" cx="75%" cy="35%" r="75%">
                    <stop offset="0" stopColor="#38BDF8" stopOpacity="0.22" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                  <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" />
                  </filter>
                  <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FF1F6D" stopOpacity="0.95" />
                    <stop offset="0.55" stopColor="#38BDF8" stopOpacity="0.75" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.18" />
                  </linearGradient>
                </defs>

              <rect x="0" y="0" width="900" height="700" fill="none" />
              <circle cx="260" cy="220" r="220" fill="url(#bgPink)" />
              <circle cx="650" cy="260" r="260" fill="url(#bgBlue)" />

              <g opacity="0.35">
                {Array.from({ length: 18 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={120 + i * 40}
                    cy={120 + (i % 4) * 24}
                    r={i % 3 === 0 ? 2.4 : 1.6}
                    fill="rgba(255,255,255,0.22)"
                  />
                ))}
              </g>

              <g opacity="0.9">
                <path
                  d="M120 560 C 220 500, 330 510, 420 540 C 520 572, 640 560, 780 500"
                  fill="none"
                  stroke="url(#neon)"
                  strokeWidth="4"
                  opacity="0.55"
                />
                <path
                  d="M120 585 C 240 535, 360 560, 460 592 C 560 624, 660 610, 780 560"
                  fill="none"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="2"
                />
              </g>

              <g transform="translate(310 250)">
                <path
                  d="M140 20 L 210 70 L 168 120 L 98 70 Z"
                  fill="rgba(0,0,0,0.30)"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="2"
                />
                <path
                  d="M140 20 L 210 70 L 210 150 L 140 110 Z"
                  fill="rgba(56,189,248,0.12)"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />
                <path
                  d="M140 20 L 140 110 L 70 150 L 70 70 Z"
                  fill="rgba(255,31,109,0.12)"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />
              </g>

              <g transform="translate(210 320)">
                <circle cx="120" cy="78" r="52" fill="#0B0B10" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
                <path
                  d="M84 78 C 96 62, 110 54, 120 54 C 130 54, 144 62, 156 78"
                  fill="none"
                  stroke="rgba(255,31,109,0.85)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M88 148 C 100 124, 116 112, 136 112 C 156 112, 172 126, 182 148"
                  fill="#0B0B10"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                />
                <path
                  d="M64 146 L 32 180 L 52 198 L 86 168"
                  fill="#0B0B10"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                />
                <path
                  d="M184 146 L 214 166 L 246 144"
                  fill="none"
                  stroke="rgba(56,189,248,0.55)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <rect x="206" y="92" width="22" height="120" rx="10" fill="rgba(255,255,255,0.08)" />
                <path
                  d="M217 92 L 217 212"
                  stroke="rgba(255,31,109,0.55)"
                  strokeWidth="3"
                />
                <path
                  d="M214 106 L 220 106"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="3"
                />
              </g>

              <g transform="translate(520 360)">
                <circle cx="120" cy="70" r="58" fill="#0B0B10" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
                <circle cx="100" cy="58" r="10" fill="rgba(56,189,248,0.85)" />
                <circle cx="142" cy="66" r="7" fill="rgba(255,31,109,0.75)" />
                <path
                  d="M84 160 C 96 134, 116 122, 140 122 C 164 122, 186 136, 198 160"
                  fill="#0B0B10"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                />
                <path
                  d="M200 110 L 238 96 L 256 126 L 220 140"
                  fill="rgba(56,189,248,0.10)"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="2"
                />
                <path
                  d="M238 96 L 280 72"
                  stroke="rgba(56,189,248,0.55)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>

              <g filter="url(#softGlow)">
                <path d="M620 160 L 638 196 L 678 202 L 646 228 L 656 268 L 620 248 L 584 268 L 594 228 L 562 202 L 602 196 Z" fill="rgba(255,31,109,0.25)" />
                <path d="M740 220 L 754 246 L 782 250 L 760 268 L 768 296 L 740 282 L 712 296 L 720 268 L 698 250 L 726 246 Z" fill="rgba(56,189,248,0.20)" />
              </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10" aria-hidden>
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,31,109,0.55),rgba(56,189,248,0.35),transparent)]" />
      </div>

      <section className="bg-[#050508]">
        <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="pointer-events-none absolute right-[-40px] top-[-40px] hidden opacity-[0.20] lg:block" aria-hidden>
            <SectionBackdrop variant="operator" className="h-[360px] w-[360px]" />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "games_co_publishing.model.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "games_co_publishing.model.title")}</SectionTitle>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {t(locale, "games_co_publishing.model.body")}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {partnershipPillars.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-white/12 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_22px_70px_rgba(0,0,0,0.45)]"
                  >
                    <div className="text-[12px] font-semibold tracking-wide text-white/45">
                      {t(locale, "games_co_publishing.model.pillar_label")}
                    </div>
                    <div className="mt-2 text-[16px] font-extrabold tracking-tight text-white">{item.title}</div>
                    <p className="mt-3 text-[14px] leading-6 text-white/65">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10" aria-hidden>
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>

      <section className="bg-[#050508]">
        <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="pointer-events-none absolute left-[-56px] top-[22px] hidden opacity-[0.18] lg:block" aria-hidden>
            <SectionBackdrop variant="mech" className="h-[380px] w-[380px]" />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "games_co_publishing.execution.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "games_co_publishing.execution.title")}</SectionTitle>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {t(locale, "games_co_publishing.execution.body")}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-white/10 overflow-hidden rounded-[26px] border border-white/12 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_90px_rgba(0,0,0,0.55)]">
                {executionAreas.map((item, idx) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-1 gap-4 px-6 py-6 transition-colors hover:bg-white/[0.06] lg:grid-cols-12"
                  >
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-[2px] flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/12 bg-black/30 text-[12px] font-extrabold text-white/80">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <div className="text-[15px] font-extrabold leading-6 text-white">{item.title}</div>
                          <div className="mt-2 h-px w-10 rounded-full bg-[#FF1F6D]/70 shadow-[0_0_18px_rgba(255,31,109,0.45)]" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-[14px] leading-7 text-white/65">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10" aria-hidden>
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,31,109,0.35),rgba(56,189,248,0.20),transparent)]" />
      </div>

      <section className="bg-[#07070B]">
        <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="pointer-events-none absolute right-[-70px] top-[10px] hidden opacity-[0.18] lg:block" aria-hidden>
            <SectionBackdrop variant="cyborg" className="h-[400px] w-[400px]" />
          </div>
          <SectionKicker>{t(locale, "games_co_publishing.process.kicker")}</SectionKicker>
          <SectionTitle>{t(locale, "games_co_publishing.process.title")}</SectionTitle>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.label}
                className="rounded-[26px] border border-white/12 bg-white/5 px-7 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_90px_rgba(0,0,0,0.55)]"
              >
                <div className="text-[12px] font-semibold tracking-wide text-white/45">{s.label}</div>
                <div className="mt-3 text-[16px] font-extrabold tracking-tight text-white">{s.title}</div>
                <p className="mt-3 text-[14px] leading-6 text-white/60">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050508]">
        <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="pointer-events-none absolute left-[-70px] top-[18px] hidden opacity-[0.16] lg:block" aria-hidden>
            <SectionBackdrop variant="operator" className="h-[400px] w-[400px]" />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "games_co_publishing.faq.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "games_co_publishing.faq.title")}</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[22px] border border-white/12 bg-white/5 px-6 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_22px_70px_rgba(0,0,0,0.45)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <div className="text-[15px] font-semibold leading-7 text-white">{item.q}</div>
                      <div className="mt-1 text-white/35 transition-transform duration-200 group-open:rotate-45">
                        <span className="text-[18px] leading-none">+</span>
                      </div>
                    </summary>
                    <div className="mt-3 text-[15px] leading-7 text-white/65">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                {t(locale, "games_co_publishing.contact.title")}
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {t(locale, "games_co_publishing.contact.body")}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[24px] bg-white px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="text-[12px] font-semibold tracking-wide text-black/45">
                  {t(locale, "games_co_publishing.contact.card_kicker")}
                </div>
                <div className="mt-3 text-[22px] font-extrabold tracking-tight text-black">
                  {t(locale, "games_co_publishing.contact.card_title")}
                </div>

                <form className="mt-7 space-y-5" action="#">
                  <ContactField
                    label={t(locale, "games_co_publishing.contact.field.name.label")}
                    placeholder={t(locale, "games_co_publishing.contact.field.name.placeholder")}
                  />
                  <ContactField
                    label={t(locale, "games_co_publishing.contact.field.studio.label")}
                    placeholder={t(locale, "games_co_publishing.contact.field.studio.placeholder")}
                  />
                  <MessageField
                    label={t(locale, "games_co_publishing.contact.field.message.label")}
                    placeholder={t(locale, "games_co_publishing.contact.field.message.placeholder")}
                  />

                  <button
                    type="button"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#FF1F6D] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,31,109,0.30)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.42)]"
                  >
                    {t(locale, "games_co_publishing.contact.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
