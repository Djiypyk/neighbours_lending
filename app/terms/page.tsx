import type { Metadata } from "next";
import { TermsPage } from "@/views/legal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description:
    "Правила доступа и использования приложения «Мой район».",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsPage />;
}
