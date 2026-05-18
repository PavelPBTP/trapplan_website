import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Analytics from "@/components/Analytics";
import ConsentGatedAnalytics from "@/components/ConsentGatedAnalytics";
import StructuredData from "@/components/StructuredData";
import CookieConsent from "@/components/ui/CookieConsent";
import MobileCTA from "@/components/ui/MobileCTA";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const origin = "https://www.trapplan.com";
  const canonical = new URL(withLocale(locale, "/"), origin).toString();
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, new URL(withLocale(l, "/"), origin).toString()]),
  ) as Record<string, string>;

  const siteName = t(locale, "seo.site.name");
  const description = t(locale, "seo.site.description");

  return {
    metadataBase: new URL("https://www.trapplan.com"),
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    title: siteName,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": new URL(withLocale("en", "/"), origin).toString(),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      title: siteName,
      description,
      images: [
        {
          url: new URL("/og", origin).toString(),
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      images: [new URL("/og", origin).toString()],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  // suppressHydrationWarning: browser extensions and GTM may inject attributes before React hydrates
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M72W2WJX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#FF0A5B] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header locale={locale} />
        <div id="main-content">{children}</div>
        <MobileCTA
          href={withLocale(locale, "/form")}
          label={t(locale, "ui.mobile_cta.label")}
        />
        <CookieConsent
          title={t(locale, "ui.cookie.title")}
          body={t(locale, "ui.cookie.body")}
          acceptLabel={t(locale, "ui.cookie.accept")}
          rejectLabel={t(locale, "ui.cookie.reject")}
          learnMoreLabel={t(locale, "ui.cookie.learn_more")}
          learnMoreHref={withLocale(locale, "/cookies-policy")}
        />
        <Analytics />
        <ConsentGatedAnalytics />
      </body>
    </html>
  );
}
