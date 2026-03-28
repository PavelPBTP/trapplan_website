import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Footer from "@/components/sections/Footer";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/reddit-launch-support"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/reddit-launch-support"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "seo.reddit_launch_support.title");
  const description = t(locale, "seo.reddit_launch_support.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/reddit-launch-support"), origin).toString(),
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

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H17V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF0A5B] text-white">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Step({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <div className="relative rounded-[16px] bg-[#FF0A5B] px-6 pt-6 pb-7 text-white">
      <div className="absolute left-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[13px] font-extrabold text-black">
        {index}
      </div>
      <div className="pt-14 text-[14px] font-extrabold">{title}</div>
      <p className="mt-4 text-[14px] leading-6 text-white/80">{text}</p>
    </div>
  );
}

function RedditPostCard({
  subreddit,
  title,
  imageSrc,
  objectPosition,
  className,
  style,
  locale,
}: {
  subreddit: string;
  title: string;
  imageSrc: string;
  objectPosition: string;
  className?: string;
  style?: CSSProperties;
  locale: Parameters<typeof t>[0];
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.12)] " +
        (className ?? "")
      }
      style={style}
    >
      <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[#FF0A5B]" />
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold text-black">{subreddit}</div>
            <div className="truncate text-[11px] font-medium text-black/45">
              {t(locale, "reddit_launch_support.ui.post.posted_by")}
            </div>
          </div>
        </div>
        <div className="inline-flex items-center rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          {t(locale, "reddit_launch_support.ui.post.join")}
        </div>
      </div>

      <div className="px-4 pt-3 pb-3">
        <div className="line-clamp-2 text-[13px] font-extrabold leading-5 text-black">{title}</div>
      </div>

      <div className="relative h-[150px] bg-[#0F0F0F]">
        <Image
          src={imageSrc}
          alt={t(locale, "reddit_launch_support.ui.post.image_alt")}
          width={1000}
          height={750}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          ▲ 2.1k
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          💬 184
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          ↗ {t(locale, "reddit_launch_support.ui.post.share")}
        </div>
      </div>
    </div>
  );
}

export default async function RedditLaunchSupportPage() {
  const locale = await getRequestLocale();
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  {t(locale, "reddit_launch_support.ui.hero.title_01")}
                  <br />
                  {t(locale, "reddit_launch_support.ui.hero.title_02")}
                </h1>

                <p className="mt-5 max-w-[62ch] text-[14px] leading-6 text-black/60">
                  {t(locale, "reddit_launch_support.ui.hero.body")}
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href={withLocale(locale, "/form")}
                    className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                  >
                    {t(locale, "reddit_launch_support.ui.hero.cta")} <ArrowUpRightIcon />
                  </Link>
                  <div className="text-[18px] font-extrabold text-black">
                    {t(locale, "reddit_launch_support.ui.hero.price")}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
                  <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_40px_90px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/images/Reddit Hero.png"
                      alt={t(locale, "reddit_launch_support.ui.hero.image_alt")}
                      width={900}
                      height={720}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-[11px] leading-4 text-black/40">
                    {t(locale, "reddit_launch_support.ui.hero.image_disclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[28px]">
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="relative h-[280px] w-full max-w-[520px] overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/RLS.avif"
                      alt={t(locale, "reddit_launch_support.ui.section2.image_alt")}
                      fill
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                {t(locale, "reddit_launch_support.ui.section2.title_01")}
                <br />
                {t(locale, "reddit_launch_support.ui.section2.title_02")}
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                {t(locale, "reddit_launch_support.ui.section2.p1")}
              </p>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-6 text-black/60">
                {t(locale, "reddit_launch_support.ui.section2.p2")}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 lg:px-10">
          <div className="rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
            <div className="relative h-[320px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-white to-[#FFF5F8]">
              <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_25%_30%,rgba(255,10,91,0.14),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.07),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="relative h-[260px] w-full max-w-[820px]">
                  <RedditPostCard
                    subreddit="r gaming"
                    title="The Super Mario Galaxy Movie. Yoshi first look"
                    imageSrc="/images/RLS-1.png"
                    objectPosition="50% 25%"
                    className="absolute left-0 top-10 w-[290px]"
                    style={{ transform: "rotate(-6deg)" }}
                    locale={locale}
                  />
                  <RedditPostCard
                    subreddit="r gaming"
                    title="Fable gameplay overview. Xbox Developer Direct 2026"
                    imageSrc="/images/RLS-2.png"
                    objectPosition="50% 40%"
                    className="absolute left-1/2 top-0 w-[320px] -translate-x-1/2"
                    style={{ transform: "rotate(2deg)" }}
                    locale={locale}
                  />
                  <RedditPostCard
                    subreddit="r gaming"
                    title="When mobile gaming peaked"
                    imageSrc="/images/RLS-3.png"
                    objectPosition="50% 55%"
                    className="absolute right-0 top-12 w-[290px]"
                    style={{ transform: "rotate(7deg)" }}
                    locale={locale}
                  />
                </div>
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center text-[11px] leading-4 text-black/40">
                {t(locale, "reddit_launch_support.ui.section3.cards_disclaimer")}
              </p>
            </div>

            <div className="px-6 pt-10 pb-10 lg:px-12">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                {t(locale, "reddit_launch_support.ui.section3.title")}
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      {t(locale, "reddit_launch_support.ui.section3.bullet1.title")}
                    </span>{" "}
                    {t(locale, "reddit_launch_support.ui.section3.bullet1.text")}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      {t(locale, "reddit_launch_support.ui.section3.bullet2.title")}
                    </span>{" "}
                    {t(locale, "reddit_launch_support.ui.section3.bullet2.text")}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      {t(locale, "reddit_launch_support.ui.section3.bullet3.title")}
                    </span>{" "}
                    {t(locale, "reddit_launch_support.ui.section3.bullet3.text")}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      {t(locale, "reddit_launch_support.ui.section3.bullet4.title")}
                    </span>{" "}
                    {t(locale, "reddit_launch_support.ui.section3.bullet4.text")}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      {t(locale, "reddit_launch_support.ui.section3.bullet5.title")}
                    </span>{" "}
                    {t(locale, "reddit_launch_support.ui.section3.bullet5.text")}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href={withLocale(locale, "/form")}
                  className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  {t(locale, "reddit_launch_support.ui.section3.cta")} <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:px-10">
            <h2 className="text-center text-[18px] font-extrabold text-black">
              {t(locale, "reddit_launch_support.ui.section4.title")}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
              <Step
                index="1"
                title={t(locale, "reddit_launch_support.ui.section4.step1.title")}
                text={t(locale, "reddit_launch_support.ui.section4.step1.text")}
              />
              <Step
                index="2"
                title={t(locale, "reddit_launch_support.ui.section4.step2.title")}
                text={t(locale, "reddit_launch_support.ui.section4.step2.text")}
              />
              <Step
                index="3"
                title={t(locale, "reddit_launch_support.ui.section4.step3.title")}
                text={t(locale, "reddit_launch_support.ui.section4.step3.text")}
              />
              <Step
                index="4"
                title={t(locale, "reddit_launch_support.ui.section4.step4.title")}
                text={t(locale, "reddit_launch_support.ui.section4.step4.text")}
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href={withLocale(locale, "/form")}
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
              >
                {t(locale, "reddit_launch_support.ui.section4.cta")} <ArrowUpRightIcon />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
