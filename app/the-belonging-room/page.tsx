import type { Metadata } from "next";
import { TheBelongingRoomPage } from "@/components/sections/TheBelongingRoomPage";

export const metadata: Metadata = {
  title: "The Belonging Room | The Sovereign Identity Institution",
  description: "A space for identity, clarity, resonance, and return. Belonging before transformation.",
};

export default function TheBelongingRoom() {
  return <TheBelongingRoomPage />;
}
