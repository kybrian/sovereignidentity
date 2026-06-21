"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function IdentityPhilosophyPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="philosophy-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Identity Philosophy</p>
          <h1 id="philosophy-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">
            Identity Philosophy
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- IDENTITY PHILOSOPHY */}
      <section aria-label="Identity Philosophy" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Identity Philosophy</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity is the source.<br />
              Identity is upstream.<br />
              Identity is structural.<br />
              Identity is sovereign.
            </p>
            <p>
              Everything else (mindset, habits, emotions, behavior) is downstream.
            </p>
            <p className="pt-2">
              This page explains the philosophy behind the entire ecosystem.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- IDENTITY IS THE SOURCE */}
      <section aria-labelledby="source-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="source-heading" className="font-display text-h1 font-medium text-primary">Identity is the Source</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Identity shapes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>How you think</li>
              <li>How you feel</li>
              <li>How you act</li>
              <li>What you pursue</li>
              <li>What you tolerate</li>
              <li>What you build</li>
            </ul>
            <p className="pt-2">
              When identity is unclear, everything becomes unstable.<br />
              When identity becomes clear, everything stabilizes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- IDENTITY IS UPSTREAM */}
      <section aria-labelledby="upstream-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="upstream-heading" className="font-display text-h1 font-medium text-primary">Identity is Upstream</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Most people try to change their lives downstream:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mindset</li>
              <li>Habits</li>
              <li>Emotions</li>
              <li>Productivity</li>
              <li>Motivation</li>
            </ul>
            <p className="pt-2">
              But none of it lasts because the source hasn't changed.
            </p>
            <p>
              Identity is upstream.<br />
              Identity is the lens.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- IDENTITY IS STRUCTURAL */}
      <section aria-labelledby="structural-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="structural-heading" className="font-display text-h1 font-medium text-primary">Identity is Structural</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity is not emotional.<br />
              Identity is not motivational.<br />
              Identity is not inspirational.
            </p>
            <p>Identity is structural.</p>
            <p>It is the internal architecture that shapes your entire life.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 --- IDENTITY IS SOVEREIGN */}
      <section aria-labelledby="sovereign-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="sovereign-heading" className="font-display text-h1 font-medium text-primary">Identity is Sovereign</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Sovereignty is not dominance.<br />
              Sovereignty is clarity.
            </p>
            <p>
              It is the ability to live from identity: not reaction, not pressure, not noise.
            </p>
            <p className="pt-2">This is the heart of the work.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 --- CTA */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="/not-mindset-work">Explore The Pathway</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
