import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { stagger } from "@/lib/stagger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Tag from "@/components/ui/Tag";
import { t, type CopyKey } from "@/lib/copy";
import { withLocale, type Locale } from "@/lib/i18n.shared";

interface Row {
  num: string;
  href: string;
  titleKey: CopyKey;
  subKey: CopyKey;
  bodyKey: CopyKey;
  tagsKey: CopyKey;
}

const ROWS: Row[] = [
  {
    num: "01",
    href: "/game-launch-blueprint",
    titleKey: "services.row.blueprint.title",
    subKey: "services.row.blueprint.sub",
    bodyKey: "services.row.blueprint.body",
    tagsKey: "services.row.blueprint.tags",
  },
  {
    num: "02",
    href: "/paid-growth",
    titleKey: "services.row.paid.title",
    subKey: "services.row.paid.sub",
    bodyKey: "services.row.paid.body",
    tagsKey: "services.row.paid.tags",
  },
  {
    num: "03",
    href: "/creative-content-pipeline",
    titleKey: "services.row.organic.title",
    subKey: "services.row.organic.sub",
    bodyKey: "services.row.organic.body",
    tagsKey: "services.row.organic.tags",
  },
];

export default function ServicesRows({ locale }: { locale: Locale }) {
  return (
    <section id="services" className="relative overflow-hidden bg-void">
      <div
        className="pointer-events-none absolute left-[6%] top-[-40px] h-[420px] w-[620px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-[110px] lg:px-8">
        <div className="mb-[34px] flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-[640px]">
            <Eyebrow number="01" label={t(locale, "services.eyebrow")} className="mb-[22px]" />
            <h2 className="font-display text-[46px] font-bold leading-[1.05] tracking-[-0.025em] text-bone">
              {t(locale, "services.global_title")}
            </h2>
          </div>
          <p className="max-w-[380px] text-[16px] leading-[1.6] text-secondary">
            {t(locale, "services.global_subtitle")}
          </p>
        </div>

        <div className="border-b border-[rgba(244,241,234,0.1)]">
          {ROWS.map((row, i) => {
            const tags = t(locale, row.tagsKey).split("|");
            return (
              <Reveal key={row.num} delay={stagger(i)}>
                <Link
                  href={withLocale(locale, row.href)}
                  className="group grid grid-cols-1 items-start gap-10 border-t border-[rgba(244,241,234,0.1)] py-10 no-underline md:grid-cols-[96px_300px_1fr]"
                >
                  <div className="font-display text-[54px] font-bold leading-[0.85] text-[rgba(244,241,234,0.14)] transition-colors group-hover:text-[var(--accent)]">
                    {row.num}
                  </div>
                  <div>
                    <h3 className="mb-[10px] font-display text-[27px] font-semibold tracking-[-0.015em] text-bone">
                      {t(locale, row.titleKey)}
                    </h3>
                    <div className="text-[13px] text-tertiary">{t(locale, row.subKey)}</div>
                  </div>
                  <div>
                    <p className="mb-[18px] max-w-[520px] text-[16px] leading-[1.65] text-secondary">
                      {t(locale, row.bodyKey)}
                    </p>
                    <div className="flex flex-wrap gap-[10px]">
                      {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
