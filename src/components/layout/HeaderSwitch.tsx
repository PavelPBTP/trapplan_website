"use client";

import { usePathname } from "next/navigation";
import HeaderView from "@/components/layout/HeaderView";
import { stripLocalePrefix, type Locale } from "@/lib/i18n.shared";
import type { HeaderBundle } from "@/components/layout/headerTypes";

interface HeaderSwitchProps {
  locale: Locale;
  logoHref: string;
  agency: HeaderBundle;
  publishing: HeaderBundle & { badge: string };
}

/**
 * Picks the agency (pink) or Publishing (teal) header based on the current
 * route. Label/href bundles are computed on the server and passed as plain
 * strings, so no copy data ships to the client.
 */
export default function HeaderSwitch({ locale, logoHref, agency, publishing }: HeaderSwitchProps) {
  const pathname = usePathname() || "/";
  const isPublishing = stripLocalePrefix(pathname).startsWith("/publishing");

  if (isPublishing) {
    return (
      <HeaderView
        locale={locale}
        logoHref={logoHref}
        variant="publishing"
        badge={publishing.badge}
        navItems={publishing.navItems}
        ctaHref={publishing.ctaHref}
        ctaLabel={publishing.ctaLabel}
      />
    );
  }

  return (
    <HeaderView
      locale={locale}
      logoHref={logoHref}
      variant="agency"
      navItems={agency.navItems}
      ctaHref={agency.ctaHref}
      ctaLabel={agency.ctaLabel}
    />
  );
}
