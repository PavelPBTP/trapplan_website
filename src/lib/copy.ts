import type { Locale } from "@/lib/i18n";

export type CopyKey =
  | "nav.about_us"
  | "nav.services"
  | "nav.our_cases"
  | "nav.blog"
  | "cta.work_with_us"
  | "cta.read_the_blog"
  | "cta.lets_talk"
  | "hero.badge.01"
  | "hero.badge.02"
  | "hero.badge.03"
  | "hero.kicker"
  | "hero.subhead"
  | "hero.body"
  | "hero.cta_contact"
  | "cases.title"
  | "cases.subtitle"
  | "cases.cta_view_case"
  | "cases.cta_view_all"
  | "cases.fallback_metric"
  | "cases.metric.war_thunder_youtube_europe"
  | "cases.metric.enlisted_twitch_ads"
  | "cases.metric.crossout_new_players"
  | "cases.metric.war_thunder_performance_based"
  | "cases.metric.world_of_tanks_usa"
  | "cases.metric.brief_for_youtube_twitch"
  | "cases.result.enlisted_twitch_ads"
  | "cases.result.crossout_new_players"
  | "cases.result.war_thunder_performance_based"
  | "cases.result.world_of_tanks_usa"
  | "cases.result.brief_for_youtube_twitch"
  | "cases.result.war_thunder_youtube_europe"
  | "cases.desc_override.war_thunder_youtube_europe"
  | "services.title"
  | "services.subtitle"
  | "services.panel.blueprint.title"
  | "services.panel.blueprint.desc"
  | "services.panel.blueprint.ghost"
  | "services.panel.paid_growth.title"
  | "services.panel.paid_growth.desc"
  | "services.panel.paid_growth.ghost"
  | "services.panel.creative.title"
  | "services.panel.creative.desc"
  | "services.panel.creative.ghost"
  | "services.mobile_hint"
  | "packages.title"
  | "packages.price_label"
  | "packages.cta_learn_more"
  | "packages.media_video_label"
  | "packages.card.reddit.title"
  | "packages.card.reddit.desc"
  | "packages.card.pr_starter.title"
  | "packages.card.pr_starter.desc"
  | "packages.card.influencer_micro.title"
  | "packages.card.influencer_micro.desc"
  | "packages.card.tiktok_20.title"
  | "packages.card.tiktok_20.desc"
  | "packages.card.paid_ads_setup.title"
  | "packages.card.paid_ads_setup.desc"
  | "packages.card.gameplay_trailer.title"
  | "packages.card.gameplay_trailer.desc"
  | "seo.site.name"
  | "seo.site.description"
  | "seo.about.title"
  | "seo.about.desc"
  | "seo.blog.title"
  | "seo.blog.desc"
  | "seo.our_cases.title"
  | "seo.our_cases.desc"
  | "seo.no_wishlists.title"
  | "seo.no_wishlists.desc"
  | "seo.reddit_launch_support.title"
  | "seo.reddit_launch_support.desc"
  | "seo.pr_starter_pack.title"
  | "seo.pr_starter_pack.desc"
  | "seo.tiktok_20.title"
  | "seo.tiktok_20.desc"
  | "seo.influencer_micro.title"
  | "seo.influencer_micro.desc"
  | "seo.influencer_activation.title"
  | "seo.influencer_activation.desc"
  | "influencer_activation.badge"
  | "influencer_activation.hero.title"
  | "influencer_activation.hero.kicker"
  | "influencer_activation.hero.body"
  | "influencer_activation.how_it_works.kicker"
  | "influencer_activation.how_it_works.title"
  | "influencer_activation.phase.01.kicker"
  | "influencer_activation.phase.01.title"
  | "influencer_activation.phase.01.desc"
  | "influencer_activation.phase.02.kicker"
  | "influencer_activation.phase.02.title"
  | "influencer_activation.phase.02.desc"
  | "influencer_activation.phase.03.kicker"
  | "influencer_activation.phase.03.title"
  | "influencer_activation.phase.03.desc"
  | "influencer_activation.deliverables.kicker"
  | "influencer_activation.deliverables.title"
  | "influencer_activation.deliverables.01"
  | "influencer_activation.deliverables.02"
  | "influencer_activation.deliverables.03"
  | "influencer_activation.deliverables.04"
  | "influencer_activation.deliverables.05"
  | "influencer_activation.deliverables.06"
  | "influencer_activation.faq.kicker"
  | "influencer_activation.faq.title"
  | "influencer_activation.faq.01.q"
  | "influencer_activation.faq.01.a"
  | "influencer_activation.faq.02.q"
  | "influencer_activation.faq.02.a"
  | "influencer_activation.faq.03.q"
  | "influencer_activation.faq.03.a"
  | "influencer_activation.contact.title"
  | "influencer_activation.contact.body"
  | "influencer_activation.contact.card_kicker"
  | "influencer_activation.contact.card_title"
  | "influencer_activation.contact.field.name.label"
  | "influencer_activation.contact.field.name.placeholder"
  | "influencer_activation.contact.field.studio.label"
  | "influencer_activation.contact.field.studio.placeholder"
  | "influencer_activation.contact.field.steam.label"
  | "influencer_activation.contact.field.steam.placeholder"
  | "influencer_activation.contact.submit"
  | "blog.og.subtitle"
  | "blog.ui.home"
  | "blog.ui.blog"
  | "blog.ui.back_to_blog"
  | "blog.ui.min_read"
  | "blog.ui.no_posts_found"
  | "games_co_publishing.cta.lets_talk"
  | "games_co_publishing.hero.title"
  | "games_co_publishing.hero.kicker"
  | "games_co_publishing.hero.body"
  | "games_co_publishing.model.kicker"
  | "games_co_publishing.model.title"
  | "games_co_publishing.model.body"
  | "games_co_publishing.model.pillar_label"
  | "games_co_publishing.model.pillar.01.title"
  | "games_co_publishing.model.pillar.01.body"
  | "games_co_publishing.model.pillar.02.title"
  | "games_co_publishing.model.pillar.02.body"
  | "games_co_publishing.model.pillar.03.title"
  | "games_co_publishing.model.pillar.03.body"
  | "games_co_publishing.execution.kicker"
  | "games_co_publishing.execution.title"
  | "games_co_publishing.execution.body"
  | "games_co_publishing.execution.area.01.title"
  | "games_co_publishing.execution.area.01.body"
  | "games_co_publishing.execution.area.02.title"
  | "games_co_publishing.execution.area.02.body"
  | "games_co_publishing.execution.area.03.title"
  | "games_co_publishing.execution.area.03.body"
  | "games_co_publishing.execution.area.04.title"
  | "games_co_publishing.execution.area.04.body"
  | "games_co_publishing.execution.area.05.title"
  | "games_co_publishing.execution.area.05.body"
  | "games_co_publishing.process.kicker"
  | "games_co_publishing.process.title"
  | "games_co_publishing.process.step.01.label"
  | "games_co_publishing.process.step.01.title"
  | "games_co_publishing.process.step.01.body"
  | "games_co_publishing.process.step.02.label"
  | "games_co_publishing.process.step.02.title"
  | "games_co_publishing.process.step.02.body"
  | "games_co_publishing.process.step.03.label"
  | "games_co_publishing.process.step.03.title"
  | "games_co_publishing.process.step.03.body"
  | "games_co_publishing.faq.kicker"
  | "games_co_publishing.faq.title"
  | "games_co_publishing.faq.01.q"
  | "games_co_publishing.faq.01.a"
  | "games_co_publishing.faq.02.q"
  | "games_co_publishing.faq.02.a"
  | "games_co_publishing.faq.03.q"
  | "games_co_publishing.faq.03.a"
  | "games_co_publishing.faq.04.q"
  | "games_co_publishing.faq.04.a"
  | "games_co_publishing.faq.05.q"
  | "games_co_publishing.faq.05.a"
  | "games_co_publishing.faq.06.q"
  | "games_co_publishing.faq.06.a"
  | "games_co_publishing.faq.07.q"
  | "games_co_publishing.faq.07.a"
  | "games_co_publishing.faq.08.q"
  | "games_co_publishing.faq.08.a"
  | "games_co_publishing.faq.09.q"
  | "games_co_publishing.faq.09.a"
  | "games_co_publishing.faq.10.q"
  | "games_co_publishing.faq.10.a"
  | "games_co_publishing.contact.title"
  | "games_co_publishing.contact.body"
  | "games_co_publishing.contact.card_kicker"
  | "games_co_publishing.contact.card_title"
  | "games_co_publishing.contact.field.name.label"
  | "games_co_publishing.contact.field.name.placeholder"
  | "games_co_publishing.contact.field.studio.label"
  | "games_co_publishing.contact.field.studio.placeholder"
  | "games_co_publishing.contact.field.message.label"
  | "games_co_publishing.contact.field.message.placeholder"
  | "games_co_publishing.contact.submit"
  | "tools.ui.free_tools"
  | "tools.ui.loading_tool"
  | "tools.steam_festival_planner.name"
  | "tools.steam_festival_planner.ld.description"
  | "tools.steam_festival_planner.sr.title"
  | "tools.steam_festival_planner.sr.body"
  | "tools.steam_festival_planner.ui.smart_match.title"
  | "tools.steam_festival_planner.ui.smart_match.body"
  | "tools.steam_festival_planner.ui.appid.placeholder"
  | "tools.steam_festival_planner.ui.analyze"
  | "tools.steam_festival_planner.ui.game_name"
  | "tools.steam_festival_planner.ui.genres"
  | "tools.steam_festival_planner.ui.search.placeholder"
  | "tools.steam_festival_planner.ui.filters.all"
  | "tools.steam_festival_planner.ui.filters.free"
  | "tools.steam_festival_planner.ui.filters.major"
  | "tools.steam_festival_planner.ui.filters.themed"
  | "tools.steam_festival_planner.ui.filters.indie"
  | "tools.steam_festival_planner.ui.loading_events"
  | "tools.steam_pricing_planner.name"
  | "tools.steam_pricing_planner.ld.name"
  | "tools.steam_pricing_planner.ld.description"
  | "tools.steam_pricing_planner.sr.title"
  | "tools.steam_pricing_planner.sr.body"
  | "tools.steam_pricing_planner.ui.h2"
  | "tools.steam_pricing_planner.ui.body"
  | "tools.steam_wishlist_calculator.name"
  | "tools.steam_wishlist_calculator.ld.description"
  | "tools.steam_wishlist_calculator.sr.title"
  | "tools.steam_wishlist_calculator.sr.body"
  | "tools.steam_wishlist_calculator.ui.title"
  | "tools.steam_wishlist_calculator.ui.subtitle"
  | "tools.steam_wishlist_calculator.ui.card.goal"
  | "tools.steam_wishlist_calculator.ui.card.funnel"
  | "tools.steam_wishlist_calculator.ui.card.results"
  | "tools.steam_wishlist_calculator.ui.goal.target_sales"
  | "tools.steam_wishlist_calculator.ui.goal.price"
  | "tools.steam_wishlist_calculator.ui.goal.steam_cut"
  | "tools.steam_wishlist_calculator.ui.goal.adjustments"
  | "tools.steam_wishlist_calculator.ui.goal.adjustments_help"
  | "tools.steam_wishlist_calculator.ui.funnel.preset.conservative"
  | "tools.steam_wishlist_calculator.ui.funnel.preset.base"
  | "tools.steam_wishlist_calculator.ui.funnel.preset.optimistic"
  | "tools.steam_wishlist_calculator.ui.funnel.wl_to_sales"
  | "tools.steam_wishlist_calculator.ui.funnel.visit_to_wl"
  | "tools.steam_wishlist_calculator.ui.funnel.estimate_paid"
  | "tools.steam_wishlist_calculator.ui.funnel.cpc"
  | "tools.steam_wishlist_calculator.ui.funnel.calculate"
  | "tools.steam_wishlist_calculator.ui.results.required_wl"
  | "tools.steam_wishlist_calculator.ui.results.required_visits"
  | "tools.steam_wishlist_calculator.ui.results.net_revenue"
  | "tools.steam_wishlist_calculator.ui.results.paid_budget"
  | "tools.steam_wishlist_calculator.ui.bottom_note"
  | "get_a_quote.ceo_title"
  | "tools.steam_pricing_planner.script.title"
  | "tools.steam_pricing_planner.script.subtitle"
  | "tools.steam_pricing_planner.script.section.game_parameters"
  | "tools.steam_pricing_planner.script.field.genre"
  | "tools.steam_pricing_planner.script.field.gameplay_length"
  | "tools.steam_pricing_planner.script.field.base_usd_price"
  | "tools.steam_pricing_planner.script.field.base_usd_price_placeholder"
  | "tools.steam_pricing_planner.script.field.sale_discount"
  | "tools.steam_pricing_planner.script.cta.calculate"
  | "tools.steam_pricing_planner.script.section.regional_recommendations"
  | "tools.steam_pricing_planner.script.metric.anchor_price"
  | "tools.steam_pricing_planner.script.filter_country_placeholder"
  | "tools.steam_pricing_planner.script.table.country"
  | "tools.steam_pricing_planner.script.table.currency"
  | "tools.steam_pricing_planner.script.table.suggested_price"
  | "tools.steam_pricing_planner.script.table.sale_price"
  | "tools.steam_pricing_planner.script.show_all"
  | "tools.steam_pricing_planner.script.empty.no_countries"
  | "tools.steam_pricing_planner.script.status.syncing_fx"
  | "tools.steam_pricing_planner.script.status.could_not_load_fx"
  | "tools.steam_pricing_planner.script.status.fx_offline"
  | "tools.steam_pricing_planner.script.status.fx_source"
  | "tools.steam_pricing_planner.script.reason.manual_setting"
  | "tools.steam_pricing_planner.script.reason.based_on_genre_length"
  | "tools.steam_festival_planner.script.empty.no_events_loaded"
  | "tools.steam_festival_planner.script.empty.failed_load_db"
  | "tools.steam_festival_planner.script.empty.no_events_found"
  | "tools.steam_festival_planner.script.status.closed"
  | "tools.steam_festival_planner.script.status.open"
  | "tools.steam_festival_planner.script.status.closes_in_days"
  | "tools.steam_festival_planner.script.field.status_label"
  | "tools.steam_festival_planner.script.cta.apply"
  | "tools.steam_festival_planner.script.cta.closed"
  | "tools.steam_festival_planner.script.badge.match"
  | "tools.steam_festival_planner.script.fallback.free"
  | "tools.steam_festival_planner.script.fallback.event"
  | "tools.steam_festival_planner.script.analyzing"
  | "tools.steam_festival_planner.script.analyze"
  | "tools.steam_festival_planner.script.genres_prefix"
  | "tools.steam_festival_planner.script.alert_game_not_found"
  | "structured.organization.description"
  | "structured.website.description"
  | "structured.professional_service.name"
  | "structured.organization.service_type.01"
  | "structured.organization.service_type.02"
  | "structured.organization.service_type.03"
  | "structured.organization.service_type.04"
  | "structured.service_catalog.name"
  | "structured.service.blueprint.name"
  | "structured.service.blueprint.desc"
  | "structured.service.paid_growth.name"
  | "structured.service.paid_growth.desc"
  | "structured.service.creative.name"
  | "structured.service.creative.desc"
  | "paid_ads_setup.ui.hero.title_line_1"
  | "paid_ads_setup.ui.hero.title_line_2"
  | "paid_ads_setup.ui.hero.body"
  | "paid_ads_setup.ui.hero.cta"
  | "paid_ads_setup.ui.hero.price"
  | "paid_ads_setup.ui.hero.image_alt"
  | "paid_ads_setup.ui.section2.title_line_1"
  | "paid_ads_setup.ui.section2.title_line_2"
  | "paid_ads_setup.ui.section2.p1"
  | "paid_ads_setup.ui.section2.p2"
  | "paid_ads_setup.ui.section2.image_alt"
  | "paid_ads_setup.ui.section3.image_alt"
  | "paid_ads_setup.ui.section3.title"
  | "paid_ads_setup.ui.section3.bullet.channel_title"
  | "paid_ads_setup.ui.section3.bullet.channel_text"
  | "paid_ads_setup.ui.section3.bullet.budget_title"
  | "paid_ads_setup.ui.section3.bullet.budget_text"
  | "paid_ads_setup.ui.section3.bullet.targeting_title"
  | "paid_ads_setup.ui.section3.bullet.targeting_text"
  | "paid_ads_setup.ui.section3.bullet.creative_title"
  | "paid_ads_setup.ui.section3.bullet.creative_text"
  | "paid_ads_setup.ui.section3.bullet.handoff_title"
  | "paid_ads_setup.ui.section3.bullet.handoff_text"
  | "paid_ads_setup.ui.section3.cta"
  | "paid_ads_setup.ui.section4.title"
  | "paid_ads_setup.ui.section4.step1.title"
  | "paid_ads_setup.ui.section4.step1.text"
  | "paid_ads_setup.ui.section4.step2.title"
  | "paid_ads_setup.ui.section4.step2.text"
  | "paid_ads_setup.ui.section4.step3.title"
  | "paid_ads_setup.ui.section4.step3.text"
  | "paid_ads_setup.ui.section4.step4.title"
  | "paid_ads_setup.ui.section4.step4.text"
  | "paid_ads_setup.ui.section4.cta"
  | "game_launch_blueprint.ui.cta.lets_talk"
  | "game_launch_blueprint.ui.hero.badge"
  | "game_launch_blueprint.ui.hero.title"
  | "game_launch_blueprint.ui.hero.subtitle"
  | "game_launch_blueprint.ui.hero.body"
  | "game_launch_blueprint.ui.workflow.kicker"
  | "game_launch_blueprint.ui.workflow.title"
  | "game_launch_blueprint.ui.workflow.image_placeholder"
  | "game_launch_blueprint.ui.workflow.phase1.label"
  | "game_launch_blueprint.ui.workflow.phase1.title"
  | "game_launch_blueprint.ui.workflow.phase1.body"
  | "game_launch_blueprint.ui.workflow.phase2.label"
  | "game_launch_blueprint.ui.workflow.phase2.title"
  | "game_launch_blueprint.ui.workflow.phase2.body"
  | "game_launch_blueprint.ui.workflow.phase3.label"
  | "game_launch_blueprint.ui.workflow.phase3.title"
  | "game_launch_blueprint.ui.workflow.phase3.body"
  | "game_launch_blueprint.ui.build.kicker"
  | "game_launch_blueprint.ui.build.title"
  | "game_launch_blueprint.ui.build.item.01"
  | "game_launch_blueprint.ui.build.item.02"
  | "game_launch_blueprint.ui.build.item.03"
  | "game_launch_blueprint.ui.build.item.04"
  | "game_launch_blueprint.ui.build.item.05"
  | "game_launch_blueprint.ui.build.item.06"
  | "game_launch_blueprint.ui.build.item.07"
  | "game_launch_blueprint.ui.build.item.08"
  | "game_launch_blueprint.ui.build.item.09"
  | "game_launch_blueprint.ui.build.item.10"
  | "game_launch_blueprint.ui.build.item.11"
  | "game_launch_blueprint.ui.build.item.12"
  | "game_launch_blueprint.ui.best_fit.kicker"
  | "game_launch_blueprint.ui.best_fit.title"
  | "game_launch_blueprint.ui.best_fit.body"
  | "game_launch_blueprint.ui.best_fit.status_label"
  | "game_launch_blueprint.ui.best_fit.status_text"
  | "game_launch_blueprint.ui.best_fit.need_label"
  | "game_launch_blueprint.ui.best_fit.need_text"
  | "game_launch_blueprint.ui.best_fit.goal_label"
  | "game_launch_blueprint.ui.best_fit.goal_text"
  | "game_launch_blueprint.ui.process.kicker"
  | "game_launch_blueprint.ui.process.title"
  | "game_launch_blueprint.ui.process.step1.label"
  | "game_launch_blueprint.ui.process.step1.title"
  | "game_launch_blueprint.ui.process.step1.body"
  | "game_launch_blueprint.ui.process.step2.label"
  | "game_launch_blueprint.ui.process.step2.title"
  | "game_launch_blueprint.ui.process.step2.body"
  | "game_launch_blueprint.ui.process.step3.label"
  | "game_launch_blueprint.ui.process.step3.title"
  | "game_launch_blueprint.ui.process.step3.body"
  | "game_launch_blueprint.ui.faq.kicker"
  | "game_launch_blueprint.ui.faq.title"
  | "game_launch_blueprint.ui.faq.q1"
  | "game_launch_blueprint.ui.faq.a1"
  | "game_launch_blueprint.ui.faq.q2"
  | "game_launch_blueprint.ui.faq.a2"
  | "game_launch_blueprint.ui.faq.q3"
  | "game_launch_blueprint.ui.faq.a3"
  | "game_launch_blueprint.ui.faq.q4"
  | "game_launch_blueprint.ui.faq.a4"
  | "game_launch_blueprint.ui.faq.q5"
  | "game_launch_blueprint.ui.faq.a5"
  | "game_launch_blueprint.ui.faq.q6"
  | "game_launch_blueprint.ui.faq.a6"
  | "game_launch_blueprint.ui.contact.title"
  | "game_launch_blueprint.ui.contact.body"
  | "game_launch_blueprint.ui.contact.tag.framework"
  | "game_launch_blueprint.ui.contact.tag.execution"
  | "game_launch_blueprint.ui.contact.tag.reporting"
  | "game_launch_blueprint.ui.contact.card_kicker"
  | "game_launch_blueprint.ui.contact.card_title"
  | "game_launch_blueprint.ui.contact.field.name.label"
  | "game_launch_blueprint.ui.contact.field.name.placeholder"
  | "game_launch_blueprint.ui.contact.field.studio.label"
  | "game_launch_blueprint.ui.contact.field.studio.placeholder"
  | "game_launch_blueprint.ui.contact.field.steam.label"
  | "game_launch_blueprint.ui.contact.field.steam.placeholder"
  | "game_launch_blueprint.ui.contact.send"
  | "tiktok_20.ui.hero.title_01"
  | "tiktok_20.ui.hero.title_02"
  | "tiktok_20.ui.hero.title_03"
  | "tiktok_20.ui.hero.title_04"
  | "tiktok_20.ui.hero.body"
  | "tiktok_20.ui.hero.cta"
  | "tiktok_20.ui.hero.price"
  | "tiktok_20.ui.section2.image_alt"
  | "tiktok_20.ui.section2.title_01"
  | "tiktok_20.ui.section2.title_02"
  | "tiktok_20.ui.section2.title_03"
  | "tiktok_20.ui.section2.p1"
  | "tiktok_20.ui.section3.image_alt_01"
  | "tiktok_20.ui.section3.image_alt_02"
  | "tiktok_20.ui.section3.image_alt_03"
  | "tiktok_20.ui.section3.image_alt_04"
  | "tiktok_20.ui.section3.image_alt_05"
  | "tiktok_20.ui.section3.title"
  | "tiktok_20.ui.section3.bullet1.title"
  | "tiktok_20.ui.section3.bullet1.text"
  | "tiktok_20.ui.section3.bullet2.title"
  | "tiktok_20.ui.section3.bullet2.text"
  | "tiktok_20.ui.section3.bullet3.title"
  | "tiktok_20.ui.section3.bullet3.text"
  | "tiktok_20.ui.section3.bullet4.title"
  | "tiktok_20.ui.section3.bullet4.text"
  | "tiktok_20.ui.section3.bullet5.title"
  | "tiktok_20.ui.section3.bullet5.text"
  | "tiktok_20.ui.section3.cta"
  | "tiktok_20.ui.section4.title"
  | "tiktok_20.ui.section4.step1.title"
  | "tiktok_20.ui.section4.step1.text"
  | "tiktok_20.ui.section4.step2.title"
  | "tiktok_20.ui.section4.step2.text"
  | "tiktok_20.ui.section4.step3.title"
  | "tiktok_20.ui.section4.step3.text"
  | "tiktok_20.ui.section4.step4.title"
  | "tiktok_20.ui.section4.step4.text"
  | "tiktok_20.ui.section4.cta"
  | "tiktok_20.ui.why.title"
  | "tiktok_20.ui.why.subtitle"
  | "tiktok_20.ui.case.wishlists"
  | "tiktok_20.ui.why.cta"
  | "tiktok_20.ui.big_cta.title"
  | "tiktok_20.ui.big_cta.subtitle"
  | "tiktok_20.ui.big_cta.primary"
  | "tiktok_20.ui.big_cta.secondary"
  | "tiktok_20.ui.other_packages.title"
  | "tiktok_20.ui.package.price_prefix"
  | "tiktok_20.ui.package.learn_more"
  | "reddit_launch_support.ui.post.posted_by"
  | "reddit_launch_support.ui.post.join"
  | "reddit_launch_support.ui.post.share"
  | "reddit_launch_support.ui.post.image_alt"
  | "reddit_launch_support.ui.hero.title_01"
  | "reddit_launch_support.ui.hero.title_02"
  | "reddit_launch_support.ui.hero.body"
  | "reddit_launch_support.ui.hero.cta"
  | "reddit_launch_support.ui.hero.price"
  | "reddit_launch_support.ui.hero.image_alt"
  | "reddit_launch_support.ui.section2.image_alt"
  | "reddit_launch_support.ui.section2.title_01"
  | "reddit_launch_support.ui.section2.title_02"
  | "reddit_launch_support.ui.section2.p1"
  | "reddit_launch_support.ui.section2.p2"
  | "reddit_launch_support.ui.section3.title"
  | "reddit_launch_support.ui.section3.bullet1.title"
  | "reddit_launch_support.ui.section3.bullet1.text"
  | "reddit_launch_support.ui.section3.bullet2.title"
  | "reddit_launch_support.ui.section3.bullet2.text"
  | "reddit_launch_support.ui.section3.bullet3.title"
  | "reddit_launch_support.ui.section3.bullet3.text"
  | "reddit_launch_support.ui.section3.bullet4.title"
  | "reddit_launch_support.ui.section3.bullet4.text"
  | "reddit_launch_support.ui.section3.bullet5.title"
  | "reddit_launch_support.ui.section3.bullet5.text"
  | "reddit_launch_support.ui.section3.cta"
  | "reddit_launch_support.ui.section4.title"
  | "reddit_launch_support.ui.section4.step1.title"
  | "reddit_launch_support.ui.section4.step1.text"
  | "reddit_launch_support.ui.section4.step2.title"
  | "reddit_launch_support.ui.section4.step2.text"
  | "reddit_launch_support.ui.section4.step3.title"
  | "reddit_launch_support.ui.section4.step3.text"
  | "reddit_launch_support.ui.section4.step4.title"
  | "reddit_launch_support.ui.section4.step4.text"
  | "reddit_launch_support.ui.section4.cta"
  | "reddit_launch_support.ui.results.title"
  | "reddit_launch_support.ui.results.subtitle"
  | "reddit_launch_support.ui.results.placeholder_kicker"
  | "reddit_launch_support.ui.results.placeholder_body"
  | "reddit_launch_support.ui.results.placeholder_card_body"
  | "reddit_launch_support.ui.results.cta"
  | "gameplay_trailer.ui.hero.title_01"
  | "gameplay_trailer.ui.hero.title_02"
  | "gameplay_trailer.ui.hero.body"
  | "gameplay_trailer.ui.hero.cta"
  | "gameplay_trailer.ui.hero.price"
  | "gameplay_trailer.ui.hero.image_alt"
  | "gameplay_trailer.ui.section2.image_alt"
  | "gameplay_trailer.ui.section2.title_01"
  | "gameplay_trailer.ui.section2.title_02"
  | "gameplay_trailer.ui.section2.title_03"
  | "gameplay_trailer.ui.section2.p1"
  | "gameplay_trailer.ui.section2.p2"
  | "gameplay_trailer.ui.section3.image_alt"
  | "gameplay_trailer.ui.section3.title"
  | "gameplay_trailer.ui.section3.bullet1.title"
  | "gameplay_trailer.ui.section3.bullet1.text"
  | "gameplay_trailer.ui.section3.bullet2.title"
  | "gameplay_trailer.ui.section3.bullet2.text"
  | "gameplay_trailer.ui.section3.bullet3.title"
  | "gameplay_trailer.ui.section3.bullet3.text"
  | "gameplay_trailer.ui.section3.bullet4.title"
  | "gameplay_trailer.ui.section3.bullet4.text"
  | "gameplay_trailer.ui.section3.bullet5.title"
  | "gameplay_trailer.ui.section3.bullet5.text"
  | "gameplay_trailer.ui.section3.cta"
  | "gameplay_trailer.ui.how.title"
  | "gameplay_trailer.ui.how.step1.title"
  | "gameplay_trailer.ui.how.step1.text"
  | "gameplay_trailer.ui.how.step2.title"
  | "gameplay_trailer.ui.how.step2.text"
  | "gameplay_trailer.ui.how.step3.title"
  | "gameplay_trailer.ui.how.step3.text"
  | "gameplay_trailer.ui.how.step4.title"
  | "gameplay_trailer.ui.how.step4.text"
  | "gameplay_trailer.ui.how.cta"
  | "pr_starter_pack.ui.hero.title_01"
  | "pr_starter_pack.ui.hero.title_02"
  | "pr_starter_pack.ui.hero.body_pre"
  | "pr_starter_pack.ui.hero.body_bold_credibility"
  | "pr_starter_pack.ui.hero.body_bold_seal"
  | "pr_starter_pack.ui.hero.body_bold_wishlist"
  | "pr_starter_pack.ui.hero.body_post"
  | "pr_starter_pack.ui.hero.cta"
  | "pr_starter_pack.ui.hero.price"
  | "pr_starter_pack.ui.hero.image_alt"
  | "pr_starter_pack.ui.section2.image_alt"
  | "pr_starter_pack.ui.section2.title_01"
  | "pr_starter_pack.ui.section2.title_02"
  | "pr_starter_pack.ui.section2.p1"
  | "pr_starter_pack.ui.section2.p2"
  | "pr_starter_pack.ui.section3.image_alt"
  | "pr_starter_pack.ui.section3.title"
  | "pr_starter_pack.ui.section3.bullet1.title"
  | "pr_starter_pack.ui.section3.bullet1.text"
  | "pr_starter_pack.ui.section3.bullet2.title"
  | "pr_starter_pack.ui.section3.bullet2.text"
  | "pr_starter_pack.ui.section3.bullet3.title"
  | "pr_starter_pack.ui.section3.bullet3.text"
  | "pr_starter_pack.ui.section3.bullet4.title"
  | "pr_starter_pack.ui.section3.bullet4.text"
  | "pr_starter_pack.ui.section3.bullet5.title"
  | "pr_starter_pack.ui.section3.bullet5.text"
  | "pr_starter_pack.ui.section3.cta"
  | "pr_starter_pack.ui.how.title"
  | "pr_starter_pack.ui.how.step1.title"
  | "pr_starter_pack.ui.how.step1.text"
  | "pr_starter_pack.ui.how.step2.title"
  | "pr_starter_pack.ui.how.step2.text"
  | "pr_starter_pack.ui.how.step3.title"
  | "pr_starter_pack.ui.how.step3.text"
  | "pr_starter_pack.ui.how.step4.title"
  | "pr_starter_pack.ui.how.step4.text"
  | "pr_starter_pack.ui.how.cta"
  | "influencer_micro.ui.hero.title_01"
  | "influencer_micro.ui.hero.title_02"
  | "influencer_micro.ui.hero.body_01"
  | "influencer_micro.ui.hero.body_02"
  | "influencer_micro.ui.hero.cta"
  | "influencer_micro.ui.hero.price"
  | "influencer_micro.ui.hero.image_alt"
  | "influencer_micro.ui.section2.image_alt"
  | "influencer_micro.ui.section2.title_01"
  | "influencer_micro.ui.section2.title_02"
  | "influencer_micro.ui.section2.p1"
  | "influencer_micro.ui.section2.p2"
  | "influencer_micro.ui.section3.image_alt"
  | "influencer_micro.ui.section3.title"
  | "influencer_micro.ui.section3.bullet1.title"
  | "influencer_micro.ui.section3.bullet1.text"
  | "influencer_micro.ui.section3.bullet2.title"
  | "influencer_micro.ui.section3.bullet2.text"
  | "influencer_micro.ui.section3.bullet3.title"
  | "influencer_micro.ui.section3.bullet3.text"
  | "influencer_micro.ui.section3.bullet4.title"
  | "influencer_micro.ui.section3.bullet4.text"
  | "influencer_micro.ui.section3.bullet5.title"
  | "influencer_micro.ui.section3.bullet5.text"
  | "influencer_micro.ui.section3.cta"
  | "influencer_micro.ui.how.title"
  | "influencer_micro.ui.how.step1.title"
  | "influencer_micro.ui.how.step1.text"
  | "influencer_micro.ui.how.step2.title"
  | "influencer_micro.ui.how.step2.text"
  | "influencer_micro.ui.how.step3.title"
  | "influencer_micro.ui.how.step3.text"
  | "influencer_micro.ui.how.step4.title"
  | "influencer_micro.ui.how.step4.text"
  | "influencer_micro.ui.how.cta"
  | "tools.steam_influencers_planner.ui.title"
  | "tools.steam_influencers_planner.ui.subtitle"
  | "tools.steam_influencers_planner.ui.how_title"
  | "tools.steam_influencers_planner.ui.how_step1"
  | "tools.steam_influencers_planner.ui.how_step2"
  | "tools.steam_influencers_planner.ui.how_step3"
  | "tools.steam_influencers_planner.ui.field.steam_store_page"
  | "tools.steam_influencers_planner.ui.field.region"
  | "tools.steam_influencers_planner.ui.field.region_all"
  | "tools.steam_influencers_planner.ui.field.similar_games"
  | "tools.steam_influencers_planner.ui.placeholder.steam_url"
  | "tools.steam_influencers_planner.ui.tip_paste"
  | "tools.steam_influencers_planner.ui.warn_bad_link"
  | "tools.steam_influencers_planner.ui.placeholder.similar_games"
  | "tools.steam_influencers_planner.ui.hint_showing_results"
  | "tools.steam_influencers_planner.ui.hint_paste_and_search"
  | "tools.steam_influencers_planner.ui.cta.search"
  | "tools.steam_influencers_planner.ui.cta.clear"
  | "paid_growth.ui.hero.image_alt"
  | "services.legacy_placeholder"
  | "blog.inline.steam_wishlist"
  | "blog.inline.steam_wishlists"
  | "blog.inline.wishlist"
  | "blog.inline.wishlists"
  | "blog.inline.steam_next_fest"
  | "blog.inline.marketing_for_steam"
  | "blog.inline.steam_marketing"
  | "blog.inline.steam_reviews"
  | "blog.inline.steam_review"
  | "blog.inline.reviews_on_steam"
  | "blog.inline.steam_page"
  | "blog.inline.steam_store_page"
  | "blog.inline.video_games_pr"
  | "blog.inline.video_game_pr"
  | "blog.inline.steam_no_wishlist"
  | "blog.inline.steam_no_wishlists"
  | "blog.inline.no_wishlists_on_steam"
  | "blog.inline.marketing_for_video_games"
  | "blog.inline.work_with_us"
  | "blog.inline.video_games_promote_violence"
  | "seo.paid_ads_setup.title"
  | "seo.paid_ads_setup.desc"
  | "footer.group.ready_packages"
  | "footer.group.free_tools"
  | "footer.group.resources"
  | "footer.group.support"
  | "footer.link.cookies_policy"
  | "footer.link.privacy_policy"
  | "footer.link.no_wishlists"
  | "home.services.section_title"
  | "home.services.launch_and_growth"
  | "paid_growth.ui.hero.kicker"
  | "paid_growth.ui.hero.title"
  | "paid_growth.ui.hero.body"
  | "paid_growth.ui.hero.cta"
  | "paid_growth.ui.hero.note"
  | "paid_growth.ui.core_value.kicker"
  | "paid_growth.ui.core_value.title"
  | "paid_growth.ui.core_value.subtitle"
  | "paid_growth.ui.block1.title"
  | "paid_growth.ui.block1.body"
  | "paid_growth.ui.block1.bullet1"
  | "paid_growth.ui.block1.bullet2"
  | "paid_growth.ui.block1.bullet3"
  | "paid_growth.ui.block1.bullet4"
  | "paid_growth.ui.block2.title"
  | "paid_growth.ui.block2.body"
  | "paid_growth.ui.block2.bullet1"
  | "paid_growth.ui.block2.bullet2"
  | "paid_growth.ui.block2.bullet3"
  | "paid_growth.ui.block2.bullet4"
  | "paid_growth.ui.block3.title"
  | "paid_growth.ui.block3.body"
  | "paid_growth.ui.block3.bullet1"
  | "paid_growth.ui.block3.bullet2"
  | "paid_growth.ui.block3.bullet3"
  | "paid_growth.ui.block3.bullet4"
  | "paid_growth.ui.faq.kicker"
  | "paid_growth.ui.faq.title"
  | "paid_growth.ui.faq.q1"
  | "paid_growth.ui.faq.a1"
  | "paid_growth.ui.faq.q2"
  | "paid_growth.ui.faq.a2"
  | "paid_growth.ui.faq.q3"
  | "paid_growth.ui.faq.a3"
  | "paid_growth.ui.faq.q4"
  | "paid_growth.ui.faq.a4"
  | "paid_growth.ui.faq.q5"
  | "paid_growth.ui.faq.a5"
  | "paid_growth.ui.faq.cta"
  | "creative_content_pipeline.ui.hero.kicker"
  | "creative_content_pipeline.ui.hero.title"
  | "creative_content_pipeline.ui.hero.body"
  | "creative_content_pipeline.ui.hero.cta"
  | "creative_content_pipeline.ui.hero.note"
  | "creative_content_pipeline.ui.hero.image_alt"
  | "creative_content_pipeline.ui.pipeline.kicker"
  | "creative_content_pipeline.ui.pipeline.title"
  | "creative_content_pipeline.ui.pipeline.subtitle"
  | "creative_content_pipeline.ui.block1.title"
  | "creative_content_pipeline.ui.block1.body"
  | "creative_content_pipeline.ui.block1.bullet1"
  | "creative_content_pipeline.ui.block1.bullet2"
  | "creative_content_pipeline.ui.block1.bullet3"
  | "creative_content_pipeline.ui.block2.title"
  | "creative_content_pipeline.ui.block2.body"
  | "creative_content_pipeline.ui.block2.bullet1"
  | "creative_content_pipeline.ui.block2.bullet2"
  | "creative_content_pipeline.ui.block2.bullet3"
  | "creative_content_pipeline.ui.block3.title"
  | "creative_content_pipeline.ui.block3.body"
  | "creative_content_pipeline.ui.block3.bullet1"
  | "creative_content_pipeline.ui.block3.bullet2"
  | "creative_content_pipeline.ui.block3.bullet3"
  | "creative_content_pipeline.ui.faq.side_title"
  | "creative_content_pipeline.ui.faq.side_body"
  | "creative_content_pipeline.ui.faq.q1"
  | "creative_content_pipeline.ui.faq.a1"
  | "creative_content_pipeline.ui.faq.q2"
  | "creative_content_pipeline.ui.faq.a2"
  | "creative_content_pipeline.ui.faq.q3"
  | "creative_content_pipeline.ui.faq.a3"
  | "creative_content_pipeline.ui.faq.q4"
  | "creative_content_pipeline.ui.faq.a4"
  | "creative_content_pipeline.ui.faq.cta"
  | "seo.gameplay_trailer.title"
  | "seo.gameplay_trailer.desc"
  | "seo.steam_wishlist_calculator.title"
  | "seo.steam_wishlist_calculator.desc"
  | "seo.steam_pricing_planner.title"
  | "seo.steam_pricing_planner.desc"
  | "seo.steam_influencers_planner.title"
  | "seo.steam_influencers_planner.desc"
  | "seo.steam_festival_planner.title"
  | "seo.steam_festival_planner.desc"
  | "seo.creative_content_pipeline.title"
  | "seo.creative_content_pipeline.desc"
  | "seo.paid_growth.title"
  | "seo.paid_growth.desc"
  | "seo.game_launch_blueprint.title"
  | "seo.game_launch_blueprint.desc"
  | "seo.games_co_publishing.title"
  | "seo.games_co_publishing.desc"
  | "seo.blog.masterclass.title"
  | "seo.blog.masterclass.desc"
  | "legal.content_rules.meta_title"
  | "legal.content_rules.meta_desc"
  | "legal.content_rules.title"
  | "legal.content_rules.lede"
  | "legal.content_rules.section1.title"
  | "legal.content_rules.section1.body"
  | "legal.content_rules.section2.title"
  | "legal.content_rules.section2.body"
  | "legal.content_rules.section3.title"
  | "legal.content_rules.section3.body"
  | "legal.content_rules.section4.title"
  | "legal.content_rules.section4.body"
  | "legal.copyright.meta_title"
  | "legal.copyright.meta_desc"
  | "legal.copyright.title"
  | "legal.copyright.lede"
  | "legal.copyright.section1.title"
  | "legal.copyright.section1.body"
  | "legal.copyright.section2.title"
  | "legal.copyright.section2.body"
  | "legal.copyright.section3.title"
  | "legal.copyright.section3.body"
  | "footer.tagline"
  | "footer.all_rights_reserved"
  | "footer.notice_at_collection"
  | "footer.privacy_choices"
  | "about.hero.title"
  | "about.hero.subtitle"
  | "about.hero.cta_primary"
  | "about.hero.cta_secondary"
  | "about.how_we_think.title"
  | "about.how_we_think.body"
  | "about.principle.01.title"
  | "about.principle.01.body"
  | "about.principle.02.title"
  | "about.principle.02.body"
  | "about.principle.03.title"
  | "about.principle.03.body"
  | "about.what_you_get.title"
  | "about.what_you_get.body"
  | "about.outcome.label"
  | "about.outcome.01.title"
  | "about.outcome.01.body"
  | "about.outcome.02.title"
  | "about.outcome.02.body"
  | "about.outcome.03.title"
  | "about.outcome.03.body"
  | "about.outcome.04.title"
  | "about.outcome.04.body"
  | "about.principles.title"
  | "about.principles.body"
  | "about.value.04.title"
  | "about.value.04.body"
  | "about.value.05.title"
  | "about.value.05.body"
  | "about.value.06.title"
  | "about.value.06.body"
  | "form_page.title"
  | "form_page.subtitle"
  | "form_page.bullet.01"
  | "form_page.bullet.02"
  | "form_page.bullet.03"
  | "work_with_us_form.field_full_name"
  | "work_with_us_form.field_company"
  | "work_with_us_form.field_email"
  | "work_with_us_form.field_message"
  | "work_with_us_form.subscribe"
  | "work_with_us_form.submit_sending"
  | "work_with_us_form.submit"
  | "work_with_us_form.privacy_note"
  | "work_with_us_form.success"
  | "work_with_us_form.error_generic"
  | "work_with_us_form.error_network"
  | "form.get_a_quote.title"
  | "form.get_a_quote.subtitle"
  | "form.get_a_quote.message_whatsapp"
  | "form.get_a_quote.card_title"
  | "form.get_a_quote.field_name"
  | "form.get_a_quote.field_company"
  | "form.get_a_quote.field_email"
  | "form.get_a_quote.submit_sending"
  | "form.get_a_quote.submit_send"
  | "form.get_a_quote.success"
  | "form.get_a_quote.error_generic"
  | "form.get_a_quote.error_network"
  | "blog_quote_banner.banner.title"
  | "blog_quote_banner.banner.subtitle"
  | "blog_quote_banner.banner.cta"
  | "blog_quote_banner.modal.title"
  | "blog_quote_banner.modal.subtitle"
  | "blog_quote_banner.modal.close"
  | "blog_quote_banner.success"
  | "blog_quote_banner.error_generic"
  | "blog_quote_banner.error_network";

const COPY_PARTIAL: Record<Locale, Partial<Record<CopyKey, string>>> = {
  en: {
    "nav.about_us": "About Us",
    "nav.services": "Services",
    "nav.our_cases": "Our Cases",
    "nav.blog": "Blog",
    "cta.work_with_us": "Work with us",
    "cta.read_the_blog": "Read the blog",
    "cta.lets_talk": "Let’s talk",
    "hero.badge.01": "Performance Marketing",
    "hero.badge.02": "Social Media",
    "hero.badge.03": "Go-to-Market Strategy",
    "hero.kicker": "Marketing for Games",
    "hero.subhead": "We help studios, publishers, and indie teams launch, grow, and scale games with polished, performance-led marketing.",
    "hero.body": "Strategy-first, execution-focused — built for Steam realities and real production constraints.",
    "hero.cta_contact": "Contact us",
    "cases.title": "Case Studies",
    "cases.subtitle": "Real campaigns for real games.",
    "cases.cta_view_case": "View case study",
    "cases.cta_view_all": "View all case studies",
    "cases.fallback_metric": "Case study",
    "cases.metric.war_thunder_youtube_europe": "1M+ views per month",
    "cases.metric.enlisted_twitch_ads": "Reached 1,500+ new players",
    "cases.metric.crossout_new_players": "Expanded reach in Europe and the US",
    "cases.metric.war_thunder_performance_based": "Monthly creator activations with KPI focus",
    "cases.metric.world_of_tanks_usa": "Launched USA campaigns with structured creator delivery",
    "cases.metric.brief_for_youtube_twitch": "Clear creator direction and execution system",
    "cases.result.enlisted_twitch_ads": "Reached 1,500+ new players",
    "cases.result.crossout_new_players": "Expanded reach in Europe and the US",
    "cases.result.war_thunder_performance_based": "Monthly creator activations with KPI focus",
    "cases.result.world_of_tanks_usa": "Launched USA campaigns with structured creator delivery",
    "cases.result.brief_for_youtube_twitch": "Clear creator direction and execution system",
    "cases.result.war_thunder_youtube_europe": "1M+ views per month",
    "cases.desc_override.war_thunder_youtube_europe":
      "YouTube ad campaigns for War Thunder delivering 1,000,000+ views every month across key European regions.",
    "services.title": "Global Services",
    "services.subtitle":
      "Deeper, end-to-end systems for studios that want predictable outcomes — not one-off tasks.",
    "services.panel.blueprint.title": "Game Launch Blueprint",
    "services.panel.blueprint.desc":
      "Positioning, messaging, timeline, and channel mix. A clear plan that removes chaos, aligns the team, and makes execution predictable.",
    "services.panel.blueprint.ghost": "STRATEGY / MESSAGING / EXECUTION",
    "services.panel.paid_growth.title": "Paid Growth",
    "services.panel.paid_growth.desc":
      "We set up paid campaigns the right way: channel selection, tracking, targeting, and structure. Built for control, measurement, and clean handoff.",
    "services.panel.paid_growth.ghost": "ACQUISITION / ANALYTICS / SCALE",
    "services.panel.creative.title": "Creative Content Pipeline",
    "services.panel.creative.desc":
      "A consistent pipeline for trailers, shortform, and store assets. Built for speed, iteration, and platform-native distribution.",
    "services.panel.creative.ghost": "PRODUCTION | ADAPTATION | PERFORMANCE",
    "services.mobile_hint": "Tap to explore",
    "packages.title": "Ready-to-Go Packages",
    "packages.price_label": "Price:",
    "packages.cta_learn_more": "Learn more",
    "packages.media_video_label": "Video",
    "packages.card.reddit.title": "Reddit\nLaunch Support",
    "packages.card.reddit.desc":
      "We drive a launch burst on Reddit in the most relevant subreddits for your game: we’ll craft and publish 15 high engagement posts, spark meaningful discussions and generate organic interest at release by real users",
    "packages.card.pr_starter.title": "PR Starter Pack",
    "packages.card.pr_starter.desc":
      "PR outreach that gets your game covered. A readable press release, targeted pitches, follow ups, and the full contact list. Built for credibility and Steam wishlists.",
    "packages.card.influencer_micro.title": "Influencer\nMicro Campaign",
    "packages.card.influencer_micro.desc":
      "We identify niche creators, coordinate content activations and track performance. Cost-efficient, scalable and built for meaningful reach.",
    "packages.card.tiktok_20.title": "TikTok Package:\n20 videos",
    "packages.card.tiktok_20.desc":
      "20 custom TikTok videos tailored for your game. We handle the concept, production and formatting, align with platform trends and audience behaviour.",
    "packages.card.paid_ads_setup.title": "Paid Ads Setup",
    "packages.card.paid_ads_setup.desc":
      "We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included.",
    "packages.card.gameplay_trailer.title": "Gameplay Trailer",
    "packages.card.gameplay_trailer.desc":
      "A complete, high quality gameplay trailer crafted specifically for your game. Clear storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
    "seo.site.name": "TrapPlan",
    "seo.site.description": "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing.",
    "seo.about.title": "About Us",
    "seo.about.desc": "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing systems.",
    "seo.blog.title": "Gaming Marketing Blog | Industry Trends & Tips",
    "seo.blog.desc":
      "Stay up-to-date with the latest trends in gaming influencer marketing. TrapPlan's blog covers tips, case studies, and strategies to help brands succeed in the gaming industry.",
    "seo.our_cases.title": "Our Cases",
    "seo.our_cases.desc": "Selected outcomes and case studies from TrapPlan.",
    "seo.no_wishlists.title": "No Wishlists on Steam",
    "seo.no_wishlists.desc": "What to do when your Steam page gets traffic but wishlists do not grow.",
    "seo.reddit_launch_support.title": "Reddit Launch Support: Organic Steam Traffic Without Backlash",
    "seo.reddit_launch_support.desc":
      "A 15 post organic Reddit campaign designed to drive Steam wishlists without triggering the usual marketing backlash.",
    "seo.pr_starter_pack.title": "PR Starter Pack: Get the Coverage Your Game Deserves",
    "seo.pr_starter_pack.desc":
      "PR outreach for indie games. A readable press release, targeted pitches, follow ups, and a clear contact list. Built to earn credibility and Steam Wishlists.",
    "seo.tiktok_20.title": "TikTok Package: 20 Videos",
    "seo.tiktok_20.desc":
      "Get 20 TikTok videos tailored for your game: hooks, scripts, editing, and a clear content plan designed to drive wishlists and awareness.",
    "seo.influencer_micro.title": "Influencer Micro Campaign: Cost-Efficient Reach That Converts",
    "seo.influencer_micro.desc": "A micro-influencer activation sprint for games: niche creator selection, outreach, coordination, tracking and a clear report. Built for meaningful reach and Steam wishlists.",
    "seo.influencer_activation.title": "Influencer Activation for Games: Coverage That Converts.",
    "seo.influencer_activation.desc": "We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and post-campaign learnings. Repeatable, measurable, and built for games.",
    "influencer_activation.badge": "Service",
    "influencer_activation.hero.title": "Influencer Activation for Games",
    "influencer_activation.hero.kicker": "Coverage that converts into wishlists.",
    "influencer_activation.hero.body":
      "We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and learnings. Repeatable execution instead of random emails.",
    "influencer_activation.how_it_works.kicker": "HOW IT WORKS",
    "influencer_activation.how_it_works.title": "One sprint, one loop",
    "influencer_activation.phase.01.kicker": "PHASE 1",
    "influencer_activation.phase.01.title": "Preparation",
    "influencer_activation.phase.01.desc": "Targeting, angles, assets, tracking.",
    "influencer_activation.phase.02.kicker": "PHASE 2",
    "influencer_activation.phase.02.title": "Activation",
    "influencer_activation.phase.02.desc": "Outreach, follow-ups, scheduling.",
    "influencer_activation.phase.03.kicker": "PHASE 3",
    "influencer_activation.phase.03.title": "Post Mortem",
    "influencer_activation.phase.03.desc": "Report, learnings, next sprint.",
    "influencer_activation.deliverables.kicker": "WHAT YOU GET",
    "influencer_activation.deliverables.title": "Deliverables",
    "influencer_activation.deliverables.01": "Creator list by tier and audience fit",
    "influencer_activation.deliverables.02": "Outreach templates and follow-up sequence",
    "influencer_activation.deliverables.03": "Keys/build distribution + scheduling",
    "influencer_activation.deliverables.04": "Coverage tracking sheet + weekly updates",
    "influencer_activation.deliverables.05": "Post-campaign report with learnings",
    "influencer_activation.deliverables.06": "Next activation sprint plan",
    "influencer_activation.faq.kicker": "FAQ",
    "influencer_activation.faq.title": "Frequently Asked Questions",
    "influencer_activation.faq.01.q": "Do you guarantee coverage?",
    "influencer_activation.faq.01.a":
      "No service can guarantee coverage, but we increase hit rate with better targeting, sequencing, and follow-ups.",
    "influencer_activation.faq.02.q": "Which platforms do you activate?",
    "influencer_activation.faq.02.a":
      "Twitch, YouTube, and TikTok — we tailor the format and the creator list per platform.",
    "influencer_activation.faq.03.q": "How do you measure impact?",
    "influencer_activation.faq.03.a":
      "We track coverage, views, link clicks and time-window lift with UTMs and structured reporting.",
    "influencer_activation.contact.title": "Ready to plan your first activation sprint?",
    "influencer_activation.contact.body": "Share the basics and we'll reply with the next steps.",
    "influencer_activation.contact.card_kicker": "CONTACT",
    "influencer_activation.contact.card_title": "Let's talk",
    "influencer_activation.contact.field.name.label": "Name",
    "influencer_activation.contact.field.name.placeholder": "Your full name",
    "influencer_activation.contact.field.studio.label": "Studio name",
    "influencer_activation.contact.field.studio.placeholder": "Your studio",
    "influencer_activation.contact.field.steam.label": "Steam page / Demo link",
    "influencer_activation.contact.field.steam.placeholder": "https://store.steampowered.com/app/...",
    "influencer_activation.contact.submit": "Send",
    "blog.og.subtitle": "Read the full article on trapplan.com",
    "blog.ui.home": "Home",
    "blog.ui.blog": "Blog",
    "blog.ui.back_to_blog": "Back to Blog",
    "blog.ui.min_read": "min read",
    "blog.ui.no_posts_found": "No posts found.",
    "games_co_publishing.cta.lets_talk": "Let’s talk",
    "games_co_publishing.hero.title": "Games Co-Publishing",
    "games_co_publishing.hero.kicker":
      "Release better. A marketing-first partnership to help your game get discovered.",
    "games_co_publishing.hero.body":
      "We don't finance production. We bring a focused go-to-market team, activation budget, and a structured execution loop. Built for teams who want commercial performance without marketing chaos.",
    "games_co_publishing.model.kicker": "OUR CO-PUBLISHING MODEL",
    "games_co_publishing.model.title": "What we bring",
    "games_co_publishing.model.body":
      "A marketing-driven partnership designed to increase visibility, validate demand, and improve commercial performance.",
    "games_co_publishing.model.pillar_label": "PILLAR",
    "games_co_publishing.model.pillar.01.title": "Marketing Team and Budget",
    "games_co_publishing.model.pillar.01.body":
      "We bring a dedicated marketing team and an activation budget. We focus on visibility, positioning, and commercial performance.",
    "games_co_publishing.model.pillar.02.title": "Flexible, Modular Partnership",
    "games_co_publishing.model.pillar.02.body":
      "Every game has its own constraints and partners. We build a modular plan around your scope, timeline, and long-term vision.",
    "games_co_publishing.model.pillar.03.title": "Built for Shareability",
    "games_co_publishing.model.pillar.03.body":
      "We work best with games that players love showing to others: strong retention, deep systems, and streamable moments.",
    "games_co_publishing.execution.kicker": "WHAT WE HANDLE",
    "games_co_publishing.execution.title": "Execution areas",
    "games_co_publishing.execution.body": "Five execution lanes. Built for momentum.",
    "games_co_publishing.execution.area.01.title": "Massive Organic Content",
    "games_co_publishing.execution.area.01.body":
      "We produce hundreds of pieces of native content to dominate the feeds. We scale what works across TikTok, Reels, and Shorts to generate millions of views and flood your Steam page with organic traffic at zero additional cost per click.",
    "games_co_publishing.execution.area.02.title": "Steam Page Conversion",
    "games_co_publishing.execution.area.02.body":
      "We turn viral views into wishlists. Through aggressive A/B testing of capsules and trailers, we optimize your Click-Through Rate (CTR) to ensure your storefront actually captures the massive traffic we send.",
    "games_co_publishing.execution.area.03.title": "Paid Traffic Acquisition",
    "games_co_publishing.execution.area.03.body":
      "We fund and run precision ad campaigns across X, Reddit, and YouTube. This provides the external signals Steam needs to boost your game’s internal ranking and keep your wishlist velocity high between content spikes.",
    "games_co_publishing.execution.area.04.title": "Influencer & Creator Blitz",
    "games_co_publishing.execution.area.04.body":
      "We bypass the noise. We have a dedicated network of Steam-focused creators. We coordinate paid coverage and organic outreach to hit the \"Popular Upcoming\" list and secure a spot in the Top Sellers.",
    "games_co_publishing.execution.area.05.title": "Launch Momentum & ROI",
    "games_co_publishing.execution.area.05.body":
      "Everything builds toward a Day 1 spike. We sync every piece of content and marketing beat to trigger the Steam algorithm, followed by total data transparency so you see exactly how we maximize your profit.",
    "games_co_publishing.process.kicker": "PROCESS",
    "games_co_publishing.process.title": "How we work",
    "games_co_publishing.process.step.01.label": "STEP 1",
    "games_co_publishing.process.step.01.title": "Build Evaluation",
    "games_co_publishing.process.step.01.body":
      "We test your build against Steam’s current market trends. We identify the \"hook\" that will drive organic storefront visibility.",
    "games_co_publishing.process.step.02.label": "STEP 2",
    "games_co_publishing.process.step.02.title": "Wishlist Campaign",
    "games_co_publishing.process.step.02.body":
      "We activate our network of streamers and PR. We don't just \"get clicks\"—we build a massive pre-launch wishlist base to guarantee a strong Day 1.",
    "games_co_publishing.process.step.03.label": "STEP 3",
    "games_co_publishing.process.step.03.title": "Sales Lifecycle Management",
    "games_co_publishing.process.step.03.body":
      "Execution is data-driven. We manage your Steam Next Fest strategy, seasonal sales, and bundles to maximize long-tail revenue.",
    "games_co_publishing.faq.kicker": "FAQ",
    "games_co_publishing.faq.title": "Frequently Asked Questions",
    "games_co_publishing.faq.01.q": "What stage should my project be in to apply?",
    "games_co_publishing.faq.01.a":
      "A playable build (Vertical Slice or Beta) is mandatory. We need to evaluate the core gameplay and technical execution. Having an existing Steam page is optional — we can help you build it from the ground up.",
    "games_co_publishing.faq.02.q": "Do you provide funding for game production?",
    "games_co_publishing.faq.02.a":
      "No, we do not provide development grants or milestone funding. Our role is Co-publishing: we cover the full financial risk of marketing and operations, allowing you to focus entirely on finishing the game.",
    "games_co_publishing.faq.03.q": "Which regions do you work with and how are payments handled?",
    "games_co_publishing.faq.03.a":
      "We work with developers worldwide. We handle all legal and financial complexities, including international transfers and taxes. We ensure stable and timely payouts regardless of your team's location or local banking restrictions.",
    "games_co_publishing.faq.04.q": "What exactly does your Co-publishing support include?",
    "games_co_publishing.faq.04.a":
      "We provide a full-cycle marketing suite:\n\nUser Acquisition: Funding and managing traffic to your Steam page.\n\nInfluencer & PR: Strategic outreach to streamers and gaming press.\n\nPlatform Operations: Management of Steam Next Fest, seasonal sales, and daily deals.\n\nAssets: Creation of high-conversion trailers and Steam capsule art.",
    "games_co_publishing.faq.05.q": "Will I have access to sales and marketing data?",
    "games_co_publishing.faq.05.a":
      "Yes, absolutely. We believe in total transparency. You will have full access to real-time sales statistics, marketing spend reports, and analytical data. No \"black boxes.\"",
    "games_co_publishing.faq.06.q": "Do you support the game after the initial launch?",
    "games_co_publishing.faq.06.a":
      "Yes. Our partnership is long-term. We manage the post-launch \"long tail\" by planning seasonal sales, bundles, and DLC strategies to keep the game profitable for years after release.",
    "games_co_publishing.faq.07.q": "What genres are you looking for?",
    "games_co_publishing.faq.07.a":
      "We prioritize games with deep gameplay and high replayability. We are especially interested in RPGs, Strategies, Simulators, and Action-Roguelikes. We currently do not work with Visual Novels or projects relying on AI-generated content.",
    "games_co_publishing.faq.08.q": "Who owns the IP and the Steam page?",
    "games_co_publishing.faq.08.a":
      "You retain 100% of the IP and code. The Steam page can be hosted on your account or ours, depending on what works best for the project’s strategy. This is always clearly defined in our agreement.",
    "games_co_publishing.faq.09.q": "Do you help with localization or QA?",
    "games_co_publishing.faq.09.a":
      "No. We do not provide localization or technical testing services. We expect the developer to deliver a stable, polished build in its final supported languages.",
    "games_co_publishing.faq.10.q": "How does the Revenue Share work?",
    "games_co_publishing.faq.10.a":
      "After Steam’s commission, we recoup our direct marketing investments. Once the initial spend is recovered, the net profit is split in a pre-agreed proportion (e.g., 70/30 in favor of the developer).",
    "games_co_publishing.contact.title": "Ready to talk co-publishing?",
    "games_co_publishing.contact.body":
      "Send the basics and we’ll reply with next steps: fit assessment, suggested milestone, and what we need to review.",
    "games_co_publishing.contact.card_kicker": "CONTACT",
    "games_co_publishing.contact.card_title": "Let’s talk",
    "games_co_publishing.contact.field.name.label": "Name",
    "games_co_publishing.contact.field.name.placeholder": "Your full name",
    "games_co_publishing.contact.field.studio.label": "Studio name",
    "games_co_publishing.contact.field.studio.placeholder": "Your studio",
    "games_co_publishing.contact.field.message.label": "Message",
    "games_co_publishing.contact.field.message.placeholder":
      "Tell us about your game, timeline, and what you need help with.",
    "games_co_publishing.contact.submit": "Send",
    "tools.ui.free_tools": "Free Tools",
    "tools.ui.loading_tool": "Loading interactive tool...",
    "tools.steam_festival_planner.name": "Steam Festival Planner",
    "tools.steam_festival_planner.ld.description":
      "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
    "tools.steam_festival_planner.sr.title": "Steam Festival Planner",
    "tools.steam_festival_planner.sr.body":
      "Browse Steam festivals and sales. Filter events by type and genre, and enter an AppID to highlight events that fit your game.",
    "tools.steam_festival_planner.ui.smart_match.title": "Smart Match: Events for your game",
    "tools.steam_festival_planner.ui.smart_match.body":
      "Enter a Steam AppID and the planner will highlight festivals that match your game genres.",
    "tools.steam_festival_planner.ui.appid.placeholder": "AppID (example: 1086940)",
    "tools.steam_festival_planner.ui.analyze": "Analyze",
    "tools.steam_festival_planner.ui.game_name": "Game name",
    "tools.steam_festival_planner.ui.genres": "Genres",
    "tools.steam_festival_planner.ui.search.placeholder": "Search events",
    "tools.steam_festival_planner.ui.filters.all": "All events",
    "tools.steam_festival_planner.ui.filters.free": "Free",
    "tools.steam_festival_planner.ui.filters.major": "Major",
    "tools.steam_festival_planner.ui.filters.themed": "Themed",
    "tools.steam_festival_planner.ui.filters.indie": "Indie showcases",
    "tools.steam_festival_planner.ui.loading_events": "Loading events...",
    "tools.steam_pricing_planner.name": "Steam Pricing Planner",
    "tools.steam_pricing_planner.ld.name": "Steam Regional Pricing & PPP Calculator",
    "tools.steam_pricing_planner.ld.description":
      "Professional tool for game developers to calculate Steam regional prices using Purchasing Power Parity (PPP) and real-time FX rates.",
    "tools.steam_pricing_planner.sr.title": "Steam Regional Pricing Planner",
    "tools.steam_pricing_planner.sr.body":
      "Calculate recommended regional prices for your Steam game using Purchasing Power Parity adjustments and live FX rates.",
    "tools.steam_pricing_planner.ui.h2": "Steam Regional Pricing Tool",
    "tools.steam_pricing_planner.ui.body":
      "Calculate recommended prices for your Steam game across all global regions including China, Russia, Brazil, Turkey (USD), and CIS (USD). Our calculator uses Purchasing Power Parity (PPP) and live exchange rates (FX).",
    "tools.steam_wishlist_calculator.name": "Steam Wishlist Calculator",
    "tools.steam_wishlist_calculator.ld.description":
      "Tool for indie developers to estimate wishlists, traffic and budget for Steam sales targets.",
    "tools.steam_wishlist_calculator.sr.title": "Steam Wishlist and Marketing Forecast Tool",
    "tools.steam_wishlist_calculator.sr.body":
      "Estimate wishlists, Steam page visits, and an indicative paid budget to reach your week 1 sales goal. This calculator helps indie teams plan realistic launch targets.",
    "tools.steam_wishlist_calculator.ui.title": "Steam Wishlist Calculator",
    "tools.steam_wishlist_calculator.ui.subtitle":
      "Estimate required wishlists, traffic and budget to hit your week 1 sales target",
    "tools.steam_wishlist_calculator.ui.card.goal": "Goal",
    "tools.steam_wishlist_calculator.ui.card.funnel": "Funnel",
    "tools.steam_wishlist_calculator.ui.card.results": "Results",
    "tools.steam_wishlist_calculator.ui.goal.target_sales": "Target sales (week 1)",
    "tools.steam_wishlist_calculator.ui.goal.price": "Price",
    "tools.steam_wishlist_calculator.ui.goal.steam_cut": "Steam cut, %",
    "tools.steam_wishlist_calculator.ui.goal.adjustments": "Adjustments, %",
    "tools.steam_wishlist_calculator.ui.goal.adjustments_help":
      "Adjustments include refunds, regional pricing, and taxes.",
    "tools.steam_wishlist_calculator.ui.funnel.preset.conservative": "Conservative",
    "tools.steam_wishlist_calculator.ui.funnel.preset.base": "Base",
    "tools.steam_wishlist_calculator.ui.funnel.preset.optimistic": "Optimistic",
    "tools.steam_wishlist_calculator.ui.funnel.wl_to_sales": "Wishlist to sales (week 1), %",
    "tools.steam_wishlist_calculator.ui.funnel.visit_to_wl": "Visit to wishlist, %",
    "tools.steam_wishlist_calculator.ui.funnel.estimate_paid": "Estimate paid budget",
    "tools.steam_wishlist_calculator.ui.funnel.cpc": "CPC",
    "tools.steam_wishlist_calculator.ui.funnel.calculate": "Calculate",
    "tools.steam_wishlist_calculator.ui.results.required_wl": "Required wishlists at launch",
    "tools.steam_wishlist_calculator.ui.results.required_visits": "Required Steam page visits",
    "tools.steam_wishlist_calculator.ui.results.net_revenue": "Estimated week 1 net revenue",
    "tools.steam_wishlist_calculator.ui.results.paid_budget": "Estimated paid budget",
    "tools.steam_wishlist_calculator.ui.bottom_note":
      "Numbers don't launch games. Execution does.",
    "get_a_quote.ceo_title": "CEO Trap Plan Agency",
    "tools.steam_pricing_planner.script.title": "Steam Pricing Planner & Calculator",
    "tools.steam_pricing_planner.script.subtitle":
      "Determine optimal game prices using FX rates and Purchasing Power Parity adjustments.",
    "tools.steam_pricing_planner.script.section.game_parameters": "Game Parameters",
    "tools.steam_pricing_planner.script.field.genre": "Genre",
    "tools.steam_pricing_planner.script.field.gameplay_length": "Gameplay Length (Hours)",
    "tools.steam_pricing_planner.script.field.base_usd_price": "Base USD Price",
    "tools.steam_pricing_planner.script.field.base_usd_price_placeholder": "Auto-suggest",
    "tools.steam_pricing_planner.script.field.sale_discount": "Sale Discount",
    "tools.steam_pricing_planner.script.cta.calculate": "Calculate Regional Prices",
    "tools.steam_pricing_planner.script.section.regional_recommendations": "Regional Recommendations",
    "tools.steam_pricing_planner.script.metric.anchor_price": "Anchor Price",
    "tools.steam_pricing_planner.script.filter_country_placeholder": "Search country...",
    "tools.steam_pricing_planner.script.table.country": "Country",
    "tools.steam_pricing_planner.script.table.currency": "Currency",
    "tools.steam_pricing_planner.script.table.suggested_price": "Suggested Price",
    "tools.steam_pricing_planner.script.table.sale_price": "Sale Price",
    "tools.steam_pricing_planner.script.show_all": "Show all 40+ countries",
    "tools.steam_pricing_planner.script.empty.no_countries": "No countries found.",
    "tools.steam_pricing_planner.script.status.syncing_fx": "Syncing FX...",
    "tools.steam_pricing_planner.script.status.could_not_load_fx": "Could not load FX rates.",
    "tools.steam_pricing_planner.script.status.fx_offline": "FX Offline",
    "tools.steam_pricing_planner.script.status.fx_source": "Source: {source}",
    "tools.steam_pricing_planner.script.reason.manual_setting": "Manual setting.",
    "tools.steam_pricing_planner.script.reason.based_on_genre_length": "Based on genre and length.",
    "tools.steam_festival_planner.script.empty.no_events_loaded":
      "No events loaded. Please try again later.",
    "tools.steam_festival_planner.script.empty.failed_load_db":
      "Failed to load the events database.",
    "tools.steam_festival_planner.script.empty.no_events_found": "No events found",
    "tools.steam_festival_planner.script.status.closed": "Closed",
    "tools.steam_festival_planner.script.status.open": "Open",
    "tools.steam_festival_planner.script.status.closes_in_days": "Closes in {days} days",
    "tools.steam_festival_planner.script.field.status_label": "Status",
    "tools.steam_festival_planner.script.cta.apply": "Apply for Festival",
    "tools.steam_festival_planner.script.cta.closed": "Closed",
    "tools.steam_festival_planner.script.badge.match": "MATCH",
    "tools.steam_festival_planner.script.fallback.free": "Free",
    "tools.steam_festival_planner.script.fallback.event": "Event",
    "tools.steam_festival_planner.script.analyzing": "Analyzing...",
    "tools.steam_festival_planner.script.analyze": "Analyze",
    "tools.steam_festival_planner.script.genres_prefix": "Genres: ",
    "tools.steam_festival_planner.script.alert_game_not_found": "Game not found.",
    "structured.organization.description":
      "TrapPlan is a specialized game marketing agency helping indie and AA studios grow Steam wishlists and game sales through influencers, community-driven marketing, and structured launch support.",
    "structured.website.description":
      "Game marketing agency specializing in Steam wishlists, influencer campaigns, and launch strategies for indie and AA game studios.",
    "structured.professional_service.name": "TrapPlan Game Marketing Agency",
    "structured.organization.service_type.01": "Game Marketing",
    "structured.organization.service_type.02": "Steam Wishlist Growth",
    "structured.organization.service_type.03": "Paid Growth",
    "structured.organization.service_type.04": "Creative Content Pipeline",
    "structured.service_catalog.name": "Game Marketing Services",
    "structured.service.blueprint.name": "Game Launch Blueprint",
    "structured.service.blueprint.desc":
      "A clear launch plan for your game: positioning, audience, messaging, timeline and channel mix.",
    "structured.service.paid_growth.name": "Paid Growth",
    "structured.service.paid_growth.desc":
      "Paid campaign setup and structure: channel selection, tracking, targeting and clean handoff.",
    "structured.service.creative.name": "Creative Content Pipeline",
    "structured.service.creative.desc":
      "A pipeline for trailers, shortform and store assets built for iteration and distribution.",
    "paid_ads_setup.ui.hero.title_line_1": "Paid ads.",
    "paid_ads_setup.ui.hero.title_line_2": "Set up once. Launch clean.",
    "paid_ads_setup.ui.hero.body":
      "We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included.",
    "paid_ads_setup.ui.hero.cta": "Let’s Start",
    "paid_ads_setup.ui.hero.price": "Price: €2 000",
    "paid_ads_setup.ui.hero.image_alt": "Paid ads setup preview",
    "paid_ads_setup.ui.section2.title_line_1": "Stop burning budget.",
    "paid_ads_setup.ui.section2.title_line_2": "Fix the foundation.",
    "paid_ads_setup.ui.section2.p1":
      "Most paid campaigns fail because the setup is wrong: bad tracking, wrong structure, unclear targeting, and mismatched creatives.",
    "paid_ads_setup.ui.section2.p2":
      "We set the account up correctly so you can launch with confidence and keep control after handoff.",
    "paid_ads_setup.ui.section2.image_alt": "Campaign configuration overview",
    "paid_ads_setup.ui.section3.image_alt": "Paid ads setup mockup",
    "paid_ads_setup.ui.section3.title": "The Paid Ads Setup",
    "paid_ads_setup.ui.section3.bullet.channel_title": "Channel selection:",
    "paid_ads_setup.ui.section3.bullet.channel_text":
      "pick the platforms that match your audience and funnel.",
    "paid_ads_setup.ui.section3.bullet.budget_title": "Budget configuration:",
    "paid_ads_setup.ui.section3.bullet.budget_text":
      "structure spend so it is controllable and measurable.",
    "paid_ads_setup.ui.section3.bullet.targeting_title": "Targeting setup:",
    "paid_ads_setup.ui.section3.bullet.targeting_text":
      "audiences, exclusions, and account hygiene.",
    "paid_ads_setup.ui.section3.bullet.creative_title": "Creative placement:",
    "paid_ads_setup.ui.section3.bullet.creative_text":
      "correct formats and placements per channel.",
    "paid_ads_setup.ui.section3.bullet.handoff_title": "Handoff:",
    "paid_ads_setup.ui.section3.bullet.handoff_text":
      "you get a clean account ready to run.",
    "paid_ads_setup.ui.section3.cta": "Let’s Start",
    "paid_ads_setup.ui.section4.title": "How It Works",
    "paid_ads_setup.ui.section4.step1.title": "Scope",
    "paid_ads_setup.ui.section4.step1.text":
      "We align on your goals, funnel, budget and constraints.",
    "paid_ads_setup.ui.section4.step2.title": "Configure",
    "paid_ads_setup.ui.section4.step2.text":
      "We set up structure, targeting, placements and tracking.",
    "paid_ads_setup.ui.section4.step3.title": "Launch",
    "paid_ads_setup.ui.section4.step3.text":
      "We help you launch clean with the right settings in place.",
    "paid_ads_setup.ui.section4.step4.title": "Handoff",
    "paid_ads_setup.ui.section4.step4.text":
      "You get full access and a clear setup you can manage.",
    "paid_ads_setup.ui.section4.cta": "Let’s Start",
    "game_launch_blueprint.ui.cta.lets_talk": "Let's talk",
    "game_launch_blueprint.ui.hero.badge": "Blueprint Service",
    "game_launch_blueprint.ui.hero.title": "Game Launch Blueprint",
    "game_launch_blueprint.ui.hero.subtitle": "Your Marketing, Powered by Our Systems.",
    "game_launch_blueprint.ui.hero.body":
      "Stop guessing your next move. We provide a standardized, publisher grade workflow that turns your dev milestones into high impact marketing beats. You keep the control; we provide the roadmap.",
    "game_launch_blueprint.ui.workflow.kicker": "HOW IT WORKS",
    "game_launch_blueprint.ui.workflow.title": "Every milestone follows one loop",
    "game_launch_blueprint.ui.workflow.image_placeholder": "IMAGE PLACEHOLDER",
    "game_launch_blueprint.ui.workflow.phase1.label": "PHASE 1",
    "game_launch_blueprint.ui.workflow.phase1.title": "Preparation",
    "game_launch_blueprint.ui.workflow.phase1.body":
      "We build the Master Strategy, Steam assets, trailers, and influencer databases.",
    "game_launch_blueprint.ui.workflow.phase2.label": "PHASE 2",
    "game_launch_blueprint.ui.workflow.phase2.title": "The Bit (Live)",
    "game_launch_blueprint.ui.workflow.phase2.body":
      "We execute the launch, opening the trailer, pushing Reddit, activating Discord, and running ads.",
    "game_launch_blueprint.ui.workflow.phase3.label": "PHASE 3",
    "game_launch_blueprint.ui.workflow.phase3.title": "Post Mortem",
    "game_launch_blueprint.ui.workflow.phase3.body":
      "Two weeks later, you get a full analytical report on what worked and the plan for the next phase.",
    "game_launch_blueprint.ui.build.kicker": "WHAT WE BUILD",
    "game_launch_blueprint.ui.build.title": "What We Build Together",
    "game_launch_blueprint.ui.build.item.01": "Master Strategy (Key Doc)",
    "game_launch_blueprint.ui.build.item.02": "Positioning and audience",
    "game_launch_blueprint.ui.build.item.03": "Communication roadmap",
    "game_launch_blueprint.ui.build.item.04": "Steam page setup",
    "game_launch_blueprint.ui.build.item.05": "Marketing assets",
    "game_launch_blueprint.ui.build.item.06": "Paid Ads",
    "game_launch_blueprint.ui.build.item.07": "Discord Server",
    "game_launch_blueprint.ui.build.item.08": "News outreach",
    "game_launch_blueprint.ui.build.item.09": "Influencer outreach",
    "game_launch_blueprint.ui.build.item.10": "Retention analytics",
    "game_launch_blueprint.ui.build.item.11": "Localization planning",
    "game_launch_blueprint.ui.build.item.12": "Steam bundle support",
    "game_launch_blueprint.ui.best_fit.kicker": "BEST FIT",
    "game_launch_blueprint.ui.best_fit.title": "Best Fit",
    "game_launch_blueprint.ui.best_fit.body":
      "Quick check to see if this offer matches your current stage.",
    "game_launch_blueprint.ui.best_fit.status_label": "STATUS",
    "game_launch_blueprint.ui.best_fit.status_text":
      "You have a Steam page, a playable demo, or a fixed release window.",
    "game_launch_blueprint.ui.best_fit.need_label": "NEED",
    "game_launch_blueprint.ui.best_fit.need_text":
      "You want a weekly task system with clear deadlines, not just ideas.",
    "game_launch_blueprint.ui.best_fit.goal_label": "GOAL",
    "game_launch_blueprint.ui.best_fit.goal_text":
      "Professional grade marketing without hiring a full in house department.",
    "game_launch_blueprint.ui.process.kicker": "PROCESS",
    "game_launch_blueprint.ui.process.title": "How we work",
    "game_launch_blueprint.ui.process.step1.label": "STEP 1",
    "game_launch_blueprint.ui.process.step1.title": "Kickoff",
    "game_launch_blueprint.ui.process.step1.body":
      "We collect inputs and define the first milestone.",
    "game_launch_blueprint.ui.process.step2.label": "STEP 2",
    "game_launch_blueprint.ui.process.step2.title": "Execution plan",
    "game_launch_blueprint.ui.process.step2.body":
      "You get a weekly task list with ownership and deadlines.",
    "game_launch_blueprint.ui.process.step3.label": "STEP 3",
    "game_launch_blueprint.ui.process.step3.title": "Report and next plan",
    "game_launch_blueprint.ui.process.step3.body":
      "After the milestone, you get results and adjustments.",
    "game_launch_blueprint.ui.faq.kicker": "FAQ",
    "game_launch_blueprint.ui.faq.title": "Frequently Asked Questions",
    "game_launch_blueprint.ui.faq.q1": "Is this a done for you marketing service?",
    "game_launch_blueprint.ui.faq.a1":
      "No. This is a collaborative process where we provide the system, the standards, and the roadmap, but your team remains involved in the execution. It’s designed for studios that want to maintain control while using a professional framework.",
    "game_launch_blueprint.ui.faq.q2": "Can we start if we don't have a Steam page yet?",
    "game_launch_blueprint.ui.faq.a2":
      "Yes, in fact, starting before the page is live is often better. Our first Bit will focus entirely on your store presence: positioning, choosing the right tags, and preparing high conversion capsule art to ensure your first public appearance is high impact.",
    "game_launch_blueprint.ui.faq.q3": "What exactly is a Post Mortem report?",
    "game_launch_blueprint.ui.faq.a3":
      "Two weeks after every major milestone (a Bit), we deliver a deep dive report that identifies which influencers drove the most wishlists, how players behaved during the playtest, and what exactly needs to change for the next phase.",
    "game_launch_blueprint.ui.faq.q4": "How do you handle influencer outreach?",
    "game_launch_blueprint.ui.faq.a4":
      "We segment our database into news driven influencers for announcements and gameplay driven streamers for playtests and demos. We provide the templates and the schedule, then track the coverage to see who actually converted into wishlists.",
    "game_launch_blueprint.ui.faq.q5": "Do you help with localization and Asian markets?",
    "game_launch_blueprint.ui.faq.a5":
      "Yes. As part of the Logistics block, we help plan your localization strategy and run dedicated PR campaigns for China, Korea, and Japan during the Demo and Release phases.",
    "game_launch_blueprint.ui.faq.q6": "Why is the process broken down into Bits?",
    "game_launch_blueprint.ui.faq.a6":
      "Working bit by bit prevents marketing chaos. It allows us to focus 100% of the team's energy on one milestone at a time, ensuring every step is fully prepared and properly analyzed before moving to the next.",
    "game_launch_blueprint.ui.contact.title": "Ready to start the preparation phase?",
    "game_launch_blueprint.ui.contact.body":
      "Send the basics and we’ll reply with the next steps: which Bit comes first, what to prepare, and how to measure success.",
    "game_launch_blueprint.ui.contact.tag.framework": "Framework",
    "game_launch_blueprint.ui.contact.tag.execution": "Execution",
    "game_launch_blueprint.ui.contact.tag.reporting": "Reporting",
    "game_launch_blueprint.ui.contact.card_kicker": "CONTACT",
    "game_launch_blueprint.ui.contact.card_title": "Let’s build your blueprint",
    "game_launch_blueprint.ui.contact.field.name.label": "Name",
    "game_launch_blueprint.ui.contact.field.name.placeholder": "Your full name",
    "game_launch_blueprint.ui.contact.field.studio.label": "Studio name",
    "game_launch_blueprint.ui.contact.field.studio.placeholder": "Your studio",
    "game_launch_blueprint.ui.contact.field.steam.label": "Steam page / Demo link",
    "game_launch_blueprint.ui.contact.field.steam.placeholder":
      "https://store.steampowered.com/app/...",
    "game_launch_blueprint.ui.contact.send": "Send",
    "tiktok_20.ui.hero.title_01": "20 short videos",
    "tiktok_20.ui.hero.title_02": "for your game to",
    "tiktok_20.ui.hero.title_03": "grow your Steam",
    "tiktok_20.ui.hero.title_04": "Wishlists.",
    "tiktok_20.ui.hero.body":
      "Twenty high impact TikTok videos crafted around your gameplay, hooks and audience triggers. This package gives you a steady flow of content that drives views, followers and wishlist momentum.",
    "tiktok_20.ui.hero.cta": "Start Now",
    "tiktok_20.ui.hero.price": "Price: €2 000",
    "tiktok_20.ui.section2.image_alt": "Macbook chart preview",
    "tiktok_20.ui.section2.title_01": "Views are vanity.",
    "tiktok_20.ui.section2.title_02": "Wishlists are what fund",
    "tiktok_20.ui.section2.title_03": "your launch.",
    "tiktok_20.ui.section2.p1":
      "A million views mean nothing if your Steam chart doesn't move. We focus on high-intent viewers. We show the mechanics, the art style, and the “vibe” that appeals to your specific niche, making sure the people who see your TikTok are the same people who will actually buy your game.",
    "tiktok_20.ui.section3.image_alt_01": "TikTok example 1",
    "tiktok_20.ui.section3.image_alt_02": "TikTok example 2",
    "tiktok_20.ui.section3.image_alt_03": "TikTok example 3",
    "tiktok_20.ui.section3.image_alt_04": "TikTok example 4",
    "tiktok_20.ui.section3.image_alt_05": "TikTok example 5",
    "tiktok_20.ui.section3.title": "The Wishlist-Driven Package",
    "tiktok_20.ui.section3.bullet1.title": "20 Conversion-Ready Videos:",
    "tiktok_20.ui.section3.bullet1.text":
      "We don't just edit gameplay; we build 20 entry points to your Steam store. Each video is optimized to turn a viewer into a \"Wishlister.\"",
    "tiktok_20.ui.section3.bullet2.title": "\"Wishlist Hook\" Editing:",
    "tiktok_20.ui.section3.bullet2.text":
      "Most people skip in 2 seconds. We spend our time perfecting those first 2 seconds to make sure players don't just watch, but head to your bio to find the link.",
    "tiktok_20.ui.section3.bullet3.title": "We Record, You Build:",
    "tiktok_20.ui.section3.bullet3.text":
      "You don't need to capture a thing. We'll dive into your build, find the most \"wishlist-worthy\" mechanics, and record the footage ourselves.",
    "tiktok_20.ui.section3.bullet4.title": "Native Discovery Style:",
    "tiktok_20.ui.section3.bullet4.text":
      "Over-produced ads get ignored. We make your game look like a \"hidden gem\" discovery. This authentic vibe is what actually triggers an Add to Wishlist.",
    "tiktok_20.ui.section3.bullet5.title": "Steam-Focused Captions:",
    "tiktok_20.ui.section3.bullet5.text":
      "We provide the text and call-to-actions that specifically tell people where and why to wishlist your game. Just hit upload.",
    "tiktok_20.ui.section3.cta": "Book a Call",
    "tiktok_20.ui.section4.title": "How It Works",
    "tiktok_20.ui.section4.step1.title": "Briefing",
    "tiktok_20.ui.section4.step1.text": "Tell us about your game and your target audience.",
    "tiktok_20.ui.section4.step2.title": "Capture",
    "tiktok_20.ui.section4.step2.text":
      "We play your game (or use your footage) to find the “magic moments.”",
    "tiktok_20.ui.section4.step3.title": "Edit",
    "tiktok_20.ui.section4.step3.text":
      "We craft 20 high-retention videos with clear CTA to wishlist.",
    "tiktok_20.ui.section4.step4.title": "Delivery",
    "tiktok_20.ui.section4.step4.text": "You get a folder with ready-to-post content.",
    "tiktok_20.ui.section4.cta": "Start Now",
    "tiktok_20.ui.why.title": "Why It Works",
    "tiktok_20.ui.why.subtitle":
      "Real games. Real results. These indie studios used TikTok to grow their Steam wishlists organically.",
    "tiktok_20.ui.case.wishlists": "wishlists",
    "tiktok_20.ui.why.cta": "Start Now",
    "tiktok_20.ui.big_cta.title": "Ready to grow your wishlist?",
    "tiktok_20.ui.big_cta.subtitle": "Get the strategy you need to launch with confidence.",
    "tiktok_20.ui.big_cta.primary": "Book a Call",
    "tiktok_20.ui.big_cta.secondary": "Or get started now for €2,000",
    "tiktok_20.ui.other_packages.title": "Others Packages",
    "tiktok_20.ui.package.price_prefix": "Price:",
    "tiktok_20.ui.package.learn_more": "Learn more",
    "reddit_launch_support.ui.post.posted_by": "Posted by u dev",
    "reddit_launch_support.ui.post.join": "Join",
    "reddit_launch_support.ui.post.share": "Share",
    "reddit_launch_support.ui.post.image_alt": "Reddit post screenshot",
    "reddit_launch_support.ui.hero.title_01": "Get your game to the front page of Reddit.",
    "reddit_launch_support.ui.hero.title_02": "Without the “marketing” backlash.",
    "reddit_launch_support.ui.hero.body":
      "Posting on Reddit is a full time job and a massive headache. One wrong move and you're banned. We take that risk for you. We drop 15 targeted posts about your game. We seed the comments, handle the feedback, and help you to grow wishlists.",
    "reddit_launch_support.ui.hero.cta": "Let’s Start",
    "reddit_launch_support.ui.hero.price": "Price: €2 500",
    "reddit_launch_support.ui.hero.image_alt": "Reddit post example",
    "reddit_launch_support.ui.section2.image_alt": "Reddit launch support collage",
    "reddit_launch_support.ui.section2.title_01": "Reddit hates marketing.",
    "reddit_launch_support.ui.section2.title_02": "But it loves developers.",
    "reddit_launch_support.ui.section2.p1":
      "Reddit is a minefield. The rules are rarely written the way they’re enforced, and the penalty for looking like marketing can be instant. Removals, bans, and backlash that follows your game.",
    "reddit_launch_support.ui.section2.p2":
      "Our job is to handle the scary part. Navigating each subreddit’s culture, positioning the post like a real developer story, and managing the thread so you can enjoy the traffic without getting burned.",
    "reddit_launch_support.ui.section3.title": "The Stealth Reddit Package",
    "reddit_launch_support.ui.section3.bullet1.title": "15 High Engagement Posts:",
    "reddit_launch_support.ui.section3.bullet1.text":
      "tailored to each community’s content style and appetite.",
    "reddit_launch_support.ui.section3.bullet2.title": "Community Native Strategy:",
    "reddit_launch_support.ui.section3.bullet2.text":
      "no corporate accounts. We keep it developer to player.",
    "reddit_launch_support.ui.section3.bullet3.title": "Wishlist Spike Mechanics:",
    "reddit_launch_support.ui.section3.bullet3.text":
      "designed to convert curiosity into store visits and wishlists.",
    "reddit_launch_support.ui.section3.bullet4.title": "Subreddit Curation:",
    "reddit_launch_support.ui.section3.bullet4.text":
      "we pick the communities that actually fit your game.",
    "reddit_launch_support.ui.section3.bullet5.title": "Active Management:",
    "reddit_launch_support.ui.section3.bullet5.text":
      "seeding engagement and guiding the thread while it is live.",
    "reddit_launch_support.ui.section3.cta": "Let’s Start",
    "reddit_launch_support.ui.section4.title": "How It Works",
    "reddit_launch_support.ui.section4.step1.title": "Subreddit map",
    "reddit_launch_support.ui.section4.step1.text":
      "We curate the right communities and define the safe posting angles.",
    "reddit_launch_support.ui.section4.step2.title": "Write",
    "reddit_launch_support.ui.section4.step2.text":
      "We craft posts that feel native and invite discussion, not suspicion.",
    "reddit_launch_support.ui.section4.step3.title": "Post",
    "reddit_launch_support.ui.section4.step3.text":
      "We publish through community compatible accounts and monitor reactions.",
    "reddit_launch_support.ui.section4.step4.title": "Manage",
    "reddit_launch_support.ui.section4.step4.text":
      "We seed engagement, reply, and steer the thread while it is live.",
    "reddit_launch_support.ui.section4.cta": "Let’s Start",
    "reddit_launch_support.ui.results.title": "Steam Traffic Results",
    "reddit_launch_support.ui.results.subtitle":
      "Placeholder section for screenshots of Steam traffic spikes.",
    "reddit_launch_support.ui.results.placeholder_kicker": "PLACEHOLDER",
    "reddit_launch_support.ui.results.placeholder_body": "Add a Steam traffic graph screenshot.",
    "reddit_launch_support.ui.results.placeholder_card_body": "PLACEHOLDER",
    "reddit_launch_support.ui.results.cta": "Let’s Start",
    "gameplay_trailer.ui.hero.title_01": "Your gameplay.",
    "gameplay_trailer.ui.hero.title_02": "Cut into a story.",
    "gameplay_trailer.ui.hero.body":
      "A complete, high quality gameplay trailer crafted specifically for your game. Clear storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
    "gameplay_trailer.ui.hero.cta": "Let’s Start",
    "gameplay_trailer.ui.hero.price": "Price: €3 000",
    "gameplay_trailer.ui.hero.image_alt": "Gameplay trailer preview",
    "gameplay_trailer.ui.section2.image_alt": "Trailer pacing and structure",
    "gameplay_trailer.ui.section2.title_01": "Clarity.",
    "gameplay_trailer.ui.section2.title_02": "Pacing.",
    "gameplay_trailer.ui.section2.title_03": "Conversion.",
    "gameplay_trailer.ui.section2.p1":
      "Most trailers fail because they look like uncut gameplay. A good trailer makes the player understand the fantasy in seconds.",
    "gameplay_trailer.ui.section2.p2":
      "We cut a story, not a montage. The goal is to move the viewer to wishlist, download the demo, or click through.",
    "gameplay_trailer.ui.section3.image_alt": "Gameplay trailer package preview",
    "gameplay_trailer.ui.section3.title": "The Gameplay Trailer",
    "gameplay_trailer.ui.section3.bullet1.title": "Structure:",
    "gameplay_trailer.ui.section3.bullet1.text": "hook, features, proof, and close.",
    "gameplay_trailer.ui.section3.bullet2.title": "Capture direction:",
    "gameplay_trailer.ui.section3.bullet2.text": "what footage you need and how to get it.",
    "gameplay_trailer.ui.section3.bullet3.title": "Editing + pacing:",
    "gameplay_trailer.ui.section3.bullet3.text": "clean cuts, timing and rhythm.",
    "gameplay_trailer.ui.section3.bullet4.title": "Delivery formats:",
    "gameplay_trailer.ui.section3.bullet4.text": "ready for Steam and socials.",
    "gameplay_trailer.ui.section3.bullet5.title": "Distribution-ready:",
    "gameplay_trailer.ui.section3.bullet5.text": "send to press and creators.",
    "gameplay_trailer.ui.section3.cta": "Let’s Start",
    "gameplay_trailer.ui.how.title": "How It Works",
    "gameplay_trailer.ui.how.step1.title": "Plan",
    "gameplay_trailer.ui.how.step1.text": "We define the story and the key moments to capture.",
    "gameplay_trailer.ui.how.step2.title": "Capture",
    "gameplay_trailer.ui.how.step2.text": "We guide what footage is needed for a clean cut.",
    "gameplay_trailer.ui.how.step3.title": "Edit",
    "gameplay_trailer.ui.how.step3.text": "We edit for pacing, clarity, and conversion.",
    "gameplay_trailer.ui.how.step4.title": "Deliver",
    "gameplay_trailer.ui.how.step4.text": "You get formats ready for Steam, YouTube and media.",
    "gameplay_trailer.ui.how.cta": "Let’s Start",
    "pr_starter_pack.ui.hero.title_01": "Stop shouting into the void.",
    "pr_starter_pack.ui.hero.title_02": "Get covered by the media.",
    "pr_starter_pack.ui.hero.body_pre": "Media coverage is not just vanity. It is",
    "pr_starter_pack.ui.hero.body_bold_credibility": "credibility",
    "pr_starter_pack.ui.hero.body_bold_seal": "seal of approval",
    "pr_starter_pack.ui.hero.body_bold_wishlist": "Steam Wishlist",
    "pr_starter_pack.ui.hero.body_post": "This package exists to take PR off your plate while you finish the game.",
    "pr_starter_pack.ui.hero.cta": "Let’s Start",
    "pr_starter_pack.ui.hero.price": "Price: €3 000",
    "pr_starter_pack.ui.hero.image_alt": "PR starter pack preview",
    "pr_starter_pack.ui.section2.image_alt": "Press kit document preview",
    "pr_starter_pack.ui.section2.title_01": "PR is leverage.",
    "pr_starter_pack.ui.section2.title_02": "Not a lottery.",
    "pr_starter_pack.ui.section2.p1":
      "Most indie teams do not fail at PR because they lack talent. They fail because they send the wrong message, to the wrong people, at the wrong time.",
    "pr_starter_pack.ui.section2.p2":
      "We package your announcement so it is easy to understand, easy to trust, and easy for a journalist to turn into a story.",
    "pr_starter_pack.ui.section3.image_alt": "PR coverage montage",
    "pr_starter_pack.ui.section3.title": "The PR Starter Pack",
    "pr_starter_pack.ui.section3.bullet1.title": "Press release that gets read:",
    "pr_starter_pack.ui.section3.bullet1.text": "formatted for journalists who skim hundreds of emails.",
    "pr_starter_pack.ui.section3.bullet2.title": "Targeted media list:",
    "pr_starter_pack.ui.section3.bullet2.text": "editors who actually cover your genre and platform.",
    "pr_starter_pack.ui.section3.bullet3.title": "Pitch templates:",
    "pr_starter_pack.ui.section3.bullet3.text": "concise emails that land your core angle fast.",
    "pr_starter_pack.ui.section3.bullet4.title": "Follow ups:",
    "pr_starter_pack.ui.section3.bullet4.text": "the persistence needed to cut through inbox noise.",
    "pr_starter_pack.ui.section3.bullet5.title": "Clear deliverables:",
    "pr_starter_pack.ui.section3.bullet5.text": "you know exactly what to send, to who, and when.",
    "pr_starter_pack.ui.section3.cta": "Let’s Start",
    "pr_starter_pack.ui.how.title": "How It Works",
    "pr_starter_pack.ui.how.step1.title": "Position",
    "pr_starter_pack.ui.how.step1.text":
      "We define your story angle and what makes the announcement newsworthy.",
    "pr_starter_pack.ui.how.step2.title": "Write",
    "pr_starter_pack.ui.how.step2.text":
      "We create a press release and pitch copy that is fast to understand.",
    "pr_starter_pack.ui.how.step3.title": "Outreach",
    "pr_starter_pack.ui.how.step3.text":
      "We build a targeted list and send the outreach in the right format.",
    "pr_starter_pack.ui.how.step4.title": "Follow up",
    "pr_starter_pack.ui.how.step4.text":
      "We follow up to maximize replies and coverage opportunities.",
    "pr_starter_pack.ui.how.cta": "Let’s Start",
    "influencer_micro.ui.hero.title_01": "Launch with creators.",
    "influencer_micro.ui.hero.title_02": "Without wasting budget.",
    "influencer_micro.ui.hero.body_01":
      "Micro creators are where trust lives. We identify the right niche creators, run outreach, coordinate content, and track performance.",
    "influencer_micro.ui.hero.body_02": "Built for meaningful reach and wishlist lift.",
    "influencer_micro.ui.hero.cta": "Let’s Start",
    "influencer_micro.ui.hero.price": "Price: €5 000",
    "influencer_micro.ui.hero.image_alt": "Influencer micro campaign preview",
    "influencer_micro.ui.section2.image_alt": "Audience and creator targeting",
    "influencer_micro.ui.section2.title_01": "Small creators.",
    "influencer_micro.ui.section2.title_02": "Big intent.",
    "influencer_micro.ui.section2.p1":
      "The win is not raw views. The win is the right people discovering your game with a trusted recommendation.",
    "influencer_micro.ui.section2.p2":
      "We run a structured micro campaign with targeting, sequencing, and follow ups so you get consistent coverage instead of random luck.",
    "influencer_micro.ui.section3.image_alt": "Influencer content collage",
    "influencer_micro.ui.section3.title": "The Influencer Micro Campaign",
    "influencer_micro.ui.section3.bullet1.title": "Creator list:",
    "influencer_micro.ui.section3.bullet1.text":
      "niche creators mapped by audience fit and style.",
    "influencer_micro.ui.section3.bullet2.title": "Outreach + follow ups:",
    "influencer_micro.ui.section3.bullet2.text":
      "structured sequencing to increase hit rate.",
    "influencer_micro.ui.section3.bullet3.title": "Coordination:",
    "influencer_micro.ui.section3.bullet3.text":
      "scheduling, keys/build delivery, and brief alignment.",
    "influencer_micro.ui.section3.bullet4.title": "Tracking:",
    "influencer_micro.ui.section3.bullet4.text":
      "coverage list, links, basic performance summary.",
    "influencer_micro.ui.section3.bullet5.title": "Clear handoff:",
    "influencer_micro.ui.section3.bullet5.text": "you keep the system for the next sprint.",
    "influencer_micro.ui.section3.cta": "Let’s Start",
    "influencer_micro.ui.how.title": "How It Works",
    "influencer_micro.ui.how.step1.title": "Target",
    "influencer_micro.ui.how.step1.text":
      "We define what creator profiles and audiences fit your game.",
    "influencer_micro.ui.how.step2.title": "Outreach",
    "influencer_micro.ui.how.step2.text":
      "We contact creators with clear angles and simple asks.",
    "influencer_micro.ui.how.step3.title": "Activate",
    "influencer_micro.ui.how.step3.text":
      "We coordinate the content drop and asset delivery.",
    "influencer_micro.ui.how.step4.title": "Track",
    "influencer_micro.ui.how.step4.text":
      "We track coverage and summarize results + learnings.",
    "influencer_micro.ui.how.cta": "Let’s Start",
    "tools.steam_influencers_planner.ui.title": "Steam Influencer Planner",
    "tools.steam_influencers_planner.ui.subtitle":
      "Paste a Steam page link and get a ready-to-run short list: 20 Twitch + 20 YouTube creators.",
    "tools.steam_influencers_planner.ui.how_title": "How it works",
    "tools.steam_influencers_planner.ui.how_step1":
      "Paste your Steam store page URL. We extract AppID + keywords from the link.",
    "tools.steam_influencers_planner.ui.how_step2":
      "We generate a creator shortlist tailored to your game.",
    "tools.steam_influencers_planner.ui.how_step3":
      "You get at least 20 Twitch + 20 YouTube picks for any query. Use Open or Run with TrapPlan.",
    "tools.steam_influencers_planner.ui.field.steam_store_page": "Steam store page",
    "tools.steam_influencers_planner.ui.field.region": "Region",
    "tools.steam_influencers_planner.ui.field.region_all": "All",
    "tools.steam_influencers_planner.ui.field.similar_games":
      "Similar games (optional)",
    "tools.steam_influencers_planner.ui.placeholder.steam_url":
      "https://store.steampowered.com/app/000000/Game_Name/",
    "tools.steam_influencers_planner.ui.tip_paste":
      "Tip: paste a link like https://store.steampowered.com/app/570/Dota_2/",
    "tools.steam_influencers_planner.ui.warn_bad_link":
      "Couldn’t detect AppID in the link. Please paste a Steam /app/ URL.",
    "tools.steam_influencers_planner.ui.placeholder.similar_games":
      "Example: World of Tanks, World of Warships",
    "tools.steam_influencers_planner.ui.hint_showing_results":
      "Showing results for your last query.",
    "tools.steam_influencers_planner.ui.hint_paste_and_search":
      "Paste your Steam page and press Search to get creators.",
    "tools.steam_influencers_planner.ui.cta.search": "Search",
    "tools.steam_influencers_planner.ui.cta.clear": "Clear",
    "paid_growth.ui.hero.image_alt": "Paid growth illustration",
    "services.legacy_placeholder":
      "This is a local placeholder page for an older route. No external content is loaded.",
    "blog.inline.steam_wishlist": "Steam wishlist",
    "blog.inline.steam_wishlists": "Steam wishlists",
    "blog.inline.wishlist": "wishlist",
    "blog.inline.wishlists": "wishlists",
    "blog.inline.steam_next_fest": "Steam Next Fest",
    "blog.inline.marketing_for_steam": "Marketing for Steam",
    "blog.inline.steam_marketing": "Steam marketing",
    "blog.inline.steam_reviews": "Steam reviews",
    "blog.inline.steam_review": "Steam review",
    "blog.inline.reviews_on_steam": "reviews on Steam",
    "blog.inline.steam_page": "Steam page",
    "blog.inline.steam_store_page": "Steam store page",
    "blog.inline.video_games_pr": "video games pr",
    "blog.inline.video_game_pr": "video game pr",
    "blog.inline.steam_no_wishlist": "Steam no wishlist",
    "blog.inline.steam_no_wishlists": "Steam no wishlists",
    "blog.inline.no_wishlists_on_steam": "no wishlists on Steam",
    "blog.inline.marketing_for_video_games": "Marketing for video games",
    "blog.inline.work_with_us": "Work with us",
    "blog.inline.video_games_promote_violence": "video games promote violence",
    "footer.group.ready_packages": "Ready-to-Go Packages",
    "footer.group.free_tools": "Free Tools",
    "footer.group.resources": "Resources",
    "footer.group.support": "Support",
    "footer.link.cookies_policy": "Cookies Policy",
    "footer.link.privacy_policy": "Privacy Policy",
    "footer.link.no_wishlists": "No wishlists on Steam",
    "home.services.section_title": "Game Marketing Services",
    "home.services.launch_and_growth": "Launch and Growth",
    "paid_growth.ui.hero.kicker": "Global Service",
    "paid_growth.ui.hero.title": "Paid Growth",
    "paid_growth.ui.hero.body":
      "Paid growth for Steam and Console games. We define channel strategy, set up tracking and attribution, and deliver a clean handoff your team can run.",
    "paid_growth.ui.hero.cta": "Book a Strategy Call",
    "paid_growth.ui.hero.note": "Steam and Console only",
    "paid_growth.ui.core_value.kicker": "Core Value",
    "paid_growth.ui.core_value.title": "Built for Steam and Console marketing.",
    "paid_growth.ui.core_value.subtitle":
      "Strategy, tracking discipline, and a setup your team can operate.",
    "paid_growth.ui.block1.title": "Channel Strategy",
    "paid_growth.ui.block1.body":
      "We design a channel mix that matches the Steam and Console funnel. The goal is controlled spend, clean measurement, and channels where games actually win.",
    "paid_growth.ui.block1.bullet1": "Reddit for intent and community adjacency",
    "paid_growth.ui.block1.bullet2": "YouTube for discovery, long-form, and creators",
    "paid_growth.ui.block1.bullet3": "X for launch beats and audience targeting",
    "paid_growth.ui.block1.bullet4": "TikTok for scalable reach and iteration",
    "paid_growth.ui.block2.title": "Steam and Console Analytics",
    "paid_growth.ui.block2.body":
      "Paid growth needs measurement that fits the platform reality. We focus on Wishlist growth, UTM discipline, and attribution that makes sense for PC and Console ecosystems.",
    "paid_growth.ui.block2.bullet1": "Wishlist growth and conversion signals",
    "paid_growth.ui.block2.bullet2": "UTM tracking and source discipline",
    "paid_growth.ui.block2.bullet3": "Attribution tooling with providers like Gamesight",
    "paid_growth.ui.block2.bullet4": "Reporting that your team can maintain",
    "paid_growth.ui.block3.title": "The Handoff",
    "paid_growth.ui.block3.body":
      "We build structure your team can run. You get a clean account, clear naming conventions, and a handover that removes guesswork.",
    "paid_growth.ui.block3.bullet1": "Account structure and campaign taxonomy",
    "paid_growth.ui.block3.bullet2": "Tracking and conversion setup documentation",
    "paid_growth.ui.block3.bullet3": "Handover call with Q and A",
    "paid_growth.ui.block3.bullet4": "Clear next steps and operating rhythm",
    "paid_growth.ui.faq.kicker": "FAQ",
    "paid_growth.ui.faq.title": "Paid Growth questions",
    "paid_growth.ui.faq.q1": "How do you track performance on Steam and Consoles?",
    "paid_growth.ui.faq.a1":
      "We focus on Wishlist growth signals, UTM discipline, and attribution tooling that fits PC and Console ecosystems. We can work with providers like Gamesight, and we keep reporting maintainable for your team.",
    "paid_growth.ui.faq.q2": "Which platforms do you focus on?",
    "paid_growth.ui.faq.a2": "Reddit, YouTube, X, and TikTok.",
    "paid_growth.ui.faq.q3": "Do you work on pre-launch Wishlist growth?",
    "paid_growth.ui.faq.a3":
      "Yes. We support pre-launch Wishlist growth with measurement-first setup, channel strategy, and structured campaign foundations.",
    "paid_growth.ui.faq.q4": "What is included in the Clean Handoff?",
    "paid_growth.ui.faq.a4":
      "A structured account you fully own, campaign taxonomy, tracking setup documentation, and a handover call. The goal is zero guesswork for your team.",
    "paid_growth.ui.faq.q5": "Are ad creatives included?",
    "paid_growth.ui.faq.a5":
      "No. Creative production is part of the Creative Content Pipeline. We can coordinate requirements, but the service scope here is paid growth strategy and setup.",
    "paid_growth.ui.faq.cta": "Book a Strategy Call",
    "creative_content_pipeline.ui.hero.kicker": "Global Service",
    "creative_content_pipeline.ui.hero.title": "Creative Content Pipeline",
    "creative_content_pipeline.ui.hero.body":
      "Not a one-off trailer. A system that produces a steady flow of platform-native assets for Steam and consoles, from announcement to post-launch updates.",
    "creative_content_pipeline.ui.hero.cta": "Book a Strategy Call",
    "creative_content_pipeline.ui.hero.note": "Steam and Console focus",
    "creative_content_pipeline.ui.hero.image_alt": "Creative content pipeline illustration",
    "creative_content_pipeline.ui.pipeline.kicker": "The Pipeline",
    "creative_content_pipeline.ui.pipeline.title": "A system that keeps shipping.",
    "creative_content_pipeline.ui.pipeline.subtitle":
      "The goal is not one deliverable. It is a continuous flow of high-performing assets.",
    "creative_content_pipeline.ui.block1.title": "Platform-Native Formats",
    "creative_content_pipeline.ui.block1.body":
      "The pipeline covers the formats that move real outcomes on Steam and consoles. Each asset is built for the platform where it will live.",
    "creative_content_pipeline.ui.block1.bullet1": "High-impact trailers for Steam and YouTube",
    "creative_content_pipeline.ui.block1.bullet2":
      "Shortform for TikTok and X that matches your game fantasy",
    "creative_content_pipeline.ui.block1.bullet3":
      "Steam page creative and store assets that improve conversion",
    "creative_content_pipeline.ui.block2.title": "Iteration and Testing",
    "creative_content_pipeline.ui.block2.body":
      "We do not just produce. We iterate. The pipeline is designed to learn what drives Wishlists and clicks, then repeat what works.",
    "creative_content_pipeline.ui.block2.bullet1": "Performance-informed creative iterations",
    "creative_content_pipeline.ui.block2.bullet2": "Clear hypotheses and next versions",
    "creative_content_pipeline.ui.block2.bullet3": "A feedback loop that compounds over time",
    "creative_content_pipeline.ui.block3.title": "Consistency",
    "creative_content_pipeline.ui.block3.body":
      "A steady beat of updates keeps your game relevant. The system stays active from announcement through post-launch.",
    "creative_content_pipeline.ui.block3.bullet1": "Structured cadence for beats and updates",
    "creative_content_pipeline.ui.block3.bullet2": "Always-on production without chaos",
    "creative_content_pipeline.ui.block3.bullet3": "Assets aligned to your launch calendar",
    "creative_content_pipeline.ui.faq.side_title": "PC and Console focus",
    "creative_content_pipeline.ui.faq.side_body":
      "Answers scoped to Steam and consoles. Built for production speed and consistency.",
    "creative_content_pipeline.ui.faq.q1": "What assets are included in the pipeline?",
    "creative_content_pipeline.ui.faq.a1":
      "Shorts, trailers, Steam page creative, key art adaptations, and high-performing ad creatives.",
    "creative_content_pipeline.ui.faq.q2": "How do you ensure consistency with the game's art style?",
    "creative_content_pipeline.ui.faq.a2":
      "We integrate with your team’s vision. We align on references, tone, and constraints so every asset feels native to the game world.",
    "creative_content_pipeline.ui.faq.q3": "Is this just for the launch?",
    "creative_content_pipeline.ui.faq.a3":
      "No. It is a full pipeline for speed and iteration across platforms, from announcement through post-launch updates.",
    "creative_content_pipeline.ui.faq.q4": "Can you handle Steam page assets?",
    "creative_content_pipeline.ui.faq.a4":
      "Yes. We produce everything from headers to animated GIFs for the description to maximize conversion.",
    "creative_content_pipeline.ui.faq.cta": "Book a Strategy Call",
    "seo.paid_ads_setup.title": "Paid Ads Setup: Launch Your Campaigns Correctly",
    "seo.paid_ads_setup.desc": "We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included.",
    "seo.gameplay_trailer.title": "Gameplay Trailer: A Trailer Built to Convert",
    "seo.gameplay_trailer.desc": "A complete gameplay trailer crafted specifically for your game: storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
    "seo.steam_wishlist_calculator.title": "Steam Wishlist Calculator",
    "seo.steam_wishlist_calculator.desc": "Estimate required wishlists, traffic and budget to hit your week 1 Steam sales target.",
    "seo.steam_pricing_planner.title": "Steam Pricing Planner & Calculator",
    "seo.steam_pricing_planner.desc": "Calculate recommended Steam regional prices using Purchasing Power Parity (PPP) and live FX rates.",
    "seo.steam_influencers_planner.title": "Steam Influencer Planner",
    "seo.steam_influencers_planner.desc":
      "Professional tool for discovering YouTube and Twitch gaming influencers based on genre and similar games.",
    "seo.steam_festival_planner.title": "Steam Festival Planner",
    "seo.steam_festival_planner.desc":
      "Browse Steam festivals and sales, filter by type and genre, and match events to your game using AppID analysis.",
    "seo.creative_content_pipeline.title": "Creative Content Pipeline for Steam and Console Games",
    "seo.creative_content_pipeline.desc":
      "A continuous content pipeline for Steam and Console games. Trailers, shorts, store assets, and iterative production focused on Wishlist growth and conversion.",
    "seo.paid_growth.title": "Paid Growth for Steam and Console Games",
    "seo.paid_growth.desc":
      "High-ticket paid growth for Steam and Console games. Channel strategy, clean tracking, attribution, and a structured handoff.",
    "seo.game_launch_blueprint.title": "Game Launch Blueprint: Your Strategy, Our Standards.",
    "seo.game_launch_blueprint.desc":
      "Stop guessing your next move. We provide the exact marketing framework used by publishers. Standardized, battle tested, and ready to execute together.",
    "seo.games_co_publishing.title": "Games Co-Publishing: Marketing & Distribution Partner.",
    "seo.games_co_publishing.desc":
      "A marketing-driven co-publishing partnership focused on visibility, market validation, audience growth, and commercial performance.",
    "seo.blog.masterclass.title": "Steam Next Fest: The Masterclass in Discovery",
    "seo.blog.masterclass.desc":
      "A 2026 deep-dive on Steam Next Fest: what matters now, the first 48 hours, conversion signals, demo page strategy, influencer timing, and how to turn guidance into execution.",
    "legal.content_rules.meta_title": "Content Rules",
    "legal.content_rules.meta_desc": "Basic rules for using TrapPlan content and assets.",
    "legal.content_rules.title": "Content Rules",
    "legal.content_rules.lede": "This page defines how TrapPlan materials can be used.",
    "legal.content_rules.section1.title": "1. Ownership",
    "legal.content_rules.section1.body":
      "Unless explicitly stated otherwise, all content on this website is owned by TrapPlan.",
    "legal.content_rules.section2.title": "2. Allowed use",
    "legal.content_rules.section2.body":
      "You may share links to our pages and quote short excerpts with proper attribution.",
    "legal.content_rules.section3.title": "3. Prohibited use",
    "legal.content_rules.section3.body":
      "You may not copy, republish, or sell our materials as your own. You may not use our brand assets in a way that implies partnership without written permission.",
    "legal.content_rules.section4.title": "4. Requests",
    "legal.content_rules.section4.body":
      "If you want to reuse materials beyond what is described above, please contact us via the form on this website.",
    "legal.copyright.meta_title": "Copyright Policy",
    "legal.copyright.meta_desc": "Copyright policy for TrapPlan website content.",
    "legal.copyright.title": "Copyright Policy",
    "legal.copyright.lede":
      "This page explains how TrapPlan content is protected and how you can use it.",
    "legal.copyright.section1.title": "Copyright notice",
    "legal.copyright.section1.body":
      "All text, design, and materials on this website are protected by copyright and other applicable intellectual property laws.",
    "legal.copyright.section2.title": "Permission",
    "legal.copyright.section2.body":
      "You may reference and link to our pages. If you want to republish or reproduce any substantial part of our content, please request permission.",
    "legal.copyright.section3.title": "Reporting",
    "legal.copyright.section3.body":
      "If you believe your copyrighted work is used on this website in a way that constitutes infringement, please contact us and include relevant details.",
    "footer.tagline":
      "From first announcement to global release. Professional grade marketing workflows designed specifically for game studios who want better results and zero chaos.",
    "footer.all_rights_reserved": "All rights Reserved.",
    "footer.notice_at_collection": "Notice at collection",
    "footer.privacy_choices": "Your Privacy Choices",
    "about.hero.title": "About TrapPlan",
    "about.hero.subtitle":
      "We help game studios build predictable wishlist and sales growth by combining strategy, sharp messaging, and performance-driven execution.",
    "about.hero.cta_primary": "Work with us",
    "about.hero.cta_secondary": "Read the blog",
    "about.how_we_think.title": "How we think",
    "about.how_we_think.body":
      "We build systems that make marketing repeatable. Not “more activity” — a clear chain from positioning to assets to distribution to measurement.",
    "about.principle.01.title": "Strategy that fits your stage",
    "about.principle.01.body":
      "No generic advice. We map your reality (team, timeline, audience, store assets) into a launch and growth plan you can actually execute.",
    "about.principle.02.title": "Messaging that converts",
    "about.principle.02.body":
      "We help you communicate your game’s promise clearly across your Steam page, creative, and campaigns — so the right players get it fast.",
    "about.principle.03.title": "Execution with measurement",
    "about.principle.03.body":
      "We run structured marketing beats with clean tracking, clear ownership, and post-mortems — so every iteration improves outcomes.",
    "about.what_you_get.title": "What you get",
    "about.what_you_get.body": "A structured collaboration that reduces chaos and makes decisions measurable.",
    "about.outcome.label": "OUTCOME",
    "about.outcome.01.title": "Clear priorities",
    "about.outcome.01.body": "A plan that maps milestones to marketing beats, with ownership and deadlines.",
    "about.outcome.02.title": "Better conversion",
    "about.outcome.02.body": "Messaging and store assets tuned to reduce confusion and increase intent.",
    "about.outcome.03.title": "Clean tracking",
    "about.outcome.03.body": "A measurement layer so you can see what channels and creatives work.",
    "about.outcome.04.title": "Repeatable learnings",
    "about.outcome.04.body": "Post-mortems and iterations that compound over time instead of resetting.",
    "about.principles.title": "Principles",
    "about.principles.body": "How we collaborate with studios: the non-negotiables.",
    "about.value.04.title": "Transparent, predictable process",
    "about.value.04.body":
      "You always know what we are doing, why, and what success looks like. Clear deliverables, cadence, and decision logs.",
    "about.value.05.title": "Performance mindset",
    "about.value.05.body": "We focus on what moves the needle: store conversion, wishlist velocity, and repeatable acquisition channels.",
    "about.value.06.title": "Built for game studios",
    "about.value.06.body":
      "We design around the realities of production: limited time, shifting priorities, and asset constraints — without lowering the quality bar.",
    "form_page.title": "Level Up Your Game Marketing\nWith a Plan That Works",
    "form_page.subtitle":
      "We’ll help you clarify your goals, choose the right promotion formats, and come back with a clear plan — even if you’re not sure where to start.",
    "form_page.bullet.01": "Align with your goals",
    "form_page.bullet.02": "Discover high-performing marketing formats",
    "form_page.bullet.03": "Get a clear, actionable proposal",
    "work_with_us_form.field_full_name": "Your Full Name*",
    "work_with_us_form.field_company": "Company Name*",
    "work_with_us_form.field_email": "you@yourcompany.com*",
    "work_with_us_form.field_message": "Tell us about your game or what you need help with...",
    "work_with_us_form.subscribe": "I'd like to receive occasional marketing tips",
    "work_with_us_form.submit_sending": "Sending...",
    "work_with_us_form.submit": "Let’s Talk",
    "work_with_us_form.privacy_note": "We'll never share your information. Only one expert will contact you.",
    "work_with_us_form.success": "Thank you! We'll contact you soon.",
    "work_with_us_form.error_generic": "Something went wrong. Please try again.",
    "work_with_us_form.error_network": "Failed to send. Please try again.",
    "form.get_a_quote.title": "GET A QUOTE",
    "form.get_a_quote.subtitle":
      "Let’s talk about your task, then we’ll go whisper and come back with a final offer.",
    "form.get_a_quote.message_whatsapp": "Message on WhatsApp",
    "form.get_a_quote.card_title": "Let’s work together",
    "form.get_a_quote.field_name": "Name*",
    "form.get_a_quote.field_company": "Company name*",
    "form.get_a_quote.field_email": "Work Email*",
    "form.get_a_quote.submit_sending": "Sending...",
    "form.get_a_quote.submit_send": "Send",
    "form.get_a_quote.success": "Thank you! We'll contact you soon.",
    "form.get_a_quote.error_generic": "Something went wrong. Please try again.",
    "form.get_a_quote.error_network": "Failed to send. Please try again.",
    "blog_quote_banner.banner.title": "Want help with your game marketing plan",
    "blog_quote_banner.banner.subtitle": "Send a quick request and we will reply with next steps",
    "blog_quote_banner.banner.cta": "Get a quote",
    "blog_quote_banner.modal.title": "Let’s work together",
    "blog_quote_banner.modal.subtitle": "Share your details and we will reach out",
    "blog_quote_banner.modal.close": "Close",
    "blog_quote_banner.success": "Thank you! We'll contact you soon.",
    "blog_quote_banner.error_generic": "Something went wrong. Please try again.",
    "blog_quote_banner.error_network": "Failed to send. Please try again.",
  },
  es: {
    "nav.about_us": "Sobre nosotros",
    "nav.services": "Servicios",
    "nav.our_cases": "Casos",
    "nav.blog": "Blog",
    "cta.work_with_us": "Trabaja con nosotros",
    "cta.read_the_blog": "Leer el blog",
    "cta.lets_talk": "Hablemos",
    "hero.badge.01": "Marketing de rendimiento",
    "hero.badge.02": "Redes sociales",
    "hero.badge.03": "Estrategia go-to-market",
    "hero.kicker": "Marketing para videojuegos",
    "hero.subhead":
      "Ayudamos a estudios, publishers y equipos indie a lanzar, crecer y escalar juegos con marketing pulido y orientado a resultados.",
    "hero.body":
      "Estrategia primero, ejecución después — pensado para Steam y para las limitaciones reales de producción.",
    "hero.cta_contact": "Contáctanos",
    "cases.title": "Casos de éxito",
    "cases.subtitle": "Campañas reales para juegos reales.",
    "cases.cta_view_case": "Ver caso",
    "cases.cta_view_all": "Ver todos los casos",
    "cases.fallback_metric": "Caso",
    "cases.metric.war_thunder_youtube_europe": "Más de 1M de vistas al mes",
    "cases.metric.enlisted_twitch_ads": "Más de 1.500 nuevos jugadores",
    "cases.metric.crossout_new_players": "Más alcance en Europa y EE. UU.",
    "cases.metric.war_thunder_performance_based": "Activaciones mensuales con KPIs claros",
    "cases.metric.world_of_tanks_usa": "Campañas en EE. UU. con entrega estructurada",
    "cases.metric.brief_for_youtube_twitch": "Briefs y ejecución con dirección clara",
    "cases.result.enlisted_twitch_ads": "Más de 1.500 nuevos jugadores",
    "cases.result.crossout_new_players": "Más alcance en Europa y EE. UU.",
    "cases.result.war_thunder_performance_based": "Activaciones mensuales con KPIs claros",
    "cases.result.world_of_tanks_usa": "Campañas en EE. UU. con entrega estructurada",
    "cases.result.brief_for_youtube_twitch": "Briefs y ejecución con dirección clara",
    "cases.result.war_thunder_youtube_europe": "Más de 1M de vistas al mes",
    "cases.desc_override.war_thunder_youtube_europe":
      "Campañas de YouTube Ads para War Thunder que superan 1.000.000 de vistas al mes en regiones clave de Europa.",
    "services.title": "Servicios globales",
    "services.subtitle":
      "Sistemas completos, de principio a fin, para estudios que quieren resultados predecibles — no tareas sueltas.",
    "services.panel.blueprint.title": "Plan de lanzamiento",
    "services.panel.blueprint.desc":
      "Posicionamiento, mensajes, calendario y mix de canales. Un plan claro que reduce el caos, alinea al equipo y hace la ejecución predecible.",
    "services.panel.blueprint.ghost": "ESTRATEGIA / MENSAJE / EJECUCIÓN",
    "services.panel.paid_growth.title": "Crecimiento de pago",
    "services.panel.paid_growth.desc":
      "Configuramos campañas pagadas como debe ser: canales, tracking, segmentación y estructura. Control, medición y entrega limpia.",
    "services.panel.paid_growth.ghost": "ADQUISICIÓN / ANALÍTICA / ESCALA",
    "services.panel.creative.title": "Pipeline creativo",
    "services.panel.creative.desc":
      "Un pipeline constante para trailers, shortform y assets de tienda. Diseñado para velocidad, iteración y distribución nativa por plataforma.",
    "services.panel.creative.ghost": "PRODUCCIÓN | ADAPTACIÓN | PERFORMANCE",
    "services.mobile_hint": "Toca para explorar",
    "packages.title": "Paquetes listos para usar",
    "packages.price_label": "Precio:",
    "packages.cta_learn_more": "Saber más",
    "packages.media_video_label": "Vídeo",
    "packages.card.reddit.title": "Soporte de lanzamiento\nen Reddit",
    "packages.card.reddit.desc":
      "Impulsamos un burst de lanzamiento en Reddit en los subreddits más relevantes para tu juego: crearemos y publicaremos 15 posts de alta interacción, generaremos conversaciones significativas y despertaremos interés orgánico en el lanzamiento con usuarios reales.",
    "packages.card.pr_starter.title": "Pack inicial de PR",
    "packages.card.pr_starter.desc":
      "PR para conseguir cobertura: nota de prensa clara, pitches segmentados, follow-ups y lista completa de contactos. Diseñado para credibilidad y wishlists en Steam.",
    "packages.card.influencer_micro.title": "Microcampaña\ncon influencers",
    "packages.card.influencer_micro.desc":
      "Identificamos creadores de nicho, coordinamos activaciones de contenido y medimos rendimiento. Eficiente en coste, escalable y enfocada en alcance de calidad.",
    "packages.card.tiktok_20.title": "Paquete TikTok:\n20 vídeos",
    "packages.card.tiktok_20.desc":
      "20 vídeos de TikTok a medida para tu juego. Nos encargamos del concepto, producción y formato, alineados con tendencias de plataforma y comportamiento de la audiencia.",
    "packages.card.paid_ads_setup.title": "Configuración de anuncios de pago",
    "packages.card.paid_ads_setup.desc":
      "Configuramos tus campañas de pago de principio a fin: selección de canales, presupuesto, segmentación y placements creativos. Tras el lanzamiento, entregamos la cuenta. No incluye monitorización u optimización continua.",
    "packages.card.gameplay_trailer.title": "Tráiler de gameplay",
    "packages.card.gameplay_trailer.desc":
      "Un tráiler completo y de alta calidad hecho para tu juego. Storytelling claro, captura pulida, ritmo, edición y entrega lista para Steam, YouTube y distribución a medios.",
    "paid_ads_setup.ui.hero.title_line_1": "Anuncios de pago.",
    "paid_ads_setup.ui.hero.title_line_2": "Configura una vez. Lanza limpio.",
    "paid_ads_setup.ui.hero.body":
      "Configuramos tus campañas paid de principio a fin: selección de canales, configuración de presupuesto, segmentación y placements creativos. Tras el lanzamiento, te entregamos la cuenta. No incluye monitorización u optimización continua.",
    "paid_ads_setup.ui.hero.cta": "Empecemos",
    "paid_ads_setup.ui.hero.price": "Precio: €2 000",
    "paid_ads_setup.ui.hero.image_alt": "Vista previa de la configuración de anuncios",
    "paid_ads_setup.ui.section2.title_line_1": "Deja de quemar presupuesto.",
    "paid_ads_setup.ui.section2.title_line_2": "Arregla la base.",
    "paid_ads_setup.ui.section2.p1":
      "La mayoría de campañas paid fallan porque la configuración está mal: tracking incorrecto, estructura equivocada, targeting poco claro y creatividades que no encajan.",
    "paid_ads_setup.ui.section2.p2":
      "Dejamos la cuenta configurada como debe ser para que lances con confianza y mantengas el control después del handoff.",
    "paid_ads_setup.ui.section2.image_alt": "Vista general de la configuración de campaña",
    "paid_ads_setup.ui.section3.image_alt": "Mockup de configuración de anuncios",
    "paid_ads_setup.ui.section3.title": "La configuración de anuncios de pago",
    "paid_ads_setup.ui.section3.bullet.channel_title": "Selección de canales:",
    "paid_ads_setup.ui.section3.bullet.channel_text":
      "elegimos las plataformas que encajan con tu audiencia y tu funnel.",
    "paid_ads_setup.ui.section3.bullet.budget_title": "Configuración de presupuesto:",
    "paid_ads_setup.ui.section3.bullet.budget_text":
      "estructuramos el gasto para que sea controlable y medible.",
    "paid_ads_setup.ui.section3.bullet.targeting_title": "Configuración de targeting:",
    "paid_ads_setup.ui.section3.bullet.targeting_text":
      "audiencias, exclusiones e higiene de cuenta.",
    "paid_ads_setup.ui.section3.bullet.creative_title": "Placement creativo:",
    "paid_ads_setup.ui.section3.bullet.creative_text":
      "formatos y ubicaciones correctas por canal.",
    "paid_ads_setup.ui.section3.bullet.handoff_title": "Handoff:",
    "paid_ads_setup.ui.section3.bullet.handoff_text":
      "te entregamos una cuenta limpia lista para operar.",
    "paid_ads_setup.ui.section3.cta": "Empecemos",
    "paid_ads_setup.ui.section4.title": "Cómo funciona",
    "paid_ads_setup.ui.section4.step1.title": "Alcance",
    "paid_ads_setup.ui.section4.step1.text":
      "Alineamos objetivos, funnel, presupuesto y limitaciones.",
    "paid_ads_setup.ui.section4.step2.title": "Configurar",
    "paid_ads_setup.ui.section4.step2.text":
      "Configuramos estructura, segmentación, placements y tracking.",
    "paid_ads_setup.ui.section4.step3.title": "Lanzar",
    "paid_ads_setup.ui.section4.step3.text":
      "Te ayudamos a lanzar con los ajustes correctos en su sitio.",
    "paid_ads_setup.ui.section4.step4.title": "Entrega",
    "paid_ads_setup.ui.section4.step4.text":
      "Tienes acceso completo y una configuración clara que puedes gestionar.",
    "paid_ads_setup.ui.section4.cta": "Empecemos",
    "seo.site.name": "TrapPlan",
    "seo.site.description": "TrapPlan ayuda a estudios de juegos a aumentar wishlists y ventas con marketing basado en rendimiento.",
    "seo.about.title": "Sobre nosotros",
    "seo.about.desc": "TrapPlan ayuda a estudios de juegos a aumentar wishlists y ventas con sistemas de marketing basados en rendimiento.",
    "seo.blog.title": "Blog de marketing para videojuegos | Tendencias y consejos",
    "seo.blog.desc":
      "Mantente al día con las últimas tendencias de marketing de influencers en videojuegos. El blog de TrapPlan comparte tips, casos y estrategias para crecer.",
    "seo.our_cases.title": "Nuestros casos",
    "seo.our_cases.desc": "Resultados seleccionados y casos de estudio de TrapPlan.",
    "seo.no_wishlists.title": "Sin wishlists en Steam",
    "seo.no_wishlists.desc": "Qué hacer cuando tu página de Steam recibe tráfico pero las wishlists no crecen.",
    "seo.reddit_launch_support.title": "Soporte de lanzamiento en Reddit: tráfico orgánico sin backlash",
    "seo.reddit_launch_support.desc":
      "Campaña orgánica de 15 posts en Reddit diseñada para impulsar wishlists en Steam sin provocar el típico rechazo al marketing.",
    "seo.pr_starter_pack.title": "Pack inicial de PR: consigue la cobertura que tu juego merece",
    "seo.pr_starter_pack.desc":
      "PR para indies: nota de prensa clara, pitches segmentados, follow-ups y una lista de contactos. Para credibilidad y wishlists en Steam.",
    "seo.tiktok_20.title": "Paquete TikTok: 20 vídeos",
    "seo.tiktok_20.desc":
      "20 vídeos de TikTok para tu juego: hooks, guiones, edición y un plan de contenido pensado para awareness y wishlists.",
    "seo.influencer_micro.title": "Microcampaña con influencers: alcance eficiente que convierte",
    "seo.influencer_micro.desc":
      "Sprint de microinfluencers para juegos: selección de nicho, outreach, coordinación, tracking y reporte. Enfocado en alcance de calidad y wishlists.",
    "seo.influencer_activation.title": "Activación con influencers para juegos: cobertura que convierte",
    "seo.influencer_activation.desc":
      "Campañas de influencers estructuradas: sourcing, outreach, coordinación, tracking y aprendizajes post-campaña. Repetible, medible y diseñado para juegos.",
    "seo.paid_ads_setup.title": "Configuración de anuncios de pago: lanza bien tus campañas",
    "seo.paid_ads_setup.desc":
      "Configuramos tus campañas paid de principio a fin: canales, presupuesto, segmentación y placements. Tras el lanzamiento, entregamos la cuenta.",
    "seo.gameplay_trailer.title": "Tráiler de gameplay: un tráiler para convertir",
    "seo.gameplay_trailer.desc":
      "Tráiler gameplay completo: storytelling, captura pulida, ritmo y edición. Listo para Steam, YouTube y distribución a medios.",
    "seo.steam_wishlist_calculator.title": "Calculadora de wishlists de Steam",
    "seo.steam_wishlist_calculator.desc": "Estima wishlists, tráfico y presupuesto necesarios para alcanzar tu objetivo de ventas en la primera semana.",
    "seo.steam_pricing_planner.title": "Planificador y calculadora de precios en Steam",
    "seo.steam_pricing_planner.desc":
      "Calcula precios regionales recomendados en Steam usando PPP (paridad de poder adquisitivo) y tipos de cambio.",
    "seo.steam_influencers_planner.title": "Planificador de influencers para Steam",
    "seo.steam_influencers_planner.desc":
      "Herramienta profesional para descubrir influencers gaming en YouTube y Twitch según género y juegos similares.",
    "seo.steam_festival_planner.title": "Planificador de festivales de Steam",
    "seo.steam_festival_planner.desc":
      "Explora festivales y rebajas de Steam, filtra por tipo y género y encuentra eventos adecuados usando análisis de AppID.",
    "seo.creative_content_pipeline.title": "Pipeline creativo de contenido para Steam y consolas",
    "seo.creative_content_pipeline.desc":
      "Pipeline continuo de trailers, shorts y assets de tienda con producción iterativa enfocada en crecimiento y conversión de wishlists.",
    "seo.paid_growth.title": "Crecimiento de pago para Steam y consolas",
    "seo.paid_growth.desc":
      "Paid growth premium: estrategia de canales, tracking limpio, atribución y handoff estructurado.",
    "seo.game_launch_blueprint.title": "Blueprint de lanzamiento: tu estrategia, nuestros estándares",
    "seo.game_launch_blueprint.desc":
      "Deja de adivinar. Te damos el framework de marketing que usan publishers: estandarizado, probado y listo para ejecutar.",
    "seo.games_co_publishing.title": "Co-publishing: socio de marketing y distribución",
    "seo.games_co_publishing.desc":
      "Alianza de co-publicación impulsada por marketing: visibilidad, validación de mercado, crecimiento de audiencia y rendimiento comercial.",
    "seo.blog.masterclass.title": "Steam Next Fest: masterclass de descubrimiento",
    "seo.blog.masterclass.desc":
      "Análisis 2026 de Steam Next Fest: qué importa, primeras 48h, señales de conversión, estrategia de demo page, timing con influencers y ejecución.",
    "legal.content_rules.meta_title": "Reglas de contenido",
    "legal.content_rules.meta_desc": "Reglas básicas para usar el contenido y los recursos de TrapPlan.",
    "legal.content_rules.title": "Reglas de contenido",
    "legal.content_rules.lede": "Esta página define cómo se pueden usar los materiales de TrapPlan.",
    "legal.content_rules.section1.title": "1. Propiedad",
    "legal.content_rules.section1.body":
      "Salvo indicación expresa, todo el contenido de este sitio web pertenece a TrapPlan.",
    "legal.content_rules.section2.title": "2. Uso permitido",
    "legal.content_rules.section2.body":
      "Puedes compartir enlaces a nuestras páginas y citar extractos breves con la atribución adecuada.",
    "legal.content_rules.section3.title": "3. Uso prohibido",
    "legal.content_rules.section3.body":
      "No puedes copiar, republicar ni vender nuestros materiales como si fueran tuyos. Tampoco puedes usar nuestros recursos de marca de forma que implique una asociación sin permiso escrito.",
    "legal.content_rules.section4.title": "4. Solicitudes",
    "legal.content_rules.section4.body":
      "Si quieres reutilizar materiales más allá de lo descrito arriba, contáctanos mediante el formulario del sitio.",
    "legal.copyright.meta_title": "Política de copyright",
    "legal.copyright.meta_desc": "Política de copyright del contenido del sitio de TrapPlan.",
    "legal.copyright.title": "Política de copyright",
    "legal.copyright.lede":
      "Aquí explicamos cómo se protege el contenido de TrapPlan y cómo puedes utilizarlo.",
    "legal.copyright.section1.title": "Aviso de copyright",
    "legal.copyright.section1.body":
      "Todos los textos, diseños y materiales de este sitio están protegidos por copyright y otras leyes de propiedad intelectual aplicables.",
    "legal.copyright.section2.title": "Permiso",
    "legal.copyright.section2.body":
      "Puedes referenciar y enlazar nuestras páginas. Si deseas republicar o reproducir una parte sustancial del contenido, solicita permiso.",
    "legal.copyright.section3.title": "Reportes",
    "legal.copyright.section3.body":
      "Si crees que tu obra con copyright se usa en este sitio de forma que constituya infracción, contáctanos e incluye los detalles relevantes.",
    "footer.tagline":
      "Desde el primer anuncio hasta el lanzamiento global. Flujos de trabajo de marketing de nivel profesional, diseñados específicamente para estudios de videojuegos que quieren mejores resultados y cero caos.",
    "footer.all_rights_reserved": "Todos los derechos reservados.",
    "footer.notice_at_collection": "Aviso en la recopilación",
    "footer.privacy_choices": "Tus opciones de privacidad",
    "about.hero.title": "Sobre TrapPlan",
    "about.hero.subtitle":
      "Ayudamos a estudios de videojuegos a crecer de forma predecible en wishlists y ventas combinando estrategia, mensajes claros y ejecución orientada al rendimiento.",
    "about.hero.cta_primary": "Trabaja con nosotros",
    "about.hero.cta_secondary": "Leer el blog",
    "about.how_we_think.title": "Cómo pensamos",
    "about.how_we_think.body":
      "Creamos sistemas que hacen el marketing repetible. No es “más actividad”: es una cadena clara desde el posicionamiento hasta los assets, la distribución y la medición.",
    "about.principle.01.title": "Estrategia según tu etapa",
    "about.principle.01.body":
      "Nada de consejos genéricos. Convertimos tu realidad (equipo, plazos, audiencia y assets de la store) en un plan de lanzamiento y crecimiento ejecutable.",
    "about.principle.02.title": "Mensajes que convierten",
    "about.principle.02.body":
      "Te ayudamos a comunicar la promesa central de tu juego en Steam, creatividades y campañas, para que el jugador correcto lo entienda rápido.",
    "about.principle.03.title": "Ejecución con medición",
    "about.principle.03.body":
      "Trabajamos con ciclos estructurados, tracking limpio, responsables claros y post-mortems para que cada iteración mejore el resultado.",
    "about.what_you_get.title": "Qué obtienes",
    "about.what_you_get.body": "Una colaboración estructurada que reduce el caos y hace medibles las decisiones.",
    "about.outcome.label": "RESULTADO",
    "about.outcome.01.title": "Prioridades claras",
    "about.outcome.01.body": "Un plan que conecta hitos con acciones de marketing, con responsables y fechas límite.",
    "about.outcome.02.title": "Mejor conversión",
    "about.outcome.02.body": "Mensajes y assets optimizados para reducir dudas y aumentar la intención.",
    "about.outcome.03.title": "Tracking limpio",
    "about.outcome.03.body": "Una capa de medición para ver qué canales y creatividades funcionan.",
    "about.outcome.04.title": "Aprendizajes repetibles",
    "about.outcome.04.body": "Post-mortems e iteraciones que acumulan aprendizaje en lugar de reiniciar.",
    "about.principles.title": "Principios",
    "about.principles.body": "Cómo colaboramos con estudios: lo no negociable.",
    "about.value.04.title": "Proceso transparente y predecible",
    "about.value.04.body":
      "Siempre sabes qué hacemos, por qué y cómo se ve el éxito. Entregables claros, cadencia y registro de decisiones.",
    "about.value.05.title": "Mentalidad de performance",
    "about.value.05.body": "Nos enfocamos en lo que mueve la aguja: conversión, velocidad de wishlists y canales de adquisición repetibles.",
    "about.value.06.title": "Hecho para estudios",
    "about.value.06.body":
      "Diseñamos alrededor de la realidad de producción: poco tiempo, prioridades cambiantes y límites de assets, sin bajar el estándar.",
    "form_page.title": "Potencia tu marketing\ncon un plan que funciona",
    "form_page.subtitle":
      "Te ayudamos a aclarar objetivos, elegir formatos de promoción y volver con un plan claro, incluso si no sabes por dónde empezar.",
    "form_page.bullet.01": "Alinear con tus objetivos",
    "form_page.bullet.02": "Descubrir formatos que rinden",
    "form_page.bullet.03": "Recibir una propuesta clara y accionable",
    "work_with_us_form.field_full_name": "Nombre y apellidos*",
    "work_with_us_form.field_company": "Nombre de la empresa*",
    "work_with_us_form.field_email": "tu@empresa.com*",
    "work_with_us_form.field_message": "Cuéntanos sobre tu juego o en qué necesitas ayuda...",
    "work_with_us_form.subscribe": "Me gustaría recibir consejos de marketing de vez en cuando",
    "work_with_us_form.submit_sending": "Enviando...",
    "work_with_us_form.submit": "Hablemos",
    "work_with_us_form.privacy_note": "Nunca compartiremos tu información. Solo un experto se pondrá en contacto contigo.",
    "work_with_us_form.success": "¡Gracias! Te contactaremos pronto.",
    "work_with_us_form.error_generic": "Algo salió mal. Inténtalo de nuevo.",
    "work_with_us_form.error_network": "No se pudo enviar. Inténtalo de nuevo.",
    "form.get_a_quote.title": "SOLICITAR PRESUPUESTO",
    "form.get_a_quote.subtitle":
      "Hablemos de tu tarea, y luego iremos a afinar detalles y volveremos con una oferta final.",
    "form.get_a_quote.message_whatsapp": "Enviar mensaje por WhatsApp",
    "form.get_a_quote.card_title": "Trabajemos juntos",
    "form.get_a_quote.field_name": "Nombre*",
    "form.get_a_quote.field_company": "Nombre de la empresa*",
    "form.get_a_quote.field_email": "Correo de trabajo*",
    "form.get_a_quote.submit_sending": "Enviando...",
    "form.get_a_quote.submit_send": "Enviar",
    "form.get_a_quote.success": "¡Gracias! Te contactaremos pronto.",
    "form.get_a_quote.error_generic": "Algo salió mal. Inténtalo de nuevo.",
    "form.get_a_quote.error_network": "No se pudo enviar. Inténtalo de nuevo.",
    "blog_quote_banner.banner.title": "¿Necesitas ayuda con tu plan de marketing para tu juego?",
    "blog_quote_banner.banner.subtitle": "Envía una solicitud rápida y te responderemos con los siguientes pasos",
    "blog_quote_banner.banner.cta": "Pedir presupuesto",
    "blog_quote_banner.modal.title": "Trabajemos juntos",
    "blog_quote_banner.modal.subtitle": "Comparte tus datos y nos pondremos en contacto",
    "blog_quote_banner.modal.close": "Cerrar",
    "blog_quote_banner.success": "¡Gracias! Te contactaremos pronto.",
    "blog_quote_banner.error_generic": "Algo salió mal. Inténtalo de nuevo.",
    "blog_quote_banner.error_network": "No se pudo enviar. Inténtalo de nuevo.",
  },
  it: {
    "nav.about_us": "Chi siamo",
    "nav.services": "Servizi",
    "nav.our_cases": "Casi",
    "nav.blog": "Blog",
    "cta.work_with_us": "Lavora con noi",
    "cta.read_the_blog": "Leggi il blog",
    "cta.lets_talk": "Parliamone",
    "hero.badge.01": "Performance marketing",
    "hero.badge.02": "Social media",
    "hero.badge.03": "Strategia go-to-market",
    "hero.kicker": "Marketing per videogiochi",
    "hero.subhead":
      "Aiutiamo studi, publisher e team indie a lanciare, crescere e scalare giochi con marketing curato e orientato ai risultati.",
    "hero.body":
      "Prima la strategia, poi l’esecuzione — pensato per Steam e per i vincoli reali di produzione.",
    "hero.cta_contact": "Contattaci",
    "cases.title": "Case study",
    "cases.subtitle": "Campagne reali per giochi reali.",
    "cases.cta_view_case": "Vedi case study",
    "cases.cta_view_all": "Vedi tutti i case study",
    "cases.fallback_metric": "Case study",
    "cases.metric.war_thunder_youtube_europe": "1M+ visualizzazioni al mese",
    "cases.metric.enlisted_twitch_ads": "Raggiunti 1.500+ nuovi giocatori",
    "cases.metric.crossout_new_players": "Espansione in Europa e USA",
    "cases.metric.war_thunder_performance_based": "Attivazioni mensili con focus KPI",
    "cases.metric.world_of_tanks_usa": "Campagne USA con delivery strutturata",
    "cases.metric.brief_for_youtube_twitch": "Brief chiari e sistema di esecuzione",
    "cases.result.enlisted_twitch_ads": "Raggiunti 1.500+ nuovi giocatori",
    "cases.result.crossout_new_players": "Espansione in Europa e USA",
    "cases.result.war_thunder_performance_based": "Attivazioni mensili con focus KPI",
    "cases.result.world_of_tanks_usa": "Campagne USA con delivery strutturata",
    "cases.result.brief_for_youtube_twitch": "Brief chiari e sistema di esecuzione",
    "cases.result.war_thunder_youtube_europe": "1M+ visualizzazioni al mese",
    "cases.desc_override.war_thunder_youtube_europe":
      "Campagne YouTube Ads per War Thunder con oltre 1.000.000 di visualizzazioni al mese nelle principali aree europee.",
    "services.title": "Servizi globali",
    "services.subtitle":
      "Sistemi end-to-end per studi che vogliono risultati prevedibili — non attività una tantum.",
    "services.panel.blueprint.title": "Blueprint di lancio",
    "services.panel.blueprint.desc":
      "Posizionamento, messaggi, timeline e mix di canali. Un piano chiaro che riduce il caos, allinea il team e rende l’esecuzione prevedibile.",
    "services.panel.blueprint.ghost": "STRATEGIA / MESSAGGI / ESECUZIONE",
    "services.panel.paid_growth.title": "Crescita a pagamento",
    "services.panel.paid_growth.desc":
      "Impostiamo campagne paid nel modo corretto: canali, tracking, targeting e struttura. Controllo, misurazione e handoff pulito.",
    "services.panel.paid_growth.ghost": "ACQUISIZIONE / ANALYTICS / SCALA",
    "services.panel.creative.title": "Pipeline creativa",
    "services.panel.creative.desc":
      "Una pipeline costante per trailer, shortform e asset store. Pensata per velocità, iterazione e distribuzione nativa.",
    "services.panel.creative.ghost": "PRODUZIONE | ADATTAMENTO | PERFORMANCE",
    "services.mobile_hint": "Tocca per esplorare",
    "packages.title": "Pacchetti pronti all’uso",
    "packages.price_label": "Prezzo:",
    "packages.cta_learn_more": "Scopri di più",
    "packages.media_video_label": "Video",
    "packages.card.reddit.title": "Supporto lancio\nReddit",
    "packages.card.reddit.desc":
      "Creiamo un burst di lancio su Reddit nei subreddit più rilevanti per il tuo gioco: realizziamo e pubblichiamo 15 post ad alta interazione, attiviamo discussioni e generiamo interesse organico al lancio da utenti reali.",
    "packages.card.pr_starter.title": "PR Starter Pack",
    "packages.card.pr_starter.desc":
      "PR per ottenere copertura: comunicato stampa leggibile, pitch mirati, follow-up e lista completa contatti. Pensato per credibilità e wishlist su Steam.",
    "packages.card.influencer_micro.title": "Influencer\nMicro Campaign",
    "packages.card.influencer_micro.desc":
      "Identifichiamo creator di nicchia, coordiniamo le attivazioni e tracciamo le performance. Economico, scalabile e progettato per una reach di qualità.",
    "packages.card.tiktok_20.title": "Pacchetto TikTok:\n20 video",
    "packages.card.tiktok_20.desc":
      "20 video TikTok su misura per il tuo gioco. Gestiamo concept, produzione e formattazione, in linea con trend di piattaforma e comportamento dell’audience.",
    "packages.card.paid_ads_setup.title": "Setup ads a pagamento",
    "packages.card.paid_ads_setup.desc":
      "Impostiamo le tue campagne paid end-to-end: scelta canali, configurazione budget, targeting e placement creativi. Dopo il lancio, consegniamo l’account. Monitoraggio/ottimizzazione continuativi non inclusi.",
    "packages.card.gameplay_trailer.title": "Gameplay Trailer",
    "packages.card.gameplay_trailer.desc":
      "Trailer gameplay completo e di alta qualità realizzato per il tuo gioco. Storytelling chiaro, capture curata, ritmo, editing e consegna pronta per Steam, YouTube e distribuzione media.",
    "seo.site.name": "TrapPlan",
    "seo.site.description": "TrapPlan aiuta gli studi di videogiochi a far crescere wishlist e vendite con marketing performance-driven.",
    "seo.about.title": "Chi siamo",
    "seo.about.desc": "TrapPlan aiuta gli studi di videogiochi a far crescere wishlist e vendite con sistemi di marketing basati sulle performance.",
    "seo.blog.title": "Blog di marketing gaming | Trend e consigli",
    "seo.blog.desc":
      "Resta aggiornato sui trend del marketing influencer nel gaming. Il blog TrapPlan include tips, case study e strategie per crescere.",
    "seo.our_cases.title": "I nostri casi",
    "seo.our_cases.desc": "Risultati selezionati e case study di TrapPlan.",
    "seo.no_wishlists.title": "Nessuna wishlist su Steam",
    "seo.no_wishlists.desc": "Cosa fare quando la tua pagina Steam riceve traffico ma le wishlist non crescono.",
    "seo.reddit_launch_support.title": "Reddit Launch Support: traffico organico senza backlash",
    "seo.reddit_launch_support.desc":
      "Campagna organica Reddit da 15 post per spingere wishlist Steam senza scatenare il classico backlash al marketing.",
    "seo.pr_starter_pack.title": "PR Starter Pack: la copertura che il tuo gioco merita",
    "seo.pr_starter_pack.desc":
      "PR per indie: comunicato stampa leggibile, pitch mirati, follow-up e lista contatti. Per credibilità e wishlist su Steam.",
    "seo.tiktok_20.title": "Pacchetto TikTok: 20 video",
    "seo.tiktok_20.desc":
      "20 video TikTok per il tuo gioco: hook, script, editing e piano contenuti pensato per awareness e wishlist.",
    "seo.influencer_micro.title": "Influencer Micro Campaign: reach efficiente che converte",
    "seo.influencer_micro.desc":
      "Sprint micro-influencer per giochi: selezione creator di nicchia, outreach, coordinamento, tracking e report. Per reach di qualità e wishlist Steam.",
    "seo.influencer_activation.title": "Attivazione influencer per giochi: copertura che converte",
    "seo.influencer_activation.desc":
      "Campagne influencer strutturate: sourcing, outreach, coordinamento, tracking e learnings post-campagna. Ripetibile, misurabile e pensato per i giochi.",
    "seo.paid_ads_setup.title": "Paid Ads Setup: lancia le campagne nel modo giusto",
    "seo.paid_ads_setup.desc":
      "Impostiamo campagne paid end-to-end: canali, budget, targeting e placement creativi. Dopo il lancio, consegniamo l’account.",
    "seo.gameplay_trailer.title": "Gameplay Trailer: un trailer fatto per convertire",
    "seo.gameplay_trailer.desc":
      "Trailer gameplay completo: storytelling, capture curata, ritmo ed editing. Pronto per Steam, YouTube e distribuzione media.",
    "seo.steam_wishlist_calculator.title": "Calcolatore wishlist Steam",
    "seo.steam_wishlist_calculator.desc": "Stima wishlist, traffico e budget necessari per raggiungere l’obiettivo di vendite nella prima settimana.",
    "seo.steam_pricing_planner.title": "Steam Pricing Planner & Calculator",
    "seo.steam_pricing_planner.desc":
      "Calcola i prezzi regionali consigliati su Steam usando PPP (parità di potere d’acquisto) e cambi FX.",
    "seo.steam_influencers_planner.title": "Steam Influencer Planner",
    "seo.steam_influencers_planner.desc":
      "Strumento professionale per scoprire influencer gaming su YouTube e Twitch in base a genere e giochi simili.",
    "seo.steam_festival_planner.title": "Steam Festival Planner",
    "seo.steam_festival_planner.desc":
      "Esplora festival e saldi Steam, filtra per tipo e genere e abbina eventi al tuo gioco con analisi AppID.",
    "seo.creative_content_pipeline.title": "Creative Content Pipeline per Steam e console",
    "seo.creative_content_pipeline.desc":
      "Pipeline continua di trailer, shortform e asset store, con produzione iterativa focalizzata su crescita e conversione delle wishlist.",
    "seo.paid_growth.title": "Paid Growth per Steam e console",
    "seo.paid_growth.desc":
      "Paid growth premium: strategia canali, tracking pulito, attribuzione e handoff strutturato.",
    "seo.game_launch_blueprint.title": "Game Launch Blueprint: la tua strategia, i nostri standard",
    "seo.game_launch_blueprint.desc":
      "Basta tentativi a caso. Forniamo il framework marketing usato dai publisher: standardizzato, testato e pronto da eseguire.",
    "seo.games_co_publishing.title": "Games Co-Publishing: partner marketing e distribuzione",
    "seo.games_co_publishing.desc":
      "Partnership di co-publishing guidata dal marketing: visibilità, validazione di mercato, crescita audience e performance commerciali.",
    "seo.blog.masterclass.title": "Steam Next Fest: masterclass di discovery",
    "seo.blog.masterclass.desc":
      "Deep-dive 2026 su Steam Next Fest: cosa conta, prime 48 ore, segnali di conversione, strategia demo page, timing influencer e come eseguire.",
    "legal.content_rules.meta_title": "Regole dei contenuti",
    "legal.content_rules.meta_desc": "Regole base per usare contenuti e asset di TrapPlan.",
    "legal.content_rules.title": "Regole dei contenuti",
    "legal.content_rules.lede": "Questa pagina definisce come possono essere usati i materiali TrapPlan.",
    "legal.content_rules.section1.title": "1. Proprietà",
    "legal.content_rules.section1.body":
      "Salvo diversa indicazione esplicita, tutti i contenuti di questo sito appartengono a TrapPlan.",
    "legal.content_rules.section2.title": "2. Uso consentito",
    "legal.content_rules.section2.body":
      "Puoi condividere link alle nostre pagine e citare brevi estratti con corretta attribuzione.",
    "legal.content_rules.section3.title": "3. Uso vietato",
    "legal.content_rules.section3.body":
      "Non puoi copiare, ripubblicare o vendere i nostri materiali come se fossero tuoi. Non puoi usare gli asset di brand in modo da suggerire una partnership senza permesso scritto.",
    "legal.content_rules.section4.title": "4. Richieste",
    "legal.content_rules.section4.body":
      "Per riutilizzi oltre quanto descritto sopra, contattaci tramite il modulo sul sito.",
    "legal.copyright.meta_title": "Politica sul copyright",
    "legal.copyright.meta_desc": "Politica sul copyright per i contenuti del sito TrapPlan.",
    "legal.copyright.title": "Politica sul copyright",
    "legal.copyright.lede":
      "Questa pagina spiega come i contenuti TrapPlan sono protetti e come puoi utilizzarli.",
    "legal.copyright.section1.title": "Avviso di copyright",
    "legal.copyright.section1.body":
      "Testi, design e materiali su questo sito sono protetti da copyright e da altre leggi applicabili sulla proprietà intellettuale.",
    "legal.copyright.section2.title": "Permesso",
    "legal.copyright.section2.body":
      "Puoi fare riferimento e linkare le nostre pagine. Se vuoi ripubblicare o riprodurre parti sostanziali del contenuto, richiedi l’autorizzazione.",
    "legal.copyright.section3.title": "Segnalazioni",
    "legal.copyright.section3.body":
      "Se ritieni che un’opera protetta sia usata su questo sito in modo illecito, contattaci includendo i dettagli rilevanti.",
    "footer.tagline":
      "Dal primo annuncio al lancio globale. Workflow di marketing di livello professionale, progettati specificamente per gli studi di videogiochi che vogliono risultati migliori e zero caos.",
    "footer.notice_at_collection": "Avviso sulla raccolta",
    "footer.privacy_choices": "Le tue scelte sulla privacy",
    "about.hero.title": "Chi è TrapPlan",
    "about.hero.subtitle":
      "Aiutiamo gli studi di videogiochi a far crescere in modo prevedibile wishlist e vendite combinando strategia, messaggi chiari ed esecuzione orientata alla performance.",
    "about.hero.cta_primary": "Lavora con noi",
    "about.hero.cta_secondary": "Leggi il blog",
    "about.how_we_think.title": "Come ragioniamo",
    "about.how_we_think.body":
      "Costruiamo sistemi che rendono il marketing ripetibile. Non “più attività”: una catena chiara da posizionamento ad asset, distribuzione e misurazione.",
    "about.principle.01.title": "Strategia adatta alla tua fase",
    "about.principle.01.body":
      "Niente consigli generici. Trasformiamo la tua realtà (team, timeline, audience, asset store) in un piano di lancio e crescita eseguibile.",
    "about.principle.02.title": "Messaggi che convertono",
    "about.principle.02.body":
      "Ti aiutiamo a comunicare la promessa del tuo gioco su Steam, creatività e campagne, così i giocatori giusti capiscono subito.",
    "about.principle.03.title": "Esecuzione con misurazione",
    "about.principle.03.body":
      "Lavoriamo con cicli strutturati, tracking pulito, ownership chiara e post-mortem per migliorare ogni iterazione.",
    "about.what_you_get.title": "Cosa ottieni",
    "about.what_you_get.body": "Una collaborazione strutturata che riduce il caos e rende le decisioni misurabili.",
    "about.outcome.label": "RISULTATO",
    "about.outcome.01.title": "Priorità chiare",
    "about.outcome.01.body": "Un piano che collega milestone e attività marketing, con responsabilità e scadenze.",
    "about.outcome.02.title": "Conversione migliore",
    "about.outcome.02.body": "Messaggi e asset ottimizzati per ridurre dubbi e aumentare l’intento.",
    "about.outcome.03.title": "Tracking pulito",
    "about.outcome.03.body": "Un layer di misurazione per capire quali canali e creatività funzionano.",
    "about.outcome.04.title": "Apprendimenti ripetibili",
    "about.outcome.04.body": "Post-mortem e iterazioni che si accumulano nel tempo invece di ripartire da zero.",
    "about.principles.title": "Principi",
    "about.principles.body": "Come collaboriamo con gli studi: i non negoziabili.",
    "about.value.04.title": "Processo trasparente e prevedibile",
    "about.value.04.body":
      "Sai sempre cosa stiamo facendo, perché e che aspetto ha il successo. Deliverable chiari, cadenza e log delle decisioni.",
    "about.value.05.title": "Mentalità performance",
    "about.value.05.body": "Ci concentriamo su ciò che conta: conversione, velocità di wishlist e canali di acquisizione ripetibili.",
    "about.value.06.title": "Pensato per gli studi",
    "about.value.06.body":
      "Progettiamo tenendo conto della produzione: poco tempo, priorità che cambiano e vincoli sugli asset, senza abbassare l’asticella.",
    "form_page.title": "Potenzia il tuo marketing\ncon un piano che funziona",
    "form_page.subtitle":
      "Ti aiutiamo a chiarire gli obiettivi, scegliere i formati giusti e tornare con un piano chiaro — anche se non sai da dove iniziare.",
    "form_page.bullet.01": "Allinearti ai tuoi obiettivi",
    "form_page.bullet.02": "Scoprire formati ad alte performance",
    "form_page.bullet.03": "Ricevere una proposta chiara e concreta",
    "work_with_us_form.field_full_name": "Nome e cognome*",
    "work_with_us_form.field_company": "Nome azienda*",
    "work_with_us_form.field_email": "tu@azienda.com*",
    "work_with_us_form.field_message": "Raccontaci del tuo gioco o di cosa hai bisogno...",
    "work_with_us_form.subscribe": "Vorrei ricevere occasionalmente consigli di marketing",
    "work_with_us_form.submit_sending": "Invio...",
    "work_with_us_form.submit": "Parliamone",
    "work_with_us_form.privacy_note": "Non condivideremo mai i tuoi dati. Ti contatterà un solo esperto.",
    "work_with_us_form.success": "Grazie! Ti contatteremo presto.",
    "work_with_us_form.error_generic": "Qualcosa è andato storto. Riprova.",
    "work_with_us_form.error_network": "Invio non riuscito. Riprova.",
    "form.get_a_quote.title": "RICHIEDI UN PREVENTIVO",
    "form.get_a_quote.subtitle":
      "Parliamo della tua esigenza, poi torneremo con un'offerta finale.",
    "form.get_a_quote.message_whatsapp": "Messaggio su WhatsApp",
    "form.get_a_quote.card_title": "Lavoriamo insieme",
    "form.get_a_quote.field_name": "Nome*",
    "form.get_a_quote.field_company": "Nome dell’azienda*",
    "form.get_a_quote.field_email": "Email di lavoro*",
    "form.get_a_quote.submit_sending": "Invio...",
    "form.get_a_quote.submit_send": "Invia",
    "form.get_a_quote.success": "Grazie! Ti contatteremo presto.",
    "form.get_a_quote.error_generic": "Qualcosa è andato storto. Riprova.",
    "form.get_a_quote.error_network": "Invio non riuscito. Riprova.",
    "blog_quote_banner.banner.title": "Vuoi aiuto con il piano marketing del tuo gioco?",
    "blog_quote_banner.banner.subtitle": "Invia una richiesta rapida e ti risponderemo con i prossimi passi",
    "blog_quote_banner.banner.cta": "Richiedi un preventivo",
    "blog_quote_banner.modal.title": "Lavoriamo insieme",
    "blog_quote_banner.modal.subtitle": "Condividi i tuoi dettagli e ti contatteremo",
    "blog_quote_banner.modal.close": "Chiudi",
    "blog_quote_banner.success": "Grazie! Ti contatteremo presto.",
    "blog_quote_banner.error_generic": "Qualcosa è andato storto. Riprova.",
    "blog_quote_banner.error_network": "Invio non riuscito. Riprova.",
  },
  fr: {
    "nav.about_us": "À propos",
    "nav.services": "Services",
    "nav.our_cases": "Réalisations",
    "nav.blog": "Blog",
    "cta.work_with_us": "Travailler avec nous",
    "cta.read_the_blog": "Lire le blog",
    "cta.lets_talk": "On en parle",
    "hero.badge.01": "Marketing à la performance",
    "hero.badge.02": "Réseaux sociaux",
    "hero.badge.03": "Stratégie go-to-market",
    "hero.kicker": "Marketing pour jeux vidéo",
    "hero.subhead":
      "Nous aidons les studios, éditeurs et équipes indé à lancer, faire grandir et scaler leurs jeux avec un marketing soigné et orienté performance.",
    "hero.body":
      "Stratégie d’abord, exécution ensuite — pensée pour Steam et les contraintes réelles de production.",
    "hero.cta_contact": "Nous contacter",
    "cases.title": "Études de cas",
    "cases.subtitle": "De vraies campagnes pour de vrais jeux.",
    "cases.cta_view_case": "Voir l’étude de cas",
    "cases.cta_view_all": "Voir toutes les études de cas",
    "cases.fallback_metric": "Étude de cas",
    "cases.metric.war_thunder_youtube_europe": "1M+ de vues par mois",
    "cases.metric.enlisted_twitch_ads": "1 500+ nouveaux joueurs atteints",
    "cases.metric.crossout_new_players": "Portée accrue en Europe et aux États-Unis",
    "cases.metric.war_thunder_performance_based": "Activations mensuelles avec KPIs",
    "cases.metric.world_of_tanks_usa": "Campagnes USA avec livraison structurée",
    "cases.metric.brief_for_youtube_twitch": "Briefs clairs + système d’exécution",
    "cases.result.enlisted_twitch_ads": "1 500+ nouveaux joueurs atteints",
    "cases.result.crossout_new_players": "Portée accrue en Europe et aux États-Unis",
    "cases.result.war_thunder_performance_based": "Activations mensuelles avec KPIs",
    "cases.result.world_of_tanks_usa": "Campagnes USA avec livraison structurée",
    "cases.result.brief_for_youtube_twitch": "Briefs clairs + système d’exécution",
    "cases.result.war_thunder_youtube_europe": "1M+ de vues par mois",
    "cases.desc_override.war_thunder_youtube_europe":
      "Campagnes YouTube Ads pour War Thunder dépassant 1 000 000 de vues par mois sur des régions clés en Europe.",
    "services.title": "Services globaux",
    "services.subtitle":
      "Des systèmes complets, de bout en bout, pour des résultats prévisibles — pas des missions ponctuelles.",
    "services.panel.blueprint.title": "Plan de lancement",
    "services.panel.blueprint.desc":
      "Positionnement, messages, planning et mix de canaux. Un plan clair qui réduit le chaos, aligne l’équipe et rend l’exécution prévisible.",
    "services.panel.blueprint.ghost": "STRATÉGIE / MESSAGES / EXÉCUTION",
    "services.panel.paid_growth.title": "Croissance payante",
    "services.panel.paid_growth.desc":
      "Nous configurons les campagnes payantes correctement : choix des canaux, tracking, ciblage et structure. Contrôle, mesure, transfert propre.",
    "services.panel.paid_growth.ghost": "ACQUISITION / ANALYTICS / SCALE",
    "services.panel.creative.title": "Pipeline créatif",
    "services.panel.creative.desc":
      "Un pipeline régulier pour trailers, shortform et assets de store. Pensé pour la vitesse, l’itération et une distribution native.",
    "services.panel.creative.ghost": "PRODUCTION | ADAPTATION | PERFORMANCE",
    "services.mobile_hint": "Touchez pour explorer",
    "packages.title": "Packages prêts à l’emploi",
    "packages.price_label": "Prix :",
    "packages.cta_learn_more": "En savoir plus",
    "packages.media_video_label": "Vidéo",
    "packages.card.reddit.title": "Support de lancement\nReddit",
    "packages.card.reddit.desc":
      "Nous orchestrons un burst de lancement sur Reddit dans les subreddits les plus pertinents pour votre jeu : 15 posts à forte interaction, des discussions utiles et un intérêt organique au moment de la sortie via de vrais utilisateurs.",
    "packages.card.pr_starter.title": "Pack PR Starter",
    "packages.card.pr_starter.desc":
      "PR pour obtenir de la couverture : communiqué de presse lisible, pitches ciblés, relances, et liste complète de contacts. Conçu pour la crédibilité et les wishlists Steam.",
    "packages.card.influencer_micro.title": "Micro-campagne\ninfluenceurs",
    "packages.card.influencer_micro.desc":
      "Nous identifions des créateurs de niche, coordonnons les activations et suivons la performance. Rentable, scalable et axé sur une portée de qualité.",
    "packages.card.tiktok_20.title": "Pack TikTok :\n20 vidéos",
    "packages.card.tiktok_20.desc":
      "20 vidéos TikTok sur mesure pour votre jeu. Concept, production et format : nous gérons tout, aligné sur les tendances et le comportement de l’audience.",
    "packages.card.paid_ads_setup.title": "Mise en place des ads payantes",
    "packages.card.paid_ads_setup.desc":
      "On met en place vos campagnes payantes de A à Z : choix des canaux, budget, ciblage et placements créatifs. Après lancement, on vous transmet le compte. Pas de suivi/optimisation continue inclus.",
    "packages.card.gameplay_trailer.title": "Trailer de gameplay",
    "packages.card.gameplay_trailer.desc":
      "Un trailer gameplay complet, premium, conçu pour votre jeu. Storytelling clair, capture soignée, rythme, montage et livraison prête pour Steam, YouTube et la distribution média.",
    "seo.site.name": "TrapPlan",
    "seo.site.description": "TrapPlan aide les studios à augmenter les wishlists et les ventes grâce à un marketing orienté performance.",
    "seo.about.title": "À propos",
    "seo.about.desc": "TrapPlan aide les studios à augmenter les wishlists et les ventes avec des systèmes marketing orientés performance.",
    "seo.blog.title": "Blog marketing gaming | Tendances & conseils",
    "seo.blog.desc":
      "Restez à jour sur les tendances du marketing d’influence gaming. Le blog TrapPlan partage conseils, études de cas et stratégies pour performer.",
    "seo.our_cases.title": "Nos cas",
    "seo.our_cases.desc": "Résultats sélectionnés et études de cas de TrapPlan.",
    "seo.no_wishlists.title": "Pas de wishlists sur Steam",
    "seo.no_wishlists.desc": "Que faire quand votre page Steam a du trafic mais que les wishlists ne progressent pas.",
    "seo.reddit_launch_support.title": "Support de lancement Reddit : trafic organique sans backlash",
    "seo.reddit_launch_support.desc":
      "Campagne organique Reddit de 15 posts conçue pour augmenter les wishlists Steam sans déclencher le backlash marketing habituel.",
    "seo.pr_starter_pack.title": "Pack PR Starter : la couverture que votre jeu mérite",
    "seo.pr_starter_pack.desc":
      "PR pour indés : communiqué lisible, pitches ciblés, relances et liste de contacts. Pour crédibilité et wishlists Steam.",
    "seo.tiktok_20.title": "Pack TikTok : 20 vidéos",
    "seo.tiktok_20.desc":
      "20 vidéos TikTok sur mesure pour votre jeu : hooks, scripts, montage et plan de contenu conçu pour la notoriété et les wishlists.",
    "seo.influencer_micro.title":
      "Micro-campagne influenceurs : une portée efficiente qui convertit",
    "seo.influencer_micro.desc":
      "Sprint d’activation micro-influenceurs pour jeux : sélection de créateurs de niche, outreach, coordination, tracking et rapport clair. Conçu pour une portée utile et des wishlists Steam.",
    "seo.influencer_activation.title": "Activation d’influenceurs pour jeux : une couverture qui convertit",
    "seo.influencer_activation.desc":
      "Campagnes influenceurs structurées : sourcing, outreach, coordination, tracking et apprentissages post-campagne. Répétable, mesurable et conçu pour les jeux.",
    "seo.paid_ads_setup.title": "Mise en place des ads payantes : lancer correctement",
    "seo.paid_ads_setup.desc":
      "On met en place vos campagnes payantes de A à Z : choix des canaux, budget, ciblage et placements créatifs. Après lancement, on vous transmet le compte. Pas de suivi/optimisation continue inclus.",
    "seo.gameplay_trailer.title": "Trailer de gameplay : un trailer conçu pour convertir",
    "seo.gameplay_trailer.desc":
      "Un trailer gameplay complet conçu pour votre jeu : storytelling, capture soignée, rythme, montage et livraison prête pour Steam, YouTube et la distribution média.",
    "seo.steam_wishlist_calculator.title": "Calculateur de wishlists Steam",
    "seo.steam_wishlist_calculator.desc":
      "Estimez les wishlists, le trafic et le budget nécessaires pour atteindre votre objectif de ventes Steam en semaine 1.",
    "seo.steam_pricing_planner.title": "Planificateur et calculateur de prix Steam",
    "seo.steam_pricing_planner.desc":
      "Calculez des prix régionaux Steam recommandés avec la parité de pouvoir d’achat (PPP) et des taux de change en temps réel.",
    "seo.steam_influencers_planner.title": "Planificateur d’influenceurs Steam",
    "seo.steam_influencers_planner.desc":
      "Outil pro pour découvrir des influenceurs gaming YouTube et Twitch selon le genre et des jeux similaires.",
    "seo.steam_festival_planner.title": "Planificateur de festivals Steam",
    "seo.steam_festival_planner.desc":
      "Parcourez les festivals et promotions Steam, filtrez par type et genre, et matchez les événements à votre jeu via une analyse AppID.",
    "seo.creative_content_pipeline.title":
      "Pipeline de contenu créatif pour jeux Steam et consoles",
    "seo.creative_content_pipeline.desc":
      "Un pipeline continu pour trailers, shorts, assets de store et production itérative — orienté croissance des wishlists et conversion.",
    "seo.paid_growth.title": "Croissance payante pour jeux Steam et consoles",
    "seo.paid_growth.desc":
      "Croissance payante high-ticket : stratégie de canaux, tracking propre, attribution et transfert structuré.",
    "seo.game_launch_blueprint.title": "Plan de lancement : votre stratégie, nos standards.",
    "seo.game_launch_blueprint.desc":
      "Arrêtez de deviner. Nous fournissons le framework marketing utilisé par les éditeurs : standardisé, éprouvé, et prêt à exécuter ensemble.",
    "seo.games_co_publishing.title": "Co-édition : partenaire marketing & distribution.",
    "seo.games_co_publishing.desc":
      "Partenariat de co-édition guidé par le marketing : visibilité, validation de marché, croissance d’audience et performance commerciale.",
    "seo.blog.masterclass.title": "Steam Next Fest : la masterclass de la découverte",
    "seo.blog.masterclass.desc":
      "Une analyse approfondie (2026) de Steam Next Fest : ce qui compte aujourd’hui, les 48 premières heures, les signaux de conversion, la stratégie de page de démo, le timing influenceurs et comment passer du conseil à l’exécution.",
    "legal.content_rules.meta_title": "Règles de contenu",
    "legal.content_rules.meta_desc": "Règles de base pour utiliser le contenu et les ressources TrapPlan.",
    "legal.copyright.meta_title": "Politique de copyright",
    "legal.copyright.meta_desc": "Politique de copyright du contenu du site TrapPlan.",
    "form_page.title": "Fais passer ton marketing\nau niveau supérieur",
    "form_page.subtitle":
      "On t’aide à clarifier tes objectifs, choisir les bons formats de promotion et revenir avec un plan clair — même si tu ne sais pas par où commencer.",
    "blog_quote_banner.banner.title": "Besoin d’aide pour ton plan marketing de jeu ?",
    "blog_quote_banner.banner.subtitle": "Envoie une demande rapide et nous répondrons avec les prochaines étapes",
    "blog_quote_banner.banner.cta": "Demander un devis",
    "blog_quote_banner.modal.title": "Travaillons ensemble",
    "blog_quote_banner.modal.subtitle": "Partage tes informations et nous te recontacterons",
    "blog_quote_banner.modal.close": "Fermer",
    "blog_quote_banner.success": "Merci ! Nous te contacterons bientôt.",
    "blog_quote_banner.error_generic": "Une erreur est survenue. Réessaie.",
    "blog_quote_banner.error_network": "Échec de l’envoi. Réessaie.",
  },
  de: {
    "seo.site.name": "TrapPlan",
    "seo.site.description":
      "TrapPlan hilft Game-Studios, Wishlists und Sales mit performanceorientiertem Marketing zu steigern.",
    "seo.about.title": "Über uns",
    "seo.about.desc":
      "TrapPlan hilft Game-Studios, Wishlists und Sales mit performanceorientierten Marketing-Systemen zu steigern.",
    "seo.blog.title": "Gaming-Marketing-Blog | Trends & Tipps",
    "seo.blog.desc":
      "Bleib auf dem Laufenden mit Trends im Gaming-Marketing. TrapPlans Blog deckt Tipps, Case Studies und Strategien ab, damit Brands im Games-Markt erfolgreich sind.",
    "seo.our_cases.title": "Unsere Cases",
    "seo.our_cases.desc": "Ausgewählte Ergebnisse und Case Studies von TrapPlan.",
    "seo.no_wishlists.title": "Keine Wishlists auf Steam",
    "seo.no_wishlists.desc":
      "Was tun, wenn deine Steam-Seite Traffic bekommt, aber die Wishlists nicht wachsen.",
    "seo.reddit_launch_support.title":
      "Reddit Launch Support: Organischer Steam-Traffic ohne Backlash",
    "seo.reddit_launch_support.desc":
      "Eine organische Reddit-Kampagne mit 15 Posts, um Steam-Wishlists zu steigern, ohne den üblichen Marketing-Backlash auszulösen.",
    "seo.pr_starter_pack.title": "PR Starter Pack: Die Coverage, die dein Game verdient",
    "seo.pr_starter_pack.desc":
      "PR-Outreach für Indie-Games: lesbares Press Release, gezielte Pitches, Follow-ups und eine klare Kontaktliste. Für Credibility und Steam-Wishlists.",
    "seo.tiktok_20.title": "TikTok Paket: 20 Videos",
    "seo.tiktok_20.desc":
      "20 TikTok-Videos für dein Game: Hooks, Skripte, Editing und ein klarer Content-Plan für Wishlists und Awareness.",
    "seo.influencer_micro.title":
      "Influencer Micro Campaign: Kosteneffiziente Reichweite, die konvertiert",
    "seo.influencer_micro.desc":
      "Ein Micro-Influencer-Aktivierungs-Sprint für Games: Nischen-Creator-Selection, Outreach, Koordination, Tracking und ein klarer Report. Für sinnvolle Reichweite und Steam-Wishlists.",
    "seo.influencer_activation.title":
      "Influencer Activation für Games: Coverage, die konvertiert",
    "seo.influencer_activation.desc":
      "Strukturierte Influencer-Kampagnen: Sourcing, Outreach, Koordination, Tracking und Post-Campaign-Learnings. Wiederholbar, messbar und für Games gebaut.",
    "seo.paid_ads_setup.title":
      "Paid Ads Setup: Kampagnen richtig aufsetzen",
    "seo.paid_ads_setup.desc":
      "Wir setzen deine Paid-Ad-Kampagnen von A bis Z auf: Kanalwahl, Budget-Setup, Targeting und Creative-Placement. Danach übergeben wir das Konto. Monitoring/Optimierung sind nicht enthalten.",
    "seo.gameplay_trailer.title": "Gameplay Trailer: Ein Trailer, der konvertiert",
    "seo.gameplay_trailer.desc":
      "Ein kompletter Gameplay-Trailer für dein Game: klares Storytelling, saubere Captures, Pace, Editing und Lieferung bereit für Steam, YouTube und Medien.",
    "seo.steam_wishlist_calculator.title": "Steam Wishlist Calculator",
    "seo.steam_wishlist_calculator.desc":
      "Schätze erforderliche Wishlists, Traffic und Budget, um dein Steam-Sales-Ziel in Woche 1 zu erreichen.",
    "seo.steam_pricing_planner.title": "Steam Pricing Planner & Calculator",
    "seo.steam_pricing_planner.desc":
      "Berechne empfohlene Steam-Regionalpreise mit Kaufkraftparität (PPP) und Live-FX-Kursen.",
    "seo.steam_influencers_planner.title": "Steam Influencer Planner",
    "seo.steam_influencers_planner.desc":
      "Profi-Tool, um YouTube- und Twitch-Gaming-Influencer nach Genre und ähnlichen Games zu finden.",
    "seo.steam_festival_planner.title": "Steam Festival Planner",
    "seo.steam_festival_planner.desc":
      "Durchsuche Steam-Festivals und Sales, filtere nach Typ und Genre und match Events mit deinem Game via AppID-Analyse.",
    "seo.creative_content_pipeline.title":
      "Creative Content Pipeline für Steam- und Console-Games",
    "seo.creative_content_pipeline.desc":
      "Eine kontinuierliche Content-Pipeline für Steam- und Console-Games: Trailer, Shorts, Store-Assets und iterative Produktion mit Fokus auf Wishlist-Wachstum und Conversion.",
    "seo.paid_growth.title": "Paid Growth für Steam- und Console-Games",
    "seo.paid_growth.desc":
      "High-Ticket Paid Growth für Steam- und Console-Games: Channel-Strategie, sauberes Tracking, Attribution und strukturierter Handover.",
    "seo.game_launch_blueprint.title":
      "Game Launch Blueprint: Deine Strategie, unsere Standards.",
    "seo.game_launch_blueprint.desc":
      "Hör auf zu raten. Wir liefern das exakte Marketing-Framework, das Publisher nutzen: standardisiert, battle-tested und bereit, gemeinsam umzusetzen.",
    "seo.games_co_publishing.title": "Games Co-Publishing: Marketing- & Distribution-Partner.",
    "seo.games_co_publishing.desc":
      "Eine marketinggetriebene Co-Publishing-Partnerschaft mit Fokus auf Sichtbarkeit, Marktvalidierung, Audience Growth und kommerzielle Performance.",
    "seo.blog.masterclass.title":
      "Steam Next Fest: die Masterclass in Discovery",
    "seo.blog.masterclass.desc":
      "Ein Deep Dive (2026) zu Steam Next Fest: was jetzt zählt, die ersten 48 Stunden, Conversion-Signale, Demo-Page-Strategie, Influencer-Timing und wie du Guidance in Execution verwandelst.",
    "legal.content_rules.meta_title": "Content-Regeln",
    "legal.content_rules.meta_desc": "Grundregeln für die Nutzung von TrapPlan-Inhalten und Assets.",
    "legal.copyright.meta_title": "Copyright-Richtlinie",
    "legal.copyright.meta_desc": "Copyright-Richtlinie für Inhalte der TrapPlan-Website.",
    "form_page.title": "Bring dein Game-Marketing\nauf das nächste Level",
    "form_page.subtitle":
      "Wir helfen dir, Ziele zu klären, die passenden Promotion-Formate zu wählen und mit einem klaren Plan zurückzukommen — auch wenn du noch nicht weißt, wo du anfangen sollst.",
    "blog_quote_banner.banner.title": "Brauchst du Hilfe mit deinem Game-Marketing-Plan?",
    "blog_quote_banner.banner.subtitle": "Sende eine kurze Anfrage und wir antworten mit den nächsten Schritten",
    "blog_quote_banner.banner.cta": "Angebot anfordern",
    "blog_quote_banner.modal.title": "Lass uns zusammenarbeiten",
    "blog_quote_banner.modal.subtitle": "Teile deine Daten und wir melden uns",
    "blog_quote_banner.modal.close": "Schließen",
    "blog_quote_banner.success": "Danke! Wir melden uns bald.",
    "blog_quote_banner.error_generic": "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
    "blog_quote_banner.error_network": "Senden fehlgeschlagen. Bitte erneut versuchen.",
  },
  zh: {
    "seo.site.name": "TrapPlan",
    "seo.site.description": "TrapPlan 通过以效果为导向的营销，帮助游戏工作室增长愿望单与销量。",
    "seo.about.title": "关于我们",
    "seo.about.desc": "TrapPlan 通过以效果为导向的营销系统，帮助游戏工作室增长愿望单与销量。",
    "seo.blog.title": "游戏营销博客｜趋势与实用技巧",
    "seo.blog.desc": "跟进游戏营销最新趋势。TrapPlan 博客分享实用技巧、案例与策略，帮助品牌在游戏行业取得增长。",
    "seo.our_cases.title": "案例",
    "seo.our_cases.desc": "TrapPlan 精选成果与案例研究。",
    "seo.no_wishlists.title": "Steam 上没有愿望单",
    "seo.no_wishlists.desc": "当 Steam 页面有流量但愿望单不增长时，应该优先修复什么。",
    "seo.reddit_launch_support.title": "Reddit 发售支持：无反感的自然流量",
    "seo.reddit_launch_support.desc": "15 条高互动的 Reddit 自然内容投放，帮助提升 Steam 愿望单，并避免常见营销反感。",
    "seo.pr_starter_pack.title": "PR 入门包：为你的游戏争取报道",
    "seo.pr_starter_pack.desc": "面向独立游戏的 PR 外联：易读的新闻稿、精准投递、跟进，以及清晰的联系人列表。用于建立可信度并提升 Steam 愿望单。",
    "seo.tiktok_20.title": "TikTok 套餐：20 条视频",
    "seo.tiktok_20.desc": "为你的游戏制作 20 条 TikTok 视频：hook、脚本、剪辑与内容计划，目标是提升愿望单与认知。",
    "seo.influencer_micro.title": "达人微型投放：高性价比的可转化曝光",
    "seo.influencer_micro.desc": "面向游戏的微型达人激活冲刺：选择与匹配、外联、协同、追踪与报告。聚焦有效触达与 Steam 愿望单。",
    "seo.paid_ads_setup.title": "付费广告搭建：正确启动你的投放",
    "seo.paid_ads_setup.desc": "从渠道选择到预算、定向与素材位设置，我们完成完整投放搭建并交接账号。后续持续监控/优化不包含在内。",
    "seo.gameplay_trailer.title": "Gameplay Trailer：为转化而生的预告片",
    "seo.gameplay_trailer.desc": "为你的游戏制作完整 gameplay trailer：清晰叙事、优质录制、节奏、剪辑，并交付可用于 Steam、YouTube 与媒体传播的版本。",
    "seo.steam_wishlist_calculator.title": "Steam 愿望单计算器",
    "seo.steam_wishlist_calculator.desc": "估算达成 Steam 首周销量目标所需的愿望单、流量与预算。",
    "seo.steam_pricing_planner.title": "Steam 定价规划器与计算器",
    "seo.steam_pricing_planner.desc": "使用购买力平价（PPP）与实时汇率计算推荐的 Steam 区域定价。",
    "seo.steam_influencers_planner.title": "Steam 达人规划器",
    "seo.steam_influencers_planner.desc": "基于题材与相似游戏，发现 YouTube/Twitch 游戏达人并规划投放。",
    "seo.steam_festival_planner.title": "Steam 活动规划器",
    "seo.steam_festival_planner.desc": "浏览 Steam 节日与促销，按类型/题材筛选，并用 AppID 分析匹配适合你游戏的活动。",
    "seo.creative_content_pipeline.title": "Steam/主机创意内容流水线",
    "seo.creative_content_pipeline.desc": "持续产出 trailer、短视频与商店素材的内容流水线，迭代制作，聚焦愿望单增长与转化。",
    "seo.paid_growth.title": "Steam/主机付费增长",
    "seo.paid_growth.desc": "高客单价付费增长：渠道策略、清晰追踪、归因与结构化交接。",
    "seo.game_launch_blueprint.title": "发售蓝图：你的策略，我们的标准",
    "seo.game_launch_blueprint.desc": "别再猜下一步。我们提供发行商使用的营销框架：标准化、久经验证，并可一起落地执行。",
    "seo.games_co_publishing.title": "联合发行：营销与分发合作伙伴",
    "seo.games_co_publishing.desc": "以营销驱动的联合发行合作：提升可见度、市场验证、受众增长与商业表现。",
    "seo.blog.masterclass.title": "Steam Next Fest：发现机制深度解析",
    "seo.blog.masterclass.desc": "2026 深度解读 Steam Next Fest：关键因素、前 48 小时、转化信号、demo 页面策略、达人节奏与如何落地执行。",
    "seo.influencer_activation.title": "面向游戏的达人投放：带来可转化的曝光",
    "seo.influencer_activation.desc":
      "结构化达人营销：筛选与匹配、外联、协同执行、追踪与复盘。可重复、可衡量，专为游戏打造。",
    "legal.content_rules.meta_title": "内容规则",
    "legal.content_rules.meta_desc": "关于使用 TrapPlan 内容与素材的基本规则。",
    "legal.content_rules.title": "内容规则",
    "legal.content_rules.lede": "本页面说明 TrapPlan 材料的使用方式。",
    "legal.content_rules.section1.title": "1. 所有权",
    "legal.content_rules.section1.body": "除非另有明确说明，本网站的所有内容均归 TrapPlan 所有。",
    "legal.content_rules.section2.title": "2. 允许的使用",
    "legal.content_rules.section2.body": "你可以分享我们页面的链接，并在注明出处的情况下引用短段内容。",
    "legal.content_rules.section3.title": "3. 禁止的使用",
    "legal.content_rules.section3.body":
      "你不得将我们的材料复制、再发布或作为自己的内容出售。未经书面许可，不得以暗示合作关系的方式使用我们的品牌素材。",
    "legal.content_rules.section4.title": "4. 申请",
    "legal.content_rules.section4.body": "如需超出上述范围使用材料，请通过本网站表单联系我们。",
    "legal.copyright.meta_title": "版权政策",
    "legal.copyright.meta_desc": "TrapPlan 网站内容的版权政策。",
    "legal.copyright.title": "版权政策",
    "legal.copyright.lede":
      "本页面说明 TrapPlan 内容的版权保护方式以及你可以如何使用。",
    "legal.copyright.section1.title": "版权声明",
    "legal.copyright.section1.body":
      "本网站的文字、设计与材料受版权及其他适用的知识产权法律保护。",
    "legal.copyright.section2.title": "许可",
    "legal.copyright.section2.body":
      "你可以引用并链接到我们的页面。如需转载或复制网站内容的重要部分，请先申请许可。",
    "legal.copyright.section3.title": "举报",
    "legal.copyright.section3.body":
      "如果你认为你的作品在本网站上的使用构成侵权，请联系我们并提供相关细节。",
    "footer.tagline":
      "从首次发布到全球上线。为游戏工作室量身打造的专业营销工作流，带来更好的结果与更少的混乱。",
    "footer.notice_at_collection": "数据收集告知",
    "footer.privacy_choices": "隐私选项",
    "about.hero.title": "关于 TrapPlan",
    "about.hero.subtitle":
      "我们通过策略、清晰的表达与以效果为导向的执行，帮助游戏工作室实现可预测的愿望单与销售增长。",
    "about.hero.cta_primary": "与我们合作",
    "about.hero.cta_secondary": "阅读博客",
    "about.how_we_think.title": "我们的思路",
    "about.how_we_think.body":
      "我们打造可重复的营销系统。不是“更多动作”，而是一条从定位到素材到分发到衡量的清晰链路。",
    "about.principle.01.title": "匹配阶段的策略",
    "about.principle.01.body":
      "拒绝泛泛建议。我们把你的现实情况（团队、周期、受众、商店素材）转化为你能真正落地的发行与增长计划。",
    "about.principle.02.title": "能转化的信息表达",
    "about.principle.02.body":
      "我们帮助你在 Steam 页面、创意素材与投放中清晰传达游戏核心卖点，让目标玩家快速理解。",
    "about.principle.03.title": "可衡量的执行",
    "about.principle.03.body":
      "结构化节奏、干净的追踪、明确的负责人和复盘机制，让每次迭代都更接近结果。",
    "about.what_you_get.title": "你会得到什么",
    "about.what_you_get.body": "一套结构化的合作方式，减少混乱，让决策可衡量。",
    "about.outcome.label": "结果",
    "about.outcome.01.title": "清晰优先级",
    "about.outcome.01.body": "把里程碑映射到营销节奏，明确负责人和截止时间。",
    "about.outcome.02.title": "更高转化",
    "about.outcome.02.body": "优化信息表达与商店素材，减少困惑、提升意图。",
    "about.outcome.03.title": "清晰追踪",
    "about.outcome.03.body": "搭建衡量层，快速看清哪些渠道和创意有效。",
    "about.outcome.04.title": "可复用的经验",
    "about.outcome.04.body": "复盘与迭代会持续累积，而不是每次从零开始。",
    "about.principles.title": "原则",
    "about.principles.body": "我们与工作室协作的“底线规则”。",
    "about.value.04.title": "透明、可预期的流程",
    "about.value.04.body": "你始终知道我们在做什么、为什么做，以及成功是什么样子。交付物、节奏与决策记录都清晰。",
    "about.value.05.title": "结果导向",
    "about.value.05.body": "专注于真正有效的指标：商店转化、愿望单增长速度，以及可复制的获客渠道。",
    "about.value.06.title": "为游戏工作室而生",
    "about.value.06.body": "我们围绕制作现实设计：时间有限、优先级变化、素材受限——但不降低质量标准。",
    "form_page.title": "让你的游戏营销\n更进一步",
    "form_page.subtitle":
      "我们会帮助你理清目标、选择合适的推广形式，并给出一份清晰的方案——即使你还不知道从哪里开始。",
    "form_page.bullet.01": "与目标对齐",
    "form_page.bullet.02": "找到高表现的推广形式",
    "form_page.bullet.03": "获得清晰可执行的方案",
    "work_with_us_form.field_full_name": "姓名*",
    "work_with_us_form.field_company": "公司名称*",
    "work_with_us_form.field_email": "you@yourcompany.com*",
    "work_with_us_form.field_message": "介绍一下你的游戏，或你需要我们帮助的内容…",
    "work_with_us_form.subscribe": "我愿意偶尔接收营销技巧",
    "work_with_us_form.submit_sending": "发送中...",
    "work_with_us_form.submit": "开始沟通",
    "work_with_us_form.privacy_note": "我们不会分享你的信息。只会有一位专家与你联系。",
    "work_with_us_form.success": "感谢！我们会尽快联系你。",
    "work_with_us_form.error_generic": "出错了，请重试。",
    "work_with_us_form.error_network": "发送失败，请重试。",
    "form.get_a_quote.title": "获取报价",
    "form.get_a_quote.subtitle": "先聊聊你的需求，我们会整理后带着最终报价回复你。",
    "form.get_a_quote.message_whatsapp": "通过 WhatsApp 联系",
    "form.get_a_quote.card_title": "一起合作",
    "form.get_a_quote.field_name": "姓名*",
    "form.get_a_quote.field_company": "公司名称*",
    "form.get_a_quote.field_email": "工作邮箱*",
    "form.get_a_quote.submit_sending": "发送中...",
    "form.get_a_quote.submit_send": "发送",
    "form.get_a_quote.success": "感谢！我们会尽快联系你。",
    "form.get_a_quote.error_generic": "出错了，请重试。",
    "form.get_a_quote.error_network": "发送失败，请重试。",
    "blog_quote_banner.banner.title": "需要帮助制定你的游戏营销计划吗",
    "blog_quote_banner.banner.subtitle": "发送一个简短请求，我们会回复下一步",
    "blog_quote_banner.banner.cta": "获取报价",
    "blog_quote_banner.modal.title": "一起合作吧",
    "blog_quote_banner.modal.subtitle": "留下你的信息，我们会联系你",
    "blog_quote_banner.modal.close": "关闭",
    "blog_quote_banner.success": "感谢！我们会尽快联系你。",
    "blog_quote_banner.error_generic": "出错了，请重试。",
    "blog_quote_banner.error_network": "发送失败，请重试。",
  },
};

const COPY: Record<Locale, Record<CopyKey, string>> = {
  en: COPY_PARTIAL.en as Record<CopyKey, string>,
  es: { ...(COPY_PARTIAL.en as Record<CopyKey, string>), ...(COPY_PARTIAL.es ?? {}) } as Record<CopyKey, string>,
  it: { ...(COPY_PARTIAL.en as Record<CopyKey, string>), ...(COPY_PARTIAL.it ?? {}) } as Record<CopyKey, string>,
  fr: { ...(COPY_PARTIAL.en as Record<CopyKey, string>), ...(COPY_PARTIAL.fr ?? {}) } as Record<CopyKey, string>,
  de: { ...(COPY_PARTIAL.en as Record<CopyKey, string>), ...(COPY_PARTIAL.de ?? {}) } as Record<CopyKey, string>,
  zh: { ...(COPY_PARTIAL.en as Record<CopyKey, string>), ...(COPY_PARTIAL.zh ?? {}) } as Record<CopyKey, string>,
};

export function t(locale: Locale, key: CopyKey): string {
  return COPY[locale][key];
}
