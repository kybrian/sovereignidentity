"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function NotMindsetWorkPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="nmw-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Not Mindset Work</p>
          <h1 id="nmw-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">
            Why This Is Not Mindset Work
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- WHY THIS IS NOT MINDSET WORK */}
      <section aria-label="Why This Is Not Mindset Work" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Why This Is Not Mindset Work</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity is the lens.<br />
              Everything else is downstream.
            </p>
            <p>
              Mindset changes thoughts.<br />
              Identity changes the one who thinks.
            </p>
            <p className="pt-2">This page exists to make the distinction clear.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- THE LIMITS OF MINDSET WORK */}
      <section aria-labelledby="limits-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="limits-heading" className="font-display text-h1 font-medium text-primary">The Limits of Mindset Work</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Mindset work focuses on:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Thoughts</li>
              <li>Beliefs</li>
              <li>Emotions</li>
              <li>Motivation</li>
              <li>Reframing</li>
            </ul>
            <p className="pt-2">These are downstream symptoms.</p>
            <p>They change temporarily, but they don't transform the source.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- THE POWER OF IDENTITY WORK */}
      <section aria-labelledby="power-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="power-heading" className="font-display text-h1 font-medium text-primary">The Power of Identity Work</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Identity work focuses on:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Who you are</li>
              <li>How you see yourself</li>
              <li>How you move</li>
              <li>How you decide</li>
              <li>How you orient</li>
              <li>How you build</li>
            </ul>
            <p className="pt-2">
              Identity is structural.<br />
              Identity is upstream.<br />
              Identity is sovereign.
            </p>
            <p>When identity changes, everything downstream changes automatically.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- THE CORE DISTINCTION */}
      <section aria-labelledby="distinction-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="distinction-heading" className="font-display text-h1 font-medium text-primary">The Core Distinction</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Mindset asks:<br />
              "How do I think differently?"
            </p>
            <p>
              Identity asks:<br />
              "Who is the one thinking?"
            </p>
            <p className="pt-2">
              Mindset is surface.<br />
              Identity is source.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 --- CTA */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="/programs">Explore Identity Work</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
