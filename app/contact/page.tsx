import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sovereign Identity Institution. We respond within 48 hours. All messages are read and handled with care.",
};

export default function Contact() {
  return <ContactPage />;
}
