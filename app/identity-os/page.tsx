import type { Metadata } from "next";
import { IdentityOsPage } from "@/components/sections/IdentityOsPage";

export const metadata: Metadata = {
  title: "The Identity OS | The Sovereign Identity Institution",
  description: "The internal operating system of your life. Identity becomes architecture.",
};

export default function IdentityOs() {
  return <IdentityOsPage />;
}
