import Link from "next/link";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { stagger } from "@/lib/stagger";
import { PACKAGE_DETAILS, type PackageDetail } from "@/lib/data/packageDetails";
import { breadcrumbList, SITE_ORIGIN } from "@/lib/seo";
import { withLocale, type Locale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

interface PackageTemplateProps {
  detail: PackageDetail;
  locale: Locale;
}

export default function PackageTemplate({ detail, locale }: PackageTemplateProps) {
  const formHref = withLocale(locale, "/form");
  const packagesHref = withLocale(locale, "/#packages");
  const related = detail.related
    .map((href) => PACKAGE_DETAILS[href])
    .filter((p): p is PackageDetail => Boolean(p));

  return (
    <>
      <main>
        {/* Breadcrumb */}
        <section className="mx-auto max-w-[1240px] px-6 pt-10 lg:px-8">
          <div className="font-mono text-[12px] tracking-[0.06em] text-tertiary">
            <Link href={withLocale(locale, "/")} className="text-secondary no-underline transition-colors hover:text-bone">
              Home
            </Link>{" "}
            <span className="text-faint">/</span>{" "}
            <Link href={packagesHref} className="text-secondary no-underline transition-colors hover:text-bone">
              {t(locale, "packages.detail.breadcrumb_packages")}
            </Link>{" "}
            <span className="text-faint">/</span> <span className="text-secondary">{detail.title}</span>
          </div>
        </section>

        {/* Hero + price aside */}
        <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[56px] px-6 pb-16 pt-12 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div>
            <div className="mb-[22px] flex items-center gap-[13px]">
              <span className="font-display text-[13px] font-bold text-[var(--accent)]">
                {t(locale, "packages.detail.eyebrow")}
              </span>
              <span className="h-px w-[26px] bg-[rgba(244,241,234,0.2)]" />
              <span className="text-[14px] text-secondary">{detail.category}</span>
            </div>
            <h1 className="mb-[22px] font-display text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-bone md:text-[54px]">
              {detail.title}
            </h1>
            <p className="max-w-[560px] text-[19px] leading-[1.6] text-secondary">{detail.lede}</p>
            <div className="mt-10 flex gap-10 border-t border-[rgba(244,241,234,0.08)] pt-8">
              {detail.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[30px] text-bone [font-variant-numeric:tabular-nums]">{s.value}</div>
                  <div className="mt-[6px] font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card p-[30px] lg:sticky lg:top-[96px]">
            <div className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
              {t(locale, "packages.detail.fixed_price")}
            </div>
            <div className="mb-[22px] flex items-baseline gap-2">
              <span className="font-mono text-[44px] tracking-[-0.02em] text-bone">{detail.price}</span>
              <span className="text-[14px] text-tertiary">{t(locale, "packages.detail.one_time")}</span>
            </div>
            <Button href={formHref} glow className="mb-3 w-full">
              {t(locale, "packages.detail.request")} ↗
            </Button>
            <Button href={formHref} variant="secondary" size="md" className="w-full">
              {t(locale, "packages.detail.talk")}
            </Button>
            <div className="mt-[22px] border-t border-[rgba(244,241,234,0.08)] pt-5 text-[13px] leading-[1.7] text-secondary">
              {detail.meta.map((m) => (
                <div key={m.label} className="flex justify-between">
                  <span>{m.label}</span>
                  <span className="font-mono text-bone">{m.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* What's included */}
        <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
          <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
            <Eyebrow number="01" label={t(locale, "packages.detail.included_eyebrow")} className="mb-5" />
            <h2 className="mb-11 font-display text-[36px] font-bold tracking-[-0.025em] text-bone">
              {detail.includedTitle}
            </h2>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 min-[1024px]:grid-cols-3">
              {detail.included.map((item, i) => (
                <Reveal key={item.title} delay={stagger(i)} className="block">
                  <div className="h-full rounded-[12px] border border-[rgba(244,241,234,0.08)] bg-card p-[26px]">
                    <div className="mb-[14px] font-mono text-[13px] text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mb-[10px] font-display text-[18px] font-semibold text-bone">{item.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-secondary">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
          <Eyebrow number="02" label={t(locale, "packages.detail.process_eyebrow")} className="mb-5" />
          <h2 className="mb-11 font-display text-[36px] font-bold tracking-[-0.025em] text-bone">
            {detail.processTitle}
          </h2>
          <div className="flex flex-col">
            {detail.process.map((step, i) => (
              <div
                key={`${step.step}-${i}`}
                className={`flex flex-col gap-3 border-t border-[rgba(244,241,234,0.08)] py-6 md:flex-row md:gap-7 ${
                  i === detail.process.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-12 flex-shrink-0 font-mono text-[14px] text-[var(--accent)]">{step.step}</div>
                <div className="w-[240px] flex-shrink-0">
                  <h3 className="font-display text-[19px] font-semibold text-bone">{step.title}</h3>
                </div>
                <p className="max-w-[560px] text-[15px] leading-[1.6] text-secondary">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pairs well with */}
        {related.length > 0 ? (
          <section className="border-t border-[rgba(244,241,234,0.07)] bg-void-alt">
            <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8">
              <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
                <h2 className="font-display text-[32px] font-bold tracking-[-0.025em] text-bone">
                  {t(locale, "packages.detail.pairs_well")}
                </h2>
                <Link
                  href={packagesHref}
                  className="font-mono text-[13px] text-secondary no-underline transition-colors hover:text-bone"
                >
                  {t(locale, "packages.detail.all_packages")} ↗
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.href}
                    href={withLocale(locale, rel.href)}
                    className="flex min-h-[170px] flex-col rounded-[12px] border border-[rgba(244,241,234,0.08)] bg-card p-[26px] no-underline transition-colors hover:border-[var(--accent)] hover:bg-card-hover"
                  >
                    <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                      {rel.category}
                    </div>
                    <h3 className="mb-auto font-display text-[19px] font-semibold text-bone">{rel.title}</h3>
                    <div className="mt-[18px] flex items-center justify-between">
                      <span className="font-mono text-[15px] text-bone">{rel.price}</span>
                      <span className="text-tertiary">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Final CTA */}
        <section className="border-t border-[rgba(244,241,234,0.07)]">
          <div className="mx-auto max-w-[1240px] px-6 py-[90px] text-center lg:px-8">
            <h2 className="mb-[18px] font-display text-[42px] font-bold tracking-[-0.025em] text-bone text-balance">
              {detail.ctaTitle}
            </h2>
            <p className="mx-auto mb-[34px] max-w-[520px] text-[17px] leading-[1.6] text-secondary">
              {detail.ctaBody}
            </p>
            <div className="flex flex-wrap justify-center gap-[14px]">
              <Button href={formHref} glow>
                {t(locale, "packages.detail.request")} ↗
              </Button>
              <Button href="https://wa.me/381631808155" variant="secondary" external>
                {t(locale, "form.get_a_quote.message_whatsapp")}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: detail.title,
          description: detail.metaDescription,
          provider: { "@type": "Organization", name: "TrapPlan", url: SITE_ORIGIN },
          areaServed: "Worldwide",
          offers: { "@type": "Offer", price: detail.priceNumeric, priceCurrency: "EUR" },
        }}
      />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: new URL(withLocale(locale, "/"), SITE_ORIGIN).toString() },
          {
            name: t(locale, "packages.detail.breadcrumb_packages"),
            url: new URL(withLocale(locale, "/#packages"), SITE_ORIGIN).toString(),
          },
          { name: detail.title },
        ])}
      />
      <Footer />
    </>
  );
}
