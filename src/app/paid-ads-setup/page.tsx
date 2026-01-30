import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Paid Ads Setup: Launch Your Campaigns Correctly",
  description:
    "We set up your paid ad campaigns end-to-end: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account.",
  alternates: {
    canonical: "/paid-ads-setup",
  },
  openGraph: {
    type: "website",
    url: "/paid-ads-setup",
    title: "Paid Ads Setup: Launch Your Campaigns Correctly",
    description:
      "We set up your paid ad campaigns end-to-end: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads Setup: Launch Your Campaigns Correctly",
    description:
      "We set up your paid ad campaigns end-to-end: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account.",
  },
};

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H17V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF0A5B] text-white">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Step({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <div className="relative rounded-[16px] bg-[#FF0A5B] px-6 pt-6 pb-7 text-white">
      <div className="absolute left-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[13px] font-extrabold text-black">
        {index}
      </div>
      <div className="pt-14 text-[14px] font-extrabold">{title}</div>
      <p className="mt-4 text-[14px] leading-6 text-white/80">{text}</p>
    </div>
  );
}

export default function PaidAdsSetupPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  Paid ads.
                  <br />
                  Set up once. Launch clean.
                </h1>

                <p className="mt-5 max-w-[62ch] text-[14px] leading-6 text-black/60">
                  We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement.
                  Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href="/form"
                    className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                  >
                    Let’s Start <ArrowUpRightIcon />
                  </Link>
                  <div className="text-[18px] font-extrabold text-black">Price: €2 000</div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
                  <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_40px_90px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/images/PaidHero.avif"
                      alt="Paid ads setup preview"
                      width={900}
                      height={720}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[28px]">
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="relative h-[280px] w-full max-w-[520px] overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/PaidHero.avif"
                      alt="Campaign configuration overview"
                      fill
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                Stop burning budget.
                <br />
                Fix the foundation.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                Most paid campaigns fail because the setup is wrong: bad tracking, wrong structure, unclear targeting, and mismatched creatives.
              </p>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-6 text-black/60">
                We set the account up correctly so you can launch with confidence and keep control after handoff.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 lg:px-10">
          <div className="rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
            <div className="relative h-[320px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-white to-[#FFF5F8]">
              <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_25%_30%,rgba(255,10,91,0.14),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.07),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="relative h-[260px] w-full max-w-[820px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[260px] w-full max-w-[740px] overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.12)]">
                      <Image
                        src="/images/PaidHero.avif"
                        alt="Paid ads setup mockup"
                        fill
                        sizes="(max-width: 1024px) 90vw, 740px"
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pt-10 pb-10 lg:px-12">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">The Paid Ads Setup</h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Channel selection:</span> pick the platforms that match your audience and funnel.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Budget configuration:</span> structure spend so it is controllable and measurable.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Targeting setup:</span> audiences, exclusions, and account hygiene.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Creative placement:</span> correct formats and placements per channel.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Handoff:</span> you get a clean account ready to run.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/form"
                  className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  Let’s Start <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:px-10">
            <h2 className="text-center text-[18px] font-extrabold text-black">How It Works</h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
              <Step index="1" title="Scope" text="We align on your goals, funnel, budget and constraints." />
              <Step index="2" title="Configure" text="We set up structure, targeting, placements and tracking." />
              <Step index="3" title="Launch" text="We help you launch clean with the right settings in place." />
              <Step index="4" title="Handoff" text="You get full access and a clear setup you can manage." />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/form"
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
              >
                Let’s Start <ArrowUpRightIcon />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
