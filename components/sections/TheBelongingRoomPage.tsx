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
      {/* SECTION 1 — HERO (BELONGING STRIKE) */}
      <section
        aria-labelledby="belonging-hero-heading"
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden"
      >
        {/* IMAGE SLOT 01 — BELONGING */}
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
            A Place to Feel Seen<br /> Before You Transform
          </h1>
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Belonging is the first step in identity reconstruction.
          </p>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              Before identity is rebuilt, before purpose is restored, before direction becomes clear — a man must feel seen.
            </p>
            <p className="text-primary font-medium">
              Belonging is not comfort. Belonging is recognition. Belonging is alignment.
            </p>
            <p>
              This room is where you breathe again.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/the-belonging-room">Enter the Room</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHY BELONGING MATTERS */}
      <section aria-labelledby="why-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 id="why-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              You Cannot Rebuild Alone
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              Identity reconstruction requires a space where you are not judged, not rushed, not misunderstood.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8 max-w-prose mx-auto text-center"
          >
            <p className="font-body text-body text-primary font-medium mb-6">Belonging creates:</p>
            <div className="space-y-4 font-body text-lg text-secondary uppercase tracking-wider">
              {["Recognition", "Safety", "Grounding", "Identity resonance", "Emotional clarity"].map((item, idx) => (
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
            className="text-center mt-16"
          >
            <p className="font-body text-body text-primary font-medium">
              Belonging is the soil where identity grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHAT HAPPENS IN THIS ROOM */}
      <section aria-labelledby="what-happens-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 id="what-happens-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              The First Step Is Being Seen
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              Inside this room, you will:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6 max-w-prose mx-auto font-display text-2xl md:text-3xl text-primary font-medium text-center"
          >
            {["Reconnect with yourself", "Reconnect with your story", "Reconnect with your identity", "Reconnect with your direction", "Reconnect with your sovereignty"].map((item, idx) => (
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
            <p className="font-body text-body text-primary font-medium">
              This is the beginning of your return.
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
          <h2 className="font-display text-4xl md:text-6xl font-medium text-primary">
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
