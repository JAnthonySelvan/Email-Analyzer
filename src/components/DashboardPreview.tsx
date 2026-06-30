import { motion } from "framer-motion";
import { Activity, BarChart3, Globe2, Lock, Mail, Shield, TrendingUp, Zap } from "lucide-react";
import { SectionHeading } from "./Features";

const sidebar = [
  { icon: BarChart3, label: "Overview", active: true },
  { icon: Globe2, label: "Domains" },
  { icon: Mail, label: "Providers" },
  { icon: Lock, label: "SSL Monitor" },
  { icon: Shield, label: "Security" },
  { icon: Activity, label: "Logs" },
];

const stats = [
  { label: "Domains Checked", value: "1.42M", change: "+12.4%", color: "var(--neon-cyan)" },
  { label: "Avg Risk Score", value: "27.5", change: "-3.1%", color: "var(--neon-green)" },
  { label: "SSL Valid", value: "98.2%", change: "+0.8%", color: "var(--neon-blue)" },
  { label: "Threats Blocked", value: "8,921", change: "+22.1%", color: "var(--neon-purple)" },
];

const providers = [
  { name: "Microsoft", pct: 42, color: "var(--neon-blue)" },
  { name: "Google", pct: 31, color: "var(--neon-cyan)" },
  { name: "Zoho", pct: 12, color: "var(--neon-purple)" },
  { name: "Custom", pct: 9, color: "var(--neon-green)" },
  { name: "Other", pct: 6, color: "#facc15" },
];

const bars = [38, 62, 48, 75, 55, 88, 72, 95, 68, 80, 90, 70];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Dashboard"
          title="Mission-control for your domain intelligence"
          />

       
      </div>
    </section>
  );
}
