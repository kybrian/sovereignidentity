"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { Divider } from "@/components/ui/Divider";

type FaqItem = { q: string; a: string | string[] };

const sections: Array<{ title: string; items: FaqItem[] }> = [
  {
    title: "Section 1: General Questions",
    items: [
      { q: "What is the Sovereign Identity Ecosystem™?", a: "It is a complete identity transformation system built around the Sovereign Identity Pathway™: a structured sequence that moves you from drift to sovereignty." },
      { q: "What makes this different from mindset work?", a: "Mindset is downstream. Identity is upstream. This work focuses on identity, perception, and internal structure: not motivation or positive thinking." },
      { q: "Where should I start?", a: "If you're unsure, start with The Return™. It is the foundation of the entire ecosystem." },
      { q: "Do I need to join The Belonging Room first?", a: "No. It is optional. It exists for people who want community before transformation." },
      { q: "Are these programs therapy?", a: "No. This is identity work: not mental health treatment, counseling, or therapy." },
      { q: "Are these programs religious?", a: "No. They are identity-rooted, not doctrinal." },
      { q: "How long does the transformation take?", a: ["The Return™: 4 weeks", "The Purpose Method™: 4 weeks", "The Trilogy™: 12 months", "The Circle™: ongoing"] },
      { q: "Do I need to complete the programs in order?", a: ["No, but it is recommended:", "1. The Return™", "2. The Purpose Method™", "3. The Trilogy™", "4. The Circle™"] },
      { q: "Can I join The Circle™ without completing The Trilogy™?", a: "Only if you have already done deep identity work. Most people enter after The Trilogy™." },
      { q: "Is this work suitable for beginners?", a: "Yes: The Return™ is designed for beginners. The Trilogy™ and The Circle™ are advanced." },
    ],
  },
  {
    title: "Section 2: Program Questions",
    items: [
      { q: "What is The Return™?", a: "A 4-week identity restoration experience that ends drift and rebuilds your internal foundation." },
      { q: "What is The Purpose Method™?", a: "A 4-week orientation process that clarifies your direction and mission." },
      { q: "What is The Trilogy™?", a: "A 12-month identity transformation through Alignment, Embodiment, and Legacy." },
      { q: "What is The Circle™?", a: "A long-term identity refinement and sovereignty community." },
      { q: "Do I need to be in a certain place in life to join?", a: "No. Identity work applies to every stage of life." },
      { q: "How much time do the programs require each week?", a: ["The Return™: 2–3 hours", "The Purpose Method™: 2–3 hours", "The Trilogy™: 3–5 hours", "The Circle™: 2–3 hours"] },
      { q: "Are the programs self-paced or guided?", a: "They are guided with structured weekly content." },
      { q: "Is there a community for each program?", a: "Yes: each program includes a private, clean, identity-rooted community space." },
      { q: "Can I switch programs later?", a: "Yes: you can move through the ecosystem at your own pace." },
    ],
  },
  {
    title: "Section 3: Payment & Access",
    items: [
      { q: "What payment methods do you accept?", a: "All major credit and debit cards." },
      { q: "Do you offer payment plans?", a: "Yes: for The Trilogy™ and The Circle™." },
      { q: "Do you offer refunds?", a: "Refund policies are listed on each program page." },
      { q: "How long do I have access to the content?", a: ["The Return™: Lifetime", "The Purpose Method™: Lifetime", "The Trilogy™: Lifetime", "The Circle™: As long as you remain a member"] },
      { q: "Can I pause my membership in The Circle™?", a: "Yes: you can pause and resume." },
      { q: "Is my information private?", a: "Yes: your information is kept confidential and secure." },
    ],
  },
  {
    title: "Section 4: The Questions People Think But Don't Ask",
    items: [
      { q: "What if I'm not disciplined enough?", a: "Discipline is built through identity, not willpower. You don't need discipline to start: you build it inside the work." },
      { q: "What if I've failed before?", a: "Failure is a symptom of drift, not identity. The Return™ addresses the root." },
      { q: "What if I don't know my purpose?", a: "That's exactly what The Purpose Method™ is for." },
      { q: "What if I've done other programs and nothing worked?", a: "Most programs focus on mindset. This work focuses on identity: the upstream source." },
      { q: "What if I'm afraid of changing my life?", a: "Fear is normal. Clarity dissolves fear. You gain clarity inside the work." },
      { q: "What if I don't feel ready?", a: "No one feels ready. Readiness emerges through action." },
      { q: "What if I'm overwhelmed?", a: "Start with The Belonging Room. It is the softest entry point." },
    ],
  },
  {
    title: "Section 5: Clarifying Questions",
    items: [
      { q: "How do I access my program after purchase?", a: "You will receive an email with your login details." },
      { q: "What if I don't receive my login email?", a: "Check spam. If it's not there, contact support." },
      { q: "Can I use my phone to access the programs?", a: "Yes: all programs are mobile-friendly." },
      { q: "What if I need help during the program?", a: "Use the contact form or post inside the community." },
      { q: "Can I share my login with someone else?", a: "No: each account is for one person." },
      { q: "What if I fall behind?", a: "You can move at your own pace. There is no penalty for going slower." },
    ],
  },
  {
    title: "Section 6: Program Selection",
    items: [
      {
        q: "Which program is right for me?",
        a: [
          "Disconnected: The Return™",
          "Directionless: The Purpose Method™",
          "Unstable: Trilogy (Alignment)",
          "Ready to grow: Trilogy (Embodiment)",
          "Ready to lead: Trilogy (Legacy)",
          "Ready for mastery: The Circle™",
        ],
      },
      { q: "Can I talk to someone before joining?", a: "Yes: use the contact form and select Program Inquiry." },
    ],
  },
];

export function FaqPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="faq-hero-heading" className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Support</p>
          <h1 id="faq-hero-heading" className="font-display text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.1] text-primary">Frequently Asked Questions</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-2 font-body text-body text-secondary max-w-prose mx-auto">
            <p>Clear answers.<br />Direct guidance.<br />No noise.<br />No confusion.</p>
            <p>This page exists to help you understand the Sovereign Identity Ecosystem™, the programs, and how everything works.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — minimalist golden question mark icon */}
      </section>

      {/* FAQ sections */}
      {sections.map((sec, si) => (
        <section key={sec.title} aria-labelledby={`faq-section-${si}`} className={`py-24 md:py-48 px-6 md:px-16 ${si % 2 === 0 ? "bg-surface" : "bg-neutral"}`}>
          {si > 0 && <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />}
          <div className="max-w-4xl mx-auto">
            <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-10">
              <h2 id={`faq-section-${si}`} className="font-body text-label uppercase tracking-[0.16em] text-secondary">{sec.title}</h2>
            </motion.div>
            <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-0">
              {sec.items.map((item, i) => (
                <motion.div key={i} variants={staggerChildVariants} className="py-6 border-b border-secondary/10 last:border-b-0">
                  <h3 className="font-body font-medium text-primary mb-3">{item.q}</h3>
                  {Array.isArray(item.a) ? (
                    <ul className="space-y-1 font-body text-body text-secondary">
                      {item.a.map((line) => (<li key={line} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{line}</span></li>))}
                    </ul>
                  ) : (
                    <p className="font-body text-body text-secondary">{item.a}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
