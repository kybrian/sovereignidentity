"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

const whatItIs = [
  "A place to reconnect with yourself",
  "A place to feel seen without performing",
  "A place to breathe",
  "A place to reflect",
  "A place to remember who you are",
  "A place to hear language that resonates",
  "A place to prepare for The Return™",
];

const whatItIsNot = [
  "A place for mindset quotes",
  "A place for motivational content",
  "A place for venting",
  "A place for trauma dumping",
  "A place for selling",
  "A place for external links",
  "A place for political or religious debates",
  "A place for noise",
];

const tone = ["Warm", "Grounded", "Identity-rooted", "Supportive", "Sovereign", "Clear", "Non-emotional", "Non-therapeutic"];

const structure = [
  {
    section: "Featured Section",
    items: ["Welcome Sequence", "Weekly Prompt", "Community Rules", "Return™ Invitation"],
  },
  {
    section: "Guides Section",
    items: ["Start Here", "Identity Conversations", "Wins & Reflections", "Return™ Orientation"],
  },
  {
    section: "Weekly Rhythm",
    items: ["Sunday: Weekly Prompt", "Thursday: Identity Question", "As Needed: Wins, reflections, announcements"],
  },
];

const whatYouFind = [
  { title: "Weekly Identity Prompts", desc: "Questions that help you reconnect with yourself." },
  { title: "Identity Conversations", desc: "Discussions rooted in clarity, purpose, and sovereignty." },
  { title: "Wins & Reflections", desc: "A space to share your progress without performance." },
  { title: "Guided Orientation", desc: "Posts that help you understand where you are in the pathway." },
  { title: "The Return™ Invitations", desc: "Gentle, cinematic invitations to begin the identity work." },
  { title: "A Clean, Quiet Environment", desc: "No noise. No chaos. No overwhelm. Just clarity." },
];

const forYouIf = [
  "You feel disconnected",
  "You feel like you've drifted",
  "You want clarity",
  "You want resonance",
  "You want to be around people who \"get it\"",
  "You want to ease into the work",
  "You want belonging before transformation",
];

const naturallyCalledToward = ["The Return™", "The Purpose Method™", "The Trilogy™", "The Circle™"];
const homeBase = ["Reflect", "Reconnect", "Remember", "Realign", "Return"];

export function TheBelongingRoomPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="br-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Community</p>
          <h1 id="br-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">The Belonging Room</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p className="font-medium text-primary">Welcome to The Belonging Room</p>
            <p>A space for identity, clarity, resonance, and return.</p>
            <p>This is where you begin if you want belonging before transformation: conversation before commitment, clarity before direction, resonance before action.</p>
            <p>The Belonging Room is the warm-up container of the Sovereign Identity Ecosystem™.<br />It is where people reconnect with themselves through community, reflection, and identity-rooted conversation.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — faceless silhouettes in soft golden circle of light */}
      </section>

      {/* What it is / Why belonging matters */}
      <section aria-labelledby="br-what-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="br-what-heading" className="font-display text-h1 font-medium text-primary">What The Belonging Room Is</h2>
            <p className="font-body text-body text-secondary">The Belonging Room is:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whatItIs.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>It is not a hype group.<br />It is not a motivational space.<br />It is not a therapy circle.<br />It is not a place for venting or emotional dumping.</p>
            </div>
            <p className="font-body text-body text-primary font-medium">It is a sovereign identity environment: clean, grounded, intentional.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">Why Belonging Matters</h2>
            <p className="font-body text-body text-secondary">Before people can transform, they need to feel:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {["Safe", "Seen", "Understood", "Grounded", "Connected", "Oriented"].map((item) => (
                <li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="font-body text-body text-secondary/70">Belonging is not emotional comfort.<br />Belonging is identity recognition.</p>
            <div className="space-y-2 font-body text-body text-secondary">
              <p>When people feel recognized, they open.<br />When they open, they reflect.<br />When they reflect, they return.<br />When they return, they transform.</p>
            </div>
            <p className="font-body text-body text-primary font-medium">Belonging is the beginning of identity work.</p>
          </motion.div>
        </div>
      </section>

      {/* What you'll find inside */}
      <section aria-labelledby="br-inside-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="br-inside-heading" className="font-display text-h1 font-medium text-primary">What You'll Experience Inside</h2>
            <p className="font-body text-body text-secondary">Inside The Belonging Room, you'll find:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouFind.map((item) => (
              <motion.div key={item.title} variants={staggerChildVariants} className="p-6 bg-surface border border-secondary/10 rounded-sm space-y-2">
                <p className="font-body font-medium text-primary">{item.title}</p>
                <p className="font-body text-body text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — golden geometric circle symbol */}
      </section>

      {/* Is / Is not + Tone */}
      <section aria-labelledby="br-not-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="br-not-heading" className="font-display text-h1 font-medium text-primary">What The Belonging Room Is Not</h2>
            <p className="font-body text-body text-secondary">To protect the identity environment, the Belonging Room is NOT:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {whatItIsNot.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-primary font-medium">This is a sovereign space, not a social feed.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Tone of the Room</h2>
            <p className="font-body text-body text-secondary">The tone is:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {tone.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">People feel safe here because the tone is consistent.</p>
          </motion.div>
        </div>
      </section>

      {/* Structure */}
      <section aria-labelledby="br-structure-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <h2 id="br-structure-heading" className="font-display text-h1 font-medium text-primary">The Structure of the Room</h2>
            <p className="font-body text-body text-secondary">The Belonging Room is organized into:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {structure.map((sec) => (
              <motion.div key={sec.section} variants={staggerChildVariants} className="p-6 bg-surface border border-secondary/10 rounded-sm space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">{sec.section}</p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  {sec.items.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-8 font-body text-body text-secondary/70">
            This structure keeps the room clean and intentional.
          </motion.p>
        </div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby="br-who-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="br-who-heading" className="font-display text-h1 font-medium text-primary">Who The Belonging Room Is For</h2>
          <p className="font-body text-body text-secondary">This space is for you if:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {forYouIf.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
          </ul>
          <p className="font-body text-body text-primary">If you're not ready for a program yet, this is your place.</p>
        </motion.div>
      </section>

      {/* First step + Home base + CTA */}
      <section aria-labelledby="br-first-step-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 id="br-first-step-heading" className="font-display text-h1 font-medium text-primary">The Belonging Room Is the First Step</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>If you're unsure where to begin, start here.</p>
              <p>This is the soft landing.<br />The warm entry.<br />The place where identity begins to wake up.</p>
              <p>From here, you'll naturally feel called toward:</p>
            </div>
            <ul className="space-y-2 font-body text-body text-secondary">
              {naturallyCalledToward.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">But you don't need to rush.<br />You don't need to decide today.</p>
            <p className="font-body text-body text-secondary">Just enter the room.</p>
            <ButtonPrimary href="/start-here">Join The Belonging Room</ButtonPrimary>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Belonging Room Is Your Home Base</h2>
            <p className="font-body text-body text-secondary">This is where you come to:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {homeBase.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">It is the beginning of your identity journey: the place where you feel seen before you ever take your first step.</p>
            <ButtonGhost href="/the-return">Begin The Return™</ButtonGhost>
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — soft golden circle of light on matte black */}
      </section>
    </>
  );
}
