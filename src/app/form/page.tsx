import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import WorkWithUsForm from "@/components/forms/WorkWithUsForm";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Tell us about your game. We’ll help you clarify your goals, select the best promotion formats, and deliver a clear plan.",
  alternates: {
    canonical: "/form",
  },
  openGraph: {
    type: "website",
    url: "/form",
    title: "Work With Us",
    description:
      "Tell us about your game. We’ll help you clarify your goals, select the best promotion formats, and deliver a clear plan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With Us",
    description:
      "Tell us about your game. We’ll help you clarify your goals, select the best promotion formats, and deliver a clear plan.",
  },
};

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FormPage() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-24 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h1 className="text-[40px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[44px]">
                Level Up Your Game Marketing
                <br />
                With a Plan That Works
              </h1>

              <p className="mt-6 max-w-[52ch] text-[14px] leading-6 text-black/60">
                We’ll help you clarify your goals, select the best promotion
                formats, and deliver a clear plan, even if you’re not sure where
                to start.
              </p>

              <ul className="mt-6 space-y-2 text-[14px] font-semibold text-black/70">
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  Align with your goals
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  Discover high-performing marketing formats
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF0A5B]" />
                  Get a clear, actionable proposal
                </li>
              </ul>

              <a
                href="mailto:pb@trapplan.com"
                className="mt-7 inline-flex items-center gap-3 text-[14px] font-semibold text-black transition-colors hover:text-black/80"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0A5B]/10 text-[#FF0A5B]">
                  <MailIcon />
                </span>
                pb@trapplan.com
              </a>
            </div>

            <div className="lg:col-span-7 lg:flex lg:justify-end">
              <div className="w-full max-w-[520px] rounded-[22px] bg-white px-8 pt-8 pb-9 shadow-[0_30px_70px_rgba(0,0,0,0.10)]">
                <WorkWithUsForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
