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

const paths = [
  {
    n: "1",
    name: "The Belonging Path",
    desc: "For those who want community, conversation, and resonance before transformation.",
    startIf: [
      "You feel disconnected",
      "You want to be around people who \"get it\"",
      "You want clarity before commitment",
      "You want to ease into the work",
    ],
    firstStep: "Join The Belonging Room",
    cta: "Join The Belonging Room",
    href: "/programs#belonging-room",
    primary: false,
  },
  {
    n: "2",
    name: "The Transformation Path",
    desc: "For those who are ready to begin the identity work immediately.",
    startIf: [
      "You feel the drift",
      "You feel the disconnect",
      "You feel the misalignment",
      "You feel the urgency",
      "You want to return to yourself",
    ],
    firstStep: "Begin The Return™",
    cta: "Begin The Return™",
    href: "/the-return",
    primary: true,
  },
  {
    n: "3",
    name: "The Mastery Path",
    desc: "For those who want long‑term identity evolution.",
    startIf: [
      "You've done identity work before",
      "You want refinement",
      "You want depth",
      "You want continuation",
      "You want sovereignty as a lifestyle",
    ],
    firstStep: "Enter The Sovereign Identity Circle™",
    cta: "Join The Circle™",
    href: "/programs#circle",
    primary: false,
  },
];

const stages = [
  "Drift", "Recognition", "Return", "Purpose",
  "Alignment", "Embodiment", "Legacy", "Sovereignty",
];

const whereYouAre = [
  { feel: "If you feel disconnected", stage: "Drift", start: "The Return™", href: "/the-return" },
  { feel: "If you feel directionless", stage: "Purpose", start: "The Purpose Method™", href: "/programs#purpose-method" },
  { feel: "If you feel unstable", stage: "Alignment", start: "The Trilogy™ (Alignment Arc)", href: "/programs#trilogy" },
  { feel: "If you feel ready to expand", stage: "Embodiment", start: "The Trilogy™ (Embodiment Arc)", href: "/programs#trilogy" },
  { feel: "If you feel called to impact", stage: "Legacy", start: "The Trilogy™ (Legacy Arc)", href: "/programs#trilogy" },
  { feel: "If you feel ready for mastery", stage: "Sovereignty", start: "The Circle™", href: "/programs#circle" },
];

const programs = [
  {
    n: "1",
    name: "The Return™",
    tag: "Threshold",
    desc: "End drift.\nReclaim identity.\nRe-enter sovereignty.",
    cta: "Begin The Return™",
    href: "/the-return",
    primary: true,
  },
  {
    n: "2",
    name: "The Purpose Method™",
    tag: "Orientation",
    desc: "Find direction.\nClarify mission.\nOrient your life.",
    cta: "Start The Purpose Method™",
    href: "/programs#purpose-method",
    primary: false,
  },
  {
    n: "3",
    name: "The Trilogy™",
    tag: "Journey",
    desc: "A 12‑month identity transformation through:\nAlignment\nEmbodiment\nLegacy",
    cta: "Enter The Trilogy™",
    href: "/programs#trilogy",
    primary: false,
  },
  {
    n: "4",
    name: "The Sovereign Identity Circle™",
    tag: "Continuation",
    desc: "Long-term identity evolution and refinement.",
    cta: "Join The Circle™",
    href: "/programs#circle",
    primary: false,
  },
];

export function StartHerePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="start-here-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Start Here
          </p>
          <h1
            id="start-here-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            START HERE
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-2 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Return to yourself.<br />Understand the path.<br />Choose your beginning.</p>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — faceless silhouette, gold-on-black */}
      </section>

      {/* World pulls you away */}
      <section
        aria-label="The world pulls you away from yourself"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            The World Pulls You Away from Yourself
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Not all at once.<br />Not dramatically.<br />Not loudly.</p>
            <p>It happens slowly.</p>
            <p>
              Through expectations.
              <br />
              Through noise.
              <br />
              Through pressure.
              <br />
              Through survival.
              <br />
              Through the subtle erosion of identity.
            </p>
            <p>One day you wake up and realize:</p>
            <p className="text-primary font-medium">You've drifted.</p>
            <p>
              Not because you failed;
              <br />
              but because you were never taught how to stay rooted in who you are.
            </p>
            <p>This is where your return begins.</p>
          </div>
        </motion.div>
      </section>

      {/* What this page is for */}
      <section
        aria-labelledby="start-orientation-heading"
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
          <h2 id="start-orientation-heading" className="font-display text-h1 font-medium text-primary">
            What This Page Is For
          </h2>
          <p className="font-body text-body text-secondary">This page exists to give you:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "A clear understanding of the Sovereign Identity Ecosystem™",
              "A map of the entire transformation pathway",
              "A sense of where you are right now",
              "A starting point that matches your stage",
              "A way to enter the work without overwhelm",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>This is your orientation.<br />Your grounding.<br />Your first step back to yourself.</p>
          </div>
        </motion.div>
      </section>

      {/* Ecosystem */}
      <section
        aria-labelledby="ecosystem-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="ecosystem-heading" className="font-display text-h1 font-medium text-primary">
            The Sovereign Identity Ecosystem™
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Identity is not a concept.<br />It is a structure.</p>
            <p>Your life changes when your identity changes, not before.</p>
            <p>This ecosystem is built to restore:</p>
          </div>
          <ul className="space-y-2 font-body text-body text-secondary">
            {["Clarity", "Direction", "Alignment", "Embodiment", "Legacy", "Sovereignty"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>It is not mindset work.<br />It is not motivation.<br />It is not hype.</p>
          </div>
          <p className="font-body text-body text-primary font-medium">It is identity reconstruction.</p>
          <ButtonGhost href="/programs">Explore the Programs</ButtonGhost>
        </motion.div>
      </section>

      {/* Three paths */}
      <section
        aria-labelledby="three-paths-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <h2 id="three-paths-heading" className="font-display text-h1 font-medium text-primary">
              The Three Paths You Can Take
            </h2>
            <p className="font-body text-body text-secondary">
              There are three ways to enter this work:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {paths.map((path) => (
              <motion.div key={path.n} variants={staggerChildVariants}>
                <Card className="p-8 space-y-6">
                  <div className="space-y-1">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                      {path.n}.
                    </p>
                    <h3 className="font-display text-[1.4rem] font-medium text-primary">
                      {path.name}
                    </h3>
                    <p className="font-body text-body text-secondary">{path.desc}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                      Start here if
                    </p>
                    <ul className="space-y-2 font-body text-body text-secondary">
                      {path.startIf.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-secondary/40 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-secondary/10 space-y-3">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                      Your first step
                    </p>
                    <p className="font-body text-body text-primary">{path.firstStep}</p>
                    <div>
                      {path.primary ? (
                        <ButtonPrimary href={path.href}>{path.cta}</ButtonPrimary>
                      ) : (
                        <ButtonGhost href={path.href}>{path.cta}</ButtonGhost>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pathway */}
      <section
        aria-labelledby="start-pathway-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <h2 id="start-pathway-heading" className="font-display text-h1 font-medium text-primary">
              The Sovereign Identity Pathway™
            </h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>Identity transformation is not random.<br />It follows a sequence.</p>
              <p>Here is the full pathway:</p>
            </div>
          </motion.div>

          <motion.ol
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="relative space-y-0"
          >
            <div aria-hidden="true" className="absolute left-[22px] top-0 bottom-0 w-px bg-secondary/10" />
            {stages.map((stage, i) => (
              <motion.li
                key={stage}
                variants={staggerChildVariants}
                className="relative flex items-center gap-6 py-4"
              >
                <div className="relative z-10 flex-shrink-0 w-11 h-11 flex items-center justify-center bg-neutral border border-secondary/30 rounded-sm">
                  <span className="font-body text-label text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-body text-[1rem] font-medium text-primary/80 tracking-wide uppercase">
                  {stage}
                </span>
              </motion.li>
            ))}
          </motion.ol>

          <Divider className="mt-12 mb-10" />
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Each stage has its own work.<br />Its own challenges.<br />Its own breakthroughs.<br />Its own identity shifts.</p>
          </div>
        </div>
      </section>

      {/* Where you are */}
      <section
        aria-labelledby="start-where-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 id="start-where-heading" className="font-display text-h1 font-medium text-primary">
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
                  <p className="font-body text-body text-secondary/70 sm:text-right">
                    Start with: <span className="text-secondary">{item.start}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section
        aria-labelledby="start-programs-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <h2 id="start-programs-heading" className="font-display text-h1 font-medium text-primary">
              The Four Programs
            </h2>
            <p className="font-body text-body text-secondary">
              Each program corresponds to a stage of the pathway.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {programs.map((prog) => (
              <motion.div key={prog.n} variants={staggerChildVariants}>
                <Card className="h-full p-7 space-y-4">
                  <div className="space-y-1">
                    <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                      {prog.n}. {prog.tag}
                    </p>
                    <h3 className="font-display text-[1.2rem] font-medium text-primary">
                      {prog.name}
                    </h3>
                    <div className="font-body text-body text-secondary">
                      {prog.desc.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    {prog.primary ? (
                      <ButtonPrimary href={prog.href}>{prog.cta}</ButtonPrimary>
                    ) : (
                      <ButtonGhost href={prog.href}>{prog.cta}</ButtonGhost>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section
        aria-label="Your return begins here"
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
          <h2 className="font-display text-h1 font-medium text-primary">
            Your Return Begins Here
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>You don't need motivation.<br />You don't need hype.<br />You don't need to "fix" yourself.</p>
            <p>You need a return.</p>
            <p>
              A return to identity.
              <br />
              A return to clarity.
              <br />
              A return to sovereignty.
              <br />
              A return to who you were always meant to be.
            </p>
          </div>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — gold-on-black, faceless silhouette */}
      </section>
    </>
  );
}
