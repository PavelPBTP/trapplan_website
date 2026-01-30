import Link from "next/link";

import { PACKAGES } from "@/lib/data/packages";
import { FOOTER_LINKS } from "@/lib/data/footer";

type LinkItem = { label: string; href: string };

const TOP_RESOURCES: LinkItem[] = [
  { label: "Blog", href: "/blog" },
  {
    label: "Steam Next Fest 2026 Strategy Guide",
    href: "/blog/steam-next-fest-2026-the-ultimate-strategy-guide",
  },
  {
    label: "Steam Next Fest: Masterclass in Discovery",
    href: "/blog/steam-next-fest-the-masterclass-in-discovery",
  },
  { label: "No wishlists on Steam", href: "/no-wishlists-on-steam" },
  { label: "Work with us", href: "/form" },
];

function toItem(label: string, href: string): LinkItem {
  return { label, href };
}

function normalizeHref(href: string) {
  const q = href.split("?")[0] ?? href;
  return q.endsWith("/") && q !== "/" ? q.slice(0, -1) : q;
}

function filtered(items: LinkItem[], currentPath?: string) {
  const cur = currentPath ? normalizeHref(currentPath) : undefined;
  return items.filter((it) => {
    if (!cur) return true;
    return normalizeHref(it.href) !== cur;
  });
}

function Section({ title, items }: { title: string; items: LinkItem[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="text-[12px] font-extrabold tracking-wide text-black/45">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            prefetch={false}
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black/75 shadow-[0_18px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-colors hover:bg-black/[0.03] hover:text-black"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function InternalLinksSection({
  currentPath,
  variant = "default",
}: {
  currentPath?: string;
  variant?: "default" | "compact";
}) {
  const freeTools = (
    FOOTER_LINKS.find((s) => s.title === "Free Tools")?.links ?? []
  ).map((l) => toItem(l.label, l.href));

  const packages = PACKAGES.map((p) => toItem(p.title.replace(/\s+/g, " ").trim(), p.href));

  const toolsItems = filtered(freeTools, currentPath);
  const packageItems = filtered(packages, currentPath);
  const resourceItems = filtered(TOP_RESOURCES, currentPath);

  const wrapperClass =
    variant === "compact"
      ? "mx-auto max-w-6xl px-6 pb-14 lg:px-10"
      : "mx-auto max-w-6xl px-6 pb-16 lg:px-10";

  return (
    <section className={wrapperClass}>
      <div className="rounded-[26px] bg-white px-6 pt-8 pb-8 shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:px-10">
        <div className="text-[18px] font-extrabold tracking-tight text-black">
          Recommended next
        </div>
        <div className="mt-2 text-[13px] font-medium text-black/55">
          Explore tools, packages, and guides that connect with what you’re viewing.
        </div>

        <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Section title="Free Tools" items={toolsItems} />
          <Section title="Ready-to-Go Packages" items={packageItems} />
          <Section title="Resources" items={resourceItems} />
        </div>
      </div>
    </section>
  );
}
