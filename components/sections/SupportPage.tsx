"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function SupportPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section aria-labelledby="support-hero-heading" className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic geometric support icon */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-32 h-32 rounded-full border-2 border-tertiary/20 flex items-center justify-center">
             <div className="w-24 h-24 rounded-full border border-tertiary/40 bg-gradient-to-tr from-tertiary/10 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity deserves clarity, not chaos.
          </p>
          <h1 id="support-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            Support
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Support in this House is not transactional. It is sovereign, intentional, and identity-aligned.</p>
            <p className="text-primary font-medium">Every message is read with clarity, alignment, and purpose.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/contact">Contact Support</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — SUPPORT OVERVIEW */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity-Aligned Assistance</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Support provides:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Clarity", "Direction", "Identity reinforcement", "Alignment", "Sovereignty"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">This is not customer service. This is identity service.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto opacity-30" />
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
