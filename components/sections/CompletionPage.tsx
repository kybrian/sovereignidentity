"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function CompletionPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (COMPLETION STRIKE) */}
      <section
        aria-labelledby="completion-hero-heading"
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden"
      >
        {/* IMAGE SLOT 01 — COMPLETION: Cinematic geometric horizon of light */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-neutral via-tertiary to-neutral opacity-50" />
          <div className="absolute top-1/2 left-0 right-0 h-24 bg-gradient-to-t from-tertiary/10 to-transparent -translate-y-full opacity-60" />
          <div className="absolute top-1/2 left-0 right-0 h-24 bg-gradient-to-b from-tertiary/10 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-8 max-w-3xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            You've reached the end of the page — but the beginning of your return.
          </p>
          <h1
            id="completion-hero-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            Your Identity Journey Begins Now
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p className="text-primary font-medium">
              Identity reconstruction does not end here. It begins here.
            </p>
            <p>
              This page marks the completion of your exploration and the beginning of your transformation.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Begin Your Return</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT COMES NEXT */}
      <section aria-labelledby="next-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-16 space-y-6"
          >
            <h2 id="next-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              The Return™
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              Your next step is simple:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6 max-w-prose mx-auto font-display text-2xl md:text-3xl text-primary font-medium text-center mb-16"
          >
            {["Enter The Return™", "Break the collapse", "Rebuild the identity", "Return to who you were designed to be"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">
              Identity becomes movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CTA (IDENTITY COMMAND) */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto opacity-30" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">
            Enter the House
          </h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return" className="px-8 py-4 text-sm">Begin Your Return</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
