import { motion } from "framer-motion";
import {
  Activity, AlertOctagon, Ban, Bot, Database, FileCheck,
  Globe, Lock, Mail, Search, ShieldAlert, Zap,
} from "lucide-react";

const features = [
  { icon: Database, title: "MX Record Detection", desc: "Comprehensive MX lookup across global DNS resolvers." },
  { icon: Mail, title: "Email Provider Identification", desc: "Detect Microsoft, Google, Zoho and 200+ providers." },
  { icon: Lock, title: "SSL Certificate Validation", desc: "Verify chain, expiry, issuer and TLS configuration." },
  { icon: FileCheck, title: "SMTP Validation", desc: "Real SMTP handshake to verify mailbox availability." },
  { icon: ShieldAlert, title: "Risk & Spam Scoring", desc: "AI-powered scoring engine with 30+ risk signals." },
    { icon: Zap, title: "API-Based Automation", desc: "Plug-and-play REST endpoints for workflows at scale." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything you need to inspect a domain"
          subtitle="A complete suite of intelligence endpoints engineered for security teams, developers and enterprises."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-xl glass p-6 transition-all hover:border-white/20 hover:-translate-y-1"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-cyber)" }}
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-white/10">
                  <f.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--neon-cyan)]">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
