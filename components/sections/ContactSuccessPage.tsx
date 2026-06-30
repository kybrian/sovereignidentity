"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function ContactSuccessPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (CONFIRMATION STRIKE) */}
      <section
        aria-labelledby="success-heading"
        className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden"
      >
        {/* Abstract Image Slot: Cinematic geometric envelope of light */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[120%] h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent rotate-12" />
          <div className="absolute w-[120%] h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent -rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral via-transparent to-neutral" />
        </div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-8 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            You didn't send a message — you entered the House.
          </p>
          <h1
            id="success-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            Your Message Has Been Received
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-6 max-w-prose mx-auto font-body text-body text-secondary">
            <p className="text-primary font-medium">
              Most contact confirmations feel transactional. This one is sovereign.
            </p>
            <p>
              Your message is not sitting in a queue. It is being read with intention, identity, and alignment.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonGhost href="/">Return to the House</ButtonGhost>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT HAPPENS NEXT */}
      <section aria-labelledby="next-heading" className="bg-surface py-24 md:py-32 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-16 space-y-6"
          >
            <h2 id="next-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Identity Responds Intentionally
            </h2>
            <p className="font-body text-body text-secondary">
              Your message will be answered with:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body text-lg text-primary uppercase tracking-wider mb-16"
          >
            {["Clarity", "Alignment", "Identity Direction", "Sovereignty"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 3 && <span className="text-tertiary/40">•</span>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <p className="font-body text-body text-primary font-medium">
              This is not customer service. This is identity service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CTA (IDENTITY COMMAND) */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-primary">
            Continue Your Return
          </h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
