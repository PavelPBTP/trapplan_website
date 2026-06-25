import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono, Anton } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderSwitch from "@/components/layout/HeaderSwitch";
import type { HeaderBundle } from "@/components/layout/headerTypes";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { getRequestLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";
import "./globals.css";

// Display + UI typeface
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body copy
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Numbers, eyebrows, mono labels
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Oversized display statements (Publishing hero, big headlines)
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const fontVariables = [
  spaceGrotesk.variable,
  hankenGrotesk.variable,
  jetbrainsMono.variable,
  anton.variable,
].join(" ");

export const viewport: Viewport = {
  themeColor: "#0C0B0A",
  colorScheme: "dark",
};

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

  const agencyHeader: HeaderBundle = {
    navItems: [
      { label: t(locale, "nav.services"), href: withLocale(locale, "/#services") },
      { label: t(locale, "nav.publishing"), href: withLocale(locale, "/publishing"), teal: true },
      { label: t(locale, "nav.our_cases"), href: withLocale(locale, "/our-cases") },
      { label: t(locale, "nav.packages"), href: withLocale(locale, "/#packages") },
      { label: t(locale, "nav.about_us"), href: withLocale(locale, "/about-us") },
    ],
    ctaHref: withLocale(locale, "/form"),
    ctaLabel: t(locale, "cta.request_quote"),
  };

  const publishingHeader: HeaderBundle & { badge: string } = {
    badge: "PUBLISHING",
    navItems: [
      { label: t(locale, "nav.why_us"), href: withLocale(locale, "/publishing#values") },
      { label: t(locale, "nav.how_we_help"), href: withLocale(locale, "/publishing#how") },
      { label: t(locale, "nav.your_ip"), href: withLocale(locale, "/publishing#ip") },
      { label: t(locale, "nav.agency"), href: withLocale(locale, "/") },
    ],
    ctaHref: withLocale(locale, "/form"),
    ctaLabel: t(locale, "cta.submit_game"),
  };

  // suppressHydrationWarning: browser extensions and GTM may inject attributes before React hydrates
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className={`${fontVariables} antialiased`} suppressHydrationWarning>
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#F0224E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <HeaderSwitch
          locale={locale}
          logoHref={withLocale(locale, "/")}
          agency={agencyHeader}
          publishing={publishingHeader}
        />
        <div id="main-content">{children}</div>
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
