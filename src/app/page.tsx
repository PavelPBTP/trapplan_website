import Hero from "@/components/sections/Hero";
import Cases from "@/components/sections/Cases";
import VerticalServicesAccordion from "@/components/sections/VerticalServicesAccordion";
import ReadyToGoPackages from "@/components/sections/ReadyToGoPackages";
import GetAQuote from "@/components/sections/GetAQuote";
import Footer from "@/components/sections/Footer";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";

export default async function Home() {
  const locale = await getRequestLocale();

  const heroTx = {
    badge01: t(locale, "hero.badge.01"),
    badge02: t(locale, "hero.badge.02"),
    badge03: t(locale, "hero.badge.03"),
    kicker: t(locale, "hero.kicker"),
    subhead: t(locale, "hero.subhead"),
    body: t(locale, "hero.body"),
    ctaContact: t(locale, "hero.cta_contact"),
  };

  const casesTx = {
    title: t(locale, "cases.title"),
    subtitle: t(locale, "cases.subtitle"),
    fallbackMetric: t(locale, "cases.fallback_metric"),
    ctaViewCase: t(locale, "cases.cta_view_case"),
    ctaViewAll: t(locale, "cases.cta_view_all"),
    metricBySlug: {
      "war-thunder-youtube-europe": t(locale, "cases.metric.war_thunder_youtube_europe"),
      "enlisted-twitch-ads": t(locale, "cases.metric.enlisted_twitch_ads"),
      "crossout-new-players": t(locale, "cases.metric.crossout_new_players"),
      "war-thunder-performance-based": t(locale, "cases.metric.war_thunder_performance_based"),
      "world-of-tanks-usa": t(locale, "cases.metric.world_of_tanks_usa"),
      "brief-for-youtube-twitch": t(locale, "cases.metric.brief_for_youtube_twitch"),
    },
    resultBySlug: {
      "enlisted-twitch-ads": t(locale, "cases.result.enlisted_twitch_ads"),
      "crossout-new-players": t(locale, "cases.result.crossout_new_players"),
      "war-thunder-performance-based": t(locale, "cases.result.war_thunder_performance_based"),
      "world-of-tanks-usa": t(locale, "cases.result.world_of_tanks_usa"),
      "brief-for-youtube-twitch": t(locale, "cases.result.brief_for_youtube_twitch"),
      "war-thunder-youtube-europe": t(locale, "cases.result.war_thunder_youtube_europe"),
    },
    descOverrideBySlug: {
      "war-thunder-youtube-europe": t(locale, "cases.desc_override.war_thunder_youtube_europe"),
    },
  };

  const servicesTx = {
    title: t(locale, "services.title"),
    subtitle: t(locale, "services.subtitle"),
    mobileHint: t(locale, "services.mobile_hint"),
    panels: [
      {
        id: "blueprint",
        title: t(locale, "services.panel.blueprint.title"),
        description: t(locale, "services.panel.blueprint.desc"),
        href: "/game-launch-blueprint",
        accentNumber: "01",
        ghostLabel: t(locale, "services.panel.blueprint.ghost"),
      },
      {
        id: "paid-growth",
        title: t(locale, "services.panel.paid_growth.title"),
        description: t(locale, "services.panel.paid_growth.desc"),
        href: "/paid-growth",
        accentNumber: "02",
        ghostLabel: t(locale, "services.panel.paid_growth.ghost"),
      },
      {
        id: "creative",
        title: t(locale, "services.panel.creative.title"),
        description: t(locale, "services.panel.creative.desc"),
        href: "/creative-content-pipeline",
        accentNumber: "03",
        ghostLabel: t(locale, "services.panel.creative.ghost"),
      },
    ],
  };

  const packagesTx = {
    title: t(locale, "packages.title"),
    priceLabel: t(locale, "packages.price_label"),
    ctaLearnMore: t(locale, "packages.cta_learn_more"),
    mediaVideoLabel: t(locale, "packages.media_video_label"),
    cardCopy: {
      "/reddit-launch-support": {
        title: t(locale, "packages.card.reddit.title"),
        desc: t(locale, "packages.card.reddit.desc"),
      },
      "/pr-starter-pack": {
        title: t(locale, "packages.card.pr_starter.title"),
        desc: t(locale, "packages.card.pr_starter.desc"),
      },
      "/influencer-micro-campaign": {
        title: t(locale, "packages.card.influencer_micro.title"),
        desc: t(locale, "packages.card.influencer_micro.desc"),
      },
      "/tiktok-package-20-videos": {
        title: t(locale, "packages.card.tiktok_20.title"),
        desc: t(locale, "packages.card.tiktok_20.desc"),
      },
      "/paid-ads-setup": {
        title: t(locale, "packages.card.paid_ads_setup.title"),
        desc: t(locale, "packages.card.paid_ads_setup.desc"),
      },
      "/gameplay-trailer": {
        title: t(locale, "packages.card.gameplay_trailer.title"),
        desc: t(locale, "packages.card.gameplay_trailer.desc"),
      },
    },
  };

  const quoteTx = {
    title: t(locale, "form.get_a_quote.title"),
    subtitle: t(locale, "form.get_a_quote.subtitle"),
    ceoTitle: t(locale, "get_a_quote.ceo_title"),
    messageWhatsapp: t(locale, "form.get_a_quote.message_whatsapp"),
    cardTitle: t(locale, "form.get_a_quote.card_title"),
    fieldName: t(locale, "form.get_a_quote.field_name"),
    fieldCompany: t(locale, "form.get_a_quote.field_company"),
    fieldEmail: t(locale, "form.get_a_quote.field_email"),
    submitSending: t(locale, "form.get_a_quote.submit_sending"),
    submitSend: t(locale, "form.get_a_quote.submit_send"),
    success: t(locale, "form.get_a_quote.success"),
    errorGeneric: t(locale, "form.get_a_quote.error_generic"),
    errorNetwork: t(locale, "form.get_a_quote.error_network"),
  };

  return (
    <>
      <Hero translations={heroTx} />
      <Cases translations={casesTx} />
      <VerticalServicesAccordion translations={servicesTx} />
      <ReadyToGoPackages translations={packagesTx} />
      <GetAQuote translations={quoteTx} />
      <Footer />
    </>
  );
}
