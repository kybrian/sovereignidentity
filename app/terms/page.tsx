import type { Metadata } from "next";
import { TermsPage } from "@/components/sections/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Sovereign Identity Institution",
  description: "Sovereignty requires structure. These terms protect the structure, the sovereignty, and the alignment of the environment.",
};

export default function Terms() {
  return <TermsPage />;
}
