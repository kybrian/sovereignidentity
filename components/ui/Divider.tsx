import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  gold?: boolean;
}

export function Divider({ className, gold = false }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-none h-px",
        gold ? "bg-secondary/20" : "bg-secondary/10",
        className
      )}
    />
  );
}
