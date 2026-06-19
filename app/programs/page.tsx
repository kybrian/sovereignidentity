import type { Metadata } from "next";
import { ProgramsPage } from "@/components/sections/ProgramsPage";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The Sovereign Identity System™: a complete identity transformation ecosystem. The Return™, The Purpose Method™, The Trilogy™, and The Sovereign Identity Circle™.",
};

export default function Programs() {
  return <ProgramsPage />;
}
