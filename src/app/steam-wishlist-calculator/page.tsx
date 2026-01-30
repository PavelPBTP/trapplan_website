import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import SteamWishlistCalculatorClient from "./steam-wishlist-calculator-client";

export const metadata: Metadata = {
  title: "Steam Wishlist Calculator",
  description:
    "Estimate required wishlists, traffic and budget to hit your week 1 Steam sales target.",
  alternates: {
    canonical: "/steam-wishlist-calculator",
  },
  openGraph: {
    type: "website",
    url: "/steam-wishlist-calculator",
    title: "Steam Wishlist Calculator",
    description:
      "Estimate required wishlists, traffic and budget to hit your week 1 Steam sales target.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Wishlist Calculator",
    description:
      "Estimate required wishlists, traffic and budget to hit your week 1 Steam sales target.",
  },
};

export default function SteamWishlistCalculatorPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <SteamWishlistCalculatorClient />
        <Footer />
      </main>
    </>
  );
}
