"use client";

import { motion } from "framer-motion";

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
  const cardVariants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 30px 60px rgba(0,0,0,0.06)",
    },
    hover: {
      y: -6,
      scale: 1.01,
      boxShadow: "0 40px 80px rgba(0,0,0,0.10)",
    },
  } as const;

  const iconVariants = {
    rest: { scale: 1, backgroundColor: "rgba(244,244,245,1)" },
    hover: { scale: 1.05, backgroundColor: "rgba(228,228,231,1)" },
  } as const;

  const arrowVariants = {
    rest: { rotate: 0, x: 0, y: 0 },
    hover: { rotate: 12, x: 1, y: -1 },
  } as const;

  return (
    <motion.a
      href={href}
      onClick={(e) => {
        if (href === "#") e.preventDefault();
      }}
      className={`group relative block h-full rounded-[18px] bg-white px-7 pt-6 pb-7 transition-colors duration-200 ${
        accent ? "ring-1 ring-[#FF0A5B]/25" : "ring-1 ring-black/5"
      }`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-[18px] font-extrabold leading-tight tracking-tight text-black">
          {title}
        </h3>
        <motion.span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
            accent ? "bg-[#FF0A5B]/10" : "bg-zinc-100"
          }`}
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          <motion.span
            className="inline-flex text-black"
            variants={arrowVariants}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
          >
            <ArrowIcon />
          </motion.span>
        </motion.span>
      </div>

      <p className="mt-4 text-[14px] leading-6 text-black/60">{description}</p>
    </motion.a>
  );
}

export default function WhatWeDo() {
  const launchAndGrowth = [
    {
      title: "Game Launch Blueprint",
      description:
        "A clear launch plan for your game: positioning, audience, messaging, timeline and channel mix. Built to reduce chaos, align the team and execute with confidence.",
      href: "#",
    },
    {
      title: "Paid Growth",
      description:
        "We set up paid campaigns the right way: channel selection, tracking, targeting and structure. Built for control, measurement and clean handoff.",
      href: "#",
    },
    {
      title: "Creative Content Pipeline",
      description:
        "A consistent pipeline for trailers, shortform and store assets. Built for speed, iteration and platform-native distribution.",
      href: "#",
    },
  ];

  return (
    <section id="services" className="scroll-mt-[84px] bg-[#F3F3F3] pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="pt-16 text-[44px] font-extrabold leading-none tracking-tight text-black">
          Game Marketing Services
        </h2>

        <div className="mt-10">
          <div className="inline-flex items-center gap-3 text-[14px] font-extrabold text-[#FF0A5B]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
            Launch and Growth
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
