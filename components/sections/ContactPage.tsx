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
import { useState } from "react";

function ContactForm() {
  const [reason, setReason] = useState("");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block font-body text-label uppercase tracking-[0.16em] text-secondary"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary placeholder:text-secondary/40 focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:outline-offset-0 focus-visible:border-tertiary transition-colors duration-150"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block font-body text-label uppercase tracking-[0.16em] text-secondary"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary placeholder:text-secondary/40 focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:outline-offset-0 focus-visible:border-tertiary transition-colors duration-150"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="reason"
          className="block font-body text-label uppercase tracking-[0.16em] text-secondary"
        >
          Reason for Contact
        </label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:outline-offset-0 focus-visible:border-tertiary transition-colors duration-150 appearance-none cursor-pointer"
        >
          <option value="" className="text-secondary/40">Select a reason</option>
          <option value="programs">Program questions</option>
          <option value="pathway">Pathway questions</option>
          <option value="enrollment">Enrollment clarity</option>
          <option value="identity">Identity work questions</option>
          <option value="support">Support with next steps</option>
          <option value="technical">Technical issues</option>
          <option value="general">General inquiries</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block font-body text-label uppercase tracking-[0.16em] text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary placeholder:text-secondary/40 focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:outline-offset-0 focus-visible:border-tertiary transition-colors duration-150 resize-none"
          placeholder="Your message"
        />
      </div>

      <div className="pt-2">
        <ButtonPrimary type="submit">Submit Inquiry</ButtonPrimary>
      </div>
    </form>
  );
}

export function ContactPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-hero-heading"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Contact
          </p>
          <h1
            id="contact-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            Contact
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- CONTACT */}
      <section
        aria-label="Contact"
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
            Identity support, not emotional support.
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              If you have questions about programs, pathways, or identity work, this is the place to reach out.<br />
              This page exists to give you clarity, direction, and support, without overwhelm, without pressure, and without noise.
            </p>
            <p className="pt-2">
              You're not contacting a motivational coach.<br />
              You're contacting an identity institution.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- WHAT TO EXPECT */}
      <section
        aria-labelledby="expect-heading"
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
            <h2 id="expect-heading" className="font-display text-h1 font-medium text-primary">
              What to Expect
            </h2>
            <p className="font-body text-body text-secondary">
              When you reach out, you can expect:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              { n: "1", title: "Clarity", desc: "Your question will be answered directly and cleanly." },
              { n: "2", title: "Professionalism", desc: "You will receive a grounded, structured response." },
              { n: "3", title: "Boundaries", desc: "This is identity work: not therapy, not crisis support, not emotional processing." },
              { n: "4", title: "Direction", desc: "If you're unsure where to begin, you'll be guided to the right program or pathway." },
            ].map((item) => (
              <motion.div key={item.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">{item.n}.</span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">{item.title}</h3>
                  </div>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 --- RESPONSE TIME */}
      <section
        aria-labelledby="response-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="response-heading" className="font-display text-h1 font-medium text-primary">
            Response Time
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p className="font-medium text-primary">
              24–48 hours<br />
              Monday–Friday<br />
              Pacific Time
            </p>
            <p className="pt-2">
              Every message is read.<br />
              Every message is responded to.<br />
              Every message is handled with care and clarity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTIONS 4 & 5 --- WHAT THIS FORM IS FOR / NOT FOR */}
      <section
        aria-labelledby="form-usage-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 id="form-usage-heading" className="font-display text-h1 font-medium text-primary">
              What This Form Is For
            </h2>
            <p className="font-body text-body text-secondary">Use this form for:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {[
                "Program questions",
                "Pathway questions",
                "Enrollment clarity",
                "Identity work questions",
                "Support with next steps",
                "Technical issues",
                "General inquiries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              What This Form Is Not For
            </h2>
            <p className="font-body text-body text-secondary">This form is <span className="font-medium text-primary">not</span> for:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {[
                "Emotional venting",
                "Crisis support",
                "Therapy requests",
                "Personal emergencies",
                "Motivational coaching",
                "Life advice unrelated to identity work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-body text-secondary pt-2">
              This boundary protects both you and the integrity of the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 --- CTA / FORM */}
      <section
        aria-label="Contact Form"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
