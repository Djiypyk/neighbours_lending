/**
 * Single source of truth for brand-level facts.
 * Shared layer — every upper layer may read from here.
 */
export const site = {
  name: "Мой район",
  tagline: "Всё нужное рядом с домом",
  description:
    "Находите людей, услуги, объявления и полезные контакты рядом с вами. «Мой район» — цифровой дом вашего района.",
  url: "https://moy-rayon.app",
  email: "support@moy-rayon.app",
  locale: "ru_BY",
  /**
   * Пока приложение не опубликовано — false.
   * Когда выйдет: ставим true и вписываем реальные ссылки в `stores` —
   * бейджи сторов автоматически станут кликабельными.
   */
  appAvailable: false,
  stores: {
    appStore: "https://apps.apple.com/app/moy-rayon",
    googlePlay: "https://play.google.com/store/apps/details?id=app.moy_rayon",
  },
} as const;

export const navLinks = [
  { label: "Сообщество", href: "#community" },
  { label: "Объявления", href: "#listings" },
  { label: "Услуги", href: "#services" },
  { label: "Как начать", href: "#start" },
] as const;

export const footerLinks = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  // TODO: вернуть «Поддержка» → "/support", когда появится почта саппорта и страница.
] as const;
