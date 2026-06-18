import type { Metadata } from "next";
import { TheTrilogyPage } from "@/components/sections/TheTrilogyPage";

export const metadata: Metadata = {
  title: "The Trilogy™ | The Sovereign Identity Institution",
  description: "The 12-month identity journey through Alignment, Embodiment, and Legacy. Three arcs. Four months each. One transformation.",
};

export default function TheTrilogy() {
  return <TheTrilogyPage />;
}
