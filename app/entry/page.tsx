import type { Metadata } from "next";
import { EntryPage } from "@/components/sections/EntryPage";

export const metadata: Metadata = {
  title: "Enter the House | The Sovereign Identity Institution",
  description: "Identity reconstruction begins here. The gateway between who you were and who you are becoming.",
};

export default function Entry() {
  return <EntryPage />;
}
