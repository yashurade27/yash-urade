import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Achievements", href: "/achievements" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-subtle p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4 sm:gap-6 justify-center md:justify-start">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="body-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}