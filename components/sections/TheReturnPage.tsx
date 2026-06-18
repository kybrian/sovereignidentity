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
    body: "The moment you see the drift.\nThe moment you tell the truth.\nThe moment you stop pretending.",
  },
  {
    n: "2",
    name: "Recall",
    body: "The moment you remember who you were before the drift.\nBefore the noise.\nBefore the expectations.\nBefore the world reshaped you.",
  },
  {
    n: "3",
    name: "Reconstruction",
    body: "The rebuilding of your internal foundation.\nThe restoration of your identity structure.\nThe stabilization of your nervous system.\nThe return of internal clarity.",
  },
  {
    n: "4",
    name: "Re‑Entry",
    body: "The moment you step back into sovereignty.\nThe moment you reclaim your internal authority.\nThe moment you return to yourself.",
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

      {/* Opening */}
      <section
        aria-label="There comes a moment"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            There comes a moment
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>A moment when you realize you've drifted.</p>
            <p>
              Not because you failed.
              <br />
              Not because you were weak.
              <br />
              Not because you lacked discipline.
            </p>
            <p>
              But because the world pulled you away from yourself,
              <br />
              quietly, slowly, subtly.
            </p>
            <p>
              Through expectations.
              <br />
              Through survival.
              <br />
              Through pressure.
              <br />
              Through noise.
            </p>
            <p>
              One compromise at a time.
              <br />
              One distraction at a time.
              <br />
              One unspoken surrender at a time.
            </p>
            <p>Until one day, you look at your life and whisper:</p>
            <p className="font-display text-[1.4rem] font-medium text-primary not-italic">
              "This isn't me."
            </p>
            <p>
              That whisper is the beginning.
              <br />
              That whisper is the doorway.
              <br />
              That whisper is the Return.
            </p>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — faceless silhouette before golden threshold */}
      </section>

      {/* Threshold definition */}
      <section
        aria-labelledby="threshold-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="threshold-heading" className="font-display text-h1 font-medium text-primary">
            The Return™ Is a Threshold
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              Not a program.
              <br />
              Not a course.
              <br />
              Not a challenge.
              <br />
              Not a mindset reset.
            </p>
            <p>
              It is a <span className="text-primary font-medium">threshold</span>:
              <br />
              the moment you step back into who you were always meant to be.
            </p>
            <p>
              The Return™ is the end of drift.
              <br />
              The Return™ is the restoration of identity.
              <br />
              The Return™ is the re‑entry into sovereignty.
            </p>
            <p>This is where your life begins again.</p>
          </div>
        </motion.div>
      </section>

      {/* World teaches you */}
      <section
        aria-label="The world teaches you to push harder"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 className="font-display text-h1 font-medium text-primary">
            The World Teaches You to Push Harder
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              To grind.
              <br />
              To hustle.
              <br />
              To motivate yourself.
              <br />
              To "fix your mindset."
            </p>
            <p>
              But you don't need motivation.
              <br />
              You don't need hype.
              <br />
              You don't need to force yourself into a new version of you.
            </p>
            <p>You need a return.</p>
            <p>
              A return to clarity.
              <br />
              A return to identity.
              <br />
              A return to internal authority.
              <br />
              A return to the truth of who you are.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Built for one purpose */}
      <section
        aria-labelledby="return-identity-work"
        id="identity-work"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="return-identity-work" className="font-display text-h1 font-medium text-primary">
            The Return™ Is Built for One Purpose
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>To bring you back to yourself.</p>
            <p>
              To rebuild the internal structure that drift eroded.
              <br />
              To restore the identity you abandoned to survive.
              <br />
              To reconnect you with the clarity you lost along the way.
            </p>
            <p>
              This is not emotional work.
              <br />
              This is not mindset work.
              <br />
              This is not motivational work.
            </p>
            <p className="text-primary font-medium">
              This is identity work: upstream, structural, sovereign.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Four thresholds */}
      <section
        aria-labelledby="four-thresholds-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
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
              What You Will Experience
            </h2>
            <p className="font-body text-body text-secondary">
              Inside The Return™, you will move through four identity thresholds:
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
        </div>
      </section>

      {/* Not fast */}
      <section
        aria-label="The Return is not fast"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
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
            The Return™ Is Not Fast
          </h2>
          <div className="space-y-4 font-body text-body text-secondary">
            <p>
              It is not a dopamine hit.
              <br />
              It is not a quick fix.
              <br />
              It is not a motivational spike.
            </p>
            <p>
              It is slow.
              <br />
              It is intentional.
              <br />
              It is grounded.
              <br />
              It is sovereign.
            </p>
            <p>It is the work that changes everything.</p>
          </div>
        </motion.div>
      </section>

      {/* Who it's for */}
      <section
        aria-labelledby="return-who-heading"
        className="bg-surface py-24 md:py-48 px-6 md:px-16"
      >
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto space-y-6"
        >
          <h2 id="return-who-heading" className="font-display text-h1 font-medium text-primary">
            Who The Return™ Is For
          </h2>
          <p className="font-body text-body text-secondary">
            The Return™ is for you if:
          </p>
          <ul className="space-y-3 font-body text-body text-secondary">
            {[
              "You feel disconnected",
              "You feel misaligned",
              "You feel like you've drifted",
              "You feel the gap between who you are and how you're living",
              "You feel the quiet ache of identity erosion",
              "You feel the pull to come home to yourself",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-secondary">
            If you feel this pull, you are ready.
          </p>
        </motion.div>
      </section>

      {/* Promise + CTA */}
      <section
        aria-labelledby="return-promise-heading"
        className="bg-neutral py-24 md:py-48 px-6 md:px-16"
      >
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="max-w-prose mx-auto text-center space-y-8"
        >
          <h2 id="return-promise-heading" className="font-display text-h1 font-medium text-primary">
            The Return™ Is a Promise
          </h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>A promise that you will not walk back into yourself alone.</p>
            <p>A promise that your identity will be restored.</p>
            <p>A promise that your clarity will return.</p>
            <p>A promise that your sovereignty will rise again.</p>
          </div>
          <Divider className="max-w-xs mx-auto" gold />
          <div className="space-y-3 font-body text-body text-secondary">
            <p>
              This is the moment you stop drifting.
              <br />
              This is the moment you come home.
            </p>
          </div>
          <div className="pt-4">
            <ButtonPrimary href="#begin">Begin The Return™</ButtonPrimary>
          </div>
        </motion.div>

        {/* TODO: imagery pending from client — cinematic faceless silhouette walking toward a golden horizon */}
      </section>
    </>
  );
}
