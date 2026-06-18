"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

const worldTeaches = ["To search for it.", "To hunt for it.", "To wait for it.", "To hope for it.", "To \"figure it out.\""];

const fourThresholds = [
  {
    n: "1",
    title: "Identity → Purpose Mapping",
    body: "You will see how your identity naturally points toward a specific direction. Not a job. Not a role. Not a title. A direction.",
  },
  {
    n: "2",
    title: "Purpose → Direction Alignment",
    body: "You will align your internal identity with an external path. This is where confusion dissolves. This is where clarity emerges.",
  },
  {
    n: "3",
    title: "Direction → Mission Clarity",
    body: "You will articulate the mission your identity has been carrying for years: the mission you've felt but couldn't name.",
  },
  {
    n: "4",
    title: "Mission → Action Structure",
    body: "You will build the structure that turns mission into movement: clear, grounded, sovereign action.",
  },
];

const forYouIf = [
  "You feel directionless",
  "You feel stuck",
  "You feel unclear about your mission",
  "You feel the pull to do more but don't know where to begin",
  "You feel the ache of unexpressed identity",
  "You feel ready to move, but not sure where",
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
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p className="font-display text-[1.2rem] font-medium text-primary">Purpose is not found.<br />Purpose is remembered.</p>
            <p>Purpose is not something you chase.<br />It is not something you discover in a moment of inspiration.<br />It is not something you stumble into by accident.</p>
            <p>Purpose is the direction your identity has been pointing toward all along: quietly, consistently, faithfully.</p>
            <p>You don't find purpose.<br />You return to it.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — golden compass floating in darkness */}
      </section>

      {/* Orientation section */}
      <section aria-labelledby="pm-orientation-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="pm-orientation-heading" className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is an Orientation</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>Not a course.<br />Not a workshop.<br />Not a motivational experience.</p>
              <p>It is an <span className="text-primary font-medium">orientation</span>: the moment your identity points toward your mission.</p>
              <p>Purpose is not emotional.<br />Purpose is not inspirational.<br />Purpose is not a feeling.</p>
              <p>Purpose is structural.<br />Purpose is directional.<br />Purpose is identity expressed as movement.</p>
            </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The World Teaches You to Chase Purpose</h2>
            <ul className="space-y-2 font-body text-body text-secondary">
              {worldTeaches.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>But purpose is not external.<br />Purpose is internal.</p>
              <p>Purpose is not discovered.<br />Purpose is revealed.</p>
              <p>Purpose emerges when identity is restored: when the noise clears, when the drift ends, when you return to yourself.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for one reason */}
      <section aria-labelledby="pm-reason-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="pm-reason-heading" className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is Built for One Reason</h2>
          <p className="font-body text-body text-primary font-medium">To give you direction.</p>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>To take the identity you reclaimed in The Return™ and point it toward the life you were meant to live.</p>
            <p>This is where clarity becomes movement.<br />This is where identity becomes mission.<br />This is where your life begins to aim.</p>
          </div>
        </motion.div>
      </section>

      {/* Four thresholds */}
      <section aria-labelledby="pm-thresholds-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="pm-thresholds-heading" className="font-display text-h1 font-medium text-primary">What You Will Experience</h2>
            <p className="font-body text-body text-secondary">Inside The Purpose Method™, you will move through four directional thresholds:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {fourThresholds.map((threshold) => (
              <motion.div key={threshold.n} variants={staggerChildVariants} className="flex items-start gap-6 py-6 border-b border-secondary/10 last:border-b-0">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-neutral border border-secondary/30 rounded-sm">
                  <span className="font-body text-label text-secondary">{threshold.n}</span>
                </div>
                <div className="space-y-2">
                  <p className="font-display text-[1.15rem] font-medium text-primary">{threshold.title}</p>
                  <p className="font-body text-body text-secondary">{threshold.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Not fast */}
      <section aria-label="Not fast" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is Not Fast</h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>It is not a burst of inspiration.<br />It is not a motivational high.<br />It is not a quick answer.</p>
            <p>It is slow.<br />It is intentional.<br />It is precise.</p>
            <p>Purpose is not a spark.<br />Purpose is a direction.</p>
          </div>
        </motion.div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby="pm-who-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="pm-who-heading" className="font-display text-h1 font-medium text-primary">Who The Purpose Method™ Is For</h2>
          <p className="font-body text-body text-secondary">This is for you if:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {forYouIf.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
          </ul>
          <p className="font-body text-body text-primary font-medium">If you feel this tension, you are ready.</p>
        </motion.div>
      </section>

      {/* Compass + Promise CTA */}
      <section aria-label="The compass and the promise" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is the Compass</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>The Return™ brings you home.<br />The Purpose Method™ points you forward.</p>
              <p>This is where your life begins to aim: with clarity, with direction, with identity.</p>
            </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is a Promise</h2>
            <div className="space-y-2 font-body text-body text-secondary">
              <p>A promise that you will not wander.<br />A promise that you will not guess.<br />A promise that you will not drift again.<br />A promise that your life will move with clarity.</p>
            </div>
            <p className="font-body text-body text-secondary/70">Purpose is not a mystery.<br />Purpose is a memory.</p>
            <p className="font-body text-body text-secondary">And you are ready to remember.</p>
          </motion.div>

          {/* TODO: imagery pending from client — golden compass rotating slowly */}

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Purpose Method™ Is Waiting for You</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>If you feel the pull,<br />if you feel the tension,<br />if you feel the quiet ache of direction unclaimed:</p>
              <p>Then you already know.</p>
              <p className="text-primary font-medium">It's time to orient your life.</p>
            </div>
            <ButtonPrimary href="/start-here">Start The Purpose Method™</ButtonPrimary>
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — cinematic faceless silhouette before golden directional beam */}
      </section>
    </>
  );
}
