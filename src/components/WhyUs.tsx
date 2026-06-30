import { motion } from "framer-motion";
import { Cloud, Cpu, Lock, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { SectionHeading } from "./Features";

const items = [
  { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC2 aligned, end-to-end encryption, isolated tenants." },
  { icon: Zap, title: "Real-Time Analysis", desc: "Sub-second responses powered by edge resolvers." },
  { icon: Rocket, title: "High Performance APIs", desc: "Streaming pipelines that handle 10K+ RPS effortlessly." },
  { icon: Cpu, title: "Scalable Architecture", desc: "Horizontal scaling with auto-managed clusters." },
  { icon: Sparkles, title: "ASP.NET Core Backend", desc: "Battle-tested .NET stack with first-class observability." },
  { icon: Cloud, title: "Cloud Ready Infrastructure", desc: "Multi-region deployments on AWS, Azure & GCP." },
  { icon: Lock, title: "Secure Integrations", desc: "OAuth2, mTLS, scoped API keys with rotation policies." },
];

export function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why BeRAXaL"
          title="The platform built for serious teams"
          subtitle="Designed from the ground up for security, scale, and developer joy."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl glass p-5 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-white/10">
                <it.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
              </div>
              <h3 className="text-sm font-semibold">{it.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
