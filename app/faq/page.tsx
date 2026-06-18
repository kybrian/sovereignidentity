import type { Metadata } from "next";
import { FaqPage } from "@/components/sections/FaqPage";

export const metadata: Metadata = {
  title: "FAQ | The Sovereign Identity Institution",
  description: "Clear answers. Direct guidance. No noise. No confusion. Everything you need to know about the Sovereign Identity Ecosystem™.",
};

export default function Faq() {
  return <FaqPage />;
}
