import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/sections/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { withLocale, type Locale } from "@/lib/i18n.shared";
import { t, type CopyKey } from "@/lib/copy";

const TOOLS: { href: string; nameKey: CopyKey }[] = [
  { href: "/steam-wishlist-calculator", nameKey: "tools.steam_wishlist_calculator.name" },
  { href: "/steam-pricing-planner", nameKey: "tools.steam_pricing_planner.name" },
  { href: "/steam-influencers-planner", nameKey: "tools.steam_influencers_planner.ui.title" },
  { href: "/steam-festival-planner", nameKey: "tools.steam_festival_planner.name" },
];

interface ToolShellProps {
  locale: Locale;
  activeHref: string;
  title: string;
  lede: string;
  children: ReactNode;
}

export default function ToolShell({ locale, activeHref, title, lede, children }: ToolShellProps) {
  return (
    <main>
      {/* Breadcrumb */}
      <section className="mx-auto max-w-[1240px] px-6 pt-10 lg:px-8">
        <div className="font-mono text-[12px] tracking-[0.06em] text-tertiary">
          <Link href={withLocale(locale, "/")} className="text-secondary no-underline transition-colors hover:text-bone">
            Home
          </Link>{" "}
          <span className="text-faint">/</span> <span className="text-secondary">{t(locale, "tools.ui.free_tools")}</span>{" "}
          <span className="text-faint">/</span> <span className="text-secondary">{title}</span>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 pb-8 pt-12 lg:px-8">
        <Eyebrow
          number={t(locale, "tools.ui.free_tool")}
          label={t(locale, "tools.ui.free_tool_sub")}
          className="mb-[22px]"
        />
        <h1 className="mb-[18px] max-w-[720px] font-display text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-bone text-balance md:text-[50px]">
          {title}
        </h1>
        <p className="max-w-[600px] text-[18px] leading-[1.6] text-secondary">{lede}</p>
      </section>

      {/* Tool switcher */}
      <section className="mx-auto max-w-[1240px] px-6 pb-2 lg:px-8">
        <div className="flex flex-wrap gap-[10px]">
          {TOOLS.map((tool) => {
            const active = tool.href === activeHref;
            return (
              <Link
                key={tool.href}
                href={withLocale(locale, tool.href)}
                className={`inline-flex h-10 items-center rounded-[6px] px-[16px] font-display text-[13.5px] font-semibold no-underline transition ${
                  active
                    ? "bg-[var(--accent)] text-[var(--accent-on)]"
                    : "border border-[rgba(244,241,234,0.18)] text-secondary hover:text-bone"
                }`}
              >
                {t(locale, tool.nameKey)}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Widget */}
      {children}

      {/* CTA */}
      <section className="border-t border-[rgba(244,241,234,0.07)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 text-center lg:px-8">
          <h2 className="mb-4 font-display text-[38px] font-bold tracking-[-0.025em] text-bone text-balance">
            {t(locale, "tools.cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[17px] leading-[1.6] text-secondary">
            {t(locale, "tools.cta.body")}
          </p>
          <Button href={withLocale(locale, "/form")} glow>
            {t(locale, "cta.request_quote")} ↗
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
