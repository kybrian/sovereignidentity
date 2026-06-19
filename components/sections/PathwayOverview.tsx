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
  { n: "01", name: "Drift", desc: "Losing connection to identity" },
  { n: "02", name: "Recognition", desc: "Seeing the drift" },
  { n: "03", name: "Return", desc: "Coming back to the source" },
  { n: "04", name: "Purpose", desc: "Remembering direction" },
  { n: "05", name: "Alignment", desc: "Reordering life around identity" },
  { n: "06", name: "Embodiment", desc: "Becoming the person you were meant to be" },
  { n: "07", name: "Legacy", desc: "Building what lasts" },
  { n: "08", name: "Sovereignty", desc: "Living from identity with clarity and authority" },
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
            className="font-display text-h1 font-medium text-primary mb-4"
          >
            Identity transformation is not random.
          </h2>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            It follows a structure: an 8‑stage sequence that mirrors the way humans return to themselves.
          </p>
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
              {/* Stage name & desc */}
              <div className="flex flex-col">
                <span className="font-body text-[1rem] font-medium text-primary/80 tracking-wide uppercase">
                  {stage.name}
                </span>
                <span className="font-body text-sm text-secondary">
                  {stage.desc}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <Divider className="mt-16 mb-8" />

        <div className="text-center mb-8">
          <p className="font-body text-body text-secondary">
            This is the backbone of the entire Sovereign Identity Ecosystem™.
          </p>
        </div>

        <div className="flex justify-center">
          <ButtonPrimary href="/the-pathway">View the Full Pathway</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
