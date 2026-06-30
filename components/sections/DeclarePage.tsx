"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function DeclarePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (DECLARATION STRIKE) */}
      <section
        aria-labelledby="declare-hero-heading"
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden"
      >
        {/* IMAGE SLOT 01 — DECLARATION: Cinematic masculine silhouette raising head into geometric light */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-t from-tertiary/20 to-transparent" />
          <div className="absolute bottom-0 w-[20%] h-[50%] bg-surface border-t border-x border-tertiary/20 rounded-t-full shadow-[0_0_60px_rgba(201,161,90,0.15)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-8 max-w-3xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Before you rebuild, you must declare who you are.
          </p>
          <h1
            id="declare-hero-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            Identity Begins With a Declaration
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              Identity reconstruction does not begin with action. It begins with declaration.
            </p>
            <p className="text-primary font-medium">
              A man cannot return until he declares he is ready.
            </p>
            <p>
              This page is the first step in your return.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/declare">Declare Identity</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHY DECLARATION MATTERS */}
      <section aria-labelledby="why-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-16 space-y-6"
          >
            <h2 id="why-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Identity Requires Intention
            </h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>
                Identity is not passive. Identity is not accidental. Identity is not inherited.
              </p>
              <p className="text-primary font-medium text-lg uppercase tracking-wide">
                Identity is declared.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8 max-w-prose mx-auto text-center mb-16"
          >
            <p className="font-body text-body text-secondary">Declaration creates:</p>
            <div className="space-y-4 font-display text-2xl md:text-3xl text-primary font-medium">
              {["Clarity", "Alignment", "Sovereignty", "Direction", "Purpose"].map((item, idx) => (
                <motion.div key={idx} variants={staggerChildVariants}>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <p className="font-body text-body text-primary font-medium">
              This is the beginning of your return.
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
            Declare Your Identity
          </h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return" className="px-8 py-4 text-sm">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
