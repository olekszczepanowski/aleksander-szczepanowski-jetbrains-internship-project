import { cn } from "~/utils";

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("box-border bg-white py-24", className)}>{children}</section>;
}
