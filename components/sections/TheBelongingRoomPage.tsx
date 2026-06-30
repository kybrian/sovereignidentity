"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export function TheBelongingRoomPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (BELONGING SYSTEM) */}
      <section
        aria-labelledby="belonging-hero-heading"
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden"
      >
        {/* IMAGE SLOT 01 — BELONGING SYSTEM */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-tertiary/5 to-neutral" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral via-tertiary/10 to-neutral" />
          <div className="w-[60%] h-[120%] border-x border-tertiary/10 bg-gradient-to-b from-transparent via-tertiary/10 to-transparent" />
        </div>

        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="relative z-10 space-y-8 max-w-3xl mx-auto"
        >
          <h1
            id="belonging-hero-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            The Belonging Room
          </h1>
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity requires a place to land before it rises.
          </p>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p className="text-primary font-medium">
              Belonging is not comfort — it is recognition.
            </p>
            <p>
              Before identity is rebuilt, before purpose is restored, before direction becomes clear, a man must feel seen.
            </p>
            <p>
              This room is where identity breathes again.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/the-belonging-room">Enter the Room</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHAT THE ROOM PROVIDES */}
      <section aria-labelledby="what-provides-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 id="what-provides-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Recognition → Grounding → Alignment
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              Inside this room, identity begins to stabilize. You receive:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8 max-w-prose mx-auto text-center mb-16"
          >
            <div className="space-y-4 font-display text-2xl md:text-3xl text-primary font-medium">
              {["Recognition", "Grounding", "Emotional clarity", "Identity resonance", "Alignment"].map((item, idx) => (
                <motion.div key={idx} variants={staggerChildVariants}>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">
              Belonging is the soil where identity grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS ROOM IS FOR */}
      <section aria-labelledby="who-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 id="who-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              For Those Who Need Space Before Movement
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              This room is for those who:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6 max-w-prose mx-auto font-display text-2xl md:text-3xl text-primary font-medium text-center"
          >
            {["Feel unseen", "Feel misunderstood", "Feel disconnected", "Feel misaligned", "Feel spiritually dry"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">
              Belonging is the first step in your return.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA (IDENTITY COMMAND) */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-5xl md:text-7xl font-medium text-primary">
            Step Into Belonging
          </h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
