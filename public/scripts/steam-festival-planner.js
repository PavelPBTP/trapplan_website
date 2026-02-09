(function () {
  const grid = document.getElementById("tp-grid");
  const API_EVENTS = "/api/steam-festival-events";
  const API_APPDETAILS = "/api/steam-appdetails";

  let db = [];
  let userGenres = [];

  function i18n(key, fallback) {
    try {
      const dict =
        window && window.__TP_I18N && window.__TP_I18N.steam_festival_planner
          ? window.__TP_I18N.steam_festival_planner
          : null;
      if (dict && typeof dict[key] === "string") return dict[key];
    } catch {}
    return fallback;
  }

  function esc(s) {
    return String(s || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  async function loadData() {
    try {
      const response = await fetch(API_EVENTS, { method: "GET" });
      const json = await response.json();
      db = json.items || [];

      if (!db.length) {
        grid.innerHTML =
          `<div class="loading">${esc(
            i18n(
              "empty_no_events_loaded",
              "No events loaded. Please try again later.",
            ),
          )}</div>`;
        return;
      }

      render(db);
    } catch {
      grid.innerHTML =
        `<div class="loading">${esc(
          i18n(
            "empty_failed_load_db",
            "Failed to load the events database.",
          ),
        )}</div>`;
    }
  }

  function render(items) {
    if (items.length === 0) {
      grid.innerHTML = `<div class="loading">${esc(
        i18n("empty_no_events_found", "No events found"),
      )}</div>`;
      return;
    }

    grid.innerHTML = items
      .map((f) => {
        const deadline = f.deadline ? new Date(f.deadline) : null;
        const days = deadline
          ? Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24))
          : null;
        const match =
          (f.genres || []).some((g) => userGenres.includes(g)) ||
          (f.genres || []).includes("All");
        const isClosed = days !== null ? days < 0 : false;
        const isFree = String(f.price || "").toLowerCase() === "free";

        const statusText = isClosed
          ? i18n("status_closed", "Closed")
          : days === null
            ? i18n("status_open", "Open")
            : i18n(
                "status_closes_in_days",
                `Closes in ${days} days`,
              ).replace("{days}", String(days));

        const applyText = isClosed
          ? i18n("cta_closed", "Closed")
          : i18n("cta_apply", "Apply for Festival");

        return `
        <div class="tp-card ${match && userGenres.length ? "recommended" : ""}" style="opacity: ${
          isClosed ? 0.6 : 1
        }">
          <div class="tp-price-badge ${isFree ? "free" : ""}">${esc(
            f.price || i18n("fallback_free", "Free"),
          )}</div>
          ${match && userGenres.length ? `<div class="tp-match-label">${esc(i18n("badge_match", "MATCH"))}</div>` : ""}
          <div>
            <div class="tp-cat">${esc(
              f.type || i18n("fallback_event", "Event"),
            )} / ${esc(
              (f.genres || []).join(", "),
            )}</div>
            <h3 class="tp-name">${esc(f.name || "Event")}</h3>
            <div class="tp-status">
              <span style="color:#888; font-size:12px; display:block">${esc(i18n("field_status_label", "Status"))}</span>
              <b>${esc(statusText)}</b>
            </div>
          </div>
          <a href="${esc(f.link || "#")}" target="_blank" rel="noopener noreferrer" class="tp-btn" style="${
            isClosed ? "background:#ccc; pointer-events:none" : ""
          }">
            ${esc(applyText)}
          </a>
        </div>
      `;
      })
      .join("");
  }

  function update() {
    const s = (document.getElementById("tp-search")?.value || "")
      .toLowerCase()
      .trim();
    const active = document.querySelector(".chip.active");
    const filter = active ? active.dataset.filter : "all";

    const filtered = db.filter((f) => {
      const name = String(f.name || "").toLowerCase();
      const genres = Array.isArray(f.genres) ? f.genres : [];
      const mS =
        name.includes(s) ||
        genres.some((g) => String(g || "").toLowerCase().includes(s));

      const price = String(f.price || "").toLowerCase();
      const type = String(f.type || "");
      const mF =
        filter === "all" ||
        type === filter ||
        (filter === "Free" && price === "free") ||
        genres.includes(filter);

      return mS && mF;
    });

    render(filtered);
  }

  document.getElementById("tp-search")?.addEventListener("input", update);

  document.querySelectorAll(".chip").forEach((b) =>
    b.addEventListener("click", (e) => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      e.target.classList.add("active");
      update();
    }),
  );

  document
    .getElementById("tp-analyze-btn")
    ?.addEventListener("click", async () => {
      const appId = document.getElementById("tp-steam-id")?.value?.trim();
      if (!appId) return;

      const btn = document.getElementById("tp-analyze-btn");
      btn.innerText = i18n("analyzing", "Analyzing...");

      try {
        const response = await fetch(
          `${API_APPDETAILS}?appid=${encodeURIComponent(appId)}`,
        );
        const json = await response.json();
        const gameData = json.data;

        if (gameData) {
          document.getElementById("tp-game-preview").style.display = "flex";
          document.getElementById("tp-game-name").innerText = gameData.name;
          document.getElementById("tp-game-icon").src = gameData.header_image;
          userGenres = (gameData.genres || []).map((g) => g.description);
          document.getElementById("tp-game-genres").innerText =
            i18n("genres_prefix", "Genres: ") + userGenres.join(", ");
          update();
        } else {
          alert(i18n("alert_game_not_found", "Game not found."));
        }
      } catch {
        alert(i18n("alert_game_not_found", "Game not found."));
      }

      btn.innerText = i18n("analyze", "Analyze");
    });

  loadData();
})();
