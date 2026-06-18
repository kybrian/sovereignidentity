"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";

const categories = [
  {
    n: "1",
    name: "Identity",
    description: "Articles that help you understand who you are, how identity works, why identity is upstream, how identity shapes perception, and how identity influences behavior.",
  },
  {
    n: "2",
    name: "Purpose",
    description: "Articles that help you clarify direction, understand mission, align identity with purpose, remove confusion, and build internal orientation.",
  },
  {
    n: "3",
    name: "Alignment",
    description: "Articles that help you build internal order, reduce noise, strengthen discipline, create consistency, and stabilize your internal world.",
  },
  {
    n: "4",
    name: "Embodiment",
    description: "Articles that help you turn identity into action, build embodied discipline, strengthen physical sovereignty, and live your identity, not just understand it.",
  },
  {
    n: "5",
    name: "Legacy & Sovereignty",
    description: "Articles that help you understand legacy, build identity-based leadership, expand your influence, and live sovereignty as a lifestyle.",
  },
];

const series = [
  { name: "The Identity Letters", description: "Short, grounded reflections on identity." },
  { name: "The Sovereign Essays", description: "Long-form explorations of clarity, purpose, and sovereignty." },
  { name: "The Drift Series", description: "Articles that explain how drift happens and how to end it." },
  { name: "The Return Series", description: "Articles that prepare you for The Return™." },
  { name: "The Purpose Series", description: "Articles that help you understand direction." },
  { name: "The Alignment Series", description: "Articles that help you build internal order." },
  { name: "The Embodiment Series", description: "Articles that help you live your identity." },
  { name: "The Legacy Series", description: "Articles that help you understand impact and continuation." },
];

const howToUse = [
  { n: "1", step: "Start with Identity", desc: "Begin with the articles that explain the lens." },
  { n: "2", step: "Move to Purpose", desc: "Understand direction." },
  { n: "3", step: "Explore Alignment", desc: "Learn how to stabilize your internal world." },
  { n: "4", step: "Read Embodiment", desc: "Turn identity into action." },
  { n: "5", step: "Finish with Legacy", desc: "Understand the long arc of sovereignty." },
];

export function BlogPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="blog-hero-heading"
        className="min-h-[55vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
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
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            The Sovereign Blog
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-2 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Articles on identity, purpose, alignment, embodiment, and sovereignty.</p>
            <p>Clear.<br />Grounded.<br />Practical.<br />Useful.</p>
            <p>
              This is where the philosophy becomes language,
              where the ideas become accessible,
              where the identity work becomes readable, understandable, and applicable.
            </p>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — geometric lines forming abstract S */}
      </section>

      {/* What it's for */}
      <section
        aria-labelledby="blog-for-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="blog-for-heading" className="font-display text-h1 font-medium text-primary">
            What This Blog Is For
          </h2>
          <p className="font-body text-body text-secondary">This blog exists to help you:</p>
          <ul className="space-y-2 font-body text-body text-secondary">
            {[
              "Understand identity work",
              "See the difference between mindset and identity",
              "Learn the Sovereign Identity Pathway™",
              "Explore the philosophy behind the programs",
              "Apply identity principles to your daily life",
              "Build clarity, purpose, and alignment",
              "Strengthen your internal world",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary/40 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-body text-body text-secondary/70">
            <p>This is not a motivational blog.</p>
            <p>This is not a mindset blog.</p>
            <p>This is not a personal diary.</p>
          </div>
          <p className="font-body text-body text-primary font-medium">
            This is a sovereign identity library.
          </p>
        </motion.div>
      </section>

      {/* Five categories */}
      <section
        aria-labelledby="blog-categories-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
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
            <h2 id="blog-categories-heading" className="font-display text-h1 font-medium text-primary">
              The Five Categories of the Blog
            </h2>
            <p className="font-body text-body text-secondary">
            The blog is organized into five core categories, each one aligned
            with the Sovereign Identity Pathway™.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {categories.map((cat) => (
              <motion.div key={cat.n} variants={staggerChildVariants}>
                <Card className="p-7 flex flex-col sm:flex-row gap-6">
                  <span className="font-body text-label text-secondary uppercase tracking-[0.16em] flex-shrink-0">
                    {cat.n}.
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-[1.2rem] font-medium text-primary">
                      {cat.name}
                    </h3>
                    <p className="font-body text-body text-secondary">{cat.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured series */}
      <section
        aria-labelledby="blog-series-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 id="blog-series-heading" className="font-display text-h1 font-medium text-primary">
              Featured Series
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-px"
          >
            {series.map((s) => (
              <motion.div key={s.name} variants={staggerChildVariants}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-5 border-b border-secondary/10">
                  <p className="font-body text-body text-primary font-medium min-w-[200px]">
                    • {s.name}
                  </p>
                  <p className="font-body text-body text-secondary">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <ButtonGhost href="#latest">Read the Latest Articles</ButtonGhost>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section
        aria-labelledby="blog-how-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-prose mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-10 space-y-4"
          >
            <h2 id="blog-how-heading" className="font-display text-h1 font-medium text-primary">
              How to Use This Blog
            </h2>
            <p className="font-body text-body text-secondary">
              This is the same sequence as the Sovereign Identity Pathway™.
            </p>
          </motion.div>

          <motion.ol
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {howToUse.map((item) => (
              <motion.li key={item.n} variants={staggerChildVariants} className="flex items-start gap-5">
                <span className="font-body text-label text-secondary uppercase tracking-[0.16em] flex-shrink-0 mt-1">
                  {item.n}.
                </span>
                <div className="space-y-1">
                  <p className="font-body text-body text-primary font-medium">{item.step}</p>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Closing */}
      <section
        aria-label="The blog is your library"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            The Blog Is Your Library
          </h2>
          <div className="space-y-2 font-body text-body text-secondary">
            <p>A place to think.<br />A place to reflect.<br />A place to understand.<br />A place to grow.<br />A place to return.</p>
          </div>
          <p className="font-body text-body text-secondary/70">
            But the transformation happens in the programs.
          </p>
          <div className="pt-4">
            <ButtonGhost href="/programs">Explore the Programs</ButtonGhost>
          </div>
        </motion.div>
      </section>
    </>
  );
}
