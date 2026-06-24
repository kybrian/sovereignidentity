"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Card } from "@/components/ui/Card";

export function TheTrilogyPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  const volumes = [
    {
      num: "I",
      title: "The Reclamation",
      desc: "The first volume strips the performance layer. This is where a man stops managing the version of himself that was built for everyone else and begins the systematic process of identifying what is actually his. Foundational. Uncompromising. Necessary."
    },
    {
      num: "II",
      title: "The Architecture",
      desc: "The second volume is construction. Identity pillars are named, positioned, and reinforced. Content systems are built to carry the sovereign voice into every channel, every conversation, every opportunity — without drift, without apology."
    },
    {
      num: "III",
      title: "The Declaration",
      desc: "The third volume is the public record. A man who has completed Volumes I and II does not announce himself — he demonstrates. The Declaration is the phase where the built identity meets the world on his own terms, through his own systems, at his own standard."
    }
  ];

  return (
    <section className="bg-neutral py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            The Trilogy™
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1]">
            Three Bodies of Work.<br className="hidden md:block" /> One Complete Architecture.
          </h2>
          <p className="font-body text-body text-secondary">
            The Trilogy™ is the full Sovereign Identity™ body of work — a three-phase progression that takes a man from the moment he stops performing, through the full construction of his identity, to the point where that identity speaks for itself in every room he enters. Each volume builds on the last. Nothing is skipped. Nothing is rushed. The Trilogy™ is the complete architectural record of a man who chose to build.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {volumes.map((vol) => (
            <motion.div key={vol.num} variants={staggerChildVariants}>
              <Card className="h-full flex flex-col items-center text-center p-8 md:p-10 space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-tertiary/30 text-tertiary font-display text-xl mb-2">
                  {vol.num}
                </div>
                <h3 className="font-display text-2xl text-primary font-medium">{vol.title}</h3>
                <p className="font-body text-body text-secondary text-sm md:text-base leading-relaxed grow">
                  {vol.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-4 pt-8"
        >
          <ButtonGhost href="/the-trilogy">Explore The Trilogy™</ButtonGhost>
          <p className="font-body text-[0.8rem] text-secondary italic">
            The Trilogy™ is the full path. Begin where you are. Build toward all three.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
