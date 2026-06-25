import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Apply the accent CTA glow (primary only). */
  glow?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const SIZES: Record<Size, string> = {
  sm: "h-[42px] px-[18px] text-[14.5px]",
  md: "h-[52px] px-[26px] text-[16px]",
  lg: "h-[56px] px-[30px] text-[16px]",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-on)] hover:brightness-[1.06]",
  secondary:
    "bg-transparent border border-[rgba(244,241,234,0.18)] text-bone hover:border-[rgba(244,241,234,0.4)]",
};

function classes(variant: Variant, size: Size, className: string): string {
  return [
    "inline-flex items-center justify-center gap-[9px] rounded-[6px]",
    "font-display font-semibold no-underline transition duration-200 cursor-pointer",
    SIZES[size],
    VARIANTS[variant],
    className,
  ].join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", glow = false, className = "", children } = props;
  const style: CSSProperties | undefined =
    glow && variant === "primary" ? { boxShadow: "var(--cta-glow)" } : undefined;
  const cls = classes(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    const isExternal =
      props.external ?? /^([a-z]+:|#)/i.test(props.href) === true;
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={cls}
          style={style}
          {...(props.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : null)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      className={cls}
      style={style}
    >
      {children}
    </button>
  );
}
