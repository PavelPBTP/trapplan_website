import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import CreativeContentPipelineClient from "./creative-content-pipeline-client";

export const metadata: Metadata = {
  title: "Creative Content Pipeline for Steam and Console Games",
  description:
    "A continuous content pipeline for Steam and Console games. Trailers, shorts, store assets, and iterative production focused on Wishlist growth and conversion.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/creative-content-pipeline",
  },
  openGraph: {
    type: "website",
    url: "/creative-content-pipeline",
    title: "Creative Content Pipeline for Steam and Console Games",
    description:
      "A continuous content pipeline for Steam and Console games. Trailers, shorts, store assets, and iterative production focused on Wishlist growth and conversion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Content Pipeline for Steam and Console Games",
    description:
      "A continuous content pipeline for Steam and Console games. Trailers, shorts, store assets, and iterative production focused on Wishlist growth and conversion.",
  },
};

export default function CreativeContentPipelinePage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <CreativeContentPipelineClient />
        <Footer />
      </main>
    </>
  );
}
