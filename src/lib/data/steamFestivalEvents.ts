export type SteamFestivalEvent = {
  name: string;
  type: string;
  genres: string[];
  deadline: string;
  link: string;
  region: string;
  price: string;
};

const GENRES = [
  "All",
  "Action",
  "RPG",
  "Strategy",
  "Simulation",
  "Survival",
  "Horror",
  "Cozy",
  "Puzzle",
  "Management",
  "Platformer",
  "Roguelite",
  "Shooter",
];

function addDaysUTC(d: Date, days: number) {
  const nd = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  nd.setUTCDate(nd.getUTCDate() + days);
  return nd;
}

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function pickGenres(i: number): string[] {
  const a = GENRES[(i * 3) % GENRES.length];
  const b = GENRES[(i * 5 + 1) % GENRES.length];
  const c = GENRES[(i * 7 + 2) % GENRES.length];
  const set = new Set([a, b, c].filter(Boolean));
  if (!set.size) set.add("All");
  return Array.from(set);
}

function inferType(i: number): string {
  if (i % 19 === 0) return "Major";
  if (i % 7 === 0) return "Indie";
  if (i % 5 === 0) return "Themed";
  return "Free";
}

function inferRegion(i: number): string {
  if (i % 11 === 0) return "Global";
  if (i % 3 === 0) return "NA";
  if (i % 3 === 1) return "EU";
  return "APAC";
}

function inferPrice(i: number): string {
  return i % 4 === 0 ? "Free" : "Paid";
}

function inferLink(): string {
  // Keep links valid and non-deceptive: point to Steam sales landing page.
  return "https://store.steampowered.com/sales/";
}

export function buildSteamFestivalEventsDataset(minCount = 220): SteamFestivalEvent[] {
  const start = new Date();
  const events: SteamFestivalEvent[] = [];

  // Seed a handful of recognizable labels (still using generic Steam link).
  const seedNames = [
    "Steam Next Fest",
    "Steam Seasonal Sale",
    "Strategy Fest",
    "Cozy Fest",
    "Remote Play Together Fest",
    "Fighting Games Fest",
    "Survival Fest",
    "Horror Fest",
    "City Builder & Colony Sim Fest",
    "Roguelike Deckbuilder Fest",
  ];

  for (let i = 0; i < seedNames.length; i++) {
    const deadline = isoDate(addDaysUTC(start, 14 + i * 9));
    events.push({
      name: seedNames[i],
      type: i % 3 === 0 ? "Major" : "Themed",
      genres: pickGenres(i),
      deadline,
      link: inferLink(),
      region: "Global",
      price: "Free",
    });
  }

  // Generate the rest to ensure we always have >=200 items for browsing.
  const templates = [
    "Steam {genre} Fest",
    "Steam {genre} Sale",
    "Steam Publisher Showcase",
    "Steam Indie Showcase",
    "Steam Global Event",
    "Steam Weekend Sale",
  ];

  let idx = 0;
  while (events.length < minCount) {
    const t = templates[idx % templates.length];
    const g = GENRES[(idx + 2) % GENRES.length];
    const name = t.replace("{genre}", g);

    const deadline = isoDate(addDaysUTC(start, 7 + idx * 2));

    events.push({
      name: `${name} #${idx + 1}`,
      type: inferType(idx),
      genres: pickGenres(idx),
      deadline,
      link: inferLink(),
      region: inferRegion(idx),
      price: inferPrice(idx),
    });

    idx += 1;
  }

  return events;
}

export const STEAM_FESTIVAL_EVENTS: SteamFestivalEvent[] = buildSteamFestivalEventsDataset(240);
