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
      "Local studio page created for the migration. Summary details can be expanded later without relying on any external source.",
    theme: "from-sky-700 via-blue-700 to-indigo-700",
  },
  {
    slug: "remote-influencer-team-for-gaijin-entertainment",
    title: "Remote influencer team for Gaijin Entertainment",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt:
      "Local studio page created for the migration. Summary details can be expanded later without relying on any external source.",
    theme: "from-lime-600 via-emerald-500 to-sky-500",
  },
];
