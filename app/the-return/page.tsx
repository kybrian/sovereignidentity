import type { Metadata } from "next";
import { TheReturnPage } from "@/components/sections/TheReturnPage";

export const metadata: Metadata = {
  title: "The Return™",
  description:
    "The Return™ is a threshold — the moment you step back into who you were always meant to be. The end of drift. The restoration of identity. The re-entry into sovereignty.",
};

export default function TheReturn() {
  return <TheReturnPage />;
}
