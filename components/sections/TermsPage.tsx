"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function TermsPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section aria-labelledby="terms-hero-heading" className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic geometric contract silhouette */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-[30%] h-[60%] border-2 border-tertiary/20 bg-gradient-to-br from-tertiary/5 to-transparent relative">
            <div className="absolute top-8 left-8 right-8 h-px bg-tertiary/20" />
            <div className="absolute top-12 left-8 right-16 h-px bg-tertiary/20" />
            <div className="absolute top-16 left-8 right-8 h-px bg-tertiary/20" />
            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-tertiary/40" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Sovereignty requires structure.
          </p>
          <h1 id="terms-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            Terms &amp; Conditions
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>This House operates with clarity, integrity, and identity. These terms protect the structure, the sovereignty, and the alignment of the environment.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/">Return to the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — TERMS OVERVIEW */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity-Aligned Terms</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">This House maintains:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Clarity", "Integrity", "Structure", "Sovereignty", "Protection"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">These terms ensure the environment remains aligned.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto opacity-30" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Continue Your Return</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
