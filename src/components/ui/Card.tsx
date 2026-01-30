"use client";

import Link from "next/link";
import { useMemo } from "react";

import ProTip from "@/components/ui/ProTip";

type InlineLinkDef = {
  phrase: string;
  href: string;
};

type LinkifyBudget = { used: number; max: number };

function linkifyText(text: string, defs: InlineLinkDef[], budget: LinkifyBudget) {
  if (!text) return text;
  if (!defs.length) return text;
  if (budget.used >= budget.max) return text;

  const sorted = defs.slice().sort((a, b) => b.phrase.length - a.phrase.length);

  let remaining = text;
  const out: React.ReactNode[] = [];

  while (remaining && budget.used < budget.max) {
    const lower = remaining.toLowerCase();
    let bestIdx = -1;
    let best: InlineLinkDef | null = null;

    for (const d of sorted) {
      const idx = lower.indexOf(d.phrase.toLowerCase());
      if (idx === -1) continue;
      if (bestIdx === -1 || idx < bestIdx) {
        bestIdx = idx;
        best = d;
      }
    }

    if (!best || bestIdx === -1) break;

    const before = remaining.slice(0, bestIdx);
    const match = remaining.slice(bestIdx, bestIdx + best.phrase.length);
    const after = remaining.slice(bestIdx + best.phrase.length);

    if (before) out.push(before);
    out.push(
      <Link
        key={`${best.href}-${bestIdx}-${budget.used}`}
        href={best.href}
        className="font-medium text-slate-700 underline underline-offset-2 decoration-slate-400/50 transition-colors hover:text-slate-950 hover:decoration-slate-500"
      >
        {match}
      </Link>,
    );

    remaining = after;
    budget.used += 1;
  }

  if (remaining) out.push(remaining);
  return out;
}

export type CardProps = {
  id: string;
  index: number;
  total: number;
  question: string;
  answer: string;
  proTip?: string;
  inlineLinks?: InlineLinkDef[];
  linkBudget?: LinkifyBudget;
};

function splitParagraphs(text: string) {
  return text
    .split(/\n\n+/g)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function Card({
  id,
  index,
  total,
  question,
  answer,
  proTip,
  inlineLinks,
  linkBudget,
}: CardProps) {
  const stepLabel = useMemo(() => `${index + 1} / ${total}`, [index, total]);

  return (
    <section
      id={id}
      data-card
      className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute left-0 top-7 bottom-7 hidden w-px bg-slate-200 sm:block" />
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="text-[12px] font-semibold tracking-wide text-slate-500">
            {stepLabel}
          </div>
          <h2 className="mt-2 text-[22px] font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-[26px]">
            {question}
          </h2>
        </div>
      </div>

      <div className="mt-5 prose prose-slate max-w-none text-[16px] leading-[1.7]">
        {splitParagraphs(answer).map((p, idx) => (
          <p key={idx}>
            {linkifyText(p, inlineLinks ?? [], linkBudget ?? { used: 0, max: 0 })}
          </p>
        ))}
      </div>

      {proTip ? <ProTip text={proTip} /> : null}
    </section>
  );
}
