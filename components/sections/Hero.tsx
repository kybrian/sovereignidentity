"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, heroTextVariants } from "@/lib/motion";
import { Lockup } from "@/components/ui/Lockup";
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
          You Don't Need a New Life. You Need Your Identity Back.
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          custom={2}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="font-body text-[1.05rem] md:text-lg leading-relaxed text-secondary max-w-2xl space-y-8"
        >
          <p className="text-xl text-primary/90 font-medium">
            A sovereign space for those who've outgrown the world's version of them.
          </p>
          <div className="space-y-8">
            <p>
              There comes a moment when the noise becomes too loud, the expectations too heavy, and the roles you've been performing no longer fit the shape of your soul.
            </p>
            <p>
              You've carried the weight. You've played the roles. You've survived the seasons. You've done everything the world asked of you — and somewhere along the way, you drifted from the person you were designed to be.
            </p>
            <p className="text-primary/90 font-medium">
              This is where you return.
            </p>
            <p>
              Not to a version shaped by culture, trauma, or expectation — but to the identity that was yours before the world ever touched you.
            </p>
            <p>
              This is not motivation. This is not hype. This is not performance.
            </p>
            <p className="text-tertiary uppercase tracking-[0.16em] text-sm font-bold">
              This is identity reclamation.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroTextVariants}
          initial={markInitial}
          animate={markAnimate ?? "visible"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <ButtonGhost href="/the-return">Begin Your Return</ButtonGhost>
        </motion.div>
      </div>
    </section>
  );
}
