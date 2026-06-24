"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function TheBelongingRoomPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-neutral py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            The Belonging Room™
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1]">
            Not a Community. A Standard.
          </h2>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            The Belonging Room™ is the house where men who are building sovereign identities operate together. It is not a Facebook group. It is not a hype circle where men cosign each other's excuses and call it brotherhood. It is not a self-help community where the measure of belonging is how loudly you perform vulnerability. The Belonging Room™ is a structured space for men who are doing the actual work — who want proximity to other builders and access to the Sovereign Identity™ framework on an ongoing basis.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-8 pt-8 text-center"
        >
          <h3 className="font-body text-label uppercase tracking-[0.16em] text-secondary mb-12">What a Man Finds Here</h3>
          
          <motion.div variants={staggerChildVariants}>
            <p className="font-display text-2xl md:text-3xl text-primary font-medium max-w-2xl mx-auto">
              A room where your standard is the entry fee, not your story.
            </p>
          </motion.div>

          <Divider className="max-w-xs mx-auto opacity-30" />

          <motion.div variants={staggerChildVariants}>
            <p className="font-display text-2xl md:text-3xl text-primary font-medium max-w-2xl mx-auto">
              Ongoing access to Sovereign Identity™ frameworks, tools, and architectural refinements as they develop.
            </p>
          </motion.div>

          <Divider className="max-w-xs mx-auto opacity-30" />

          <motion.div variants={staggerChildVariants}>
            <p className="font-display text-2xl md:text-3xl text-primary font-medium max-w-2xl mx-auto">
              Proximity to men who are building — not performing, not posturing, not waiting for permission.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-4 pt-12"
        >
          <ButtonPrimary href="/the-belonging-room">Request Access</ButtonPrimary>
          <p className="font-body text-[0.8rem] text-secondary italic">
            The Belonging Room™ is not open enrollment. Access is earned through engagement with the work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
