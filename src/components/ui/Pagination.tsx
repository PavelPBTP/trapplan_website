import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
  searchParam?: string;
  extraQuery?: string;
  labels: {
    previous: string;
    next: string;
    pageAria: (n: number) => string;
  };
}

type PageItem = number | "ellipsis";

function pageRange(current: number, total: number): PageItem[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: PageItem[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("ellipsis");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total - 1) items.push("ellipsis");
  items.push(total);
  return items;
}

function buildHref(basePath: string, searchParam: string, page: number, extraQuery: string): string {
  const params = new URLSearchParams(extraQuery);
  if (page > 1) params.set(searchParam, String(page));
  else params.delete(searchParam);
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export default function Pagination({
  page,
  totalPages,
  basePath,
  searchParam = "page",
  extraQuery = "",
  labels,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevHref = page > 1 ? buildHref(basePath, searchParam, page - 1, extraQuery) : null;
  const nextHref = page < totalPages ? buildHref(basePath, searchParam, page + 1, extraQuery) : null;
  const items = pageRange(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2 text-[14px] font-semibold"
    >
      {prevHref ? (
        <Link
          href={prevHref}
          rel="prev"
          aria-label={labels.previous}
          className="rounded-full border border-black/15 bg-white px-4 py-2 text-black transition-colors hover:bg-zinc-50"
        >
          ← {labels.previous}
        </Link>
      ) : (
        <span
          aria-disabled
          className="rounded-full border border-black/15 px-4 py-2 text-black/40"
        >
          ← {labels.previous}
        </span>
      )}

      <ol className="flex items-center gap-1">
        {items.map((item, i) =>
          item === "ellipsis" ? (
            <li key={`e-${i}`} aria-hidden className="px-2 text-black/40">
              …
            </li>
          ) : item === page ? (
            <li key={item}>
              <span
                aria-current="page"
                className="flex h-9 min-w-9 items-center justify-center rounded-full bg-[#FF0A5B] px-3 text-white"
              >
                {item}
              </span>
            </li>
          ) : (
            <li key={item}>
              <Link
                href={buildHref(basePath, searchParam, item, extraQuery)}
                aria-label={labels.pageAria(item)}
                className="flex h-9 min-w-9 items-center justify-center rounded-full border border-black/15 bg-white px-3 text-black transition-colors hover:border-black/30"
              >
                {item}
              </Link>
            </li>
          ),
        )}
      </ol>

      {nextHref ? (
        <Link
          href={nextHref}
          rel="next"
          aria-label={labels.next}
          className="rounded-full bg-[#FF0A5B] px-4 py-2 text-white transition-colors hover:bg-[#E6004E]"
        >
          {labels.next} →
        </Link>
      ) : (
        <span
          aria-disabled
          className="rounded-full bg-zinc-100 px-4 py-2 text-black/40"
        >
          {labels.next} →
        </span>
      )}
    </nav>
  );
}
