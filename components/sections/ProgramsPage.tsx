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

const trilogyArcs = [
  {
    id: "alignment",
    arc: "Arc 1",
    name: "Alignment",
    months: "Months 1–4",
    descriptor: "Internal order.\nNervous system coherence.\nIdentity stabilization.",
    items: [
      "Build internal structure",
      "Remove identity noise",
      "Establish alignment practices",
      "Create internal clarity",
    ],
  },
  {
    id: "embodiment",
    arc: "Arc 2",
    name: "Embodiment",
    months: "Months 5–8",
    descriptor: "Identity becomes physical.\nDiscipline becomes natural.\nAction becomes aligned.",
    items: [
      "Build embodied discipline",
      "Integrate identity into behavior",
      "Strengthen physical sovereignty",
      "Become consistent without force",
    ],
  },
  {
    id: "legacy",
    arc: "Arc 3",
    name: "Legacy",
    months: "Months 9–12",
    descriptor: "Identity expressed outward.\nImpact.\nLeadership.\nGenerational identity.",
    items: [
      "Build your legacy blueprint",
      "Step into sovereign leadership",
      "Create identity-based impact",
      "Expand your influence",
    ],
  },
];

const selector = [
  { feel: "If you feel disconnected", program: "The Return™", href: "/the-return" },
  { feel: "If you feel directionless", program: "The Purpose Method™", href: "#purpose-method" },
  { feel: "If you feel unstable", program: "Trilogy (Alignment)", href: "#trilogy" },
  { feel: "If you feel ready to expand", program: "Trilogy (Embodiment)", href: "#trilogy" },
  { feel: "If you feel called to impact", program: "Trilogy (Legacy)", href: "#trilogy" },
  { feel: "If you feel ready for mastery", program: "The Circle™", href: "#circle" },
];

export function ProgramsPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="programs-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Programs
          </p>
          <h1
            id="programs-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            The Sovereign Identity System™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p>
              A complete identity transformation ecosystem designed to restore
              clarity, purpose, alignment, embodiment, and sovereignty.
            </p>
            <p>
              This is not mindset work.
              <br />
              This is identity reconstruction.
            </p>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — faceless silhouette before geometric golden doorway */}
      </section>

      {/* Four stages overview */}
      <section
        aria-labelledby="four-stages-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6 mb-12"
        >
          <h2 id="four-stages-heading" className="font-display text-h1 font-medium text-primary">
            The Four Stages of Transformation
          </h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>Identity transformation is not random.<br />It follows a sequence: a structural progression.</p>
            <p>Each program corresponds to a stage of the Sovereign Identity Pathway™:</p>
          </div>
          <ol className="space-y-2 font-body text-body text-secondary">
            {[
              { n: "1", label: "The Return™", tag: "Threshold" },
              { n: "2", label: "The Purpose Method™", tag: "Orientation" },
              { n: "3", label: "The Trilogy™", tag: "Journey" },
              { n: "4", label: "The Sovereign Identity Circle™", tag: "Continuation" },
            ].map((item) => (
              <li key={item.n} className="flex items-start gap-4">
                <span className="text-secondary font-body text-label uppercase tracking-[0.16em]">{item.n}.</span>
                <span>
                  <span className="text-primary">{item.label}</span>
                  {": "}
                  <span className="text-secondary/70">{item.tag}</span>
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* The Return */}
      <section
        id="the-return"
        aria-labelledby="prog-return-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
              Stage I: Threshold
            </p>
            <h2 id="prog-return-heading" className="font-display text-h1 font-medium text-primary">
              The Return™
            </h2>
            <div className="space-y-3 font-body text-body text-secondary max-w-prose">
              <p>End drift.<br />Reclaim identity.<br />Re-enter sovereignty.</p>
              <p>Drift is subtle.<br />It's quiet.<br />It's slow erosion.</p>
              <p>
                The Return™ is the moment you step back into yourself, the moment you
                reclaim the identity you lost along the way.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  This program is for you if
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "You feel disconnected",
                    "You feel misaligned",
                    "You feel like you've drifted from who you are",
                    "You want to rebuild your internal foundation",
                    "You want to return to clarity and sovereignty",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  What you'll experience
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "Identity recall",
                    "Nervous system grounding",
                    "Internal stabilization",
                    "The Return Ritual",
                    "The threshold moment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-8">
            <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          </div>
        </div>
      </section>

      {/* The Purpose Method */}
      <section
        id="purpose-method"
        aria-labelledby="prog-purpose-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
              Stage II: Orientation
            </p>
            <h2 id="prog-purpose-heading" className="font-display text-h1 font-medium text-primary">
              The Purpose Method™
            </h2>
            <div className="space-y-3 font-body text-body text-secondary max-w-prose">
              <p>Purpose is not found.<br />Purpose is remembered.</p>
              <p>
                This program gives you the compass, the orientation, the direction
                your identity has been pointing toward all along.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  This program is for you if
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "You feel directionless",
                    "You feel stuck",
                    "You feel unclear about your mission",
                    "You want to know where your life is actually going",
                    "You want to align identity with purpose",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  What you'll experience
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "Identity → Purpose mapping",
                    "Purpose → Direction alignment",
                    "Direction → Mission clarity",
                    "Mission → Action structure",
                    "Purpose integration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-8">
            <ButtonGhost href="#purpose-method">Start The Purpose Method™</ButtonGhost>
          </div>
        </div>
      </section>

      {/* The Trilogy */}
      <section
        id="trilogy"
        aria-labelledby="prog-trilogy-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
              Stage III: Journey
            </p>
            <h2 id="prog-trilogy-heading" className="font-display text-h1 font-medium text-primary">
              The Trilogy™
            </h2>
            <div className="space-y-3 font-body text-body text-secondary max-w-prose">
              <p>A 12‑month identity transformation through:</p>
              <ul className="space-y-1">
                <li><span className="text-primary">Alignment</span> (Months 1–4)</li>
                <li><span className="text-primary">Embodiment</span> (Months 5–8)</li>
                <li><span className="text-primary">Legacy</span> (Months 9–12)</li>
              </ul>
              <p>This is the journey, the long arc of identity becoming lived.</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {trilogyArcs.map((arc) => (
              <motion.div key={arc.id} variants={staggerChildVariants}>
                <Card className="p-8 space-y-5">
                  <div className="space-y-1">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                      {arc.arc}, {arc.months}
                    </p>
                    <h3 className="font-display text-[1.4rem] font-medium text-primary">
                      {arc.name}
                    </h3>
                    <div className="font-body text-body text-secondary/70">
                      {arc.descriptor.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60 mb-3">
                      You will
                    </p>
                    <ul className="space-y-2 font-body text-body text-secondary">
                      {arc.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-secondary/40 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8">
            <ButtonGhost href="#trilogy">Enter The Trilogy™</ButtonGhost>
          </div>
        </div>
      </section>

      {/* The Circle */}
      <section
        id="circle"
        aria-labelledby="prog-circle-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
              Stage IV: Continuation
            </p>
            <h2 id="prog-circle-heading" className="font-display text-h1 font-medium text-primary">
              The Sovereign Identity Circle™
            </h2>
            <div className="space-y-3 font-body text-body text-secondary max-w-prose">
              <p>Sovereignty is not a moment.<br />It is a continuation.</p>
              <p>
                The Circle™ is where identity becomes mastery: refined, expanded,
                embodied, lived.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  This program is for you if
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "You want long-term evolution",
                    "You want refinement",
                    "You want depth",
                    "You want identity as a lifestyle",
                    "You want sovereign community",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={staggerChildVariants}>
              <Card className="h-full p-7 space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  What you'll experience
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {[
                    "Monthly identity refinement",
                    "Sovereign practice",
                    "Expansion work",
                    "Legacy integration",
                    "Long-term support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-secondary/40 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-8">
            <ButtonGhost href="#circle">Join The Circle™</ButtonGhost>
          </div>
        </div>
      </section>

      {/* Selector */}
      <section
        aria-labelledby="program-selector-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 id="program-selector-heading" className="font-display text-h1 font-medium text-primary">
              Which Program Should You Choose?
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {selector.map((item) => (
              <motion.div key={item.feel} variants={staggerChildVariants}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-secondary/10">
                  <p className="font-body text-body text-secondary">{item.feel}</p>
                  <ButtonGhost href={item.href} className="flex-shrink-0 self-start sm:self-center">
                    {item.program}
                  </ButtonGhost>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          </div>
        </div>
      </section>
    </>
  );
}
