"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const experiences = [
  {
    n: "1",
    title: "Calm",
    desc: "A space without noise, pressure, or expectation.",
  },
  {
    n: "2",
    title: "Clarity",
    desc: "Simple, grounded guidance that helps you understand where you are in your identity journey.",
  },
  {
    n: "3",
    title: "Connection",
    desc: "A sense of being witnessed: not judged, not fixed, not pushed.",
  },
  {
    n: "4",
    title: "Identity Resonance",
    desc: "A feeling of \"this is where I belong\" before you take your next step.",
  },
];

export function TheBelongingRoomPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="br-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Community</p>
          <h1 id="br-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            The Belonging Room
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- WHAT THE BELONGING ROOM IS */}
      <section aria-label="What It Is" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">What The Belonging Room Is</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              The Belonging Room is a quiet space inside the Sovereign Identity Ecosystem™, a place designed for people who want to feel seen before they transform.
            </p>
            <p>
              Not everyone is ready to begin identity work immediately.<br />
              Some people need:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>A moment to breathe</li>
              <li>A place to land</li>
              <li>A space to be witnessed</li>
              <li>A sense of resonance</li>
              <li>A feeling of "I'm not alone in this"</li>
            </ul>
            <p className="pt-2">The Belonging Room exists for that purpose.</p>
            <p>
              It is the softest entry point into the ecosystem, a place where you can arrive without pressure, without expectation, and without needing to know your next step.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- WHY THIS SPACE EXISTS */}
      <section aria-labelledby="why-exists-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="why-exists-heading" className="font-display text-h1 font-medium text-primary">Why This Space Exists</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Identity work is upstream.<br />
              It is structural.<br />
              It is sovereign.
            </p>
            <p>But before someone can step into identity work, they often need:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Safety</li>
              <li>Clarity</li>
              <li>Connection</li>
              <li>Understanding</li>
              <li>A sense of belonging</li>
            </ul>
            <p className="pt-2">
              Most people have spent years drifting, disconnected from themselves, disconnected from their identity, disconnected from their internal world.
            </p>
            <p>The Belonging Room gives you a moment to reconnect.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- WHAT YOU EXPERIENCE */}
      <section aria-labelledby="experience-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 md:mb-16 space-y-4">
            <h2 id="experience-heading" className="font-display text-h1 font-medium text-primary">What You Experience</h2>
            <p className="font-body text-body text-secondary">Inside The Belonging Room, you experience:</p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <motion.div key={exp.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">{exp.n}.</span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">{exp.title}</h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    <p>{exp.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-12 text-center">
            <p className="font-body text-body text-secondary">
              This is not a program.<br />
              This is not a commitment.<br />
              This is a room: a place to arrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 --- WHO THIS IS FOR */}
      <section aria-labelledby="who-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="who-heading" className="font-display text-h1 font-medium text-primary">Who This Is For</h2>
          <p className="font-body text-body text-secondary">The Belonging Room is for people who:</p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "Feel disconnected",
              "Feel overwhelmed",
              "Feel unsure where to begin",
              "Want community before commitment",
              "Want conversation before direction",
              "Want resonance before action",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">If you want to feel seen before you transform, this is where you start.</p>
        </motion.div>
      </section>

      {/* SECTION 5 --- CTA */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">
            Join The Sovereignty Digest™
          </h2>
          <p className="font-body text-body text-secondary">
            For those who need belonging and clarity before transformation. Receive structural identity insights directly to your inbox.
          </p>
          <div className="pt-4">
            <ButtonPrimary href="/newsletter">Join The Sovereignty Digest™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
