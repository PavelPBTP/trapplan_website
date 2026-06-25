"use client";

import Script from "next/script";
import { useState } from "react";

import { t } from "@/lib/copy";

const PRESETS = {
  conservative: { wlToSalesPct: 5, visitToWlPct: 8 },
  base: { wlToSalesPct: 10, visitToWlPct: 10 },
  optimistic: { wlToSalesPct: 20, visitToWlPct: 12 },
} as const;

type PresetKey = "conservative" | "base" | "optimistic";

type Inputs = {
  targetSales: number;
  price: number;
  steamCutPct: number;
  adjustPct: number;
  wlToSalesPct: number;
  visitToWlPct: number;
  paidToggle: boolean;
  cpc: number;
};

function clampNum(v: number, min: number) {
  return Number.isFinite(v) ? Math.max(min, v) : min;
}

type Locale = Parameters<typeof t>[0];

function fmtInt(locale: Locale, n: number) {
  return Math.round(n).toLocaleString(locale);
}

export default function SteamWishlistCalculatorClient({ locale }: { locale: Locale }) {
  const [activePreset, setActivePreset] = useState<PresetKey>("conservative");
  const [inputs, setInputs] = useState<Inputs>({
    targetSales: 2000,
    price: 19.99,
    steamCutPct: 30,
    adjustPct: 10,
    wlToSalesPct: PRESETS.conservative.wlToSalesPct,
    visitToWlPct: PRESETS.conservative.visitToWlPct,
    paidToggle: true,
    cpc: 0.6,
  });

  const wlToSales = clampNum(inputs.wlToSalesPct, 0) / 100;
  const visitToWl = clampNum(inputs.visitToWlPct, 0) / 100;

  const requiredWishlists = wlToSales > 0 ? clampNum(inputs.targetSales, 0) / wlToSales : 0;
  const requiredVisits = visitToWl > 0 ? requiredWishlists / visitToWl : 0;

  const grossRev = clampNum(inputs.targetSales, 0) * clampNum(inputs.price, 0);
  const steamCut = clampNum(inputs.steamCutPct, 0) / 100;
  const adjust = clampNum(inputs.adjustPct, 0) / 100;
  const netRev = grossRev * (1 - steamCut) * (1 - adjust);

  const budget = inputs.paidToggle ? requiredVisits * clampNum(inputs.cpc, 0) : 0;

  const year1Net = netRev * 3.5;
  const year3Net = netRev * 6;

  return (
    <>
      <Script
        id="steam-wishlist-calculator-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: t(locale, "tools.steam_wishlist_calculator.name"),
            url: "https://www.trapplan.com/steam-wishlist-calculator",
            description:
              t(locale, "tools.steam_wishlist_calculator.ld.description"),
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          }),
        }}
      />

      <Script
        id="steam-wishlist-calculator-breadcrumbs"
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
                item: "https://www.trapplan.com/steam-wishlist-calculator",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t(locale, "tools.steam_wishlist_calculator.name"),
                item: "https://www.trapplan.com/steam-wishlist-calculator",
              },
            ],
          }),
        }}
      />

      <div className="tpw" data-tp-root>
        <div className="sr-only">
          <h2>{t(locale, "tools.steam_wishlist_calculator.sr.title")}</h2>
          <p>{t(locale, "tools.steam_wishlist_calculator.sr.body")}</p>
        </div>

        <div className="tpw-head">
          <h2 className="tpw-title">{t(locale, "tools.steam_wishlist_calculator.ui.title")}</h2>
          <div className="tpw-sub">{t(locale, "tools.steam_wishlist_calculator.ui.subtitle")}</div>
          <div className="tpw-accent" aria-hidden="true" />
        </div>

        <div className="tpw-grid">
          <section className="tpw-card">
            <div className="tpw-card-title">{t(locale, "tools.steam_wishlist_calculator.ui.card.goal")}</div>

            <label className="tpw-label">
              {t(locale, "tools.steam_wishlist_calculator.ui.goal.target_sales")}
              <input
                className="tpw-input"
                type="number"
                value={inputs.targetSales}
                onChange={(e) => setInputs((p) => ({ ...p, targetSales: Number(e.target.value) }))}
              />
            </label>

            <label className="tpw-label">
              {t(locale, "tools.steam_wishlist_calculator.ui.goal.price")}
              <input
                className="tpw-input"
                type="number"
                step="0.01"
                value={inputs.price}
                onChange={(e) => setInputs((p) => ({ ...p, price: Number(e.target.value) }))}
              />
            </label>

            <div className="tpw-row">
              <label className="tpw-label">
                {t(locale, "tools.steam_wishlist_calculator.ui.goal.steam_cut")}
                <input
                  className="tpw-input"
                  type="number"
                  value={inputs.steamCutPct}
                  onChange={(e) => setInputs((p) => ({ ...p, steamCutPct: Number(e.target.value) }))}
                />
              </label>
              <label className="tpw-label">
                {t(locale, "tools.steam_wishlist_calculator.ui.goal.adjustments")}
                <input
                  className="tpw-input"
                  type="number"
                  value={inputs.adjustPct}
                  onChange={(e) => setInputs((p) => ({ ...p, adjustPct: Number(e.target.value) }))}
                />
              </label>
            </div>

            <div className="tpw-help">{t(locale, "tools.steam_wishlist_calculator.ui.goal.adjustments_help")}</div>
          </section>

          <section className="tpw-card">
            <div className="tpw-card-title">{t(locale, "tools.steam_wishlist_calculator.ui.card.funnel")}</div>

            <div className="tpw-presets">
              <button
                className={`tpw-chip ${activePreset === "conservative" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("conservative");
                  setInputs((p) => ({ ...p, ...PRESETS.conservative }));
                }}
              >
                {t(locale, "tools.steam_wishlist_calculator.ui.funnel.preset.conservative")}
              </button>
              <button
                className={`tpw-chip ${activePreset === "base" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("base");
                  setInputs((p) => ({ ...p, ...PRESETS.base }));
                }}
              >
                {t(locale, "tools.steam_wishlist_calculator.ui.funnel.preset.base")}
              </button>
              <button
                className={`tpw-chip ${activePreset === "optimistic" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("optimistic");
                  setInputs((p) => ({ ...p, ...PRESETS.optimistic }));
                }}
              >
                {t(locale, "tools.steam_wishlist_calculator.ui.funnel.preset.optimistic")}
              </button>
            </div>

            <label className="tpw-label">
              {t(locale, "tools.steam_wishlist_calculator.ui.funnel.wl_to_sales")}
              <input
                className="tpw-input"
                type="number"
                value={inputs.wlToSalesPct}
                onChange={(e) => setInputs((p) => ({ ...p, wlToSalesPct: Number(e.target.value) }))}
              />
            </label>

            <label className="tpw-label">
              {t(locale, "tools.steam_wishlist_calculator.ui.funnel.visit_to_wl")}
              <input
                className="tpw-input"
                type="number"
                value={inputs.visitToWlPct}
                onChange={(e) => setInputs((p) => ({ ...p, visitToWlPct: Number(e.target.value) }))}
              />
            </label>

            <div className="tpw-sep" />

            <label className="tpw-check">
              <input
                type="checkbox"
                checked={inputs.paidToggle}
                onChange={(e) => setInputs((p) => ({ ...p, paidToggle: e.target.checked }))}
              />{" "}
              <span>{t(locale, "tools.steam_wishlist_calculator.ui.funnel.estimate_paid")}</span>
            </label>

            {inputs.paidToggle ? (
              <div>
                <label className="tpw-label">
                  {t(locale, "tools.steam_wishlist_calculator.ui.funnel.cpc")}
                  <input
                    className="tpw-input"
                    type="number"
                    step="0.01"
                    value={inputs.cpc}
                    onChange={(e) => setInputs((p) => ({ ...p, cpc: Number(e.target.value) }))}
                  />
                </label>
              </div>
            ) : null}

            <div className="tpw-actions">
              <button className="tpw-btn" type="button">
                {t(locale, "tools.steam_wishlist_calculator.ui.funnel.calculate")}
              </button>
            </div>
          </section>

          <section className="tpw-card">
            <div className="tpw-card-title">{t(locale, "tools.steam_wishlist_calculator.ui.card.results")}</div>

            <div className="tpw-metric">
              <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.required_wl")}</div>
              <div className="tpw-metric-value">{fmtInt(locale, requiredWishlists)}</div>
            </div>
            <div className="tpw-metric">
              <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.required_visits")}</div>
              <div className="tpw-metric-value">{fmtInt(locale, requiredVisits)}</div>
            </div>
            <div className="tpw-metric">
              <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.net_revenue")}</div>
              <div className="tpw-metric-value">{fmtInt(locale, netRev)}</div>
            </div>

            <div className="tpw-metric">
              <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.year1_net")}</div>
              <div className="tpw-metric-value">{fmtInt(locale, year1Net)}</div>
            </div>
            <div className="tpw-metric">
              <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.year3_net")}</div>
              <div className="tpw-metric-value">{fmtInt(locale, year3Net)}</div>
            </div>

            {inputs.paidToggle ? (
              <div className="tpw-metric">
                <div className="tpw-metric-label">{t(locale, "tools.steam_wishlist_calculator.ui.results.paid_budget")}</div>
                <div className="tpw-metric-value">{fmtInt(locale, budget)}</div>
              </div>
            ) : null}
          </section>
        </div>

        <div className="tpw-bottom-note">{t(locale, "tools.steam_wishlist_calculator.ui.bottom_note")}</div>
      </div>

      <style jsx global>{`
        /* Dark theme, scoped to the calculator root */
        [data-tp-root] {
          font-family: var(--font-body);
          color: #f4f1ea;
          max-width: 1240px;
          margin: 8px auto 0;
          padding: 0 8px;
        }
        [data-tp-root] * {
          box-sizing: border-box;
        }
        /* The shared ToolShell provides the page hero. */
        [data-tp-root] .tpw-head {
          display: none;
        }
        [data-tp-root] .tpw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px;
        }
        [data-tp-root] .tpw-card {
          border: 1px solid rgba(244, 241, 234, 0.08);
          border-radius: 18px;
          padding: 28px;
          background: #131110;
          display: flex;
          flex-direction: column;
        }
        [data-tp-root] .tpw-card-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          color: #f4f1ea;
          margin-bottom: 10px;
        }
        [data-tp-root] .tpw-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b655b;
          margin: 16px 0 8px;
        }
        [data-tp-root] .tpw-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 6px;
          border: 1px solid rgba(244, 241, 234, 0.12);
          background: #0c0b0a;
          color: #f4f1ea;
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
        }
        [data-tp-root] .tpw-input:focus {
          border-color: var(--accent);
        }
        [data-tp-root] .tpw-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        [data-tp-root] .tpw-chip {
          border: 1px solid rgba(244, 241, 234, 0.18);
          background: transparent;
          color: #9a938a;
          border-radius: 6px;
          padding: 9px 14px;
          font-family: var(--font-display);
          font-size: 13px;
          cursor: pointer;
          font-weight: 600;
        }
        [data-tp-root] .tpw-chip.is-active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-on);
        }
        [data-tp-root] .tpw-btn {
          width: 100%;
          border-radius: 6px;
          padding: 14px;
          border: none;
          background: var(--accent);
          color: var(--accent-on);
          cursor: pointer;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
          margin-top: 20px;
        }
        [data-tp-root] .tpw-metric {
          padding: 16px;
          border-radius: 12px;
          background: rgba(244, 241, 234, 0.04);
          margin-top: 12px;
        }
        [data-tp-root] .tpw-metric-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b655b;
        }
        [data-tp-root] .tpw-metric-value {
          font-family: var(--font-mono);
          font-size: 30px;
          font-weight: 500;
          color: #f4f1ea;
          margin-top: 6px;
        }
        [data-tp-root] .tpw-bottom-note {
          text-align: center;
          margin: 40px 0 0;
          font-size: 14px;
          color: #6b655b;
          line-height: 1.6;
        }
        [data-tp-root] .tpw-sep {
          height: 1px;
          background: rgba(244, 241, 234, 0.08);
          margin: 16px 0;
        }
        [data-tp-root] .tpw-presets {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        [data-tp-root] .tpw-check {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #9a938a;
          margin-top: 10px;
        }
        [data-tp-root] .tpw-check input {
          accent-color: var(--accent);
        }
        [data-tp-root] .tpw-help {
          margin-top: 12px;
          font-size: 13px;
          color: #6b655b;
          line-height: 1.5;
        }
        [data-tp-root] .tpw-actions {
          display: block;
        }

        @media (max-width: 1100px) {
          [data-tp-root] .tpw-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 760px) {
          [data-tp-root] .tpw-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
