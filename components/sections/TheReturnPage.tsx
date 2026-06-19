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

const thresholds = [
  {
    n: "1",
    name: "Recognition",
    body: "Seeing the drift.\nNaming the misalignment.\nAcknowledging the gap.",
  },
  {
    n: "2",
    name: "Return",
    body: "Coming back to the source.\nReconnecting with identity.\nReclaiming clarity.",
  },
  {
    n: "3",
    name: "Reclaiming",
    body: "Taking back what was lost.\nRestoring internal authority.\nRebuilding from identity.",
  },
  {
    n: "4",
    name: "Re‑entering Sovereignty",
    body: "Standing in who you are.\nMoving with clarity.\nLiving with structure.",
  },
];

export function TheReturnPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="return-hero-heading"
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral"
      >
        <motion.div
          variants={heroMarkVariants}
          initial={reducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
            The Sovereign Identity Institution
          </p>
          <h1
            id="return-hero-heading"
            className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary"
          >
            THE RETURN™
          </h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
        </motion.div>
      </section>

      {/* SECTION 1 --- THE THRESHOLD */}
      <section
        aria-label="The Threshold"
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
            The Threshold
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              The Return™ is the moment you stop living from reaction and begin living from identity.
            </p>
            <p>It is the threshold between:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Who you became</li>
              <li>And who you were always meant to be</li>
            </ul>
            <p>Most people don't realize they've drifted.<br />They just feel:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Misaligned</li>
              <li>Disconnected</li>
              <li>Unclear</li>
              <li>Unmotivated</li>
              <li>Out of rhythm</li>
            </ul>
            <p className="pt-2">The Return™ is where clarity begins.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 --- WHY DRIFT HAPPENS */}
      <section
        aria-labelledby="drift-heading"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="drift-heading" className="font-display text-h1 font-medium text-primary">
            Why Drift Happens
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Drift is not failure.<br />
              Drift is forgetting.
            </p>
            <p>It happens slowly:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Expectations pull you</li>
              <li>Responsibilities shape you</li>
              <li>Survival pressures mold you</li>
              <li>Roles define you</li>
              <li>Momentum carries you</li>
            </ul>
            <p>
              Identity becomes blurred.<br />
              Direction becomes foggy.<br />
              Life becomes reactive.
            </p>
            <p>The Return™ brings you back to the source.</p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 --- THE FOUR THRESHOLDS */}
      <section
        aria-labelledby="four-thresholds-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 space-y-4"
          >
            <h2 id="four-thresholds-heading" className="font-display text-h1 font-medium text-primary">
              The Four Thresholds
            </h2>
            <p className="font-body text-body text-secondary">
              Every identity restoration begins with four shifts:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {thresholds.map((t) => (
              <motion.div key={t.n} variants={staggerChildVariants}>
                <Card className="h-full p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-label text-secondary uppercase tracking-[0.16em]">
                      {t.n}.
                    </span>
                    <h3 className="font-display text-[1.3rem] font-medium text-primary">
                      {t.name}
                    </h3>
                  </div>
                  <div className="font-body text-body text-secondary space-y-1">
                    {t.body.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView={animate ?? "visible"}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="font-body text-body text-secondary">
              These four thresholds form the backbone of The Return™.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 --- WHAT YOU EXPERIENCE */}
      <section
        aria-label="What You Experience"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            What You Experience
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>Inside The Return™, you experience:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Identity grounding</li>
              <li>Emotional neutrality</li>
              <li>Structural clarity</li>
              <li>Directional awareness</li>
              <li>A sense of coming home</li>
              <li>Relief from internal noise</li>
              <li>A renewed sense of self</li>
            </ul>
            <p className="pt-2">
              This is not mindset work.<br />
              This is identity restoration.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 --- WHO THIS IS FOR */}
      <section
        aria-labelledby="return-who-heading"
        className="bg-surface py-24 md:py-36 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="return-who-heading" className="font-display text-h1 font-medium text-primary">
            Who This Is For
          </h2>
          <p className="font-body text-body text-secondary">
            The Return™ is for people who:
          </p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "Feel misaligned",
              "Feel disconnected",
              "Feel like they've drifted",
              "Know they're meant for more",
              "Want to rebuild from identity",
              "Want clarity, not motivation",
              "Want structure, not hype",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary pt-2">
            If you feel the pull to come back to yourself, this is your threshold.
          </p>
        </motion.div>
      </section>

      {/* SECTION 6 --- CTA */}
      <section
        aria-label="Call to Action"
        className="bg-neutral py-24 md:py-36 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <div className="pt-4">
            <ButtonPrimary href="#begin">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>
      </section>
    </>
  );
}
