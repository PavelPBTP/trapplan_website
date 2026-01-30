import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import path from "node:path";

import Footer from "@/components/sections/Footer";
import SteamInfluencersPlannerClient from "./steam-influencers-planner-client";

export const metadata: Metadata = {
  title: "Steam Influencer Planner",
  description:
    "Professional tool for discovering YouTube and Twitch gaming influencers based on genre and similar games.",
  alternates: {
    canonical: "/steam-influencers-planner",
  },
  openGraph: {
    type: "website",
    url: "/steam-influencers-planner",
    title: "Steam Influencer Planner",
    description:
      "Professional tool for discovering YouTube and Twitch gaming influencers based on genre and similar games.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Influencer Planner",
    description:
      "Professional tool for discovering YouTube and Twitch gaming influencers based on genre and similar games.",
  },
};

type InfluencerRow = {
  platform: "twitch" | "youtube" | "other";
  nick: string;
  name: string;
  link: string;
  performDate?: string;
  lastCampaign?: string;
  region?: string;
  lang?: string;
  genre?: string;
  followers?: string;
  avgViews?: string;
  ccv?: string;
  rate?: string;
  duration?: string;
  mail?: string;
  contacts?: string;
  comments?: string;
};

function parseCsvLine(line: string) {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 1;
        continue;
      }
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function inferPlatform(url: string): InfluencerRow["platform"] {
  const u = (url ?? "").toLowerCase();
  if (u.includes("twitch.tv")) return "twitch";
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  return "other";
}

async function loadInfluencersSnapshot(): Promise<InfluencerRow[]> {
  const dataDir = path.join(process.cwd(), "public", "data");
  const files = (await readdir(dataDir)).filter((f) => f.startsWith("steam-influencers-gid-") && f.endsWith(".csv"));
  if (files.length === 0) return [];

  const normalizeHeader = (h: string) => h.trim().toLowerCase().replace(/\s+/g, " ");

  const buildIndex = (header: string[]) => {
    const map = new Map<string, number>();
    header.forEach((h, i) => map.set(normalizeHeader(h), i));
    return map;
  };

  const getAny = (row: string[], idx: Map<string, number>, keys: string[]) => {
    for (const k of keys) {
      const i = idx.get(normalizeHeader(k));
      if (i === undefined) continue;
      const v = row[i] ?? "";
      if (v.trim()) return v.trim();
    }
    return "";
  };

  const parseFile = async (filename: string): Promise<InfluencerRow[]> => {
    const raw = await readFile(path.join(dataDir, filename), "utf8");
    const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length < 2) return [];

    const header = parseCsvLine(lines[0]);
    const idx = buildIndex(header);

    return lines.slice(1).map((line) => {
      const row = parseCsvLine(line);

      const link = getAny(row, idx, ["Link", "link"]);
      const nick = getAny(row, idx, ["Nick", "Nickname", "Name", "Name "]);
      const name = getAny(row, idx, ["Name", "Nick", "Nickname", "Name "]);

      return {
        platform: inferPlatform(link),
        nick,
        name,
        link,
        performDate: getAny(row, idx, ["Perform date", "Perform Date"]) || undefined,
        lastCampaign: getAny(row, idx, ["Last Campaign", "Last campaign"]) || undefined,
        region: getAny(row, idx, ["Region", "Country"]) || undefined,
        lang: getAny(row, idx, ["Lang", "Language"]) || undefined,
        genre: getAny(row, idx, ["Genre"]) || undefined,
        followers: getAny(row, idx, ["Followers"]) || undefined,
        avgViews:
          getAny(row, idx, [
            "Avg views",
            "Avg Views",
            "Our AVG Views",
            "Our avg views",
            "Agent AVG Views",
          ]) || undefined,
        ccv: getAny(row, idx, ["ССV", "CCV", "CVV", "CVV ", "CVV,", "CCV "]) || undefined,
        rate:
          getAny(row, idx, [
            "Rate",
            "Our Rate",
            "Rate They offer ",
            "Rate They offer",
            "Rate 1h",
            "Rate 2h",
          ]) || undefined,
        duration: getAny(row, idx, ["Duration"]) || undefined,
        mail: getAny(row, idx, ["Mail", "Email"]) || undefined,
        contacts: getAny(row, idx, ["Contacts"]) || undefined,
        comments: getAny(row, idx, ["Comments", "Notes", "Results"]) || undefined,
      };
    });
  };

  const all = (await Promise.all(files.map(parseFile))).flat();

  // Dedupe by link+nick
  const seen = new Set<string>();
  const out: InfluencerRow[] = [];
  for (const r of all) {
    const key = `${r.link}::${r.nick}`.toLowerCase();
    if (!r.link && !r.nick && !r.name) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r);
  }

  return out;
}

export default async function SteamInfluencersPlannerPage() {
  const influencers = await loadInfluencersSnapshot();

  return (
    <>
      <main className="bg-[#F3F3F3]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Steam Influencer Planner",
              url: "https://www.trapplan.com/steam-influencers-planner",
              description:
                "Professional tool for discovering YouTube and Twitch gaming influencers based on genre and similar games.",
              applicationCategory: "MarketingApplication",
              operatingSystem: "Web",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.trapplan.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Free Tools",
                  item: "https://www.trapplan.com/steam-influencers-planner",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Steam Influencer Planner",
                  item: "https://www.trapplan.com/steam-influencers-planner",
                },
              ],
            }),
          }}
        />

        <SteamInfluencersPlannerClient influencers={influencers} />
        <Footer />
      </main>
    </>
  );
}
