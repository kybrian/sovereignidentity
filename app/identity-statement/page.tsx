import type { Metadata } from "next";
import { StatementPage } from "@/components/sections/StatementPage";

export const metadata: Metadata = {
  title: "Identity Statement | The Sovereign Identity Institution",
  description: "A declaration of who you are becoming. This is the statement that begins your return.",
};

export default function Statement() {
  return <StatementPage />;
}
