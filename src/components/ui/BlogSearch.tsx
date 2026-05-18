"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

export interface BlogSearchEntry {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  cover?: string;
  category?: string;
  date: string;
}

interface BlogSearchProps {
  index: BlogSearchEntry[];
  placeholder: string;
  clearLabel: string;
  noResultsLabel: string;
  countTemplate: string;
  children: React.ReactNode;
}

function score(entry: BlogSearchEntry, query: string): number {
  const q = query.toLowerCase();
  const title = entry.title.toLowerCase();
  if (title.startsWith(q)) return 4;
  if (title.includes(q)) return 3;
  if ((entry.category ?? "").toLowerCase().includes(q)) return 2;
  if (entry.excerpt.toLowerCase().includes(q)) return 1;
  return 0;
}

export default function BlogSearch({
  index,
  placeholder,
  clearLabel,
  noResultsLabel,
  countTemplate,
  children,
}: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query.trim());
  const active = deferred.length > 0;

  const results = useMemo(() => {
    if (!active) return [];
    return index
      .map((entry) => ({ entry, s: score(entry, deferred) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 50)
      .map((x) => x.entry);
  }, [active, deferred, index]);

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-black/10 bg-white p-4">
        <label htmlFor="blog-search" className="sr-only">
          {placeholder}
        </label>
        <div className="flex items-center gap-3">
          <svg
            className="h-5 w-5 shrink-0 text-black/40"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5 1.49-1.5-5-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"
            />
          </svg>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-black/40"
          />
          {active ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[12px] font-semibold text-[#FF0A5B] hover:text-[#E6004E]"
            >
              {clearLabel}
            </button>
          ) : null}
        </div>
      </div>

      {active ? (
        <div>
          <p className="mb-4 text-[13px] text-black/60">
            {results.length === 0
              ? noResultsLabel
              : countTemplate.replace("{n}", String(results.length))}
          </p>
          <ul className="grid gap-3">
            {results.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={entry.href}
                  className="group flex gap-4 rounded-2xl border border-black/10 bg-white p-3 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                >
                  {entry.cover ? (
                    <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-black/[0.04] sm:w-40">
                      <Image
                        src={entry.cover}
                        alt={entry.title}
                        fill
                        sizes="(min-width: 640px) 160px, 112px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="text-[15px] font-bold leading-snug text-black group-hover:text-[#FF0A5B] sm:text-[16px]">
                      {entry.title}
                    </h3>
                    <p className="line-clamp-2 text-[13px] text-black/65">
                      {entry.excerpt}
                    </p>
                    {entry.category ? (
                      <span className="mt-auto inline-block w-fit rounded-full bg-black/[0.05] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-black/70">
                        {entry.category}
                      </span>
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
