import Button from "@/components/ui/Button";
import { MonoEyebrow } from "@/components/ui/Eyebrow";
import { t, type CopyKey } from "@/lib/copy";
import { withLocale, type Locale } from "@/lib/i18n.shared";

const ROWS: { titleKey: CopyKey; descKey: CopyKey }[] = [
  { titleKey: "publishing.promo.row1.title", descKey: "publishing.promo.row1.desc" },
  { titleKey: "publishing.promo.row2.title", descKey: "publishing.promo.row2.desc" },
  { titleKey: "publishing.promo.row3.title", descKey: "publishing.promo.row3.desc" },
  { titleKey: "publishing.promo.row4.title", descKey: "publishing.promo.row4.desc" },
];

export default function PublishingPromo({ locale }: { locale: Locale }) {
  return (
    <section
      id="publishing"
      data-accent="teal"
      className="relative overflow-hidden border-y border-[rgba(91,214,176,0.2)] bg-[#0A0F0C]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[580px] w-[1150px] -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at center, rgba(91,214,176,0.13), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-[104px] lg:px-8">
        <MonoEyebrow label={t(locale, "publishing.promo.eyebrow")} dot className="mb-[26px]" />
        <h2 className="max-w-[980px] font-anton text-[44px] font-normal uppercase leading-[0.94] tracking-[-0.005em] text-bone md:text-[74px]">
          {t(locale, "publishing.promo.title_l1")}
          <br />
          {t(locale, "publishing.promo.title_l2_pre")}
          <span className="text-teal">{t(locale, "publishing.promo.title_accent")}</span>
          {t(locale, "publishing.promo.title_l2_post")}
        </h2>

        <div className="mt-[44px] grid grid-cols-1 items-end gap-[56px] lg:grid-cols-2">
          <div>
            <p className="mb-[30px] max-w-[520px] text-[19px] leading-[1.6] text-secondary">
              {t(locale, "publishing.promo.body_pre")}
              <span className="text-bone">{t(locale, "publishing.promo.body_ip")}</span>.
            </p>
            <Button href={withLocale(locale, "/publishing")} size="lg" glow>
              {t(locale, "publishing.promo.cta")} ↗
            </Button>
          </div>

          <div className="flex flex-col">
            {ROWS.map((row, i) => (
              <div
                key={row.titleKey}
                className={`flex items-baseline gap-4 border-t border-[rgba(244,241,234,0.1)] py-4 ${
                  i === ROWS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="text-[15px] text-teal">—</span>
                <div>
                  <span className="font-display text-[18px] font-semibold text-bone">
                    {t(locale, row.titleKey)}
                  </span>
                  <span className="text-[15px] text-tertiary">{t(locale, row.descKey)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
