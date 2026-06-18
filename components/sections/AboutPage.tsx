"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

const whatIDo = [
  "Understand who they are",
  "Reclaim their internal clarity",
  "Stabilize their inner world",
  "Align their actions with their identity",
  "Live with purpose",
  "Lead with integrity",
  "Build a legacy that outlives them",
];

const whyDisconnected = ["They lose clarity", "They lose direction", "They lose confidence", "They lose their voice", "They lose their identity"];
const whyReturn = ["They become grounded", "They become clear", "They become aligned", "They become disciplined", "They become sovereign"];

const approach = [
  "Identity architecture",
  "Nervous system grounding",
  "Structural clarity",
  "Philosophical depth",
  "Cinematic storytelling",
  "Practical discipline",
  "Long-term evolution",
];

const whoIWorkWith = [
  "Feel disconnected from themselves",
  "Want clarity and direction",
  "Want to rebuild their internal foundation",
  "Want to live with purpose",
  "Want to lead with integrity",
  "Want to build a legacy",
  "Want to return to sovereignty",
];

const pathway = ["Drift", "Recognition", "Return", "Purpose", "Alignment", "Embodiment", "Legacy", "Sovereignty"];

const programs = [
  { n: "1", name: "The Return™", tag: "Threshold", desc: "End drift. Reclaim identity. Re-enter sovereignty." },
  { n: "2", name: "The Purpose Method™", tag: "Orientation", desc: "Find direction. Clarify mission. Orient your life." },
  { n: "3", name: "The Trilogy™", tag: "Journey", desc: "A 12-month identity transformation through Alignment, Embodiment, and Legacy." },
  { n: "4", name: "The Sovereign Identity Circle™", tag: "Continuation", desc: "Long-term identity evolution and refinement." },
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
          <h1 id="about-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">About Melvin</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p>I help people return to who they were always meant to be.</p>
            <p>Not by motivating them.<br />Not by fixing them.<br />Not by pushing them.<br />But by helping them reconnect with the identity they drifted away from.</p>
            <p>My work is rooted in clarity, structure, and sovereignty: the internal order that makes everything else possible.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — cinematic faceless masculine silhouette in golden rim light */}
      </section>

      {/* My work began */}
      <section aria-labelledby="about-truth-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="about-truth-heading" className="font-display text-h1 font-medium text-primary">My Work Began with a Simple Truth</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>People don't fall because they're incapable.<br />They fall because they drift.</p>
            <p>Drift is subtle.<br />It's slow.<br />It's quiet.<br />It happens when life pulls you away from yourself: one compromise, one expectation, one survival decision at a time.</p>
            <p>I've lived that drift.<br />I've seen it in others.<br />And I've watched what happens when people finally return to themselves.</p>
            <p className="text-primary font-medium">Everything changes.</p>
          </div>
        </motion.div>
      </section>

      {/* What I do */}
      <section aria-labelledby="about-what-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="about-what-heading" className="font-display text-h1 font-medium text-primary">What I Do</h2>
            <p className="font-body text-body text-secondary">I build identity systems that help people:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whatIDo.map((item) => (
                <li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>
              ))}
            </ul>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>This is not mindset work.<br />This is not hype.<br />This is not motivation.</p>
            </div>
            <p className="font-body text-body text-primary font-medium">This is identity work: upstream, structural, sovereign.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">My Approach</h2>
            <p className="font-body text-body text-secondary">My work blends:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>
              ))}
            </ul>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>It is both internal and external.<br />Both philosophical and practical.<br />Both reflective and actionable.</p>
            </div>
            <p className="font-body text-body text-primary">It is identity work done with precision.</p>
          </motion.div>
        </div>
      </section>

      {/* The Sovereign Identity System */}
      <section aria-labelledby="about-system-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6 mb-12">
            <h2 id="about-system-heading" className="font-display text-h1 font-medium text-primary">The Sovereign Identity System™</h2>
            <p className="font-body text-body text-secondary">My work is built around a simple but powerful idea:</p>
            <p className="font-display text-[1.3rem] font-medium text-primary">Identity is the lens.<br />Everything else is downstream.</p>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>When identity is unclear, everything becomes unstable.<br />When identity is aligned, everything becomes possible.</p>
              <p>This is why I created the <span className="text-primary font-medium">Sovereign Identity Pathway™</span>, a complete transformation sequence that moves people from:</p>
            </div>
          </motion.div>

          <motion.ul variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="relative space-y-0 mb-12">
            <div aria-hidden="true" className="absolute left-[22px] top-0 bottom-0 w-px bg-secondary/10" />
            {pathway.map((stage, i) => (
              <motion.li key={stage} variants={staggerChildVariants} className="relative flex items-center gap-6 py-3">
                <div className="relative z-10 flex-shrink-0 w-11 h-11 flex items-center justify-center bg-surface border border-secondary/30 rounded-sm">
                  <span className="font-body text-label text-secondary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="font-body text-[1rem] font-medium text-primary/80 tracking-wide uppercase">{stage}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h3 className="font-display text-[1.4rem] font-medium text-primary">The Four Programs</h3>
            <p className="font-body text-body text-secondary">Each stage of the pathway has a corresponding program:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((prog) => (
                <div key={prog.n} className="p-6 bg-neutral border border-secondary/10 rounded-sm space-y-2">
                  <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">{prog.n}. {prog.tag}</p>
                  <p className="font-body font-medium text-primary">{prog.name}</p>
                  <p className="font-body text-body text-secondary">{prog.desc}</p>
                </div>
              ))}
            </div>
            <ButtonGhost href="/programs">Explore the Programs</ButtonGhost>
          </motion.div>
        </div>
      </section>

      {/* Why I do this */}
      <section aria-labelledby="about-why-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 id="about-why-heading" className="font-display text-h1 font-medium text-primary">Why I Do This Work</h2>
            <p className="font-body text-body text-secondary">Because I've seen what happens when people live disconnected from themselves:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whyDisconnected.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary">And I've seen what happens when they return:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whyReturn.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">This work is not about becoming someone new.<br />It's about returning to who you were always meant to be.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 className="font-display text-h1 font-medium text-primary">Who I Work With</h2>
            <p className="font-body text-body text-secondary">I work with people who:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whoIWorkWith.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-primary">If that's you, you're in the right place.</p>
          </motion.div>
        </div>
      </section>

      {/* Where to begin */}
      <section aria-labelledby="about-begin-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-3">
            <h2 id="about-begin-heading" className="font-display text-h1 font-medium text-primary">Where to Begin</h2>
            <p className="font-body text-body text-secondary">If you're new to my work, start with:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <motion.div variants={staggerChildVariants} className="py-6 border-b border-secondary/10 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Return™</h3>
              <p className="font-body text-body text-secondary">It is the foundation.<br />The threshold.<br />The moment everything changes.</p>
              <ButtonPrimary href="/the-return">Begin The Return™</ButtonPrimary>
            </motion.div>
            <motion.div variants={staggerChildVariants} className="py-6 border-b border-secondary/10 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Belonging Room</h3>
              <p className="font-body text-body text-secondary">A space for identity, clarity, resonance, and return.</p>
              <ButtonGhost href="/the-belonging-room">Join The Belonging Room</ButtonGhost>
            </motion.div>
            <motion.div variants={staggerChildVariants} className="py-6 space-y-3">
              <h3 className="font-display text-[1.3rem] font-medium text-primary">The Purpose Method™</h3>
              <p className="font-body text-body text-secondary">Your compass.<br />Your orientation.</p>
              <ButtonGhost href="/the-purpose-method">Start The Purpose Method™</ButtonGhost>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Promise */}
      <section aria-label="My promise" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">My Promise</h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>I will not hype you.<br />I will not motivate you.<br />I will not sell you illusions.</p>
            <p>I will help you return to yourself, and build a life that reflects who you truly are.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — angular geometric lion icon */}
      </section>
    </>
  );
}
