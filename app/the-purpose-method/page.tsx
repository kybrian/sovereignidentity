import type { Metadata } from "next";
import { ThePurposeMethodPage } from "@/components/sections/ThePurposeMethodPage";

export const metadata: Metadata = {
  title: "The Purpose Method™ | The Sovereign Identity Institution",
  description: "Purpose is not found. Purpose is remembered. An orientation that points your identity toward your mission.",
};

export default function ThePurposeMethod() {
  return <ThePurposeMethodPage />;
}
