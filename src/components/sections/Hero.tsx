"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type MarqueeController = {
  pause: () => void;
  play: () => void;
};

function useHorizontalMarquee(direction: "left" | "right", durationSeconds: number) {
  const x = useMotionValue(0);
  const firstSetRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const widthRef = useRef<number>(0);

  const start = () => {
    if (!widthRef.current) return;
    animationRef.current?.stop();

    const distance = widthRef.current;
    const current = x.get();

    if (direction === "left") {
      const normalized = ((current % -distance) + -distance) % -distance;
      x.set(normalized);
      animationRef.current = animate(x, [normalized, normalized - distance], {
        duration: durationSeconds,
        ease: "linear",
        repeat: Infinity,
      });
      return;
    }

    const normalized = ((current % distance) + distance) % distance;
    x.set(normalized);
    animationRef.current = animate(x, [normalized, normalized + distance], {
      duration: durationSeconds,
      ease: "linear",
      repeat: Infinity,
    });
  };

  useEffect(() => {
    if (!firstSetRef.current) return;

    const el = firstSetRef.current;
    const ro = new ResizeObserver(() => {
      const next = el.getBoundingClientRect().width;
      if (!next) return;
      widthRef.current = next;
      start();
    });

    ro.observe(el);
    widthRef.current = el.getBoundingClientRect().width;
    start();

    return () => {
      ro.disconnect();
      animationRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, durationSeconds]);

  const controller: MarqueeController = useMemo(
    () => ({
      pause: () => animationRef.current?.pause(),
      play: () => animationRef.current?.play(),
    }),
    [],
  );

  return { x, firstSetRef, controller };
}

export default function Hero() {
  const phrases = useMemo(
    () => ["Performance Marketing", "Social Media", "Go-to-Market Strategy"],
    [],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, [phrases.length]);

  const cards = useMemo(
    () =>
      [
        { id: "misery", label: "MISERY", tone: "from-zinc-900 to-zinc-700", image: "/images/Misery.avif", size: "small", rotate: -6, y: 6 },
        { id: "overwatch", label: "OVER", tone: "from-emerald-600 to-cyan-500", image: "/images/Everwind.avif", size: "large", rotate: 5, y: -8 },
        { id: "bee", label: "BEE", tone: "from-amber-400 to-orange-500", image: "/images/GE.avif", size: "medium", rotate: -2, y: 0 },
        { id: "cut", label: "CUT", tone: "from-zinc-800 to-zinc-600", image: "/images/Crossout.avif", size: "small", rotate: 7, y: 10 },
        { id: "gloomy", label: "GLOOMY", tone: "from-fuchsia-600 to-rose-500", image: "/images/The Hive.avif", size: "large", rotate: -5, y: -6 },
        { id: "arma", label: "ARMA", tone: "from-sky-700 to-slate-800", image: "/images/Arma.avif", size: "medium", rotate: 3, y: 8 },
        { id: "eve", label: "EVE", tone: "from-amber-500 to-yellow-400", image: "/images/Broventure.avif", size: "medium", rotate: -7, y: -2 },
        { id: "world", label: "WORLD", tone: "from-blue-700 to-indigo-700", image: "/images/World Of Warships.avif", size: "small", rotate: 4, y: -10 },
        { id: "gr", label: "GR", tone: "from-teal-700 to-emerald-700", image: "/images/GR.jpg", size: "large", rotate: -4, y: 4 },
        { id: "fata", label: "FATA", tone: "from-violet-700 to-fuchsia-700", image: "/images/Fata.jpeg", size: "medium", rotate: 6, y: -4 },
      ] as const,
    [],
  );

  const {
    x: marqueeTopX,
    firstSetRef: marqueeTopFirstSetRef,
    controller: marqueeTopController,
  } = useHorizontalMarquee("left", 85);
  const {
    x: marqueeBottomX,
    firstSetRef: marqueeBottomFirstSetRef,
    controller: marqueeBottomController,
  } = useHorizontalMarquee("left", 100);

  const topRow = useMemo(() => cards, [cards]);
  const bottomRow = useMemo(
    () => [cards[4], cards[8], cards[1], cards[6], cards[9], cards[2], cards[7], cards[0], cards[5], cards[3]],
    [cards],
  );

  const clientLogos = useMemo(
    () =>
      [
        {
          id: "gaijin",
          alt: "Gaijin logo",
          src: "/images/682c675f1536e849a0fb1016_gaijin-logo.svg",
        },
        {
          id: "saber",
          alt: "Saber Interactive logo",
          src: "/images/690a085d403e36f9268bf556_tps_company_12_Saber Interactive Inc_logo 1.avif",
        },
        {
          id: "daedalic",
          alt: "Daedalic Entertainment logo",
          src: "/images/690a085de3ed39378962cc19_tps_company_5_Daedalic Entertainment_logo 1.avif",
        },
        {
          id: "wargaming",
          alt: "Wargaming logo",
          src: "/images/682c675f30b396a45d2ee328_wargaming-logo.svg",
        },
        {
          id: "ytopia",
          alt: "Ytopia logo",
          src: "/images/690a085d53af5dce05ff5a87_tps_company_11_YTOPIA LLC_logo.avif",
        },
        {
          id: "aerosoft",
          alt: "Aerosoft logo",
          src: "/images/690a085da845c8536d7af1ef_tps_company_9_Aerosoft_logo 1.avif",
        },
        {
          id: "megadev",
          alt: "Megadev logo",
          src: "/images/690a085de6e5cc0882bdd71f_tps_company_8_MegaDev_logo 1.avif",
        },
        {
          id: "untold-tales",
          alt: "Untold Tales logo",
          src: "/images/690a097fda1e64256b171332_tps_company_6_Untold Tales _logo 1.avif",
        },
      ] as const,
    [],
  );

  return (
    <section className="bg-[#F3F3F3] text-black">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-5"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center bg-black px-2.5 py-1 text-[13px] font-semibold leading-none text-white">
                <span className="relative h-[1em] overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={phrases[phraseIndex]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="block whitespace-nowrap"
                    >
                      {phrases[phraseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[54px] font-extrabold leading-[0.95] tracking-tight sm:text-[64px]"
            >
              Trap Plan
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-5 text-[18px] font-extrabold leading-tight tracking-tight"
            >
              Marketing for Games
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-5 max-w-[38ch] text-[14px] leading-6 text-zinc-700"
            >
              We help studios, publisher, and indie developers launch, grow and
              scale their games by polished marketing
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#E6004E] focus:outline-none focus:ring-2 focus:ring-[#FF0A5B] focus:ring-offset-2 focus:ring-offset-[#F3F3F3]"
              >
                Contact us
                <span aria-hidden className="text-[16px] leading-none">
                  ↗
                </span>
              </a>
            </motion.div>
          </motion.div>

          <div className="relative lg:col-span-7">
            <div className="relative mx-auto h-[380px] max-w-[560px] lg:mx-0 lg:ml-auto">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-6 top-0 h-full w-28 bg-gradient-to-r from-[#F3F3F3] via-[#F3F3F3]/95 to-transparent backdrop-blur-sm" />
                <div className="absolute -right-6 top-0 h-full w-28 bg-gradient-to-l from-[#F3F3F3] via-[#F3F3F3]/95 to-transparent backdrop-blur-sm" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="relative h-[320px] w-[520px]"
                  style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
                >
                  <div className="flex h-full flex-col justify-center gap-8">
                    <motion.div style={{ x: marqueeTopX }} className="flex items-center gap-4 will-change-transform">
                      <div ref={marqueeTopFirstSetRef} className="flex items-center gap-4">
                        {topRow.map((c) => (
                          <motion.div
                            key={c.id}
                            onHoverStart={() => marqueeTopController.pause()}
                            onHoverEnd={() => marqueeTopController.play()}
                            style={{ transform: `rotate(${c.rotate}deg) translateY(${c.y}px)` }}
                            className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.14)] ${
                              c.size === "small"
                                ? "h-[84px] w-[104px]"
                                : c.size === "large"
                                  ? "h-[128px] w-[160px]"
                                  : "h-[104px] w-[132px]"
                            }`}
                          >
                            <Image
                              src={c.image}
                              alt={c.label}
                              fill
                              sizes="160px"
                              className="scale-[1.06] object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {topRow.map((c) => (
                          <motion.div
                            key={c.id + "-dup"}
                            onHoverStart={() => marqueeTopController.pause()}
                            onHoverEnd={() => marqueeTopController.play()}
                            style={{ transform: `rotate(${c.rotate}deg) translateY(${c.y}px)` }}
                            className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.14)] ${
                              c.size === "small"
                                ? "h-[84px] w-[104px]"
                                : c.size === "large"
                                  ? "h-[128px] w-[160px]"
                                  : "h-[104px] w-[132px]"
                            }`}
                          >
                            <Image
                              src={c.image}
                              alt={c.label}
                              fill
                              sizes="160px"
                              className="scale-[1.06] object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      style={{ x: marqueeBottomX }}
                      className="flex items-center gap-4 will-change-transform"
                    >
                      <div ref={marqueeBottomFirstSetRef} className="flex items-center gap-4">
                        {bottomRow.map((c) => (
                          <motion.div
                            key={c.id + "-b"}
                            onHoverStart={() => marqueeBottomController.pause()}
                            onHoverEnd={() => marqueeBottomController.play()}
                            style={{ transform: `rotate(${-c.rotate}deg) translateY(${-c.y}px)` }}
                            className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.14)] ${
                              c.size === "small"
                                ? "h-[84px] w-[104px]"
                                : c.size === "large"
                                  ? "h-[128px] w-[160px]"
                                  : "h-[104px] w-[132px]"
                            }`}
                          >
                            <Image
                              src={c.image}
                              alt={c.label}
                              fill
                              sizes="160px"
                              className="scale-[1.06] object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {bottomRow.map((c) => (
                          <motion.div
                            key={c.id + "-b-dup"}
                            onHoverStart={() => marqueeBottomController.pause()}
                            onHoverEnd={() => marqueeBottomController.play()}
                            style={{ transform: `rotate(${-c.rotate}deg) translateY(${-c.y}px)` }}
                            className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.14)] ${
                              c.size === "small"
                                ? "h-[84px] w-[104px]"
                                : c.size === "large"
                                  ? "h-[128px] w-[160px]"
                                  : "h-[104px] w-[132px]"
                            }`}
                          >
                            <Image
                              src={c.image}
                              alt={c.label}
                              fill
                              sizes="160px"
                              className="scale-[1.06] object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-12 -mx-6 lg:-mx-10">
          <div className="w-full rounded-[18px] bg-white/65 px-6 py-5 ring-1 ring-black/5 backdrop-blur lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-2 place-items-center gap-x-10 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
                {clientLogos.map((l) => (
                  <div key={l.id} className="flex h-12 w-full min-w-0 items-center justify-center overflow-hidden px-2">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={220}
                      height={48}
                      className="h-full w-auto object-contain opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
