import type { Metadata } from "next";
import { PrivacyPage } from "@/views/legal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Как приложение «Мой район» собирает, использует и защищает ваши данные.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}
