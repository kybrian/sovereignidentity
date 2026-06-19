"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function NewsletterPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="newsletter-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Newsletter
          </p>
          <h1
            id="newsletter-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            The Sovereignty Digest™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE SOVEREIGNTY DIGEST™ */}
      <section
        aria-label="The Sovereignty Digest™"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            A weekly identity letter for people who want clarity.
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Most newsletters overwhelm you with noise.<br />
              This one does the opposite.
            </p>
            <p>
              One letter.<br />
              Once a week.<br />
              Straight to your inbox.
            </p>
            <p className="pt-2">
              Grounded.<br />
              Clear.<br />
              Identity‑rooted.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- WHAT YOU RECEIVE */}
      <section
        aria-labelledby="receive-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="receive-heading" className="font-display text-h1 font-medium text-primary">
            What You Receive
          </h2>
          <p className="font-body text-body text-secondary">
            Each weekly letter includes:
          </p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "Identity insights",
              "Purpose clarity",
              "Alignment guidance",
              "Embodiment practices",
              "Sovereignty principles",
              "Practical frameworks",
              "Clean, grounded direction",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary pt-2">
            <p>No hype.<br />No overwhelm.<br />No noise.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- WHO THIS IS FOR */}
      <section
        aria-labelledby="who-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="who-heading" className="font-display text-h1 font-medium text-primary">
            Who This Is For
          </h2>
          <p className="font-body text-body text-secondary">
            The Sovereignty Digest™ is for people who:
          </p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "Want clarity",
              "Want direction",
              "Want identity grounding",
              "Want to live intentionally",
              "Want to understand themselves",
              "Want to return to identity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">
            If you want a weekly anchor, this is it.
          </p>
        </motion.div>
      </section>

      {/* SECTION 4 --- CTA */}
      <section
        aria-label="Call to Action"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <div className="pt-4">
            <ButtonPrimary href="#subscribe">Join The Sovereignty Digest™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
