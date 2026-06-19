"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function IdentityShockwave() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="shockwave-heading"
      className="bg-neutral py-20 md:py-28 px-6 md:px-16"
    >
      <Divider className="mb-16 md:mb-20 max-w-7xl mx-auto" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2
            id="shockwave-heading"
            className="font-display text-h1 font-medium leading-[1.2]"
          >
            Identity is the lens.
            <br />
            Everything else is downstream.
          </h2>
          <div className="space-y-6 max-w-prose mx-auto text-left">
            <p className="font-body text-body text-secondary text-center">
              When identity is unclear, everything becomes unstable:
            </p>
            <ul className="font-body text-body text-secondary list-disc list-inside mx-auto w-fit space-y-1">
              <li>Purpose feels distant</li>
              <li>Direction feels foggy</li>
              <li>Emotions feel louder</li>
              <li>Decisions feel heavier</li>
              <li>Life feels reactive</li>
            </ul>
            <p className="font-body text-body text-secondary text-center mt-6">
              When identity becomes clear, everything stabilizes:
            </p>
            <ul className="font-body text-body text-secondary list-disc list-inside mx-auto w-fit space-y-1">
              <li>Purpose aligns</li>
              <li>Direction sharpens</li>
              <li>Emotions settle</li>
              <li>Decisions simplify</li>
              <li>Life becomes sovereign</li>
            </ul>
            <p className="font-body text-body text-secondary text-center mt-6">
              Identity is not a mindset.
              <br />
              Identity is the source.
            </p>
          </div>
          <div className="pt-2">
            <ButtonGhost href="/not-mindset-work">
              Why This Is Not Mindset Work
            </ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
