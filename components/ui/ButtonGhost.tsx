"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonGhostProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function ButtonGhost({
  href,
  onClick,
  children,
  className,
  type = "button",
}: ButtonGhostProps) {
  const base = cn(
    "inline-block px-5 py-3 rounded-md",
    "bg-tertiary",
    "font-body font-bold text-label uppercase tracking-[0.16em]",
    "transition-colors duration-150",
    "hover:bg-[#b8903f] focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:outline-offset-3",
    "cursor-pointer select-none",
    className
  );

  const forceBlack = { color: "#0A0A09" } as const;

  if (href) {
    return (
      <Link href={href} className={base} style={forceBlack}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} style={forceBlack}>
      {children}
    </button>
  );
}
