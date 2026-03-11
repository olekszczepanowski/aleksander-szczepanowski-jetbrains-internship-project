import { cn } from "~/utils";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("box-border mx-auto max-w-319 px-5.5 w-full", className)}
    >
      {children}
    </section>
  );
}
