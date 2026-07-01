"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";

export function SitemapPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  const sitemapGroups = [
    {
      title: "Primary Architecture",
      links: [
        { label: "Home", href: "/" },
        { label: "About the House", href: "/about" },
        { label: "The Founder", href: "/founder" },
        { label: "Programs Overview", href: "/programs" },
        { label: "The Pathway", href: "/the-pathway" },
        { label: "The House", href: "/the-house" },
        { label: "House Map", href: "/house-map" },
        { label: "The Founder OS", href: "/founder-os" },
      ]
    },
    {
      title: "The Four Rooms",
      links: [
        { label: "The Return™", href: "/the-return" },
        { label: "The Purpose Method™", href: "/the-purpose-method" },
        { label: "The Trilogy™", href: "/the-trilogy" },
        { label: "The Sovereign Identity Circle™", href: "/the-circle" },
      ]
    },
    {
      title: "Identity Systems & Insight",
      links: [
        { label: "The Belonging Room™", href: "/the-belonging-room" },
        { label: "The Journal", href: "/journal" },
        { label: "Identity Lens", href: "/identity-lens" },
        { label: "Identity Philosophy", href: "/identity-philosophy" },
        { label: "Identity Statement", href: "/identity-statement" },
        { label: "Not Mindset Work", href: "/not-mindset-work" },
        { label: "Identity Completion", href: "/completion" },
        { label: "Enter the House", href: "/entry" },
      ]
    },
    {
      title: "Support & Institutional",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "/support" },
        { label: "FAQ", href: "/faq" },
        { label: "Start Here", href: "/start-here" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Legal & Policy Information", href: "/legal" },
      ]
    }
  ];

  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-24 bg-neutral border-b border-secondary/10">
        <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-tertiary">
            Ecosystem Directory
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">
            Sitemap
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      <section className="bg-surface py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {sitemapGroups.map((group, idx) => (
              <motion.div key={idx} variants={staggerChildVariants} className="space-y-6">
                <h2 className="font-display text-2xl font-medium text-tertiary pb-4 border-b border-secondary/20">
                  {group.title}
                </h2>
                <ul className="space-y-4 font-body text-body">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="text-secondary hover:text-primary transition-colors duration-150">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
