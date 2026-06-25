"use client";

import { useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale, stripLocalePrefix, withLocale } from "@/lib/i18n.shared";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  it: "IT",
  fr: "FR",
  de: "DE",
  zh: "中文",
};

function setLocaleCookie(nextLocale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `tp_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const currentFromPath = useMemo(() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    return (seg && SUPPORTED_LOCALES.includes(seg as Locale) ? (seg as Locale) : DEFAULT_LOCALE) as Locale;
  }, [pathname]);

  const strippedPath = useMemo(() => stripLocalePrefix(pathname), [pathname]);

  const suffix = useMemo(() => {
    const q = searchParams?.toString();
    return q ? `?${q}` : "";
  }, [searchParams]);

  const current = currentFromPath || ((SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE) as Locale);

  return (
    <nav className="relative" aria-label="Select language">
      <details
        className="group"
        open={open}
        onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      >
        <summary className="list-none" aria-haspopup="listbox" aria-expanded={open}>
          <span className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[6px] border border-[rgba(244,241,234,0.18)] px-3.5 font-mono text-[13px] font-medium text-secondary transition-colors hover:text-bone">
            {LOCALE_LABELS[current]}
            <span className="text-[12px] text-tertiary">▾</span>
          </span>
        </summary>
        <div className="absolute right-0 top-full z-50 mt-3 w-[160px] overflow-hidden rounded-[12px] border border-[rgba(244,241,234,0.1)] bg-card p-2 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6)]" role="listbox" aria-label="Languages">
          {SUPPORTED_LOCALES.map((l) => {
            const href = withLocale(l, `${strippedPath}${suffix}`);
            const active = l === current;
            return (
              <Link
                key={l}
                href={href}
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLocaleCookie(l);
                  setOpen(false);
                }}
                className={`block rounded-[8px] px-3 py-2 font-mono text-[13px] font-medium transition-colors ${
                  active ? "bg-[rgba(244,241,234,0.06)] text-bone" : "text-secondary hover:bg-[rgba(244,241,234,0.04)] hover:text-bone"
                }`}
              >
                {LOCALE_LABELS[l]}
              </Link>
            );
          })}
        </div>
      </details>
    </nav>
  );
}
