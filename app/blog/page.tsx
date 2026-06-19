import type { Metadata } from "next";
import { BlogPage } from "@/components/sections/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Sovereign Blog: articles on identity, purpose, alignment, embodiment, and sovereignty. Clear, grounded, practical, useful.",
};

export default function Blog() {
  return <BlogPage />;
}
