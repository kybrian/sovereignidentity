"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";

export function TheArchitectPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-surface py-20 md:py-32 px-6 md:px-24 border-y border-secondary/10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-6 items-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="relative aspect-[3/4] w-full max-w-sm mx-auto"
        >
          <div className="absolute inset-0 border border-tertiary/20 -translate-x-2 -translate-y-2 md:-translate-x-4 md:-translate-y-4" />
          <div className="absolute inset-0 bg-neutral border border-secondary/20">
            <Image
              src="/profile.png"
              alt="Melvin, Sovereign Identity Architect"
              fill
              className="object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-90"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6 pt-8 md:pt-0"
        >
          <div className="space-y-2">
            <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
              The Architect
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-[1.2]">
              He Did Not Teach This.<br className="hidden lg:block" /> He Built It First.
            </h2>
          </div>

          <div className="space-y-4 max-w-prose">
            <p className="font-body text-body text-secondary">
              Melvin is a Sovereign Identity Architect™ and former United States Navy service member who spent years operating in systems that demanded full performance and left no room for personal construction. He knows what it costs to execute at the highest level inside a framework that was never built around your identity — because he paid that cost, documented what it produced, and built the alternative from the ground up.
            </p>
            <p className="font-body text-body text-secondary">
              The Sovereign Identity™ system was not reverse-engineered from self-help literature. It was built from the specific, structural experience of a man who served, transitioned, and refused to let the transition be someone else's blueprint for who he was supposed to become.
            </p>
            <p className="font-body text-body font-bold text-primary">
              Melvin does not motivate. He architects.
            </p>
          </div>

          <p className="font-body text-[0.75rem] uppercase tracking-[0.14em] text-secondary/60">
            U.S. Navy Veteran <span className="mx-2 text-tertiary">|</span> Sovereign Identity Architect™ <span className="mx-2 text-tertiary">|</span> Builder of the Sovereign Identity System
          </p>

          <div className="pt-2">
            <ButtonGhost href="/about">Work with Melvin</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
