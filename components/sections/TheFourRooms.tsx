"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollRevealVariants, staggerContainerVariants, staggerChildVariants } from "@/lib/motion";
import { ButtonGhost } from "@/components/ui/ButtonGhost";
import { Card } from "@/components/ui/Card";

export function TheFourRooms() {
  const reducedMotion = useReducedMotion();
  const animate = reducedMotion ? "visible" : undefined;

  const rooms = [
    { type: "Threshold", name: "The Return™" },
    { type: "Orientation", name: "The Purpose Method™" },
    { type: "Journey", name: "The Trilogy™" },
    { type: "Continuation", name: "The Sovereign Identity Circle™" }
  ];

  return (
    <section className="bg-surface py-16 md:py-24 px-6 md:px-16 border-y border-secondary/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.2] text-tertiary">
            The Four Rooms of Reconstruction
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {rooms.map((room) => (
            <motion.div key={room.name} variants={staggerChildVariants}>
              <Card className="h-full flex flex-col items-center text-center p-8 space-y-6">
                <div className="font-body text-label uppercase tracking-[0.16em] text-secondary">
                  {room.type}
                </div>
                <h3 className="font-display text-2xl text-primary font-medium">{room.name}</h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView={animate ?? "visible"}
          viewport={{ once: true }}
          className="text-center space-y-8 pt-8"
        >
          <p className="font-body text-body text-primary font-medium">
            Each room is a weapon. Each room is a structure. Each room is a return.
          </p>
          <ButtonGhost href="/programs">See All Programs</ButtonGhost>
        </motion.div>
      </div>
    </section>
  );
}
