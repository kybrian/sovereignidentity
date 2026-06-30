"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function ThePathway() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  const stages = [
    "Drift",
    "Recognition",
    "Return",
    "Purpose",
    "Alignment",
    "Embodiment",
    "Legacy",
    "Sovereignty"
  ];

  return (
    <section className="bg-surface py-16 md:py-24 px-6 md:px-16 border-y border-secondary/10">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
            The Pathway of Return
          </h2>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            Identity reconstruction follows a geometric sequence — a sovereign pathway that brings you back to yourself.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-8 pb-8"
        >
          {stages.map((stage, i) => (
            <motion.div key={stage} variants={staggerChildVariants} className="text-center">
              <div className="font-body text-label uppercase tracking-[0.16em] text-tertiary mb-4">
                Stage 0{i + 1}
              </div>
              <div className="font-display text-2xl text-primary">{stage}</div>
              {i < stages.length - 1 && (
                <div className="md:hidden mt-8 w-px h-8 bg-secondary/20 mx-auto" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-8 pt-8"
        >
          <p className="font-body text-body text-primary font-medium">
            This is the architecture of your return.
          </p>
          <ButtonGhost href="/pathway">Walk the Pathway</ButtonGhost>
        </motion.div>
      </div>
    </section>
  );
}
