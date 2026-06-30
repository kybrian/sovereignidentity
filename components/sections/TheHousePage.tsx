"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function TheHousePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic geometric house silhouette */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[60%] h-[60%] border border-tertiary/30 bg-neutral shadow-[0_0_80px_rgba(201,161,90,0.1)] relative overflow-hidden">
            <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity reconstruction requires a sovereign environment.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The House
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>This is not a brand. This is not a program. This is not a coaching space.</p>
            <p className="text-primary font-medium">This is a House — a sovereign identity environment built for collapse, reconstruction, and return.</p>
            <p>Every room, every page, every system exists to bring you back to yourself.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT THE HOUSE CONTAINS */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Four Rooms of Reconstruction</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">The House contains four sovereign rooms:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Identity Reconstruction", "Identity → Purpose Integration", "Embodiment & Expansion", "Identity Governance"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Each room rebuilds a different part of your identity.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHY THE HOUSE EXISTS */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Requires Structure</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Identity cannot be rebuilt in chaos. Identity requires:</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display text-xl md:text-2xl text-primary font-medium mb-16">
            {["Structure", "Order", "Geometry", "Sovereignty", "Alignment"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 4 && <span className="text-tertiary/40">•</span>}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">This House is the structure.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
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
