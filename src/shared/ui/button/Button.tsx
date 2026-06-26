import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-ink ring-1 ring-border hover:ring-primary-light hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-soft hover:text-ink hover:bg-divider",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base py-3.5",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Anchor-based by design — every CTA on the page navigates somewhere. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
