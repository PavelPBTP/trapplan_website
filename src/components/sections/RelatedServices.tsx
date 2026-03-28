import Link from "next/link";
import { withLocale, type Locale } from "@/lib/i18n.shared";
import { t, type CopyKey } from "@/lib/copy";

const SERVICES: { href: string; titleKey: CopyKey; descKey: CopyKey }[] = [
  { href: "/reddit-launch-support", titleKey: "packages.card.reddit.title", descKey: "seo.reddit_launch_support.desc" },
  { href: "/pr-starter-pack", titleKey: "packages.card.pr_starter.title", descKey: "seo.pr_starter_pack.desc" },
  { href: "/influencer-micro-campaign", titleKey: "packages.card.influencer_micro.title", descKey: "seo.influencer_micro.desc" },
  { href: "/tiktok-package-20-videos", titleKey: "packages.card.tiktok_20.title", descKey: "seo.tiktok_20.desc" },
  { href: "/paid-ads-setup", titleKey: "packages.card.paid_ads_setup.title", descKey: "seo.paid_ads_setup.desc" },
  { href: "/gameplay-trailer", titleKey: "packages.card.gameplay_trailer.title", descKey: "seo.gameplay_trailer.desc" },
  { href: "/influencer-activation-for-games", titleKey: "seo.influencer_activation.title", descKey: "seo.influencer_activation.desc" },
];

export default function RelatedServices({
  locale,
  currentHref,
}: {
  locale: Locale;
  currentHref: string;
}) {
  const related = SERVICES.filter((s) => s.href !== currentHref).slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <h2 className="text-center text-[18px] font-extrabold text-black">
          {t(locale, "related_services.title")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.href}
              href={withLocale(locale, s.href)}
              className="group rounded-[18px] border border-black/10 px-6 py-6 transition-colors hover:border-[#FF0A5B]/30 hover:bg-[#FFF5F8]"
            >
              <div className="text-[15px] font-extrabold text-black">
                {t(locale, s.titleKey).replace(/\n/g, " ")}
              </div>
              <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-black/60">
                {t(locale, s.descKey)}
              </p>
              <span className="mt-4 inline-block text-[12px] font-semibold text-[#FF0A5B]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
