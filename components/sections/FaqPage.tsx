"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

type FaqItem = { q: string; a: string | string[] };

const sections: Array<{ title: string; items: FaqItem[] }> = [
  {
    title: "Identity Work",
    items: [
      {
        q: "What is identity work?",
        a: [
          "Identity work is upstream transformation.",
          "It changes the source, not the symptoms.",
          "Identity shapes: Mindset, Emotions, Behavior, Decisions, Direction, Purpose.",
          "When identity becomes clear, everything downstream stabilizes.",
        ],
      },
      {
        q: "How is this different from mindset work?",
        a: [
          "Mindset is downstream. Identity is upstream.",
          "Mindset changes thoughts. Identity changes the one who thinks.",
          "This work is structural, not emotional.",
        ],
      },
    ],
  },
  {
    title: "Programs",
    items: [
      {
        q: "Who is The Return™ for?",
        a: "People who feel misaligned, disconnected, or drifting, and want to rebuild from identity.",
      },
      {
        q: "Who is this NOT for?",
        a: "People seeking motivation, emotional coaching, or quick fixes.",
      },
      {
        q: "Do I need experience?",
        a: "No. Identity is your starting point.",
      },
    ],
  },
  {
    title: "Logistics",
    items: [
      {
        q: "How do I know where to begin?",
        a: "Start with The Return™. It is the threshold of identity work.",
      },
      {
        q: "Can I join programs out of order?",
        a: "No. The ecosystem is sequential for a reason.",
      },
      {
        q: "Are there refunds?",
        a: "All sales are final unless otherwise stated.",
      },
    ],
  },
];

export function FaqPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="faq-hero-heading" className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Support</p>
          <h1 id="faq-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">Frequently Asked Questions</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-2 font-body text-body text-secondary max-w-prose mx-auto">
            <p>
              This page exists to give you clean, grounded answers to the most common questions about identity work, programs, and the Sovereign Identity Ecosystem™.
            </p>
            <p className="pt-2">
              No fluff.<br />
              No hype.<br />
              Just clarity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ sections */}
      {sections.map((sec, si) => (
        <section key={sec.title} aria-labelledby={`faq-section-${si}`} className={`py-24 md:py-36 px-6 md:px-16 ${si % 2 === 0 ? "bg-surface" : "bg-neutral"}`}>
          {si > 0 && <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />}
          <div className="max-w-4xl mx-auto">
            <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-10">
              <h2 id={`faq-section-${si}`} className="font-display text-h2 font-medium text-primary">{sec.title}</h2>
            </motion.div>
            <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-0">
              {sec.items.map((item, i) => (
                <motion.div key={i} variants={staggerChildVariants} className="py-6 border-b border-secondary/10 last:border-b-0">
                  <h3 className="font-body font-medium text-primary mb-3">{item.q}</h3>
                  {Array.isArray(item.a) ? (
                    <div className="space-y-2 font-body text-body text-secondary">
                      {item.a.map((line) => (<p key={line}>{line}</p>))}
                    </div>
                  ) : (
                    <p className="font-body text-body text-secondary">{item.a}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section aria-label="Call to Action" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="/programs">Explore Programs</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
