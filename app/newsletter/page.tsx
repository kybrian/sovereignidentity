import type { Metadata } from "next";
import { NewsletterPage } from "@/components/sections/NewsletterPage";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The Sovereignty Digest™ — a weekly identity letter for people who want to live with clarity and sovereignty. One letter. Once a week. Straight to your inbox.",
};

export default function Newsletter() {
  return <NewsletterPage />;
}
