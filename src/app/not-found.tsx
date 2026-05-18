import Link from "next/link";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";

export const metadata = {
  title: "Page Not Found | TrapPlan",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS: { href: string; key: "nav.about_us" | "nav.services" | "nav.our_cases" | "nav.blog" | "cta.work_with_us" }[] = [
  { href: "/services", key: "nav.services" },
  { href: "/our-cases", key: "nav.our_cases" },
  { href: "/blog", key: "nav.blog" },
  { href: "/about-us", key: "nav.about_us" },
  { href: "/form", key: "cta.work_with_us" },
];

export default async function NotFound() {
  const locale = await getRequestLocale();

  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14">
            <Breadcrumbs
              trail={[
                { name: t(locale, "ui.breadcrumb.home"), href: withLocale(locale, "/") },
                { name: "404", href: "#" },
              ]}
              className="mb-6"
            />

            <div className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#FF0A5B]">
              404
            </div>
            <h1 className="mt-3 text-[44px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[56px]">
              Page not found.
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/65">
              The page you were looking for doesn&apos;t exist or has moved.
              Here are a few places that might help.
            </p>

            <div className="mt-10">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-black/45">
                Popular destinations
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={withLocale(locale, link.href)}
                      className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                    >
                      <span className="text-[15px] font-semibold text-black group-hover:text-[#FF0A5B]">
                        {t(locale, link.key)}
                      </span>
                      <span aria-hidden className="text-[18px] leading-none text-black/40 group-hover:text-[#FF0A5B]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Link
                href={withLocale(locale, "/")}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors hover:bg-[#E6004E]"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
