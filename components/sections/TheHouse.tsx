"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function TheHouse() {
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
            A House Built for Your Return
          </h2>
          
          <div className="space-y-8 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              This is not a program. This is not a course. This is not a motivational brand.
            </p>
            <p className="text-primary font-medium">
              This is a House — a sovereign structure designed to bring you back to yourself.
            </p>
            <p>
              Every room has a purpose. Every page has a function. Every step is intentional.
            </p>
            <p className="text-primary font-medium tracking-wide">
              Identity becomes architecture here.
            </p>
          </div>

          <div className="pt-8">
            <ButtonGhost href="/about">Enter the House</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
