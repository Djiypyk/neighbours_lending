import type { ReactNode } from "react";
import { Container, Logo, Prose, Icon } from "@/shared/ui";
import { site } from "@/shared/config";
import { SiteFooter } from "@/widgets/site-footer";

interface LegalLayoutProps {
  title: string;
  /** ISO date, e.g. "2026-06-26". */
  updatedAt?: string;
  /** Label shown before the date. */
  dateLabel?: string;
  children: ReactNode;
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

/** Shared shell for legal / document pages. */
export function LegalLayout({
  title,
  updatedAt,
  dateLabel = "Обновлено",
  children,
}: LegalLayoutProps) {
  return (
    <div id="top">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="/" aria-label={site.name}>
              <Logo />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-divider hover:text-ink"
            >
              <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
              На главную
            </a>
          </div>
        </Container>
      </header>

      <main className="py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {updatedAt && (
              <p className="mt-4 text-sm text-muted">
                {dateLabel} {formatDate(updatedAt)}
              </p>
            )}
            <div className="mt-10 border-t border-border pt-10">
              <Prose>{children}</Prose>
            </div>
          </article>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
