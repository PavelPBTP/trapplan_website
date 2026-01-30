import { PACKAGES } from "@/lib/data/packages";
import Image from "next/image";

function LogoPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[12px] font-extrabold tracking-tight text-black shadow-[0_10px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
      {label}
    </span>
  );
}

function HeroMediaImage({
  src,
  fit = "cover",
  insetClassName,
  className,
  imageClassName,
  alt,
}: {
  src: string;
  fit?: "cover" | "contain";
  insetClassName?: string;
  className?: string;
  imageClassName?: string;
  alt?: string;
}) {
  return (
    <div className={"relative h-full w-full " + (className ?? "")}>
      <div className={"absolute " + (insetClassName ?? "inset-0")}>
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className={
            (fit === "contain" ? "object-contain" : "object-cover") +
            (imageClassName ? ` ${imageClassName}` : "")
          }
        />
      </div>
    </div>
  );
}

function PackageMedia({
  variant,
  accent,
  logos,
  packageTitle,
  packageHref,
}: {
  variant: "phone" | "laptop" | "collage" | "video";
  accent: string;
  logos?: string[];
  packageTitle?: string;
  packageHref?: string;
}) {
  if (variant === "phone" && packageHref === "/reddit-launch-support") {
    return (
      <HeroMediaImage
        src="/images/RLSHero.avif"
        insetClassName="left-[12%] right-[12%] top-[22%] bottom-[2%]"
        alt={packageTitle ? `${packageTitle} mockup` : ""}
      />
    );
  }

  if (variant === "phone" && packageHref === "/tiktok-package-20-videos") {
    return (
      <HeroMediaImage
        src="/images/TTHero.avif"
        insetClassName="left-[10%] right-[10%] top-[20%] bottom-[0%]"
        imageClassName="object-top"
        alt={packageTitle ? `${packageTitle} mockup` : ""}
      />
    );
  }

  if (variant === "phone") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className={"absolute inset-0 rounded-[26px] bg-gradient-to-br opacity-10 " + accent} />

        <div className="relative w-[260px] rounded-[34px] bg-black px-3 py-3 shadow-[0_40px_90px_rgba(0,0,0,0.22)]">
          <div className="rounded-[28px] bg-zinc-900 px-3 pt-3 pb-4">
            <div className="flex items-center justify-between text-[10px] font-semibold text-white/70">
              <span>11:25</span>
              <span className="opacity-70">LTE</span>
            </div>
            <div className="mt-3 h-[260px] rounded-[18px] bg-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0A5B] shadow-[0_18px_40px_rgba(255,10,91,0.35)]">
                <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`phone-skeleton-${idx}`}
                  className="h-7 rounded-[10px] bg-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "collage" && packageHref === "/influencer-micro-campaign") {
    return <HeroMediaImage src="/images/InflHero.avif" alt={packageTitle ? `${packageTitle} collage` : ""} />;
  }

  if (variant === "video" && packageHref === "/gameplay-trailer") {
    return <HeroMediaImage src="/images/TrailerHero.avif" fit="contain" alt={packageTitle ? `${packageTitle} preview` : ""} />;
  }

  if (variant === "collage") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className={"absolute inset-0 rounded-[26px] bg-gradient-to-br opacity-10 " + accent} />

        <div className="absolute right-0 top-2 flex flex-col items-end gap-2">
          {(logos ?? []).map((l) => (
            <LogoPill key={l} label={l} />
          ))}
        </div>

        <div className="relative w-[340px]">
          <div className="absolute left-2 top-8 -rotate-6 rounded-[18px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="h-10 w-[190px] rounded-t-[18px] bg-zinc-100" />
            <div className="grid grid-cols-2 gap-2 p-3">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`collage-left-${idx}`}
                  className="h-10 w-[84px] rounded-[12px] bg-zinc-200"
                />
              ))}
            </div>
          </div>

          <div className="absolute right-2 bottom-6 rotate-3 rounded-[18px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="h-10 w-[210px] rounded-t-[18px] bg-zinc-100" />
            <div className="grid grid-cols-3 gap-2 p-3">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div
                  key={`collage-right-${idx}`}
                  className="h-9 w-[56px] rounded-[12px] bg-zinc-200"
                />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-[160px] translate-y-2 rounded-[28px] bg-black px-2 py-2 shadow-[0_40px_90px_rgba(0,0,0,0.22)]">
            <div className="rounded-[22px] bg-zinc-900 px-2 pt-2 pb-3">
              <div className="h-[180px] rounded-[16px] bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "video") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className={"absolute inset-0 rounded-[26px] bg-gradient-to-br opacity-10 " + accent} />
        <div className="relative w-[360px] rounded-[22px] bg-zinc-950 shadow-[0_40px_90px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
          <div className="flex items-center justify-between px-4 py-3 text-[11px] font-semibold text-white/60">
            <span>Video</span>
            <span className="text-white/40">00:32</span>
          </div>
          <div className="relative h-[210px] overflow-hidden rounded-b-[22px] bg-gradient-to-br from-zinc-800 to-zinc-700">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.8),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.35),transparent_60%)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0A5B] shadow-[0_18px_40px_rgba(255,10,91,0.35)]">
                <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "laptop" && packageHref === "/pr-starter-pack") {
    return (
      <HeroMediaImage
        src="/images/PRHero.avif"
        fit="contain"
        insetClassName="top-[7%] bottom-[7%] left-[13.5%] right-[0.5%]"
        alt={packageTitle ? `${packageTitle} mockup` : ""}
      />
    );
  }

  if (variant === "laptop" && packageHref === "/paid-ads-setup") {
    return (
      <HeroMediaImage
        src="/images/PaidHero.avif"
        insetClassName="top-[10%] bottom-[10%] left-[20%] right-[0%]"
        alt={packageTitle ? `${packageTitle} mockup` : ""}
      />
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className={"absolute inset-0 rounded-[26px] bg-gradient-to-br opacity-10 " + accent} />

      <div className="relative w-[320px]">
        <div className="absolute right-0 top-2 flex flex-col items-end gap-2">
          {(logos ?? []).map((l) => (
            <LogoPill key={l} label={l} />
          ))}
        </div>

        <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
          <div className="h-10 rounded-t-[22px] bg-zinc-100" />
          <div className="grid grid-cols-3 gap-3 p-4">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={`grid-skeleton-${idx}`}
                className="h-16 rounded-[14px] bg-zinc-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageCard({
  title,
  description,
  price,
  accent,
  href,
  media,
  logos,
}: {
  title: string;
  description: string;
  price: string;
  accent: string;
  href: string;
  media: "phone" | "laptop" | "collage" | "video";
  logos?: string[];
}) {
  return (
    <article className="grid min-h-[360px] grid-cols-1 gap-10 overflow-hidden rounded-[28px] bg-white px-8 py-8 shadow-[0_30px_60px_rgba(0,0,0,0.06)] lg:grid-cols-2 lg:gap-0 lg:px-10">
      <div className="max-w-[40ch]">
        <h3 className="whitespace-pre-line text-[21px] font-extrabold leading-[1.15] tracking-tight text-black">
          {title}
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-black/60">{description}</p>

        <div className="mt-7 text-[17px] font-extrabold tracking-tight text-black">
          Price: {price}
        </div>

        <div className="mt-7">
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF0A5B] px-6 py-3 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-[#E6004E]"
          >
            Learn more
            <span aria-hidden className="text-[16px] leading-none">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="relative mt-8 h-[280px] -mb-8 -mr-8 overflow-hidden sm:h-[340px] lg:mt-0 lg:h-auto lg:-my-10 lg:-mr-10">
        <PackageMedia variant={media} accent={accent} logos={logos} packageTitle={title} packageHref={href} />
      </div>
    </article>
  );
}

export default function ReadyToGoPackages() {
  return (
    <section className="bg-[#F3F3F3] pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="pt-8 text-[44px] font-extrabold leading-none tracking-tight text-black sm:pt-14">
          Ready-to-Go Packages
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PACKAGES.map((p) => (
            <PackageCard
              key={p.title}
              title={p.title}
              description={p.description}
              price={p.price}
              accent={p.accent}
              href={p.href}
              logos={p.logos}
              media={p.media}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
