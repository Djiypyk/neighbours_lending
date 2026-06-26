import { cn } from "@/shared/lib";

type Store = "appStore" | "googlePlay";

interface StoreBadgeProps {
  store: Store;
  href: string;
  /** Renders a non-clickable "Скоро" state for an unreleased app. */
  comingSoon?: boolean;
  className?: string;
}

const AppleGlyph = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
    <path d="M16.4 12.6c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .6 1 1.4 2 2.4 2 .9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6 1 0 1.6-.9 2.3-1.9.7-1.1 1-2.1 1-2.2-.1 0-1.8-.7-1.8-2.6ZM14.7 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.8-.5 2.3-1.1Z" />
  </svg>
);

const PlayGlyph = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l9.3-9.7L3.6 2.3Z" fill="#34D27A" />
    <path d="m16.6 8.4-3.7-2.1L4.2 2 13 11.2l3.6-2.8Z" fill="#5CCBFF" />
    <path d="m16.6 14.6-3.7 2.1L4.2 21l8.8-8.8 3.6 2.4Z" fill="#FF7A8A" />
    <path d="m16.6 8.4-3.6 2.8 3.6 2.8 3.3-1.9c.7-.4.7-1.4 0-1.8l-3.3-1.9Z" fill="#FFCE52" />
  </svg>
);

export function StoreBadge({
  store,
  href,
  comingSoon = false,
  className,
}: StoreBadgeProps) {
  const isApple = store === "appStore";
  const storeName = isApple ? "App Store" : "Google Play";

  const inner = (
    <>
      <span className={cn(comingSoon && "opacity-90")}>
        {isApple ? <AppleGlyph /> : <PlayGlyph />}
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-white/70">
          {comingSoon ? "Скоро в" : isApple ? "Загрузите в" : "Доступно в"}
        </span>
        <span className="text-[17px] font-semibold">{storeName}</span>
      </span>
      {comingSoon && (
        <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-dark" />
          Скоро
        </span>
      )}
    </>
  );

  const base =
    "inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-2.5 text-white shadow-soft";

  if (comingSoon) {
    return (
      <span
        aria-label={`${storeName}: скоро`}
        aria-disabled="true"
        className={cn(base, "cursor-default select-none opacity-70", className)}
      >
        {inner}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        "transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16273a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
        className
      )}
    >
      {inner}
    </a>
  );
}
