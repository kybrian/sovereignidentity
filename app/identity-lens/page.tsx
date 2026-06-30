import type { Metadata } from "next";
import { IdentityLensPage } from "@/components/sections/IdentityLensPage";

export const metadata: Metadata = {
  title: "Identity Lens | The Sovereign Identity Institution",
  description: "Identity is the source. Everything you do flows from who you are.",
};

export default function IdentityLens() {
  return <IdentityLensPage />;
}
