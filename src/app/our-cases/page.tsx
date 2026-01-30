import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data/cases";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Cases",
  description: "Selected outcomes and case studies from TrapPlan.",
  alternates: {
    canonical: "/our-cases",
  },
};

export default function OurCasesPage() {
  const featured = CASE_STUDIES[0];

  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-14 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[56px]">
                Our Cases
              </h1>
              <p className="mt-5 max-w-[60ch] text-[15px] leading-7 text-black/65">
                A curated set of outcomes. We share what is useful publicly and keep sensitive details private.
              </p>
            </div>
          </div>

          {featured ? (
            <div className="mt-12">
              <div className="max-w-4xl">
                <Link
                  href={featured.href}
                  className="group block overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    {featured.coverImage ? (
                      <>
                        <Image
                          src={featured.coverImage.src}
                          alt={featured.coverImage.alt}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${featured.theme}`} />
                        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_55%),radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.35),transparent_60%)]" />
                      </>
                    )}
                  </div>

                  <div className="px-8 pt-8 pb-9">
                    <div className="text-[12px] font-semibold leading-none text-black/60">
                      <span>{featured.date}</span>
                      <span className="px-2">|</span>
                      <span>{featured.client}</span>
                    </div>

                    <h2 className="mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight text-black">
                      {featured.title}
                    </h2>

                    <p className="mt-3 max-w-[68ch] text-[14px] leading-6 text-black/60">
                      {featured.excerpt}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-6 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]">
                      View case study
                      <span className="transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CASE_STUDIES.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="group rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-zinc-50"
              >
                {c.coverImage ? (
                  <div className="relative h-[180px] w-full overflow-hidden rounded-2xl border border-black/10 bg-zinc-50">
                    <Image
                      src={c.coverImage.src}
                      alt={c.coverImage.alt}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                ) : (
                  <div className={`h-[180px] w-full rounded-2xl bg-gradient-to-br ${c.theme}`} />
                )}

                <div className="mt-6">
                  <div className="text-[13px] font-semibold text-black/60">
                    {c.date} | {c.client}
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h2 className="text-[20px] font-extrabold leading-tight tracking-tight text-black">
                      {c.title}
                    </h2>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[14px] font-extrabold text-black transition-colors group-hover:bg-zinc-200">
                      ↗
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">{c.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-7 sm:p-9">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-[12px] font-extrabold tracking-[0.16em] text-black/50">NEXT STEP</div>
                <h3 className="mt-4 text-[28px] font-extrabold tracking-tight text-black">
                  Want a similar outcome
                </h3>
                <p className="mt-3 max-w-[64ch] text-[14px] leading-6 text-black/65">
                  Share your timeline and goals. We will propose a repeatable plan and show relevant examples.
                </p>
              </div>
              <div className="lg:col-span-4">
                <Link
                  href="/form"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#FF0A5B] px-6 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  Contact us
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
