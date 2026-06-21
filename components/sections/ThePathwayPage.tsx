"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const stages = [
  {
    n: "1",
    name: "Drift",
    body: "Losing connection to identity.\nLife becomes reactive.\nDirection becomes unclear.",
  },
  {
    n: "2",
    name: "Recognition",
    body: "Seeing the drift.\nNaming the misalignment.\nAcknowledging the gap.",
  },
  {
    n: "3",
    name: "Return",
    body: "Coming back to the source.\nReconnecting with identity.\nReclaiming clarity.",
  },
  {
    n: "4",
    name: "Purpose",
    body: "Remembering direction.\nUnderstanding mission.\nFeeling internal alignment.",
  },
  {
    n: "5",
    name: "Alignment",
    body: "Reordering life around identity.\nRemoving what doesn't belong.\nCreating internal structure.",
  },
  {
    n: "6",
    name: "Embodiment",
    body: "Becoming the person you were meant to be.\nIdentity becomes action.\nClarity becomes movement.",
  },
  {
    n: "7",
    name: "Legacy",
    body: "Building what lasts.\nCreating from identity.\nLiving with intention.",
  },
  {
    n: "8",
    name: "Sovereignty",
    body: "Living from identity with clarity and authority.\nA stable internal world.\nA sovereign life.",
  },
];

export function ThePathwayPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="pathway-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Sovereign Identity Pathway™
          </p>
          <h1
            id="pathway-hero-heading"
            className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary"
          >
            THE PATHWAY
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE SOVEREIGN IDENTITY PATHWAY™ */}
      <section
        aria-label="The Sovereign Identity Pathway"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            The Sovereign Identity Pathway™
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity transformation is not random.<br />
              It follows a structure: an 8‑stage sequence that mirrors the way humans return to themselves.
            </p>
            <p>
              The Sovereign Identity Pathway™ is the backbone of the entire ecosystem.<br />
              It explains where you are, where you're going, and what comes next.
            </p>
            <p className="pt-2">
              This is not a motivational framework.<br />
              This is a structural identity map.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- THE 8 STAGES */}
      <section
        aria-labelledby="eight-stages-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 space-y-4"
          >
            <h2 id="eight-stages-heading" className="font-display text-h1 font-medium text-primary">
              The 8 Stages
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {stages.map((stage) => (
              <motion.div key={stage.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">
                      {stage.n}.
                    </span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">
                      {stage.name}
                    </h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    {stage.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 --- THE PATHWAY IS A LOOP, NOT A LINE */}
      <section
        aria-labelledby="pathway-loop-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="pathway-loop-heading" className="font-display text-h1 font-medium text-primary">
            The Pathway Is a Loop, Not a Line
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity deepens over time.<br />
              You revisit stages as you grow.<br />
              You return to identity again and again, each time with more clarity, more structure, and more sovereignty.
            </p>
            <p className="pt-2">
              This is not a one‑time transformation.<br />
              This is a lifelong identity practice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- CTA */}
      <section
        aria-label="Call to Action"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
