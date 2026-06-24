import { Hero } from "@/components/sections/Hero";
import { IdentityDeclaration } from "@/components/sections/IdentityDeclaration";
import { TheReturnPreview } from "@/components/sections/TheReturnPreview";
import { TheTrilogyPreview } from "@/components/sections/TheTrilogyPreview";
import { TheArchitectPreview } from "@/components/sections/TheArchitectPreview";
import { TheBelongingRoomPreview } from "@/components/sections/TheBelongingRoomPreview";
import { CTABlocks } from "@/components/sections/CTABlocks";
import { JournalPopup } from "@/components/ui/JournalPopup";

export default function HomePage() {
  return (
    <>
      <JournalPopup />
      <Hero />
      <IdentityDeclaration />
      <TheReturnPreview />
      <TheTrilogyPreview />
      <TheArchitectPreview />
      <TheBelongingRoomPreview />
      <CTABlocks />
    </>
  );
}
