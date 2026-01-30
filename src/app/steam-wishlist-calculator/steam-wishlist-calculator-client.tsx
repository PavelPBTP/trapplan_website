"use client";

import Script from "next/script";
import { useMemo, useState } from "react";

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

function fmtInt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export default function SteamWishlistCalculatorClient() {
  const presets = useMemo(
    () => ({
      conservative: { wlToSalesPct: 5, visitToWlPct: 8 },
      base: { wlToSalesPct: 10, visitToWlPct: 10 },
      optimistic: { wlToSalesPct: 20, visitToWlPct: 12 },
    }),
    [],
  );

  const [activePreset, setActivePreset] = useState<PresetKey>("conservative");
  const [inputs, setInputs] = useState<Inputs>({
    targetSales: 2000,
    price: 19.99,
    steamCutPct: 30,
    adjustPct: 10,
    wlToSalesPct: presets.conservative.wlToSalesPct,
    visitToWlPct: presets.conservative.visitToWlPct,
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
            name: "Steam Wishlist Calculator",
            url: "https://www.trapplan.com/steam-wishlist-calculator",
            description:
              "Tool for indie developers to estimate wishlists, traffic and budget for Steam sales targets.",
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
                name: "Home",
                item: "https://www.trapplan.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Free Tools",
                item: "https://www.trapplan.com/steam-wishlist-calculator",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Steam Wishlist Calculator",
                item: "https://www.trapplan.com/steam-wishlist-calculator",
              },
            ],
          }),
        }}
      />

      <div className="tpw" data-tp-root>
        <div className="sr-only">
          <h2>Steam Wishlist and Marketing Forecast Tool</h2>
          <p>
            Estimate wishlists, Steam page visits, and an indicative paid budget to reach your week 1 sales goal. This calculator helps indie teams plan realistic
            launch targets.
          </p>
        </div>

        <div className="tpw-head">
          <h1 className="tpw-title">Steam Wishlist Calculator</h1>
          <div className="tpw-sub">Estimate required wishlists, traffic and budget to hit your week 1 sales target</div>
          <div className="tpw-accent" aria-hidden="true" />
        </div>

        <div className="tpw-grid">
          <section className="tpw-card">
            <div className="tpw-card-title">Goal</div>

            <label className="tpw-label">
              Target sales (week 1)
              <input
                className="tpw-input"
                type="number"
                value={inputs.targetSales}
                onChange={(e) => setInputs((p) => ({ ...p, targetSales: Number(e.target.value) }))}
              />
            </label>

            <label className="tpw-label">
              Price
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
                Steam cut, %
                <input
                  className="tpw-input"
                  type="number"
                  value={inputs.steamCutPct}
                  onChange={(e) => setInputs((p) => ({ ...p, steamCutPct: Number(e.target.value) }))}
                />
              </label>
              <label className="tpw-label">
                Adjustments, %
                <input
                  className="tpw-input"
                  type="number"
                  value={inputs.adjustPct}
                  onChange={(e) => setInputs((p) => ({ ...p, adjustPct: Number(e.target.value) }))}
                />
              </label>
            </div>

            <div className="tpw-help">Adjustments include refunds, regional pricing, and taxes.</div>
          </section>

          <section className="tpw-card">
            <div className="tpw-card-title">Funnel</div>

            <div className="tpw-presets">
              <button
                className={`tpw-chip ${activePreset === "conservative" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("conservative");
                  setInputs((p) => ({ ...p, ...presets.conservative }));
                }}
              >
                Conservative
              </button>
              <button
                className={`tpw-chip ${activePreset === "base" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("base");
                  setInputs((p) => ({ ...p, ...presets.base }));
                }}
              >
                Base
              </button>
              <button
                className={`tpw-chip ${activePreset === "optimistic" ? "is-active" : ""}`}
                type="button"
                onClick={() => {
                  setActivePreset("optimistic");
                  setInputs((p) => ({ ...p, ...presets.optimistic }));
                }}
              >
                Optimistic
              </button>
            </div>

            <label className="tpw-label">
              Wishlist to sales (week 1), %
              <input
                className="tpw-input"
                type="number"
                value={inputs.wlToSalesPct}
                onChange={(e) => setInputs((p) => ({ ...p, wlToSalesPct: Number(e.target.value) }))}
              />
            </label>

            <label className="tpw-label">
              Visit to wishlist, %
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
              <span>Estimate paid budget</span>
            </label>

            {inputs.paidToggle ? (
              <div>
                <label className="tpw-label">
                  CPC
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
                Calculate
              </button>
            </div>
          </section>

          <section className="tpw-card">
            <div className="tpw-card-title">Results</div>

            <div className="tpw-metric">
              <div className="tpw-metric-label">Required wishlists at launch</div>
              <div className="tpw-metric-value">{fmtInt(requiredWishlists)}</div>
            </div>
            <div className="tpw-metric">
              <div className="tpw-metric-label">Required Steam page visits</div>
              <div className="tpw-metric-value">{fmtInt(requiredVisits)}</div>
            </div>
            <div className="tpw-metric">
              <div className="tpw-metric-label">Estimated week 1 net revenue</div>
              <div className="tpw-metric-value">{fmtInt(netRev)}</div>
            </div>

            {inputs.paidToggle ? (
              <div className="tpw-metric">
                <div className="tpw-metric-label">Estimated paid budget</div>
                <div className="tpw-metric-value">{fmtInt(budget)}</div>
              </div>
            ) : null}
          </section>
        </div>

        <div className="tpw-bottom-note">Numbers don&apos;t launch games. Execution does.</div>
      </div>

      <style jsx global>{`
        /* Restored embed styles, scoped to the calculator root */
        [data-tp-root] {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 1120px;
          margin: 120px auto 0;
          padding: 0 16px;
        }
        [data-tp-root] * {
          box-sizing: border-box;
        }
        [data-tp-root] .tpw-head {
          text-align: center;
          margin-bottom: 60px;
        }
        [data-tp-root] .tpw-title {
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.03;
          margin: 0;
        }
        [data-tp-root] .tpw-sub {
          margin: 24px auto 0;
          max-width: 680px;
          font-size: 18px;
          opacity: 0.75;
          line-height: 1.45;
        }
        [data-tp-root] .tpw-accent {
          width: 64px;
          height: 6px;
          border-radius: 999px;
          margin: 32px auto 0;
          background: #e31d3b;
        }
        [data-tp-root] .tpw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px;
        }
        [data-tp-root] .tpw-card {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 22px;
          padding: 24px;
          background: #fff;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
        }
        [data-tp-root] .tpw-card-title {
          font-size: 18px;
          font-weight: 900;
          margin-bottom: 10px;
        }
        [data-tp-root] .tpw-label {
          display: block;
          font-size: 13px;
          font-weight: 800;
          opacity: 0.82;
          margin: 12px 0 8px;
        }
        [data-tp-root] .tpw-input {
          width: 100%;
          padding: 12px;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.14);
          font-size: 15px;
        }
        [data-tp-root] .tpw-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        [data-tp-root] .tpw-chip {
          border: 1px solid rgba(0, 0, 0, 0.14);
          background: #fff;
          border-radius: 999px;
          padding: 10px 12px;
          font-size: 13px;
          cursor: pointer;
          font-weight: 800;
        }
        [data-tp-root] .tpw-chip.is-active {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.22);
        }
        [data-tp-root] .tpw-btn {
          width: 100%;
          border-radius: 999px;
          padding: 14px;
          border: none;
          background: #e31d3b;
          color: #fff;
          cursor: pointer;
          font-weight: 900;
          margin-top: 20px;
        }
        [data-tp-root] .tpw-metric {
          padding: 16px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.03);
          margin-top: 12px;
        }
        [data-tp-root] .tpw-metric-value {
          font-size: 30px;
          font-weight: 950;
          margin-top: 6px;
        }
        [data-tp-root] .tpw-bottom-note {
          text-align: center;
          margin: 40px 0;
          font-size: 16px;
          opacity: 0.65;
          font-weight: 800;
        }
        [data-tp-root] .tpw-sep {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
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
          font-weight: 700;
          margin-top: 10px;
        }
        [data-tp-root] .tpw-help {
          margin-top: 12px;
          font-size: 13px;
          opacity: 0.7;
          line-height: 1.45;
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
