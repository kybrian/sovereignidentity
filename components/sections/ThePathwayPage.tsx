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

const stages = [
  {
    n: "1",
    name: "Drift",
    descriptor: "Identity erosion.",
    body: "Drift is the slow erosion of identity.",
    details: [
      "You live for expectations",
      "You live for survival",
      "You live for approval",
      "You live for performance",
      "You live disconnected from yourself",
    ],
    signs: ["Disconnection", "Confusion", "Emotional instability", "Lack of direction", "Internal noise"],
    work: "Recognize the drift.",
    next: "The Return™",
    nextHref: "/the-return",
    cta: "Begin The Return™",
    ctaHref: "/the-return",
  },
  {
    n: "2",
    name: "Recognition",
    descriptor: "Truth seen.",
    body: 'Recognition is the moment you realize: "I\'m not myself."',
    details: null,
    signs: null,
    work: "Tell the truth about where you are.",
    next: "The Return™",
    nextHref: "/the-return",
    cta: null,
    ctaHref: null,
  },
  {
    n: "3",
    name: "Return",
    descriptor: "Identity restored.",
    body: "Return is the threshold.",
    details: null,
    signs: null,
    work: "Rebuild your internal foundation.",
    next: "The Return™",
    nextHref: "/the-return",
    cta: "Begin The Return™",
    ctaHref: "/the-return",
  },
  {
    n: "4",
    name: "Purpose",
    descriptor: "Direction remembered.",
    body: "Purpose is not found.\nPurpose is remembered.\n\nPurpose emerges when identity is restored.\n\nPurpose is not a mindset.\nPurpose is an orientation.\n\nIt is the direction your identity has been pointing toward all along.",
    details: null,
    signs: null,
    work: "Clarify your mission.\nOrient your life.",
    next: "The Purpose Method™",
    nextHref: "/programs#purpose-method",
    cta: "Start The Purpose Method™",
    ctaHref: "/programs#purpose-method",
  },
  {
    n: "5",
    name: "Alignment",
    descriptor: "Internal order.",
    body: "Alignment is internal order.",
    details: [
      "Your nervous system",
      "Your perception",
      "Your identity",
      "Your internal structure",
    ],
    signs: null,
    work: "Build internal coherence.\nRemove identity noise.\nEstablish alignment practices.",
    next: "The Trilogy™: Alignment Arc",
    nextHref: "/programs#trilogy",
    cta: null,
    ctaHref: null,
  },
  {
    n: "6",
    name: "Embodiment",
    descriptor: "Identity lived.",
    body: "Embodiment is identity lived.",
    details: [
      "Discipline becomes natural",
      "Action becomes aligned",
      "Behavior becomes inevitable",
      "Identity becomes physical",
    ],
    signs: null,
    work: "Turn identity into action.",
    next: "The Trilogy™: Embodiment Arc",
    nextHref: "/programs#trilogy",
    cta: null,
    ctaHref: null,
  },
  {
    n: "7",
    name: "Legacy",
    descriptor: "Identity expressed outward.",
    body: "Legacy is identity expressed outward.",
    details: [
      "Leadership",
      "Impact",
      "Influence",
      "Generational identity",
      "Sovereign contribution",
    ],
    signs: null,
    work: "Build your legacy blueprint.\nStep into sovereign leadership.",
    next: "The Trilogy™: Legacy Arc",
    nextHref: "/programs#trilogy",
    cta: null,
    ctaHref: null,
  },
  {
    n: "8",
    name: "Sovereignty",
    descriptor: "Mastery. Continuation.",
    body: "Sovereignty is the culmination.",
    details: [
      "Internal authority",
      "Identity clarity",
      "Embodied discipline",
      "Purpose alignment",
      "Legacy expression",
      "Perceptual sovereignty",
    ],
    signs: null,
    work: "Refine.\nExpand.\nContinue.",
    next: "The Sovereign Identity Circle™",
    nextHref: "/programs#circle",
    cta: "Join The Circle™",
    ctaHref: "/programs#circle",
  },
];

const whereYouAre = [
  { feel: "If you feel disconnected", stage: "Drift", start: "Start with The Return™", href: "/the-return" },
  { feel: "If you feel directionless", stage: "Purpose", start: "Start with The Purpose Method™", href: "/programs#purpose-method" },
  { feel: "If you feel unstable", stage: "Alignment", start: "Start with Trilogy (Alignment)", href: "/programs#trilogy" },
  { feel: "If you feel ready to expand", stage: "Embodiment", start: "Start with Trilogy (Embodiment)", href: "/programs#trilogy" },
  { feel: "If you feel called to impact", stage: "Legacy", start: "Start with Trilogy (Legacy)", href: "/programs#trilogy" },
  { feel: "If you feel ready for mastery", stage: "Sovereignty", start: "Join The Circle™", href: "/programs#circle" },
];

export function ThePathwayPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="pathway-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Sovereign Identity Pathway™
          </p>
          <h1
            id="pathway-hero-heading"
            className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary"
          >
            THE PATHWAY
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-2 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Identity transformation is not random.<br />It is structural.</p>
            <p>
              There is a sequence, a progression, a path that every human
              follows when they move from disconnection to sovereignty.
            </p>
            <p>
              This is the <span className="text-primary font-medium">Sovereign Identity Pathway™</span>.
            </p>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — vertical golden pathway on matte black */}
      </section>

      {/* Stages */}
      <section
        aria-labelledby="eight-stages-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 space-y-4"
          >
            <h2 id="eight-stages-heading" className="font-display text-h1 font-medium text-primary">
              The Eight Stages of Identity Transformation
            </h2>
            <p className="font-body text-body text-secondary">
              The pathway moves through eight structural stages:
            </p>
            <p className="font-body text-body text-secondary">
              Each stage has its own identity shift.<br />
              Its own internal work.<br />
              Its own external expression.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {stages.map((stage) => (
              <motion.div key={stage.n} variants={staggerChildVariants}>
                <Card className="p-8 space-y-5">
                  <div className="flex items-start gap-5">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em] flex-shrink-0 mt-1">
                      {stage.n}.
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-display text-[1.5rem] font-medium text-primary">
                        {stage.name}
                      </h3>
                      <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                        {stage.descriptor}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 font-body text-body text-secondary">
                    {stage.body.split("\n").map((para, i) =>
                      para === "" ? null : <p key={i}>{para}</p>
                    )}

                    {stage.details && (
                      <ul className="space-y-2">
                        {stage.details.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <span className="text-secondary/40 flex-shrink-0">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {stage.signs && (
                      <>
                        <p>It shows up as:</p>
                        <ul className="space-y-2">
                          {stage.signs.map((s) => (
                            <li key={s} className="flex items-start gap-3">
                              <span className="text-secondary/40 flex-shrink-0">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="pt-2 border-t border-secondary/10 space-y-3">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                      Your work here
                    </p>
                    <p className="font-body text-body text-primary">
                      {stage.work.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < stage.work.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                      Your next step:{" "}
                      <span className="text-secondary">{stage.next}</span>
                    </p>
                    {stage.cta && stage.ctaHref && (
                      <div className="pt-1">
                        <ButtonGhost href={stage.ctaHref}>{stage.cta}</ButtonGhost>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Loop not line */}
      <section
        aria-labelledby="pathway-loop-heading"
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
          <h2 id="pathway-loop-heading" className="font-display text-h1 font-medium text-primary">
            The Pathway Is a Loop, Not a Line
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Identity is not linear.<br />It is cyclical.</p>
            <p>You will revisit:</p>
            <ul className="space-y-2">
              {["Return", "Purpose", "Alignment", "Embodiment", "Legacy"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>At deeper levels as you evolve.</p>
            <p>
            This is why the Circle™ exists, to support long‑term identity
            evolution.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Where you are */}
      <section
        aria-labelledby="where-you-are-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 id="where-you-are-heading" className="font-display text-h1 font-medium text-primary">
              Where You Are in the Pathway
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {whereYouAre.map((item) => (
              <motion.div key={item.feel} variants={staggerChildVariants}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-secondary/10">
                  <div className="space-y-1">
                    <p className="font-body text-body text-secondary">{item.feel}</p>
                    <p className="font-body text-label uppercase tracking-[0.16em] text-primary">
                      → {item.stage}
                    </p>
                  </div>
                  <ButtonGhost href={item.href} className="flex-shrink-0 self-start sm:self-center">
                    {item.start}
                  </ButtonGhost>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map closing */}
      <section
        aria-label="The Pathway is your map"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            The Pathway Is Your Map
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>This is the structure.<br />This is the sequence.<br />This is the truth.</p>
            <p>
              You don't need motivation.
              <br />
              You don't need hype.
              <br />
              You don't need to fix yourself.
            </p>
            <p>
              You need a return.
              <br />
              You need orientation.
              <br />
              You need alignment.
              <br />
              You need embodiment.
              <br />
              You need legacy.
              <br />
              You need sovereignty.
            </p>
            <p>This is the path.</p>
          </div>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — angular geometric lion icon in gold */}
      </section>
    </>
  );
}
