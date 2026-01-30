export type FooterLink = { label: string; href: string };

export const FOOTER_LINKS: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Ready-to-Go Packages",
    links: [
      { label: "Reddit Launch Support", href: "/reddit-launch-support" },
      { label: "PR Starter Pack", href: "/pr-starter-pack" },
      { label: "Influencer Micro Campaign", href: "/influencer-micro-campaign" },
      { label: "TikTok Package 20 videos", href: "/tiktok-package-20-videos" },
      { label: "Paid Ads Setup", href: "/paid-ads-setup" },
      { label: "Gameplay Trailer", href: "/gameplay-trailer" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "Steam Wishlist Calculator", href: "/steam-wishlist-calculator" },
      { label: "Steam Pricing Planner", href: "/steam-pricing-planner" },
      { label: "Steam Influencer Planner", href: "/steam-influencers-planner" },
      { label: "Steam Festival Planner", href: "/steam-festival-planner" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Cases", href: "/our-cases" },
      { label: "Blog", href: "/blog" },
      { label: "No wishlists on Steam", href: "/no-wishlists-on-steam" },
      { label: "Work with us", href: "/form" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Content Rules", href: "/content-rules" },
      {
        label: "Cookies Policy",
        href: "https://www.iubenda.com/privacy-policy/24291473/cookie-policy",
      },
      { label: "Copyright Policy", href: "/copyright-policy" },
      { label: "Privacy Policy", href: "https://www.iubenda.com/privacy-policy/24291473" },
    ],
  },
];
