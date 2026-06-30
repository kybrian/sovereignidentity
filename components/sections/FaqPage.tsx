"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

const faqs = [
  {
    q: "What is this House?",
    a: "A sovereign identity environment built for reconstruction and return."
  },
  {
    q: "Who is this for?",
    a: "Those who drifted, collapsed, or lost themselves — and are ready to return."
  },
  {
    q: "What makes this different?",
    a: "Identity is the source. Everything else flows from it."
  },
  {
    q: "How do I begin?",
    a: "Start with The Return™."
  },
  {
    q: "What do I need to know before entering?",
    a: "Identity requires honesty, alignment, and sovereignty."
  }
];

export function FaqPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="faq-hero-heading" className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral overflow-hidden">
        {/* Abstract Image Slot Placeholder (Cinematic geometric question mark silhouette vibes) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="text-[30rem] md:text-[40rem] font-display text-tertiary font-light select-none">?</div>
           <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity deserves clarity.
          </p>
          <h1 id="faq-hero-heading" className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">
            Frequently Asked Questions
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto my-8" />
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            This House is sovereign, structured, and intentional. These answers exist to remove confusion, reinforce identity, and keep your return clean.
          </p>
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-surface border-t border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-medium text-tertiary">Your Questions, Answered</h2>
          </motion.div>
          
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-0">
            {faqs.map((item, i) => (
              <motion.div key={i} variants={staggerChildVariants} className="py-8 border-b border-secondary/10 last:border-b-0">
                <h3 className="font-display text-2xl text-primary mb-4">{item.q}</h3>
                <p className="font-body text-body text-secondary">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-medium text-primary">Begin Your Return</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
