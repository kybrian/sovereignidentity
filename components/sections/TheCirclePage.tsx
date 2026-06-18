"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

const fourPillars = [
  {
    n: "1",
    title: "Identity Refinement",
    desc: "Identity becomes sharper. Cleaner. More defined. More sovereign. This is where you remove the subtle distortions that only appear at higher levels.",
  },
  {
    n: "2",
    title: "Embodied Sovereignty",
    desc: "Discipline becomes natural. Consistency becomes effortless. Action becomes identity-driven. This is where sovereignty becomes your default state.",
  },
  {
    n: "3",
    title: "Legacy Expansion",
    desc: "Your presence begins to shape your environment. Your identity begins to influence others. Your mission begins to expand. Legacy is identity expressed outward.",
  },
  {
    n: "4",
    title: "Continuation",
    desc: "Identity is not a straight line. It is a loop: a cycle, a spiral upward. The Circle™ is where you continue the work at deeper levels.",
  },
];

const circleFor = [
  "Have ended drift",
  "Have reclaimed identity",
  "Have found purpose",
  "Have built alignment",
  "Have embodied discipline",
  "Have begun legacy",
  "Are ready for mastery",
];

const brotherhood = [
  "Think deeply",
  "Move intentionally",
  "Live with clarity",
  "Lead with integrity",
  "Build with purpose",
  "Embody their identity",
  "Shape their legacy",
];

const structure = [
  { title: "Monthly Identity Refinement Sessions", desc: "Deep, sovereign, identity-rooted work." },
  { title: "Monthly Embodiment Practices", desc: "Discipline, structure, and embodied sovereignty." },
  { title: "Legacy Expansion Workshops", desc: "Identity expressed outward." },
  { title: "Quarterly Sovereign Gatherings", desc: "Cinematic, ritual-based identity recalibration." },
  { title: "Private Community", desc: "Quiet, clean, intentional." },
  { title: "Long-Arc Continuation", desc: "Identity work that evolves with you." },
];

export function TheCirclePage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="circle-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Program</p>
          <h1 id="circle-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">The Sovereign Identity Circle™</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p className="font-display text-[1.2rem] font-medium text-primary">Sovereignty is not a moment.<br />Sovereignty is a continuation.</p>
            <p>There comes a point in your identity journey when clarity is no longer the goal.<br />When purpose is no longer the question.<br />When alignment is no longer the struggle.<br />When embodiment is no longer the challenge.</p>
            <p>There comes a point when you are no longer returning: you are <span className="text-primary font-medium">refining</span>.</p>
            <p>No longer searching: you are <span className="text-primary font-medium">sharpening</span>.</p>
            <p>No longer rebuilding: you are <span className="text-primary font-medium">expanding</span>.</p>
            <p>This is the moment you enter The Circle™.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — golden circular symbol glowing on matte black */}
      </section>

      {/* Not a program */}
      <section aria-labelledby="circle-not-program-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="circle-not-program-heading" className="font-display text-h1 font-medium text-primary">The Circle™ Is Not a Program</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>It is not a course.<br />It is not a curriculum.<br />It is not a challenge.<br />It is not a container with an end.</p>
              <p>The Circle™ is a <span className="text-primary font-medium">continuation</span>: the long arc of identity becoming mastery.</p>
              <p>It is where you refine what you've built.<br />It is where you deepen what you've embodied.<br />It is where you expand what you've aligned.<br />It is where you live what you've become.</p>
              <p>The Circle™ is not the beginning.<br />It is the evolution.</p>
            </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The World Teaches You to Finish</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>To complete.<br />To graduate.<br />To move on.<br />To chase the next thing.</p>
              <p>But identity is not something you finish.<br />Identity is something you <span className="text-primary font-medium">continue</span>.</p>
              <p>Identity is not a destination.<br />Identity is a <span className="text-primary font-medium">practice</span>.</p>
              <p>Identity is not a moment.<br />Identity is a <span className="text-primary font-medium">lifetime</span>.</p>
              <p>The Circle™ exists for those who understand this truth.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for one purpose */}
      <section aria-labelledby="circle-purpose-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="circle-purpose-heading" className="font-display text-h1 font-medium text-primary">The Circle™ Is Built for One Purpose</h2>
            <p className="font-body text-body text-primary font-medium">To support long-term identity evolution.</p>
            <p className="font-body text-body text-secondary">To give you a place where:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {["Your identity is refined", "Your clarity is sharpened", "Your embodiment is strengthened", "Your purpose is expanded", "Your legacy is shaped", "Your sovereignty is lived"].map((item) => (
                <li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="font-body text-body text-secondary/70">This is where the work becomes deeper, quieter, more precise, more sovereign.</p>
          </motion.div>
        </div>
      </section>

      {/* Four pillars */}
      <section aria-labelledby="circle-pillars-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="circle-pillars-heading" className="font-display text-h1 font-medium text-primary">What You Will Experience</h2>
            <p className="font-body text-body text-secondary">Inside The Circle™, you will move through four ongoing pillars:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {fourPillars.map((pillar) => (
              <motion.div key={pillar.n} variants={staggerChildVariants} className="flex items-start gap-6 py-6 border-b border-secondary/10 last:border-b-0">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-neutral border border-secondary/30 rounded-sm">
                  <span className="font-body text-label text-secondary">{pillar.n}</span>
                </div>
                <div className="space-y-2">
                  <p className="font-display text-[1.15rem] font-medium text-primary">{pillar.title}</p>
                  <p className="font-body text-body text-secondary">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Not for everyone */}
      <section aria-labelledby="circle-who-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="circle-who-heading" className="font-display text-h1 font-medium text-primary">The Circle™ Is Not for Everyone</h2>
            <p className="font-body text-body text-secondary">It is for those who:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {circleFor.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">The Circle™ is not for beginners.<br />It is for those who are ready to live sovereignty: not as a moment, but as a lifestyle.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Circle™ Is a Brotherhood of Identity</h2>
            <p className="font-body text-body text-secondary">A sovereign community of individuals who:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {brotherhood.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>This is not a social group.<br />This is not a hype environment.<br />This is not a place for noise.</p>
              <p>This is a <span className="text-primary font-medium">sovereign identity chamber</span>: quiet, grounded, disciplined, intentional.</p>
            </div>
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — silhouettes in golden circle of light */}
      </section>

      {/* Structure */}
      <section aria-labelledby="circle-structure-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="circle-structure-heading" className="font-display text-h1 font-medium text-primary">The Structure of The Circle™</h2>
            <p className="font-body text-body text-secondary">The Circle™ includes:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {structure.map((item) => (
              <motion.div key={item.title} variants={staggerChildVariants} className="p-6 bg-neutral border border-secondary/10 rounded-sm space-y-2">
                <p className="font-body font-medium text-primary">{item.title}</p>
                <p className="font-body text-body text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promise + CTA */}
      <section aria-labelledby="circle-promise-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 id="circle-promise-heading" className="font-display text-h1 font-medium text-primary">The Circle™ Is a Promise</h2>
            <div className="space-y-2 font-body text-body text-secondary">
              <p>A promise that you will not drift again.<br />A promise that your identity will continue to deepen.<br />A promise that your purpose will continue to expand.<br />A promise that your embodiment will continue to strengthen.<br />A promise that your legacy will continue to grow.</p>
            </div>
            <p className="font-body text-body text-secondary/70">This is the long arc.<br />This is the sovereign path.<br />This is the continuation.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Circle™ Is Waiting for You</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>If you feel the pull,<br />if you feel the readiness,<br />if you feel the quiet knowing that your identity is meant to evolve beyond the initial transformation:</p>
              <p>Then you already know.</p>
              <p className="text-primary font-medium">It's time to enter the continuation.</p>
            </div>
            <ButtonPrimary href="/start-here">Join The Circle™</ButtonPrimary>
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — faceless silhouette stepping into glowing golden circle */}
      </section>
    </>
  );
}
