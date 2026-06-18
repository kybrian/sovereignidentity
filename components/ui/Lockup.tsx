import Image from "next/image";
import { cn } from "@/lib/utils";

interface LockupProps {
  orientation?: "stacked" | "horizontal";
  scale?: "hero" | "header" | "footer";
  className?: string;
  showInstitutional?: boolean;
}

export function Lockup({
  orientation = "stacked",
  scale = "header",
  className,
  showInstitutional = true,
}: LockupProps) {
  const isStacked = orientation === "stacked";
  const isHero = scale === "hero";
  const isFooter = scale === "footer";

  // Header: 40px icon, larger and bolder presence
  const imgSize = isHero ? 64 : isFooter ? 36 : 40;

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        isStacked && "flex-col text-center gap-3",
        className
      )}
    >
      {/* Lion crest mark */}
      <div
        className={cn(
          "flex-shrink-0",
          isHero && "w-16 h-16",
          scale === "header" && "w-10 h-10",
          isFooter && "w-9 h-9"
        )}
      >
        <Image
          src="/lion-head.png"
          alt="The Sovereign Identity Institution crest"
          width={imgSize}
          height={imgSize}
          className={cn(
            "w-full h-full object-contain",
            isHero ? "opacity-95" : "opacity-90"
          )}
          priority={isHero || scale === "header"}
        />
      </div>

      {/* Text lockup */}
      <div className={cn(isStacked ? "space-y-1" : "flex flex-row items-center gap-2")}>
        <p
          className={cn(
            "font-body font-bold uppercase tracking-[0.14em] text-primary leading-none",
            isHero ? "text-sm" : isFooter ? "text-[0.7rem]" : "text-[0.78rem]"
          )}
        >
          Melvin Nibbs
        </p>
        {showInstitutional && (
          <>
            {!isStacked && (
              <span className="text-secondary/40 font-light text-[0.65rem] leading-none select-none">|</span>
            )}
            <p
              className={cn(
                "font-body font-bold uppercase tracking-[0.14em] text-secondary leading-none",
                isHero ? "text-xs" : isFooter ? "text-[0.65rem]" : "text-[0.72rem]"
              )}
            >
              {isStacked ? "The Sovereign Identity Institution" : "Sovereign Identity Institution"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
