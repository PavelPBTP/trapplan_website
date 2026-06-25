"use client";

import { useState } from "react";
import Link from "next/link";
import ArtTile from "@/components/ui/ArtTile";

export interface CaseCard {
  slug: string;
  href: string;
  filter: string;
  category: string;
  title: string;
  highlight: string;
  gradient: string;
  ghostName: string;
  tag: string;
  cover?: string;
}

interface CaseFilterGridProps {
  cards: CaseCard[];
  labels: { all: string; wargaming: string; gaijin: string };
}

export default function CaseFilterGrid({ cards, labels }: CaseFilterGridProps) {
  const [active, setActive] = useState<"all" | "wargaming" | "gaijin">("all");
  const filters: ["all" | "wargaming" | "gaijin", string][] = [
    ["all", labels.all],
    ["wargaming", labels.wargaming],
    ["gaijin", labels.gaijin],
  ];
  const shown = cards.filter((c) => active === "all" || c.filter === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-[10px]">
        {filters.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={`h-10 rounded-[6px] px-[18px] font-display text-[14px] font-semibold transition ${
              active === key
                ? "bg-[var(--accent)] text-[var(--accent-on)]"
                : "border border-[rgba(244,241,234,0.18)] text-secondary hover:text-bone"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 min-[1024px]:grid-cols-3">
        {shown.map((c) => (
          <Link
            key={c.slug}
            href={c.href}
            className="art-zoom group flex flex-col overflow-hidden rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card no-underline transition-colors hover:border-[rgba(244,241,234,0.18)]"
          >
            <ArtTile
              className="aspect-[16/10]"
              radius={0}
              gradient={c.gradient}
              ghostName={c.ghostName}
              ghostSize={24}
              tag={c.tag}
              cover={c.cover}
              coverAlt={c.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="flex flex-1 flex-col p-[22px] pb-6">
              <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-tertiary">{c.category}</div>
              <h3 className="mb-[14px] font-display text-[19px] font-semibold leading-[1.25] text-bone">
                {c.title}
              </h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-[12px] text-[var(--accent)]">{c.highlight}</span>
                <span className="text-tertiary transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  ↗
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
