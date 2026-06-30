import type { Metadata } from "next";
import { CompletionPage } from "@/components/sections/CompletionPage";

export const metadata: Metadata = {
  title: "Identity Completion | The Sovereign Identity Institution",
  description: "You've reached the end of the page — but the beginning of your return. Identity reconstruction does not end here. It begins here.",
};

export default function Completion() {
  return <CompletionPage />;
}
