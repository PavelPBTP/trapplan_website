"use client";

import Image from "next/image";
import Script from "next/script";

import { t } from "@/lib/copy";

type Locale = Parameters<typeof t>[0];

export default function SteamFestivalPlannerClient({ locale }: { locale: Locale }) {
  return (
    <>
      <Script
        id="tp-i18n-steam-festival-planner"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.__TP_I18N = Object.assign({}, window.__TP_I18N || {}, {\
  steam_festival_planner: {\
    empty_no_events_loaded: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.empty.no_events_loaded"))},\
    empty_failed_load_db: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.empty.failed_load_db"))},\
    empty_no_events_found: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.empty.no_events_found"))},\
    status_closed: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.status.closed"))},\
    status_open: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.status.open"))},\
    status_closes_in_days: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.status.closes_in_days"))},\
    field_status_label: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.field.status_label"))},\
    cta_apply: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.cta.apply"))},\
    cta_closed: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.cta.closed"))},\
    badge_match: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.badge.match"))},\
    fallback_free: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.fallback.free"))},\
    fallback_event: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.fallback.event"))},\
    analyzing: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.analyzing"))},\
    genres_prefix: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.genres_prefix"))},\
    analyze: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.analyze"))},\
    alert_game_not_found: ${JSON.stringify(t(locale, "tools.steam_festival_planner.script.alert_game_not_found"))}\
  }\
});`,
        }}
      />

      <Script
        id="steam-festival-planner-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: t(locale, "tools.steam_festival_planner.name"),
            url: "https://www.trapplan.com/steam-festival-planner",
            description:
              t(locale, "tools.steam_festival_planner.ld.description"),
            applicationCategory: "MarketingApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <Script
        id="steam-festival-planner-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t(locale, "blog.ui.home"),
                item: "https://www.trapplan.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t(locale, "tools.ui.free_tools"),
                item: "https://www.trapplan.com/steam-festival-planner",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t(locale, "tools.steam_festival_planner.name"),
                item: "https://www.trapplan.com/steam-festival-planner",
              },
            ],
          }),
        }}
      />

      <div className="sr-only">
        <h2>{t(locale, "tools.steam_festival_planner.sr.title")}</h2>
        <p>{t(locale, "tools.steam_festival_planner.sr.body")}</p>
      </div>

      <div id="tp-planner-app" suppressHydrationWarning>
        <div className="tp-steam-analyzer">
          <div className="tp-analyzer-content">
            <h4 className="tp-analyzer-title">{t(locale, "tools.steam_festival_planner.ui.smart_match.title")}</h4>
            <p style={{ fontSize: 14, color: "#9a938a", marginBottom: 20 }}>
              {t(locale, "tools.steam_festival_planner.ui.smart_match.body")}
            </p>
            <div className="tp-input-group">
              <input
                type="text"
                id="tp-steam-id"
                placeholder={t(locale, "tools.steam_festival_planner.ui.appid.placeholder")}
              />
              <button id="tp-analyze-btn">{t(locale, "tools.steam_festival_planner.ui.analyze")}</button>
            </div>
            <div id="tp-game-preview" className="tp-game-preview" style={{ display: "none" }}>
              <Image
                id="tp-game-icon"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                alt=""
                width={184}
                height={69}
                unoptimized
              />
              <div>
                <div id="tp-game-name">{t(locale, "tools.steam_festival_planner.ui.game_name")}</div>
                <div id="tp-game-genres">{t(locale, "tools.steam_festival_planner.ui.genres")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-toolbar">
          <div className="tp-search-bar">
            <input
              type="text"
              id="tp-search"
              placeholder={t(locale, "tools.steam_festival_planner.ui.search.placeholder")}
            />
          </div>
          <div className="tp-filter-chips" id="tp-filters">
            <button className="chip active" data-filter="all">
              {t(locale, "tools.steam_festival_planner.ui.filters.all")}
            </button>
            <button className="chip" data-filter="Free">
              {t(locale, "tools.steam_festival_planner.ui.filters.free")}
            </button>
            <button className="chip" data-filter="Major">
              {t(locale, "tools.steam_festival_planner.ui.filters.major")}
            </button>
            <button className="chip" data-filter="Themed">
              {t(locale, "tools.steam_festival_planner.ui.filters.themed")}
            </button>
            <button className="chip" data-filter="Indie">
              {t(locale, "tools.steam_festival_planner.ui.filters.indie")}
            </button>
          </div>
        </div>

        <div id="tp-grid" className="tp-grid">
          <div className="loading">{t(locale, "tools.steam_festival_planner.ui.loading_events")}</div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --tp-pink: var(--accent);
          --tp-border: rgba(244, 241, 234, 0.08);
        }
        #tp-planner-app {
          font-family: var(--font-body);
          max-width: 1240px;
          margin: 0 auto;
          padding: 16px 8px 8px;
          color: #f4f1ea;
        }

        .tp-steam-analyzer {
          background: #131110;
          border-radius: 18px;
          padding: 32px;
          border: 1px solid var(--tp-border);
          margin-bottom: 30px;
        }
        .tp-analyzer-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: #f4f1ea;
        }
        .tp-input-group {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        #tp-steam-id {
          flex-grow: 1;
          padding: 14px 16px;
          border-radius: 6px;
          border: 1px solid rgba(244, 241, 234, 0.12);
          background: #0c0b0a;
          color: #f4f1ea;
          outline: none;
        }
        #tp-steam-id:focus {
          border-color: var(--accent);
        }
        #tp-analyze-btn {
          background: var(--accent);
          color: var(--accent-on);
          border: none;
          padding: 0 30px;
          border-radius: 6px;
          font-family: var(--font-display);
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        #tp-analyze-btn:hover {
          filter: brightness(1.06);
        }

        .tp-toolbar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        #tp-search {
          padding: 14px 18px;
          border-radius: 6px;
          border: 1px solid rgba(244, 241, 234, 0.12);
          background: #0c0b0a;
          color: #f4f1ea;
          width: 100%;
          max-width: 400px;
          outline: none;
        }
        #tp-search:focus {
          border-color: var(--accent);
        }
        .tp-filter-chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .chip {
          background: transparent;
          border: 1px solid rgba(244, 241, 234, 0.18);
          padding: 9px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          color: #9a938a;
        }
        .chip.active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-on);
        }

        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 18px;
        }
        .loading {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px;
          color: #6b655b;
        }

        .tp-card {
          background: #131110;
          border: 1px solid var(--tp-border);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.25s ease;
          min-height: 320px;
          position: relative;
        }
        .tp-card.recommended {
          border: 1px solid var(--accent);
        }
        .tp-card:hover {
          border-color: rgba(244, 241, 234, 0.18);
        }

        .tp-price-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 5px 12px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          background: rgba(244, 241, 234, 0.06);
          color: #9a938a;
        }
        .tp-price-badge.free {
          background: rgba(91, 214, 176, 0.12);
          color: #9fe1cb;
        }
        .tp-match-label {
          position: absolute;
          top: 55px;
          right: 20px;
          background: var(--accent);
          color: var(--accent-on);
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .tp-cat {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .tp-name {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          color: #f4f1ea;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }
        .tp-status {
          background: rgba(244, 241, 234, 0.04);
          padding: 18px;
          border-radius: 12px;
          margin-bottom: 24px;
          color: #9a938a;
        }

        .tp-btn {
          background: var(--accent);
          color: var(--accent-on);
          text-align: center;
          padding: 16px;
          border-radius: 6px;
          font-family: var(--font-display);
          font-weight: 600;
          text-decoration: none;
          display: block;
        }
      `}</style>

      <Script
        id="steam-festival-planner-script"
        src="/scripts/steam-festival-planner.js"
        strategy="afterInteractive"
      />
    </>
  );
}
