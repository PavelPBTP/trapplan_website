import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Game Launch Blueprint: Your Strategy, Our Standards.",
  description:
    "Stop guessing your next move. We provide the exact marketing framework used by publishers. Standardized, battle tested, and ready to execute together.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/game-launch-blueprint",
  },
  openGraph: {
    type: "website",
    url: "/game-launch-blueprint",
    title: "Game Launch Blueprint: Your Strategy, Our Standards.",
    description:
      "Stop guessing your next move. We provide the exact marketing framework used by publishers. Standardized, battle tested, and ready to execute together.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Launch Blueprint: Your Strategy, Our Standards.",
    description:
      "Stop guessing your next move. We provide the exact marketing framework used by publishers. Standardized, battle tested, and ready to execute together.",
  },
};

function SectionKicker({ children }: { children: string }) {
  return (
    <div className="text-[12px] font-semibold tracking-wide text-black/45">{children}</div>
  );
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

function ContactField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
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

export default function GameLaunchBlueprintPage() {
  const buildTogetherItems = [
    { label: "Master Strategy (Key Doc)" },
    { label: "Positioning and audience" },
    { label: "Communication roadmap" },
    { label: "Steam page setup" },
    { label: "Marketing assets" },
    { label: "Paid Ads" },
    { label: "Discord Server" },
    { label: "News outreach" },
    { label: "Influencer outreach" },
    { label: "Retention analytics" },
    { label: "Localization planning" },
    { label: "Steam bundle support" },
  ];

  const faqs = [
    {
      q: "Is this a done for you marketing service?",
      a: "No. This is a collaborative process where we provide the system, the standards, and the roadmap, but your team remains involved in the execution. It’s designed for studios that want to maintain control while using a professional framework.",
    },
    {
      q: "Can we start if we don't have a Steam page yet?",
      a: "Yes, in fact, starting before the page is live is often better. Our first Bit will focus entirely on your store presence: positioning, choosing the right tags, and preparing high conversion capsule art to ensure your first public appearance is high impact.",
    },
    {
      q: "What exactly is a Post Mortem report?",
      a: "Two weeks after every major milestone (a Bit), we deliver a deep dive report that identifies which influencers drove the most wishlists, how players behaved during the playtest, and what exactly needs to change for the next phase.",
    },
    {
      q: "How do you handle influencer outreach?",
      a: "We segment our database into news driven influencers for announcements and gameplay driven streamers for playtests and demos. We provide the templates and the schedule, then track the coverage to see who actually converted into wishlists.",
    },
    {
      q: "Do you help with localization and Asian markets?",
      a: "Yes. As part of the Logistics block, we help plan your localization strategy and run dedicated PR campaigns for China, Korea, and Japan during the Demo and Release phases.",
    },
    {
      q: "Why is the process broken down into Bits?",
      a: "Working bit by bit prevents marketing chaos. It allows us to focus 100% of the team's energy on one milestone at a time, ensuring every step is fully prepared and properly analyzed before moving to the next.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,31,109,0.14),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold text-black/70">
                <span className="h-2 w-2 rounded-full bg-[#FF1F6D]" />
                Blueprint Service
              </div>

              <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[54px]">
                Game Launch Blueprint
              </h1>

              <p className="mt-4 text-[18px] leading-7 text-black/70">
                Your Marketing, Powered by Our Systems.
              </p>

              <p className="mt-6 text-[15px] leading-7 text-black/65">
                Stop guessing your next move. We provide a standardized, publisher grade workflow that turns your dev milestones into high impact marketing beats. You keep the control; we provide the roadmap.
              </p>

              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>HOW IT WORKS</SectionKicker>
              <SectionTitle>Every milestone follows one loop</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-black/10 bg-white">
                <div className="h-full w-full p-6">
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">IMAGE PLACEHOLDER</div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-16 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-black/10" />
                    </div>
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-14 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-black/10" />
                    </div>
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-18 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-3/5 rounded-full bg-black/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    PHASE 1
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    Preparation
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    We build the Master Strategy, Steam assets, trailers, and influencer databases.
                  </p>
                </div>

                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    PHASE 2
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    The Bit (Live)
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    We execute the launch, opening the trailer, pushing Reddit, activating Discord, and running ads.
                  </p>
                </div>

                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    PHASE 3
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    Post Mortem
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    Two weeks later, you get a full analytical report on what worked and the plan for the next phase.
                  </p>
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
              <SectionKicker>WHAT WE BUILD</SectionKicker>
              <SectionTitle>What We Build Together</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {buildTogetherItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-[14px] border border-black/10 bg-white">
                      <div className="h-full w-full p-3">
                        <div className="h-2 w-20 rounded-full bg-black/10" />
                        <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                        <div className="mt-2 h-2 w-3/4 rounded-full bg-black/10" />
                      </div>
                    </div>

                    <div className="mt-4 flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[#FF1F6D]/70" />
                      <div className="text-[14px] font-semibold leading-6 text-black/75">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>BEST FIT</SectionKicker>
              <SectionTitle>Best Fit</SectionTitle>
              <p className="mt-5 text-[15px] leading-7 text-black/65">
                Quick check to see if this offer matches your current stage.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <div className="absolute left-[34px] top-7 bottom-7 w-px bg-black/10" aria-hidden />

                <div className="space-y-7">
                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-[#FF1F6D]" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">STATUS</div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        You have a Steam page, a playable demo, or a fixed release window.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-black/20" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">NEED</div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        You want a weekly task system with clear deadlines, not just ideas.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-black/20" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">GOAL</div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        Professional grade marketing without hiring a full in house department.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <SectionKicker>PROCESS</SectionKicker>
          <SectionTitle>How we work</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">STEP 1</div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">Kickoff</div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                We collect inputs and define the first milestone.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">STEP 2</div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">Execution plan</div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                You get a weekly task list with ownership and deadlines.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">STEP 3</div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">Report and next plan</div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                After the milestone, you get results and adjustments.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons />
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
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                Ready to start the preparation phase?
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                Send the basics and we’ll reply with the next steps: which Bit comes first, what to prepare, and how to measure success.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  Framework
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  Execution
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  Reporting
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[24px] bg-white px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="text-[12px] font-semibold tracking-wide text-black/45">
                  CONTACT
                </div>
                <div className="mt-3 text-[22px] font-extrabold tracking-tight text-black">
                  Let’s build your blueprint
                </div>

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
