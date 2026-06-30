import type { Metadata } from "next";
import { DeclarePage } from "@/components/sections/DeclarePage";

export const metadata: Metadata = {
  title: "Identity Declaration | The Sovereign Identity Institution",
  description: "Identity reconstruction does not begin with action. It begins with declaration. Before you rebuild, you must declare who you are.",
};

export default function Declare() {
  return <DeclarePage />;
}
