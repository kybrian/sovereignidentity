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

export function AboutPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO (IDENTITY STRIKE) */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden border-b border-secondary/10"
      >
        {/* IMAGE SLOT 01 — FOUNDER ORIGIN */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
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
            id="about-hero-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            About the House
          </h1>
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Identity reconstruction begins with the one who rebuilt himself.
          </p>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>
              Before this House existed, there was collapse. Before the frameworks, there was reconstruction. Before the calling, there was obedience.
            </p>
            <p className="text-primary font-medium">
              This House was not built from ambition — it was built from identity.
            </p>
            <p>
              Every room, every page, every system exists because I returned.
            </p>
          </div>
          
          <div className="pt-8">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — THE ORIGIN STORY */}
      <section aria-labelledby="origin-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 id="origin-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Collapse → Reconstruction → Return
            </h2>
            <div className="space-y-4 font-body text-body text-secondary max-w-prose mx-auto text-left sm:text-center">
              <p>
                Identity is forged in the places where everything breaks.
              </p>
              <p>
                My collapse wasn't a setback — it was the doorway.
              </p>
              <p>
                Reconstruction wasn't optional — it was survival.
              </p>
              <p className="text-primary font-medium">
                The House was born from the nights where everything fell apart and the mornings where God rebuilt me piece by piece.
              </p>
              <p>
                Identity became the foundation. Sovereignty became the structure. Purpose became the movement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHY THE HOUSE EXISTS */}
      <section aria-labelledby="why-exists-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-16 md:mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            <h2 id="why-exists-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Built for Those Who Drifted
            </h2>
            <p className="font-body text-body text-secondary">
              This House exists for those who:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body text-lg text-primary uppercase tracking-wider mb-12"
          >
            {["Carried too much", "Lost themselves", "Collapsed internally", "Drifted from identity", "Need reconstruction, not motivation"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8 text-center sm:text-left">
                <span>{item}</span>
                {idx < 4 && <span className="hidden sm:inline-block text-tertiary/40">•</span>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <p className="font-body text-body text-primary font-medium">
              Identity is the source. Everything else flows from it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHAT THE HOUSE PROVIDES */}
      <section aria-labelledby="provides-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 id="provides-heading" className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
              Identity → Purpose → Direction → Sovereignty
            </h2>
            <div className="space-y-6 font-body text-body text-secondary">
              <p>Inside this House, you will find:</p>
              <ul className="space-y-3 font-body text-body text-secondary">
                {[
                  "Identity reconstruction",
                  "Purpose clarity",
                  "Directional alignment",
                  "Emotional sovereignty",
                  "Decision architecture",
                  "Long-term identity governance"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary/40 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-primary font-medium">
                This is not coaching. This is not content. This is identity.
              </p>
            </div>
          </motion.div>

          {/* IMAGE SLOT 02 — HOUSE GEOMETRY */}
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="relative aspect-[16/9] w-full"
          >
            <div className="absolute inset-0 border border-secondary/20 flex flex-col justify-center items-center">
              <div className="w-full h-full border-[0.5px] border-tertiary/20 flex items-center justify-center p-8">
                 <div className="w-full h-full border-[0.5px] border-tertiary/40 bg-gradient-to-br from-tertiary/5 to-transparent relative">
                   {/* Abstract Blueprint Lines */}
                   <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-tertiary/20" />
                   <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-tertiary/20" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — THE FOUR ROOMS */}
      <section aria-labelledby="rooms-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-16 md:mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            <h2 id="rooms-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              The Architecture of Return
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              The House contains four sovereign rooms:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-12"
          >
            {[
              { name: "The Return™", desc: "Identity Reconstruction" },
              { name: "The Purpose Method™", desc: "Identity → Purpose Integration" },
              { name: "The Trilogy™", desc: "Embodiment & Expansion" },
              { name: "The Sovereign Identity Circle™", desc: "Identity Governance" }
            ].map((room) => (
              <motion.div key={room.name} variants={staggerChildVariants} className="p-6 border border-secondary/20 bg-surface">
                <h3 className="font-display text-2xl font-medium text-primary mb-2">{room.name}</h3>
                <p className="font-body text-body text-secondary">— {room.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <p className="font-body text-body text-primary font-medium">
              Each room rebuilds a different part of your identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CTA (IDENTITY COMMAND) */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-primary">
            Your Return Begins Here
          </h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
