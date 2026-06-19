"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const principles = [
  {
    n: "1",
    title: "Identity First",
    body: "Identity is the lens.\nEverything else is downstream.",
  },
  {
    n: "2",
    title: "Structure Over Emotion",
    body: "Clarity comes from structure, not intensity.",
  },
  {
    n: "3",
    title: "Sovereignty Over Survival",
    body: "You were not meant to live reactively.\nYou were meant to live intentionally.",
  },
];

export function AboutPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="about-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">About</p>
          <h1 id="about-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            About the Founder
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- ABOUT THE FOUNDER */}
      <section aria-label="About the Founder" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Melvin, Identity Architect &amp; Creator of The Sovereign Identity Ecosystem™</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>I help people return to who they were always meant to be.</p>
            <p>
              My work is not mindset coaching.<br />
              It is identity architecture: the process of helping individuals rebuild their internal world from the source.
            </p>
            <p>
              Identity is not something you create.<br />
              Identity is something you return to.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- THE ORIGIN OF THE WORK */}
      <section aria-labelledby="origin-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="origin-heading" className="font-display text-h1 font-medium text-primary">The Origin of the Work</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>For years, I watched people try to change their lives through:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mindset</li>
              <li>Motivation</li>
              <li>Habits</li>
              <li>Discipline</li>
              <li>Productivity</li>
              <li>Emotional management</li>
            </ul>
            <p className="pt-2">
              But none of it lasted.<br />
              Because none of it addressed the source.
            </p>
            <p>
              Identity is upstream.<br />
              Everything else is downstream.
            </p>
            <p>
              When identity is unclear, everything becomes unstable.<br />
              When identity becomes clear, everything stabilizes.
            </p>
            <p>This realization became the foundation of the Sovereign Identity Ecosystem™.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- THE MISSION */}
      <section aria-labelledby="mission-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="mission-heading" className="font-display text-h1 font-medium text-primary">The Mission</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>My mission is simple:</p>
            <p className="text-primary font-medium">Help people return to themselves.</p>
            <p>
              Not through hype.<br />
              Not through emotion.<br />
              Not through pressure.<br />
              But through clarity, structure, and sovereignty.
            </p>
            <p>
              Identity is the most powerful force in a person's life, and most people have never been taught how to work with it.
            </p>
            <p>This ecosystem exists to change that.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- THE WORK */}
      <section aria-labelledby="work-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 md:mb-16 space-y-4">
            <h2 id="work-heading" className="font-display text-h1 font-medium text-primary">The Work</h2>
            <p className="font-body text-body text-secondary">The work is built on three principles:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((principle) => (
              <motion.div key={principle.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">{principle.n}.</span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">{principle.title}</h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    {principle.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-12 text-center">
            <p className="font-body text-body text-secondary">These principles shape every program, every pathway, and every experience inside the ecosystem.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 --- CTA */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="#story">Read the Full Founder Story</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
