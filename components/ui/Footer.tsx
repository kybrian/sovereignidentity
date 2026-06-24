import Link from "next/link";
import { Lockup } from "./Lockup";

const footerLinks = [
  { label: "Journal Archive", href: "/journal" },
  { label: "Free Resource", href: "/the-belonging-room" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/legal" },
  { label: "Privacy", href: "/legal" },
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
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-12">
          {/* Bottom center seal on the left */}
          <div className="flex flex-col items-start gap-4">
            <Lockup orientation="stacked" scale="footer" showInstitutional={true} />
            <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/50 text-left mt-4">
              © {new Date().getFullYear()} The Sovereign Identity Ecosystem™<br />
              All Rights Reserved
            </p>
          </div>
          <FooterCol heading="Navigation" links={footerLinks} />
        </div>
      </div>
    </footer>
  );
}
