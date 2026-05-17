export type StudioCase = {
  slug: string;
  title: string;
  date: string;
  client: string;
  excerpt: string;
  theme: string;
};

export const STUDIO_PAGES: StudioCase[] = [
  {
    slug: "influencer-remote-team-for-wargaming",
    title: "Influencer remote team for Wargaming",
    date: "May 28, 2025",
    client: "Wargaming",
    excerpt:
      "A dedicated remote pod ran YouTube, Twitch and Discord creator campaigns for World of Warships and World of Tanks, working with 400+ creators to bring new players into the games.",
    theme: "from-sky-700 via-blue-700 to-indigo-700",
  },
  {
    slug: "remote-influencer-team-for-gaijin-entertainment",
    title: "Remote influencer team for Gaijin Entertainment",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt:
      "A remote team of five specialists ran Gaijin's creator campaigns end-to-end — from YouTube activations to detailed Reddit launches — focused on attracting fresh players to the live games.",
    theme: "from-lime-600 via-emerald-500 to-sky-500",
  },
];
