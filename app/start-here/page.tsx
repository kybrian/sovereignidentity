import type { Metadata } from "next";
import { StartHerePage } from "@/components/sections/StartHerePage";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Return to yourself. Understand the path. Choose your beginning. Your orientation to the Sovereign Identity Ecosystem™.",
};

export default function StartHere() {
  return <StartHerePage />;
}
