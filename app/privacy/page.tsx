import type { Metadata } from "next";
import { PrivacyPage } from "@/components/sections/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | The Sovereign Identity Institution",
  description: "Your identity is sacred. Your information is sovereign. Your privacy is protected.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
