"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { Divider } from "@/components/ui/Divider";

type PolicyItem = { title: string; body: string | string[] };

const sections: Array<{ heading: string; items: PolicyItem[] }> = [
  {
    heading: "Section 1: Terms of Service",
    items: [
      { title: "1. Acceptance of Terms", body: "By accessing or using this website or any program, you agree to these Terms of Service." },
      { title: "2. Intellectual Property", body: "All content, frameworks, systems, names, visuals, and materials are the exclusive property of Express Your Lifestyle™ and may not be copied, distributed, or reproduced without permission." },
      { title: "3. Program Access", body: "Access to programs is granted to the individual purchaser only. Sharing login credentials is not permitted." },
      { title: "4. Payment & Billing", body: "All purchases are final unless otherwise stated on the program page. Payment plans must be completed in full." },
      { title: "5. Conduct", body: ["You agree not to:", "Harass or harm others", "Disrupt community spaces", "Post inappropriate content", "Use the platform for solicitation", "Violations may result in removal without refund."] },
      { title: "6. Modifications", body: "We may update these terms at any time. Continued use of the site indicates acceptance of updated terms." },
    ],
  },
  {
    heading: "Section 2: Privacy Policy",
    items: [
      { title: "1. Information We Collect", body: ["We may collect:", "Name", "Email", "Payment information", "Program activity", "Messages sent through the contact form"] },
      { title: "2. How We Use Your Information", body: ["Your information is used to:", "Provide program access", "Deliver emails and updates", "Improve the user experience", "Respond to support requests"] },
      { title: "3. Data Protection", body: "Your information is stored securely. We do not sell or share your data with third parties for marketing purposes." },
      { title: "4. Cookies", body: "This website may use cookies to improve functionality and performance." },
      { title: "5. Your Rights", body: ["You may request:", "Access to your data", "Correction of your data", "Deletion of your data", "Contact support for assistance."] },
    ],
  },
  {
    heading: "Section 3: Disclaimers",
    items: [
      { title: "1. Not Therapy", body: "The Sovereign Identity Ecosystem™ is not therapy, counseling, or mental health treatment." },
      { title: "2. No Guarantees", body: "Results vary based on individual effort, readiness, and application. No specific outcomes are guaranteed." },
      { title: "3. Personal Responsibility", body: "You are responsible for your decisions, actions, and results." },
      { title: "4. Educational Purpose", body: "All content is for educational and personal development purposes only." },
      { title: "5. Not Financial or Legal Advice", body: "Nothing in the programs or content should be interpreted as financial, legal, or professional advice." },
    ],
  },
  {
    heading: "Section 4: Refund Policy",
    items: [
      {
        title: "General Guidelines",
        body: [
          "The Return™: No refunds after access is granted",
          "The Purpose Method™: No refunds after access is granted",
          "The Trilogy™: Refund policy listed on the program page",
          "The Circle™: Membership can be paused or canceled; no refunds for past billing cycles",
        ],
      },
    ],
  },
  {
    heading: "Section 5: Community Guidelines",
    items: [
      { title: "1. Respect", body: "Treat all members with respect. No harassment, bullying, or hostility." },
      { title: "2. Confidentiality", body: "Do not share other members' posts, stories, or information outside the community." },
      { title: "3. No Selling", body: "No pitching, promoting, or soliciting." },
      { title: "4. No Trauma Dumping", body: "This is not a therapeutic space. Share responsibly and respectfully." },
      { title: "5. Stay On Topic", body: "All posts must align with identity, clarity, purpose, alignment, embodiment, or sovereignty." },
    ],
  },
  {
    heading: "Section 6: Copyright Notice",
    items: [
      {
        title: "Protected Works",
        body: [
          "All content, including:",
          "The Sovereign Identity Pathway™",
          "The Return™",
          "The Purpose Method™",
          "The Trilogy™",
          "The Sovereign Identity Circle™",
          "All frameworks, diagrams, and systems",
          "is protected by copyright and may not be reproduced without permission.",
        ],
      },
    ],
  },
  {
    heading: "Section 7: Contact for Legal Questions",
    items: [
      {
        title: "If you have questions about:",
        body: ["Terms", "Privacy", "Copyright", "Permissions", "Policies", "Use the contact form and select Legal Inquiry."],
      },
    ],
  },
];

export function LegalPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="legal-hero-heading" className="min-h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-20 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Legal</p>
          <h1 id="legal-hero-heading" className="font-display text-[clamp(2rem,7vw,3.5rem)] font-medium leading-[1.1] text-primary">Legal & Policy Information</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <p className="font-body text-body text-secondary max-w-prose mx-auto">
            This page outlines the legal terms, privacy practices, disclaimers, and policies that govern the Sovereign Identity Ecosystem™. Clear. Direct. Transparent.
          </p>
        </motion.div>
        {/* TODO: imagery pending from client — golden shield or scales icon */}
      </section>

      {/* Policy sections */}
      {sections.map((sec, si) => (
        <section key={sec.heading} aria-labelledby={`legal-section-${si}`} className={`py-24 md:py-48 md:py-40 md:py-28 px-6 md:px-16 ${si % 2 === 0 ? "bg-surface" : "bg-neutral"}`}>
          {si > 0 && <Divider className="mb-20 md:mb-28 max-w-4xl mx-auto" />}
          <div className="max-w-4xl mx-auto">
            <motion.h2 id={`legal-section-${si}`} variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="font-body text-label uppercase tracking-[0.16em] text-secondary mb-10">
              {sec.heading}
            </motion.h2>
            <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-0">
              {sec.items.map((item, i) => (
                <motion.div key={i} variants={staggerChildVariants} className="py-6 border-b border-secondary/10 last:border-b-0">
                  <h3 className="font-body font-medium text-primary mb-3">{item.title}</h3>
                  {Array.isArray(item.body) ? (
                    <ul className="space-y-1 font-body text-body text-secondary">
                      {item.body.map((line) => {
                        const isBullet = !line.endsWith(":") && !line.startsWith("All") && !line.startsWith("Use");
                        return (
                          <li key={line} className={isBullet ? "flex items-start gap-3" : ""}>
                            {isBullet && <span className="text-secondary/40 flex-shrink-0">•</span>}
                            <span>{line}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="font-body text-body text-secondary">{item.body}</p>
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
