import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "./Features";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_ogk2nm8";
const EMAILJS_TEMPLATE_ID = "template_5f5z5ze";
const EMAILJS_PUBLIC_KEY = "MMhRX9pt54FYZB155";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all required fields");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Send Email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          mobile: form.mobile,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      // Reset Form
      setForm({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something secure together"
          subtitle="If you need a customized solution for your business requirements or would like access to our API services, please contact us. We will provide the best solution tailored to your needs."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-2xl gradient-border p-1"
        >
          <div className="rounded-[calc(var(--radius-lg)-1px)] glass-strong p-6 md:p-8">

            {/* Name + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder="John Doe"
              />

              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="john@company.com"
              />
            </div>

            {/* Mobile */}
            <div className="mt-4">
              <Field
                label="Mobile Number"
                value={form.mobile}
                onChange={(v) => update("mobile", v)}
                placeholder="+91 9876543210"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Description / Message
              </label>

              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your project or business requirement..."
                className="w-full resize-none rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--neon-blue)]/60"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.01] glow-primary disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--neon-blue)]/60"
      />
    </div>
  );
}