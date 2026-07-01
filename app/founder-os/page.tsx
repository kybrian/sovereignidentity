import type { Metadata } from "next";
import { FounderOsPage } from "@/components/sections/FounderOsPage";

export const metadata: Metadata = {
  title: "The Founder OS | The Sovereign Identity Institution",
  description: "The sovereign operating system of leadership and identity. A Founder cannot lead from chaos.",
};

export default function FounderOs() {
  return <FounderOsPage />;
}
