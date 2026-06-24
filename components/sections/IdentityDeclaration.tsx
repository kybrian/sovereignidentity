"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { Divider } from "@/components/ui/Divider";

export function IdentityDeclaration() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="declaration-heading"
      className="bg-neutral py-20 md:py-28 px-6 md:px-16"
    >
      <Divider className="mb-16 md:mb-20 max-w-7xl mx-auto" />

      <div className="max-w-4xl mx-auto text-center space-y-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2
            id="declaration-heading"
            className="font-display text-h1 font-medium leading-[1.2]"
          >
            This Is Not a Reinvention.<br />
            This Is a Reclamation.
          </h2>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            Most men don't have an identity crisis. They have an identity occupation — a version of themselves built in rooms they never chose, by people who needed something from them. The Navy gives you structure. The job gives you a title. The relationship gives you a role. And somewhere in all of that building for others, you forgot to build yourself.
          </p>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            The man who is ready for Sovereign Identity™ is not broken. He is done. Done performing. Done defaulting. Done operating inside a framework that was never designed with him in mind. He is ready to stop reacting to life and start architecting it.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-12 pt-8"
        >
          <motion.div variants={staggerChildVariants} className="space-y-4">
            <span className="font-body text-label uppercase tracking-[0.16em] text-tertiary">01</span>
            <p className="font-display text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto">
              Identity is not found — it is constructed, decision by decision, with full ownership.
            </p>
          </motion.div>
          
          <Divider className="max-w-md mx-auto opacity-50" />

          <motion.div variants={staggerChildVariants} className="space-y-4">
            <span className="font-body text-label uppercase tracking-[0.16em] text-tertiary">02</span>
            <p className="font-display text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto">
              Authority does not come from the room you enter — it comes from the man who built it.
            </p>
          </motion.div>

          <Divider className="max-w-md mx-auto opacity-50" />

          <motion.div variants={staggerChildVariants} className="space-y-4">
            <span className="font-body text-label uppercase tracking-[0.16em] text-tertiary">03</span>
            <p className="font-display text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto">
              Sovereignty is not a feeling — it is a structure, and every structure requires an architect.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
        >
          <p className="font-body text-body font-bold text-primary mt-12 uppercase tracking-wide">
            The Return™ is where the architecture begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
