import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import WorkWithUsForm from "@/components/forms/WorkWithUsForm";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { clampText } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/form"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/form"), origin).toString()]),
  ) as Record<string, string>;

  const title = t(locale, "form_page.title").replace(/\s+/g, " ").trim();
  const description = clampText(t(locale, "form_page.subtitle"), 160);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/form"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [
        {
          url: new URL("/og", origin).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og", origin).toString()],
    },
  };
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function FormPage() {
  const locale = await getRequestLocale();
  return (
    <>
      <main>
        <section className="mx-auto max-w-[1240px] px-6 pb-24 pt-14 lg:px-8 lg:pt-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h1 className="font-display text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-bone sm:text-[44px]">
                {t(locale, "form_page.title").split("\n").map((line, idx, arr) => (
                  <span key={`form-title-${idx}`}>
                    {line}
                    {idx < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-secondary">
                {t(locale, "form_page.subtitle")}
              </p>

              <ul className="mt-6 space-y-2 text-[14px] font-medium text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)]" />
                  {t(locale, "form_page.bullet.01")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)]" />
                  {t(locale, "form_page.bullet.02")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)]" />
                  {t(locale, "form_page.bullet.03")}
                </li>
              </ul>

              <a
                href="mailto:pb@trapplan.com"
                className="mt-7 inline-flex items-center gap-3 text-[14px] font-semibold text-bone transition-colors hover:text-secondary"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)]">
                  <MailIcon />
                </span>
                pb@trapplan.com
              </a>
            </div>

            <div className="lg:col-span-7 lg:flex lg:justify-end">
              <div className="w-full max-w-[520px] rounded-[16px] border border-[rgba(244,241,234,0.08)] bg-card px-8 pb-9 pt-8">
                <WorkWithUsForm locale={locale} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
