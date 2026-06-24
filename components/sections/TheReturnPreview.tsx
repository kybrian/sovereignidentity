"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function TheReturnPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section className="bg-surface py-20 md:py-32 px-6 md:px-16 border-y border-secondary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
              The Return™
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1]">
              Six to Eight Weeks. One Direction.<br className="hidden md:block" /> All the Way Back to Yourself.
            </h2>
          </div>

          <p className="font-body text-body text-secondary max-w-prose">
            The Return™ is a structured 6–8 week identity reclamation and content reconstruction engagement built for men who are leaving performance behind and building something sovereign. It is not a course. It is not a coaching container full of accountability check-ins and mood boards. It is a precise, sequential process that strips the borrowed identity, reconstructs the authentic one, and equips the man with a clear content presence that speaks from that new ground — not at it. 
          </p>
          <p className="font-body text-body text-secondary max-w-prose">
            The Return™ produces men who know exactly who they are, exactly what they stand for, and exactly how that stands in public.
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="font-body text-label uppercase tracking-[0.16em] text-tertiary">What You Walk Away With</h3>
            <ul className="space-y-4">
              {[
                "A fully mapped Sovereign Identity Framework: the architecture of who you are, what you stand for, and how you operate — written and owned.",
                "A content voice that is geometrically yours — not borrowed, not mimicked, not optimized for an algorithm at the cost of your authority.",
                "A clear positioning structure: your message, your audience, your offer language — built from the inside out, not from a template.",
                "The internal clarity to stop second-guessing every public move and start building with the confidence of a man who knows the blueprint."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2.5 shrink-0" />
                  <span className="font-body text-body text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 space-y-4">
            <ButtonPrimary href="/the-return">Apply for The Return™</ButtonPrimary>
            <p className="font-body text-[0.8rem] text-secondary italic">
              Applications are reviewed personally. Seats are limited and filled in sequence.
            </p>
          </div>
        </motion.div>

        {/* Keeping abstract visual placeholder */}
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="relative aspect-square w-full max-w-md mx-auto"
        >
          <div className="absolute inset-0 border border-secondary/20 rotate-45" />
          <div className="absolute inset-4 border border-secondary/20 -rotate-12" />
          <div className="absolute inset-8 bg-neutral/50 backdrop-blur-sm border border-secondary/20 flex items-center justify-center">
            <span className="font-display text-4xl text-tertiary opacity-50">I</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
