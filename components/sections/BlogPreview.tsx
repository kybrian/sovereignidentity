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
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            Identity. Purpose. Alignment. Embodiment. Sovereignty.
            <br />
            Clean, grounded, practical articles.
          </p>
          <div className="pt-2">
            <ButtonGhost href="/blog">Read the Blog</ButtonGhost>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
