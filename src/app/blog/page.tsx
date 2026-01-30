import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Gaming Marketing Blog | Industry Trends & Tips",
  description:
    "Stay up-to-date with the latest trends in gaming influencer marketing. TrapPlan's blog covers tips, case studies, and strategies to help brands succeed in the gaming industry.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Gaming Marketing Blog | Industry Trends & Tips | TrapPlan",
    description:
      "Stay up-to-date with the latest trends in gaming influencer marketing. TrapPlan's blog covers tips, case studies, and strategies to help brands succeed in the gaming industry.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Marketing Blog | Industry Trends & Tips | TrapPlan",
    description:
      "Stay up-to-date with the latest trends in gaming influencer marketing. TrapPlan's blog covers tips, case studies, and strategies to help brands succeed in the gaming industry.",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

function ogFallbackForPost(title: string, category?: string) {
  const p = new URLSearchParams();
  p.set("title", title);
  p.set("subtitle", "Read the full article on trapplan.com");
  if (category) p.set("tag", category);
  return `/og?${p.toString()}`;
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }> | { category?: string };
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const selectedCategory = resolvedSearchParams?.category;

  const dedupeBySlug = <T extends { slug: string }>(items: T[]) => {
    const seen = new Set<string>();
    return items.filter((it) => {
      if (seen.has(it.slug)) return false;
      seen.add(it.slug);
      return true;
    });
  };

  const categories = Array.from(
    new Set(BLOG_POSTS.map((p) => p.category).filter(Boolean) as string[]),
  ).sort((a, b) => a.localeCompare(b));

  const posts = dedupeBySlug(
    (selectedCategory
    ? BLOG_POSTS.filter((p) => p.category === selectedCategory)
    : BLOG_POSTS
    )
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  );

  const cards = posts.map((p) => ({
    post: p,
    cover: p.cover,
    ogCover: ogFallbackForPost(p.title, p.category),
  }));

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14">
        <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-black/50">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
            </li>
            <li className="text-black/30">/</li>
            <li className="text-black/70">Blog</li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <h1 className="text-[26px] font-bold leading-tight tracking-tight text-black">
              Trap Plan
              <br />
              Blog
            </h1>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#37352f]">
              Notes, playbooks, and practical marketing systems for games.
            </p>

            <div className="mt-10">
              <div className="text-[13px] font-semibold text-black/50">Latest</div>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                <Link
                  href="/blog"
                  prefetch={false}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-[14px] font-medium transition-colors lg:rounded-md lg:px-2.5 lg:py-2 ${
                    !selectedCategory
                      ? "bg-black/[0.04] text-black"
                      : "text-black/70 hover:bg-black/[0.03] hover:text-black"
                  }`}
                >
                  All
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c}
                    href={`/blog?category=${encodeURIComponent(c)}`}
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
            <div suppressHydrationWarning className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {cards.map(({ post, cover, ogCover }, idx) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
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
                          <img
                            src={ogCover}
                            alt={post.title}
                            className="absolute inset-0 h-full w-full object-cover"
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
                        <span>{formatDate(post.date)}</span>
                        <span className="px-2 text-black/25">•</span>
                        <span>{post.readingMinutes} min read</span>
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
                No posts found.
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
