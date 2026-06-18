import type { Metadata } from "next";
import { IdentityPhilosophyPage } from "@/components/sections/IdentityPhilosophyPage";

export const metadata: Metadata = {
  title: "Identity Philosophy | The Sovereign Identity Institution",
  description: "Identity is the lens. Mindset is the outcome. The philosophy that shapes the entire Sovereign Identity Ecosystem™.",
};

export default function IdentityPhilosophy() {
  return <IdentityPhilosophyPage />;
}
