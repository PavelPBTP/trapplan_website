import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { stagger } from "@/lib/stagger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PACKAGES } from "@/lib/data/packages";
import { t, type CopyKey } from "@/lib/copy";
import { withLocale, type Locale } from "@/lib/i18n.shared";

const COPY_BY_HREF: Record<string, { title: CopyKey; desc: CopyKey }> = {
  "/reddit-launch-support": { title: "packages.card.reddit.title", desc: "packages.card.reddit.desc" },
  "/pr-starter-pack": { title: "packages.card.pr_starter.title", desc: "packages.card.pr_starter.desc" },
  "/influencer-micro-campaign": {
    title: "packages.card.influencer_micro.title",
    desc: "packages.card.influencer_micro.desc",
  },
  "/tiktok-package-20-videos": { title: "packages.card.tiktok_20.title", desc: "packages.card.tiktok_20.desc" },
  "/paid-ads-setup": { title: "packages.card.paid_ads_setup.title", desc: "packages.card.paid_ads_setup.desc" },
  "/gameplay-trailer": {
    title: "packages.card.gameplay_trailer.title",
    desc: "packages.card.gameplay_trailer.desc",
  },
};

export default function ReadyToGoPackages({ locale }: { locale: Locale }) {
  return (
    <section id="packages" className="mx-auto max-w-[1240px] px-6 py-[110px] pb-[100px] lg:px-8">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
        <div className="max-w-[620px]">
          <Eyebrow number="03" label={t(locale, "packages.eyebrow")} className="mb-5" />
          <h2 className="font-display text-[46px] font-bold leading-[1.05] tracking-[-0.025em] text-bone">
            {t(locale, "packages.home_title")}
          </h2>
        </div>
        <p className="max-w-[360px] text-[16px] leading-[1.6] text-secondary">
          {t(locale, "packages.home_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 min-[1024px]:grid-cols-3">
        {PACKAGES.map((pkg, i) => {
          const keys = COPY_BY_HREF[pkg.href];
          const title = (keys ? t(locale, keys.title) : pkg.title).replace(/\n/g, " ");
          const desc = keys ? t(locale, keys.desc) : pkg.description;
          return (
            <Reveal key={pkg.href} delay={stagger(i)} className="block">
              <Link
                href={withLocale(locale, pkg.href)}
                className="flex h-full min-h-[240px] flex-col rounded-[14px] border border-[rgba(244,241,234,0.08)] bg-card p-[28px] px-[26px] no-underline transition-colors hover:border-[var(--accent)] hover:bg-card-hover"
              >
                <div className="mb-[18px] text-[13px] text-tertiary">{pkg.tag}</div>
                <div className="mb-[14px] flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[20px] font-semibold text-bone">{title}</h3>
                  <span className="whitespace-nowrap font-mono text-[15px] text-[var(--accent)]">
                    {pkg.price}
                  </span>
                </div>
                <p className="mb-[22px] text-[14px] leading-[1.6] text-secondary">{desc}</p>
                <span className="mt-auto font-mono text-[13px] text-bone">
                  {t(locale, "packages.cta_learn_more")} ↗
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
