import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "./Features";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    desc: "For developers exploring the API.",
    features: [
      "1,000 API requests / month",
      "Basic domain & MX lookups",
      "Community support",
      "Public Swagger docs",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  // {
  //   name: "Pro",
  //   price: "$49",
  //   period: "/month",
  //   desc: "For growing teams and SaaS apps.",
  //   features: [
  //     "100,000 API requests / month",
  //     "Full intelligence endpoints",
  //     "SSL & SMTP validation",
  //     "Risk scoring & disposable detection",
  //     "Priority email support",
  //     "99.95% SLA",
  //   ],
  //   cta: "Start Pro",
  //   highlighted: true,
  // },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume and regulated workloads.",
    features: [
      "Unlimited API requests",
      "Dedicated infrastructure",
      "Custom AI risk models",
      "SOC2 & SSO/SAML",
      "24/7 dedicated support",
      "99.99% SLA + on-call",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free. Scale when you're ready. No hidden fees."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${p.highlighted ? "gradient-border" : ""}`}
            >
              <div
                className={`relative rounded-xl ${
                  p.highlighted ? "glass-strong p-7" : "glass p-7"
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold text-gradient">{p.price}</span>
                  <span className="pb-1 text-xs text-muted-foreground">{p.period}</span>
                </div>
                <a
                  href="#contact"
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    p.highlighted
                      ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-background glow-primary hover:scale-[1.02]"
                      : "border border-border hover:bg-white/5"
                  }`}
                >
                  {p.cta}
                </a>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--neon-green)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
