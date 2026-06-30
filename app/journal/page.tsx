import type { Metadata } from "next";
import { JournalPage } from "@/components/sections/JournalPage";

export const metadata: Metadata = {
  title: "The Sovereign Identity Journal™ | The Sovereign Identity Institution",
  description: "A cinematic identity briefing delivered weekly. Not a blog. Not a newsletter. A sovereign publication.",
};

export default function Journal() {
  return <JournalPage />;
}
