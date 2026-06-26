import { Container, Logo } from "@/shared/ui";
import { footerLinks, site } from "@/shared/config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container>
        <div className="flex flex-col gap-10 py-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="flex max-w-xs flex-col gap-4">
              <Logo />
              <p className="text-pretty leading-relaxed text-muted">
                Цифровой дом вашего района. Всё нужное — рядом с домом.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-ink-soft transition-colors hover:text-primary-dark"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={`mailto:${site.email}`}
                className="text-ink-soft transition-colors hover:text-primary-dark"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-divider pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {year} {site.name}. Все права защищены.
            </span>
            <span>Сделано с заботой о соседях.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
