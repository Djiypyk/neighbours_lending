import { Container, Logo, Button } from "@/shared/ui";
import { navLinks, site } from "@/shared/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#top" aria-label={site.name}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-divider hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button href="#start" className="shrink-0">
            Скачать
          </Button>
        </div>
      </Container>
    </header>
  );
}
