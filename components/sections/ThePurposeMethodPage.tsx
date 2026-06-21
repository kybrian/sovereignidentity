"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const thresholds = [
  {
    n: "1",
    name: "Identity: Who you are",
    body: "Purpose begins with identity.\nWithout identity, purpose becomes guesswork.",
  },
  {
    n: "2",
    name: "Mission: What you're here to do",
    body: "Mission is identity expressed through action.",
  },
  {
    n: "3",
    name: "Direction: Where you're going",
    body: "Direction is the path identity takes.",
  },
  {
    n: "4",
    name: "Orientation: How you move",
    body: "Orientation is the structure that keeps you aligned.",
  },
];

export function ThePurposeMethodPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="pm-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Program</p>
          <h1 id="pm-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            The Purpose Method™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- ORIENTATION */}
      <section aria-label="Orientation" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Orientation</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Purpose is not discovered.<br />
              Purpose is remembered.
            </p>
            <p>
              The Purpose Method™ helps you orient your life around identity, mission, and direction, not emotion or confusion.
            </p>
            <p>
              Most people search for purpose externally.<br />
              But purpose is internal.<br />
              Purpose is identity expressed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- PURPOSE AS MEMORY */}
      <section aria-labelledby="memory-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="memory-heading" className="font-display text-h1 font-medium text-primary">Purpose as Memory</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Purpose is not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>A brainstorm</li>
              <li>A guess</li>
              <li>A personality test</li>
              <li>A passion exercise</li>
              <li>A motivational idea</li>
            </ul>
            <p>Purpose is the memory of who you are.</p>
            <p>When identity becomes clear, purpose becomes obvious.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- THE FOUR THRESHOLDS OF PURPOSE */}
      <section aria-labelledby="four-thresholds-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 md:mb-16 space-y-4">
            <h2 id="four-thresholds-heading" className="font-display text-h1 font-medium text-primary">The Four Thresholds of Purpose</h2>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thresholds.map((t) => (
              <motion.div key={t.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">{t.n}.</span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">{t.name}</h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    {t.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-12 text-center">
            <p className="font-body text-body text-secondary">These four thresholds create a stable internal compass.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 --- WHAT YOU EXPERIENCE */}
      <section aria-label="What You Experience" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">What You Experience</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Inside The Purpose Method™, you experience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clarity</li>
              <li>Direction</li>
              <li>Confidence</li>
              <li>Alignment</li>
              <li>A sense of internal order</li>
              <li>Relief from confusion</li>
              <li>A renewed sense of mission</li>
            </ul>
            <p className="pt-2">Purpose becomes simple when identity is clear.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 --- WHO THIS IS FOR */}
      <section aria-labelledby="who-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="who-heading" className="font-display text-h1 font-medium text-primary">Who This Is For</h2>
          <p className="font-body text-body text-secondary">The Purpose Method™ is for people who:</p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "Feel directionless",
              "Want clarity",
              "Want alignment",
              "Want to know what to do next",
              "Want to live with intention",
              "Want to move with confidence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">If you want to live with direction, this is your orientation.</p>
        </motion.div>
      </section>

      {/* SECTION 6 --- CTA */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonPrimary href="#start">Start The Purpose Method™</ButtonPrimary>
            <ButtonGhost href="/the-pathway">Explore The Pathway</ButtonGhost>
          </div>
        </motion.div>
      </section>
    </>
  );
}
