import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { getBlogPosts } from "@/lib/data/blog.i18n";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampText, ogImageUrl } from "@/lib/seo";
import Pagination from "@/components/ui/Pagination";
import BlogSearch, { type BlogSearchEntry } from "@/components/ui/BlogSearch";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?:
    | Promise<{ category?: string; page?: string }>
    | { category?: string; page?: string };
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const resolvedParams = await Promise.resolve(searchParams);
  const pageNum = Math.max(1, Number.parseInt(resolvedParams?.page ?? "1", 10) || 1);
  const category = resolvedParams?.category;

  const buildPath = (p: number) => {
    const qs = new URLSearchParams();
    if (category) qs.set("category", category);
    if (p > 1) qs.set("page", String(p));
    const suffix = qs.toString();
    return withLocale(locale, suffix ? `/blog?${suffix}` : "/blog");
  };

  const canonical = new URL(buildPath(pageNum), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => {
      const qs = new URLSearchParams();
      if (category) qs.set("category", category);
      if (pageNum > 1) qs.set("page", String(pageNum));
      const suffix = qs.toString();
      return [l, new URL(withLocale(l, suffix ? `/blog?${suffix}` : "/blog"), origin).toString()];
    }),
  ) as Record<string, string>;

  const baseTitle = t(locale, "seo.blog.title");
  const title = pageNum > 1 ? `${baseTitle} — Page ${pageNum}` : baseTitle;
  const description = clampText(t(locale, "seo.blog.desc"), 160);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(buildPath(pageNum), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [
        {
          url: ogImageUrl(origin, { title }),
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
      images: [ogImageUrl(origin, { title })],
    },
    robots:
      pageNum > 1
        ? { index: true, follow: true }
        : undefined,
  };
}

function formatDate(locale: Locale, iso: string) {
  const normalizedIso = iso.length === 10 ? `${iso}T00:00:00.000Z` : iso;
  const d = new Date(normalizedIso);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(d);
}

function toDateMs(iso: string) {
  const normalizedIso = iso.length === 10 ? `${iso}T00:00:00.000Z` : iso;
  const ms = new Date(normalizedIso).getTime();
  return Number.isFinite(ms) ? ms : 0;
}

function ogFallbackForPost(locale: Locale, title: string, category?: string) {
  const p = new URLSearchParams();
  p.set("title", title);
  p.set("subtitle", t(locale, "blog.og.subtitle"));
  if (category) p.set("tag", category);
  return `/og?${p.toString()}`;
}

const POSTS_PER_PAGE = 24;

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?:
    | Promise<{ category?: string; page?: string }>
    | { category?: string; page?: string };
}) {
  const locale = await getRequestLocale();
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const selectedCategory = resolvedSearchParams?.category;
  const requestedPage = Math.max(1, Number.parseInt(resolvedSearchParams?.page ?? "1", 10) || 1);

  const allPosts = getBlogPosts(locale);

  const dedupeBySlug = <T extends { slug: string }>(items: T[]) => {
    const seen = new Set<string>();
    return items.filter((it) => {
      if (seen.has(it.slug)) return false;
      seen.add(it.slug);
      return true;
    });
  };

  const categories = Array.from(
    new Set(allPosts.map((p) => p.category).filter(Boolean) as string[]),
  ).sort((a, b) => a.localeCompare(b, locale, { sensitivity: "base" }));

  const filteredAndSorted = dedupeBySlug(
    (selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts
    )
      .slice()
      .sort((a, b) => toDateMs(b.date) - toDateMs(a.date)),
  );

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / POSTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = filteredAndSorted.slice(start, start + POSTS_PER_PAGE);

  const paginationBasePath = withLocale(locale, "/blog");
  const paginationQuery = new URLSearchParams();
  if (selectedCategory) paginationQuery.set("category", selectedCategory);

  const cards = posts.map((p) => ({
    post: p,
    cover: p.cover,
    ogCover: ogFallbackForPost(locale, p.title, p.category),
  }));

  const searchIndex: BlogSearchEntry[] = dedupeBySlug(
    allPosts.slice().sort((a, b) => toDateMs(b.date) - toDateMs(a.date)),
  ).map((p) => ({
    slug: p.slug,
    href: withLocale(locale, `/blog/${p.slug}`),
    title: p.title,
    excerpt: p.excerpt,
    cover: p.cover ?? ogFallbackForPost(locale, p.title, p.category),
    category: p.category,
    date: p.date,
  }));

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14">
        <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-black/50">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={withLocale(locale, "/")} className="transition-colors hover:text-black">
                {t(locale, "blog.ui.home")}
              </Link>
            </li>
            <li className="text-black/30">/</li>
            <li className="text-black/70">{t(locale, "blog.ui.blog")}</li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <h1 className="text-[26px] font-bold leading-tight tracking-tight text-black">
              {t(locale, "blog.ui.sidebar_title").split("\n").map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#37352f]">
              {t(locale, "blog.ui.sidebar_subtitle")}
            </p>

            <div className="mt-10">
              <div className="text-[13px] font-semibold text-black/50">{t(locale, "blog.ui.sidebar_latest")}</div>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                <Link
                  href={withLocale(locale, "/blog")}
                  prefetch={false}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-[14px] font-medium transition-colors lg:rounded-md lg:px-2.5 lg:py-2 ${
                    !selectedCategory
                      ? "bg-black/[0.04] text-black"
                      : "text-black/70 hover:bg-black/[0.03] hover:text-black"
                  }`}
                >
                  {t(locale, "blog.ui.sidebar_all")}
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c}
                    href={withLocale(locale, `/blog?category=${encodeURIComponent(c)}`)}
                    prefetch={false}
                    className={`inline-flex items-center rounded-full px-3 py-1.5 text-[14px] font-medium transition-colors lg:rounded-md lg:px-2.5 lg:py-2 ${
                      selectedCategory === c
                        ? "bg-black/[0.04] text-black"
                        : "text-black/70 hover:bg-black/[0.03] hover:text-black"
                    }`}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <BlogSearch
              index={searchIndex}
              placeholder={t(locale, "ui.blog_search.placeholder")}
              clearLabel={t(locale, "ui.blog_search.clear")}
              noResultsLabel={t(locale, "ui.blog_search.no_results")}
              countTemplate={t(locale, "ui.blog_search.count")}
            >
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {cards.map(({ post, cover, ogCover }, idx) => (
                <article key={post.slug} className="group">
                  <Link href={withLocale(locale, `/blog/${post.slug}`)} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-black/[0.04]">
                      {cover ? (
                        <>
                          <Image
                            src={cover}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 480px"
                            priority={false}
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 flex items-end p-5">
                            <div className="text-white">
                              <div className="text-[18px] font-semibold leading-snug tracking-tight">
                                {post.title}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Image
                            src={ogCover}
                            alt={post.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 flex items-end p-5">
                            <div className="text-white">
                              <div className="text-[18px] font-semibold leading-snug tracking-tight">
                                {post.title}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        {post.category ? (
                          <span className="text-[12px] font-semibold text-black/45">
                            {post.category}
                          </span>
                        ) : null}
                      </div>

                      <h2 className="mt-2 text-[22px] font-semibold leading-snug tracking-tight text-black underline-offset-4 group-hover:underline">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-[17px] leading-[1.6] text-[#37352f]">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 text-[13px] font-medium text-black/50">
                        <span>{formatDate(locale, post.date)}</span>
                        <span className="px-2 text-black/25">•</span>
                        <span>
                          {post.readingMinutes} {t(locale, "blog.ui.min_read")}
                        </span>
                        {post.authorName ? (
                          <>
                            <span className="px-2 text-black/25">•</span>
                            <span>{post.authorName}</span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {posts.length === 0 ? (
              <div className="rounded-[16px] bg-black/[0.02] px-5 py-5 text-[15px] text-black/60">
                {t(locale, "blog.ui.no_posts_found")}
              </div>
            ) : (
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                basePath={paginationBasePath}
                extraQuery={paginationQuery.toString()}
                labels={{
                  previous: t(locale, "ui.pagination.previous"),
                  next: t(locale, "ui.pagination.next"),
                  pageAria: (n) =>
                    t(locale, "ui.pagination.page_aria").replace("{n}", String(n)),
                }}
              />
            )}
            </BlogSearch>
          </section>
        </div>
      </div>
    </main>
  );
}
