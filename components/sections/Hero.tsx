"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, heroTextVariants } from "@/lib/motion";
import { Lockup } from "@/components/ui/Lockup";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function Hero() {
  const reducedMotion = useReducedMotion();

  const markAnimate = reducedMotion ? "visible" : undefined;
  const markInitial = reducedMotion ? "visible" : "hidden";

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 pt-16 pb-10 md:pb-16 bg-neutral overflow-hidden"
    >
      {/* Subtle geometric background line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-px h-full bg-secondary/8" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
        {/* Crest — ceremonial, full size */}
        <motion.div
          variants={heroMarkVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <Lockup orientation="stacked" scale="hero" showInstitutional={true} />
        </motion.div>

        {/* Divider hairline */}
        <motion.div
          custom={0}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="w-12 h-px bg-secondary/20"
        />

        {/* Display headline */}
        <motion.h1
          custom={1}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-7xl font-medium leading-[1.1] text-primary"
        >
          THE RETURN™
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="font-body text-[1.05rem] leading-relaxed text-secondary max-w-prose"
        >
          Come back to who you were always meant to be.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          <ButtonGhost href="/the-pathway">Explore the Pathway</ButtonGhost>
        </motion.div>
      </div>

      {/* TODO: imagery pending from client — faceless silhouette before golden threshold */}
    </section>
  );
}
