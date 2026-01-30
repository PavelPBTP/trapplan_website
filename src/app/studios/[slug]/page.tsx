import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";
import { STUDIO_PAGES } from "@/lib/data/studios";

export function generateStaticParams() {
  return STUDIO_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = STUDIO_PAGES.find((x) => x.slug === slug);
  if (!s) return {};

  const url = `/studios/${slug}`;

  return {
    title: s.title,
    description: s.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: s.title,
      description: s.excerpt,
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.excerpt,
    },
  };
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = STUDIO_PAGES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <div className={`h-[220px] w-full rounded-3xl bg-gradient-to-br ${s.theme}`} />
          <div className="mt-10">
            <div className="text-[13px] font-semibold text-black/60">
              {s.date} | {s.client}
            </div>
            <h1 className="mt-3 text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
              {s.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-black/65">{s.excerpt}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
