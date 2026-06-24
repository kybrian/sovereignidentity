"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export function CTABlocks() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* CTA Block A — Mid-Page Conversion (Can be placed between Trilogy and Architect, but we'll stack them logically) */}
      <section className="bg-surface py-20 md:py-28 px-6 md:px-16 border-t border-secondary/10 text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1] text-primary">
            The Architecture Is Already Inside You.<br /> Let's Build It Out.
          </h2>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            You have already done the hard part — you stopped performing long enough to look for something real. The Return™ is the structured next step. Six to eight weeks. One direction. No noise.
          </p>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Start The Return™</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* CTA Block B — Email Capture */}
      <section className="bg-neutral py-20 md:py-28 px-6 md:px-16 border-t border-secondary/10">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-[1.1] text-primary">
              Enter the Framework.<br /> No Performance Required.
            </h2>
            <p className="font-body text-body text-secondary">
              Get the Sovereign Identity™ foundational framework delivered directly — the architecture before the offer.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              required
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-surface border border-secondary/20 text-primary placeholder:text-secondary/40 focus:outline-none focus:border-tertiary rounded-sm font-body"
            />
            <ButtonPrimary type="submit" className="whitespace-nowrap">Enter The Framework</ButtonPrimary>
          </form>
          <p className="font-body text-[0.75rem] text-secondary/60">
            — Your information is not sold, shared, or performed with.
          </p>
        </motion.div>
      </section>

      {/* CTA Block C — Final Page CTA */}
      <section className="bg-neutral py-24 md:py-32 px-6 md:px-16 border-t border-secondary/10 text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Sovereign Identity™
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">
            You Know Who You Are.<br />
            Now Build Like It.
          </h2>
          <p className="font-body text-lg text-secondary max-w-prose mx-auto">
            The work is precise. The path is structured. The only requirement is that you are done waiting.
          </p>
          <div className="pt-6">
            <ButtonPrimary href="/the-return" className="px-8 py-4 text-sm">Begin Now</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
