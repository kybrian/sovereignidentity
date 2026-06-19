"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";

export function NewsletterPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="newsletter-preview-heading"
      className="bg-surface py-28 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Newsletter
          </p>
          <h2
            id="newsletter-preview-heading"
            className="font-display text-h1 font-medium text-primary"
          >
            The Sovereignty Digest™
          </h2>
          <div className="space-y-4 max-w-prose mx-auto">
            <p className="font-body text-body text-secondary">
              A weekly identity letter for people who want clarity.
            </p>
            <p className="font-body text-body text-secondary">
              One letter.<br />
              Once a week.<br />
              Straight to your inbox.
            </p>
            <p className="font-body text-body text-secondary">
              No noise.<br />
              No overwhelm.<br />
              Just identity.
            </p>
          </div>
          <div className="pt-4">
            <ButtonPrimary href="/newsletter">
              Join The Sovereignty Digest™
            </ButtonPrimary>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
