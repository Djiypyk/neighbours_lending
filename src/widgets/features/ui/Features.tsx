import { Container, Section, SectionHeading, Icon, type IconName } from "@/shared/ui";
import { features } from "@/shared/config";

export function Features() {
  return (
    <Section id="listings" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Что внутри"
          title="Всё полезное — в шаговой доступности"
          text="Объявления, услуги и общение с теми, кто живёт рядом. Меньше расстояний — больше доверия."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.id}
              id={feature.id}
              className="group flex flex-col gap-4 rounded-3xl border border-border bg-background p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary-light hover:shadow-card"
            >
              <span className="grid h-13 w-13 place-items-center rounded-2xl bg-primary/10 p-3 text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={feature.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-pretty leading-relaxed text-ink-soft">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
