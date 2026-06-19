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

const programs = [
  {
    n: "1",
    name: "The Return™: Threshold",
    body: "End drift.\nRestore identity.\nRe‑enter sovereignty.\n\nThis is where everyone begins.",
  },
  {
    n: "2",
    name: "The Purpose Method™: Orientation",
    body: "Purpose is not discovered.\nPurpose is remembered.\n\nThis program gives you direction.",
  },
  {
    n: "3",
    name: "The Trilogy™: Journey",
    body: "12 months.\nThree arcs.\nOne identity.\n\nThis is long‑term embodiment.",
  },
  {
    n: "4",
    name: "The Sovereign Identity Circle™: Continuation",
    body: "Identity is not a moment.\nIdentity is a practice.\n\nThis is long‑term evolution.",
  },
];

export function StartHerePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="start-here-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Start Here
          </p>
          <h1
            id="start-here-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            START HERE
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- START HERE */}
      <section
        aria-label="Start Here"
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
            Identity first.
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              If you're new to the Sovereign Identity Ecosystem™, this page gives you the clearest starting point.<br />
              Identity work is sequential: each stage prepares you for the next.
            </p>
            <p className="pt-2">This is the order.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- THE SEQUENCE */}
      <section
        aria-labelledby="sequence-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <h2 id="sequence-heading" className="font-display text-h1 font-medium text-primary">
              The Sequence
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {programs.map((prog) => (
              <motion.div key={prog.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <h3 className="font-display text-[1.3rem] font-medium text-primary">
                    {prog.n}. {prog.name}
                  </h3>
                  <div className="font-body text-body text-secondary space-y-1">
                    {prog.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 --- WHY THIS ORDER MATTERS */}
      <section
        aria-labelledby="order-matters-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="order-matters-heading" className="font-display text-h1 font-medium text-primary">
            Why This Order Matters
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity work is structural.<br />
              Skipping steps creates instability.
            </p>
            <p>The sequence ensures:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clarity</li>
              <li>Direction</li>
              <li>Alignment</li>
              <li>Embodiment</li>
              <li>Sovereignty</li>
            </ul>
            <p className="pt-2">This is the cleanest, most stable path.</p>
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
