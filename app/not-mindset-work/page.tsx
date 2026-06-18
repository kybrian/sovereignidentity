import type { Metadata } from "next";
import { NotMindsetWorkPage } from "@/components/sections/NotMindsetWorkPage";

export const metadata: Metadata = {
  title: "Not Mindset Work | The Sovereign Identity Institution",
  description: "Mindset is downstream. Identity is upstream. Why the Sovereign Identity System™ is fundamentally different.",
};

export default function NotMindsetWork() {
  return <NotMindsetWorkPage />;
}
