import { FOOTER_LINKS } from "@/lib/data/footer";
import Image from "next/image";

function SocialIcon({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-[14px] font-extrabold text-black transition-colors duration-200 hover:bg-zinc-200"
      aria-label={label}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Image
              src="/images/logo.png"
              alt="TrapPlan"
              width={160}
              height={52}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-[38ch] text-[14px] leading-6 text-black/60">
              From first announcement to global release. Professional grade marketing workflows designed specifically for game studios who want better results and zero chaos.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {FOOTER_LINKS.map((group) => (
                <div key={group.title}>
                  <div className="text-[14px] font-extrabold text-[#FF0A5B]">
                    {group.title}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {group.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-[14px] font-semibold text-black/80 transition-colors hover:text-black"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-start gap-2 lg:justify-end">
              <SocialIcon label="in" />
              <SocialIcon label="X" />
              <SocialIcon label="@" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <div className="text-[12px] font-semibold text-black/60">
            © 2026 TrapPlan | All rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.iubenda.com/privacy-policy/24291473"
              className="inline-flex h-8 items-center rounded-[10px] border border-black/15 bg-white px-3 text-[12px] font-semibold text-black/80 transition-colors hover:bg-black/5 hover:text-black"
            >
              Notice at collection
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/24291473/cookie-policy"
              className="inline-flex h-8 items-center gap-2 rounded-[10px] border border-black/15 bg-white px-3 text-[12px] font-semibold text-black/80 transition-colors hover:bg-black/5 hover:text-black"
            >
              Your Privacy Choices
              <span className="inline-flex h-4 w-6 items-center justify-center rounded-[6px] bg-[#2563EB] text-[11px] font-extrabold leading-none text-white">
                ✓
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
