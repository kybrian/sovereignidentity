import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About Melvin | The Sovereign Identity Institution",
  description: "I help people return to who they were always meant to be. Identity work: upstream, structural, sovereign.",
};

export default function About() {
  return <AboutPage />;
}
