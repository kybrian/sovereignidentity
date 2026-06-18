"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroMarkVariants,
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Divider } from "@/components/ui/Divider";
import { Card } from "@/components/ui/Card";
import { useState } from "react";

const useFor = [
  "General questions",
  "Program inquiries",
  "Support requests",
  "Speaking invitations",
  "Collaboration opportunities",
  "Press or media inquiries",
];

const beforeSend = [
  { condition: "If you're unsure where to begin", start: "Start with The Return™", href: "/the-return" },
  { condition: "If you want clarity or direction", start: "Start with The Purpose Method™", href: "/programs#purpose-method" },
  { condition: "If you want long‑term transformation", start: "Explore The Trilogy™", href: "/programs#trilogy" },
  { condition: "If you want ongoing identity evolution", start: "Join The Circle™", href: "/programs#circle" },
  { condition: "If you want community first", start: "Enter The Belonging Room", href: "/programs#belonging-room" },
];

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
          <option value="general">General Question</option>
          <option value="programs">Program Inquiry</option>
          <option value="support">Support</option>
          <option value="speaking">Speaking Invitation</option>
          <option value="collaboration">Collaboration</option>
          <option value="press">Press / Media</option>
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
        <ButtonPrimary type="submit">Send Message</ButtonPrimary>
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
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-20 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            Contact
          </p>
          <h1
            id="contact-hero-heading"
            className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary"
          >
            Get In Touch
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            If you have a question, need support, or want to connect with the
            Sovereign Identity team, you're in the right place.
          </p>
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            This page gives you the simplest, cleanest way to reach out, without
            noise, without confusion, without unnecessary steps.
          </p>
        </motion.div>

        {/* TODO: imagery pending from client — minimalist golden contact icon */}
      </section>

      {/* Form + sidebar */}
      <section
        aria-labelledby="contact-form-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Form col */}
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <h2 id="contact-form-heading" className="font-display text-h1 font-medium text-primary">
              How to Contact Us
            </h2>
            <p className="font-body text-body text-secondary">
              You can reach the Sovereign Identity team through the form below.
            </p>
            <p className="font-body text-body text-secondary">Use this form for:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {useFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Divider className="my-8" />
            <ContactForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 space-y-4">
              <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                Response Time
              </p>
              <p className="font-display text-[1.2rem] font-medium text-primary">
                48 hours (Monday–Friday)
              </p>
              <div className="space-y-2 font-body text-body text-secondary/70">
                <p>All messages are read.</p>
                <p>All messages are handled with care.</p>
                <p>All messages receive a clear, grounded response.</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Before you send */}
      <section
        aria-labelledby="before-send-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-10 space-y-3"
          >
            <h2 id="before-send-heading" className="font-display text-h1 font-medium text-primary">
              Before You Send a Message
            </h2>
            <p className="font-body text-body text-secondary">
              Here's how to know where your question belongs:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {beforeSend.map((item) => (
              <motion.div key={item.condition} variants={staggerChildVariants}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-secondary/10">
                  <p className="font-body text-body text-secondary">{item.condition}</p>
                  <ButtonGhost href={item.href} className="flex-shrink-0 self-start sm:self-center">
                    {item.start}
                  </ButtonGhost>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <ButtonGhost href="/programs">Explore the Programs</ButtonGhost>
          </div>
        </div>
      </section>

      {/* Speaking + Collaborations + Support */}
      <section
        aria-label="Speaking, collaborations, and support"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerChildVariants} className="space-y-4">
              <h2 className="font-display text-[1.3rem] font-medium text-primary">
                Speaking &amp; Media
              </h2>
              <p className="font-body text-body text-secondary">
                For interviews, podcasts, panels, or speaking invitations, include:
              </p>
              <ul className="space-y-2 font-body text-body text-secondary/70">
                {["Event details", "Audience", "Format", "Date", "Topic or angle"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary/40 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-body text-secondary/70">
                We review all requests and respond with clarity.
              </p>
            </motion.div>

            <motion.div variants={staggerChildVariants} className="space-y-4">
              <h2 className="font-display text-[1.3rem] font-medium text-primary">
                Collaborations
              </h2>
              <p className="font-body text-body text-secondary">
                If you're interested in collaborating, partnering, or integrating
                identity work into your organization, include:
              </p>
              <ul className="space-y-2 font-body text-body text-secondary/70">
                {["Your organization", "Your goals", "Your timeline", "Your vision for the collaboration"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary/40 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-body text-secondary/70">
                We evaluate all opportunities based on alignment and impact.
              </p>
            </motion.div>

            <motion.div variants={staggerChildVariants} className="space-y-4">
              <h2 className="font-display text-[1.3rem] font-medium text-primary">
                Support
              </h2>
              <p className="font-body text-body text-secondary">If you need help with:</p>
              <ul className="space-y-2 font-body text-body text-secondary/70">
                {["Program access", "Billing", "Login issues", "Account questions", "Technical support"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary/40 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-body text-secondary/70">
                Use the contact form and select{" "}
                <span className="text-secondary font-medium">Support</span> from
                the dropdown.
              </p>
              <p className="font-body text-body text-secondary/70">
                We'll take care of you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tone + message matters */}
      <section
        aria-label="The tone of our communication"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              The Tone of Our Communication
            </h2>
            <p className="font-body text-body text-secondary">Our communication is:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {["Clear", "Direct", "Respectful", "Grounded", "Identity‑rooted", "Professional", "Sovereign"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary/40 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>We do not use hype.<br />We do not use pressure.<br />We do not use emotional manipulation.</p>
            </div>
            <p className="font-body text-body text-primary">You will always receive clarity.</p>
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="font-display text-h1 font-medium text-primary">
              Your Message Matters
            </h2>
            <p className="font-body text-body text-secondary">
            Whether you're reaching out with a question, a request, or a reflection:
            your message matters.
            </p>
            <div className="space-y-2 font-body text-body text-secondary">
              <p>We read every message.</p>
              <p>We respond to every message.</p>
              <p>We value every message.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
