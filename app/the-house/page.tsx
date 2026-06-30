import type { Metadata } from "next";
import { TheHousePage } from "@/components/sections/TheHousePage";

export const metadata: Metadata = {
  title: "The House | The Sovereign Identity Institution",
  description: "Identity reconstruction requires a sovereign environment. This is a House built for collapse, reconstruction, and return.",
};

export default function TheHouseRoute() {
  return <TheHousePage />;
}
