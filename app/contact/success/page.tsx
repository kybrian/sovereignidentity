import type { Metadata } from "next";
import { ContactSuccessPage } from "@/components/sections/ContactSuccessPage";

export const metadata: Metadata = {
  title: "Message Received | The Sovereign Identity Institution",
  description: "Your message has been received. This is not customer service. This is identity service.",
};

export default function ContactSuccess() {
  return <ContactSuccessPage />;
}
