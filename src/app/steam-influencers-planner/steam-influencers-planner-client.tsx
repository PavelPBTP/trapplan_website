"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

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

function normalize(s?: string) {
  return (s ?? "").toLowerCase().trim();
}

function tokenize(s: string) {
  return s
    .split(/[\n,\/|]+|\s{2,}/g)
    .map((t) => normalize(t))
    .flatMap((t) => t.split(/\s+/g))
    .map((t) => t.trim())
    .filter((t) => t.length >= 3);
}

function parseSteamUrl(input: string) {
  const raw = (input ?? "").trim();
  if (!raw) return { appId: "", keywords: [] as string[] };

  const m = raw.match(/\bapp\/(\d+)\b/i) ?? raw.match(/\b(\d{4,})\b/);
  const appId = m?.[1] ?? "";

  // Try to extract slug words from /app/<appid>/<slug>/
  const slugMatch = raw.match(/\bapp\/\d+\/?([^?#]*)/i);
  const slug = (slugMatch?.[1] ?? "")
    .replace(/\//g, " ")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .trim();

  const keywords = Array.from(new Set([...tokenize(slug), ...(appId ? [appId] : [])]));
  return { appId, keywords };
}

function platformLabel(p: InfluencerRow["platform"]) {
  if (p === "twitch") return "Twitch";
  if (p === "youtube") return "YouTube";
  return "Other";
}

function avgMetricLabel(p: InfluencerRow["platform"]) {
  if (p === "twitch") return "Avg CCV";
  if (p === "youtube") return "Avg Views";
  return "Avg";
}

function avgMetricValue(r: InfluencerRow) {
  return (r.platform === "youtube" ? r.avgViews : r.ccv) ?? r.avgViews ?? r.ccv ?? "";
}

function buildTrapPlanMessage({
  steamUrl,
  steamAppId,
  steamKeywords,
  similarGames,
  platform,
  channel,
  channelUrl,
  metricLabel,
  metricValue,
}: {
  steamUrl: string;
  steamAppId: string;
  steamKeywords: string[];
  similarGames: string;
  platform: string;
  channel: string;
  channelUrl: string;
  metricLabel: string;
  metricValue: string;
}) {
  const lines: string[] = [];
  lines.push("Hi TrapPlan team,");
  lines.push("");
  lines.push("We want to run an influencer activation for our Steam game.");
  lines.push("");
  lines.push(`Steam page: ${steamUrl}`);
  if (steamAppId) lines.push(`Steam AppID: ${steamAppId}`);
  if (steamKeywords.length > 0) lines.push(`Steam keywords: ${steamKeywords.join(", ")}`);
  if (similarGames.trim()) lines.push(`Similar games: ${similarGames}`);
  lines.push("");
  lines.push("Creator suggestion:");
  lines.push(`- Platform: ${platform}`);
  lines.push(`- Channel: ${channel}`);
  lines.push(`- Link: ${channelUrl}`);
  if (metricValue.trim()) lines.push(`- ${metricLabel}: ${metricValue}`);
  lines.push("");
  lines.push("Please suggest next steps and an estimate.");
  return lines.join("\n");
}

function metricToNumber(v?: string) {
  const s = (v ?? "").trim();
  if (!s) return 0;
  const cleaned = s
    .replace(/\s+/g, "")
    .replace(/[€$£~]/g, "")
    .replace(/[^0-9,\.]/g, "");
  if (!cleaned) return 0;

  const commaCount = (cleaned.match(/,/g) ?? []).length;
  const dotCount = (cleaned.match(/\./g) ?? []).length;

  // Heuristic: if there are commas and no dots, treat commas as thousand separators.
  if (commaCount > 0 && dotCount === 0) {
    const n = Number(cleaned.replace(/,/g, ""));
    return Number.isFinite(n) ? n : 0;
  }

  // Otherwise try normal parse.
  const n = Number(cleaned.replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function takeAtLeast<T>(items: T[], n: number) {
  if (items.length >= n) return items.slice(0, n);
  if (items.length === 0) return [];

  const out: T[] = items.slice();
  let i = 0;
  while (out.length < n) {
    out.push(items[i % items.length]);
    i += 1;
  }
  return out;
}

export default function SteamInfluencersPlannerClient({
  influencers,
}: {
  influencers: InfluencerRow[];
}) {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale = (seg && (SUPPORTED_LOCALES as readonly string[]).includes(seg)
    ? seg
    : DEFAULT_LOCALE) as Locale;

  const [steamUrl, setSteamUrl] = useState("");
  const [similarGames, setSimilarGames] = useState("");
  const [region, setRegion] = useState("all");

  const [submitted, setSubmitted] = useState(false);
  const [submittedSteamUrl, setSubmittedSteamUrl] = useState("");
  const [submittedSimilarGames, setSubmittedSimilarGames] = useState("");
  const [submittedRegion, setSubmittedRegion] = useState("all");

  const parsedSteamInput = useMemo(() => parseSteamUrl(steamUrl), [steamUrl]);
  const parsedSubmittedSteam = useMemo(
    () => parseSteamUrl(submittedSteamUrl),
    [submittedSteamUrl],
  );

  const regions = useMemo(() => {
    const set = new Set<string>();
    influencers.forEach((r) => {
      const v = r.region?.trim();
      if (v) set.add(v);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [influencers]);

  const results = useMemo(() => {
    if (!submitted) return { twitch: [] as InfluencerRow[], youtube: [] as InfluencerRow[] };

    const parsed = parseSteamUrl(submittedSteamUrl);
    const tokens = Array.from(
      new Set([
        ...parsed.keywords,
        ...tokenize(submittedSimilarGames),
      ]),
    );

    const matches = (hay: string, weight: number) => {
      if (!hay) return 0;
      const h = normalize(hay);
      let score = 0;
      for (const t of tokens) {
        if (h.includes(t)) score += weight;
      }
      return score;
    };

    const scored = influencers
      .map((r) => {
        if (submittedRegion !== "all" && (r.region ?? "") !== submittedRegion) return { r, score: 0 };

        const score =
          matches(r.genre ?? "", 4) +
          matches(r.lastCampaign ?? "", 3) +
          matches(r.comments ?? "", 2) +
          matches(`${r.nick} ${r.name}`, 1);

        return { r, score };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const mb = metricToNumber(avgMetricValue(b.r));
        const ma = metricToNumber(avgMetricValue(a.r));
        return mb - ma;
      });

    const seen = new Set<string>();
    const uniq = scored
      .map((x) => x.r)
      .filter((r) => {
        const key = `${r.platform}::${r.link}::${r.nick}::${r.name}`.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    const twitchPool = uniq.filter((r) => r.platform === "twitch");
    const youtubePool = uniq.filter((r) => r.platform === "youtube");

    return {
      twitch: takeAtLeast(twitchPool, 20),
      youtube: takeAtLeast(youtubePool, 20),
    };
  }, [
    influencers,
    submitted,
    submittedSteamUrl,
    submittedRegion,
    submittedSimilarGames,
  ]);

  const hasAnyInput = normalize(steamUrl).length > 0;

  const onSearch = () => {
    setSubmitted(true);
    setSubmittedSteamUrl(steamUrl);
    setSubmittedSimilarGames(similarGames);
    setSubmittedRegion(region);
  };

  const onClear = () => {
    setSteamUrl("");
    setSimilarGames("");
    setRegion("all");
    setSubmitted(false);
    setSubmittedSteamUrl("");
    setSubmittedSimilarGames("");
    setSubmittedRegion("all");
  };

  return (
    <>
      <div id="tp-influencer-planner">
        <div className="tp-card">
          <h2>{t(locale, "tools.steam_influencers_planner.ui.title")}</h2>
          <div className="tp-sub">
            {t(locale, "tools.steam_influencers_planner.ui.subtitle")}
          </div>

          <div className="tp-how">
            <div className="tp-how-title">
              {t(locale, "tools.steam_influencers_planner.ui.how_title")}
            </div>
            <div className="tp-how-grid">
              <div className="tp-how-step">
                <div className="tp-how-num">1</div>
                <div className="tp-how-copy">
                  {t(locale, "tools.steam_influencers_planner.ui.how_step1")}
                </div>
              </div>
              <div className="tp-how-step">
                <div className="tp-how-num">2</div>
                <div className="tp-how-copy">
                  {t(locale, "tools.steam_influencers_planner.ui.how_step2")}
                </div>
              </div>
              <div className="tp-how-step">
                <div className="tp-how-num">3</div>
                <div className="tp-how-copy">
                  {t(locale, "tools.steam_influencers_planner.ui.how_step3")}
                </div>
              </div>
            </div>
          </div>

          <div className="tp-form">
            <div className="tp-grid">
              <div className="tp-field">
                <div className="tp-label">
                  {t(locale, "tools.steam_influencers_planner.ui.field.steam_store_page")}
                </div>
                <input
                  className="tp-input"
                  value={steamUrl}
                  onChange={(e) => setSteamUrl(e.target.value)}
                  placeholder={t(
                    locale,
                    "tools.steam_influencers_planner.ui.placeholder.steam_url",
                  )}
                />
              </div>

              <div className="tp-field">
                <div className="tp-label">
                  {t(locale, "tools.steam_influencers_planner.ui.field.region")}
                </div>
                <select className="tp-input" value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="all">
                    {t(locale, "tools.steam_influencers_planner.ui.field.region_all")}
                  </option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="tp-preview tp-span-2">
              {normalize(steamUrl).length === 0 ? (
                <span className="tp-preview-muted">
                  {t(locale, "tools.steam_influencers_planner.ui.tip_paste")}
                </span>
              ) : parsedSteamInput.appId ? (
                <div className="tp-preview-row">
                  <span className="tp-chip">AppID: {parsedSteamInput.appId}</span>
                  {parsedSteamInput.keywords.slice(0, 6).map((k) => (
                    <span key={k} className="tp-chip tp-chip-soft">
                      {k}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="tp-preview-warn">
                  {t(locale, "tools.steam_influencers_planner.ui.warn_bad_link")}
                </span>
              )}
            </div>

            <div className="tp-grid">
              <div className="tp-field tp-span-2">
                <div className="tp-label">
                  {t(locale, "tools.steam_influencers_planner.ui.field.similar_games")}
                </div>
                <input
                  className="tp-input"
                  value={similarGames}
                  onChange={(e) => setSimilarGames(e.target.value)}
                  placeholder={t(
                    locale,
                    "tools.steam_influencers_planner.ui.placeholder.similar_games",
                  )}
                />
              </div>
            </div>

            <div className="tp-cta">
              <div className="tp-hint">
                {submitted
                  ? t(locale, "tools.steam_influencers_planner.ui.hint_showing_results")
                  : t(locale, "tools.steam_influencers_planner.ui.hint_paste_and_search")}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="button"
                  className="tp-btn"
                  onClick={onSearch}
                  disabled={!hasAnyInput || !parsedSteamInput.appId}
                >
                  {t(locale, "tools.steam_influencers_planner.ui.cta.search")}
                </button>
                <button
                  type="button"
                  className="tp-btn"
                  onClick={onClear}
                  style={{
                    minWidth: 120,
                    background: "transparent",
                    color: "#f4f1ea",
                    borderColor: "rgba(244, 241, 234, 0.22)",
                  }}
                >
                  {t(locale, "tools.steam_influencers_planner.ui.cta.clear")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="tp-card" style={{ marginTop: 14 }}>
            <div className="tp-results-head">
              <div>
                <div className="tp-results-kicker">RESULTS</div>
                <div className="tp-results-title">Recommended creators</div>
                <div className="tp-results-sub">
                  Steam AppID: <span className="tp-results-strong">{parsedSubmittedSteam.appId || "—"}</span>
                  {parsedSubmittedSteam.keywords.length > 0 ? (
                    <>
                      <span className="tp-dot">•</span>
                      Keywords: <span className="tp-results-strong">{parsedSubmittedSteam.keywords.slice(0, 6).join(", ")}</span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="tp-section-title">Twitch</div>
              <div className="tp-section-sub">20 picks (ranked by match + average CCV)</div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {results.twitch.map((r, i) => (
                  <div
                    key={`twitch-${r.nick}-${r.link}-${i}`}
                    className="group rounded-2xl border border-[rgba(244,241,234,0.08)] bg-card p-5 transition hover:border-[rgba(244,241,234,0.18)]"
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div className="inline-flex items-center rounded-full bg-[rgba(244,241,234,0.06)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
                        {platformLabel(r.platform)}
                      </div>
                      <div className="text-[12px] font-semibold text-tertiary">
                        {avgMetricLabel(r.platform)}: <span className="font-mono text-bone">{avgMetricValue(r)}</span>
                      </div>
                    </div>

                    <div className="mt-3 font-display text-[18px] font-semibold leading-tight tracking-tight text-bone">
                      {r.nick || r.name}
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <a
                        href={
                          "/form?message=" +
                          encodeURIComponent(
                            (() => {
                              const parsed = parseSteamUrl(submittedSteamUrl);
                              return buildTrapPlanMessage({
                                steamUrl: submittedSteamUrl,
                                steamAppId: parsed.appId,
                                steamKeywords: parsed.keywords,
                                similarGames: submittedSimilarGames,
                                platform: platformLabel(r.platform),
                                channel: r.nick || r.name,
                                channelUrl: r.link,
                                metricLabel: avgMetricLabel(r.platform),
                                metricValue: avgMetricValue(r),
                              });
                            })(),
                          )
                        }
                        className="inline-flex items-center justify-center rounded-[6px] bg-[var(--accent)] px-4 py-2 font-display text-[12px] font-semibold text-[var(--accent-on)] transition hover:brightness-110"
                      >
                        Run with TrapPlan
                      </a>

                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-[6px] border border-[rgba(244,241,234,0.18)] px-4 py-2 font-display text-[12px] font-semibold text-bone transition-colors hover:border-[rgba(244,241,234,0.4)]"
                        >
                          Open
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="tp-section-title">YouTube</div>
              <div className="tp-section-sub">20 picks (ranked by match + average views)</div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {results.youtube.map((r, i) => (
                  <div
                    key={`youtube-${r.nick}-${r.link}-${i}`}
                    className="group rounded-2xl border border-[rgba(244,241,234,0.08)] bg-card p-5 transition hover:border-[rgba(244,241,234,0.18)]"
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div className="inline-flex items-center rounded-full bg-[rgba(244,241,234,0.06)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">
                        {platformLabel(r.platform)}
                      </div>
                      <div className="text-[12px] font-semibold text-tertiary">
                        {avgMetricLabel(r.platform)}: <span className="font-mono text-bone">{avgMetricValue(r)}</span>
                      </div>
                    </div>

                    <div className="mt-3 font-display text-[18px] font-semibold leading-tight tracking-tight text-bone">
                      {r.nick || r.name}
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <a
                        href={
                          "/form?message=" +
                          encodeURIComponent(
                            (() => {
                              const parsed = parseSteamUrl(submittedSteamUrl);
                              return buildTrapPlanMessage({
                                steamUrl: submittedSteamUrl,
                                steamAppId: parsed.appId,
                                steamKeywords: parsed.keywords,
                                similarGames: submittedSimilarGames,
                                platform: platformLabel(r.platform),
                                channel: r.nick || r.name,
                                channelUrl: r.link,
                                metricLabel: avgMetricLabel(r.platform),
                                metricValue: avgMetricValue(r),
                              });
                            })(),
                          )
                        }
                        className="inline-flex items-center justify-center rounded-[6px] bg-[var(--accent)] px-4 py-2 font-display text-[12px] font-semibold text-[var(--accent-on)] transition hover:brightness-110"
                      >
                        Run with TrapPlan
                      </a>

                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-[6px] border border-[rgba(244,241,234,0.18)] px-4 py-2 font-display text-[12px] font-semibold text-bone transition-colors hover:border-[rgba(244,241,234,0.4)]"
                        >
                          Open
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <style jsx global>{`
        /* Original embed styles */
        #tp-influencer-planner {
          position: relative;
          isolation: isolate;
          --tp-text: #f4f1ea;
          --tp-muted: #9a938a;
          --tp-border: rgba(244, 241, 234, 0.12);
          --tp-bg: #131110;
          --tp-soft: rgba(244, 241, 234, 0.04);
          --tp-radius: 18px;
          --tp-radius-sm: 8px;
          max-width: 1240px;
          margin: 8px auto;
          color: var(--tp-text);
          font-family: var(--font-body);
        }
        #tp-influencer-planner * {
          box-sizing: border-box;
          font-family: inherit;
        }
        #tp-influencer-planner .tp-card {
          background: var(--tp-bg);
          border: 1px solid var(--tp-border);
          border-radius: var(--tp-radius);
          padding: 40px 32px;
        }
        #tp-influencer-planner h2 {
          all: unset;
          display: block;
          font-weight: 850;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }
        #tp-influencer-planner .tp-sub {
          font-size: 14px;
          line-height: 1.4;
          color: var(--tp-muted);
          max-width: 760px;
        }
        #tp-influencer-planner .tp-form {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }
        #tp-influencer-planner .tp-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        #tp-influencer-planner .tp-how {
          margin-top: 18px;
          border: 1px solid var(--tp-border);
          background: linear-gradient(180deg, rgba(244, 241, 234, 0.02), rgba(244, 241, 234, 0.01));
          border-radius: var(--tp-radius);
          padding: 18px 18px;
        }
        #tp-influencer-planner .tp-how-title {
          font-size: 12px;
          letter-spacing: 0.14em;
          font-weight: 900;
          opacity: 0.55;
        }
        #tp-influencer-planner .tp-how-grid {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        #tp-influencer-planner .tp-how-step {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 10px;
          align-items: start;
          padding: 12px 12px;
          border-radius: 16px;
          background: rgba(244, 241, 234, 0.03);
          border: 1px solid rgba(244, 241, 234, 0.08);
        }
        #tp-influencer-planner .tp-how-num {
          height: 28px;
          width: 28px;
          border-radius: 999px;
          background: rgba(240, 34, 78, 0.12);
          color: #f0224e;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          font-size: 12px;
        }
        #tp-influencer-planner .tp-how-copy {
          font-size: 13px;
          line-height: 1.4;
          color: rgba(244, 241, 234, 0.72);
          font-weight: 650;
        }

        #tp-influencer-planner .tp-preview {
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.3;
        }
        #tp-influencer-planner .tp-preview-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        #tp-influencer-planner .tp-preview-muted {
          color: rgba(244, 241, 234, 0.55);
          font-weight: 650;
        }
        #tp-influencer-planner .tp-preview-warn {
          color: rgba(240, 34, 78, 0.9);
          font-weight: 750;
        }
        #tp-influencer-planner .tp-chip {
          display: inline-flex;
          align-items: center;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(244, 241, 234, 0.12);
          background: rgba(244, 241, 234, 0.03);
          font-weight: 850;
          color: rgba(244, 241, 234, 0.72);
        }
        #tp-influencer-planner .tp-chip-soft {
          background: rgba(240, 34, 78, 0.08);
          border-color: rgba(240, 34, 78, 0.18);
          color: rgba(240, 34, 78, 0.95);
          font-weight: 900;
        }

        #tp-influencer-planner .tp-results-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(244, 241, 234, 0.08);
        }
        #tp-influencer-planner .tp-results-kicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          opacity: 0.55;
        }
        #tp-influencer-planner .tp-results-title {
          margin-top: 6px;
          font-size: 18px;
          font-weight: 950;
          letter-spacing: -0.01em;
        }
        #tp-influencer-planner .tp-results-sub {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(244, 241, 234, 0.55);
          font-weight: 650;
        }
        #tp-influencer-planner .tp-results-strong {
          color: rgba(244, 241, 234, 0.78);
          font-weight: 900;
        }
        #tp-influencer-planner .tp-dot {
          margin: 0 8px;
          opacity: 0.6;
        }
        #tp-influencer-planner .tp-section-title {
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.02em;
        }
        #tp-influencer-planner .tp-section-sub {
          margin-top: 4px;
          font-size: 12px;
          color: rgba(244, 241, 234, 0.55);
          font-weight: 650;
          margin-bottom: 12px;
        }
        #tp-influencer-planner .tp-field {
          display: grid;
          gap: 8px;
          min-width: 0;
        }
        #tp-influencer-planner .tp-span-2 {
          grid-column: 1 / -1;
        }
        #tp-influencer-planner .tp-label {
          font-size: 12px;
          line-height: 1.2;
          color: var(--tp-muted);
        }

        #tp-influencer-planner input.tp-input,
        #tp-influencer-planner select.tp-input {
          width: 100%;
          min-width: 0;
          height: 48px;
          padding: 12px 14px;
          border-radius: var(--tp-radius-sm);
          border: 1px solid var(--tp-border);
          background: var(--tp-soft);
          color: var(--tp-text);
          font-size: 14px;
          line-height: 1.2;
          outline: none;
          box-shadow: none;
          appearance: none;
        }
        #tp-influencer-planner input.tp-input:focus,
        #tp-influencer-planner select.tp-input:focus {
          background: #0c0b0a;
          border-color: var(--accent);
        }

        #tp-influencer-planner .tp-error {
          display: none;
          padding: 12px 14px;
          border-radius: var(--tp-radius-sm);
          border: 1px solid rgba(220, 38, 38, 0.18);
          background: rgba(220, 38, 38, 0.06);
          color: rgba(220, 38, 38, 0.92);
          font-size: 13px;
        }
        #tp-influencer-planner .tp-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          margin-top: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--tp-border);
        }
        #tp-influencer-planner .tp-hint {
          font-size: 13px;
          line-height: 1.3;
          color: var(--tp-muted);
        }
        #tp-influencer-planner .tp-btn {
          min-width: 190px;
          height: 44px;
          padding: 0 18px;
          border-radius: 6px;
          background: var(--accent);
          color: var(--accent-on);
          font-family: var(--font-display);
          font-weight: 600;
          border: 1px solid var(--accent);
          cursor: pointer;
        }
        #tp-influencer-planner .tp-btn:disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }

        #tp-influencer-planner .tp-tabs {
          display: flex;
          gap: 10px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid var(--tp-border);
          flex-wrap: wrap;
        }
        #tp-influencer-planner .tp-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid var(--tp-border);
          background: var(--tp-soft);
          color: rgba(244, 241, 234, 0.86);
          font-weight: 850;
          font-size: 13px;
          cursor: pointer;
        }
        #tp-influencer-planner .tp-tab[data-active="true"] {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-on);
        }
        #tp-influencer-planner .tp-pill {
          font-size: 12px;
          font-weight: 850;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.12);
        }
        #tp-influencer-planner .tp-tab[data-active="false"] .tp-pill {
          border: 1px solid rgba(244, 241, 234, 0.12);
          background: rgba(244, 241, 234, 0.06);
          color: rgba(244, 241, 234, 0.7);
        }
        #tp-influencer-planner .tp-results {
          margin-top: 16px;
          display: grid;
          gap: 14px;
        }
        #tp-influencer-planner .tp-gridCreators {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        #tp-influencer-planner .tp-creator {
          border: 1px solid var(--tp-border);
          border-radius: 18px;
          padding: 14px;
          background: #131110;
          display: grid;
          gap: 10px;
          min-width: 0;
        }
        #tp-influencer-planner .tp-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        #tp-influencer-planner .tp-name {
          font-weight: 900;
          font-size: 15px;
          letter-spacing: -0.01em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        #tp-influencer-planner .tp-badge {
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: var(--tp-soft);
          border: 1px solid var(--tp-border);
          color: rgba(244, 241, 234, 0.78);
          flex: 0 0 auto;
          font-weight: 850;
        }
        #tp-influencer-planner .tp-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        #tp-influencer-planner .tp-chip {
          font-size: 11px;
          padding: 6px 9px;
          border-radius: 999px;
          background: var(--tp-soft);
          border: 1px solid rgba(244, 241, 234, 0.08);
          color: rgba(244, 241, 234, 0.72);
        }
        #tp-influencer-planner .tp-why {
          font-size: 12px;
          line-height: 1.35;
          color: rgba(244, 241, 234, 0.86);
        }
        #tp-influencer-planner .tp-linkRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-top: 2px;
        }
        #tp-influencer-planner .tp-metric {
          font-size: 12px;
          color: rgba(244, 241, 234, 0.55);
        }
        #tp-influencer-planner a.tp-link {
          font-size: 12px;
          font-weight: 900;
          color: #f4f1ea;
          text-decoration: none;
        }
        #tp-influencer-planner a.tp-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 860px) {
          #tp-influencer-planner {
            margin: 40px auto;
            padding: 0 16px;
          }
          #tp-influencer-planner .tp-card {
            padding: 24px 18px;
          }
          #tp-influencer-planner .tp-grid {
            grid-template-columns: 1fr;
          }
          #tp-influencer-planner .tp-how-grid {
            grid-template-columns: 1fr;
          }
          #tp-influencer-planner .tp-cta {
            flex-direction: column;
            align-items: stretch;
          }
          #tp-influencer-planner .tp-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
