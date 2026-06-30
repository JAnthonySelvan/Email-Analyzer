import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#api", label: "API" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] glow-primary">
            <Shield className="h-5 w-5 text-background" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">BeRAXaL</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Email Analyzer
            </div>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* <a
            href="#api"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Docs
          </a> */}
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-2 text-sm font-semibold text-background transition-all hover:scale-105 glow-primary"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
