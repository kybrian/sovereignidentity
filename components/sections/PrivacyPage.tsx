"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function PrivacyPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (PRIVACY STRIKE) */}
      <section aria-labelledby="privacy-hero-heading" className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — PRIVACY: Cinematic geometric lock silhouette */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="w-24 h-24 border-4 border-tertiary/20 rounded-t-full relative translate-y-6" />
          <div className="absolute w-48 h-32 bg-neutral border-t border-x border-tertiary/10 translate-y-24 shadow-[0_-20px_60px_rgba(201,161,90,0.1)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity requires protection.
          </p>
          <h1 id="privacy-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            Privacy Policy
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Your identity is sacred. Your information is sovereign. Your privacy is protected.</p>
            <p className="text-primary font-medium">This House does not exploit identity — it restores it.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/">Return to the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — PRIVACY OVERVIEW */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Protection</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">This House protects:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Your information", "Your identity", "Your sovereignty", "Your alignment", "Your privacy"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Identity is guarded here.</p>
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
