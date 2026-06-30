"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export function FounderPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section aria-labelledby="founder-hero-heading" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — FOUNDER: Cinematic masculine portrait, geometric background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
           <div className="w-[60%] h-[120%] border-x border-tertiary/10 bg-gradient-to-b from-transparent via-tertiary/10 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h1 id="founder-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Founder
          </h1>
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity reconstruction begins with the one who rebuilt himself.
          </p>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Before this House existed, there was collapse. Before the frameworks, there was reconstruction. Before the calling, there was obedience.</p>
            <p className="text-primary font-medium">This House exists because I returned.</p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/about">Read the Story</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — THE ORIGIN */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Collapse → Reconstruction → Return</h2>
            <div className="space-y-4 font-body text-body text-secondary max-w-prose mx-auto">
              <p>Identity is forged in the places where everything breaks.</p>
              <p>My collapse wasn't a setback — it was the doorway.</p>
              <p>Reconstruction wasn't optional — it was survival.</p>
              <p className="text-primary font-medium uppercase tracking-wide">This House is built from identity, not ambition.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — THE CALLING */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Why This House Exists</h2>
            <div className="space-y-4 font-body text-body text-secondary max-w-prose mx-auto">
              <p>This House is for those who drifted, those who collapsed, those who carried too much, those who lost themselves, those who need identity, not hype.</p>
              <p className="text-primary font-medium uppercase tracking-[0.16em]">Identity is the source.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Your Return Begins Here</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
