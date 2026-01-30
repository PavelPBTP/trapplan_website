import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Influencer Activation for Games: Coverage That Converts.",
  description:
    "We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and post-campaign learnings. Repeatable, measurable, and built for games.",
  alternates: { canonical: "/influencer-activation-for-games" },
  openGraph: {
    type: "website",
    url: "/influencer-activation-for-games",
    title: "Influencer Activation for Games: Coverage That Converts.",
    description:
      "We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and post-campaign learnings. Repeatable, measurable, and built for games.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Activation for Games: Coverage That Converts.",
    description:
      "We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and post-campaign learnings. Repeatable, measurable, and built for games.",
  },
};

function SectionKicker({ children }: { children: string }) {
  return <div className="text-[12px] font-semibold tracking-wide text-black/45">{children}</div>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight text-black">
      {children}
    </h2>
  );
}

function CTAButtons() {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#FF1F6D] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_18px_42px_rgba(255,31,109,0.28)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.40)]"
      >
        Let&apos;s talk
      </a>
    </div>
  );
}

function ContactField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-black/60">{label}</span>
      <input
        className="mt-2 w-full rounded-[12px] bg-[#F5F5F5] px-4 py-4 text-[14px] text-black placeholder:text-black/40 outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FF1F6D]/40"
        placeholder={placeholder}
      />
    </label>
  );
}

export default function InfluencerActivationForGamesPage() {
  const deliverables = [
    "Creator list by tier and audience fit",
    "Outreach templates and follow-up sequence",
    "Keys/build distribution + scheduling",
    "Coverage tracking sheet + weekly updates",
    "Post-campaign report with learnings",
    "Next activation sprint plan",
  ];

  const faqs = [
    {
      q: "Do you guarantee coverage?",
      a: "No service can guarantee coverage, but we increase hit rate with better targeting, sequencing, and follow-ups.",
    },
    {
      q: "Which platforms do you activate?",
      a: "Twitch, YouTube, and TikTok  we tailor the format and the creator list per platform.",
    },
    {
      q: "How do you measure impact?",
      a: "We track coverage, views, link clicks and time-window lift with UTMs and structured reporting.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,31,109,0.14),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold text-black/70">
                <span className="h-2 w-2 rounded-full bg-[#FF1F6D]" />
                Service
              </div>

              <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[54px]">
                Influencer Activation for Games
              </h1>

              <p className="mt-4 text-[18px] leading-7 text-black/70">Coverage that converts into wishlists.</p>

              <p className="mt-6 text-[15px] leading-7 text-black/65">
                We run structured influencer campaigns: sourcing, outreach, coordination, tracking, and learnings.
                Repeatable execution instead of random emails.
              </p>

              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>HOW IT WORKS</SectionKicker>
              <SectionTitle>One sprint, one loop</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">PHASE 1</div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">Preparation</div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">Targeting, angles, assets, tracking.</p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">PHASE 2</div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">Activation</div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">Outreach, follow-ups, scheduling.</p>
                </div>
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">PHASE 3</div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">Post Mortem</div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">Report, learnings, next sprint.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>WHAT YOU GET</SectionKicker>
              <SectionTitle>Deliverables</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {deliverables.map((label) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[#FF1F6D]/70" aria-hidden />
                      <div className="text-[14px] font-semibold leading-6 text-black/75">{label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTAButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>FAQ</SectionKicker>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[18px] border border-black/10 bg-white px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <div className="text-[15px] font-semibold leading-7 text-black">{item.q}</div>
                      <div className="mt-1 text-black/30 transition-transform duration-200 group-open:rotate-45">
                        <span className="text-[18px] leading-none">+</span>
                      </div>
                    </summary>
                    <div className="mt-3 text-[15px] leading-7 text-black/65">{item.a}</div>
                  </details>
                ))}
              </div>

              <div className="mt-10">
                <CTAButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to plan your first activation sprint?
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                Share the basics and well reply with the next steps.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[24px] bg-white px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="text-[12px] font-semibold tracking-wide text-black/45">CONTACT</div>
                <div className="mt-3 text-[22px] font-extrabold tracking-tight text-black">Lets talk</div>
                <form className="mt-7 space-y-5" action="#">
                  <ContactField label="Name" placeholder="Your full name" />
                  <ContactField label="Studio name" placeholder="Your studio" />
                  <ContactField
                    label="Steam page / Demo link"
                    placeholder="https://store.steampowered.com/app/..."
                  />
                  <button
                    type="button"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#FF1F6D] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,31,109,0.30)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.42)]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
