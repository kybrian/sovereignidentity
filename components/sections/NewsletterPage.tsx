"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const weeklyItems = [
  {
    n: "1",
    name: "A Sovereign Insight",
    desc: "A grounded reflection on identity, purpose, alignment, embodiment, or sovereignty.",
  },
  {
    n: "2",
    name: "A Practical Application",
    desc: "A simple, clear way to apply the insight to your daily life.",
  },
  {
    n: "3",
    name: "A Weekly Identity Prompt",
    desc: "A question that helps you reconnect with yourself.",
  },
  {
    n: "4",
    name: "A Pathway Orientation",
    desc: "A short reminder of where you might be in the Sovereign Identity Pathway™.",
  },
  {
    n: "5",
    name: "A Cinematic Closing Line",
    desc: "A sentence that stays with you throughout the week.",
  },
];

const testimonials = [
  "Grounding",
  "Clear",
  "Calming",
  "Direct",
  "Identity‑shifting",
  "Exactly what I needed",
  "A weekly reset",
  "A return to myself",
];

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
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            The bi-weekly letter for people who want to live with clarity and
            sovereignty
          </p>
        </motion.div>

        {/* TODO: imagery pending from client — minimalist golden envelope icon */}
      </section>

      {/* What it is */}
      <section
        aria-labelledby="digest-what-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="digest-what-heading" className="font-display text-h1 font-medium text-primary">
            What the Sovereignty Digest™ Is
          </h2>
          <p className="font-body text-body text-secondary">
            Every week, you receive one grounded, identity‑rooted letter designed to
            help you:
          </p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "Think more clearly",
              "See yourself more accurately",
              "Reduce internal noise",
              "Strengthen your identity",
              "Live with purpose",
              "Build alignment",
              "Move with sovereignty",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>No hype.<br />No noise.<br />No overwhelm.</p>
          </div>
          <p className="font-body text-body text-primary font-medium">Just clarity.</p>
        </motion.div>
      </section>

      {/* Why it exists */}
      <section
        aria-labelledby="digest-why-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="digest-why-heading" className="font-display text-h1 font-medium text-primary">
            Why This Newsletter Exists
          </h2>
          <p className="font-body text-body text-secondary">
            Most people live in a constant state of noise:
          </p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "Too much information",
              "Too many opinions",
              "Too many expectations",
              "Too many distractions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>Noise erodes identity.<br />Noise creates drift.<br />Noise weakens clarity.</p>
          </div>
          <p className="font-body text-body text-secondary">This newsletter exists to give you:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "A moment of stillness",
              "A moment of clarity",
              "A moment of grounding",
              "A moment of return",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-1 font-body text-body text-secondary/70">
            <p>One letter.<br />Once a week.<br />Clean.<br />Quiet.<br />Sovereign.</p>
          </div>
        </motion.div>
      </section>

      {/* What you receive */}
      <section
        aria-labelledby="digest-receive-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <h2 id="digest-receive-heading" className="font-display text-h1 font-medium text-primary">
              What You Receive Each Week
            </h2>
            <p className="font-body text-body text-secondary">Every edition includes:</p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {weeklyItems.map((item) => (
              <motion.div key={item.n} variants={staggerChildVariants}>
                <Card className="h-full p-7 space-y-3">
                  <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                    {item.n}.
                  </p>
                  <h3 className="font-display text-[1.1rem] font-medium text-primary">
                    {item.name}
                  </h3>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cadence + Archive */}
      <section
        aria-labelledby="digest-cadence-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 id="digest-cadence-heading" className="font-display text-h1 font-medium text-primary">
              The Cadence
            </h2>
            <p className="font-body text-body text-secondary">
              You receive one letter every week:
            </p>
            <p className="font-body text-body text-primary font-medium">
              Every Friday Morning
            </p>
            <p className="font-body text-body text-secondary">
            A grounded, sovereign start to your weekend:
            a moment to breathe, reflect, and return.
            </p>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              The Archive
            </h2>
            <p className="font-body text-body text-secondary">
              Every past edition is stored in the Sovereignty Archive™:
              a clean, organized library of identity letters.
            </p>
            <p className="font-body text-body text-secondary">You can revisit:</p>
            <ul className="space-y-2 font-body text-body text-secondary/70">
              {["Identity insights", "Purpose reflections", "Alignment teachings", "Embodiment practices", "Sovereignty essays"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ButtonGhost href="#archive">Read the Archive</ButtonGhost>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="digest-testimonials-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 id="digest-testimonials-heading" className="font-display text-h1 font-medium text-primary">
              Why People Love the Sovereignty Digest™
            </h2>
            <p className="font-body text-body text-secondary mt-3">
              Readers describe the newsletter as:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {testimonials.map((t) => (
              <motion.div key={t} variants={staggerChildVariants}>
                <span className="inline-block px-4 py-2 border border-secondary/30 rounded-sm font-body text-body text-secondary/80">
                  "{t}"
                </span>
              </motion.div>
            ))}
          </motion.div>

          <Divider className="my-12" />
          <div className="space-y-3 text-center">
            <p className="font-body text-body text-secondary/70">This is not content.<br />This is clarity.</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section
        aria-labelledby="digest-join-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 id="digest-join-heading" className="font-display text-h1 font-medium text-primary">
            Join the Sovereignty Digest™
          </h2>
          <p className="font-body text-body text-secondary">
            If you want to think more clearly, live more intentionally, and return
            to yourself every week:
            this is your place.
          </p>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>One letter.<br />Once a week.<br />Straight to your inbox.</p>
          </div>
          <div className="pt-4">
            <ButtonPrimary href="#subscribe">Join The Sovereignty Digest™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
