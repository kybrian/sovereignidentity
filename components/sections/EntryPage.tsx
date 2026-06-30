"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function EntryPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic geometric doorway of light */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-[30%] h-[70%] border-t-2 border-x-2 border-tertiary/20 bg-gradient-to-t from-transparent via-tertiary/10 to-tertiary/5" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity reconstruction begins here.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            Enter the House
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>This is the gateway — the threshold between who you were and who you are becoming.</p>
            <p className="text-primary font-medium">When you step through this doorway, you enter a sovereign identity environment designed to rebuild you from the inside out.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT YOU ENTER */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Four Rooms</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Inside the House, you will find:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Identity Reconstruction", "Identity → Purpose Integration", "Embodiment & Expansion", "Identity Governance"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">This is the architecture of your return.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto opacity-30" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Begin Your Return</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
