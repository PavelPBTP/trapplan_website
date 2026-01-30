"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ValueBlock = {
  title: string;
  body: string;
  bullets: string[];
};

type FAQItem = {
  q: string;
  a: string;
};

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
              Paid Growth
            </h1>
            <p className="mt-4 max-w-[70ch] text-[14px] leading-6 text-black/60">
              Paid growth for Steam and Console games. We define channel strategy, set up tracking and attribution, and deliver a clean handoff your team can run.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/form"
                className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.30)] transition-colors hover:bg-[#E6004E]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="text-[13px] font-semibold text-black/60">Steam and Console only</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-center lg:justify-end">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-white to-[#FFF5F8] sm:h-[260px] lg:h-[300px] lg:w-[520px]">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_25%,rgba(255,10,91,0.14),transparent_58%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.08),transparent_60%)]" />
              <Image
                src="/images/PaidHero.avif"
                alt="Paid growth illustration"
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-contain opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValueBlocks() {
  const blocks = useMemo<ValueBlock[]>(
    () => [
      {
        title: "Channel Strategy",
        body:
          "We design a channel mix that matches the Steam and Console funnel. The goal is controlled spend, clean measurement, and channels where games actually win.",
        bullets: [
          "Reddit for intent and community adjacency",
          "YouTube for discovery, long-form, and creators",
          "X for launch beats and audience targeting",
          "TikTok for scalable reach and iteration",
        ],
      },
      {
        title: "Steam and Console Analytics",
        body:
          "Paid growth needs measurement that fits the platform reality. We focus on Wishlist growth, UTM discipline, and attribution that makes sense for PC and Console ecosystems.",
        bullets: [
          "Wishlist growth and conversion signals",
          "UTM tracking and source discipline",
          "Attribution tooling with providers like Gamesight",
          "Reporting that your team can maintain",
        ],
      },
      {
        title: "The Handoff",
        body:
          "We build structure your team can run. You get a clean account, clear naming conventions, and a handover that removes guesswork.",
        bullets: [
          "Account structure and campaign taxonomy",
          "Tracking and conversion setup documentation",
          "Handover call with Q and A",
          "Clear next steps and operating rhythm",
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
            Core Value
          </div>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-black lg:text-[44px]">
            Built for Steam and Console marketing.
          </h2>
          <p className="mt-4 max-w-[78ch] text-[14px] leading-6 text-black/60">
            Strategy, tracking discipline, and a setup your team can operate.
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

function IndieAccordionFAQ() {
  const items = useMemo<FAQItem[]>(
    () => [
      {
        q: "How do you track performance on Steam and Consoles?",
        a: "We focus on Wishlist growth signals, UTM discipline, and attribution tooling that fits PC and Console ecosystems. We can work with providers like Gamesight, and we keep reporting maintainable for your team.",
      },
      {
        q: "Which platforms do you focus on?",
        a: "Reddit, YouTube, X, and TikTok.",
      },
      {
        q: "Do you work on pre-launch Wishlist growth?",
        a: "Yes. We support pre-launch Wishlist growth with measurement-first setup, channel strategy, and structured campaign foundations.",
      },
      {
        q: "What is included in the Clean Handoff?",
        a: "A structured account you fully own, campaign taxonomy, tracking setup documentation, and a handover call. The goal is zero guesswork for your team.",
      },
      {
        q: "Are ad creatives included?",
        a: "No. Creative production is part of the Creative Content Pipeline. We can coordinate requirements, but the service scope here is paid growth strategy and setup.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
      <div className="rounded-[28px] bg-white px-6 py-10 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
        <div className="flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
          FAQ
        </div>
        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.02] tracking-tight text-black lg:text-[44px]">
          Paid Growth questions
        </h2>

        <div className="mt-8 space-y-3">
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
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="mt-10">
          <Link
            href="/form"
            className="group inline-flex h-[44px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#E6004E]"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PaidGrowthClient() {
  return (
    <>
      <Hero />
      <CoreValueBlocks />
      <IndieAccordionFAQ />
    </>
  );
}
