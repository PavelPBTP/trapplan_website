"use client";

import { useEffect, useMemo, useState } from "react";
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

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const setLocaleCookie = (nextLocale: Locale) => {
    if (typeof document === "undefined") return;
    document.cookie = `tp_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
  };

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

  useEffect(() => {
    setOpen(false);
  }, [pathname, suffix]);

  return (
    <nav className="relative" aria-label="Select language">
      <details
        className="group"
        open={open}
        onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      >
        <summary className="list-none" aria-haspopup="listbox" aria-expanded={open}>
          <span className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-100 px-4 text-[13px] font-semibold text-black/80 transition-colors hover:bg-zinc-200">
            {LOCALE_LABELS[current]}
            <span className="text-[12px] text-black/55">▾</span>
          </span>
        </summary>
        <div className="absolute right-0 top-full z-50 mt-3 w-[160px] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-lg" role="listbox" aria-label="Languages">
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
                className={`block rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${
                  active ? "bg-black/[0.04] text-black" : "text-black/70 hover:bg-zinc-50 hover:text-black"
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
