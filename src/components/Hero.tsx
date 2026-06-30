import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Search,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Server,
  Mail,
  Globe,
} from "lucide-react";
import { Particles } from "./Particles";


export function Hero() {
  const [domain, setDomain] = useState("test.com");
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [result, setResult] = useState<any>(null);

  // const API = import.meta.env.VITE_API_URL;

  const API = "https://domain-analyzer-api.somee.com";
  console.log(API);



  useEffect(() => {
    if (result) {
      setShowResults(true);
    }
  }, [result]);

 const handleAnalyze = async () => {
  try {
    setAnalyzing(true);
    setShowResults(false);

    const response = await fetch(
      `${API}/api/domain/check`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: domain,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("API Failed");
    }

    const data = await response.json();

    console.log("API Response:", data);

    setResult(data);
  } catch (error) {
    console.error(error);
    alert("Failed to analyze domain");
  } finally {
    setAnalyzing(false);
  }
};

  const cards = result
    ? [
        {
          icon: Mail,
          label: "Provider",
          value: result.provider || "N/A",
          color: "var(--neon-blue)",
        },
        {
          icon: Shield,
          label: "SSL",
          value: result.sslValid ? "Valid" : "Invalid",
          color: result.sslValid
            ? "var(--neon-green)"
            : "var(--destructive)",
        },
        {
          icon: Server,
          label: "SMTP",
          value: result.smtpValid ? "Valid" : "Invalid",
          color: result.smtpValid
            ? "var(--neon-green)"
            : "var(--destructive)",
        },
        {
          icon: CheckCircle2,
          label: "MX Records",
          value: result.hasMxRecords ? "Found" : "Missing",
          color: "var(--neon-cyan)",
        },
        {
          icon: AlertTriangle,
          label: "Risk Level",
          value: result.riskLevel || "UNKNOWN",
          color:
            result.riskLevel === "LOW"
              ? "var(--neon-green)"
              : result.riskLevel === "MEDIUM"
              ? "#facc15"
              : "#ef4444",
        },
      ]
    : [];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />

      <Particles count={50} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Enterprise Domain</span>
            <br />
            <span className="text-foreground">& Email Intelligence</span>
            <br />
            <span className="text-gradient">Platform</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Analyze domains, detect email providers, validate SMTP,
            verify SSL certificates, inspect DNS records, and identify
            risk scores in real time.
          </p>
        </motion.div>

        {/* Analyzer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="gradient-border p-1">
            <div className="rounded-[calc(var(--radius-lg)-1px)] glass-strong p-6 md:p-8">
              {/* Input */}
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-3">
                  <Search className="h-4 w-4 text-muted-foreground" />

                  <input
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full bg-transparent text-sm font-mono outline-none"
                    placeholder="Enter domain or Email"
                  />
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02] disabled:opacity-70"
                >
                  {analyzing ? "Analyzing..." : "Analyze Domain"}
                </button>
              </div>

              {/* Result Cards */}
              {showResults && (
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
                  {cards.map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-lg border border-border bg-background/40 p-3"
                    >
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <r.icon
                          className="h-3 w-3"
                          style={{ color: r.color }}
                        />
                        {r.label}
                      </div>

                      <div
                        className="mt-1 text-sm font-semibold"
                        style={{ color: r.color }}
                      >
                        {r.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Detailed Response */}
              {result && (
                <div className="mt-8 rounded-xl border border-border bg-background/30 p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <Globe className="h-5 w-5 text-[var(--neon-cyan)]" />
                    Domain Details
                  </h3>

                  <div className="grid gap-3 text-sm md:grid-cols-2">
                    <div>
                      <span className="text-muted-foreground">
                        Domain:
                      </span>{" "}
                      {result.domain}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Provider:
                      </span>{" "}
                      {result.provider}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Domain Active:
                      </span>{" "}
                      {result.isDomainActive ? "Yes" : "No"}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Website Reachable:
                      </span>{" "}
                      {result.websiteReachable ? "Yes" : "No"}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Risk Score:
                      </span>{" "}
                      {result.riskScore}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Spam Score:
                      </span>{" "}
                      {result.spamScore}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        SSL Expiry:
                      </span>{" "}
                      {result.sslExpiry
                        ? new Date(result.sslExpiry).toLocaleDateString()
                        : "N/A"}
                    </div>

                    <div>
                      <span className="text-muted-foreground">
                        Disposable Email:
                      </span>{" "}
                      {result.isDisposableEmail ? "Yes" : "No"}
                    </div>
                  </div>

                  {/* MX Records */}
                  <div className="mt-5">
                    <h4 className="mb-2 font-semibold">MX Records</h4>

                    <div className="space-y-2">
                      {result.mxRecords?.map(
                        (mx: string, index: number) => (
                          <div
                            key={index}
                            className="rounded-md bg-black/20 px-3 py-2 font-mono text-xs"
                          >
                            {mx}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* IP Addresses */}
                  <div className="mt-5">
                    <h4 className="mb-2 font-semibold">
                      IP Addresses
                    </h4>

                    <div className="space-y-2">
                      {result.ipAddresses?.map(
                        (ip: string, index: number) => (
                          <div
                            key={index}
                            className="rounded-md bg-black/20 px-3 py-2 font-mono text-xs"
                          >
                            {ip}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}