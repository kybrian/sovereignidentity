import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface text-primary rounded-[3px] p-8 md:p-12",
        "border border-secondary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
