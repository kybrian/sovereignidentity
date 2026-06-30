"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

export function HouseMapPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (HOUSE MAP STRIKE) */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden border-b border-secondary/10">
        {/* IMAGE SLOT 01 — HOUSE MAP: Cinematic geometric house blueprint */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] border border-tertiary/20 flex flex-col">
             <div className="flex-1 border-b border-tertiary/20 flex">
                <div className="flex-1 border-r border-tertiary/20" />
                <div className="flex-1" />
             </div>
             <div className="flex-1 flex">
                <div className="flex-1 border-r border-tertiary/20 bg-gradient-to-tr from-tertiary/10 to-transparent" />
                <div className="flex-1 bg-gradient-to-tl from-tertiary/10 to-transparent" />
             </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            The full architecture of your return.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Sovereign Identity House Map
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              Identity reconstruction is not random. It is geometric. It is sovereign. It is intentional.
            </p>
            <p className="text-primary font-medium">
              This is the full map of the House — every room, every system, every pathway that rebuilds identity from collapse to sovereignty.
            </p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="#map">View the Map</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — THE HOUSE STRUCTURE */}
      <section id="map" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Four Rooms</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">The House contains four sovereign rooms:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {[
              {
                title: "Identity Reconstruction",
                desc: "Break collapse. Rebuild identity. Begin the Return™."
              },
              {
                title: "Identity → Purpose Integration",
                desc: "Translate identity into direction. Build clarity."
              },
              {
                title: "Embodiment & Expansion",
                desc: "Identity becomes posture. Purpose becomes movement."
              },
              {
                title: "Identity Governance",
                desc: "Long-term identity maintenance. Stability. Sovereignty."
              }
            ].map((room, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <Card className="h-full p-8 md:p-12 space-y-4">
                  <h3 className="font-display text-2xl md:text-3xl text-primary font-medium">{room.title}</h3>
                  <p className="font-body text-body text-secondary">{room.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center">
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Each room rebuilds a different part of your identity.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — THE HOUSE SYSTEMS */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">The Systems</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>The House is supported by sovereign systems:</p>
              <ul className="text-left md:text-center space-y-2 pt-4">
                 <li><span className="text-primary font-medium">The Belonging Room</span> — Connection & Recognition</li>
                 <li><span className="text-primary font-medium">The Identity OS</span> — Internal Frameworks</li>
                 <li><span className="text-primary font-medium">The Sovereign Identity Journal™</span> — Ongoing Calibration</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Begin Your Return</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
