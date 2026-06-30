"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function JournalPopupPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 md:pb-32 bg-neutral overflow-hidden">
        {/* IMAGE SLOT 01 — Cinematic black-gold journal cover */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[40%] h-[70%] border-[2px] border-tertiary/20 bg-gradient-to-br from-tertiary/5 via-neutral to-neutral shadow-[0_0_50px_rgba(201,161,90,0.1)] flex items-center justify-center">
            <div className="w-[80%] h-[90%] border border-tertiary/10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral mix-blend-multiply" />
        </div>

        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            A cinematic identity briefing delivered weekly.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary">
            The Sovereign Identity Journal™
          </h1>
          <div className="w-16 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
            <p>This is not a newsletter. This is not a blog. This is not content.</p>
            <p className="text-primary font-medium">This is a sovereign publication — a masculine, geometric, identity-anchored briefing designed to reinforce your return.</p>
          </div>
          <div className="pt-8">
            <ButtonPrimary href="/journal">Get the Journal</ButtonPrimary>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WHY THE POP-UP EXISTS */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16 border-t border-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Identity Requires Repetition</h2>
            <div className="font-body text-body text-secondary max-w-prose mx-auto space-y-4">
              <p>Identity is not a one-time event. Identity is a rhythm.</p>
              <p>The Journal Pop-Up ensures:</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-col items-center gap-6 font-display text-2xl md:text-3xl text-primary font-medium mb-16">
            {["Consistency", "Clarity", "Grounding", "Alignment", "Sovereignty"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants}>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">Identity becomes posture through repetition.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU RECEIVE */}
      <section className="bg-neutral py-24 md:py-36 px-6 md:px-16 border-y border-secondary/10">
        <Divider className="mb-24 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-tertiary">Weekly Identity Reinforcement</h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">Every entry strengthens:</p>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display text-xl md:text-2xl text-primary font-medium mb-16">
            {["Identity", "Purpose", "Direction", "Emotional clarity", "Decision-making", "Sovereignty"].map((item, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="flex items-center gap-8">
                <span>{item}</span>
                {idx < 5 && <span className="text-tertiary/40">•</span>}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <p className="font-body text-body text-primary font-medium uppercase tracking-[0.16em]">This is identity maintenance in written form.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-10">
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.1] text-primary">Begin Reading</h2>
          <div className="pt-4">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
