"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function JournalPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-neutral py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
            The Sovereign Identity Journal™
          </h2>
          
          <div className="space-y-8 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              A cinematic, masculine, geometric identity briefing — delivered weekly.
            </p>
            <p className="text-primary font-medium tracking-wide">
              Not a blog. Not a newsletter. A sovereign publication.
            </p>
          </div>

          <div className="pt-8">
            <ButtonGhost href="/journal">Read the Journal</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
