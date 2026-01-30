"use client";

import Script from "next/script";

export default function SteamPricingPlannerClient() {
  return (
    <>
      <Script
        id="steam-pricing-planner-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Steam Regional Pricing & PPP Calculator",
            url: "https://www.trapplan.com/steam-pricing-planner",
            description:
              "Professional tool for game developers to calculate Steam regional prices using Purchasing Power Parity (PPP) and real-time FX rates.",
            applicationCategory: "DeveloperApplication",
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
        id="steam-pricing-planner-breadcrumbs"
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
                item: "https://www.trapplan.com/steam-pricing-planner",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Steam Pricing Planner",
                item: "https://www.trapplan.com/steam-pricing-planner",
              },
            ],
          }),
        }}
      />

      <div className="sr-only">
        <h1>Steam Regional Pricing Planner</h1>
        <p>
          Calculate recommended regional prices for your Steam game using Purchasing Power Parity adjustments and live FX rates.
        </p>
      </div>

      <div id="tp-steam-pricing-tool" suppressHydrationWarning style={{ marginTop: 100 }}>
        <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>Steam Regional Pricing Tool</h2>
        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            color: "#666",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          Calculate recommended prices for your Steam game across all global regions including{" "}
          <strong>China, Russia, Brazil, Turkey (USD), and CIS (USD)</strong>. Our calculator uses <strong>Purchasing Power Parity (PPP)</strong> and live
          exchange rates (FX).
        </p>
        <p style={{ textAlign: "center" }}>
          <em>Loading interactive pricing tool...</em>
        </p>
      </div>

      <Script
        id="steam-pricing-planner-embed"
        src="/scripts/steam-pricing-planner.js"
        strategy="afterInteractive"
      />
    </>
  );
}
