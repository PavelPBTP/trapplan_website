import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Copyright Policy",
  description: "Copyright policy for TrapPlan website content.",
  alternates: {
    canonical: "/copyright-policy",
  },
};

export default function CopyrightPolicyPage() {
  return (
    <main className="bg-[#F3F3F3]">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[48px]">
            Copyright Policy
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/65">
            This page explains how TrapPlan content is protected and how you can use it.
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-black/10 bg-white px-7 py-8">
            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">Copyright notice</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                All text, design, and materials on this website are protected by copyright and other
                applicable intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">Permission</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                You may reference and link to our pages. If you want to republish or reproduce any
                substantial part of our content, please request permission.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold tracking-tight text-black">Reporting</h2>
              <p className="mt-2 text-[15px] leading-7 text-black/65">
                If you believe your copyrighted work is used on this website in a way that
                constitutes infringement, please contact us and include relevant details.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
