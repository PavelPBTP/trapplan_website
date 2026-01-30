import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CardArticle from "@/components/ui/CardArticle";
import BlogQuoteBanner from "@/components/ui/BlogQuoteBanner";
import { BLOG_POSTS, type BlogBlock } from "@/lib/data/blog";

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

function isUsableAlt(alt?: string) {
  if (!alt) return false;
  const s = alt.trim();
  if (!s) return false;
  if (s === "__wf_reserved_inherit") return false;
  return true;
}

function buildImageAlt({
  alt,
  postTitle,
  sectionTitle,
  imageIndex,
}: {
  alt?: string;
  postTitle: string;
  sectionTitle?: string;
  imageIndex: number;
}) {
  if (isUsableAlt(alt)) return alt!.trim();

  const parts = [postTitle];
  const section = sectionTitle?.trim();
  if (section) parts.push(section);
  parts.push(`Image ${imageIndex}`);
  return parts.join(". ");
}

function normalizeText(s: string) {
  return s.replace(/[—–]/g, " ");
}

type InlineLinkDef = {
  phrase: string;
  href: string;
};

type LinkifyBudget = { used: number; max: number };

function linkifyText(text: string, defs: InlineLinkDef[], budget: LinkifyBudget) {
  if (!text) return text;
  if (!defs.length) return text;
  if (budget.used >= budget.max) return text;

  const sorted = defs
    .slice()
    .sort((a, b) => b.phrase.length - a.phrase.length);

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
        className="font-medium text-black/75 underline underline-offset-2 decoration-black/20 transition-colors hover:text-black hover:decoration-black/40"
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

type RenderOpts = {
  postTitle: string;
  sectionTitle?: string;
  imageIndex: number;
  inlineLinks?: InlineLinkDef[];
  linkBudget?: LinkifyBudget;
};

function renderBlock(block: BlogBlock, idx: number, opts: RenderOpts) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="mt-10 text-[26px] font-semibold leading-snug tracking-tight text-black"
        >
          {normalizeText(block.text)}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="mt-10 text-[20px] font-semibold leading-snug tracking-tight text-black"
        >
          {normalizeText(block.text)}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-5 text-[17px] leading-[1.6] text-[#37352f]">
          {linkifyText(
            normalizeText(block.text),
            opts.inlineLinks ?? [],
            opts.linkBudget ?? { used: 0, max: 0 },
          )}
        </p>
      );
    case "ul":
      return (
        <ul
          key={idx}
          className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.6] text-[#37352f]"
        >
          {block.items.map((it, i) => (
            <li key={i}>
              {linkifyText(
                normalizeText(it),
                opts.inlineLinks ?? [],
                opts.linkBudget ?? { used: 0, max: 0 },
              )}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={idx} className="mt-8">
          <Image
            src={block.src}
            alt={buildImageAlt({
              alt: block.alt,
              postTitle: opts.postTitle,
              sectionTitle: opts.sectionTitle,
              imageIndex: opts.imageIndex,
            })}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-[14px] border border-black/5"
          />
        </figure>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="mt-7 flex gap-3 rounded-[14px] bg-[#F6F6F3] px-4 py-4"
        >
          <div className="mt-[2px] text-[18px] leading-none">{block.emoji ?? "💡"}</div>
          <div className="min-w-0">
            {block.title ? (
              <div className="text-[14px] font-semibold text-black">{block.title}</div>
            ) : null}
            <div className="text-[17px] leading-[1.6] text-[#37352f]">
              {linkifyText(
                normalizeText(block.text),
                opts.inlineLinks ?? [],
                opts.linkBudget ?? { used: 0, max: 0 },
              )}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  const titleFromSlug = (s: string) =>
    s
      .split("-")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");

  const looksSluggyTitle = (t: string) => {
    const s = (t ?? "").trim();
    if (!s) return true;
    if (s.includes("-") || s.includes("_")) return true;
    const letters = s.replace(/[^a-zA-Z]/g, "");
    if (!letters) return false;
    const hasUpper = /[A-Z]/.test(letters);
    if (!hasUpper) return true;
    return false;
  };

  const clampText = (s: string, maxLen: number) => {
    const t = (s ?? "").trim();
    if (t.length <= maxLen) return t;
    return t.slice(0, maxLen - 1).trimEnd() + "…";
  };

  const baseTitle = looksSluggyTitle(post.title) ? titleFromSlug(slug) : post.title;

  const allText = `${post.title}\n${post.excerpt}\n${post.content
    .map((b) => (b.type === "p" || b.type === "h2" || b.type === "h3" ? b.text : ""))
    .join("\n")}`.toLowerCase();

  const pickKeyword = () => {
    const hasSteam = allText.includes("steam");
    const hasWishlist = allText.includes("wishlist") || allText.includes("wishlists");
    const hasMarketing = allText.includes("marketing") || allText.includes("go-to-market") || allText.includes("go to market");
    const hasPr = allText.includes("pr") || allText.includes("press") || allText.includes("journalist") || allText.includes("media");

    if (hasSteam && hasWishlist) return "Steam wishlist";
    if (hasSteam && hasMarketing) return "Steam marketing";
    if (hasPr && (allText.includes("video game") || allText.includes("games"))) return "video games pr";
    if (allText.includes("video games promote violence") || (allText.includes("promote") && allText.includes("violence")))
      return "video games promote violence";
    if (hasMarketing && (allText.includes("video game") || allText.includes("video games"))) return "marketing for video games";
    return "";
  };

  const keyword = pickKeyword();
  const title = (() => {
    const lower = baseTitle.toLowerCase();
    if (!keyword) return clampText(baseTitle, 60);
    if (lower.includes(keyword.toLowerCase())) return clampText(baseTitle, 60);
    const candidate = `${baseTitle} — ${keyword}`;
    return candidate.length <= 60 ? candidate : clampText(baseTitle, 60);
  })();
  const excerptUses = BLOG_POSTS.reduce((acc, p) => acc + (p.excerpt === post.excerpt ? 1 : 0), 0);
  const description =
    excerptUses > 1
      ? `${post.excerpt} (${post.category ? `${post.category} — ` : ""}${post.title})`
      : post.excerpt;

  const ogFallback = (() => {
    const p = new URLSearchParams();
    p.set("title", title);
    p.set("subtitle", "Read the full article on trapplan.com");
    if (post.category) p.set("tag", post.category);
    return `/og?${p.toString()}`;
  })();

  const cover = post.cover ?? ogFallback;

  const images = [
    {
      url: cover,
      alt: post.title,
    },
  ];

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  const ogFallback = (() => {
    const p = new URLSearchParams();
    p.set("title", post.title);
    p.set("subtitle", "Read the full article on trapplan.com");
    if (post.category) p.set("tag", post.category);
    return `/og?${p.toString()}`;
  })();

  const cover = post.cover ?? ogFallback;

  const allText = `${post.title}\n${post.excerpt}\n${post.content
    .map((b) => (b.type === "p" || b.type === "h2" || b.type === "h3" ? b.text : ""))
    .join("\n")}`.toLowerCase();

  const toolLinks: Array<{ label: string; href: string }> = [];
  const maybeAddTool = (cond: boolean, label: string, href: string) => {
    if (!cond) return;
    if (toolLinks.some((t) => t.href === href)) return;
    toolLinks.push({ label, href });
  };

  maybeAddTool(
    allText.includes("wishlist") || allText.includes("wishlists") || allText.includes("traffic") || allText.includes("utm") || allText.includes("budget"),
    "Steam Wishlist Calculator",
    "/steam-wishlist-calculator",
  );
  maybeAddTool(
    allText.includes("regional pricing") || allText.includes("ppp") || allText.includes("pricing"),
    "Steam Pricing Planner",
    "/steam-pricing-planner",
  );
  maybeAddTool(
    allText.includes("influencer") || allText.includes("creators") || allText.includes("twitch") || allText.includes("youtube"),
    "Steam Influencer Planner",
    "/steam-influencers-planner",
  );
  maybeAddTool(
    allText.includes("next fest") || allText.includes("festival") || allText.includes("sale") || allText.includes("discount") || allText.includes("event"),
    "Steam Festival Planner",
    "/steam-festival-planner",
  );

  const relatedPostLinks = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .filter((p) => (post.category ? p.category === post.category : true))
    .slice(0, 2)
    .map((p) => ({ label: p.title, href: `/blog/${p.slug}` }));

  const inlineLinks: InlineLinkDef[] = [
    { phrase: "Steam Next Fest", href: "/blog/steam-next-fest-the-masterclass-in-discovery" },
    { phrase: "Steam Wishlist Calculator", href: "/steam-wishlist-calculator" },
    { phrase: "Steam Pricing Planner", href: "/steam-pricing-planner" },
    { phrase: "Steam Influencer Planner", href: "/steam-influencers-planner" },
    { phrase: "Steam Festival Planner", href: "/steam-festival-planner" },
    ...relatedPostLinks.map((p) => ({ phrase: p.label, href: p.href })),
  ];

  const linkBudget: LinkifyBudget = { used: 0, max: 2 };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://www.trapplan.com/blog/${post.slug}`,
    author: post.authorName
      ? {
          "@type": "Person",
          name: post.authorName,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "TrapPlan",
      url: "https://www.trapplan.com",
    },
    image: [cover],
  };

  if (post.cardArticle) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CardArticle
          data={post.cardArticle}
          cover={{ src: cover, alt: post.title }}
          hideProTips={post.slug === "steam-next-fest-2026-the-ultimate-strategy-guide"}
        />
      </>
    );
  }

  const renderedBlocks = (() => {
    let sectionTitle = "";
    let imageIndex = 0;
    const out: React.ReactNode[] = [];

    post.content.forEach((b, i) => {
      if (b.type === "h2" || b.type === "h3") sectionTitle = b.text;
      if (b.type === "image") imageIndex += 1;
      out.push(
        renderBlock(b, i, {
          postTitle: post.title,
          sectionTitle,
          imageIndex,
          inlineLinks,
          linkBudget,
        }),
      );
    });

    return out;
  })();

  return (
    <main className="bg-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 lg:px-0">
        <header>
          <div className="flex flex-col gap-4">
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-black/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-black">
                    Home
                  </Link>
                </li>
                <li className="text-black/30">/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-black">
                    Blog
                  </Link>
                </li>
                <li className="text-black/30">/</li>
                <li className="text-black/70">{post.title}</li>
              </ol>
            </nav>
          </div>
        </header>

        <header className="mt-7">
          <div className="flex items-start gap-3">
            <div className="mt-[4px] text-[26px] leading-none">{post.emoji ?? "📝"}</div>
            <div className="min-w-0">
              {post.category ? (
                <div className="text-[12px] font-semibold text-black/40">
                  {post.category}
                </div>
              ) : null}
              <h1 className="mt-1 text-[34px] font-bold leading-[1.1] tracking-tight text-black sm:text-[42px]">
                {post.title}
              </h1>

              <div className="mt-4 text-[13px] font-medium text-black/50">
                <span>{formatDate(post.date)}</span>
                <span className="px-2 text-black/25">•</span>
                <span>{post.readingMinutes} min read</span>
                {post.authorName ? (
                  <>
                    <span className="px-2 text-black/25">•</span>
                    <span className="text-black/70">{post.authorName}</span>
                  </>
                ) : null}
                {post.authorRole ? (
                  <>
                    <span className="px-2 text-black/25">•</span>
                    <span>{post.authorRole}</span>
                  </>
                ) : null}
              </div>

              <p className="mt-5 text-[18px] leading-[1.6] text-[#37352f]">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        <article className="mt-10">
          {renderedBlocks}
        </article>

        {toolLinks.length ? (
          <div className="mt-12 rounded-[14px] border border-[#eeeeee] bg-black/[0.01] px-5 py-4">
            <div className="text-[12px] font-semibold tracking-wide text-black/45">Tools mentioned</div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[14px] text-black/70">
              {toolLinks.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="font-medium underline underline-offset-2 decoration-black/20 hover:text-black hover:decoration-black/40"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14 border-t border-[#eeeeee] pt-8">
          <Link href="/blog" className="text-[14px] font-semibold text-black/70 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>

      <BlogQuoteBanner />
    </main>
  );
}
