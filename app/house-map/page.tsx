import type { Metadata } from "next";
import { HouseMapPage } from "@/components/sections/HouseMapPage";

export const metadata: Metadata = {
  title: "The Sovereign Identity House Map | The Sovereign Identity Institution",
  description: "Identity reconstruction is not random. It is geometric. It is sovereign. It is intentional. This is the full map of the House.",
};

export default function HouseMap() {
  return <HouseMapPage />;
}
