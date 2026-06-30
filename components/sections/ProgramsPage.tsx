"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

export function ProgramsPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (PROGRAM STRIKE) */}
      <section aria-labelledby="programs-hero-heading" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden border-b border-secondary/10">
        {/* IMAGE SLOT 01 — FOUR ROOMS: Cinematic geometric four-room diagram */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] grid grid-cols-2 grid-rows-2 gap-4">
             <div className="border border-tertiary/20 bg-gradient-to-br from-tertiary/10 to-transparent" />
             <div className="border border-tertiary/20 bg-gradient-to-bl from-tertiary/10 to-transparent" />
             <div className="border border-tertiary/20 bg-gradient-to-tr from-tertiary/10 to-transparent" />
             <div className="border border-tertiary/20 bg-gradient-to-tl from-tertiary/10 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity → Purpose → Embodiment → Sovereignty
          </p>
          <h1 id="programs-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Four Rooms of Reconstruction
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              This House contains four sovereign rooms — each one designed to rebuild a different part of your identity.
            </p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="#rooms">Explore Programs</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* THE FOUR ROOMS LAYOUT */}
      <section id="rooms" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* ROOM 1 */}
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-14 space-y-6 text-center border-t-2 border-t-tertiary/40">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Room 1</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-primary">The Return™</h2>
                <h3 className="font-body text-lg text-tertiary font-bold uppercase tracking-wide">Identity Reconstruction</h3>
                <p className="font-body text-body text-secondary">Break the collapse. Rebuild the identity. Return to who you were designed to be.</p>
              </Card>
            </motion.div>

            {/* ROOM 2 */}
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-14 space-y-6 text-center border-t-2 border-t-tertiary/40">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Room 2</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-primary">The Purpose Method™</h2>
                <h3 className="font-body text-lg text-tertiary font-bold uppercase tracking-wide">Identity → Purpose Integration</h3>
                <p className="font-body text-body text-secondary">Translate identity into direction. Build clarity. Build alignment.</p>
              </Card>
            </motion.div>

            {/* ROOM 3 */}
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-14 space-y-6 text-center border-t-2 border-t-tertiary/40">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Room 3</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-primary">The Trilogy™</h2>
                <h3 className="font-body text-lg text-tertiary font-bold uppercase tracking-wide">Embodiment &amp; Expansion</h3>
                <p className="font-body text-body text-secondary">Identity becomes posture. Purpose becomes movement. Direction becomes embodiment.</p>
              </Card>
            </motion.div>

            {/* ROOM 4 */}
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-10 md:p-14 space-y-6 text-center border-t-2 border-t-tertiary/40">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Room 4</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-primary">The Sovereign Identity Circle™</h2>
                <h3 className="font-body text-lg text-tertiary font-bold uppercase tracking-wide">Identity Governance</h3>
                <p className="font-body text-body text-secondary">Long-term identity maintenance. Sovereignty. Leadership. Stability.</p>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CTA (IDENTITY COMMAND) */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto opacity-30" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Enter the House</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return" className="px-8 py-4 text-sm">Begin Your Return</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
