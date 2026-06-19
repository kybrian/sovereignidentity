import type { Metadata } from "next";
import { BlogTemplate } from "@/components/sections/BlogTemplate";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "A post from The Sovereign Blog.",
};

export default function BlogPost() {
  return <BlogTemplate />;
}
