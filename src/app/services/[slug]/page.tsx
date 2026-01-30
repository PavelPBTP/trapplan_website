import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";

const SERVICE_SLUGS = [
  "performance-based-campaigns",
  "influencer-marketing-remote-team",
  "game-key-distibution",
  "social-media-for-games",
  "influencer-marketing-for-games",
  "reddit-campaigns",
  "go-to-market-strategy",
  "paid-media",
  "influencer",
  "pr-and-communications",
  "content-production",
  "social-media",
] as const;

type ServiceSlug = (typeof SERVICE_SLUGS)[number];

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) return {};

  const title = titleFromSlug(slug);
  const url = `/services/${slug}`;
  const description =
    "Service overview from TrapPlan. This page is stored in the repo and does not load any external content.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) notFound();

  const title = titleFromSlug(slug);

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            This is a local placeholder page for an older route. No external content is loaded.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
