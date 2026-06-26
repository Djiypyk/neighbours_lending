import {
  Container,
  Section,
  SectionHeading,
  CategoryIcon,
  Icon,
} from "@/shared/ui";
import { serviceCategories } from "@/shared/config";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Местные услуги"
          title="Мастер своего дела — рядом с домом"
          text="Электрики, репетиторы, мастера красоты, услуги для питомцев и многое другое. Выберите категорию и найдите проверенного специалиста в шаговой доступности."
        />

        {/* реальные категории приложения — цвета и иконки 1:1 */}
        <div className="mt-14 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {serviceCategories.map((cat) => (
            <div
              key={cat.value}
              className="group flex items-center gap-3.5 rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
              >
                <CategoryIcon name={cat.icon} className="h-6 w-6" />
              </span>
              <span className="text-[15px] font-semibold text-ink">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* пример карточки услуги — как в приложении */}
        <div className="mx-auto mt-10 w-full max-w-md rounded-3xl bg-surface p-5 shadow-card ring-1 ring-border">
          <div className="flex items-center gap-3.5">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
              style={{ backgroundColor: "#8B5CF61A", color: "#8B5CF6" }}
            >
              <CategoryIcon name="sparkle" className="h-6 w-6" />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-ink">Анна — мастер маникюра</span>
              <span className="text-sm text-muted">Красота · 350 м от вас</span>
            </div>
            <span className="ml-auto grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary-dark">
              <Icon name="arrow-right" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
