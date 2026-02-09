import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import WorkWithUsForm from "@/components/forms/WorkWithUsForm";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = withLocale(locale, "/form");
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, withLocale(l, "/form")]),
  ) as Record<string, string>;

  const title = t(locale, "cta.work_with_us");
  const description = t(locale, "form_page.subtitle");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-24 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h1 className="text-[40px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[44px]">
                {t(locale, "form_page.title").split("\n").map((line, idx, arr) => (
                  <span key={`form-title-${idx}`}>
                    {line}
                    {idx < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-[52ch] text-[14px] leading-6 text-black/60">
                {t(locale, "form_page.subtitle")}
              </p>

              <ul className="mt-6 space-y-2 text-[14px] font-semibold text-black/70">
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  {t(locale, "form_page.bullet.01")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  {t(locale, "form_page.bullet.02")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  {t(locale, "form_page.bullet.03")}
                </li>
              </ul>

              <a
                href="mailto:pb@trapplan.com"
                className="mt-7 inline-flex items-center gap-3 text-[14px] font-semibold text-black transition-colors hover:text-black/80"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0A5B]/10 text-[#FF0A5B]">
                  <MailIcon />
                </span>
                pb@trapplan.com
              </a>
            </div>

            <div className="lg:col-span-7 lg:flex lg:justify-end">
              <div className="w-full max-w-[520px] rounded-[22px] bg-white px-8 pt-8 pb-9 shadow-[0_30px_70px_rgba(0,0,0,0.10)]">
                <WorkWithUsForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
