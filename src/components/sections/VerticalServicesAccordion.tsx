"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type ServicePanel = {
  id: string;
  title: string;
  description: string;
  href: string;
  accentNumber: string;
  ghostLabel: string;
};

export default function VerticalServicesAccordion() {
  const panels = useMemo<ServicePanel[]>(
    () => [
      {
        id: "blueprint",
        title: "Game Launch Blueprint",
        description:
          "Positioning, messaging, timeline, and channel mix. A clear plan that removes chaos, aligns the team, and makes execution predictable.",
        href: "/game-launch-blueprint",
        accentNumber: "01",
        ghostLabel: "STRATEGY / MESSAGING / EXECUTION",
      },
      {
        id: "paid-growth",
        title: "Paid Growth",
        description:
          "We set up paid campaigns the right way: channel selection, tracking, targeting and structure. Built for control, measurement and clean handoff.",
        href: "/paid-growth",
        accentNumber: "02",
        ghostLabel: "ACQUISITION / ANALYTICS / SCALE",
      },
      {
        id: "creative",
        title: "Creative Content Pipeline",
        description:
          "A consistent pipeline for trailers, shortform and store assets. Built for speed, iteration and platform-native distribution.",
        href: "/creative-content-pipeline",
        accentNumber: "03",
        ghostLabel: "PRODUCTION | ADAPTATION | PERFORMANCE",
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState<string>(panels[0]?.id ?? "blueprint");

  const activePanel = panels.find((p) => p.id === activeId) ?? panels[0];

  return (
    <section className="bg-[#F3F3F3] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[44px] font-extrabold leading-none tracking-tight text-black">
              Global Services
            </h2>
            <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-black/70">
              Deeper, end-to-end systems for studios that want predictable outcomes. Not
              one-off tasks.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="hidden h-[420px] overflow-hidden rounded-2xl border border-black/10 bg-white lg:flex">
            {panels.map((panel) => {
              const isActive = panel.id === activeId;

              return (
                <motion.div
                  key={panel.id}
                  onMouseEnter={() => setActiveId(panel.id)}
                  className="relative flex h-full cursor-pointer select-none flex-col justify-between"
                  initial={false}
                  animate={{
                    width: isActive ? "60%" : "20%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="absolute inset-y-0 right-0 w-px bg-black/10" />

                  <div className="absolute inset-0">
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.35 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-[#FF0A5B]/[0.06]" />
                      <div className="absolute inset-0">
                        <div className="absolute -right-16 -top-16 h-[260px] w-[260px] rounded-full bg-[#FF0A5B]/[0.10] blur-[50px]" />
                        <div className="absolute -bottom-20 -left-20 h-[320px] w-[320px] rounded-full bg-black/[0.06] blur-[60px]" />
                      </div>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-[0.16]">
                          <div className="absolute -left-24 top-20 h-px w-[520px] rotate-[18deg] bg-black/10" />
                          <div className="absolute -left-16 top-44 h-px w-[520px] rotate-[18deg] bg-black/10" />
                          <div className="absolute -left-28 top-72 h-px w-[520px] rotate-[18deg] bg-black/10" />
                          <div className="absolute right-[-180px] top-24 h-[520px] w-[520px] rounded-full border border-black/10" />
                        </div>
                        <div className="absolute inset-0 px-10">
                          <div className="absolute right-10 bottom-10 text-right">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-black/30">
                              {panel.ghostLabel}
                            </div>
                            <div className="mt-2 text-[40px] font-extrabold leading-none tracking-tight text-black/[0.035]">
                              {panel.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/50">
                        {panel.accentNumber}
                      </div>
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 8,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-6"
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      <h3 className="text-[28px] font-extrabold leading-tight tracking-tight text-black">
                        {panel.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/60">
                        {panel.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 0 : 1 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8"
                      style={{ pointerEvents: isActive ? "none" : "auto" }}
                    >
                      <div className="flex h-[320px] items-center justify-center">
                        <div
                          className="text-[18px] font-extrabold tracking-tight text-black"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {panel.title}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:hidden">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-black/50">
                Tap to explore
              </div>
              <div className="mt-4 grid gap-3">
                {panels.map((panel) => {
                  const isActive = panel.id === activeId;

                  return (
                    <button
                      key={panel.id}
                      type="button"
                      onClick={() => setActiveId(panel.id)}
                      className={`rounded-xl border p-5 text-left transition-colors ${
                        isActive
                          ? "border-black/15 bg-black/[0.02]"
                          : "border-black/10 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-[12px] font-extrabold tracking-[0.18em] text-black/50">
                          {panel.accentNumber}
                        </div>
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FF0A5B]" />
                      </div>

                      <div className="mt-4 text-[20px] font-extrabold leading-tight tracking-tight text-black">
                        {panel.title}
                      </div>

                      {isActive ? (
                        <div className="mt-3">
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-black/40">
                            {panel.ghostLabel}
                          </div>
                          <p className="mt-3 text-[15px] leading-relaxed text-black/60">
                            {panel.description}
                          </p>
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-5 overflow-hidden rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] via-transparent to-[#FF0A5B]/[0.06] p-5">
                <div className="absolute inset-0 opacity-[0.18]">
                  <div className="absolute -left-20 top-10 h-px w-[420px] rotate-[18deg] bg-black/10" />
                  <div className="absolute -left-12 top-28 h-px w-[420px] rotate-[18deg] bg-black/10" />
                  <div className="absolute -left-24 top-48 h-px w-[420px] rotate-[18deg] bg-black/10" />
                  <div className="absolute -right-24 -bottom-24 h-[240px] w-[240px] rounded-full border border-black/10" />
                </div>
                <div className="relative">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-black/40">
                    {activePanel?.ghostLabel}
                  </div>
                  <div className="mt-4 text-[28px] font-extrabold leading-[0.95] tracking-tight text-black/[0.06]">
                    {activePanel?.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
