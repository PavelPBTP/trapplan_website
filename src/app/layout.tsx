import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const description = t(locale, "seo.site.description");

  return {
    metadataBase: new URL("https://www.trapplan.com"),
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    },
    title: {
      default: "TrapPlan",
      template: "%s | TrapPlan",
    },
    description,
    openGraph: {
      type: "website",
      url: "https://www.trapplan.com/",
      siteName: "TrapPlan",
      title: "TrapPlan",
      description,
      images: [
        {
          url: "/og",
          width: 1200,
          height: 630,
          alt: "TrapPlan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TrapPlan",
      description,
      images: ["/og"],
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
        <Header locale={locale} />
        {children}
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
