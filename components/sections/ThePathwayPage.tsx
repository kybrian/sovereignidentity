"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

export function ThePathwayPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  const stages = [
    { num: "01", name: "Drift" },
    { num: "02", name: "Recognition" },
    { num: "03", name: "Return" },
    { num: "04", name: "Purpose" },
    { num: "05", name: "Alignment" },
    { num: "06", name: "Embodiment" },
    { num: "07", name: "Legacy" },
    { num: "08", name: "Sovereignty" }
  ];

  return (
    <>
      {/* SECTION 1 — HERO (THE PATHWAY) */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden border-b border-secondary/10">
        {/* IMAGE SLOT 01 — PATHWAY: Cinematic geometric pathway */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="w-[80vw] max-w-[800px] h-full flex flex-col relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-tertiary to-transparent -translate-x-1/2" />
              <div className="w-full flex-1 border-t border-tertiary/10" />
              <div className="w-full flex-1 border-t border-tertiary/10" />
              <div className="w-full flex-1 border-t border-tertiary/10" />
              <div className="w-full flex-1 border-t border-tertiary/20" />
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            The 8-Stage Journey of Return.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Sovereign Identity Pathway™
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              Identity reconstruction follows a geometric sequence — a sovereign pathway that brings you back to yourself.
            </p>
            <p className="text-primary font-medium">
              This is the architecture of your return.
            </p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="#stages">Walk the Pathway</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — THE 8 STAGES */}
      <section id="stages" className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Pathway of Return</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">The Sovereign Identity Pathway™ contains eight stages:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
            {stages.map((stage) => (
              <motion.div key={stage.num} variants={staggerChildVariants}>
                <Card className="h-full flex flex-col items-center justify-center p-8 space-y-4 text-center">
                  <div className="font-body text-label uppercase tracking-[0.16em] text-secondary">Stage {stage.num}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-primary">{stage.name}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center">
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Identity becomes architecture.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHY THIS MATTERS */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Requires Structure</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Identity reconstruction is not random. It is geometric. It is sovereign. It is intentional.</p>
              <p className="text-primary font-medium uppercase tracking-[0.16em]">This pathway is the map.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Walk the Pathway</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
