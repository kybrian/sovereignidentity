"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

export function LegalPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="legal-hero-heading" className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Legal</p>
          <h1 id="legal-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">
            Legal &amp; Policy Information
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- LEGAL OVERVIEW */}
      <section aria-label="Legal Overview" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 className="font-display text-h1 font-medium text-primary">Legal Overview</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              This page provides clear, direct, transparent information about the legal structure of the Sovereign Identity Ecosystem™.
            </p>
            <p>
              No complexity.<br />
              No hidden language.<br />
              No confusion.
            </p>
            <p className="pt-2">Just clarity.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- TERMS OF SERVICE */}
      <section aria-labelledby="terms-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="terms-heading" className="font-display text-h1 font-medium text-primary">Terms of Service</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>The Terms of Service outline:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>How programs are delivered</li>
              <li>How content is accessed</li>
              <li>What you can expect</li>
              <li>What is included</li>
              <li>What is not included</li>
              <li>Your responsibilities</li>
              <li>Our responsibilities</li>
            </ul>
            <p className="pt-2">
              Identity work is educational and developmental.<br />
              It is not therapy, counseling, or medical treatment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- PRIVACY POLICY */}
      <section aria-labelledby="privacy-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="privacy-heading" className="font-display text-h1 font-medium text-primary">Privacy Policy</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p className="font-medium text-primary">Your privacy matters.</p>
            <p>The Privacy Policy explains:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>What information is collected</li>
              <li>How it is used</li>
              <li>How it is protected</li>
              <li>How your data is handled</li>
              <li>Your rights regarding your information</li>
            </ul>
            <p className="pt-2">Your information is treated with confidentiality and respect.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 --- DISCLAIMERS */}
      <section aria-labelledby="disclaimers-heading" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="disclaimers-heading" className="font-display text-h1 font-medium text-primary">Disclaimers</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Identity work is not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Therapy</li>
              <li>Counseling</li>
              <li>Medical treatment</li>
              <li>Crisis support</li>
              <li>Mental health intervention</li>
            </ul>
            <p className="pt-2">No therapeutic, medical, or clinical claims are made.</p>
            <p>This work is educational, structural, and identity‑based.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 --- REFUND POLICY */}
      <section aria-labelledby="refund-heading" className="bg-surface py-24 md:py-36 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="refund-heading" className="font-display text-h1 font-medium text-primary">Refund Policy</h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p className="font-medium text-primary">All sales are final unless otherwise stated.</p>
            <p>This protects:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Program integrity</li>
              <li>Identity sequencing</li>
              <li>The structure of the ecosystem</li>
              <li>The experience of all participants</li>
            </ul>
            <p className="pt-2">
              If a program includes a specific refund window, it will be clearly stated at checkout.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 --- CTA */}
      <section aria-label="Call to Action" className="bg-neutral py-24 md:py-36 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto text-center space-y-8">
          <div className="pt-4">
            <ButtonPrimary href="#documents">View Full Legal Documents</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
