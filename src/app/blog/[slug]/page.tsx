import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CardArticle from "@/components/ui/CardArticle";
import BackToTopButton from "@/components/ui/BackToTopButton";
import BlogQuoteBanner from "@/components/ui/BlogQuoteBanner";
import { BLOG_POSTS, type BlogBlock } from "@/lib/data/blog";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { getBlogPost, getBlogPosts } from "@/lib/data/blog.i18n";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import { clampText } from "@/lib/seo";

function formatDate(locale: string, iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat(locale, {
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

type LinkifyBudget = { used: number; max: number; usedHrefs: Record<string, true> };

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
      if (budget.usedHrefs[d.href]) continue;
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
    budget.usedHrefs[best.href] = true;
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
            opts.linkBudget ?? { used: 0, max: 0, usedHrefs: {} },
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
                opts.linkBudget ?? { used: 0, max: 0, usedHrefs: {} },
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
                opts.linkBudget ?? { used: 0, max: 0, usedHrefs: {} },
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

const { _titleCollisions, _descCollisions } = (() => {
  const titleSet = new Set<string>();
  const descSet = new Set<string>();
  const isSluggy = (t: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test((t ?? "").trim());
  const fromSlug = (s: string) => s.split("-").map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(" ");
  const makeDesc = (post: { excerpt: string; content: { type: string; text?: string }[] }) => {
    const exc = (post.excerpt ?? "").trim();
    if (exc.length >= 155) return clampText(exc, 160);
    const paras = post.content.filter((b) => b.type === "p" && b.text && b.text.trim().length > 20).map((b) => b.text!.trim());
    let d = exc;
    for (const p of paras) {
      if (d.length >= 155) break;
      const c = d ? `${d} ${p}` : p;
      if (c.length <= 160) { d = c; } else { d = clampText(c, 160); break; }
    }
    return clampText(d, 160);
  };
  for (const locale of SUPPORTED_LOCALES) {
    const titleMap = new Map<string, string[]>();
    const descMap = new Map<string, string[]>();
    const posts = getBlogPosts(locale as Locale);
    for (const p of posts) {
      const base = isSluggy(p.title) ? fromSlug(p.slug) : p.title;
      const clamped = clampText(base, 60);
      if (!titleMap.has(clamped)) titleMap.set(clamped, []);
      titleMap.get(clamped)!.push(p.slug);
      const desc = makeDesc({ excerpt: p.excerpt, content: p.content as { type: string; text?: string }[] });
      if (!descMap.has(desc)) descMap.set(desc, []);
      descMap.get(desc)!.push(p.slug);
    }
    for (const [, slugs] of titleMap) {
      if (slugs.length > 1) slugs.forEach((s) => titleSet.add(`${locale}:${s}`));
    }
    for (const [, slugs] of descMap) {
      if (slugs.length > 1) slugs.forEach((s) => descSet.add(`${locale}:${s}`));
    }
  }
  return { _titleCollisions: titleSet, _descCollisions: descSet };
})();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return {};

  const origin = "https://www.trapplan.com";
  const url = new URL(withLocale(locale, `/blog/${post.slug}`), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, `/blog/${post.slug}`), origin).toString()]),
  ) as Record<string, string>;
  const titleFromSlug = (s: string) =>
    s
      .split("-")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");

  const looksSluggyTitle = (t: string) => {
    const s = (t ?? "").trim();
    if (!s) return true;
    if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)) return true;
    return false;
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

    if (hasSteam && hasWishlist) return t(locale, "blog.inline.steam_wishlist");
    if (hasSteam && hasMarketing) return t(locale, "blog.inline.steam_marketing");
    if (hasPr && (allText.includes("video game") || allText.includes("games")))
      return t(locale, "blog.inline.video_games_pr");
    if (
      allText.includes("video games promote violence") ||
      (allText.includes("promote") && allText.includes("violence"))
    )
      return t(locale, "blog.inline.video_games_promote_violence");
    if (hasMarketing && (allText.includes("video game") || allText.includes("video games")))
      return t(locale, "blog.inline.marketing_for_video_games");
    return "";
  };

  const keyword = pickKeyword();
  const baseTitleForMeta = (() => {
    const lower = baseTitle.toLowerCase();
    if (!keyword) return clampText(baseTitle, 60);
    if (lower.includes(keyword.toLowerCase())) return clampText(baseTitle, 60);
    const candidate = `${baseTitle}: ${keyword}`;
    return candidate.length <= 60 ? candidate : clampText(baseTitle, 60);
  })();

  const title = (() => {
    if (!_titleCollisions.has(`${locale}:${slug}`)) return clampText(baseTitleForMeta, 60);
    if (baseTitle.length > 60) return baseTitle;
    const slugWords = slug.split("-");
    const titleLower = baseTitle.toLowerCase();
    const extra = slugWords.find((w) => w.length > 3 && !titleLower.includes(w));
    if (extra) return `${baseTitle}: ${extra[0].toUpperCase() + extra.slice(1)}`;
    return `${baseTitle} (${post.date.slice(0, 4)})`;
  })();

  const description = (() => {
    const exc = (post.excerpt ?? "").trim();
    if (exc.length >= 155) return clampText(exc, 160);
    const bodyParagraphs = post.content
      .filter((b): b is Extract<typeof b, { type: "p" }> => b.type === "p" && "text" in b && b.text.trim().length > 20)
      .map((b) => b.text.trim());
    let desc = exc;
    for (const p of bodyParagraphs) {
      if (desc.length >= 155) break;
      const candidate = desc ? `${desc} ${p}` : p;
      if (candidate.length <= 160) {
        desc = candidate;
      } else {
        desc = clampText(candidate, 160);
        break;
      }
    }
    return clampText(desc, 160);
  })();

  const finalDescription = _descCollisions.has(`${locale}:${slug}`)
    ? clampText(`${description} ${title}`, 160)
    : description;

  const ogFallback = (() => {
    const p = new URLSearchParams();
    p.set("title", title);
    p.set("subtitle", t(locale, "blog.og.subtitle"));
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
    description: finalDescription,
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", `/blog/${post.slug}`), origin).toString(),
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: finalDescription,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: finalDescription,
      images: [cover],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return notFound();

  const ogFallback = (() => {
    const p = new URLSearchParams();
    p.set("title", post.title);
    p.set("subtitle", t(locale, "blog.og.subtitle"));
    if (post.category) p.set("tag", post.category);
    return `/og?${p.toString()}`;
  })();

  const cover = post.cover ?? ogFallback;

  const allText = `${post.title}\n${post.excerpt}\n${post.content
    .map((b) => (b.type === "p" || b.type === "h2" || b.type === "h3" ? b.text : ""))
    .join("\n")}`.toLowerCase();

  const relatedPostLinks = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .filter((p) => (post.category ? p.category === post.category : true))
    .slice(0, 2)
    .map((p) => ({ label: p.title, href: withLocale(locale, `/blog/${p.slug}`) }));

  const inlineLinks: InlineLinkDef[] = [
    {
      phrase: t(locale, "blog.inline.steam_wishlist"),
      href: withLocale(locale, "/steam-wishlist-calculator"),
    },
    {
      phrase: t(locale, "blog.inline.steam_wishlist").toLowerCase(),
      href: withLocale(locale, "/steam-wishlist-calculator"),
    },
    {
      phrase: t(locale, "blog.inline.steam_wishlists"),
      href: withLocale(locale, "/steam-wishlist-calculator"),
    },
    {
      phrase: t(locale, "blog.inline.steam_wishlists").toLowerCase(),
      href: withLocale(locale, "/steam-wishlist-calculator"),
    },
    { phrase: t(locale, "blog.inline.wishlist"), href: withLocale(locale, "/steam-wishlist-calculator") },
    { phrase: t(locale, "blog.inline.wishlists"), href: withLocale(locale, "/steam-wishlist-calculator") },
    {
      phrase: t(locale, "blog.inline.steam_next_fest"),
      href: withLocale(locale, "/blog/steam-next-fest-the-masterclass-in-discovery"),
    },
    {
      phrase: t(locale, "blog.inline.steam_next_fest").toLowerCase(),
      href: withLocale(locale, "/blog/steam-next-fest-the-masterclass-in-discovery"),
    },
    {
      phrase: t(locale, "blog.inline.marketing_for_steam"),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.marketing_for_steam").toLowerCase(),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.steam_marketing"),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.steam_marketing").toLowerCase(),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.steam_reviews"),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    {
      phrase: t(locale, "blog.inline.steam_reviews").toLowerCase(),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    {
      phrase: t(locale, "blog.inline.steam_review"),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    {
      phrase: t(locale, "blog.inline.steam_review").toLowerCase(),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    {
      phrase: t(locale, "blog.inline.reviews_on_steam"),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    {
      phrase: t(locale, "blog.inline.reviews_on_steam").toLowerCase(),
      href: withLocale(locale, "/blog/how-steam-reviews-affect-visibility-and-sales-in-2026"),
    },
    { phrase: t(locale, "blog.inline.steam_page"), href: withLocale(locale, "/steam-festival-planner") },
    {
      phrase: t(locale, "blog.inline.steam_page").toLowerCase(),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.steam_store_page"),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.steam_store_page").toLowerCase(),
      href: withLocale(locale, "/steam-festival-planner"),
    },
    {
      phrase: t(locale, "blog.inline.video_games_pr"),
      href: withLocale(locale, "/pr-starter-pack"),
    },
    {
      phrase: t(locale, "blog.inline.video_game_pr"),
      href: withLocale(locale, "/pr-starter-pack"),
    },
    {
      phrase: t(locale, "blog.inline.steam_no_wishlist"),
      href: withLocale(locale, "/no-wishlists-on-steam"),
    },
    {
      phrase: t(locale, "blog.inline.steam_no_wishlists"),
      href: withLocale(locale, "/no-wishlists-on-steam"),
    },
    {
      phrase: t(locale, "blog.inline.no_wishlists_on_steam"),
      href: withLocale(locale, "/no-wishlists-on-steam"),
    },
    {
      phrase: t(locale, "blog.inline.no_wishlists_on_steam").toLowerCase(),
      href: withLocale(locale, "/no-wishlists-on-steam"),
    },
    {
      phrase: t(locale, "blog.inline.marketing_for_video_games"),
      href: withLocale(locale, "/"),
    },
    {
      phrase: t(locale, "blog.inline.marketing_for_video_games").toLowerCase(),
      href: withLocale(locale, "/"),
    },
    { phrase: "Steam Wishlist Calculator", href: withLocale(locale, "/steam-wishlist-calculator") },
    { phrase: "Steam Pricing Planner", href: withLocale(locale, "/steam-pricing-planner") },
    { phrase: "Steam Influencer Planner", href: withLocale(locale, "/steam-influencers-planner") },
    { phrase: "Steam Festival Planner", href: withLocale(locale, "/steam-festival-planner") },
    { phrase: t(locale, "blog.inline.work_with_us"), href: withLocale(locale, "/form") },
    {
      phrase: t(locale, "blog.inline.work_with_us").toLowerCase(),
      href: withLocale(locale, "/form"),
    },
    // Package links
    { phrase: t(locale, "blog.inline.tiktok_package"), href: withLocale(locale, "/tiktok-package-20-videos") },
    { phrase: t(locale, "blog.inline.tiktok"), href: withLocale(locale, "/tiktok-package-20-videos") },
    { phrase: t(locale, "blog.inline.tiktok").toLowerCase(), href: withLocale(locale, "/tiktok-package-20-videos") },
    { phrase: t(locale, "blog.inline.reddit_launch"), href: withLocale(locale, "/reddit-launch-support") },
    { phrase: t(locale, "blog.inline.reddit"), href: withLocale(locale, "/reddit-launch-support") },
    { phrase: t(locale, "blog.inline.reddit").toLowerCase(), href: withLocale(locale, "/reddit-launch-support") },
    { phrase: t(locale, "blog.inline.pr_campaign"), href: withLocale(locale, "/pr-starter-pack") },
    { phrase: t(locale, "blog.inline.influencer_campaign"), href: withLocale(locale, "/influencer-micro-campaign") },
    { phrase: t(locale, "blog.inline.influencers"), href: withLocale(locale, "/influencer-micro-campaign") },
    { phrase: t(locale, "blog.inline.influencers").toLowerCase(), href: withLocale(locale, "/influencer-micro-campaign") },
    { phrase: t(locale, "blog.inline.influencer"), href: withLocale(locale, "/influencer-micro-campaign") },
    { phrase: t(locale, "blog.inline.influencer").toLowerCase(), href: withLocale(locale, "/influencer-micro-campaign") },
    { phrase: t(locale, "blog.inline.paid_ads"), href: withLocale(locale, "/paid-ads-setup") },
    { phrase: t(locale, "blog.inline.paid_ads").toLowerCase(), href: withLocale(locale, "/paid-ads-setup") },
    { phrase: t(locale, "blog.inline.gameplay_trailer"), href: withLocale(locale, "/gameplay-trailer") },
    { phrase: t(locale, "blog.inline.gameplay_trailer").toLowerCase(), href: withLocale(locale, "/gameplay-trailer") },
    { phrase: t(locale, "blog.inline.trap_plan"), href: withLocale(locale, "/") },
    { phrase: t(locale, "blog.inline.homepage"), href: withLocale(locale, "/") },
    { phrase: t(locale, "blog.inline.game_marketing"), href: withLocale(locale, "/") },
    { phrase: t(locale, "blog.inline.game_marketing").toLowerCase(), href: withLocale(locale, "/") },
    ...relatedPostLinks.map((p) => ({ phrase: p.label, href: p.href })),
    // Blog cross-links: new card articles
    { phrase: "how to turn TikTok views into real Steam traffic", href: withLocale(locale, "/blog/how-to-turn-tiktok-views-into-real-steam-traffic") },
    { phrase: "TikTok video formats that work best for Steam games", href: withLocale(locale, "/blog/tiktok-video-formats-that-work-best-for-steam-games") },
    { phrase: "TikTok video formats for games", href: withLocale(locale, "/blog/tiktok-video-formats-that-work-best-for-steam-games") },
    { phrase: "why TikTok and YouTube Shorts became the main discovery channel for indie games", href: withLocale(locale, "/blog/why-tiktok-and-youtube-shorts-became-the-main-discovery-channel-for-indie-games") },
    { phrase: "main discovery channel for indie games", href: withLocale(locale, "/blog/why-tiktok-and-youtube-shorts-became-the-main-discovery-channel-for-indie-games") },
    { phrase: "how many short videos does a Steam game need", href: withLocale(locale, "/blog/how-many-short-videos-does-a-steam-game-need-for-stable-wishlist-growth") },
    { phrase: "how many short videos for Steam wishlists", href: withLocale(locale, "/blog/how-many-short-videos-does-a-steam-game-need-for-stable-wishlist-growth") },
    { phrase: "how short videos influence Steam wishlists", href: withLocale(locale, "/blog/how-short-videos-influence-steam-wishlists") },
    { phrase: "short videos influence Steam wishlists", href: withLocale(locale, "/blog/how-short-videos-influence-steam-wishlists") },
    { phrase: "how to promote a Steam game on TikTok", href: withLocale(locale, "/blog/how-to-promote-a-steam-game-on-tiktok-in-2026") },
    { phrase: "promote a Steam game on TikTok", href: withLocale(locale, "/blog/how-to-promote-a-steam-game-on-tiktok-in-2026") },
    { phrase: "who can help you with TikTok for your Steam game", href: withLocale(locale, "/blog/who-can-help-you-with-tiktok-for-your-steam-game") },
    { phrase: "can TikTok and YouTube Shorts increase Steam wishlists", href: withLocale(locale, "/blog/can-tiktok-and-youtube-shorts-increase-steam-wishlists") },
    { phrase: "should you launch TikTok for your Steam game", href: withLocale(locale, "/blog/should-you-launch-tiktok-for-your-steam-game") },
    { phrase: "do Shorts videos really drive Steam wishlists", href: withLocale(locale, "/blog/do-shorts-videos-from-tiktok-shorts-and-reels-really-drive-steam-wishlists") },
    { phrase: "how important is price in a PC Console game growth strategy", href: withLocale(locale, "/blog/how-important-is-price-in-a-pc-console-game-growth-strategy") },
    { phrase: "pricing in a game growth strategy", href: withLocale(locale, "/blog/how-important-is-price-in-a-pc-console-game-growth-strategy") },
    { phrase: "how to know marketing works before release", href: withLocale(locale, "/blog/how-to-know-marketing-for-your-games-works-before-release") },
    { phrase: "marketing works before release", href: withLocale(locale, "/blog/how-to-know-marketing-for-your-games-works-before-release") },
    { phrase: "promote a game without a budget", href: withLocale(locale, "/blog/promote-a-game-without-a-budget-virality-myth") },
    { phrase: "avoid a total flop on Steam", href: withLocale(locale, "/blog/make-a-great-game-avoid-a-flop-on-steam") },
    { phrase: "driving traffic but wishlists standing still", href: withLocale(locale, "/blog/driving-traffic-but-wishlists-standing-still") },
  ];

  const linkBudget: LinkifyBudget = { used: 0, max: 15, usedHrefs: {} };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://www.trapplan.com${withLocale(locale, `/blog/${post.slug}`)}`,
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
        <BackToTopButton />
        <CardArticle
          data={post.cardArticle}
          cover={{ src: cover, alt: post.title }}
          hideProTips={post.slug === "steam-next-fest-2026-the-ultimate-strategy-guide"}
          inlineLinks={inlineLinks}
          linkBudget={linkBudget}
        />
        <BlogQuoteBanner />
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
      <BackToTopButton />
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 lg:px-0">
        <header>
          <div className="flex flex-col gap-4">
            <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-black/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={withLocale(locale, "/")} className="transition-colors hover:text-black">
                    {t(locale, "blog.ui.home")}
                  </Link>
                </li>
                <li className="text-black/30">/</li>
                <li>
                  <Link href={withLocale(locale, "/blog")} className="transition-colors hover:text-black">
                    {t(locale, "blog.ui.blog")}
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
                <span>{formatDate(locale, post.date)}</span>
                <span className="px-2 text-black/25">•</span>
                <span>
                  {post.readingMinutes} {t(locale, "blog.ui.min_read")}
                </span>
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
                {normalizeText(post.excerpt)}
              </p>
            </div>
          </div>
        </header>

        <article className="mt-10">
          {renderedBlocks}
        </article>

        <div className="mt-14 border-t border-[#eeeeee] pt-8">
          <Link href={withLocale(locale, "/blog")} className="text-[14px] font-semibold text-black/70 hover:underline">
            {t(locale, "blog.ui.back_to_blog")}
          </Link>
        </div>
      </div>

      <BlogQuoteBanner />
    </main>
  );
}
