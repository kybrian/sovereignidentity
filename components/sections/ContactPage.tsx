"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainerVariants,
  staggerChildVariants,
} from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { useState } from "react";

function ContactForm() {
  const [reason, setReason] = useState("");

  return (
    <form
      className="space-y-6 max-w-xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block font-body text-label uppercase tracking-[0.16em] text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:border-tertiary transition-colors duration-150"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block font-body text-label uppercase tracking-[0.16em] text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:border-tertiary transition-colors duration-150"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="reason" className="block font-body text-label uppercase tracking-[0.16em] text-secondary">
          What brought you here?
        </label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:border-tertiary transition-colors duration-150 appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-secondary/40">Select</option>
          <option value="drift">Identity Drift</option>
          <option value="reconstruction">Identity Reconstruction</option>
          <option value="direction">Identity Direction</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block font-body text-label uppercase tracking-[0.16em] text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-surface border border-secondary/30 rounded-sm px-4 py-3 font-body text-body text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-tertiary focus-visible:border-tertiary transition-colors duration-150 resize-none"
        />
      </div>

      <div className="pt-4 flex justify-center">
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
      {/* SECTION 1 — IDENTITY OPENING */}
      <section aria-labelledby="opening-heading" className="bg-neutral pt-48 pb-32 px-6 md:px-16 border-b border-secondary/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="space-y-8">
            <h1 id="opening-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-primary">
              When You Reach Out, You're Not Contacting a Brand.<br />
              <span className="text-tertiary">You're Entering the House.</span>
            </h1>
            <div className="space-y-4 font-body text-body text-secondary">
              <p>
                Most contact pages feel transactional — a place to submit a question, a place to request information, a place to "get in touch."
              </p>
              <p>This is not that.</p>
              <p>
                This page is the doorway into a sovereign space built for identity reconstruction, purpose restoration, and the return to who you were designed to be.
              </p>
              <p className="text-primary font-medium">
                When you reach out, you're not sending a message into the void.<br />
                You're stepping into the House.
              </p>
            </div>
          </motion.div>

          {/* IMAGE SLOT 01 — DOORWAY */}
          <motion.div variants={scrollRevealVariants} initial="hidden" animate="visible" className="relative aspect-[16/9] md:aspect-[3/4] w-full">
            <div className="absolute inset-0 bg-surface border border-secondary/20 flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute top-0 bottom-0 w-2/3 border-x border-tertiary/10 bg-gradient-to-b from-transparent via-tertiary/5 to-tertiary/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — WHY PEOPLE CONTACT THE HOUSE */}
      <section aria-labelledby="why-heading" className="bg-surface py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mb-16 space-y-6">
            <h2 id="why-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              People Reach Out for One of Three Reasons.
            </h2>
            <p className="font-body text-body text-secondary max-w-prose mx-auto">
              Every message that enters this House comes from one of three places:
            </p>
          </motion.div>

          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "1",
                title: "Identity Drift",
                desc: "Something feels off. Something feels misaligned. Something feels disconnected from who you truly are."
              },
              {
                num: "2",
                title: "Identity Reconstruction",
                desc: "You're ready to rebuild. You're ready to return. You're ready to step into the identity your future clients, family, and calling have been waiting for."
              },
              {
                num: "3",
                title: "Identity Direction",
                desc: "You know who you are — but you need clarity on where you're going next."
              }
            ].map((reason) => (
              <motion.div key={reason.num} variants={staggerChildVariants} className="space-y-4">
                <div className="font-display text-2xl text-tertiary border-b border-secondary/20 pb-4">0{reason.num}</div>
                <h3 className="font-body text-lg font-bold text-primary tracking-wide uppercase">{reason.title}</h3>
                <p className="font-body text-body text-secondary">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center mt-16">
            <p className="font-body text-body text-primary font-medium">
              If you're here, you're in one of these three places.<br />
              And that means you're ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — HOW TO CONTACT THE HOUSE */}
      <section aria-labelledby="how-heading" className="bg-neutral py-24 md:py-32 px-6 md:px-16 border-y border-secondary/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* IMAGE SLOT 03 — TWO PATHWAYS */}
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="relative aspect-[16/9] w-full order-2 md:order-1">
             <div className="absolute inset-0 border border-secondary/20 flex flex-col justify-center items-center">
                <div className="flex gap-8 w-full px-8 h-full py-12">
                   <div className="flex-1 border-r border-tertiary/20 bg-gradient-to-t from-tertiary/5 to-transparent" />
                   <div className="flex-1 border-l border-tertiary/20 bg-gradient-to-t from-tertiary/5 to-transparent" />
                </div>
             </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-8 order-1 md:order-2">
            <h2 id="how-heading" className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
              There Are Two Ways to Reach Out.
            </h2>
            <div className="space-y-6 font-body text-body text-secondary">
              <p>
                This House is sovereign. It is intentional. It is structured.
              </p>
              <p>So there are only two ways to enter:</p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                   <span className="text-primary font-bold">1.</span>
                   <div>
                      <p className="text-primary font-medium">Direct Message</p>
                      <p>For questions, clarity, or next steps.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <span className="text-primary font-bold">2.</span>
                   <div>
                      <p className="text-primary font-medium">Identity Application</p>
                      <p>For those ready to begin their return.</p>
                   </div>
                </div>
              </div>
              <p className="pt-2 text-primary font-medium">
                Both paths lead to the same place — alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — CONTACT FORM */}
      <section aria-labelledby="form-heading" className="bg-surface py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="text-center space-y-6 mb-16">
            <h2 id="form-heading" className="font-display text-4xl md:text-5xl font-medium text-tertiary">
              Step Into the House.
            </h2>
            <div className="space-y-4 max-w-prose mx-auto font-body text-body text-secondary">
              <p>
                Fill out the form below. Share what brought you here. Share what you're ready to rebuild. Share what you're stepping into.
              </p>
              <p className="text-primary font-medium">
                This is not a support ticket. This is not a customer service form. This is the first step in your return.
              </p>
            </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — FINAL INVITATION */}
      <section aria-label="Final Invitation" className="bg-neutral py-24 md:py-32 px-6 md:px-16 border-t border-secondary/10">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-primary">
            Your Message Is the First Step in Your Return.
          </h2>
          <div className="space-y-4 font-body text-body text-secondary max-w-prose mx-auto">
            <p>
              When you reach out, you're not asking for help.
            </p>
            <p className="text-primary font-medium">
              You're declaring identity. You're declaring alignment. You're declaring sovereignty.
            </p>
            <p>
              Your return begins with a single message.
            </p>
          </div>
          <div className="pt-6">
            <ButtonPrimary href="/the-return">Enter the House</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
