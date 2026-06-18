import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Sovereign Identity Institution",
    template: "%s | The Sovereign Identity Institution",
  },
  description:
    "Identity transformation for people who want clarity, purpose, and sovereignty. Come back to who you were always meant to be.",
  keywords: [
    "identity transformation",
    "identity clarity",
    "personal sovereignty",
    "identity work",
    "The Return",
    "Sovereign Identity Pathway",
  ],
  openGraph: {
    type: "website",
    siteName: "The Sovereign Identity Institution",
    title: "The Sovereign Identity Institution",
    description:
      "Identity transformation for people who want clarity, purpose, and sovereignty. Come back to who you were always meant to be.",
  },
  twitter: {
    card: "summary",
    title: "The Sovereign Identity Institution",
    description:
      "Identity transformation for people who want clarity, purpose, and sovereignty.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-neutral text-primary antialiased">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
