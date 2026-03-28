import Link from "next/link";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Page Not Found | TrapPlan",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main className="bg-[#F3F3F3]">
        <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-32 text-center lg:px-10">
          <h1 className="text-[72px] font-extrabold leading-none tracking-tight text-black">
            404
          </h1>
          <p className="mt-4 text-[18px] font-semibold text-black/60">
            This page doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-[42px] items-center gap-2 rounded-full bg-[#FF0A5B] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(255,10,91,0.35)] transition-colors duration-200 hover:bg-[#E6004E]"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
