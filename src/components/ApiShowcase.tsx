import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy, Play } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./Features";

const request = `{
  "input": "skagitfarmers.com"
}`;

const response = `{
  "domain": "skagitfarmers.com",
  "provider": "Microsoft",
  "mxRecords": [
    "skagitfarmers-com.mail.protection.outlook.com"
  ],
  "ipAddresses": ["209.87.159.245"],
  "isDomainActive": true,
  "hasMxRecords": true,
  "websiteReachable": false,
  "sslValid": true,
  "smtpValid": true,
  "riskScore": 40,
  "riskLevel": "MEDIUM"
}`;

function highlight(json: string) {
  return json
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?)/g,
      (match) => {
        let cls = "text-[var(--neon-cyan)]";
        if (/^"/.test(match)) {
          cls = /:$/.test(match)
            ? "text-[var(--neon-purple)]"
            : "text-[var(--neon-green)]";
        } else if (/true|false/.test(match)) cls = "text-[var(--neon-blue)]";
        else if (/null/.test(match)) cls = "text-muted-foreground";
        else cls = "text-amber-400";
        return `<span class="${cls}">${match}</span>`;
      })
    .replace(/(\{|\}|\[|\])/g, '<span class="text-muted-foreground">$1</span>');
}

function CodeBlock({ title, code, lang }: { title: string; code: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="overflow-hidden rounded-xl glass">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </span>
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-[var(--neon-cyan)]">
            {lang}
          </span>
        </div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-white/5 hover:text-foreground"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlight(code) }}
      />
    </div>
  );
}

export function ApiShowcase() {
  return (
    <section id="api" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="API"
          title="Built for developers, trusted by enterprises"
          subtitle="A single POST request returns a complete intelligence report. Clean JSON, predictable latency, zero magic."
        />
{/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xl glass p-4">
              <span className="rounded-md bg-[var(--neon-green)]/15 px-2.5 py-1 font-mono text-xs font-bold text-[var(--neon-green)]">
                POST
              </span>
              <span className="font-mono text-sm">/api/domain/check</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-green)] animate-pulse" />
                Operational
              </span>
            </div>
            <CodeBlock title="Request" lang="json" code={request} />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border glass px-4 py-3 text-sm font-semibold hover:bg-white/5">
              <Play className="h-4 w-4 text-[var(--neon-cyan)]" /> Send Request
            </button>
          </div>
          <div>
            <CodeBlock title="Response" lang="200 OK" code={response} />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Latency", value: "84ms" },
                { label: "Uptime", value: "99.99%" },
                { label: "Regions", value: "12" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg glass p-3 text-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-gradient">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
