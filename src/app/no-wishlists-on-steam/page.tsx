import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/no-wishlists-on-steam"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [
      l,
      new URL(withLocale(l, "/no-wishlists-on-steam"), origin).toString(),
    ]),
  ) as Record<string, string>;

  const title = t(locale, "seo.no_wishlists.title");
  const description = t(locale, "seo.no_wishlists.desc");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/no-wishlists-on-steam"), origin).toString(),
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

export default async function NoWishlistsOnSteamPage() {
  const locale = await getRequestLocale();
  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            No wishlists on Steam
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            A short, practical page you can link to. No external embeds, no CDN content.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-black/10 bg-white px-7 py-7">
              <h2 className="text-[18px] font-bold tracking-tight text-black">Common reasons</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                Low wishlist growth is usually a conversion problem, not a traffic problem. The store
                page promise might be unclear, the capsule might not earn clicks, or the page does not
                match the traffic you are sending.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white px-7 py-7">
              <h2 className="text-[18px] font-bold tracking-tight text-black">What to fix first</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                Start with positioning, capsule and short trailer clarity, then improve the top of the
                page (first scroll) and validate with clean tracking.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white px-7 py-7">
              <h2 className="text-[18px] font-bold tracking-tight text-black">Useful tools</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                Use our calculator to set realistic targets and sanity-check your current velocity.
              </p>
              <div className="mt-4">
                <Link
                  href={withLocale(locale, "/steam-wishlist-calculator")}
                  className="inline-flex items-center rounded-full bg-black px-5 py-2 text-[14px] font-bold text-white"
                >
                  Steam Wishlist Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
