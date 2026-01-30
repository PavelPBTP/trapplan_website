import Link from "next/link";
import Image from "next/image";
import { PACKAGES } from "@/lib/data/packages";

const SERVICES_DROPDOWN_LINKS = PACKAGES.map((p) => ({
  label: p.title.replace(/\n/g, " "),
  href: p.href,
}));

function LinkedInIcon() {
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
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5Z"
        fill="currentColor"
      />
      <path d="M0.5 8H4.5V23H0.5V8Z" fill="currentColor" />
      <path
        d="M8.5 8H12.3V10.05H12.35C12.88 9.05 14.18 7.99 16.12 7.99C20.2 7.99 21 10.68 21 14.19V23H17V15.24C17 13.39 16.97 11 14.43 11C11.86 11 11.5 13.01 11.5 15.1V23H7.5V8H8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="border-b border-black/10">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="block leading-none">
            <Image
              src="/images/logo.png"
              alt="TrapPlan"
              width={140}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-7 text-[14px] font-semibold text-black/80 lg:flex">
              <Link href="/about-us" className="transition-colors hover:text-black">
                About Us
              </Link>
              <div className="group relative">
                <Link
                  href="/#packages"
                  className="inline-flex items-center gap-1 transition-colors hover:text-black"
                >
                  Services
                  <span className="translate-y-[1px] text-[12px] text-black/70 group-hover:text-black">
                    ▾
                  </span>
                </Link>
                <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="w-[280px] rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
                    {SERVICES_DROPDOWN_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-[13px] font-semibold text-black/80 transition-colors hover:bg-zinc-50 hover:text-black"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/our-cases" className="transition-colors hover:text-black">
                Our Cases
              </Link>
              <Link href="/blog" className="transition-colors hover:text-black">
                Blog
              </Link>
            </nav>

            <a
              href="https://www.linkedin.com/company/trapplan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors hover:bg-zinc-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:hello@trapplan.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors hover:bg-zinc-200"
              aria-label="Email"
            >
              <MailIcon />
            </a>

            <Link
              href="/form"
              className="ml-2 inline-flex items-center rounded-full bg-[#FF0A5B] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
