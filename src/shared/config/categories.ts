import type { CategoryIconName } from "@/shared/ui";

/**
 * Реальные категории услуг приложения «Мой район».
 * Источник: supabase/migrations/021_service_categories_table.sql (RN-репозиторий).
 * Значения, подписи, цвета и иконки совпадают с приложением 1:1.
 */
export interface ServiceCategory {
  value: string;
  label: string;
  color: string;
  icon: CategoryIconName;
}

export const serviceCategories: ServiceCategory[] = [
  { value: "repair", label: "Ремонт", color: "#F59E0B", icon: "wrench" },
  { value: "tutors", label: "Репетиторы", color: "#3B82F6", icon: "book" },
  { value: "children", label: "Дети", color: "#EC4899", icon: "baby" },
  { value: "beauty", label: "Красота", color: "#8B5CF6", icon: "sparkle" },
  { value: "delivery", label: "Доставка", color: "#14B8A6", icon: "package" },
  { value: "animals", label: "Животные", color: "#10B981", icon: "paw" },
  { value: "household", label: "Бытовые", color: "#6495ED", icon: "home" },
  { value: "crafts", label: "Ремесленничество", color: "#D97757", icon: "palette" },
];
