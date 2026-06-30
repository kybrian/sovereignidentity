import type { Metadata } from "next";
import { FounderPage } from "@/components/sections/FounderPage";

export const metadata: Metadata = {
  title: "The Founder | The Sovereign Identity Institution",
  description: "Identity reconstruction begins with the one who rebuilt himself.",
};

export default function Founder() {
  return <FounderPage />;
}
