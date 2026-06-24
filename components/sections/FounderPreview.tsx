"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function FounderPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-neutral py-28 md:py-36 px-6 md:px-24 relative overflow-hidden"
    >
      <Divider className="mb-28 md:mb-36 max-w-7xl mx-auto" />

      {/* Watermark crest */}
      <div
        aria-hidden="true"
        className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none hidden md:block"
      >
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <polygon points="40,2 52,14 28,14" fill="#C9A15A" />
          <rect x="26" y="14" width="28" height="22" fill="none" stroke="#C9A15A" strokeWidth="2" />
          <rect x="32" y="18" width="6" height="6" fill="#C9A15A" />
          <rect x="42" y="18" width="6" height="6" fill="#C9A15A" />
          <polygon points="34,26 40,32 46,26" fill="#C9A15A" />
          <rect x="31" y="37" width="18" height="14" fill="none" stroke="#C9A15A" strokeWidth="1.5" />
          <polygon points="36,52 40,60 44,52" fill="#C9A15A" />
          <line x1="24" y1="50" x2="20" y2="58" stroke="#C9A15A" strokeWidth="2" />
          <line x1="56" y1="50" x2="60" y2="58" stroke="#C9A15A" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
        {/* Left: text */}
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-start space-y-6 py-4 md:py-8"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            About the Founder
          </p>
          <h2
            id="founder-heading"
            className="font-display text-h2 font-medium"
          >
            Melvin, Sovereign Identity Architect™
          </h2>
          <div className="space-y-4 max-w-prose">
            <p className="font-body text-body text-secondary">
              Melvin is a Sovereign Identity Architect™ who helps high-capacity individuals return to themselves, rebuild their internal architecture, and live from identity instead of performance.
            </p>
            <p className="font-body text-body text-secondary">
              A former U.S. Navy serviceman, he carries a discipline forged in structure, a presence shaped by adversity, and a clarity earned through reconstruction.
            </p>
            <p className="font-body text-body text-secondary">
              His work is not motivational.<br />
              It is structural.<br />
              Through The Return™, The Purpose Method™, The Trilogy™, and the Sovereign Identity Ecosystem™, he guides high-capacity individuals through the deep work of identity, alignment, embodiment, and legacy — without theatrics, emotional chaos, or performative vulnerability.
            </p>
            <p className="font-body text-body text-secondary">
              His philosophy is simple:<br />
              You do not need a new life.<br />
              You need to return to yourself.
            </p>
            <p className="font-body text-body text-secondary">
              Melvin builds systems, not slogans.<br />
              Identity, not inspiration.<br />
              Sovereignty, not survival.
            </p>
          </div>
          <ButtonGhost href="/about">Read the Full About Page</ButtonGhost>
        </motion.div>

        {/* Right: founder portrait */}
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/5] rounded-[3px] overflow-hidden border border-secondary/10"
        >
          <Image
            src="/profile.png"
            alt="Melvin Nibbs, Identity Architect and founder of The Sovereign Identity Institution"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
