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
      <main>
        <section className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
          <h1 className="font-display text-[72px] font-bold leading-none tracking-[-0.03em] text-bone">
            404
          </h1>
          <p className="mt-4 text-[18px] text-secondary">
            This page doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-[52px] items-center gap-2 rounded-[6px] bg-[var(--accent)] px-7 font-display text-[15px] font-semibold text-[var(--accent-on)] transition hover:brightness-[1.06]"
            style={{ boxShadow: "var(--cta-glow)" }}
          >
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
