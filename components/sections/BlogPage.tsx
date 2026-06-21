"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const categories = [
  {
    name: "Identity",
    description: "Understanding who you are at the source.",
  },
  {
    name: "Purpose",
    description: "Remembering direction and mission.",
  },
  {
    name: "Alignment",
    description: "Reordering your life around identity.",
  },
  {
    name: "Embodiment",
    description: "Becoming the person you were meant to be.",
  },
  {
    name: "Legacy & Sovereignty",
    description: "Building what lasts.",
  },
];

export function BlogPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="blog-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Sovereign Blog
          </p>
          <h1
            id="blog-hero-heading"
            className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary"
          >
            The Blog
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE BLOG */}
      <section
        aria-label="The Blog"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            Clarity without noise.
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              The blog is where identity becomes practical: where you learn how to see your life through the lens of identity, not emotion, not mindset, not circumstance.
            </p>
            <p>Each article is designed to give you:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clarity</li>
              <li>Structure</li>
              <li>Direction</li>
              <li>Identity grounding</li>
              <li>Practical insight</li>
            </ul>
            <p className="pt-2">
              This is not motivational content.<br />
              This is identity content.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- CATEGORIES */}
      <section
        aria-labelledby="categories-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
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
            <h2 id="categories-heading" className="font-display text-h1 font-medium text-primary">
              Categories
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {categories.map((cat) => (
              <motion.div key={cat.name} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <h3 className="font-display text-[1.3rem] font-medium text-primary">
                    {cat.name}
                  </h3>
                  <p className="font-body text-body text-secondary">
                    {cat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 --- CTA */}
      <section
        aria-label="Call to Action"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
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
