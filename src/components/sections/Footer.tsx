import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/data/footer";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";

export default async function Footer() {
  const locale = await getRequestLocale();

  const localizeHref = (href: string) =>
    href.startsWith("/") ? withLocale(locale, href) : href;

  const isExternal = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

  return (
    <footer className="border-t border-[rgba(244,241,234,0.07)] bg-void">
      <div className="mx-auto max-w-[1240px] px-6 pb-10 pt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href={withLocale(locale, "/")} className="inline-flex no-underline">
              <span className="inline-flex items-center rounded-[9px] bg-bone px-[11px] py-[7px]">
                <Image src="/brand/logo.png" alt="TrapPlan" width={64} height={40} className="h-[22px] w-auto" />
              </span>
            </Link>
            <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.6] text-tertiary">
              {t(locale, "footer.tagline")}
            </p>
            <a
              href="mailto:hello@trapplan.com"
              className="mt-4 inline-block font-mono text-[13px] text-secondary no-underline transition-colors hover:text-bone"
            >
              hello@trapplan.com
            </a>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.titleKey} className="lg:col-span-2">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-tertiary">
                {t(locale, group.titleKey)}
              </div>
              <ul className="flex flex-col gap-[11px]">
                {group.links.map((l) => (
                  <li key={l.labelKey + l.href}>
                    <a
                      href={localizeHref(l.href)}
                      className="text-[14px] text-secondary no-underline transition-colors hover:text-bone"
                      {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : null)}
                    >
                      {t(locale, l.labelKey).replace(/\n/g, " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[rgba(244,241,234,0.07)] pt-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[12px] text-tertiary">
            © 2026 TrapPlan · {t(locale, "footer.all_rights_reserved")}
          </span>
          <div className="flex flex-wrap items-center gap-5 font-mono text-[12px]">
            <a
              href="https://www.linkedin.com/company/trapplan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline transition-colors hover:text-bone"
            >
              LinkedIn
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/24291473"
              className="text-secondary no-underline transition-colors hover:text-bone"
            >
              {t(locale, "footer.notice_at_collection")}
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/24291473/cookie-policy"
              className="inline-flex items-center gap-2 text-secondary no-underline transition-colors hover:text-bone"
            >
              {t(locale, "footer.privacy_choices")}
              <span className="inline-flex h-4 w-6 items-center justify-center rounded-[6px] bg-[#2563EB] text-[11px] font-bold leading-none text-white">
                ✓
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
