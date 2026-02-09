"use client";

import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { t } from "@/lib/copy";

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-black"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  href,
  accent,
}: {
  title: string;
  description: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (href === "#") e.preventDefault();
      }}
      className={`group relative block h-full rounded-[18px] bg-white px-7 pt-6 pb-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.10)] shadow-[0_30px_60px_rgba(0,0,0,0.06)] ${
        accent ? "ring-1 ring-[#FF0A5B]/25" : "ring-1 ring-black/5"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-[18px] font-extrabold leading-tight tracking-tight text-black">
          {title}
        </h3>
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-[transform,background-color] duration-200 group-hover:scale-[1.05] ${
            accent
              ? "bg-[#FF0A5B]/10 group-hover:bg-[#FF0A5B]/15"
              : "bg-zinc-100 group-hover:bg-zinc-200"
          }`}
        >
          <span className="inline-flex text-black transition-transform duration-200 group-hover:rotate-[12deg] group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
            <ArrowIcon />
          </span>
        </span>
      </div>

      <p className="mt-4 text-[14px] leading-6 text-black/60">{description}</p>
    </a>
  );
}

export default function WhatWeDo() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/").filter(Boolean)[0];
  const locale = (seg && (SUPPORTED_LOCALES as readonly string[]).includes(seg)
    ? seg
    : DEFAULT_LOCALE) as Locale;

  const launchAndGrowth = [
    {
      title: t(locale, "structured.service.blueprint.name"),
      description: t(locale, "structured.service.blueprint.desc"),
      href: "#",
    },
    {
      title: t(locale, "structured.service.paid_growth.name"),
      description: t(locale, "structured.service.paid_growth.desc"),
      href: "#",
    },
    {
      title: t(locale, "structured.service.creative.name"),
      description: t(locale, "structured.service.creative.desc"),
      href: "#",
    },
  ];

  return (
    <section id="services" className="scroll-mt-[84px] bg-[#F3F3F3] pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="pt-16 text-[44px] font-extrabold leading-none tracking-tight text-black">
          {t(locale, "home.services.section_title")}
        </h2>

        <div className="mt-10">
          <div className="inline-flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
            {t(locale, "home.services.launch_and_growth")}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {launchAndGrowth.map((s, idx) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                href={s.href}
                accent={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
