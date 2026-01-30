import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing systems.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    type: "website",
    url: "/about-us",
    title: "About Us",
    description:
      "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "TrapPlan helps game studios grow wishlists and sales with performance-driven marketing systems.",
  },
};

function NumberBadge({ n }: { n: string }) {
  return (
    <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/50">{n}</div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[32px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[40px]">
      {children}
    </h2>
  );
}

export default function AboutUsPage() {
  const principles = [
    {
      n: "01",
      title: "Strategy that fits your stage",
      body: "No generic advice. We map your current reality (team, timeline, audience, store assets) into a launch and growth plan that you can actually execute.",
    },
    {
      n: "02",
      title: "Messaging that converts",
      body: "We help you communicate the core promise of your game clearly across your Steam page, creative, and campaigns, so the right players understand it fast.",
    },
    {
      n: "03",
      title: "Execution with measurement",
      body: "We run structured marketing beats with clean tracking, clear ownership, and post-mortems, so every iteration improves outcomes.",
    },
  ];

  const values = [
    {
      n: "04",
      title: "Transparent, predictable process",
      body: "You always know what we are doing, why, and what success looks like. Clear deliverables, cadence, and decision logs.",
    },
    {
      n: "05",
      title: "Performance mindset",
      body: "We focus on what moves the needle: store conversion, wishlist velocity, and repeatable acquisition channels.",
    },
    {
      n: "06",
      title: "Built for game studios",
      body: "We design around the realities of production: limited time, shifting priorities, and asset constraints, without lowering the quality bar.",
    },
  ];

  return (
    <main className="bg-[#F3F3F3]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_20%,rgba(255,10,91,0.14),transparent_55%),radial-gradient(circle_at_76%_10%,rgba(0,0,0,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-14 lg:px-10 lg:pt-18">
          <div className="flex items-center justify-between">
            <NumberBadge n="01" />
            <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
          </div>

          <h1 className="mt-8 text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[56px]">
            About TrapPlan
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-black/65">
            We help game studios build predictable wishlist and sales growth by combining strategy,
            strong messaging, and performance-driven execution.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/form"
              className="inline-flex items-center justify-center rounded-full bg-[#FF0A5B] px-7 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
            >
              Work with us
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3 text-[13px] font-semibold text-black/80 transition-colors duration-200 hover:bg-black/5 hover:text-black"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="02" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>How we think</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-black/65">
                  We build systems that make marketing repeatable. The goal is not “more activity”,
                  it’s a clear chain from positioning to assets to distribution to measurement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4">
                {principles.map((p) => (
                  <div
                    key={p.n}
                    className="rounded-2xl border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/40">
                          {p.n}
                        </div>
                        <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                          {p.title}
                        </div>
                        <p className="mt-3 text-[14px] leading-6 text-black/60">{p.body}</p>
                      </div>
                      <div className="mt-1 h-2 w-2 flex-none rounded-full bg-[#FF0A5B]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="03" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>What you get</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-black/65">
                  A structured collaboration that reduces chaos and makes decisions measurable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/40">
                    OUTCOME
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    Clear priorities
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    A plan that maps milestones to marketing beats, with ownership and deadlines.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/40">
                    OUTCOME
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    Better conversion
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    Messaging and store assets tuned to reduce confusion and increase intent.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/40">
                    OUTCOME
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    Clean tracking
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    A measurement layer so you can see what channels and creatives work.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[#F3F3F3] px-7 py-7">
                  <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/40">
                    OUTCOME
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold tracking-tight text-black">
                    Repeatable learnings
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/60">
                    Post-mortems and iterations that compound over time instead of resetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <NumberBadge n="04" />
                <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
              </div>
              <div className="mt-6">
                <SectionTitle>Principles</SectionTitle>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-white/65">
                  How we collaborate with studios: the non-negotiables.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {values.map((v) => (
                  <div
                    key={v.n}
                    className="rounded-2xl border border-white/10 bg-white/5 px-7 py-7"
                  >
                    <div className="text-[12px] font-extrabold tracking-[0.18em] text-white/40">
                      {v.n}
                    </div>
                    <div className="mt-3 text-[18px] font-extrabold tracking-tight text-white">
                      {v.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-6 text-white/65">{v.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/form"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF0A5B] px-7 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  Let’s talk
                </Link>
                <a
                  href="mailto:hello@trapplan.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-7 py-3 text-[13px] font-semibold text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  hello@trapplan.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
