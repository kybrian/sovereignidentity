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

export function TheReturnPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* ⭐ SECTION 1 — THE HERO (THE INTERRUPTION) */}
      <section
        aria-labelledby="return-hero-heading"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 bg-neutral overflow-hidden"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-3xl mx-auto relative z-10"
        >
          <h1
            id="return-hero-heading"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] text-primary"
          >
            You don't need a new life.<br />
            You need to return to yourself.
          </h1>
          <div className="w-10 h-px bg-tertiary/60 mx-auto" />
          <p className="font-body text-[1.1rem] leading-relaxed text-secondary max-w-prose mx-auto">
            The Return™ is a 6–8 week identity reconstruction for the man who is done performing and ready to rebuild from the inside out.
          </p>
          <div className="pt-4">
            <ButtonPrimary href="#investment">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>
        {/* Visual Notes: Black background, Gold geometric lines, Faceless silhouette, Cinematic shadow */}
      </section>

      {/* ⭐ SECTION 2 — THE FRACTURE (IDENTITY DIAGNOSIS) */}
      <section
        aria-label="The Fracture"
        className="bg-surface py-28 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-8"
        >
          <div className="space-y-2">
            <h2 className="font-display text-h1 font-medium text-primary">
              You are not out of discipline.<br />
              You are out of identity.
            </h2>
          </div>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "You execute, but you feel hollow.",
              "You lead, but you feel misaligned.",
              "You succeed, but you feel disconnected.",
              "You move fast, but you go nowhere.",
              "You perform, but you don't belong to yourself."
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-tertiary/60 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body font-medium text-primary border-l-2 border-tertiary/60 pl-4 py-1 italic">
            A man without identity leaks authority from every direction.
          </p>
        </motion.div>
      </section>

      {/* ⭐ SECTION 3 — THE TRUTH (THE REAL PROBLEM) */}
      <section
        aria-label="The Truth"
        className="bg-neutral py-28 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4 text-center max-w-prose mx-auto"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              Your problem is not productivity.<br />
              Your problem is presence.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4">
                <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/60">
                  The Fragmented Man
                </p>
                <ul className="space-y-2 font-body text-body text-secondary">
                  <li className="flex items-start gap-3"><span className="text-tertiary/40 flex-shrink-0">•</span><span>reacts</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary/40 flex-shrink-0">•</span><span>overthinks</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary/40 flex-shrink-0">•</span><span>collapses under pressure</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary/40 flex-shrink-0">•</span><span>performs for approval</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary/40 flex-shrink-0">•</span><span>chases momentum</span></li>
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={staggerChildVariants}>
              <Card className="p-8 h-full space-y-4 border-tertiary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent pointer-events-none" />
                <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary relative z-10">
                  The Sovereign Man
                </p>
                <ul className="space-y-2 font-body text-body text-secondary relative z-10">
                  <li className="flex items-start gap-3"><span className="text-tertiary flex-shrink-0">•</span><span>responds</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary flex-shrink-0">•</span><span>sees clearly</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary flex-shrink-0">•</span><span>stands still in crisis</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary flex-shrink-0">•</span><span>acts from identity</span></li>
                  <li className="flex items-start gap-3"><span className="text-tertiary flex-shrink-0">•</span><span>generates momentum</span></li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="font-body text-[1.1rem] font-medium text-primary">
              Identity precedes execution.<br />
              Presence precedes performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 4 — THE SOLUTION (THE RETURN™ FRAMEWORK) */}
      <section
        aria-label="The Solution"
        className="bg-surface py-28 md:py-36 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              The Return™ Framework
            </h2>
            <p className="font-body text-body text-secondary">
              The Return™ is built on three structural movements:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                n: "1",
                title: "Identity Reconstruction",
                desc: "You strip the borrowed identity and rebuild the internal architecture that determines your decisions, discipline, and direction.",
              },
              {
                n: "2",
                title: "Alignment Calibration",
                desc: "You eliminate drift, collapse cognitive noise, and restore internal order.",
              },
              {
                n: "3",
                title: "Embodied Presence",
                desc: "You deploy your life with clarity, authority, and grounded masculine presence.",
              },
            ].map((movement) => (
              <motion.div key={movement.n} variants={staggerChildVariants} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-tertiary/30 text-tertiary font-display text-[1.2rem]">
                  {movement.n}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-[1.4rem] font-medium text-primary">{movement.title}</h3>
                  <p className="font-body text-body text-secondary">{movement.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-16"
          >
            <p className="font-body font-medium text-primary border-l-2 border-tertiary/60 pl-4 py-1 italic">
              You do not rise by adding more.<br />
              You rise by returning to what is essential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 5 — THE CURRICULUM */}
      <section
        aria-label="The Curriculum"
        className="bg-neutral py-28 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              The 6–8 Week Path
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              { week: "Week 1", title: "Identity Baseline", desc: "You confront the fracture and define the man you are returning to." },
              { week: "Week 2", title: "Internal Governance", desc: "You establish psychological order and eliminate drift." },
              { week: "Week 3", title: "Presence Architecture", desc: "You learn to operate without lag, noise, or fragmentation." },
              { week: "Week 4", title: "Alignment Protocols", desc: "You rebuild your internal compass and remove contradictions." },
              { week: "Week 5", title: "Embodied Execution", desc: "You deploy your life with geometric precision." },
              { week: "Week 6", title: "Integration & Continuation", desc: "You lock in the identity and build your next 90-day sovereign plan." },
            ].map((w) => (
              <motion.div key={w.week} variants={staggerChildVariants}>
                <Card className="p-6 h-full space-y-3">
                  <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">{w.week}</p>
                  <p className="font-display text-[1.2rem] font-medium text-primary">{w.title}</p>
                  <p className="font-body text-body text-secondary">{w.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 6 — WHO THIS IS FOR */}
      <section
        aria-label="Who This Is For"
        className="bg-surface py-28 md:py-36 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-[1.6rem] font-medium text-primary">
              The Return™ is for the man who:
            </h2>
            <ul className="space-y-3 font-body text-body text-secondary">
              {[
                "is tired of performing",
                "is tired of drifting",
                "is tired of collapsing under invisible weight",
                "is tired of being everywhere except here",
                "is ready to rebuild from the inside out"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-tertiary/60 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-[1.6rem] font-medium text-primary">
              The Return™ is NOT for:
            </h2>
            <ul className="space-y-3 font-body text-body text-secondary">
              {[
                "men seeking motivation",
                "men seeking shortcuts",
                "men seeking tactics without identity",
                "men unwilling to confront themselves"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 mt-1 flex-shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 7 — WHAT YOU WALK AWAY WITH */}
      <section
        aria-label="What You Walk Away With"
        className="bg-neutral py-28 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 space-y-6 max-w-prose mx-auto"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              What You Walk Away With
            </h2>
            <p className="font-body text-body text-secondary">
              You leave The Return™ with:
            </p>
            <ul className="space-y-3 font-body text-body text-secondary">
              {[
                "A fully mapped Sovereign Identity Framework",
                "A clear internal architecture",
                "A grounded masculine presence",
                "A sovereign content voice",
                "A precise positioning structure",
                "A 90-day identity-anchored execution plan",
                "The clarity to stop second-guessing and start governing"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-tertiary/60 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-6 font-body font-medium text-primary border-l-2 border-tertiary/60 pl-4 py-1 italic">
              You do not become a new man.<br />
              You return to the man you were designed to be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 8 — THE ECOSYSTEM CONNECTION */}
      <section
        aria-label="The Ecosystem Connection"
        className="bg-surface py-28 md:py-36 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <h2 className="font-display text-[1.8rem] font-medium text-primary">
              The Ecosystem Connection
            </h2>
            <p className="font-body text-body text-secondary">
              After The Return™, you may enter:
            </p>
            <div className="flex flex-col gap-4 text-left max-w-2xl mx-auto mt-8">
              {[
                { name: "The Purpose Method™", desc: "Identity → Direction → Embodiment" },
                { name: "The Trilogy™ (12-Month Mastery)", desc: "Alignment → Embodiment → Legacy" },
                { name: "The 10 Courses", desc: "Tactical identity execution" },
                { name: "The Sovereign Circle", desc: "Ongoing identity embodiment" },
                { name: "The Boards", desc: "High-level identity councils" },
              ].map((p) => (
                <div key={p.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-secondary/15 pb-4 last:border-0">
                  <span className="font-body text-[1rem] font-medium text-primary">{p.name}</span>
                  <span className="font-body text-[0.9rem] text-secondary">{p.desc}</span>
                </div>
              ))}
            </div>
            <div className="pt-8 space-y-2">
              <p className="font-body text-[1.1rem] font-medium text-primary">The Return™ is the gateway.</p>
              <p className="font-body text-[1.1rem] font-medium text-primary">The ecosystem is the continuation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ⭐ SECTION 9 & 10 — THE INVESTMENT & CLOSING */}
      <section
        id="investment"
        aria-label="The Investment and Closing"
        className="bg-neutral py-28 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-prose mx-auto text-center space-y-16">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              The Investment
            </h2>
            <p className="font-body text-[1.1rem] font-medium text-primary">
              This is not a transaction.<br />
              This is a declaration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <div className="px-6 py-3 border border-secondary/30 text-secondary uppercase tracking-[0.16em] text-label rounded-sm">
                One-time payment
              </div>
              <div className="px-6 py-3 border border-secondary/30 text-secondary uppercase tracking-[0.16em] text-label rounded-sm">
                Payment plan
              </div>
            </div>
            <div className="pt-8">
              <ButtonPrimary href="/contact">Begin The Return™</ButtonPrimary>
            </div>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-8 pt-12 border-t border-secondary/15"
          >
            <p className="font-display text-[1.5rem] font-medium text-primary leading-tight max-w-xl mx-auto">
              There is a moment in every man's life when he must stop performing and start returning.<br /><br />
              This is that moment.
            </p>
            <ButtonGhost href="/contact">Enter The Return™</ButtonGhost>
          </motion.div>
        </div>
      </section>
    </>
  );
}
