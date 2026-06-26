import type { ReactNode } from "react";
import { cn } from "@/shared/lib";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/** Consistent vertical rhythm with generous whitespace. */
export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent/40 px-3.5 py-1.5 text-sm font-medium text-primary-dark data-[center=true]:self-center" data-center={align === "center"}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {text && (
        <p className="text-pretty text-lg leading-relaxed text-ink-soft">
          {text}
        </p>
      )}
    </div>
  );
}
