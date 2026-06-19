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
    name: "The Return™ (Threshold)",
    headline: "End drift. Restore identity. Re‑enter sovereignty.",
    body: "The Return™ is the beginning of identity work: the moment you stop living from reaction and start living from identity again.",
    experience: [
      "Identity grounding",
      "Emotional neutrality",
      "Structural clarity",
      "A sense of coming home",
    ],
    closing: "This is the threshold.\nEveryone begins here.",
    cta: "Begin The Return™",
    href: "/the-return",
  },
  {
    n: "2",
    name: "The Purpose Method™ (Orientation)",
    headline: "Purpose is not discovered. Purpose is remembered.",
    body: "The Purpose Method™ helps you orient your life around identity, mission, and direction.",
    experience: [
      "Clarity",
      "Direction",
      "Confidence",
      "Internal order",
    ],
    closing: "This is where identity becomes direction.",
    cta: "Start The Purpose Method™",
    href: "/the-purpose-method",
  },
  {
    n: "3",
    name: "The Trilogy™ (Journey)",
    headline: "12 months. Three arcs. One identity.",
    body: "The Trilogy™ is the full identity embodiment journey.",
    experience: [
      "Alignment",
      "Embodiment",
      "Legacy",
    ],
    closing: "You experience long‑term transformation, structural clarity, and embodied sovereignty.",
    cta: "Enter The Trilogy™",
    href: "/the-trilogy",
  },
  {
    n: "4",
    name: "The Sovereign Identity Circle™ (Continuation)",
    headline: "Identity is not a moment. Identity is a practice.",
    body: "The Circle™ is where identity continues to evolve, long after the initial transformation.",
    experience: [
      "Identity refinement",
      "Embodied sovereignty",
      "Legacy expansion",
      "Long‑term clarity",
    ],
    closing: "This is your continuation.",
    cta: "Join The Circle™",
    href: "/the-circle",
  },
];

export function ProgramsPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="programs-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Programs
          </p>
          <h1
            id="programs-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            Explore Programs
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE SOVEREIGN IDENTITY ECOSYSTEM™ */}
      <section
        aria-label="The Sovereign Identity Ecosystem™"
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
            The Sovereign Identity Ecosystem™
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              The Sovereign Identity Ecosystem™ is a complete identity transformation system, built to take you from drift to sovereignty through a structured, sequential pathway.
            </p>
            <p>
              This page gives you a clear overview of all four programs, how they work, and where you fit.
            </p>
            <p className="pt-2">
              Identity work is not random.<br />
              It is structured.<br />
              It is sequential.<br />
              It is sovereign.
            </p>
            <p>Each program aligns with a specific stage of the identity journey.</p>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section
        aria-labelledby="programs-heading"
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
            <h2 id="programs-heading" className="font-display text-h1 font-medium text-primary">
              The Four Programs
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {programs.map((prog) => (
              <motion.div key={prog.n} variants={staggerChildVariants}>
                <Card className="p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                      Program {prog.n}
                    </p>
                    <h3 className="font-display text-[1.4rem] font-medium text-primary">
                      {prog.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 font-body text-body text-secondary">
                    <p className="font-medium text-primary">{prog.headline}</p>
                    <p>{prog.body}</p>
                    
                    <p className="pt-2">You experience:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {prog.experience.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="pt-2">
                      {prog.closing.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <ButtonPrimary href={prog.href}>{prog.cta}</ButtonPrimary>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 --- CTA */}
      <section
        aria-label="Call to Action"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <div className="pt-4">
            <ButtonPrimary href="/start-here">Explore the Full Ecosystem</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
