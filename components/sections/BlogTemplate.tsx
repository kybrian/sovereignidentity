"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function BlogTemplate() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 --- ARTICLE TITLE */}
      <section
        aria-labelledby="article-hero-heading"
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-20 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-3xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Category: Identity / Purpose / Alignment / Embodiment / Legacy
          </p>
          <h1
            id="article-hero-heading"
            className="font-display text-[clamp(2rem,6vw,3.5rem)] font-medium leading-[1.1] text-primary"
          >
            (Your VA will insert the article title here.)
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 2 --- IDENTITY FRAMING */}
      <section className="bg-surface py-16 px-6 md:px-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto"
        >
          <div className="p-6 bg-neutral border border-secondary/10 rounded-sm">
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60 mb-3">
              Identity Framing
            </p>
            <p className="font-body text-body text-secondary italic">
              This article helps you see your life through the lens of identity: not emotion, not mindset, not circumstance. Identity is the source. Everything else is downstream.
            </p>
            <p className="font-body text-sm text-secondary/50 mt-4">
              (Your VA will replace this with the correct framing for each article.)
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- MAIN CONTENT */}
      <section className="bg-surface pb-24 md:pb-48 px-6 md:px-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6 font-body text-body text-secondary"
        >
          <p>
            (Your VA will paste the long‑form article content here.)
          </p>
          <p>This section can include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Identity insights</li>
            <li>Frameworks</li>
            <li>Explanations</li>
            <li>Examples</li>
            <li>Stories</li>
            <li>Practical steps</li>
            <li>Clarifying distinctions</li>
          </ul>
          <p className="pt-4">The tone should remain:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Clean</li>
            <li>Direct</li>
            <li>Accessible</li>
            <li>Identity‑rooted</li>
            <li>Structured</li>
          </ul>
        </motion.div>
      </section>

      {/* SECTION 4 --- CTA */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center"
        >
          <ButtonGhost href="/blog">Back to Blog</ButtonGhost>
        </motion.div>
      </section>
    </>
  );
}
