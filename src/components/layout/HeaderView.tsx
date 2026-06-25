"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileNav from "@/components/layout/MobileNav";
import Button from "@/components/ui/Button";
import type { NavItem } from "@/components/layout/headerTypes";
import type { Locale } from "@/lib/i18n.shared";

interface HeaderViewProps {
  locale: Locale;
  logoHref: string;
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  variant: "agency" | "publishing";
  /** Cream "PUBLISHING" badge next to the logo (publishing variant). */
  badge?: string;
}

export default function HeaderView({
  locale,
  logoHref,
  navItems,
  ctaHref,
  ctaLabel,
  variant,
  badge,
}: HeaderViewProps) {
  return (
    <header
      data-accent={variant === "publishing" ? "teal" : undefined}
      className="sticky top-0 z-50 border-b border-[rgba(244,241,234,0.07)] bg-[rgba(12,11,10,0.82)] backdrop-blur-[14px]"
    >
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-8">
        <Link href={logoHref} className="flex items-center gap-[10px] no-underline">
          <span className="inline-flex items-center rounded-[10px] bg-bone px-[13px] py-[8px]">
            <Image
              src="/brand/logo.png"
              alt="TrapPlan"
              width={72}
              height={44}
              priority
              className="h-[26px] w-auto"
            />
          </span>
          {badge ? (
            <span className="inline-flex h-[30px] items-center rounded-[7px] bg-bone px-[13px] font-display text-[13px] font-bold uppercase tracking-[0.14em] text-void">
              {badge}
            </span>
          ) : null}
        </Link>

        <div className="flex items-center gap-[22px]">
          <div className="hidden items-center gap-[26px] text-[14.5px] font-medium lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.teal
                    ? "text-[#5BD6B0] no-underline transition hover:brightness-110"
                    : "text-secondary no-underline transition-colors hover:text-bone"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <LanguageSwitcher locale={locale} />

          <div className="hidden lg:block">
            <Button href={ctaHref} size="sm">
              {ctaLabel} <span className="text-[13px]">↗</span>
            </Button>
          </div>

          <MobileNav navItems={navItems} ctaHref={ctaHref} ctaLabel={ctaLabel} />
        </div>
      </nav>
    </header>
  );
}
