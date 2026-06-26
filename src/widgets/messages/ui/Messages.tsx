import { Container, Section, Icon } from "@/shared/ui";

const thread = [
  { from: "them", text: "Здравствуйте! Велосипед ещё продаёте?" },
  { from: "me", text: "Да, конечно. Я в соседнем доме 🙂" },
  { from: "them", text: "Отлично, заберу через 5 минут!" },
];

export function Messages() {
  return (
    <Section id="messages" className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* chat mockup */}
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-sm rounded-4xl bg-background p-3 shadow-card ring-1 ring-border">
              <div className="rounded-3xl bg-surface p-4">
                <div className="flex items-center gap-3 border-b border-divider pb-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/50 font-semibold text-primary-dark">
                    М
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-ink">Михаил</span>
                    <span className="text-xs text-success">в сети · 300 м</span>
                  </span>
                  <span className="ml-auto text-muted">
                    <Icon name="chat" className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 pt-4">
                  {thread.map((msg, i) => (
                    <div
                      key={i}
                      className={
                        msg.from === "me"
                          ? "max-w-[78%] self-end rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-[15px] text-white"
                          : "max-w-[78%] self-start rounded-2xl rounded-bl-md bg-divider px-3.5 py-2.5 text-[15px] text-ink"
                      }
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl bg-background px-4 py-2.5 ring-1 ring-border">
                  <span className="text-sm text-muted">Сообщение…</span>
                  <span className="ml-auto grid h-8 w-8 place-items-center rounded-xl bg-primary text-white">
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* copy */}
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/40 px-3.5 py-1.5 text-sm font-medium text-primary-dark">
              Личные сообщения
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Общайтесь напрямую внутри приложения
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              Договаривайтесь о встрече, обсуждайте детали и знакомьтесь с
              соседями — спокойно, удобно и без лишних посредников. Всё общение
              остаётся внутри «Моего района».
            </p>
            <ul className="flex flex-col gap-3 pt-1">
              {[
                "Личные диалоги с соседями и специалистами",
                "Чат дома — общий чат жильцов вашего дома",
                "Без номеров телефона до встречи",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-soft">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-success/15 text-success">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
