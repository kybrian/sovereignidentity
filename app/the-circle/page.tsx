import type { Metadata } from "next";
import { TheCirclePage } from "@/components/sections/TheCirclePage";

export const metadata: Metadata = {
  title: "The Sovereign Identity Circle™ | The Sovereign Identity Institution",
  description: "Sovereignty is not a moment. Sovereignty is a continuation. Long-term identity evolution and mastery.",
};

export default function TheCircle() {
  return <TheCirclePage />;
}
