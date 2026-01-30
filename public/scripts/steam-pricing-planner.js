(function () {
  const mountId = "tp-steam-pricing-tool";
  let SHOW_ALL_COUNTRIES = false;

  const TOP_COUNTRIES_ORDERED = [
    "United States",
    "Germany",
    "France",
    "China",
    "Russia",
    "United Kingdom",
    "Canada",
    "Japan",
    "South Korea",
    "Australia",
    "Italy",
    "Spain",
    "Netherlands",
    "Poland",
    "Turkey",
    "Brazil",
    "Mexico",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Switzerland",
    "Austria",
    "Belgium",
    "India",
  ];
  const TOP_COUNTRIES = new Set(TOP_COUNTRIES_ORDERED);

  const STEAM_DISCOUNTED_USD_GROUPS = {
    USD_CIS: new Set(["AM", "AZ", "BY", "GE", "KG", "MD", "TJ", "TM", "UZ"]),
    USD_LATAM: new Set([
      "BZ",
      "SV",
      "GT",
      "HN",
      "NI",
      "PA",
      "AR",
      "BO",
      "EC",
      "GY",
      "PY",
      "SR",
      "VE",
    ]),
    USD_MENA: new Set([
      "BH",
      "EG",
      "IQ",
      "JO",
      "LB",
      "OM",
      "PS",
      "TR",
      "YE",
      "DZ",
      "LY",
      "MA",
      "TN",
      "SD",
    ]),
    USD_SASIA: new Set(["BD", "BT", "NP", "PK", "LK"]),
  };

  const STEAM_SUPPORTED_CURRENCIES = new Set([
    "AED",
    "AUD",
    "BRL",
    "CAD",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "EUR",
    "GBP",
    "HKD",
    "ILS",
    "IDR",
    "INR",
    "JPY",
    "KRW",
    "KWD",
    "KZT",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PEN",
    "PHP",
    "PLN",
    "QAR",
    "RUB",
    "SAR",
    "SGD",
    "THB",
    "TWD",
    "UAH",
    "USD",
    "UYU",
    "VND",
    "ZAR",
    "USD_CIS",
    "USD_LATAM",
    "USD_MENA",
    "USD_SASIA",
  ]);

  const EUROPE_COUNTRIES = new Set([
    "AL",
    "AD",
    "AT",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "HR",
    "HU",
    "IE",
    "IS",
    "IT",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SK",
    "SM",
    "TR",
    "UA",
    "VA",
    "XK",
  ]);

  const CURRENCY_ROUNDING_UNITS = { JPY: 1, KRW: 1000, VND: 50000, IDR: 100 };

  const PPP_TIERS = [
    { id: "A", label: "High income", factor: 1.0 },
    { id: "B", label: "Upper middle", factor: 0.85 },
    { id: "C", label: "Middle", factor: 0.7 },
    { id: "D", label: "Price sensitive", factor: 0.55 },
  ];

  const PPP_COUNTRY_TIER = new Map([
    ["United States", "A"],
    ["Canada", "A"],
    ["United Kingdom", "A"],
    ["Germany", "A"],
    ["France", "A"],
    ["Netherlands", "A"],
    ["Sweden", "A"],
    ["Norway", "A"],
    ["Denmark", "A"],
    ["Finland", "A"],
    ["Australia", "A"],
    ["New Zealand", "A"],
    ["Japan", "A"],
    ["South Korea", "A"],
    ["Switzerland", "A"],
    ["Austria", "A"],
    ["Belgium", "A"],
    ["Ireland", "A"],
    ["Singapore", "A"],
    ["Israel", "A"],
    ["Spain", "B"],
    ["Italy", "B"],
    ["Poland", "B"],
    ["Portugal", "B"],
    ["Czechia", "B"],
    ["Greece", "B"],
    ["Hungary", "B"],
    ["Saudi Arabia", "B"],
    ["United Arab Emirates", "B"],
    ["Qatar", "B"],
    ["Kuwait", "B"],
    ["Taiwan", "B"],
    ["Hong Kong", "B"],
    ["Brazil", "C"],
    ["Mexico", "C"],
    ["Turkey", "C"],
    ["China", "C"],
    ["Russia", "C"],
    ["Argentina", "C"],
    ["Chile", "C"],
    ["Colombia", "C"],
    ["Malaysia", "C"],
    ["Thailand", "C"],
    ["South Africa", "C"],
    ["Ukraine", "C"],
    ["Kazakhstan", "C"],
    ["Peru", "C"],
    ["Philippines", "C"],
    ["India", "D"],
    ["Indonesia", "D"],
    ["Vietnam", "D"],
    ["Pakistan", "D"],
    ["Bangladesh", "D"],
    ["Egypt", "D"],
    ["Morocco", "D"],
    ["Tunisia", "D"],
  ]);

  const GENRES = [
    { id: "coop", label: "Co-op Multiplayer Game", base: 9.99 },
    { id: "cozy", label: "Cozy and Farming Sim", base: 14.99 },
    { id: "roguelite", label: "Roguelite Action", base: 14.99 },
    { id: "rpg", label: "RPG (Role-Playing Game)", base: 19.99 },
    { id: "rts", label: "RTS (Real-Time Strategy)", base: 19.99 },
    { id: "strategy", label: "Strategy Game", base: 19.99 },
    { id: "survival", label: "Survival Game", base: 19.99 },
    { id: "shooter", label: "FPS Shooter", base: 19.99 },
    { id: "sim", label: "Simulation", base: 14.99 },
    { id: "horror", label: "Horror Game", base: 14.99 },
    { id: "puzzle", label: "Puzzle Game", base: 9.99 },
    { id: "vn", label: "Visual Novel", base: 9.99 },
    { id: "platformer", label: "Platformer", base: 14.99 },
    { id: "other", label: "Indie Game (Other)", base: 14.99 },
  ];

  const USD_TIERS = [
    4.99, 5.99, 6.99, 7.99, 8.99, 9.99, 11.99, 12.99, 13.99, 14.99, 15.99,
    16.99, 17.99, 18.99, 19.99, 21.99, 22.99, 23.99, 24.99, 25.99, 26.99,
    27.99, 28.99, 29.99, 31.99, 34.99, 39.99, 44.99, 49.99, 59.99, 69.99,
  ];

  let ALL_COUNTRIES = [];
  let FX = null;
  let FX_SOURCE = "";
  let FX_ERROR = "";

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }
  function formatNumber(n, decimals = 0) {
    if (!isFinite(n)) return "0";
    return Number(n).toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }
  function escapeHtml(s) {
    return String(s || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function closestUsdTier(value) {
    let best = USD_TIERS[0];
    let bestDiff = Math.abs(value - best);
    for (const t of USD_TIERS) {
      const d = Math.abs(value - t);
      if (d < bestDiff) {
        best = t;
        bestDiff = d;
      }
    }
    return best;
  }

  function inferredBaseUsdPrice(hours, genreId) {
    const g = GENRES.find((x) => x.id === genreId) || GENRES[1];
    const h = clamp(Number(hours || 0), 0, 999);
    let f = 1.0;
    if (h <= 3) f = 0.8;
    else if (h <= 8) f = 0.95;
    else if (h <= 15) f = 1.0;
    else if (h <= 30) f = 1.15;
    else f = 1.3;
    return closestUsdTier(g.base * f);
  }

  function validateUsdMinimums(usd) {
    return Math.max(Number(usd || 0), 0.99);
  }

  function inferSteamCurrencyForCountry(countryCode, nativeCurrency) {
    for (const [group, set] of Object.entries(STEAM_DISCOUNTED_USD_GROUPS))
      if (set.has(countryCode)) return group;
    if (nativeCurrency && STEAM_SUPPORTED_CURRENCIES.has(nativeCurrency))
      return nativeCurrency;
    if (EUROPE_COUNTRIES.has(countryCode)) return "EUR";
    return "USD";
  }

  function roundToStep(value, step) {
    if (!step || step <= 0) return value;
    return Math.round(value / step) * step;
  }

  function applyRounding(currency, localPrice) {
    const cur = currency.startsWith("USD_") ? "USD" : currency;
    const step = CURRENCY_ROUNDING_UNITS[cur];
    if (step) return roundToStep(localPrice, step);
    return Math.round(localPrice * 100) / 100;
  }

  function pppTierForCountryName(name) {
    const id = PPP_COUNTRY_TIER.get(name) || "B";
    return PPP_TIERS.find((t) => t.id === id) || PPP_TIERS[1];
  }

  function setStatus(msg, type) {
    const el = document.getElementById("tp-fx-hint");
    const box = document.getElementById("tp-error");
    if (el) el.textContent = msg || "";
    if (box) {
      if (type === "error") {
        box.style.display = "block";
        box.textContent = FX_ERROR || "Could not load FX rates.";
      } else {
        box.style.display = "none";
      }
    }
  }

  async function fetchJson(url) {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  }

  async function fetchFxRatesMulti(base = "USD") {
    try {
      const data = await fetchJson(
        `https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`,
      );
      if (data && data.result === "success")
        return { rates: data.rates, source: "open.er-api.com" };
    } catch {}
    throw new Error("FX source failed");
  }

  function estimateLocalPrice(usdPrice, targetCurrency, fxRates) {
    const cur = targetCurrency.startsWith("USD_") ? "USD" : targetCurrency;
    if (cur === "USD") return usdPrice;
    const fx = fxRates && fxRates[cur] ? fxRates[cur] : null;
    return fx === null ? null : usdPrice * fx;
  }

  function buildUI() {
    const root = document.getElementById(mountId);
    if (!root) return;

    root.innerHTML = `
      <div style="max-width: 1100px; margin: 100px auto 0 auto; padding-bottom: 96px; font-family: sans-serif;">
        <div style="text-align:center; padding: 20px 12px 40px 12px;">
          <h1 style="font-size: clamp(32px, 5vw, 48px); font-weight: 900; letter-spacing: -0.04em; line-height: 1.05; margin:0;">
            Steam Pricing Planner & Calculator
          </h1>
          <div style="margin-top: 18px; font-size: 18px; color: rgba(0,0,0,0.72); max-width: 860px; margin-left:auto; margin-right:auto;">
            Determine optimal game prices using FX rates and Purchasing Power Parity adjustments.
          </div>
          <div style="width: 80px; height: 4px; background: #E11D2E; border-radius: 999px; margin: 24px auto 0 auto;"></div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr; gap: 16px;">
          <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 22px; padding: 18px;">
            <div style="font-size: 18px; font-weight: 900;">Game Parameters</div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px;">
              <label>
                <div style="font-size: 13px; font-weight: 800; color: rgba(0,0,0,0.72);">Genre</div>
                <select id="tp-genre" style="width:100%; margin-top:6px; padding: 12px; border-radius: 12px; border: 1px solid #ddd;">
                  ${GENRES.map((g) => `<option value="${g.id}">${escapeHtml(g.label)}</option>`).join("")}
                </select>
              </label>
              <label>
                <div style="font-size: 13px; font-weight: 800; color: rgba(0,0,0,0.72);">Gameplay Length (Hours)</div>
                <input id="tp-hours" type="number" min="0" step="0.5" value="12" style="width:100%; margin-top:6px; padding: 12px; border-radius: 12px; border: 1px solid #ddd;" />
              </label>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px;">
              <label>
                <div style="font-size: 13px; font-weight: 800; color: rgba(0,0,0,0.72);">Base USD Price</div>
                <input id="tp-usd" type="number" min="0.99" step="0.01" placeholder="Auto-suggest" style="width:100%; margin-top:6px; padding: 12px; border-radius: 12px; border: 1px solid #ddd;" />
              </label>
              <label>
                <div style="font-size: 13px; font-weight: 800; color: rgba(0,0,0,0.72);">Sale Discount</div>
                <div style="display:flex; gap: 10px; align-items:center; margin-top:6px;">
                  <input id="tp-discount" type="range" min="0" max="90" step="5" value="20" style="flex:1;">
                  <div id="tp-discount-label" style="min-width: 40px; font-weight: 900;">20%</div>
                </div>
              </label>
            </div>
            <div style="margin-top: 20px; text-align:center;">
               <button id="tp-calc" style="width: 100%; max-width: 400px; padding: 14px; border-radius: 999px; border: none; background: #E11D2E; color: #fff; font-weight: 900; cursor: pointer;">Calculate Regional Prices</button>
            </div>
          </div>

          <div style="background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 22px; padding: 18px;">
            <div style="display:flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 18px; font-weight: 900;">Regional Recommendations</div>
                <div id="tp-fx-hint" style="font-size: 12px; color: #888;"></div>
            </div>
            <div id="tp-error" style="display:none; color: red; font-size: 12px; margin: 10px 0;"></div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px;">
                <div style="padding: 15px; background: #f9f9f9; border-radius: 15px;">
                    <div style="font-size: 11px; color: #666; font-weight: 900; text-transform: uppercase;">Anchor Price</div>
                    <div id="tp-usd-base" style="font-size: 28px; font-weight: 900;">$0.00</div>
                    <div id="tp-usd-explain" style="font-size: 12px; color: #888; margin-top: 5px;"></div>
                </div>
                <input id="tp-filter" type="text" placeholder="Search country..." style="padding: 12px; border-radius: 12px; border: 1px solid #eee; align-self: center;" />
            </div>

            <div style="margin-top: 15px; overflow-x: auto;">
              <table style="width:100%; border-collapse: collapse; font-size: 13px;">
                <thead>
                  <tr style="background: #f5f5f5; text-align:left;">
                    <th style="padding: 12px;">Country</th>
                    <th style="padding: 12px;">Currency</th>
                    <th style="padding: 12px;">Suggested Price</th>
                    <th style="padding: 12px;">Sale Price</th>
                  </tr>
                </thead>
                <tbody id="tp-rows"></tbody>
              </table>
            </div>
            <div style="text-align:center; padding-top: 15px;">
                <button id="tp-show-all" style="background:none; border:none; text-decoration: underline; cursor:pointer; color: #666; font-size: 13px;">Show all 40+ countries</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async function loadCountries() {
    const data = await fetchJson(
      "https://cdn.jsdelivr.net/npm/world-countries@5/countries.json",
    );
    const mapByName = new Map();
    for (const c of data) {
      if (!c || !c.cca2 || !c.name || !c.name.common) continue;
      mapByName.set(String(c.name.common), {
        code: String(c.cca2).toUpperCase(),
        name: String(c.name.common),
        currencies: c.currencies || {},
      });
    }
    const ordered = [];
    for (const name of TOP_COUNTRIES_ORDERED) {
      const hit = mapByName.get(String(name));
      if (hit) ordered.push(hit);
    }
    const rest = [];
    for (const v of mapByName.values()) {
      if (!TOP_COUNTRIES.has(v.name)) rest.push(v);
    }
    rest.sort((a, b) => a.name.localeCompare(b.name));
    ALL_COUNTRIES = ordered.concat(rest);
  }

  function pickNativeCurrencyCode(country) {
    const codes = country && country.currencies ? Object.keys(country.currencies) : [];
    return codes.length ? String(codes[0]).toUpperCase() : null;
  }

  function computeBaseUsd() {
    const genreId = document.getElementById("tp-genre")?.value || "cozy";
    const hours = Number(document.getElementById("tp-hours")?.value || 12);
    const override = document.getElementById("tp-usd")?.value
      ? Number(document.getElementById("tp-usd").value)
      : null;
    let usd = override && isFinite(override) ? override : inferredBaseUsdPrice(hours, genreId);
    const reason = override ? "Manual setting." : "Based on genre and length.";
    return { usd: validateUsdMinimums(usd), reason };
  }

  function renderRows({ usdBase, filterText }) {
    const tbody = document.getElementById("tp-rows");
    const showAllBtn = document.getElementById("tp-show-all");
    if (!tbody) return;

    const f = (filterText || "").trim().toLowerCase();
    const d = (document.getElementById("tp-discount")?.value || 20) / 100;

    const source = SHOW_ALL_COUNTRIES
      ? ALL_COUNTRIES
      : ALL_COUNTRIES.filter((c) => TOP_COUNTRIES.has(c.name));
    if (showAllBtn) showAllBtn.style.display = SHOW_ALL_COUNTRIES ? "none" : "inline-block";

    const rows = [];
    for (const c of source) {
      if (f && !c.name.toLowerCase().includes(f)) continue;
      const steamCur = inferSteamCurrencyForCountry(c.code, pickNativeCurrencyCode(c));
      const tier = pppTierForCountryName(c.name);
      const suggestedUsd = usdBase * tier.factor;
      let s = "...",
        ds = "...";
      if (FX) {
        const rawLocal = estimateLocalPrice(suggestedUsd, steamCur, FX);
        if (rawLocal !== null) {
          const rounded = applyRounding(steamCur, rawLocal);
          s = formatNumber(rounded, 2);
          ds = formatNumber(applyRounding(steamCur, rounded * (1 - d)), 2);
        }
      }
      rows.push(
        `<tr style="border-top: 1px solid #eee;"><td style="padding:10px 12px; font-weight:700;">${escapeHtml(c.name)}</td><td style="padding:10px 12px;">${escapeHtml(steamCur)}</td><td style="padding:10px 12px; font-weight:900;">${s}</td><td style="padding:10px 12px; color:#E11D2E; font-weight:700;">${ds}</td></tr>`,
      );
    }

    tbody.innerHTML =
      rows.join("") ||
      '<tr><td colspan="4" style="padding:20px; text-align:center;">No countries found.</td></tr>';
  }

  async function calculate() {
    const { usd, reason } = computeBaseUsd();
    if (document.getElementById("tp-usd-base")) {
      document.getElementById("tp-usd-base").textContent = `$${formatNumber(usd, 2)}`;
      document.getElementById("tp-usd-explain").textContent = reason;
    }

    try {
      setStatus("Syncing FX...", "info");
      const fx = await fetchFxRatesMulti("USD");
      FX = fx.rates;
      FX_SOURCE = fx.source;
      setStatus(`Source: ${FX_SOURCE}`, "info");
      renderRows({
        usdBase: usd,
        filterText: document.getElementById("tp-filter")?.value,
      });
    } catch {
      setStatus("FX Offline", "error");
      renderRows({
        usdBase: usd,
        filterText: document.getElementById("tp-filter")?.value,
      });
    }
  }

  async function init() {
    buildUI();
    try {
      await loadCountries();
      document.getElementById("tp-calc")?.addEventListener("click", calculate);
      document
        .getElementById("tp-show-all")
        ?.addEventListener("click", () => {
          SHOW_ALL_COUNTRIES = true;
          calculate();
        });
      document
        .getElementById("tp-filter")
        ?.addEventListener("input", (e) => {
          renderRows({ usdBase: computeBaseUsd().usd, filterText: e.target.value });
        });
      document
        .getElementById("tp-discount")
        ?.addEventListener("input", (e) => {
          document.getElementById("tp-discount-label").textContent =
            e.target.value + "%";
          renderRows({
            usdBase: computeBaseUsd().usd,
            filterText: document.getElementById("tp-filter")?.value,
          });
        });
      calculate();
    } catch (e) {
      console.error(e);
    }
  }

  init();
})();
