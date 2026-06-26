import { Container, Section, SectionHeading } from "@/shared/ui";
import { stepsContent } from "@/shared/config";

export function SimpleStart() {
  return (
    <Section id={stepsContent.id}>
      <Container>
        <SectionHeading
          eyebrow={stepsContent.eyebrow}
          title={stepsContent.title}
          text="Никаких сложностей — от установки до знакомства с районом всего пара минут."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {stepsContent.steps.map((step, i) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-4 rounded-3xl bg-surface p-8 shadow-soft ring-1 ring-border/70"
            >
              <span className="text-5xl font-bold text-accent">{step.number}</span>
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="text-pretty leading-relaxed text-ink-soft">
                {step.text}
              </p>
              {i < stepsContent.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-6 top-9 hidden text-2xl text-primary-light md:block lg:right-8"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
