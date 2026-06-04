import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-out-quart)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-strong shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-surface",
  ghost: "text-ink hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer noopener" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
