"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function TheCirclePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="circle-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Program</p>
          <h1 id="circle-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            The Sovereign Identity Circle™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- CONTINUATION */}
      <section aria-label="Continuation" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Continuation</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity is not a moment.<br />
              Identity is a practice.
            </p>
            <p>
              The Sovereign Identity Circle™ is where identity continues to evolve, long after the initial transformation.
            </p>
            <p>
              This is where clarity deepens.<br />
              Where embodiment strengthens.<br />
              Where sovereignty becomes natural.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- WHAT YOU EXPERIENCE */}
      <section aria-labelledby="experience-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="experience-heading" className="font-display text-h1 font-medium text-primary">What You Experience</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Inside The Circle™, you experience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Identity refinement</li>
              <li>Embodied sovereignty</li>
              <li>Legacy expansion</li>
              <li>Long-term clarity</li>
              <li>A grounded internal world</li>
              <li>A stable identity practice</li>
            </ul>
            <p className="pt-2">This is the continuation of your identity journey.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- WHO THIS IS FOR */}
      <section aria-labelledby="who-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="who-heading" className="font-display text-h1 font-medium text-primary">Who This Is For</h2>
          <p className="font-body text-body text-secondary">The Circle™ is for people who:</p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "Completed The Trilogy™",
              "Want continued evolution",
              "Want identity support",
              "Want sovereign community",
              "Want long-term clarity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">If you want to live from identity every day, this is your continuation.</p>
        </motion.div>
      </section>

      {/* SECTION 4 --- CTA */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonPrimary href="#join">Join The Circle™</ButtonPrimary>
            <ButtonGhost href="/the-pathway">Explore The Pathway</ButtonGhost>
          </div>
        </motion.div>
      </section>
    </>
  );
}
