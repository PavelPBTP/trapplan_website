(() => {
  const CONFIG = {
    apiYouTube: "https://trapplan-back.vercel.app/api/creators",
    apiTwitch: "https://trapplan-back.vercel.app/api/twitch",
    minAvgViews: 1000,
    twitchMinCCV: 150,
    maxYouTube: 50,
  };

  const GENRES = [
    "Action",
    "RPG",
    "Strategy",
    "Simulation",
    "Survival",
    "Horror",
    "Cozy",
    "Puzzle",
    "Management",
    "Other",
  ];
  const LANGS = ["EN", "Any"];

  const root = document.getElementById("tp-influencer-planner");
  if (!root) return;

  const state = {
    loading: false,
    activeTab: "youtube",
    ytCreators: [],
    twCreators: [],
    form: {
      game_name: "",
      similar_games: "",
      genre: "Action",
      price_usd: "",
      demo: "yes",
      hours: "",
      language: "EN",
    },
  };

  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function parseSafeNum(val) {
    if (!val) return 0;
    return (
      parseFloat(String(val).replace(",", ".").replace(/[^\d.]/g, "")) || 0
    );
  }

  function fmtViews(n) {
    const v = Number(n);
    if (!v) return "N/A";
    if (v >= 1000000) return Math.round(v / 100000) / 10 + "M views";
    if (v >= 1000) return Math.round(v / 100) / 10 + "K views";
    return v + " views";
  }

  function fmtCCV(n) {
    const v = Number(n);
    if (!v) return "N/A";
    return v >= 1000 ? Math.round(v / 100) / 10 + "K CCV" : v + " CCV";
  }

  function isValid() {
    return state.form.game_name.trim().length >= 2 && parseSafeNum(state.form.hours) > 0;
  }

  function setError(msg) {
    const el = root.querySelector("#tp_error");
    if (!el) return;
    el.textContent = msg || "";
    el.style.display = msg ? "block" : "none";
  }

  function setButton() {
    const btn = root.querySelector("#tp_submit");
    if (!btn) return;
    btn.disabled = state.loading || !isValid();
    btn.textContent = state.loading ? "Searching..." : "Find creators";
  }

  function setTabs() {
    root.querySelector("#tp_yt_count").textContent = state.ytCreators.length;
    root.querySelector("#tp_tw_count").textContent = state.twCreators.length;
    root.querySelector("#tp_tab_yt").dataset.active =
      state.activeTab === "youtube";
    root.querySelector("#tp_tab_tw").dataset.active =
      state.activeTab === "twitch";
  }

  function renderResults() {
    const wrap = root.querySelector("#tp_results");
    const list =
      state.activeTab === "youtube" ? state.ytCreators : state.twCreators;

    if (!list.length) {
      wrap.innerHTML =
        '<div class="tp-results"><div class="tp-error" style="display:block">No influencers found. Try adding similar games.</div></div>';
      return;
    }

    const cards = list
      .map(
        (c) => `
      <div class="tp-creator">
        <div class="tp-row">
          <div class="tp-name" title="${esc(c.name)}">${esc(
          c.name || "Creator",
        )}</div>
          <div class="tp-badge">${
            state.activeTab === "youtube"
              ? esc(c.fit || "High") + " fit"
              : esc(fmtCCV(c.ccv))
          }</div>
        </div>
        <div class="tp-meta">
          ${[
            state.activeTab === "youtube" ? "YouTube" : "Twitch",
            c.size,
            c.language,
          ]
            .filter(Boolean)
            .map((x) => `<span class="tp-chip">${esc(x)}</span>`)
            .join("")}
        </div>
        <div class="tp-linkRow">
          <div class="tp-metric">${
            state.activeTab === "youtube" ? fmtViews(c.avg_views) : "Active"
          }</div>
          ${
            c.url
              ? `<a class="tp-link" href="${esc(
                  c.url,
                )}" target="_blank" rel="noopener noreferrer">Channel →</a>`
              : ""
          }
        </div>
      </div>
    `,
      )
      .join("");

    wrap.innerHTML = `<div class="tp-results"><div class="tp-gridCreators">${cards}</div></div>`;
  }

  async function submit() {
    if (state.loading || !isValid()) return;
    state.loading = true;
    setButton();
    setError("");

    const searchContext = state.form.similar_games
      ? `${state.form.similar_games}`
      : state.form.game_name;

    const payloads = {
      youtube: {
        game_name: state.form.game_name,
        genre: state.form.genre,
        search_query: `${searchContext} gameplay let's play`,
        exclude: "official trailer news ign gamespot teaser",
        language: state.form.language,
        max: CONFIG.maxYouTube,
        min_views: CONFIG.minAvgViews,
      },
      twitch: {
        game_name: searchContext,
        genre: state.form.genre,
        language: state.form.language,
        min_ccv: CONFIG.twitchMinCCV,
      },
    };

    try {
      const [yt, tw] = await Promise.all([
        fetch(CONFIG.apiYouTube, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloads.youtube),
        })
          .then((r) => r.json())
          .catch(() => ({ creators: [] })),
        fetch(CONFIG.apiTwitch, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloads.twitch),
        })
          .then((r) => r.json())
          .catch(() => ({ creators: [] })),
      ]);

      state.ytCreators = yt.creators || [];
      state.twCreators = tw.creators || [];
      renderResults();
      setTabs();
    } catch {
      setError("Search failed. Check your connection.");
    } finally {
      state.loading = false;
      setButton();
    }
  }

  function mount() {
    root.innerHTML = `
      <div class="tp-card">
        <h2>Steam Influencer Planner</h2>
        <div class="tp-sub">Find real let's players and streamers. Add similar games for better accuracy.</div>

        <div class="tp-form">
          <div class="tp-grid">
            <div class="tp-field">
              <div class="tp-label">Your Game Name</div>
              <input id="tp_game_name" class="tp-input" type="text" placeholder="e.g. My Indie Game" autocomplete="off">
            </div>
            <div class="tp-field">
              <div class="tp-label">Similar Games (Reference)</div>
              <input id="tp_similar" class="tp-input" type="text" placeholder="e.g. Hades, Dead Cells" title="Helps find creators in your niche">
            </div>
            <div class="tp-field">
              <div class="tp-label">Genre</div>
              <select id="tp_genre" class="tp-input">
                ${GENRES.map((g) => `<option value="${esc(g)}">${esc(g)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="tp-grid">
            <div class="tp-field">
              <div class="tp-label">Price USD</div>
              <input id="tp_price" class="tp-input" type="text" inputmode="decimal" placeholder="19.99">
            </div>
            <div class="tp-field">
              <div class="tp-label">Hours of content</div>
              <input id="tp_hours" class="tp-input" type="text" inputmode="numeric" placeholder="25">
            </div>
            <div class="tp-field">
              <div class="tp-label">Language</div>
              <select id="tp_lang" class="tp-input">
                ${LANGS.map((l) => `<option value="${esc(l)}">${esc(l)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div id="tp_error" class="tp-error"></div>

          <div class="tp-cta">
            <div class="tp-hint">Targeting active gaming channels only. Non-gaming & news channels are filtered out.</div>
            <button id="tp_submit" class="tp-btn" type="button" disabled>Find creators</button>
          </div>

          <div class="tp-tabs">
            <button id="tp_tab_yt" class="tp-tab" type="button" data-active="true">
              YouTube <span id="tp_yt_count" class="tp-pill">0</span>
            </button>
            <button id="tp_tab_tw" class="tp-tab" type="button" data-active="false">
              Twitch <span id="tp_tw_count" class="tp-pill">0</span>
            </button>
          </div>

          <div id="tp_results"></div>
        </div>
      </div>
    `;

    const inputs = {
      game_name: root.querySelector("#tp_game_name"),
      similar_games: root.querySelector("#tp_similar"),
      genre: root.querySelector("#tp_genre"),
      price_usd: root.querySelector("#tp_price"),
      hours: root.querySelector("#tp_hours"),
      language: root.querySelector("#tp_lang"),
    };

    const onChange = () => {
      Object.keys(inputs).forEach((key) => {
        state.form[key] = inputs[key].value;
      });
      setButton();
    };

    Object.values(inputs).forEach((el) => el.addEventListener("input", onChange));
    root.querySelector("#tp_tab_yt").onclick = () => {
      state.activeTab = "youtube";
      setTabs();
      renderResults();
    };
    root.querySelector("#tp_tab_tw").onclick = () => {
      state.activeTab = "twitch";
      setTabs();
      renderResults();
    };
    root.querySelector("#tp_submit").onclick = submit;

    setButton();
  }

  mount();
})();
