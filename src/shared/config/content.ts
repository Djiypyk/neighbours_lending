/**
 * Editorial copy for the landing sections, kept out of the UI components
 * so widgets stay about layout and content stays easy to tweak.
 */

export const heroContent = {
  eyebrow: "Локальное сообщество вашего района",
  title: "Всё нужное рядом с домом",
  subtitle:
    "Находите людей, услуги, объявления и полезные контакты рядом с вами.",
  primaryCta: "Скачать приложение",
  secondaryCta: "Узнать больше",
  stats: [
    { value: "5 мин", label: "пешком до нужного" },
    { value: "100%", label: "соседи рядом" },
    { value: "Бесплатно", label: "установка и общение" },
  ],
} as const;

export const communityContent = {
  id: "community",
  eyebrow: "Локальное сообщество",
  title: "Станьте частью своего района",
  text: "«Мой район» объединяет жителей одного района и делает повседневную жизнь проще. Знакомьтесь с соседями, узнавайте о событиях рядом и чувствуйте, что у вашего района появился свой цифровой дом.",
} as const;

export const features = [
  {
    id: "listings",
    icon: "tag",
    title: "Объявления по соседству",
    text: "Покупайте и продавайте у людей рядом, а не через весь город. Встреча — в пару минут пешком.",
  },
  {
    id: "services",
    icon: "tools",
    title: "Местные услуги",
    text: "Электрики, репетиторы, мастера красоты, услуги для питомцев и многое другое — рядом с домом.",
  },
  {
    id: "messages",
    icon: "chat",
    title: "Личные сообщения",
    text: "Общайтесь напрямую внутри приложения — спокойно, удобно и без лишних посредников.",
  },
  {
    id: "house-chat",
    icon: "home",
    title: "Чат дома",
    text: "Общий чат жильцов вашего дома: новости подъезда, помощь соседей и всё, что касается вашего дома.",
  },
] as const;

export const stepsContent = {
  id: "start",
  eyebrow: "Простой старт",
  title: "Начните за три шага",
  steps: [
    {
      number: "01",
      title: "Установите",
      text: "Скачайте приложение из App Store или Google Play — это бесплатно.",
    },
    {
      number: "02",
      title: "Выберите свой дом",
      text: "Укажите, где вы живёте, чтобы видеть всё самое близкое и нужное.",
    },
    {
      number: "03",
      title: "Откройте свой район",
      text: "Знакомьтесь с соседями, услугами и объявлениями рядом с вами.",
    },
  ],
} as const;
