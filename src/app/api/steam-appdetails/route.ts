import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const appid = url.searchParams.get("appid")?.trim();

  if (!appid || !/^\d+$/.test(appid)) {
    return NextResponse.json({ error: "Invalid appid" }, { status: 400 });
  }

  const apiUrl = `https://store.steampowered.com/api/appdetails?appids=${encodeURIComponent(appid)}`;

  try {
    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
      next: { revalidate: 60 * 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Steam API error: ${res.status}` },
        { status: 502 },
      );
    }

    const json = (await res.json()) as Record<string, unknown>;
    const entry = json[appid] as { data?: unknown; success?: boolean } | undefined;

    if (!entry || !entry.success || !entry.data) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    return NextResponse.json(
      { data: entry.data },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 },
    );
  }
}
