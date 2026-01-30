import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import InternalLinksSection from "@/components/sections/InternalLinksSection";

export const metadata: Metadata = {
  title: "TikTok Package: 20 Videos",
  description:
    "Get 20 TikTok videos tailored for your game: hooks, scripts, editing, and a clear content plan designed to drive wishlists and awareness.",
  alternates: {
    canonical: "/tiktok-package-20-videos",
  },
  openGraph: {
    type: "website",
    url: "/tiktok-package-20-videos",
    title: "TikTok Package: 20 Videos",
    description:
      "Get 20 TikTok videos tailored for your game: hooks, scripts, editing, and a clear content plan designed to drive wishlists and awareness.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Package: 20 Videos",
    description:
      "Get 20 TikTok videos tailored for your game: hooks, scripts, editing, and a clear content plan designed to drive wishlists and awareness.",
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

const LAPTOP_SRC =
  "/images/TT-6.avif";

const WISHLIST_PHONES = [
  "/images/TT-1.avif",
  "/images/TT-2.avif",
  "/images/TT-3.avif",
  "/images/TT-4.avif",
  "/images/TT-5.avif",
];

function PackageCard({
  title,
  description,
  price,
  href,
}: {
  title: string;
  description: string;
  price?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block rounded-[18px] bg-white px-5 pt-6 pb-5 shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-shadow duration-200 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="whitespace-pre-line text-[14px] font-extrabold leading-tight tracking-tight text-black">
        {title}
      </div>
      <p
        className="mt-4 text-[13px] leading-6 text-black/60"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {price ? (
        <div className="mt-6 text-[13px] font-extrabold text-black">
          Price: {price}
        </div>
      ) : null}

      <div className="mt-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-5 py-2 text-[13px] font-semibold text-white transition-colors duration-200 group-hover:bg-[#E6004E]">
          Learn more <ArrowUpRightIcon />
        </span>
      </div>
    </a>
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

export default function TikTokPackage20VideosPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  20 short videos
                  <br />
                  for your game to
                  <br />
                  grow your Steam
                  <br />
                  Wishlists.
                </h1>

                <p className="mt-5 max-w-[58ch] text-[14px] leading-6 text-black/60">
                  Twenty high impact TikTok videos crafted around your gameplay,
                  hooks and audience triggers. This package gives you a steady
                  flow of content that drives views, followers and wishlist
                  momentum.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href="/form"
                    className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                  >
                    Start Now <ArrowUpRightIcon />
                  </Link>
                  <div className="text-[18px] font-extrabold text-black">
                    Price: €2 000
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
                  <video
                    src="/images/showreel-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-auto w-full rounded-[24px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.14)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative w-full max-w-[560px]">
                <Image
                  src={LAPTOP_SRC}
                  alt="Macbook chart preview"
                  width={900}
                  height={520}
                  quality={95}
                  className="w-full brightness-[0.98] contrast-[1.02]"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                Views are vanity.
                <br />
                Wishlists are what fund
                <br />
                your launch.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                A million views mean nothing if your Steam chart doesn&apos;t move.
                We focus on <span className="font-extrabold text-black">high-intent viewers</span>. We
                show the mechanics, the art style, and the “vibe” that appeals
                to your specific niche, making sure the people who see your
                TikTok are the same people who will actually buy your game.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 lg:px-10">
          <div className="rounded-[28px] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
            <div className="relative h-[320px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-white to-[#FFF5F8]">
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="flex items-end justify-center gap-3 lg:gap-4">
                  <Image
                    src={WISHLIST_PHONES[0]}
                    alt="TikTok example 1"
                    width={900}
                    height={900}
                    quality={95}
                    className="w-[110px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:w-[130px]"
                    style={{ transform: "rotate(-8deg) translateY(10px)" }}
                  />
                  <Image
                    src={WISHLIST_PHONES[2]}
                    alt="TikTok example 3"
                    width={900}
                    height={900}
                    quality={95}
                    className="w-[120px] drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:w-[145px]"
                    style={{ transform: "rotate(-4deg)" }}
                  />
                  <Image
                    src={WISHLIST_PHONES[4]}
                    alt="TikTok example 5"
                    width={900}
                    height={900}
                    quality={95}
                    className="w-[130px] drop-shadow-[0_28px_70px_rgba(0,0,0,0.16)] lg:w-[160px]"
                    priority
                  />
                  <Image
                    src={WISHLIST_PHONES[1]}
                    alt="TikTok example 2"
                    width={900}
                    height={900}
                    quality={95}
                    className="w-[120px] drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:w-[145px]"
                    style={{ transform: "rotate(4deg)" }}
                  />
                  <Image
                    src={WISHLIST_PHONES[3]}
                    alt="TikTok example 4"
                    width={900}
                    height={900}
                    quality={95}
                    className="w-[110px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:w-[130px]"
                    style={{ transform: "rotate(8deg) translateY(10px)" }}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pt-10 pb-10 lg:px-12">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                The Wishlist-Driven Package
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      20 Conversion-Ready Videos:
                    </span>{" "}
                    We don&apos;t just edit gameplay; we build 20 entry points to
                    your Steam store. Each video is optimized to turn a viewer
                    into a &quot;Wishlister.&quot;
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      &quot;Wishlist Hook&quot; Editing:
                    </span>{" "}
                    Most people skip in 2 seconds. We spend our time
                    perfecting those first 2 seconds to make sure players
                    don&apos;t just watch, but head to your bio to find the link.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      We Record, You Build:
                    </span>{" "}
                    You don&apos;t need to capture a thing. We&apos;ll dive into your
                    build, find the most &quot;wishlist-worthy&quot; mechanics, and
                    record the footage ourselves.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      Native Discovery Style:
                    </span>{" "}
                    Over-produced ads get ignored. We make your game look like
                    a &quot;hidden gem&quot; discovery. This authentic vibe is what
                    actually triggers an Add to Wishlist.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">
                      Steam-Focused Captions:
                    </span>{" "}
                    We provide the text and call-to-actions that specifically
                    tell people where and why to wishlist your game. Just hit
                    upload.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/form"
                  className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  Book a Call <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:px-10">
            <h2 className="text-center text-[18px] font-extrabold text-black">
              How It Works
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
              <Step
                index="1"
                title="Briefing"
                text="Tell us about your game and your target audience."
              />
              <Step
                index="2"
                title="Capture"
                text="We play your game (or use your footage) to find the “magic moments.”"
              />
              <Step
                index="3"
                title="Edit"
                text="We craft 20 high-retention videos with clear CTA to wishlist."
              />
              <Step
                index="4"
                title="Delivery"
                text="You get a folder with ready-to-post content."
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/form"
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
              >
                Start Now <ArrowUpRightIcon />
              </Link>
            </div>

            <div className="pt-16">
              <h2 className="text-center text-[18px] font-extrabold text-black">
                Why It Works
              </h2>
              <p className="mx-auto mt-4 max-w-[62ch] text-center text-[14px] leading-6 text-black/60">
                Real games. Real results. These indie studios used TikTok to grow their Steam wishlists organically.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group relative overflow-hidden rounded-[18px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 bg-[url('https://cdn.akamai.steamstatic.com/steam/apps/2321470/header.jpg')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                  <div className="relative z-10">
                    <div className="text-[16px] font-extrabold text-white">
                      R.E.P.O
                    </div>
                    <div className="mt-2 text-[13px] text-white/70">
                      Blood Harvest
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <div className="text-[32px] font-extrabold text-white">
                        20K
                      </div>
                      <div className="text-[13px] font-semibold text-white/70">
                        wishlists
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0A5B]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="group relative overflow-hidden rounded-[18px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 bg-[url('https://cdn.akamai.steamstatic.com/steam/apps/2371650/header.jpg')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                  <div className="relative z-10">
                    <div className="text-[16px] font-extrabold text-white">
                      M.I.N.S.K.
                    </div>
                    <div className="mt-2 text-[13px] text-white/70">
                      Survival Horror
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <div className="text-[32px] font-extrabold text-white">
                        13.6K
                      </div>
                      <div className="text-[13px] font-semibold text-white/70">
                        wishlists
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0A5B]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="group relative overflow-hidden rounded-[18px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 bg-[url('https://cdn.akamai.steamstatic.com/steam/apps/2080690/header.jpg')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                  <div className="relative z-10">
                    <div className="text-[16px] font-extrabold text-white">
                      Sunkenland
                    </div>
                    <div className="mt-2 text-[13px] text-white/70">
                      Waterworld Survival
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <div className="text-[32px] font-extrabold text-white">
                        17.6K
                      </div>
                      <div className="text-[13px] font-semibold text-white/70">
                        wishlists
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0A5B]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="group relative overflow-hidden rounded-[18px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 bg-[url('https://cdn.akamai.steamstatic.com/steam/apps/1411910/header.jpg')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                  <div className="relative z-10">
                    <div className="text-[16px] font-extrabold text-white">
                      Fallen Aces
                    </div>
                    <div className="mt-2 text-[13px] text-white/70">
                      Crime Noir FPS
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <div className="text-[32px] font-extrabold text-white">
                        25.6K
                      </div>
                      <div className="text-[13px] font-semibold text-white/70">
                        wishlists
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0A5B]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/form"
                  className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                >
                  Start Now <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:px-10">
          <div className="relative overflow-hidden rounded-[26px] bg-[#FF0A5B] px-8 pt-16 pb-14 text-center text-white shadow-[0_40px_90px_rgba(255,10,91,0.28)]">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
              <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
            </div>

            <div className="relative">
              <div className="text-[22px] font-extrabold">
                Ready to grow your wishlist?
              </div>
              <div className="mt-3 text-[13px] font-semibold text-white/80">
                Get the strategy you need to launch with confidence.
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-4">
                <Link
                  href="/form"
                  className="inline-flex h-[44px] items-center gap-2 rounded-full bg-white px-8 text-[13px] font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Book a Call <ArrowUpRightIcon />
                </Link>
                <Link
                  href="/form"
                  className="inline-flex h-[44px] items-center gap-2 rounded-full bg-black/65 px-8 text-[13px] font-semibold text-white transition-colors hover:bg-black/75"
                >
                  Or get started now for €2,000 <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-4 pb-20 lg:px-10">
          <h2 className="text-[22px] font-extrabold leading-tight tracking-tight text-black">
            Others Packages
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <PackageCard
              title="Reddit\nLaunch Support"
              description="Posting on Reddit is a full time job. We take it off your plate by running a 15 post organic campaign designed to drive traffic and Steam wishlists without triggering bans, removals, or backlash."
              price="€2 500"
              href="/reddit-launch-support"
            />
            <PackageCard
              title="PR Starter Pack"
              description="PR outreach that gets your game covered. A readable press release, targeted pitches, follow ups, and the full contact list. Built for credibility and Steam wishlists."
              price="€3 000"
              href="/pr-starter-pack"
            />
            <PackageCard
              title="Influencer Micro\nCampaign"
              description="We connect you with niche creators who actually fit your game. You get a tracked micro campaign built to drive meaningful reach and wishlists without wasting budget on broad influencer lists."
              price="€5 000"
              href="https://www.trapplan.com/influencer-micro-campaign"
            />
            <PackageCard
              title="Paid Ads Setup"
              description="We set up your paid ad campaigns from start to finish: channel selection, budget configuration, targeting setup and creative placement. Once launched, we hand over the account. Ongoing monitoring or optimisation aren’t included."
              price="€2 000"
              href="https://www.trapplan.com/paid-ads-setup"
            />
            <PackageCard
              title="Gameplay Trailer"
              description="A complete, high quality gameplay trailer crafted specifically for your game. Clear storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution."
              price="€5 000"
              href="https://www.trapplan.com/gameplay-trailer"
            />
          </div>
        </section>
      </main>

      <InternalLinksSection currentPath="/tiktok-package-20-videos" variant="compact" />

      <Footer />
    </>
  );
}
