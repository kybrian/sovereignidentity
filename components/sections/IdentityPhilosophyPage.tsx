"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const whenUnclear = ["Thoughts become chaotic", "Emotions become unstable", "Behavior becomes inconsistent", "Purpose becomes foggy", "Direction becomes confusing", "Discipline becomes fragile"];
const worldTells = ['"Think positive."', '"Change your mindset."', '"Reframe your thoughts."', '"Rewrite your story."', '"Believe in yourself."'];
const perceptualSov = ["Clarity", "Identity", "Truth", "Discernment", "Internal authority"];
const oppositeOf = ["Reactivity", "Emotional distortion", "External validation", "Noise", "Drift"];
const fiveCapacities = [
  { n: "1", name: "Attention", desc: "Where your awareness rests." },
  { n: "2", name: "Awareness", desc: "What you notice and what you ignore." },
  { n: "3", name: "Perception", desc: "How you interpret what you see." },
  { n: "4", name: "Discernment", desc: "How you separate truth from noise." },
  { n: "5", name: "Identity", desc: "The lens through which everything is filtered." },
];
const driftSteals = ["Clarity", "Purpose", "Confidence", "Direction", "Sovereignty"];
const returnReclaims = ["Your identity", "Your clarity", "Your internal authority", "Your direction", "Your sovereignty"];

export function IdentityPhilosophyPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="philosophy-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Identity Philosophy</p>
          <h1 id="philosophy-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">
            Identity Is the Lens.<br />Mindset Is the Outcome.
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Your life doesn't change because you think differently.<br />Your life changes because you <em>see</em> differently.</p>
            <p>Identity is upstream.<br />Mindset is downstream.</p>
            <p>Identity is the lens.<br />Mindset is the reflection.</p>
            <p>Identity is the structure.<br />Mindset is the symptom.</p>
            <p>This page explains the philosophy that shapes the entire Sovereign Identity Ecosystem™.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — golden geometric aperture/lens symbol */}
      </section>

      {/* Problem is not mindset */}
      <section aria-labelledby="problem-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="problem-heading" className="font-display text-h1 font-medium text-primary">The Problem Is Not Your Mindset</h2>
            <p className="font-body text-body text-secondary">Most people don't struggle because they lack motivation.<br />They struggle because they lack identity clarity.</p>
            <p className="font-body text-body text-secondary">When identity is unclear:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whenUnclear.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">Mindset tries to fix the symptoms.<br />Identity restores the source.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The World Teaches You to Fix the Wrong Thing</h2>
            <p className="font-body text-body text-secondary">You've been told:</p>
            <ul className="space-y-2 font-body text-body text-secondary/80">
              {worldTells.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary">But none of these work long-term because they don't address the real issue:</p>
            <p className="font-display text-[1.2rem] font-medium text-primary">Your lens is distorted.</p>
            <p className="font-body text-body text-secondary/70">You don't need new thoughts.<br />You need a new lens.</p>
          </motion.div>
        </div>
      </section>

      {/* Lens vs Story */}
      <section aria-labelledby="lens-story-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="lens-story-heading" className="font-display text-h1 font-medium text-primary">The Lens vs the Story</h2>
            <p className="font-body text-body text-secondary">This is one of the core distinctions of your philosophy.</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">The Story</p>
                <p className="font-body text-body text-secondary">What you <em>think</em> about your life.<br />Mindset.<br />Narrative.<br />Interpretation.</p>
              </Card>
            </motion.div>
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">The Lens</p>
                <p className="font-body text-body text-secondary">How you <em>see</em> your life.<br />Identity.<br />Perception.<br />Orientation.</p>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-10 space-y-3 font-body text-body text-secondary max-w-prose">
            <p>Most people try to change their story without changing their lens.</p>
            <p>It doesn't work.</p>
            <p className="text-primary font-medium">Because the lens always wins.</p>
          </motion.div>
        </div>
      </section>

      {/* Perceptual Sovereignty */}
      <section aria-labelledby="perceptual-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="perceptual-heading" className="font-display text-h1 font-medium text-primary">Perceptual Sovereignty</h2>
            <p className="font-body text-body text-secondary">Perceptual Sovereignty is the ability to see your life through:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {perceptualSov.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary">It is the opposite of:</p>
            <ul className="space-y-2 font-body text-body text-secondary/70">
              {oppositeOf.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-primary">When you reclaim your perception, you reclaim your life.</p>
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            {/* TODO: imagery pending from client — faceless silhouette with golden light from head/eyes */}
            <div className="w-full aspect-square max-w-xs bg-neutral border border-secondary/10 rounded-sm flex items-center justify-center">
              <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/30 text-center px-4">Image<br />Pending</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Five upstream capacities */}
      <section aria-labelledby="five-capacities-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="five-capacities-heading" className="font-display text-h1 font-medium text-primary">The Five Upstream Capacities</h2>
            <p className="font-body text-body text-secondary">Identity work strengthens the capacities that mindset work ignores:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {fiveCapacities.map((cap) => (
              <motion.div key={cap.n} variants={staggerChildVariants}>
                <div className="flex items-start gap-6 py-5 border-b border-secondary/10">
                  <span className="font-body text-label text-secondary uppercase tracking-[0.16em] flex-shrink-0">{cap.n}.</span>
                  <div className="space-y-1">
                    <p className="font-display text-[1.2rem] font-medium text-primary">{cap.name}</p>
                    <p className="font-body text-body text-secondary">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-8 font-body text-body text-secondary/70">
            When these are strong, mindset becomes irrelevant: because your lens is clean.
          </motion.p>
        </div>
      </section>

      {/* The real enemy: drift */}
      <section aria-labelledby="drift-enemy-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="drift-enemy-heading" className="font-display text-h1 font-medium text-primary">The Real Enemy: Drift</h2>
          <p className="font-body text-body text-secondary">Drift is the slow erosion of identity.</p>
          <p className="font-body text-body text-secondary">It happens when:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {["You live for expectations", "You live for survival", "You live for approval", "You live for performance", "You live disconnected from yourself"].map((item) => (
              <li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary/70">Drift is not dramatic.<br />It's subtle.</p>
          <p className="font-body text-body text-secondary">And it steals:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {driftSteals.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
          </ul>
          <p className="font-body text-body text-primary font-medium">The Return™ exists to end drift.</p>
          <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
        </motion.div>
      </section>

      {/* Four programs in philosophy context */}
      <section aria-labelledby="philosophy-programs-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <h2 id="philosophy-programs-heading" className="font-display text-h1 font-medium text-primary mb-6">The Return™ Is Not a Program. It's a Threshold.</h2>
            <p className="font-body text-body text-secondary mb-4">It is the moment you step back into yourself.</p>
            <p className="font-body text-body text-secondary mb-4">The moment you reclaim:</p>
            <ul className="space-y-2 font-body text-body text-secondary mb-6">
              {returnReclaims.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70 mb-6">Everything begins with a return.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            <div className="py-6 border-b border-secondary/10 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Purpose Method™: Orientation</h3>
              <p className="font-body text-body text-secondary">Once identity is restored, purpose becomes clear.<br />Purpose is not found.<br />Purpose is remembered.<br />It emerges when identity is aligned.</p>
              <ButtonGhost href="/the-purpose-method">Start The Purpose Method™</ButtonGhost>
            </div>
            <div className="py-6 border-b border-secondary/10 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Trilogy™: The Journey of Identity</h3>
              <p className="font-body text-body text-secondary">Identity must be lived, not just understood.<br />The Trilogy™ is the 12-month journey through Alignment, Embodiment, and Legacy.<br />This is where identity becomes real.</p>
              <ButtonGhost href="/the-trilogy">Enter The Trilogy™</ButtonGhost>
            </div>
            <div className="py-6 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Sovereign Identity Circle™: Continuation</h3>
              <p className="font-body text-body text-secondary">Sovereignty is not a moment.<br />It is a lifestyle.<br />The Circle™ is where identity becomes mastery.</p>
              <ButtonGhost href="/the-circle">Join The Circle™</ButtonGhost>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core of this philosophy */}
      <section aria-label="The core of this philosophy" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <h2 className="font-display text-h1 font-medium text-primary">The Core of This Philosophy</h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>You don't need to become someone new.<br />You need to return to who you were always meant to be.</p>
            <p>Identity is not invented.<br />Identity is remembered.</p>
            <p>Identity is not performed.<br />Identity is embodied.</p>
            <p>Identity is not emotional.<br />Identity is structural.</p>
            <p>Identity is not reactive.<br />Identity is sovereign.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — angular geometric lion icon */}
      </section>
    </>
  );
}
