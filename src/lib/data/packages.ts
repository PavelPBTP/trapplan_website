export type PackageCard = {
  title: string;
  description: string;
  price: string;
  accent: string;
  media: "phone" | "laptop" | "collage" | "video";
  href: string;
  logos?: string[];
};

export const PACKAGES: PackageCard[] = [
  {
    title: "Reddit\nLaunch Support",
    description:
      "We drive a launch burst on Reddit in the most relevant subreddits for your game: we’ll craft and publish 15 high engagement posts, spark meaningful discussions and generate organic interest at release by real users",
    price: "€2 500",
    accent: "from-zinc-900 via-zinc-800 to-zinc-700",
    media: "phone",
    href: "/reddit-launch-support",
  },
  {
    title: "PR Starter Pack",
    description:
      "PR outreach that gets your game covered. A readable press release, targeted pitches, follow ups, and the full contact list. Built for credibility and Steam wishlists.",
    price: "€3 000",
    accent: "from-blue-900 via-indigo-900 to-slate-900",
    media: "laptop",
    href: "/pr-starter-pack",
    logos: ["IGN", "VICE", "polygon"],
  },
  {
    title: "Influencer\nMicro Campaign",
    description:
      "we identify niche creators, coordinate content activations and track performance. Cost-efficient, scalable and built for meaningful reach.",
    price: "€5 000",
    accent: "from-zinc-900 via-zinc-800 to-zinc-700",
    media: "collage",
    href: "/influencer-micro-campaign",
    logos: ["Twitch", "YouTube", "TikTok"],
  },
  {
    title: "TikTok Package:\n20 videos",
    description:
      "20 custom TikTok videos tailored for your game. We handle the concept, production and formatting, align with platform trends and audience behaviour.",
    price: "€2 000",
    accent: "from-rose-600 via-fuchsia-600 to-purple-700",
    media: "phone",
    href: "/tiktok-package-20-videos",
    logos: ["TikTok"],
  },
  {
    title: "Paid Ads Setup",
    description:
      "We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included.",
    price: "€2 000",
    accent: "from-slate-900 via-zinc-800 to-zinc-700",
    media: "laptop",
    href: "/paid-ads-setup",
    logos: ["reddit", "TikTok", "X"],
  },
  {
    title: "Gameplay Trailer",
    description:
      "A complete, high quality gameplay trailer crafted specifically for your game. Clear storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
    price: "€3 000",
    accent: "from-emerald-900 via-teal-900 to-slate-900",
    media: "video",
    href: "/gameplay-trailer",
  },
];
