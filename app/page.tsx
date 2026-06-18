import { Hero } from "@/components/sections/Hero";
import { IdentityShockwave } from "@/components/sections/IdentityShockwave";
import { PathwayOverview } from "@/components/sections/PathwayOverview";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { BelongingRoom } from "@/components/sections/BelongingRoom";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { NewsletterPreview } from "@/components/sections/NewsletterPreview";
import { FounderPreview } from "@/components/sections/FounderPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentityShockwave />
      <PathwayOverview />
      <ProgramsGrid />
      <BelongingRoom />
      <BlogPreview />
      <NewsletterPreview />
      <FounderPreview />
    </>
  );
}
