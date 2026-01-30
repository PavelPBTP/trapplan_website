import { NextResponse } from "next/server";

import {
  STEAM_FESTIVAL_EVENTS,
  type SteamFestivalEvent,
} from "@/lib/data/steamFestivalEvents";

type FestivalItem = {
  name: string;
  type: string;
  genres: string[];
  deadline: string;
  link: string;
  region: string;
  price: string;
};

function parseCsvLine(line: string): string[] {
  const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  return cols.map((c) => c.replace(/"/g, "").trim());
}

async function loadFromCsv(url: string): Promise<FestivalItem[]> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "text/csv,*/*",
    },
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!res.ok) {
    throw new Error(`CSV fetch failed: ${res.status}`);
  }

  const text = await res.text();
  const rows = text.split("\n").slice(1);

  return rows
    .map((row) => {
      const cols = parseCsvLine(row);
      const genres = (cols[2] ?? "")
        .split(",")
        .map((g) => g.trim())
        .filter(Boolean);

      return {
        name: cols[0] ?? "",
        type: cols[1] ?? "",
        genres,
        deadline: cols[3] ?? "",
        link: cols[4] ?? "",
        region: cols[5] ?? "",
        price: cols[6] ?? "Free",
      } satisfies FestivalItem;
    })
    .filter((i) => i.name);
}

function normalizeLocalDataset(items: SteamFestivalEvent[]): FestivalItem[] {
  return items.map((e) => ({
    name: e.name,
    type: e.type,
    genres: Array.isArray(e.genres) ? e.genres : [],
    deadline: e.deadline,
    link: e.link,
    region: e.region,
    price: e.price,
  }));
}

export async function GET() {
  try {
    const localItems = normalizeLocalDataset(STEAM_FESTIVAL_EVENTS);
    const useCsv = process.env.STEAM_FESTIVAL_PLANNER_CSV_URL;
    const items = useCsv ? await loadFromCsv(useCsv) : localItems;

    return NextResponse.json(
      {
        items,
        source: useCsv ? "csv" : "local",
        count: items.length,
        minRecommendedCount: 200,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (e) {
    const localItems = normalizeLocalDataset(STEAM_FESTIVAL_EVENTS);

    return NextResponse.json(
      {
        items: localItems,
        source: "local",
        count: localItems.length,
        minRecommendedCount: 200,
        error:
          e instanceof Error ? e.message : "Failed to load festivals and sales",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      },
    );
  }
}
