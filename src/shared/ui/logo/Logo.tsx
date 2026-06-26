import { cn } from "@/shared/lib";
import { site } from "@/shared/config";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M4 11.5 12 5l8 6.5"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10.5V19h12v-8.5"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="14" r="1.8" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[17px] font-bold tracking-tight text-ink">
        {site.name}
      </span>
    </span>
  );
}
