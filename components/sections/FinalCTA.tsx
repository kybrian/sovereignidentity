"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export function FinalCTA() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-surface py-20 md:py-28 px-6 md:px-16 border-t border-secondary/10 text-center">
      <motion.div
        variants={scrollRevealVariants}
        initial="hidden"
        whileInView={animate ?? "visible"}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-10"
      >
        <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">
          Your Return Begins Now
        </h2>
        <div className="pt-6">
          <ButtonPrimary href="/the-return" className="px-8 py-4 text-sm">Enter the House</ButtonPrimary>
        </div>
      </motion.div>
    </section>
  );
}
