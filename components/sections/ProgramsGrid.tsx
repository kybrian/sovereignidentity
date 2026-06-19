"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";

const programs = [
  {
    id: "return",
    tag: "Threshold",
    name: "The Return™",
    description: "End drift. Restore identity. Re-enter sovereignty.\nThis is where everything begins.",
    cta: "Begin The Return™",
    href: "/the-return",
    primary: true,
  },
  {
    id: "purpose",
    tag: "Orientation",
    name: "The Purpose Method™",
    description: "Purpose is not discovered. Purpose is remembered.\nThis program helps you orient your life around identity and mission.",
    cta: "Start The Purpose Method™",
    href: "/the-purpose-method",
    primary: false,
  },
  {
    id: "trilogy",
    tag: "Journey",
    name: "The Trilogy™",
    description: "12 months. Three arcs. One identity.\nAlignment → Embodiment → Legacy.",
    cta: "Enter The Trilogy™",
    href: "/the-trilogy",
    primary: false,
  },
  {
    id: "circle",
    tag: "Continuation",
    name: "The Sovereign Identity Circle™",
    description: "Identity is not a moment. Identity is a practice.\nThis is long-term identity evolution.",
    cta: "Join The Circle™",
    href: "/the-circle",
    primary: false,
  },
];

export function ProgramsGrid() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="programs-heading"
      className="bg-neutral py-28 md:py-36 px-6 md:px-16"
    >
      <Divider className="mb-28 md:mb-36 max-w-7xl mx-auto" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="mb-14 md:mb-16"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary mb-3">
            The Four Programs
          </p>
          <h2
            id="programs-heading"
            className="font-display text-h1 font-medium text-primary mb-4"
          >
            The Sovereign Identity Ecosystem™ is built on four programs.
          </h2>
          <p className="font-body text-body text-secondary max-w-prose">
            Each one aligned with a specific stage of identity transformation.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={staggerChildVariants}>
              <Card className="h-full flex flex-col justify-between gap-8 p-8">
                <div className="space-y-3">
                  <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/70">
                    {program.tag}
                  </p>
                  <h3 className="font-display text-[1.4rem] font-medium text-primary leading-tight">
                    {program.name}
                  </h3>
                  <p className="font-body text-body text-secondary whitespace-pre-line">
                    {program.description}
                  </p>
                </div>
                <div>
                  {program.primary ? (
                    <ButtonPrimary href={program.href}>{program.cta}</ButtonPrimary>
                  ) : (
                    <ButtonGhost href={program.href}>{program.cta}</ButtonGhost>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
