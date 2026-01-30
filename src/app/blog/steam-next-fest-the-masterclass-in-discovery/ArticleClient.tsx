"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Section = {
  title: string;
  paragraphs: string[];
  isCta?: boolean;
};

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-blue-600"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
  );
}

export default function ArticleClient({
  sections,
  interClassName,
  loraClassName,
  rootClassName,
  coverSrc,
  coverAlt,
  coverTitle,
}: {
  sections: Section[];
  interClassName: string;
  loraClassName: string;
  rootClassName: string;
  coverSrc?: string;
  coverAlt?: string;
  coverTitle?: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress((scrollTop / scrollHeight) * 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={rootClassName}>
      <ProgressBar progress={progress} />

      <div className="mx-auto max-w-[720px] px-6 pb-20 pt-12">
        <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-black/50">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
            </li>
            <li className="text-black/30">/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-black">
                Blog
              </Link>
            </li>
            <li className="text-black/30">/</li>
            <li className="text-black/70">Steam Next Fest</li>
          </ol>
        </nav>

        {coverSrc ? (
          <div className="mt-8 overflow-hidden rounded-[18px] bg-black/[0.04]">
            <div className="relative aspect-[16/9]">
              <Image
                src={coverSrc}
                alt={coverAlt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 720px) 100vw, 720px"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              {coverTitle ? (
                <div className="pointer-events-none absolute inset-0 flex items-end p-6">
                  <h1 className={`${loraClassName} text-[34px] font-bold leading-[1.08] tracking-tight text-white sm:text-[40px]`}>
                    {coverTitle}
                  </h1>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <article className="mt-10">
          {sections.map((s, idx) => (
            <section
              key={`${s.title}-${idx}`}
              className={
                s.isCta
                  ? "mt-12 rounded-[18px] bg-slate-50 px-6 py-10 sm:px-8"
                  : idx === 0
                    ? "pt-2"
                    : "mt-12"
              }
            >
              <h2 className={`${loraClassName} text-3xl font-bold leading-snug tracking-tight text-black`}>
                {s.title}
              </h2>

              <div className="mt-6 space-y-5">
                {s.paragraphs.map((p) => (
                  <p key={p} className={`${interClassName} text-lg leading-[1.6] text-[#37352f]`}>
                    {p}
                  </p>
                ))}
              </div>

              {idx < sections.length - 1 ? (
                <div className="mt-10">
                  <hr className="border-gray-100" />
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
