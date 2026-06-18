"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

const stages = [
  { n: "01", name: "Drift" },
  { n: "02", name: "Recognition" },
  { n: "03", name: "Return" },
  { n: "04", name: "Purpose" },
  { n: "05", name: "Alignment" },
  { n: "06", name: "Embodiment" },
  { n: "07", name: "Legacy" },
  { n: "08", name: "Sovereignty" },
];

export function PathwayOverview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="pathway-overview-heading"
      className="bg-surface py-28 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16 md:mb-20"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Sovereign Identity Pathway™
          </p>
          <h2
            id="pathway-overview-heading"
            className="font-display text-h1 font-medium text-primary"
          >
            The 8‑Stage Identity Transformation Sequence
          </h2>
        </motion.div>

        {/* Vertical pathway */}
        <motion.ol
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="relative space-y-0"
          aria-label="8 stages of the Sovereign Identity Pathway"
        >
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[22px] top-0 bottom-0 w-px bg-secondary/10"
          />

          {stages.map((stage) => (
            <motion.li
              key={stage.n}
              variants={staggerChildVariants}
              className="relative flex items-center gap-6 py-4 group"
            >
              {/* Stage number node */}
              <div className="relative z-10 flex-shrink-0 w-11 h-11 flex items-center justify-center bg-neutral border border-secondary/30 rounded-sm">
                <span className="font-body text-label text-secondary">
                  {stage.n}
                </span>
              </div>
              {/* Stage name */}
              <span className="font-body text-[1rem] font-medium text-primary/80 tracking-wide uppercase">
                {stage.name}
              </span>
            </motion.li>
          ))}
        </motion.ol>

        <Divider className="mt-16 mb-12" />

        <div className="flex justify-center">
          <ButtonPrimary href="/the-pathway">View the Full Pathway</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
