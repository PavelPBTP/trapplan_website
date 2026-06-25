import Button from "@/components/ui/Button";
import ArtTile from "@/components/ui/ArtTile";
import Parallax from "@/components/ui/Parallax";
import { GAME_ART, artGradient } from "@/lib/data/gameArt";
import { withLocale, type Locale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

const HERO_TILES = [
  { art: GAME_ART.misery, ghostSize: 26, offset: false },
  { art: GAME_ART.warthunder, ghostSize: 22, offset: true },
  { art: GAME_ART.crossout, ghostSize: 24, offset: false },
  { art: GAME_ART.warships, ghostSize: 20, offset: true },
  { art: GAME_ART.enlisted, ghostSize: 24, offset: false },
] as const;

export default function Hero({ locale }: { locale: Locale }) {
  const lede = `${t(locale, "hero.subhead")} ${t(locale, "hero.body")}`;

  return (
    <section className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-[104px] lg:px-8">
      {/* Pink glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-40px] h-[520px] w-[900px] -translate-x-1/2 opacity-50 blur-[20px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="tp-grain" />

      <div className="relative max-w-[880px]">
        <h1 className="mb-6 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-bone text-balance md:text-[72px]">
          {t(locale, "hero.title_l1")}
          <br />
          {t(locale, "hero.title_l2_pre")}
          <span className="text-[var(--accent)]">{t(locale, "hero.title_accent")}</span>
        </h1>
        <p className="mb-[38px] max-w-[620px] text-[19px] leading-[1.6] text-secondary">{lede}</p>
        <div className="flex flex-wrap items-center gap-[14px]">
          <Button href={withLocale(locale, "/form")} size="lg" glow>
            {t(locale, "cta.request_quote")} <span>↗</span>
          </Button>
          <Button href={withLocale(locale, "/#cases")} variant="secondary" size="lg">
            {t(locale, "hero.cta_cases")} <span>→</span>
          </Button>
        </div>
      </div>

      <Parallax className="relative mt-16 grid grid-cols-2 gap-[14px] min-[720px]:grid-cols-3 min-[1024px]:grid-cols-5">
        {HERO_TILES.map((tile, i) => (
          <ArtTile
            key={tile.art.id}
            className="aspect-[3/4]"
            style={tile.offset ? { marginTop: 28 } : undefined}
            gradient={artGradient(tile.art, { alpha: 0.52, pos: "35% 22%" })}
            ghostName={tile.art.ghostName}
            ghostSize={tile.ghostSize}
            tag={tile.art.tag}
            cover={tile.art.portrait}
            coverAlt={tile.art.ghostName}
            priority={i < 3}
            sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ))}
      </Parallax>
    </section>
  );
}
