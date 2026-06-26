import type { ReactNode } from "react";
import { cn } from "@/shared/lib";

/** Wrapper that applies long-form typography to any semantic HTML inside. */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("prose", className)}>{children}</div>;
}
