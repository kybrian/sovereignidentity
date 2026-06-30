"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function IdentityOsPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic geometric circuit of identity */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[60%] h-[60%] border-[0.5px] border-tertiary/30 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-tertiary/40" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-tertiary/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-tertiary/60 shadow-[0_0_30px_rgba(201,161,90,0.4)]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            The internal operating system of your life.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Identity OS
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Identity is not a feeling. Identity is not a mindset. Identity is not motivation.</p>
            <p className="text-primary font-medium">Identity is an operating system — a sovereign internal architecture that governs emotions, decisions, direction, and purpose.</p>
            <p>When your Identity OS is aligned, your entire life becomes structured.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/identity-os">Explore the OS</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT THE IDENTITY OS DOES */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity → Emotions → Decisions → Direction</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">The Identity OS governs:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Emotional stability", "Decision-making", "Purpose clarity", "Direction", "Sovereignty"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Identity becomes architecture.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">For Those Who Need Internal Order</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">This OS is for those who:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display text-xl md:text-2xl text-primary font-medium mb-16">
            {["Feel misaligned", "Feel unstable", "Feel directionless", "Feel disconnected", "Feel spiritually dry"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 4 && <span className="text-tertiary/40">•</span>}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Identity becomes structure.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Enter the House</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Begin Your Return</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
