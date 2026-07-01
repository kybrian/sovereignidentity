"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

export function IdentityLensPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (LENS STRIKE) */}
      <section aria-labelledby="lens-hero-heading" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden border-b border-secondary/10">
        {/* IMAGE SLOT 01 — IDENTITY LENS */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="relative w-64 h-64 md:w-96 md:h-96 border-[0.5px] border-tertiary/30 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border-[0.5px] border-tertiary/20 rounded-full scale-[1.2]" />
            <div className="w-32 h-32 md:w-48 md:h-48 rotate-45 border border-tertiary/50 flex items-center justify-center shadow-[0_0_50px_rgba(201,161,90,0.2)]">
              <div className="w-full h-full rotate-45 border border-tertiary/50" />
            </div>
            {/* Radiant lines */}
            <div className="absolute top-1/2 left-[-20%] right-[-20%] h-px bg-gradient-to-r from-transparent via-tertiary/40 to-transparent" />
            <div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-px bg-gradient-to-b from-transparent via-tertiary/40 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity is the lens. Mindset is the reflection.
          </p>
          <h1 id="lens-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Identity Lens
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Your life doesn't change because you think differently. Your life changes because you see differently.</p>
            <p>
              Identity is upstream. Mindset is downstream.<br />
              Identity is the lens. Mindset is the symptom.
            </p>
            <p className="text-primary font-medium">This page reveals the lens that shapes your entire life.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — THE PROBLEM WITH MINDSET WORK */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The World Teaches You to Fix the Wrong Thing</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">You've been told to:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display text-xl md:text-2xl text-primary font-medium mb-12">
            {["Think positive", "Change your mindset", "Rewrite your story", "Reframe your thoughts", "Believe in yourself"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 4 && <span className="text-tertiary/40 hidden md:inline-block">•</span>}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4 font-body text-body text-secondary max-w-prose mx-auto">
            <p>But none of these work long-term because they don't address the real issue:</p>
            <p className="text-primary font-medium uppercase tracking-[0.16em]">Your lens is distorted.</p>
            <p>You don't need new thoughts. You need a new lens.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — LENS VS STORY */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-5xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Lens Shapes the Story</h2>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-12 space-y-4 border-t-2 border-t-secondary/40 text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl text-primary font-medium">The Story</h3>
                <p className="font-body text-body text-secondary">
                  What you think about your life.<br />
                  Mindset. Narrative. Interpretation.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-12 space-y-4 border-t-2 border-t-tertiary text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl text-primary font-medium">The Lens</h3>
                <p className="font-body text-body text-secondary">
                  How you see your life.<br />
                  Identity. Perception. Orientation.
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center space-y-4 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Most people try to change their story without changing their lens.</p>
            <p>It doesn't work.</p>
            <p className="text-primary font-medium uppercase tracking-[0.16em]">Because the lens always wins.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — PERCEPTUAL SOVEREIGNTY */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Ability to See Clearly</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Perceptual Sovereignty is the ability to see your life through:</p>
          </motion.div>
          
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display text-xl md:text-2xl text-primary font-medium mb-12">
            {["Clarity", "Identity", "Truth", "Discernment", "Internal authority"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 4 && <span className="text-tertiary/40 hidden md:inline-block">•</span>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <p className="font-body text-body text-secondary max-w-prose mx-auto">It is the opposite of:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-secondary/60 uppercase tracking-wide text-sm mb-12">
              {["Reactivity", "Distortion", "External validation", "Noise", "Drift"].map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* IMAGE SLOT 02 — PERCEPTION: Faceless masculine silhouette with golden light */}
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="relative aspect-[16/9] w-full max-w-3xl mx-auto my-16 border border-secondary/20 flex items-end justify-center overflow-hidden bg-neutral">
             {/* Silhouette Base */}
             <div className="w-[30%] h-[60%] border-t-2 border-x border-tertiary/20 rounded-t-full bg-gradient-to-t from-transparent to-tertiary/5 relative z-10" />
             {/* Light Emerging from Top */}
             <div className="absolute top-0 bottom-[40%] w-[150%] bg-gradient-to-t from-tertiary/30 via-tertiary/10 to-transparent mix-blend-screen pointer-events-none" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
             <div className="absolute top-0 bottom-[40%] w-[100%] bg-gradient-to-t from-tertiary/40 via-tertiary/20 to-transparent mix-blend-screen pointer-events-none" style={{ clipPath: "polygon(50% 100%, 20% 0, 80% 0)" }} />
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">
              When you reclaim your perception, you reclaim your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — THE FIVE UPSTREAM CAPACITIES */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Strengthens What Mindset Ignores</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Identity work strengthens the capacities that mindset work ignores:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6 max-w-2xl mx-auto mb-16">
            {[
              { title: "Attention", desc: "Where your awareness rests" },
              { title: "Awareness", desc: "What you notice and what you ignore" },
              { title: "Perception", desc: "How you interpret what you see" },
              { title: "Discernment", desc: "How you separate truth from noise" },
              { title: "Identity", desc: "The lens through which everything is filtered" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-4 border-b border-secondary/10 last:border-b-0">
                <h3 className="font-display text-2xl text-primary shrink-0 w-40">{item.title}</h3>
                <p className="font-body text-body text-secondary">— {item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center">
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">
              When these are strong, mindset becomes irrelevant — because your lens is clean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — THE REAL ENEMY: DRIFT */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-b border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Drift Is the Slow Erosion of Identity</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Drift happens when:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["You live for expectations", "You live for survival", "You live for approval", "You live for performance", "You live disconnected from yourself"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4 font-body text-body text-secondary">
            <p>Drift is subtle. Drift is quiet. Drift steals sovereignty.</p>
            <p className="text-primary font-medium uppercase tracking-[0.16em] pt-2">The Return™ exists to end drift.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Begin The Return™</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
