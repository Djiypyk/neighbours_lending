import { Container, Section, Icon } from "@/shared/ui";
import { communityContent } from "@/shared/config";

const tiles = [
  { label: "Соседи", icon: "users" as const, tone: "bg-accent/40 text-primary-dark" },
  { label: "События рядом", icon: "sparkle" as const, tone: "bg-success/15 text-success" },
  { label: "Полезные контакты", icon: "pin" as const, tone: "bg-primary/12 text-primary-dark" },
  { label: "Общение", icon: "chat" as const, tone: "bg-warning/15 text-warning" },
];

export function Community() {
  return (
    <Section id={communityContent.id}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/40 px-3.5 py-1.5 text-sm font-medium text-primary-dark">
              {communityContent.eyebrow}
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              {communityContent.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              {communityContent.text}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {tiles.map((tile, i) => (
              <div
                key={tile.label}
                className="flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border/70 data-[lift=true]:translate-y-6"
                data-lift={i % 2 === 1}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tile.tone}`}>
                  <Icon name={tile.icon} className="h-6 w-6" />
                </span>
                <span className="text-base font-semibold text-ink">
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
