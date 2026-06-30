"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function IdentityLens() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-neutral py-16 md:py-24 px-6 md:px-16">
      <Divider className="mb-16 max-w-7xl mx-auto" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
            Identity Is the Source
          </h2>
          
          <div className="space-y-8 max-w-prose mx-auto text-left font-body text-body text-secondary">
            <p className="text-center font-medium text-primary tracking-wide">
              Identity → Purpose → Direction → Emotions → Decisions
            </p>
            
            <p className="text-center">
              Identity is not a mindset. Identity is the origin point — the place where everything begins.
            </p>

            <div className="pt-4">
              <p className="text-center mb-6">When identity becomes clear:</p>
              <ul className="mx-auto w-fit space-y-6 text-center text-lg">
                <li><span className="text-primary font-medium">Purpose</span> emerges</li>
                <li><span className="text-primary font-medium">Direction</span> stabilizes</li>
                <li><span className="text-primary font-medium">Emotions</span> anchor</li>
                <li><span className="text-primary font-medium">Decisions</span> sharpen</li>
                <li><span className="text-primary font-medium">Life</span> aligns</li>
              </ul>
            </div>

            <p className="text-center pt-8 text-primary font-medium">
              Identity is not discovered. Identity is remembered.
            </p>
          </div>

          <div className="pt-8">
            <ButtonGhost href="/identity-lens">Explore the Identity Lens</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
