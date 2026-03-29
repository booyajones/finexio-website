import ROICalculator from "./ROICalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Finexio AP Automation",
  description: "Simple, transparent pricing. Starting at $1,200/mo.",
};

const plans = [
  { name: "Starter", price: "$1,200", period: "/mo", description: "For mid-market teams.", highlight: false, features: ["Virtual card, ACH, check", "Up to $10M volume", "100+ ERP integrations", "$500K guarantee", "Supplier support", "Chat support"], cta: "Get Started", ctaHref: "/contact" },
  { name: "Growth", price: "$2,800", period: "/mo", description: "For scaling teams with $10M to $100M in AP.", highlight: true, features: ["Everything in Starter", "$10M to $100M volume", "200+ integrations", "$1M guarantee", "Customer success manager", "Advanced reporting", "Priority support", "Supplier campaigns"], cta: "Start Free Trial", ctaHref: "/contact" },
  { name: "Enterprise", price: "Custom", period: "", description: "For PE portfolios with $100M+ in AP.", highlight: false, features: ["Everything in Growth", "Unlimited volume", "$1M guarantee", "Multi-entity support", "White-glove implementation", "SLA guarantee", "Security review", "Custom terms"], cta: "Talk to Sales", ctaHref: "/contact" },
];

const faqs = [
  { q: "Is there a setup fee?", a: "No setup fees on Starter or Growth. Most customers are live within 5 business days." },
  { q: "How does the $1M guarantee work?", a: "We cover up to $1 million if fraud or error occurs. It is conviction backed by J.P. Morgan rails." },
  { q: "What rebates can I earn?", a: "Customers typically earn 1-2% on virtual card payments. At $5M volume, that is $50K to $100K per year." },
  { q: "Can I switch plans?", a: "Yes. Plans are month-to-month. Enterprise contracts are annual with negotiated terms." },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AP Automation That <span style={{ color: "#fdda00" }}>Pays for Itself</span></h1>
          <p className="text-xl text-blue-100">Virtual card rebates alone typically cover the entire platform cost. Most customers see positive ROI within 90 days.</p>
        </div>
      </section>
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl overflow-hidden" style={{ background: plan.highlight ? "linear-gradient(135deg, #043886, #0a4fa3)" : "white", border: plan.highlight ? "none" : "1px solid #e2e8f0", boxShadow: plan.highlight ? "0 20px 60px rgba(4,56,134,0.3)" : "0 4px 20px rgba(0,0,0,0.06)", transform: plan.highlight ? "scale(1.04)" : "scale(1)" }}>
                {plan.highlight && <div className="text-center py-2 text-xs font-bold uppercase tracking-widest" style={{ background: "#fdda00", color: "#043886" }}>Most Popular</div>}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: plan.highlight ? "white" : "#043886" }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold" style={{ color: plan.highlight ? "#fdda00" : "#043886" }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#64748b" }}>{plan.period}</span>
                  </div>
                  <p className="text-sm mb-8" style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#64748b" }}>{plan.description}</p>
                  <a href={plan.ctaHref} className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 mb-8" style={{ background: plan.highlight ? "#fdda00" : "#043886", color: plan.highlight ? "#043886" : "white" }}>{plan.cta}</a>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: plan.highlight ? "#fdda00" : "#169ee3" }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span className="text-sm" style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "#374151" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="roi" className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Calculate Your AP Savings</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>See how much Finexio can earn and save your team based on your payment volume.</p>
          </div>
          <ROICalculator />
        </div>
      </section>
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#043886" }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #e2e8f0" }}>
                <h3 className="font-semibold mb-3" style={{ color: "#043886" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See Your ROI?</h2>
          <p className="text-blue-200 mb-8">Get a personalized demo and savings analysis from our team.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Get a Free Demo</a>
        </div>
      </section>
    </div>
  );
}