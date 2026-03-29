import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import LogoCloud from "@/components/home/LogoCloud";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AP Payments as a Service | Finexio",
  description:
    "Finexio manages payment delivery, supplier enablement, fraud prevention, and exceptions — backed by a $1M guarantee. You approve. We handle everything else. Go live in ~60 days.",
  openGraph: {
    title: "AP Payments as a Service | Finexio",
    description: "Your team approves. Finexio executes, protects, and pays you back.",
    url: "https://finexio.com",
    siteName: "Finexio",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
