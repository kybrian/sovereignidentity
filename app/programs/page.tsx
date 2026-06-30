import type { Metadata } from "next";
import { ProgramsPage } from "@/components/sections/ProgramsPage";

export const metadata: Metadata = {
  title: "Programs | The Sovereign Identity Institution",
  description: "The Four Rooms of Reconstruction: Identity → Purpose → Embodiment → Sovereignty",
};

export default function Programs() {
  return <ProgramsPage />;
}
