import type { Metadata } from "next";
import { SitemapPage } from "@/components/sections/SitemapPage";

export const metadata: Metadata = {
  title: "Sitemap | The Sovereign Identity Institution",
  description: "The complete directory of the Sovereign Identity Ecosystem™.",
};

export default function SitemapRoute() {
  return <SitemapPage />;
}
