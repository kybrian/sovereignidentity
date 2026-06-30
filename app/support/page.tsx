import type { Metadata } from "next";
import { SupportPage } from "@/components/sections/SupportPage";

export const metadata: Metadata = {
  title: "Support | The Sovereign Identity Institution",
  description: "Identity deserves clarity, not chaos. Support in this House is sovereign, intentional, and identity-aligned.",
};

export default function Support() {
  return <SupportPage />;
}
