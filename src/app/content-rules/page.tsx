import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Content Rules",
  description: "Basic rules for using TrapPlan content and assets.",
  alternates: {
    canonical: "/content-rules",
  },
};

export default function ContentRulesPage() {
  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            Content Rules
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            This page defines how TrapPlan materials can be used.
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-black/10 bg-white px-7 py-8">
            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">1. Ownership</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                Unless explicitly stated otherwise, all content on this website is owned by TrapPlan.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">2. Allowed use</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                You may share links to our pages and quote short excerpts with proper attribution.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">3. Prohibited use</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                You may not copy, republish, or sell our materials as your own. You may not use our
                brand assets in a way that implies partnership without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">4. Requests</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                If you want to reuse materials beyond what is described above, please contact us via
                the form on this website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
