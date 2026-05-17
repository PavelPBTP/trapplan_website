import Link from "next/link";

export interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  trail: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ trail, className }: BreadcrumbsProps) {
  if (trail.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-black/50">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${crumb.href}-${i}`} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="line-clamp-1 max-w-[40ch] text-black/70"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-black"
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast ? <span className="text-black/30">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
