import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finexio Shield | $1 Million Fraud Guarantee",
  description: "The Finexio Shield covers your organization up to $1 million if fraud or error occurs on any Finexio-processed payment. Backed by J.P. Morgan rails and SOC 2 Type II compliance.",
};

const protections = [
  {
    title: "Business Email Compromise (BEC)",
    description: "Fraudulent invoice redirection via compromised email. Finexio's payment verification layer catches misdirected payments before they execute.",
  },
  {
    title: "Vendor Impersonation",
    description: "Fake supplier accounts designed to intercept legitimate payments. Supplier identity verification and payment confirmation built in.",
  },
  {
    title: "ACH Fraud",
    description: "Unauthorized ACH debits or routing manipulation. Dual-control authorization and anomaly detection on every ACH transaction.",
  },
  {
    title: "Check Fraud",
    description: "Altered, forged, or counterfeit checks. Finexio's positive pay integration and check verification eliminates exposure.",
  },
  {
    title: "Internal Payment Errors",
    description: "Duplicate payments, wrong amounts, or erroneous vendors. Finexio's pre-payment audit layer catches errors before funds move.",
  },
  {
    title: "Processing Errors",
    description: "System-side errors on payment execution. If Finexio makes an error on our end, we cover it. Full stop.",
  },
];

const terms = [
  "Applies to all payments processed through the Finexio platform",
  "Coverage up to $1,000,000 per incident",
  "No deductibles, no waiting periods",
  "Backed by J.P. Morgan commercial banking rails",
  "Available to all plan tiers — Starter, Growth, and Enterprise",
  "Fraud determination completed within 5 business days",
];

export default function ShieldPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ background: "rgba(253,218,0,0.15)", border: "2px solid rgba(253,218,0,0.4)" }}>
            <span className="text-4xl">🛡️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Finexio Shield
          </h1>
          <p className="text-2xl font-semibold mb-6" style={{ color: "#fdda00" }}>
            $1 Million Fraud Guarantee
          </p>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            We do not just say we are secure. We back it with $1,000,000. If fraud or error occurs on any Finexio-processed payment, we cover your organization up to $1 million. No deductibles. No exceptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Get Protected</a>
            <a href="/contact" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Talk to Sales</a>
          </div>
        </div>
      </section>

      {/* The Cost of AP Fraud */}
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>AP Fraud Is Not a Rare Event</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>73% of finance organizations were targeted by payment fraud in the last year. The average loss per incident: $500,000.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "73%", label: "of finance teams hit by fraud", sub: "in the past 12 months" },
              { stat: "$500K", label: "average loss per incident", sub: "Association for Financial Professionals" },
              { stat: "BEC #1", label: "most common attack vector", sub: "Business Email Compromise dominates AP fraud" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl p-8 text-center" style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#043886" }}>{item.stat}</div>
                <div className="font-semibold mb-1" style={{ color: "#374151" }}>{item.label}</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Shield Covers */}
      <section className="py-24 px-6" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>What the Shield Covers</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>Every major AP fraud vector and payment error — covered.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {protections.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 flex gap-4" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#043886" }}>
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "#043886" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Terms */}
      <section className="py-20 px-6" style={{ background: "#043886" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Guarantee Terms</h2>
          <div className="space-y-4">
            {terms.map((term) => (
              <div key={term} className="flex items-start gap-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#fdda00" }}>
                  <svg className="w-3 h-3" fill="#043886" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="text-blue-100">{term}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-6 text-center" style={{ background: "rgba(253,218,0,0.1)", border: "1px solid rgba(253,218,0,0.3)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Backed by J.P. Morgan Commercial Banking · SOC 2 Type II Certified · 0 Partners Lost Since Launch</p>
          </div>
        </div>
      </section>

      {/* Backed by */}
      <section className="py-20 px-6 text-center" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>The Infrastructure Behind the Guarantee</h2>
          <p className="text-lg mb-10" style={{ color: "#64748b" }}>The Finexio Shield is not an insurance policy — it is a structural commitment backed by the rails, compliance, and security architecture we have built since day one.</p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "J.P. Morgan", sub: "Banking Rails" },
              { label: "SOC 2 Type II", sub: "Certified" },
              { label: "Visa Commercial", sub: "Partner" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #e2e8f0" }}>
                <div className="font-bold text-lg mb-1" style={{ color: "#043886" }}>{item.label}</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Get the Shield on Every Payment</h2>
          <p className="text-blue-200 mb-8 text-lg">The guarantee applies to all Finexio customers on every plan. No add-ons. No extra cost.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>
            Get Started — 5-Day Onboarding
          </a>
        </div>
      </section>
    </div>
  );
}
