import { Hero } from "@/components/sections/Hero";
import { IdentityLens } from "@/components/sections/IdentityLens";
import { ThePathway } from "@/components/sections/ThePathway";
import { TheHouse } from "@/components/sections/TheHouse";
import { TheFourRooms } from "@/components/sections/TheFourRooms";
import { BelongingRoom } from "@/components/sections/BelongingRoom";
import { TheFounder } from "@/components/sections/TheFounder";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JournalPopup } from "@/components/ui/JournalPopup";

export default function HomePage() {
  return (
    <>
      <JournalPopup />
      <Hero />
      <IdentityLens />
      <ThePathway />
      <TheHouse />
      <TheFourRooms />
      <BelongingRoom />
      <TheFounder />
      <JournalPreview />
      <FinalCTA />
    </>
  );
}
