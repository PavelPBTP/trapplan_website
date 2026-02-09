"use client";

import Script from "next/script";

import { t } from "@/lib/copy";

type Locale = Parameters<typeof t>[0];

export default function SteamPricingPlannerClient({ locale }: { locale: Locale }) {
  return (
    <>
      <Script
        id="tp-i18n-steam-pricing-planner"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.__TP_I18N = Object.assign({}, window.__TP_I18N || {}, {\
  steam_pricing_planner: {\
    title: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.title"))},\
    subtitle: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.subtitle"))},\
    section_game_parameters: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.section.game_parameters"))},\
    field_genre: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.field.genre"))},\
    field_gameplay_length: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.field.gameplay_length"))},\
    field_base_usd_price: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.field.base_usd_price"))},\
    field_base_usd_price_placeholder: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.field.base_usd_price_placeholder"))},\
    field_sale_discount: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.field.sale_discount"))},\
    cta_calculate: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.cta.calculate"))},\
    section_regional_recommendations: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.section.regional_recommendations"))},\
    metric_anchor_price: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.metric.anchor_price"))},\
    filter_country_placeholder: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.filter_country_placeholder"))},\
    table_country: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.table.country"))},\
    table_currency: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.table.currency"))},\
    table_suggested_price: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.table.suggested_price"))},\
    table_sale_price: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.table.sale_price"))},\
    show_all: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.show_all"))},\
    empty_no_countries: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.empty.no_countries"))},\
    status_syncing_fx: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.status.syncing_fx"))},\
    status_could_not_load_fx: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.status.could_not_load_fx"))},\
    status_fx_offline: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.status.fx_offline"))},\
    status_fx_source: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.status.fx_source"))},\
    reason_manual_setting: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.reason.manual_setting"))},\
    reason_based_on_genre_length: ${JSON.stringify(t(locale, "tools.steam_pricing_planner.script.reason.based_on_genre_length"))}\
  }\
});`,
        }}
      />

      <Script
        id="steam-pricing-planner-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: t(locale, "tools.steam_pricing_planner.ld.name"),
            url: "https://www.trapplan.com/steam-pricing-planner",
            description:
              t(locale, "tools.steam_pricing_planner.ld.description"),
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
                name: t(locale, "blog.ui.home"),
                item: "https://www.trapplan.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t(locale, "tools.ui.free_tools"),
                item: "https://www.trapplan.com/steam-pricing-planner",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: t(locale, "tools.steam_pricing_planner.name"),
                item: "https://www.trapplan.com/steam-pricing-planner",
              },
            ],
          }),
        }}
      />

      <div className="sr-only">
        <h1>{t(locale, "tools.steam_pricing_planner.sr.title")}</h1>
        <p>{t(locale, "tools.steam_pricing_planner.sr.body")}</p>
      </div>

      <div id="tp-steam-pricing-tool" suppressHydrationWarning style={{ marginTop: 100 }}>
        <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          {t(locale, "tools.steam_pricing_planner.ui.h2")}
        </h2>
        <p
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            color: "#666",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {t(locale, "tools.steam_pricing_planner.ui.body")}
        </p>
        <p style={{ textAlign: "center" }}>
          <em>{t(locale, "tools.ui.loading_tool")}</em>
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
