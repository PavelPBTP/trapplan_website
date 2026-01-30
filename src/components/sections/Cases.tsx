"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { CASE_STUDIES } from "@/lib/data/cases";

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

function FeaturedCase({
  title,
  date,
  client,
  metric,
  description,
  theme,
  coverImage,
  href,
}: {
  title: string;
  date: string;
  client: string;
  metric: string;
  description: string;
  theme: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  href: string;
}) {
  return (
    <article className="h-full min-h-[620px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
      <div className="relative h-[220px] overflow-hidden sm:h-[260px]">
        {coverImage ? (
          <>
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </>
        ) : (
          <>
            <div className={"absolute inset-0 bg-gradient-to-br " + theme} />
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_55%),radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.35),transparent_60%)]" />
          </>
        )}
      </div>

      <div className="px-8 pt-8 pb-9">
        <div className="text-[12px] font-semibold leading-none text-black/60">
          <span>{date}</span>
          <span className="px-2">|</span>
          <span>{client}</span>
        </div>

        <h3 className="mt-4 min-h-[58px] text-[28px] font-extrabold leading-[1.05] tracking-tight text-black">
          {title}
        </h3>

        <div className="mt-5 text-[18px] font-extrabold tracking-tight text-black">
          {metric}
        </div>

        <p className="mt-3 max-w-[64ch] overflow-hidden text-[14px] leading-6 text-black/60 [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {description}
        </p>

        <div className="mt-7">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-6 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
          >
            View case study
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function CaseRow({
  title,
  meta,
  result,
  href,
  withDivider,
}: {
  title: string;
  meta: string;
  result: string;
  href: string;
  withDivider: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-start justify-between gap-6 py-5 transition-colors hover:bg-black/[0.02] ${
        withDivider ? "border-t border-black/10" : ""
      }`}
    >
      <div className="min-w-0">
        <div className="truncate text-[16px] font-extrabold leading-snug tracking-tight text-black">
          {title}
        </div>
        <div className="mt-2 truncate text-[12px] font-semibold leading-none text-black/55">
          {meta}
        </div>
        <div className="mt-3 truncate text-[14px] leading-6 text-black/60">{result}</div>
      </div>
      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors duration-200 group-hover:bg-zinc-200">
        <span className="transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
          <ArrowUpRightIcon />
        </span>
      </span>
    </a>
  );
}

export default function Cases() {
  const ROTATE_MS = 9500;
  const FADE_MS = 520;

  const METRIC_BY_SLUG: Record<string, string> = {
    "war-thunder-youtube-europe": "1M+ views per month",
    "enlisted-twitch-ads": "Reached 1,500+ new players",
    "crossout-new-players": "Expanded reach in Europe and the US",
    "war-thunder-performance-based": "Monthly creator activations with KPI focus",
    "world-of-tanks-usa": "Launched USA campaigns with structured creator delivery",
    "brief-for-youtube-twitch": "Clear creator direction and execution system",
  };

  const RESULT_BY_SLUG: Record<string, string> = {
    "enlisted-twitch-ads": "Reached 1,500+ new players",
    "crossout-new-players": "Expanded reach in Europe and the US",
    "war-thunder-performance-based": "Monthly creator activations with KPI focus",
    "world-of-tanks-usa": "Launched USA campaigns with structured creator delivery",
    "brief-for-youtube-twitch": "Clear creator direction and execution system",
    "war-thunder-youtube-europe": "1M+ views per month",
  };

  const DESCRIPTION_OVERRIDE_BY_SLUG: Record<string, string> = {
    "war-thunder-youtube-europe":
      "YouTube advertising campaigns for WarThunder consistently generating over 1,000,000 views per month across key European regions.",
  };

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = CASE_STUDIES.length;

  const featured = useMemo(() => {
    if (!total) return null;
    return CASE_STUDIES[index % total];
  }, [index, total]);

  const listCases = useMemo(() => {
    if (!total) return [];
    const res = [] as typeof CASE_STUDIES;
    for (let i = 1; i <= Math.min(5, total - 1); i += 1) {
      res.push(CASE_STUDIES[(index + i) % total]);
    }
    return res;
  }, [index, total]);

  useEffect(() => {
    if (paused) return;
    if (total <= 1) return;

    const id = window.setInterval(() => {
      setIndex((v) => {
        setPrevIndex(v);
        return (v + 1) % total;
      });
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    if (prevIndex === index) return;

    const id = window.setTimeout(() => {
      setPrevIndex(index);
    }, FADE_MS + 60);

    return () => window.clearTimeout(id);
  }, [index, prevIndex]);

  return (
    <section className="bg-[#F3F3F3] pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="pt-10 sm:pt-14">
          <h2 className="text-[44px] font-extrabold leading-none tracking-tight text-black">
            Case Studies
          </h2>
          <p className="mt-4 text-[14px] leading-6 text-black/60">
            Real campaigns for real games.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="lg:col-span-6">
            <div className="relative min-h-[620px]">
              {featured ? (
                <>
                  <motion.div
                    key={`featured-prev-${prevIndex}`}
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
                    style={{ pointerEvents: "none" }}
                  >
                    {prevIndex !== index ? (
                      <FeaturedCase
                        title={CASE_STUDIES[prevIndex % total].title}
                        date={CASE_STUDIES[prevIndex % total].date}
                        client={CASE_STUDIES[prevIndex % total].client}
                        metric={
                          METRIC_BY_SLUG[CASE_STUDIES[prevIndex % total].slug] ?? "Case study"
                        }
                        description={
                          DESCRIPTION_OVERRIDE_BY_SLUG[CASE_STUDIES[prevIndex % total].slug] ??
                          CASE_STUDIES[prevIndex % total].excerpt
                        }
                        theme={CASE_STUDIES[prevIndex % total].theme}
                        coverImage={CASE_STUDIES[prevIndex % total].coverImage}
                        href={CASE_STUDIES[prevIndex % total].href}
                      />
                    ) : null}
                  </motion.div>

                  <motion.div
                    key={`featured-${index}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <FeaturedCase
                      title={featured.title}
                      date={featured.date}
                      client={featured.client}
                      metric={METRIC_BY_SLUG[featured.slug] ?? "Case study"}
                      description={
                        DESCRIPTION_OVERRIDE_BY_SLUG[featured.slug] ?? featured.excerpt
                      }
                      theme={featured.theme}
                      coverImage={featured.coverImage}
                      href={featured.href}
                    />
                  </motion.div>
                </>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative min-h-[620px]">
              <motion.div
                key={`list-prev-${prevIndex}`}
                className="absolute inset-0 rounded-[22px] bg-white px-7 pt-1 pb-2 shadow-[0_40px_90px_rgba(0,0,0,0.06)]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
                style={{ pointerEvents: "none" }}
              >
                {prevIndex !== index
                  ? (() => {
                      const res = [] as typeof CASE_STUDIES;
                      for (let i = 1; i <= Math.min(5, total - 1); i += 1) {
                        res.push(CASE_STUDIES[(prevIndex + i) % total]);
                      }
                      return res;
                    })().map((c, idx) => (
                      <CaseRow
                        key={c.slug}
                        title={c.title}
                        meta={`${c.date} | ${c.client}`}
                        result={RESULT_BY_SLUG[c.slug] ?? c.excerpt}
                        href={c.href}
                        withDivider={idx !== 0}
                      />
                    ))
                  : null}
              </motion.div>

              <motion.div
                key={`list-${index}`}
                className="absolute inset-0 rounded-[22px] bg-white px-7 pt-1 pb-2 shadow-[0_40px_90px_rgba(0,0,0,0.06)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
              >
                {listCases.map((c, idx) => (
                  <CaseRow
                    key={c.slug}
                    title={c.title}
                    meta={`${c.date} | ${c.client}`}
                    result={RESULT_BY_SLUG[c.slug] ?? c.excerpt}
                    href={c.href}
                    withDivider={idx !== 0}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.trapplan.com/our-cases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-7 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
          >
            View all case studies
            <span aria-hidden className="text-[16px] leading-none">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
