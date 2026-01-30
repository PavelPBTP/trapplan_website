import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Gameplay Trailer: A Trailer Built to Convert",
  description:
    "A complete gameplay trailer crafted specifically for your game: storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
  alternates: {
    canonical: "/gameplay-trailer",
  },
  openGraph: {
    type: "website",
    url: "/gameplay-trailer",
    title: "Gameplay Trailer: A Trailer Built to Convert",
    description:
      "A complete gameplay trailer crafted specifically for your game: storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gameplay Trailer: A Trailer Built to Convert",
    description:
      "A complete gameplay trailer crafted specifically for your game: storytelling, polished capture, pacing, editing and delivery ready for Steam, YouTube and media distribution.",
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

export default function GameplayTrailerPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-10 lg:pt-14">
          <div className="rounded-[28px] bg-white px-6 pt-10 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h1 className="text-[42px] font-extrabold leading-[0.98] tracking-tight text-black lg:text-[48px]">
                  Your gameplay.
                  <br />
                  Cut into a story.
                </h1>

                <p className="mt-5 max-w-[62ch] text-[14px] leading-6 text-black/60">
                  A complete, high quality gameplay trailer crafted specifically for your game. Clear storytelling, polished capture, pacing, editing and
                  delivery ready for Steam, YouTube and media distribution.
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
                      src="/images/TrailerHero.avif"
                      alt="Gameplay trailer preview"
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
                      src="/images/TrailerHero.avif"
                      alt="Trailer pacing and structure"
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
                Clarity.
                <br />
                Pacing.
                <br />
                Conversion.
              </h2>
              <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-black/60">
                Most trailers fail because they look like uncut gameplay. A good trailer makes the player understand the fantasy in seconds.
              </p>
              <p className="mt-4 max-w-[62ch] text-[14px] leading-6 text-black/60">
                We cut a story, not a montage. The goal is to move the viewer to wishlist, download the demo, or click through.
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
                        src="/images/TrailerHero.avif"
                        alt="Gameplay trailer package preview"
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
              <h2 className="text-[44px] font-extrabold leading-[1.02] tracking-tight text-black">The Gameplay Trailer</h2>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Structure:</span> hook, features, proof, and close.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Capture direction:</span> what footage you need and how to get it.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Editing + pacing:</span> clean cuts, timing and rhythm.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Delivery formats:</span> ready for Steam and socials.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <div className="text-[14px] leading-6 text-black/60">
                    <span className="font-extrabold text-black">Distribution-ready:</span> send to press and creators.
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
              <Step index="1" title="Plan" text="We define the story and the key moments to capture." />
              <Step index="2" title="Capture" text="We guide what footage is needed for a clean cut." />
              <Step index="3" title="Edit" text="We edit for pacing, clarity, and conversion." />
              <Step index="4" title="Deliver" text="You get formats ready for Steam, YouTube and media." />
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
