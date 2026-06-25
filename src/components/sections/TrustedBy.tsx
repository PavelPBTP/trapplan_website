import { t } from "@/lib/copy";
import type { Locale } from "@/lib/i18n.shared";

const STUDIOS = ["Wargaming", "Gaijin", "War Thunder", "World of Warships", "CrossOut", "Enlisted"];

export default function TrustedBy({ locale }: { locale: Locale }) {
  return (
    <section className="border-b border-[rgba(244,241,234,0.07)]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-10 px-6 py-[30px] lg:px-8">
        <span className="max-w-[150px] flex-shrink-0 text-[13px] leading-[1.45] text-tertiary">
          {t(locale, "trusted.label")}
        </span>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-7">
          {STUDIOS.map((name) => (
            <span
              key={name}
              className="font-display text-[19px] font-bold tracking-[-0.01em] text-tertiary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
