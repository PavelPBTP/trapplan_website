"use client";

import { Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import Card, { type CardProps } from "@/components/ui/Card";

type InlineLinkDef = {
  phrase: string;
  href: string;
};

export type CardArticleData = {
  title: string;
  lead?: string;
  cards: Array<{
    id: string;
    question: string;
    answer: string;
    proTip?: string;
  }>;
};

export default function CardArticle({
  data,
  cover,
  hideProTips,
}: {
  data: CardArticleData;
  cover?: { src: string; alt: string };
  hideProTips?: boolean;
}) {
  const { cards } = data;
  const total = cards.length;

  const inlineLinks: InlineLinkDef[] = useMemo(
    () => [
      { phrase: "Steam Wishlist Calculator", href: "/steam-wishlist-calculator" },
      { phrase: "Steam Pricing Planner", href: "/steam-pricing-planner" },
      { phrase: "Steam Influencer Planner", href: "/steam-influencers-planner" },
      { phrase: "Steam Festival Planner", href: "/steam-festival-planner" },
      { phrase: "Steam Next Fest", href: "/blog/steam-next-fest-the-masterclass-in-discovery" },
    ],
    [],
  );

  const linkBudget = useMemo(() => ({ used: 0, max: 2 }), []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [shareStatus, setShareStatus] = useState<
    "idle" | "copied" | "shared" | "error"
  >("idle");

  const cardElsRef = useRef<HTMLElement[]>([]);

  const cardProps: CardProps[] = useMemo(
    () =>
      cards.map((c, index) => ({
        id: c.id,
        index,
        total,
        question: c.question,
        answer: c.answer,
        proTip: hideProTips ? undefined : c.proTip,
        inlineLinks,
        linkBudget,
      })),
    [cards, hideProTips, inlineLinks, linkBudget, total],
  );

  useEffect(() => {
    cardElsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("[data-card]"),
    );

    const els = cardElsRef.current;
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            el: e.target as HTMLElement,
            ratio: e.intersectionRatio,
          }))
          .sort((a, b) => b.ratio - a.ratio);

        if (!visible.length) return;
        const idx = els.indexOf(visible[0].el);
        if (idx >= 0) setActiveIndex(idx);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [cards.length]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeLabel = useMemo(
    () => `${activeIndex + 1} / ${total}`,
    [activeIndex, total],
  );

  const onShare = async () => {
    try {
      const url = window.location.href;
      const title = data.title;

      if (typeof navigator !== "undefined" && "share" in navigator) {
        await navigator.share({ title, url });
        setShareStatus("shared");
        window.setTimeout(() => setShareStatus("idle"), 1400);
        return;
      }

      const clipboard = (
        navigator as Navigator & { clipboard?: Clipboard }
      ).clipboard;

      if (clipboard?.writeText) {
        await clipboard.writeText(url);
        setShareStatus("copied");
        window.setTimeout(() => setShareStatus("idle"), 1400);
        return;
      }

      setShareStatus("error");
      window.setTimeout(() => setShareStatus("idle"), 1400);
    } catch {
      setShareStatus("error");
      window.setTimeout(() => setShareStatus("idle"), 1400);
    }
  };

  return (
    <main className="bg-white">
      <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-[800px] px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="truncate text-[13px] font-semibold text-slate-700">
                {data.title}
              </div>
              <div className="mt-1 text-[12px] font-medium text-slate-500">
                Step {activeLabel}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {shareStatus !== "idle" ? (
                <div className="hidden text-[12px] font-medium text-slate-500 sm:block">
                  {shareStatus === "copied" ? "Link copied" : null}
                  {shareStatus === "shared" ? "Shared" : null}
                  {shareStatus === "error" ? "Could not share" : null}
                </div>
              ) : null}

              <button
                type="button"
                onClick={onShare}
                className="shrink-0 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                <span className="inline-flex items-center gap-2">
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                  Share
                </span>
                <span className="sr-only">Share this article</span>
              </button>

              <div className="w-[160px] max-w-[34vw]">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-slate-900"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cover ? (
        <div className="mt-8 overflow-hidden bg-black">
          <div className="relative h-[240px] w-full sm:h-[320px] lg:h-[420px]">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-cover object-[55%_50%] scale-[1.05]"
                sizes="100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="mx-auto w-full max-w-[800px] px-6 pb-6">
                  <h1 className="text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[44px]">
                    {data.title}
                  </h1>
                </div>
              </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-[800px] px-6 pt-10 pb-16">
        <header>
          <h1
            className={
              cover
                ? "sr-only"
                : "text-[34px] font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-[44px]"
            }
          >
            {data.title}
          </h1>
          {data.lead ? (
            <p className="mt-5 text-[18px] leading-[1.65] text-slate-700">
              {data.lead}
            </p>
          ) : null}
        </header>

        <div className="mt-10 grid gap-6">
          {cardProps.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
