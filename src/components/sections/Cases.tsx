import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { stagger } from "@/lib/stagger";
import ArtTile from "@/components/ui/ArtTile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CASE_STUDIES, type CaseStudy } from "@/lib/data/cases";
import { GAME_ART, CASE_ART, HOME_CASE_SLUGS, artGradient, type GameArt } from "@/lib/data/gameArt";
import { t } from "@/lib/copy";
import { withLocale, type Locale } from "@/lib/i18n.shared";

function bySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

function ReadCase({ locale }: { locale: Locale }) {
  return (
    <div className="mt-auto flex items-center justify-between">
      <span className="font-mono text-[12px] text-[var(--accent)]">
        {t(locale, "cases.read_case")} →
      </span>
      <span className="text-tertiary transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
        ↗
      </span>
    </div>
  );
}

export default function Cases({ locale }: { locale: Locale }) {
  const [featuredSlug, ...cardSlugs] = HOME_CASE_SLUGS;
  const featured = bySlug(featuredSlug);

  return (
    <section id="cases" className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
      <div className="mx-auto max-w-[1240px] px-6 py-[110px] lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
          <div>
            <Eyebrow number="02" label={t(locale, "cases.eyebrow")} className="mb-5" />
            <h2 className="font-display text-[46px] font-bold leading-[1.05] tracking-[-0.025em] text-bone">
              {t(locale, "cases.subtitle")}
            </h2>
          </div>
          <Link
            href={withLocale(locale, "/our-cases")}
            className="font-mono text-[13px] tracking-[0.06em] text-secondary no-underline transition-colors hover:text-bone"
          >
            {t(locale, "cases.cta_view_all")} ↗
          </Link>
        </div>

        {/* Featured */}
        {featured ? (
          <Reveal className="mb-[18px] block">
            <Link
              href={withLocale(locale, featured.href)}
              className="art-zoom group grid grid-cols-1 overflow-hidden rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card no-underline transition-colors hover:border-[rgba(244,241,234,0.18)] lg:grid-cols-[1.12fr_0.88fr]"
            >
              <ArtTile
                className="min-h-[320px]"
                radius={0}
                gradient={artGradient(GAME_ART.briefs, { alpha: 0.5, pos: "32% 28%", spread: "64%" })}
                ghostName={GAME_ART.briefs.ghostName}
                ghostSize={48}
                ghostBottom={24}
                tag={GAME_ART.briefs.tag}
                cover={GAME_ART.briefs.landscape}
                coverAlt={featured.title}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="flex flex-col justify-center p-10">
                <div className="mb-4 font-mono text-[11px] tracking-[0.1em] text-tertiary">
                  {featured.client.toUpperCase()} · YOUTUBE + TWITCH
                </div>
                <h3 className="mb-[14px] font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-bone">
                  {featured.title}
                </h3>
                <p className="mb-[26px] text-[15.5px] leading-[1.6] text-secondary">
                  {featured.excerpt}
                </p>
                <ReadCase locale={locale} />
              </div>
            </Link>
          </Reveal>
        ) : null}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 min-[1024px]:grid-cols-3">
          {cardSlugs.map((slug, i) => {
            const c = bySlug(slug);
            if (!c) return null;
            const art: GameArt = GAME_ART[CASE_ART[slug]];
            return (
              <Reveal key={slug} delay={stagger(i)} className="block">
                <Link
                  href={withLocale(locale, c.href)}
                  className="art-zoom group flex h-full flex-col overflow-hidden rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card no-underline transition-colors hover:border-[rgba(244,241,234,0.18)]"
                >
                  <ArtTile
                    className="aspect-[16/10]"
                    radius={0}
                    gradient={artGradient(art, { alpha: 0.5, pos: "32% 26%", spread: "64%" })}
                    ghostName={art.ghostName}
                    ghostSize={24}
                    tag={art.tag}
                    cover={art.landscape}
                    coverAlt={c.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col p-[22px] pb-6">
                    <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-tertiary">
                      {c.client.toUpperCase()}
                    </div>
                    <h3 className="mb-[10px] font-display text-[19px] font-semibold leading-[1.25] text-bone">
                      {c.title}
                    </h3>
                    <p className="mb-[18px] text-[14px] leading-[1.55] text-secondary">{c.excerpt}</p>
                    <ReadCase locale={locale} />
                  </div>
                </Link>
              </Reveal>
            );
          })}

          {/* View-all tile */}
          <Link
            href={withLocale(locale, "/our-cases")}
            className="flex min-h-[220px] flex-col items-center justify-center gap-[10px] rounded-[14px] border border-dashed border-[rgba(244,241,234,0.16)] no-underline transition-colors hover:border-[rgba(244,241,234,0.32)]"
          >
            <span className="font-display text-[34px] font-bold text-[rgba(244,241,234,0.16)]">+</span>
            <span className="font-display text-[16px] font-semibold text-bone">
              {t(locale, "cases.cta_view_all")}
            </span>
            <span className="font-mono text-[12px] text-tertiary">
              {t(locale, "cases.view_all_tile_sub")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
