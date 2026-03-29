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
  title: "Finexio | Your Team Approves. Finexio Executes.",
  description: "Automate accounts payable end-to-end. Virtual card, ACH, and check payments with a $1M fraud guarantee. J.P. Morgan backed.",
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