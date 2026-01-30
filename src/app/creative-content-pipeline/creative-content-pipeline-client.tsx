"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type FlowBlock = {
  title: string;
  body: string;
  bullets: string[];
};

type FAQItem = {
  q: string;
  a: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-10 lg:px-10 lg:pt-14">
      <div className="rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 gap-8 px-6 pt-10 pb-10 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em] text-black/50">
              <span className="h-[8px] w-[8px] rounded-full bg-[#FF0A5B]" />
              Global Service
            </div>

            <h1 className="mt-4 text-[44px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[56px]">
              Creative Content Pipeline
            </h1>
            <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-black/60">
              Not a one-off trailer. A system that produces a steady flow of platform-native assets for Steam and consoles, from announcement to post-launch updates.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/form"
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.30)] transition-colors hover:bg-[#E6004E]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="text-[13px] font-semibold text-black/60">Steam and Console focus</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-center lg:justify-end">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-white to-[#FFF5F8] sm:h-[260px] lg:h-[300px] lg:w-[520px]">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,10,91,0.14),transparent_58%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
              <Image
                src="/images/TrailerHero.avif"
                alt="Creative content pipeline illustration"
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-cover opacity-90"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineFlow() {
  const blocks = useMemo<FlowBlock[]>(
    () => [
      {
        title: "Platform-Native Formats",
        body:
          "The pipeline covers the formats that move real outcomes on Steam and consoles. Each asset is built for the platform where it will live.",
        bullets: [
          "High-impact trailers for Steam and YouTube",
          "Shortform for TikTok and X that matches your game fantasy",
          "Steam page creative and store assets that improve conversion",
        ],
      },
      {
        title: "Iteration and Testing",
        body:
          "We do not just produce. We iterate. The pipeline is designed to learn what drives Wishlists and clicks, then repeat what works.",
        bullets: [
          "Performance-informed creative iterations",
          "Clear hypotheses and next versions",
          "A feedback loop that compounds over time",
        ],
      },
      {
        title: "Consistency",
        body:
          "A steady beat of updates keeps your game relevant. The system stays active from announcement through post-launch.",
        bullets: [
          "Structured cadence for beats and updates",
          "Always-on production without chaos",
          "Assets aligned to your launch calendar",
        ],
      },
    ],
    [],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14 lg:px-10">
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
            The Pipeline
          </div>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-black lg:text-[44px]">
            A system that keeps shipping.
          </h2>
          <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-black/60">
            The goal is not one deliverable. It is a continuous flow of high-performing assets.
          </p>
        </div>

        {blocks.map((b) => (
          <div key={b.title} className="rounded-[22px] bg-white px-6 py-7 shadow-[0_30px_70px_rgba(0,0,0,0.06)] lg:px-10">
            <div className="flex items-center justify-between gap-6">
              <div className="text-[22px] font-extrabold leading-tight tracking-tight text-black">{b.title}</div>
              <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#FF0A5B]" />
            </div>
            <p className="mt-4 max-w-[86ch] text-[14px] leading-6 text-black/60">{b.body}</p>
            <ul className="mt-5 space-y-2">
              {b.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] leading-6 text-black/70">
                  <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SideBySideFAQ() {
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: "What assets are included in the pipeline?",
        a: "Shorts, trailers, Steam page creative, key art adaptations, and high-performing ad creatives.",
      },
      {
        q: "How do you ensure consistency with the game's art style?",
        a: "We integrate with your team’s vision. We align on references, tone, and constraints so every asset feels native to the game world.",
      },
      {
        q: "Is this just for the launch?",
        a: "No. It is a full pipeline for speed and iteration across platforms, from announcement through post-launch updates.",
      },
      {
        q: "Can you handle Steam page assets?",
        a: "Yes. We produce everything from headers to animated GIFs for the description to maximize conversion.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
      <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-[#FF0A5B]/[0.06]" />
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,10,91,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/40 to-white/90" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center gap-2 text-[14px] font-extrabold text-[#FF0A5B]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
                FAQ
              </div>
              <div className="mt-4 text-[32px] font-extrabold leading-[1.02] tracking-tight text-black">
                PC and Console focus
              </div>
              <p className="mt-4 max-w-[42ch] text-[14px] leading-6 text-black/60">
                Answers scoped to Steam and consoles. Built for production speed and consistency.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 lg:p-10">
            <div className="space-y-3">
              {items.map((item, idx) => {
                const isOpen = idx === openIndex;

                return (
                  <div key={item.q} className="overflow-hidden rounded-2xl border border-black/10">
                    <button
                      type="button"
                      onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                      className="flex w-full items-center justify-between gap-6 bg-white px-5 py-4 text-left"
                    >
                      <div className="text-[14px] font-extrabold leading-6 text-black">{item.q}</div>
                      <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="text-black/50"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                        >
                          <div className="border-t border-black/10 bg-black/[0.02] px-5 py-4 text-[14px] leading-6 text-black/65">
                            {item.a}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/form"
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CreativeContentPipelineClient() {
  return (
    <>
      <Hero />
      <PipelineFlow />
      <SideBySideFAQ />
    </>
  );
}
