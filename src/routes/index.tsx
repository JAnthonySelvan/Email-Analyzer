import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ApiShowcase } from "@/components/ApiShowcase";
import { DashboardPreview } from "@/components/DashboardPreview";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeRAXaL Email Provider Analyzer — Domain, DNS & Email Intelligence API" },
      {
        name: "description",
        content:
          "Enterprise API platform for domain analysis, email provider detection, SMTP & SSL validation, DNS inspection and real-time risk scoring.",
      },
      { property: "og:title", content: "BeRAXaL Email Provider Analyzer" },
      {
        property: "og:description",
        content:
          "Advanced Domain, DNS & Email Intelligence API by BeRAXaL Techies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen">
      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ApiShowcase />
        <DashboardPreview />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
