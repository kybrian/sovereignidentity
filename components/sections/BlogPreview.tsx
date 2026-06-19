"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";

export function BlogPreview() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <section
      aria-labelledby="blog-preview-heading"
      className="bg-neutral py-28 md:py-36 px-6 md:px-16"
    >
      <Divider className="mb-28 md:mb-36 max-w-7xl mx-auto" />
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Blog
          </p>
          <h2
            id="blog-preview-heading"
            className="font-display text-h1 font-medium"
          >
            Clarity without noise.
          </h2>
          <div className="space-y-4 max-w-prose mx-auto">
            <p className="font-body text-body text-secondary">
              Identity. Purpose. Alignment. Embodiment. Sovereignty.
            </p>
            <p className="font-body text-body text-secondary">
              Each article is designed to help you see your life through the lens of identity: not emotion, not mindset, not circumstance.
            </p>
          </div>
          <div className="pt-2">
            <ButtonGhost href="/blog">Read the Blog</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
