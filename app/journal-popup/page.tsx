import type { Metadata } from "next";
import { JournalPopupPage } from "@/components/sections/JournalPopupPage";

export const metadata: Metadata = {
  title: "The Sovereign Identity Journal™ | The Sovereign Identity Institution",
  description: "A cinematic identity briefing delivered weekly. Identity becomes posture through repetition.",
};

export default function JournalPopupRoute() {
  return <JournalPopupPage />;
}
