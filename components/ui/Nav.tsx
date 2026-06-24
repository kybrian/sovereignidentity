"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Lockup } from "./Lockup";
import { ButtonPrimary } from "./ButtonPrimary";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Return™", href: "/the-return" },
  { label: "The Trilogy™", href: "/the-trilogy" },
  { label: "The Belonging Room™", href: "/the-belonging-room" },
  { label: "The Architect", href: "/about" },
  { label: "Apply", href: "/the-return" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-secondary/15 bg-neutral/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
        <Link href="/" aria-label="The Sovereign Identity Institution, Home">
          <Lockup orientation="horizontal" scale="header" showInstitutional={false} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body font-bold text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-150",
                pathname === link.href
                  ? "text-tertiary"
                  : "text-secondary hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ButtonPrimary href="/the-return" className="hidden lg:inline-flex ml-4 px-4 py-2 text-[0.65rem]">
            Begin The Return™
          </ButtonPrimary>
        </nav>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary"
        >
          <span
            className={cn(
              "block w-6 h-px bg-primary transition-all duration-200",
              open && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-primary transition-all duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-primary transition-all duration-200",
              open && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-secondary/15 bg-neutral">
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-body font-bold text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-150",
                  pathname === link.href ? "text-tertiary" : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-secondary/10">
              <ButtonPrimary href="/the-return" className="w-full text-center py-3">
                Begin The Return™
              </ButtonPrimary>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
