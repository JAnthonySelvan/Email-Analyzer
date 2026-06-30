import { Github, Linkedin, Mail, Shield, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] glow-primary">
                <Shield className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-bold">BeRAXaL Email Provider Analyzer</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Domain · DNS · Email Intelligence
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enterprise-grade domain and email intelligence APIs built for modern security
              teams, SaaS platforms and developer tooling.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-2.5 text-sm font-semibold text-background glow-primary hover:scale-105 transition"
            >
              Contact Us
            </a>
          </div>

          <FooterCol title="Product" links={[
            { label: "Features", href: "#features" },
            { label: "API Docs", href: "#api" },
            { label: "Dashboard", href: "#dashboard" },
            { label: "Pricing", href: "#pricing" },
          ]} />

          {/* <FooterCol title="Company" links={[
            { label: "About", href: "#" },
            { label: "Security", href: "#" },
            { label: "Status", href: "#" },
            { label: "Contact", href: "#contact" },
          ]} /> */}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BeRAXaL Techies. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-white/5 hover:text-foreground transition"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))} */}
          </div>
          <p className="text-xs font-semibold">
            <span className="text-muted-foreground">Powered by </span>
            <span className="text-gradient">BeRAXaL Techies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title, links,
}: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
