import type { Metadata } from "next";
import { ThePathwayPage } from "@/components/sections/ThePathwayPage";

export const metadata: Metadata = {
  title: "The Pathway",
  description:
    "The Sovereign Identity Pathway™ — an 8-stage identity transformation sequence moving from Drift to Sovereignty. The backbone of the entire ecosystem.",
};

export default function Pathway() {
  return <ThePathwayPage />;
}
