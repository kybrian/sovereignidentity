"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function IdentityLensPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (IDENTITY SOURCE) */}
      <section aria-labelledby="lens-hero-heading" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — IDENTITY SOURCE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tertiary/20 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-tertiary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Everything you do flows from who you are.
          </p>
          <h1 id="lens-hero-heading" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            Identity Is the Source
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>Identity is not a mindset. Identity is not motivation. Identity is not performance.</p>
            <p className="text-primary font-medium">
              Identity is the origin point — the place where purpose, direction, emotions, and decisions are formed.
            </p>
            <p>When identity becomes clear, life becomes aligned.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/identity-lens">Begin the Lens</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — IDENTITY → PURPOSE */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Shapes Purpose</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Purpose is not discovered. Purpose is remembered.</p>
              <p className="text-primary font-medium">
                When identity becomes clear, purpose emerges naturally — not from pressure, not from confusion, not from external expectations.
              </p>
              <p>Identity reveals direction.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — IDENTITY → DIRECTION */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Determines Direction</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Direction is not a strategy. Direction is identity expressed over time.</p>
              <p className="text-primary font-medium">
                When identity is sovereign, your path becomes clean, your choices become aligned, your movement becomes intentional.
              </p>
              <p>Identity is the compass.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — IDENTITY → EMOTIONS */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Stabilizes Emotions</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Emotions are signals. Identity is the anchor.</p>
              <p className="text-primary font-medium">
                When identity is grounded, emotions stop pulling you out of alignment. They become indicators — not dictators.
              </p>
              <p>Identity creates emotional sovereignty.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — IDENTITY → DECISIONS */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Governs Decisions</h2>
            <div className="font-body text-body text-secondary max-w-prose space-y-4">
              <p>Decisions become clean when identity becomes sovereign.</p>
              <p className="text-primary font-medium">
                Identity removes hesitation. Identity removes confusion. Identity removes noise.
              </p>
              <p>Identity makes decisions simple.</p>
            </div>
            <div className="pt-4">
              <ButtonPrimary href="/the-pathway">Explore the Pathway</ButtonPrimary>
            </div>
          </motion.div>
          {/* IMAGE SLOT 02 — IDENTITY LENS DIAGRAM */}
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="relative aspect-[16/9] w-full">
            <div className="absolute inset-0 border border-secondary/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-[2px] border-tertiary/40 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-tertiary/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-tertiary/20 to-transparent" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Your Identity Lens Begins Now</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
