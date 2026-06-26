import { Container, StoreBadge } from "@/shared/ui";
import { site } from "@/shared/config";

export function DownloadCta() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-4xl bg-surface px-8 py-14 text-center shadow-card ring-1 ring-border sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        />
        <div className="relative flex flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            У вашего района появился цифровой дом
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Всё важное — близко. Всё полезное — рядом. Всё начинается с вашего
            района.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <StoreBadge
              store="appStore"
              href={site.stores.appStore}
              comingSoon={!site.appAvailable}
            />
            <StoreBadge
              store="googlePlay"
              href={site.stores.googlePlay}
              comingSoon={!site.appAvailable}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
