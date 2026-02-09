export type FooterLink = { labelKey: string; href: string };

export const FOOTER_LINKS: {
  titleKey: string;
  links: FooterLink[];
}[] = [
  {
    titleKey: "footer.group.ready_packages",
    links: [
      { labelKey: "packages.card.reddit.title", href: "/reddit-launch-support" },
      { labelKey: "packages.card.pr_starter.title", href: "/pr-starter-pack" },
      { labelKey: "packages.card.influencer_micro.title", href: "/influencer-micro-campaign" },
      { labelKey: "packages.card.tiktok_20.title", href: "/tiktok-package-20-videos" },
      { labelKey: "packages.card.paid_ads_setup.title", href: "/paid-ads-setup" },
      { labelKey: "packages.card.gameplay_trailer.title", href: "/gameplay-trailer" },
    ],
  },
  {
    titleKey: "footer.group.free_tools",
    links: [
      { labelKey: "seo.steam_wishlist_calculator.title", href: "/steam-wishlist-calculator" },
      { labelKey: "seo.steam_pricing_planner.title", href: "/steam-pricing-planner" },
      { labelKey: "seo.steam_influencers_planner.title", href: "/steam-influencers-planner" },
      { labelKey: "seo.steam_festival_planner.title", href: "/steam-festival-planner" },
    ],
  },
  {
    titleKey: "footer.group.resources",
    links: [
      { labelKey: "nav.about_us", href: "/about-us" },
      { labelKey: "nav.our_cases", href: "/our-cases" },
      { labelKey: "nav.blog", href: "/blog" },
      { labelKey: "footer.link.no_wishlists", href: "/no-wishlists-on-steam" },
      { labelKey: "cta.work_with_us", href: "/form" },
    ],
  },
  {
    titleKey: "footer.group.support",
    links: [
      { labelKey: "legal.content_rules.title", href: "/content-rules" },
      {
        labelKey: "footer.link.cookies_policy",
        href: "https://www.iubenda.com/privacy-policy/24291473/cookie-policy",
      },
      { labelKey: "legal.copyright.title", href: "/copyright-policy" },
      { labelKey: "footer.link.privacy_policy", href: "https://www.iubenda.com/privacy-policy/24291473" },
    ],
  },
];
