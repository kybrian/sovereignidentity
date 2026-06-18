import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Legal & Policy Information | The Sovereign Identity Institution",
  description: "Terms of Service, Privacy Policy, Disclaimers, Refund Policy, and Community Guidelines for the Sovereign Identity Ecosystem™.",
};

export default function Legal() {
  return <LegalPage />;
}
