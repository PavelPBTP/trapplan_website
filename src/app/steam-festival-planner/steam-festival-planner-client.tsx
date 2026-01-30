"use client";

import Image from "next/image";
import Script from "next/script";

export default function SteamFestivalPlannerClient() {
  return (
    <>
      <Script
        id="steam-festival-planner-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Steam Festival Planner",
            url: "https://www.trapplan.com/steam-festival-planner",
            description:
              "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
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
                name: "Home",
                item: "https://www.trapplan.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Free Tools",
                item: "https://www.trapplan.com/steam-festival-planner",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Steam Festival Planner",
                item: "https://www.trapplan.com/steam-festival-planner",
              },
            ],
          }),
        }}
      />

      <div className="sr-only">
        <h1>Steam Festival Planner</h1>
        <p>
          Browse Steam festivals and sales. Filter events by type and genre, and enter an AppID to highlight events that fit your game.
        </p>
      </div>

      <div id="tp-planner-app" suppressHydrationWarning>
        <div className="tp-steam-analyzer">
          <div className="tp-analyzer-content">
            <h4 className="tp-analyzer-title">Smart Match: Events for your game</h4>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
              Enter a Steam AppID and the planner will highlight festivals that match your game genres.
            </p>
            <div className="tp-input-group">
              <input type="text" id="tp-steam-id" placeholder="AppID (example: 1086940)" />
              <button id="tp-analyze-btn">Analyze</button>
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
                <div id="tp-game-name">Game name</div>
                <div id="tp-game-genres">Genres</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-toolbar">
          <div className="tp-search-bar">
            <input type="text" id="tp-search" placeholder="Search events" />
          </div>
          <div className="tp-filter-chips" id="tp-filters">
            <button className="chip active" data-filter="all">All events</button>
            <button className="chip" data-filter="Free">Free</button>
            <button className="chip" data-filter="Major">Major</button>
            <button className="chip" data-filter="Themed">Themed</button>
            <button className="chip" data-filter="Indie">Indie showcases</button>
          </div>
        </div>

        <div id="tp-grid" className="tp-grid">
          <div className="loading">Loading events...</div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --tp-pink: #ff1e4d;
          --tp-border: #eeeeee;
        }
        #tp-planner-app {
          font-family: "Inter", sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 20px 60px 20px;
          color: #111;
        }

        .tp-steam-analyzer {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid var(--tp-border);
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .tp-analyzer-title {
          margin: 0;
          font-size: 22px;
          font-weight: 800;
        }
        .tp-input-group {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        #tp-steam-id {
          flex-grow: 1;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #ddd;
          outline: none;
        }
        #tp-analyze-btn {
          background: #111;
          color: #fff;
          border: none;
          padding: 0 30px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }
        #tp-analyze-btn:hover {
          background: var(--tp-pink);
        }

        .tp-toolbar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        #tp-search {
          padding: 16px 24px;
          border-radius: 14px;
          border: 1px solid #eee;
          background: #f9f9f9;
          width: 100%;
          max-width: 400px;
          outline: none;
        }
        .tp-filter-chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .chip {
          background: #f1f1f1;
          border: none;
          padding: 10px 22px;
          border-radius: 100px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .chip.active {
          background: var(--tp-pink);
          color: #fff;
        }

        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }
        .loading {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px;
          color: #888;
        }

        .tp-card {
          background: white;
          border: 1px solid var(--tp-border);
          border-radius: 28px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.4s ease;
          min-height: 320px;
          position: relative;
        }
        .tp-card.recommended {
          border: 2px solid var(--tp-pink);
          box-shadow: 0 10px 30px rgba(255, 30, 77, 0.1);
        }
        .tp-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .tp-price-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          background: #f0f0f0;
          color: #555;
        }
        .tp-price-badge.free {
          background: #e6fffa;
          color: #008673;
        }
        .tp-match-label {
          position: absolute;
          top: 55px;
          right: 20px;
          background: var(--tp-pink);
          color: #fff;
          font-size: 9px;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .tp-cat {
          color: var(--tp-pink);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .tp-name {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }
        .tp-status {
          background: #f8f8f9;
          padding: 18px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .tp-btn {
          background: var(--tp-pink);
          color: white;
          text-align: center;
          padding: 16px;
          border-radius: 100px;
          font-weight: 800;
          text-decoration: none;
          display: block;
        }

        @media (max-width: 480px) {
          #tp-planner-app {
            padding-top: 100px;
          }
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
