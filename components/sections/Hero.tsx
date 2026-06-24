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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        src="/hero.mp4"
      />
      
      {/* Video Overlay for readability */}
      <div className="absolute inset-0 bg-neutral/60" />

      {/* Subtle geometric background line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-px h-full bg-secondary/8" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        {/* Crest: ceremonial, full size */}
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
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-primary"
        >
          You Were Never Built to Perform.
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          custom={2}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="font-body text-[1.05rem] md:text-lg leading-relaxed text-secondary max-w-2xl space-y-4"
        >
          <p>
            The world handed you a role. You played it well.<br />
            Now it's time to build something that is actually yours.
          </p>
          <p>
            There is a version of you that was assembled for other people — their comfort, their systems, their expectations. You carried it. You were disciplined enough to carry it well. But discipline in someone else's architecture is still someone else's architecture. This is where that ends.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-2"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">Begin Your Return</p>
          <ButtonGhost href="#learn-more">↓ Learn What Sovereign Identity™ Builds</ButtonGhost>
        </motion.div>
      </div>
    </section>
  );
}
