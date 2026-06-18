"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const mindsetFocuses = ["Thoughts", "Beliefs", "Affirmations", "Reframing", "Motivation", "Positive thinking"];
const whenUnclear = ["Thoughts become chaotic", "Emotions become unstable", "Behavior becomes inconsistent", "Purpose becomes foggy", "Discipline becomes fragile"];
const mindsetAssumes = ["You can think your way into clarity", "You can motivate your way into discipline", "You can affirm your way into identity", "You can reframe your way into purpose"];
const fiveCapacities = [
  { n: "1", name: "Attention", desc: "Where your awareness rests." },
  { n: "2", name: "Awareness", desc: "What you notice and what you ignore." },
  { n: "3", name: "Perception", desc: "How you interpret what you see." },
  { n: "4", name: "Discernment", desc: "How you separate truth from noise." },
  { n: "5", name: "Identity", desc: "The lens through which everything is filtered." },
];
const driftHappens = ["You live for expectations", "You live for survival", "You live for approval", "You live for performance", "You live disconnected from yourself"];

const notPrograms = [
  {
    program: "The Return™ is not mindset work",
    body: "It is identity restoration.",
    list: ["Internal clarity", "Nervous system grounding", "Identity recall", "Internal authority", "Sovereign perception"],
    desc: "This is the threshold: the moment you step back into yourself.",
    ctaLabel: "Begin The Return™",
    ctaHref: "/the-return",
    primary: true,
  },
  {
    program: "The Purpose Method™ is not mindset work",
    body: "It is orientation.",
    list: ["Direction", "Mission", "Purpose", "Alignment", "Internal order"],
    desc: "Purpose is not a mindset. Purpose is an identity orientation.",
    ctaLabel: "Start The Purpose Method™",
    ctaHref: "/the-purpose-method",
    primary: false,
  },
  {
    program: "The Trilogy™ is not mindset work",
    body: "It is identity embodiment.",
    list: ["Discipline", "Action", "Embodiment", "Leadership", "Legacy"],
    desc: "Mindset tries to motivate behavior. Identity makes behavior inevitable.",
    ctaLabel: "Enter The Trilogy™",
    ctaHref: "/the-trilogy",
    primary: false,
  },
  {
    program: "The Circle™ is not mindset work",
    body: "It is long-term identity evolution.",
    list: [],
    desc: "It is refinement. Expansion. Sovereignty as a lifestyle.",
    ctaLabel: "Join The Circle™",
    ctaHref: "/the-circle",
    primary: false,
  },
];

export function NotMindsetWorkPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="nmw-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Not Mindset Work</p>
          <h1 id="nmw-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">This Is Not Mindset Work</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Mindset is downstream.<br />Identity is upstream.</p>
            <p>Mindset tries to change your thoughts.<br />Identity changes the <em>source</em> of your thoughts.</p>
            <p>Mindset tries to regulate your emotions.<br />Identity stabilizes the system that produces them.</p>
            <p>Mindset tries to motivate behavior.<br />Identity makes behavior inevitable.</p>
            <p>This page explains why the Sovereign Identity System™ is fundamentally different from every mindset, motivational, or self-help approach you've encountered.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — "MINDSET" cracking, dissolving into geometric identity lines */}
      </section>

      {/* Problem with mindset */}
      <section aria-labelledby="mindset-problem-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="mindset-problem-heading" className="font-display text-h1 font-medium text-primary">The Problem with Mindset Work</h2>
            <p className="font-body text-body text-secondary">Mindset work focuses on:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {mindsetFocuses.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-primary font-medium">These are all downstream outputs of identity.</p>
            <p className="font-body text-body text-secondary">When identity is unclear:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whenUnclear.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">Mindset tries to fix the symptoms.<br />Identity restores the source.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">Why Mindset Work Fails Long-Term</h2>
            <p className="font-body text-body text-secondary">Because mindset work assumes:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {mindsetAssumes.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-primary font-medium">But you can't.</p>
            <p className="font-body text-body text-secondary">Because the lens always wins.</p>
          </motion.div>
        </div>
      </section>

      {/* Lens vs Story */}
      <section aria-labelledby="nmw-lens-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="nmw-lens-heading" className="font-display text-h1 font-medium text-primary">The Lens vs the Story</h2>
            <p className="font-body text-body text-secondary">This is the core distinction that separates your work from the entire mindset industry.</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">Mindset = Story</p>
                <p className="font-body text-body text-secondary">What you <em>think</em> about your life.<br />Narrative.<br />Interpretation.<br />Beliefs.<br />Thought patterns.</p>
              </Card>
            </motion.div>
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Identity = Lens</p>
                <p className="font-body text-body text-secondary">How you <em>see</em> your life.<br />Perception.<br />Orientation.<br />Internal structure.<br />Self-concept.<br />Embodied truth.</p>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-10 space-y-3 font-body text-body text-secondary max-w-prose">
            <p>Most people try to change their story without changing their lens.</p>
            <p>It doesn't work.</p>
            <p className="text-primary font-medium">Because the lens always wins.</p>
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — golden geometric lens/aperture symbol */}
      </section>

      {/* Five upstream capacities */}
      <section aria-labelledby="nmw-five-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="nmw-five-heading" className="font-display text-h1 font-medium text-primary">The Five Upstream Capacities</h2>
            <p className="font-body text-body text-secondary">Mindset work focuses on downstream outputs.<br />Identity work strengthens upstream capacities:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {fiveCapacities.map((cap) => (
              <motion.div key={cap.n} variants={staggerChildVariants} className="flex items-start gap-6 py-5 border-b border-secondary/10">
                <span className="font-body text-label text-secondary uppercase tracking-[0.16em] flex-shrink-0">{cap.n}.</span>
                <div className="space-y-1">
                  <p className="font-display text-[1.2rem] font-medium text-primary">{cap.name}</p>
                  <p className="font-body text-body text-secondary">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-8 font-body text-body text-secondary/70">
            When these are strong, mindset becomes irrelevant: because your lens is clean.
          </motion.p>
        </div>
      </section>

      {/* The real issue is drift */}
      <section aria-labelledby="nmw-drift-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="nmw-drift-heading" className="font-display text-h1 font-medium text-primary">The Real Issue Is Drift</h2>
          <p className="font-body text-body text-secondary">People don't struggle because they lack motivation.<br />They struggle because they've drifted from themselves.</p>
          <p className="font-body text-body text-secondary">Drift is: subtle, slow, quiet, internal, structural.</p>
          <p className="font-body text-body text-secondary">It happens when:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {driftHappens.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
          </ul>
          <p className="font-body text-body text-secondary/70">Mindset work tries to motivate you out of drift.<br />Identity work ends drift at the root.</p>
        </motion.div>
      </section>

      {/* Not programs */}
      <section aria-labelledby="nmw-programs-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12">
            <h2 id="nmw-programs-heading" className="font-display text-h1 font-medium text-primary">None of These Are Mindset Work</h2>
          </motion.div>
          {notPrograms.map((prog) => (
            <motion.div key={prog.program} variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="py-8 border-b border-secondary/10 space-y-4 last:border-b-0">
              <h3 className="font-display text-[1.2rem] font-medium text-primary">{prog.program}</h3>
              <p className="font-body text-body text-secondary">{prog.body}</p>
              {prog.list.length > 0 && (
                <ul className="space-y-2 font-body text-body text-secondary">
                  {prog.list.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
                </ul>
              )}
              <p className="font-body text-body text-secondary/70">{prog.desc}</p>
              {prog.primary ? <ButtonPrimary href={prog.ctaHref}>{prog.ctaLabel}</ButtonPrimary> : <ButtonGhost href={prog.ctaHref}>{prog.ctaLabel}</ButtonGhost>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core truth */}
      <section aria-label="The core truth" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <h2 className="font-display text-h1 font-medium text-primary">The Core Truth</h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>You don't need a new mindset.<br />You need a new lens.</p>
            <p>You don't need motivation.<br />You need identity.</p>
            <p>You don't need hype.<br />You need clarity.</p>
            <p>You don't need to fix yourself.<br />You need to return to yourself.</p>
          </div>
          <div className="space-y-2 font-body text-body text-primary font-medium">
            <p>Identity is the root.</p>
            <p>Identity is the structure.</p>
            <p>Identity is the source.</p>
            <p>Identity is the truth.</p>
          </div>
          <p className="font-body text-body text-secondary/70">Everything else is downstream.</p>
        </motion.div>
        {/* TODO: imagery pending from client — angular geometric lion icon */}
      </section>
    </>
  );
}
