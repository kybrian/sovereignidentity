import Link from "next/link";
import { Lockup } from "./Lockup";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "The Return™", href: "/the-return" },
  { label: "The Trilogy™", href: "/the-trilogy" },
  { label: "The Belonging Room™", href: "/the-belonging-room" },
  { label: "The Architect", href: "/about" },
  { label: "Apply", href: "/the-return" },
  { label: "Sitemap", href: "/sitemap" },
];

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-4">
      <p className="font-body text-label uppercase tracking-[0.16em] text-secondary">
        {heading}
      </p>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="font-body text-body text-secondary/70 hover:text-primary transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-32 space-y-16">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-12">
          <div className="flex flex-col items-start gap-6 max-w-lg">
            <Lockup orientation="stacked" scale="footer" showInstitutional={true} />
            <div className="space-y-4 font-body text-body text-secondary">
              <p className="font-bold text-primary">Sovereign Identity™ — Built for the Man Who is Done Performing.</p>
              <p>
                Sovereign Identity™ is not a movement. It is a method — one built by a man who needed it, tested by men who demanded it, and structured for the men who are ready for it.
              </p>
            </div>
          </div>
          <FooterCol heading="Navigation" links={footerLinks} />
        </div>

        <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-body text-[0.75rem] text-secondary/60">
          <div className="space-y-2">
            <p>
              Sovereign Identity™, The Return™, The Trilogy™, The Belonging Room™, and Sovereign Identity Architect™ are trademarks of Melvin / Sovereign Identity™. All rights reserved. Unauthorized reproduction or use of brand marks is prohibited.
            </p>
            <p>Where sovereign men are building — not waiting.</p>
            <p>© {new Date().getFullYear()} Sovereign Identity™. All rights reserved. | San Francisco, CA | Built by the Architect.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
