import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.trapplan.com";

  const serviceRoutes: MetadataRoute.Sitemap = [
    "performance-based-campaigns",
    "influencer-marketing-remote-team",
    "game-key-distibution",
    "social-media-for-games",
    "influencer-marketing-for-games",
    "reddit-campaigns",
    "go-to-market-strategy",
    "paid-media",
    "influencer",
    "pr-and-communications",
    "content-production",
    "social-media",
  ].map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  const studiosRoutes: MetadataRoute.Sitemap = [
    "influencer-remote-team-for-wargaming",
    "remote-influencer-team-for-gaijin-entertainment",
  ].map((slug) => ({
    url: `${siteUrl}/studios/${slug}`,
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  const studiosCasesRoutes: MetadataRoute.Sitemap = [
    "created-a-brief-for-youtube-and-twitch",
    "dedicated-ad-campaign-for-the-czech-audience",
    "performance-based-campaigns-for-warthunder",
    "twitch-ad-campaigns-for-crossout",
    "twitch-ad-campaigns-for-enlisted",
    "youtube-ad-campaigns-for-warthunder-in-europe",
    "youtube-ad-campaigns-for-world-of-tanks-in-usa",
    "youtube-ad-campaigns-for-world-of-warships-in-europe",
  ].map((slug) => ({
    url: `${siteUrl}/studios-cases/${slug}`,
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/content-rules`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/copyright-policy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/our-cases`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/no-wishlists-on-steam`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/influencer-activation-for-games`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/form`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/reddit-launch-support`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/pr-starter-pack`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/tiktok-package-20-videos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/steam-wishlist-calculator`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/steam-pricing-planner`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/steam-influencers-planner`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/steam-festival-planner`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...studiosRoutes,
    ...studiosCasesRoutes,
    ...blogRoutes,
  ];
}
