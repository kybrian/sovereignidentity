"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function TheFounder() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-surface py-16 md:py-24 px-6 md:px-16 border-y border-secondary/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="relative aspect-[3/2] w-full mx-auto order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-neutral border border-secondary/20">
            <Image
              src="/profile.png"
              alt="Melvin, Sovereign Identity Architect"
              fill
              className="object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-8 order-1 md:order-2"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
            Meet the Architect
          </h2>

          <div className="space-y-8 font-body text-body text-secondary max-w-prose">
            <p>
              I don't teach identity from theory. I teach it from reconstruction.
            </p>
            <p>
              From the nights where everything collapsed. From the seasons where identity had to be rebuilt piece by piece. From the moments where God rebuilt me from the inside out.
            </p>
            <p>
              This House wasn't built from ambition. It was built from obedience.
            </p>
            <p className="text-primary font-medium">
              And now it's yours.
            </p>
          </div>

          <div className="pt-4">
            <ButtonGhost href="/founder">Learn the Story</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
