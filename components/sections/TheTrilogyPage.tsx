"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroMarkVariants, scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { Divider } from "@/components/ui/Divider";

const arcI = [
  { month: "Month 1", title: "Internal Clarity", desc: "You will see yourself clearly: without distortion, without noise, without drift." },
  { month: "Month 2", title: "Nervous System Grounding", desc: "You will stabilize the internal system that identity rests on." },
  { month: "Month 3", title: "Identity Structure", desc: "You will rebuild the internal architecture that drift fractured." },
  { month: "Month 4", title: "Alignment Practices", desc: "You will establish the daily, weekly, and monthly practices that keep you aligned." },
];

const arcIList = ["Discipline becomes natural", "Action becomes aligned", "Behavior becomes inevitable", "Identity becomes lived"];

const arcII = [
  { month: "Month 5", title: "Embodied Discipline", desc: "You will build discipline that emerges from identity, not force." },
  { month: "Month 6", title: "Behavioral Alignment", desc: "Your actions will begin to reflect your identity without effort." },
  { month: "Month 7", title: "Identity Integration", desc: "Your identity becomes your default state: not something you remember, but something you are." },
  { month: "Month 8", title: "Embodied Sovereignty", desc: "You will feel the shift: the moment identity becomes embodied truth." },
];

const arcIII = [
  { month: "Month 9", title: "Legacy Blueprint", desc: "You will articulate the identity-rooted legacy you are meant to build." },
  { month: "Month 10", title: "Sovereign Leadership", desc: "You will step into leadership that emerges from identity, not ego." },
  { month: "Month 11", title: "Identity Impact", desc: "Your presence will begin to influence your environment: naturally, quietly, powerfully." },
  { month: "Month 12", title: "Continuation", desc: "You will prepare for the next evolution: the long arc of sovereignty." },
];

const forThoseReady = ["Live their identity", "Build discipline", "Embody purpose", "Create legacy", "Become sovereign"];

export function TheTrilogyPage() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="trilogy-hero-heading" className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 md:pt-48 pb-24 md:pb-48 bg-neutral">
        <motion.div variants={heroMarkVariants} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="space-y-6 max-w-2xl mx-auto">
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Program</p>
          <h1 id="trilogy-hero-heading" className="font-display text-4xl md:text-6xl font-medium leading-[1.1] text-primary">The Trilogy™</h1>
          <div className="w-10 h-px bg-secondary/20 mx-auto" />
          <div className="space-y-3 font-body text-body text-secondary max-w-prose mx-auto">
            <p className="font-display text-[1.1rem] font-medium text-primary">The Journey Begins Where Most People Stop</p>
            <p>Most people want clarity.<br />Some people want purpose.<br />Few people want alignment.<br />Almost no one wants embodiment.<br />And even fewer want legacy.</p>
            <p>The Trilogy™ is not for the many.<br />It is for the few who are ready to live their identity: not just understand it, not just talk about it, not just feel it, but <span className="text-primary font-medium">embody it</span>.</p>
          </div>
          <div className="font-body text-body text-secondary space-y-1">
            <p>Three arcs. Four months each. One transformation.</p>
          </div>
        </motion.div>
        {/* TODO: imagery pending from client — faceless silhouette walking golden path into darkness */}
      </section>

      {/* Not a program */}
      <section aria-labelledby="trilogy-not-program-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-prose mx-auto space-y-6">
          <h2 id="trilogy-not-program-heading" className="font-display text-h1 font-medium text-primary">The Trilogy™ Is Not a Program</h2>
          <div className="space-y-3 font-body text-body text-secondary">
            <p>It is a pilgrimage.<br />A rite of passage.<br />A sovereign initiation.</p>
            <p>It is the long arc of identity becoming lived: not in theory, not in emotion, not in imagination, but in discipline, in action, in embodiment, in legacy.</p>
            <p className="text-primary font-medium">This is where identity becomes real.</p>
          </div>
        </motion.div>
      </section>

      {/* Three arcs overview */}
      <section aria-labelledby="trilogy-arcs-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-4xl mx-auto mb-12 space-y-4">
          <h2 id="trilogy-arcs-heading" className="font-display text-h1 font-medium text-primary">The Three Arcs of The Trilogy™</h2>
          <p className="font-body text-body text-secondary">The Trilogy™ unfolds in three arcs:</p>
        </motion.div>
        <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { n: "I", title: "Alignment", months: "Months 1–4", sub: "Internal Order. Nervous System Coherence. Identity Stabilization." },
            { n: "II", title: "Embodiment", months: "Months 5–8", sub: "Identity Lived. Discipline Natural. Action Inevitable." },
            { n: "III", title: "Legacy", months: "Months 9–12", sub: "Identity Expressed Outward. Leadership. Impact. Continuation." },
          ].map((arc) => (
            <motion.div key={arc.n} variants={staggerChildVariants} className="p-8 bg-surface border border-secondary/10 rounded-sm space-y-3">
              <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Arc {arc.n}</p>
              <p className="font-display text-[1.3rem] font-medium text-primary">{arc.title}</p>
              <p className="font-body text-label text-secondary/60 uppercase tracking-[0.12em]">{arc.months}</p>
              <p className="font-body text-body text-secondary">{arc.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Arc I — Alignment */}
      <section aria-labelledby="arc-i-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Arc I</p>
            <h2 id="arc-i-heading" className="font-display text-h1 font-medium text-primary">Alignment</h2>
            <p className="font-body text-label text-secondary/60 uppercase tracking-[0.12em]">Months 1–4</p>
            <p className="font-body text-body text-secondary italic">Internal Order. Nervous System Coherence. Identity Stabilization.</p>
            <p className="font-body text-body text-primary font-medium">Alignment is the foundation of everything.</p>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>This is where you rebuild the internal structure that drift eroded.<br />This is where you remove the noise.<br />This is where you stabilize your perception.<br />This is where you create internal order.</p>
              <p>Alignment is not about feeling good.<br />Alignment is about becoming <span className="text-primary font-medium">clear</span>.</p>
              <p>Alignment is not about motivation.<br />Alignment is about becoming <span className="text-primary font-medium">stable</span>.</p>
              <p>Alignment is not about hype.<br />Alignment is about becoming <span className="text-primary font-medium">sovereign</span>.</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {arcI.map((item) => (
              <motion.div key={item.month} variants={staggerChildVariants} className="flex items-start gap-6 py-5 border-b border-secondary/10 last:border-b-0">
                <span className="font-body text-label text-secondary uppercase tracking-[0.12em] flex-shrink-0 min-w-[80px]">{item.month}</span>
                <div className="space-y-1">
                  <p className="font-display text-[1.1rem] font-medium text-primary">{item.title}</p>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Arc II — Embodiment */}
      <section aria-labelledby="arc-ii-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Arc II</p>
            <h2 id="arc-ii-heading" className="font-display text-h1 font-medium text-primary">Embodiment</h2>
            <p className="font-body text-label text-secondary/60 uppercase tracking-[0.12em]">Months 5–8</p>
            <p className="font-body text-body text-secondary italic">Identity Lived. Discipline Natural. Action Inevitable.</p>
            <p className="font-body text-body text-primary font-medium">Embodiment is where identity becomes physical.</p>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>This is where:</p>
              <ul className="space-y-2">
                {arcIList.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
              </ul>
              <p>Embodiment is not performance.<br />Embodiment is integration.</p>
              <p>This is where you stop thinking about who you are, and start living who you are.</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {arcII.map((item) => (
              <motion.div key={item.month} variants={staggerChildVariants} className="flex items-start gap-6 py-5 border-b border-secondary/10 last:border-b-0">
                <span className="font-body text-label text-secondary uppercase tracking-[0.12em] flex-shrink-0 min-w-[80px]">{item.month}</span>
                <div className="space-y-1">
                  <p className="font-display text-[1.1rem] font-medium text-primary">{item.title}</p>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Arc III — Legacy */}
      <section aria-labelledby="arc-iii-heading" className="bg-surface py-24 md:py-48 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="mb-12 space-y-4">
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">Arc III</p>
            <h2 id="arc-iii-heading" className="font-display text-h1 font-medium text-primary">Legacy</h2>
            <p className="font-body text-label text-secondary/60 uppercase tracking-[0.12em]">Months 9–12</p>
            <p className="font-body text-body text-secondary italic">Identity Expressed Outward. Leadership. Impact. Continuation.</p>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>Legacy is not about fame.<br />Legacy is not about recognition.<br />Legacy is not about performance.</p>
              <p>Legacy is identity expressed outward: through leadership, through impact, through contribution, through presence.</p>
              <p>Legacy is the moment your identity begins to shape the world around you.</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-4">
            {arcIII.map((item) => (
              <motion.div key={item.month} variants={staggerChildVariants} className="flex items-start gap-6 py-5 border-b border-secondary/10 last:border-b-0">
                <span className="font-body text-label text-secondary uppercase tracking-[0.12em] flex-shrink-0 min-w-[80px]">{item.month}</span>
                <div className="space-y-1">
                  <p className="font-display text-[1.1rem] font-medium text-primary">{item.title}</p>
                  <p className="font-body text-body text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* TODO: imagery pending from client — golden path stretching to infinity */}
      </section>

      {/* Not for everyone + Promise + CTA */}
      <section aria-labelledby="trilogy-promise-heading" className="bg-neutral py-24 md:py-48 px-6 md:px-16">
        <Divider className="mb-24 md:mb-32 max-w-4xl mx-auto" gold />
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Trilogy™ Is Not for Everyone</h2>
            <p className="font-body text-body text-secondary">It is for those who are ready to:</p>
            <ul className="space-y-2 font-body text-body text-secondary">
              {forThoseReady.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-secondary/40 flex-shrink-0">•</span><span>{item}</span></li>))}
            </ul>
            <p className="font-body text-body text-secondary/70">This is not a quick transformation.<br />This is the long arc: the deep work, the sovereign path.</p>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-5">
            <h2 id="trilogy-promise-heading" className="font-display text-h1 font-medium text-primary">The Trilogy™ Is a Promise</h2>
            <div className="space-y-2 font-body text-body text-secondary">
              <p>A promise that you will not drift again.<br />A promise that your identity will become embodied.<br />A promise that your life will reflect who you truly are.<br />A promise that your legacy will begin.</p>
            </div>
            <div className="space-y-2 font-body text-body text-secondary/70">
              <p>This is the journey.<br />This is the path.<br />This is the work.</p>
            </div>
          </motion.div>

          <motion.div variants={scrollRevealVariants} initial="hidden" whileInView={animate ?? "visible"} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-h1 font-medium text-primary">The Trilogy™ Is Waiting for You</h2>
            <div className="space-y-3 font-body text-body text-secondary">
              <p>If you feel the pull,<br />if you feel the readiness,<br />if you feel the quiet knowing that your life is meant for more:</p>
              <p>Then you already know.</p>
              <p className="text-primary font-medium">It's time to enter the journey.</p>
            </div>
            <ButtonPrimary href="/start-here">Enter The Trilogy™</ButtonPrimary>
          </motion.div>
        </div>
      </section>
    </>
  );
}
