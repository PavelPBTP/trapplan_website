import { cookies } from "next/headers";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n.shared";

export async function getRequestLocale(): Promise<Locale> {
  const h = await headers();
  const headerLocale = h.get("x-tp-locale")?.trim();
  if (headerLocale && isLocale(headerLocale)) return headerLocale;

  const store = await cookies();
  const c = store.get("tp_locale")?.value;
  if (c && isLocale(c)) return c;

  return DEFAULT_LOCALE;
}

export * from "@/lib/i18n.shared";
