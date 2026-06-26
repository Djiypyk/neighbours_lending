import { Container, Button, StoreBadge, Icon } from "@/shared/ui";
import { heroContent, site } from "@/shared/config";
import { NeighborhoodIllustration } from "./NeighborhoodIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* copy */}
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary-dark shadow-soft ring-1 ring-border">
              <Icon name="pin" className="h-4 w-4" />
              {heroContent.eyebrow}
            </span>

            <h1 className="text-balance text-4xl font-bold leading-[1.07] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {heroContent.title}
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#start" size="lg">
                {heroContent.primaryCta}
                <Icon name="arrow-right" className="h-5 w-5" />
              </Button>
              <Button href="#community" size="lg" variant="secondary">
                {heroContent.secondaryCta}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
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

          {/* illustration */}
          <div className="relative">
            <div className="rounded-4xl bg-surface p-4 shadow-card ring-1 ring-border/70">
              <NeighborhoodIllustration className="rounded-3xl" />
            </div>

            {/* floating stat cards */}
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-float ring-1 ring-border sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-success/15 text-success">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-ink">
                Сосед рядом
              </span>
            </div>
          </div>
        </div>

        {/* trust stats */}
        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <dt className="order-2 text-sm text-muted">{stat.label}</dt>
              <dd className="order-1 text-2xl font-bold text-ink sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
