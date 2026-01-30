import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "PR Starter Pack: Get the Coverage Your Game Deserves",
  description:
    "PR outreach for indie games. A readable press release, targeted pitches, follow ups, and a clear contact list. Built to earn credibility and Steam Wishlists.",
  alternates: {
    canonical: "/pr-starter-pack",
  },
  openGraph: {
    type: "website",
    url: "/pr-starter-pack",
    title: "PR Starter Pack: Get the Coverage Your Game Deserves",
    description:
      "PR outreach for indie games. A readable press release, targeted pitches, follow ups, and a clear contact list. Built to earn credibility and Steam Wishlists.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PR Starter Pack: Get the Coverage Your Game Deserves",
    description:
      "PR outreach for indie games. A readable press release, targeted pitches, follow ups, and a clear contact list. Built to earn credibility and Steam Wishlists.",
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

export default function PRStarterPackPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  Stop shouting into the void.
                  <br />
                  Get covered by the media.
                </h1>

                <p className="mt-5 max-w-[62ch] text-[14px] leading-6 text-black/60">
                  Media coverage is not just vanity. It is <span className="font-extrabold text-black">credibility</span>. One solid article works like a
                  <span className="font-extrabold text-black"> seal of approval</span> and pushes more players to hit
                  <span className="font-extrabold text-black"> Steam Wishlist</span>. This package exists to take PR off your plate while you finish the game.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href="/form"
                    className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                  >
                    Let’s Start <ArrowUpRightIcon />
                  </Link>
                  <div className="text-[18px] font-extrabold text-black">Price: €3 000</div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
                  <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_40px_90px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/images/PRHero.avif"
                      alt="PR starter pack preview"
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
                      src="/images/Key Doc.png"
                      alt="Press kit document preview"
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
                PR is leverage.
                <br />
                Not a lottery.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                Most indie teams do not fail at PR because they lack talent. They fail because they send the wrong message, to the wrong people, at the wrong time.
              </p>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-6 text-black/60">
                We package your announcement so it is easy to understand, easy to trust, and easy for a journalist to turn into a story.
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
                        src="/images/PR.jpg"
                        alt="PR coverage montage"
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
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">The PR Starter Pack</h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Press release that gets read:</span> formatted for journalists who skim hundreds of emails.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Targeted media list:</span> editors who actually cover your genre and platform.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Pitch templates:</span> concise emails that land your core angle fast.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Follow ups:</span> the persistence needed to cut through inbox noise.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Clear deliverables:</span> you know exactly what to send, to who, and when.
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
              <Step index="1" title="Position" text="We define your story angle and what makes the announcement newsworthy." />
              <Step index="2" title="Write" text="We create a press release and pitch copy that is fast to understand." />
              <Step index="3" title="Outreach" text="We build a targeted list and send the outreach in the right format." />
              <Step index="4" title="Follow up" text="We follow up to maximize replies and coverage opportunities." />
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
