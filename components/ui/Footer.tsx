import Link from "next/link";
import { Lockup } from "./Lockup";
import { Divider } from "./Divider";

const navLinks = [
  { label: "The Return™", href: "/the-return" },
  { label: "The Pathway", href: "/the-pathway" },
  { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const programLinks = [
  { label: "The Return™", href: "/the-return" },
  { label: "The Purpose Method™", href: "/the-purpose-method" },
  { label: "The Trilogy™", href: "/the-trilogy" },
  { label: "The Sovereign Identity Circle™", href: "/the-circle" },
  { label: "The Belonging Room", href: "/the-belonging-room" },
];

const exploreLinks = [
  { label: "Identity Philosophy", href: "/identity-philosophy" },
  { label: "Not Mindset Work", href: "/not-mindset-work" },
  { label: "FAQ", href: "/faq" },
  { label: "Start Here", href: "/start-here" },
  { label: "Legal & Policy Information", href: "/legal" },
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
        {links.map((link) => (
          <li key={link.href}>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <FooterCol heading="Navigation" links={navLinks} />
          <FooterCol heading="Programs" links={programLinks} />
          <FooterCol heading="Explore" links={exploreLinks} />
        </div>

        <Divider className="my-12" />

        {/* Bottom center seal */}
        <div className="flex flex-col items-center gap-4">
          <Lockup orientation="stacked" scale="footer" showInstitutional={true} />
          <p className="font-body text-label uppercase tracking-[0.16em] text-secondary/50 text-center">
            All Rights Reserved © {new Date().getFullYear()} The Sovereign Identity Institution
          </p>
        </div>
      </div>
    </footer>
  );
}
