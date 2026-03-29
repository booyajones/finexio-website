import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
