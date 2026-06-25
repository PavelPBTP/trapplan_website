export interface NavItem {
  label: string;
  href: string;
  /** Render in the teal Publishing accent. */
  teal?: boolean;
}

export interface HeaderBundle {
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}
