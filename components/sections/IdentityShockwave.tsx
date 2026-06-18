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
          <div className="space-y-4 max-w-prose mx-auto">
            <p className="font-body text-body text-secondary">
              Most people try to change their mindset.
              <br />
              You change the source.
            </p>
            <p className="font-body text-body text-secondary">
              This is not mindset work.
              <br />
              This is identity work: upstream, structural, sovereign.
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
