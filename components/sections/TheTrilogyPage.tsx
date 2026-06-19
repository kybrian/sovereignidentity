"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const arcs = [
  {
    n: "1",
    title: "Alignment (Months 1–4)",
    body: "You align your life with identity.\nYou remove what doesn't belong.\nYou rebuild your internal structure.",
  },
  {
    n: "2",
    title: "Embodiment (Months 5–8)",
    body: "You become the person you were meant to be.\nIdentity becomes action.\nClarity becomes movement.",
  },
  {
    n: "3",
    title: "Legacy (Months 9–12)",
    body: "You build what lasts.\nYou create from identity.\nYou step into sovereignty.",
  },
];

export function TheTrilogyPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="trilogy-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Program</p>
          <h1 id="trilogy-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            The Trilogy™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE JOURNEY */}
      <section aria-label="The Journey" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">The Journey</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              12 months.<br />
              Three arcs.<br />
              One identity.
            </p>
            <p>
              The Trilogy™ is the full identity embodiment journey: the complete transformation from drift to sovereignty.
            </p>
            <p>
              It is not a course.<br />
              It is not a program.<br />
              It is a journey.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- THE THREE ARCS */}
      <section aria-labelledby="three-arcs-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 md:mb-16 space-y-4">
            <h2 id="three-arcs-heading" className="font-display text-h1 font-medium text-primary">The Three Arcs</h2>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {arcs.map((arc) => (
              <motion.div key={arc.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">{arc.n}.</span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">{arc.title}</h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    {arc.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mt-12 text-center">
            <p className="font-body text-body text-secondary">These arcs form the backbone of long-term identity transformation.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 --- WHAT YOU EXPERIENCE */}
      <section aria-label="What You Experience" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">What You Experience</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Inside The Trilogy™, you experience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Deep identity grounding</li>
              <li>Structural clarity</li>
              <li>Emotional neutrality</li>
              <li>Purpose alignment</li>
              <li>Embodied sovereignty</li>
              <li>Long-term transformation</li>
              <li>A stable internal world</li>
            </ul>
            <p className="pt-2">This is identity work at the highest level.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- WHO THIS IS FOR */}
      <section aria-labelledby="who-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="who-heading" className="font-display text-h1 font-medium text-primary">Who This Is For</h2>
          <p className="font-body text-body text-secondary">The Trilogy™ is for people who want:</p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "Long-term transformation",
              "Identity embodiment",
              "Structural change",
              "A sovereign life",
              "A complete identity journey",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">If you want to become the person you were always meant to be, this is your path.</p>
        </motion.div>
      </section>

      {/* SECTION 5 --- CTA */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="#start">Enter The Trilogy™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
