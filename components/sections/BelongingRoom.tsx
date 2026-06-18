"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function BelongingRoom() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="belonging-heading"
      className="bg-surface py-28 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Belonging Room
          </p>
          <h2
            id="belonging-heading"
            className="font-display text-h1 font-medium text-primary"
          >
            A place to feel seen before you transform.
          </h2>
          <div className="space-y-3 max-w-prose mx-auto">
            <p className="font-body text-body text-secondary">
              If you want community before commitment,
              <br />
              conversation before direction,
              <br />
              resonance before action:
              <br />
              start here.
            </p>
          </div>
          <div className="pt-4">
            <ButtonGhost href="/programs#belonging-room">
              Enter The Belonging Room
            </ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
