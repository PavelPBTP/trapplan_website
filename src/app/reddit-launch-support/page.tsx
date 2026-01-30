import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Footer from "@/components/sections/Footer";
import InternalLinksSection from "@/components/sections/InternalLinksSection";

export const metadata: Metadata = {
  title: "Reddit Launch Support: Organic Steam Traffic Without Backlash",
  description:
    "A 15 post organic Reddit campaign designed to drive Steam wishlists without triggering the usual marketing backlash.",
  alternates: {
    canonical: "/reddit-launch-support",
  },
  openGraph: {
    type: "website",
    url: "/reddit-launch-support",
    title: "Reddit Launch Support: Organic Steam Traffic Without Backlash",
    description:
      "A 15 post organic Reddit campaign designed to drive Steam wishlists without triggering the usual marketing backlash.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Launch Support: Organic Steam Traffic Without Backlash",
    description:
      "A 15 post organic Reddit campaign designed to drive Steam wishlists without triggering the usual marketing backlash.",
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

function RedditPostCard({
  subreddit,
  title,
  imageSrc,
  objectPosition,
  className,
  style,
}: {
  subreddit: string;
  title: string;
  imageSrc: string;
  objectPosition: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.12)] " +
        (className ?? "")
      }
      style={style}
    >
      <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[#FF0A5B]" />
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold text-black">{subreddit}</div>
            <div className="truncate text-[11px] font-medium text-black/45">Posted by u dev</div>
          </div>
        </div>
        <div className="inline-flex items-center rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          Join
        </div>
      </div>

      <div className="px-4 pt-3 pb-3">
        <div className="line-clamp-2 text-[13px] font-extrabold leading-5 text-black">{title}</div>
      </div>

      <div className="relative h-[150px] bg-[#0F0F0F]">
        <Image
          src={imageSrc}
          alt="Reddit post screenshot"
          width={1000}
          height={750}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          ▲ 2.1k
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          💬 184
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1 text-[11px] font-semibold text-black/60">
          ↗ Share
        </div>
      </div>
    </div>
  );
}

export default function RedditLaunchSupportPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  Get your game to the front page of Reddit.
                  <br />
                  Without the “marketing” backlash.
                </h1>

                <p className="mt-5 max-w-[62ch] text-[14px] leading-6 text-black/60">
                  Posting on Reddit is a full time job and a massive headache. One wrong move and you&apos;re banned. We take that risk for you. We drop 15 targeted posts about your game. We seed the comments, handle the feedback, and help you to grow wishlists.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href="/form"
                    className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
                  >
                    Let’s Start <ArrowUpRightIcon />
                  </Link>
                  <div className="text-[18px] font-extrabold text-black">Price: €2 500</div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
                  <div className="overflow-hidden rounded-[24px] bg-black shadow-[0_40px_90px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/images/Reddit Hero.png"
                      alt="Reddit post example"
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
                      src="/images/RLS.avif"
                      alt="Reddit launch support collage"
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
                Reddit hates marketing.
                <br />
                But it loves developers.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                Reddit is a minefield. The rules are rarely written the way they’re enforced, and the penalty for looking like marketing can be instant. Removals, bans, and backlash that follows your game.
              </p>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-6 text-black/60">
                Our job is to handle the scary part. Navigating each subreddit’s culture, positioning the post like a real developer story, and managing the thread so you can enjoy the traffic without getting burned.
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
                  <RedditPostCard
                    subreddit="r gaming"
                    title="The Super Mario Galaxy Movie. Yoshi first look"
                    imageSrc="/images/RLS-1.png"
                    objectPosition="50% 25%"
                    className="absolute left-0 top-10 w-[290px]"
                    style={{ transform: "rotate(-6deg)" }}
                  />
                  <RedditPostCard
                    subreddit="r gaming"
                    title="Fable gameplay overview. Xbox Developer Direct 2026"
                    imageSrc="/images/RLS-2.png"
                    objectPosition="50% 40%"
                    className="absolute left-1/2 top-0 w-[320px] -translate-x-1/2"
                    style={{ transform: "rotate(2deg)" }}
                  />
                  <RedditPostCard
                    subreddit="r gaming"
                    title="When mobile gaming peaked"
                    imageSrc="/images/RLS-3.png"
                    objectPosition="50% 55%"
                    className="absolute right-0 top-12 w-[290px]"
                    style={{ transform: "rotate(7deg)" }}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pt-10 pb-10 lg:px-12">
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">
                The Stealth Reddit Package
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">15 High Engagement Posts:</span> tailored to each community’s content style and appetite.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Community Native Strategy:</span> no corporate accounts. We keep it developer to player.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Wishlist Spike Mechanics:</span> designed to convert curiosity into store visits and wishlists.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Subreddit Curation:</span> we pick the communities that actually fit your game.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Active Management:</span> seeding engagement and guiding the thread while it is live.
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
              <Step index="1" title="Subreddit map" text="We curate the right communities and define the safe posting angles." />
              <Step index="2" title="Write" text="We craft posts that feel native and invite discussion, not suspicion." />
              <Step index="3" title="Post" text="We publish through community compatible accounts and monitor reactions." />
              <Step index="4" title="Manage" text="We seed engagement, reply, and steer the thread while it is live." />
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/form"
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
              >
                Let’s Start <ArrowUpRightIcon />
              </Link>
            </div>

            <div className="pt-16">
              <h2 className="text-center text-[18px] font-extrabold text-black">Steam Traffic Results</h2>
              <p className="mx-auto mt-4 max-w-[62ch] text-center text-[14px] leading-6 text-black/60">
                Placeholder section for screenshots of Steam traffic spikes.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-[18px] bg-[#F3F3F3] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="text-[12px] font-semibold tracking-wide text-black/45">PLACEHOLDER</div>
                    <div className="mt-3 h-[120px] rounded-[14px] bg-white" />
                    <div className="mt-4 text-[13px] leading-6 text-black/60">Add a Steam traffic graph screenshot.</div>
                  </div>
                ))}
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
          </div>
        </section>

        <InternalLinksSection currentPath="/reddit-launch-support" variant="compact" />
      </main>

      <Footer />
    </>
  );
}
