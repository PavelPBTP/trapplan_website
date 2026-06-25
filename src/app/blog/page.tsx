import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbList, itemList, SITE_ORIGIN } from "@/lib/seo";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { getBlogPosts } from "@/lib/data/blog.i18n";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampText } from "@/lib/seo";
import { blogGradient, blogCover } from "@/lib/data/blogArt";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/blog"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/blog"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "seo.blog.title");
  const description = clampText(t(locale, "seo.blog.desc"), 160);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/blog"), origin).toString(),
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

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }> | { category?: string };
}) {
  const locale = await getRequestLocale();
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const selectedCategory = resolvedSearchParams?.category;

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

  const posts = dedupeBySlug(
    (selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts
    )
      .slice()
      .sort((a, b) => toDateMs(b.date) - toDateMs(a.date)),
  );

  const cards = posts.map((p) => ({
    post: p,
    cover: p.cover ?? blogCover(p.category, p.slug),
  }));

  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: t(locale, "blog.ui.home"), url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          { name: t(locale, "blog.ui.blog") },
        ])}
      />
      <JsonLd
        data={itemList(
          t(locale, "seo.blog.title"),
          posts.slice(0, 50).map((p) => new URL(withLocale(locale, `/blog/${p.slug}`), SITE_ORIGIN).toString()),
        )}
      />
      <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-10 lg:px-8">
        <nav aria-label="Breadcrumb" className="font-mono text-[12px] tracking-[0.06em] text-tertiary">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={withLocale(locale, "/")} className="text-secondary no-underline transition-colors hover:text-bone">
                {t(locale, "blog.ui.home")}
              </Link>
            </li>
            <li className="text-faint">/</li>
            <li className="text-secondary">{t(locale, "blog.ui.blog")}</li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <h1 className="font-display text-[28px] font-bold leading-tight tracking-[-0.025em] text-bone">
              {t(locale, "blog.ui.sidebar_title").split("\n").map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.6] text-secondary">
              {t(locale, "blog.ui.sidebar_subtitle")}
            </p>

            <div className="mt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                {t(locale, "blog.ui.sidebar_latest")}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                <Link
                  href={withLocale(locale, "/blog")}
                  prefetch={false}
                  className={`inline-flex items-center rounded-[6px] px-3 py-2 text-[14px] font-medium no-underline transition-colors ${
                    !selectedCategory
                      ? "bg-[rgba(244,241,234,0.06)] text-bone"
                      : "text-secondary hover:bg-[rgba(244,241,234,0.04)] hover:text-bone"
                  }`}
                >
                  {t(locale, "blog.ui.sidebar_all")}
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c}
                    href={withLocale(locale, `/blog?category=${encodeURIComponent(c)}`)}
                    prefetch={false}
                    className={`inline-flex items-center rounded-[6px] px-3 py-2 text-[14px] font-medium no-underline transition-colors ${
                      selectedCategory === c
                        ? "bg-[rgba(244,241,234,0.06)] text-bone"
                        : "text-secondary hover:bg-[rgba(244,241,234,0.04)] hover:text-bone"
                    }`}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              {cards.map(({ post, cover }) => (
                <article key={post.slug} className="group">
                  <Link
                    href={withLocale(locale, `/blog/${post.slug}`)}
                    className="art-zoom flex h-full flex-col overflow-hidden rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card no-underline transition-colors hover:border-[rgba(244,241,234,0.18)]"
                  >
                    <div className="gart relative aspect-[16/10]">
                      {cover ? (
                        <Image
                          src={cover}
                          alt={post.title}
                          fill
                          className="gcover object-cover"
                          sizes="(max-width: 640px) 100vw, 480px"
                        />
                      ) : (
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{ background: blogGradient(post.category) }}
                        >
                          <div className="gscan absolute inset-0" />
                          <span className="absolute bottom-2 left-5 right-5 truncate font-anton text-[40px] uppercase leading-[0.9] tracking-[-0.01em] text-[rgba(244,241,234,0.14)]">
                            {post.category ?? "TrapPlan"}
                          </span>
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[36%] bg-gradient-to-t from-[#0c0b0a]/85 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-[22px] pb-6">
                      {post.category ? (
                        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
                          {post.category}
                        </div>
                      ) : null}
                      <h2 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.015em] text-bone">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-[1.6] text-secondary">{post.excerpt}</p>
                      <div className="mt-4 font-mono text-[12px] text-tertiary">
                        <span>{formatDate(locale, post.date)}</span>
                        <span className="px-2 text-faint">•</span>
                        <span>
                          {post.readingMinutes} {t(locale, "blog.ui.min_read")}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {posts.length === 0 ? (
              <div className="rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card px-5 py-5 text-[15px] text-secondary">
                {t(locale, "blog.ui.no_posts_found")}
              </div>
            ) : null}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
