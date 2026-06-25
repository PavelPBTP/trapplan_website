import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/data/blog";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.trapplan.com";

  const now = new Date();
  const toAbs = (href: string) => `${siteUrl}${href.startsWith("/") ? href : `/${href}`}`;
  const localize = (path: string) => SUPPORTED_LOCALES.map((l) => withLocale(l, path));

  const studiosRoutes: MetadataRoute.Sitemap = [
    "influencer-remote-team-for-wargaming",
    "remote-influencer-team-for-gaijin-entertainment",
  ].flatMap((slug) =>
    localize(`/studios/${slug}`).map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  );

  const studiosCasesRoutes: MetadataRoute.Sitemap = [
    "created-a-brief-for-youtube-and-twitch",
    "dedicated-ad-campaign-for-the-czech-audience",
    "performance-based-campaigns-for-warthunder",
    "twitch-ad-campaigns-for-crossout",
    "twitch-ad-campaigns-for-enlisted",
    "youtube-ad-campaigns-for-warthunder-in-europe",
    "youtube-ad-campaigns-for-world-of-tanks-in-usa",
    "youtube-ad-campaigns-for-world-of-warships-in-europe",
  ].flatMap((slug) =>
    localize(`/studios-cases/${slug}`).map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    ...localize("/").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    })),
    ...localize("/about-us").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...localize("/content-rules").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
    ...localize("/copyright-policy").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
    ...localize("/our-cases").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...localize("/no-wishlists-on-steam").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...localize("/influencer-activation-for-games").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...localize("/blog").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
    ...localize("/form").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/reddit-launch-support").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/pr-starter-pack").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/tiktok-package-20-videos").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/steam-wishlist-calculator").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/steam-pricing-planner").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/steam-influencers-planner").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/steam-festival-planner").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/influencer-micro-campaign").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/paid-ads-setup").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/gameplay-trailer").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...localize("/game-launch-blueprint").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...localize("/publishing").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...localize("/paid-growth").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...localize("/creative-content-pipeline").map((url) => ({
      url: toAbs(url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((p) =>
    localize(`/blog/${p.slug}`).map((url) => ({
      url: toAbs(url),
      lastModified: new Date(p.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  return [
    ...staticRoutes,
    ...studiosRoutes,
    ...studiosCasesRoutes,
    ...blogRoutes,
  ];
}
