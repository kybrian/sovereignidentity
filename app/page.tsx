import { Hero } from "@/components/sections/Hero";
import { IdentityShockwave } from "@/components/sections/IdentityShockwave";
import { PathwayOverview } from "@/components/sections/PathwayOverview";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { BelongingRoom } from "@/components/sections/BelongingRoom";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FounderPreview } from "@/components/sections/FounderPreview";
import { JournalPopup } from "@/components/ui/JournalPopup";

export default function HomePage() {
  return (
    <>
      <JournalPopup />
      <Hero />
      <IdentityShockwave />
      <PathwayOverview />
      <ProgramsGrid />
      <BelongingRoom />
      <BlogPreview />
      <FounderPreview />
    </>
  );
}
