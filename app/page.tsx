import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import LogoBar from "@/components/home/LogoBar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import ShieldSection from "@/components/home/ShieldSection";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Team Approves. Finexio Executes. | B2B Payment Automation",
  description:
    "Finexio automates accounts payable end-to-end. Virtual card, ACH, and check payments with a $1M fraud guarantee. $5.8B+ processed, J.P. Morgan backed.",
  openGraph: {
    title: "Your Team Approves. Finexio Executes.",
    description: "Your team approves. Finexio executes, protects, and pays you back. $5.8B+ processed, J.P. Morgan backed.",
    url: "https://finexio.com",
    siteName: "Finexio",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoBar />
      <Features />
      <HowItWorks />
      <ShieldSection />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
