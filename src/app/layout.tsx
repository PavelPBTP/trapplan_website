import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trapplan.com"),
  title: {
    default: "TrapPlan",
    template: "%s | TrapPlan",
  },
  description: "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "TrapPlan",
    title: "TrapPlan",
    description: "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing.",
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
    description: "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
        <StructuredData />
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
        <Header />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
