import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AP Payments as a Service | Finexio",
  description: "Finexio's AP Payments as a Service model means you never own the payments infrastructure. We handle execution, fraud protection, supplier onboarding, and rebate generation.",
};

const capabilities = [
  {
    icon: "💳",
    title: "Multi-Rail Payment Execution",
    description: "Virtual card, ACH, and check — Finexio selects the optimal payment rail for each supplier automatically, maximizing rebates without any manual work.",
  },
  {
    icon: "🛡️",
    title: "$1M Fraud Guarantee",
    description: "Every payment is covered by the Finexio Shield. If a fraudulent or erroneous payment occurs, we cover up to $1 million. Backed by J.P. Morgan rails.",
  },
  {
    icon: "🔗",
    title: "200+ ERP Integrations",
    description: "Oracle, SAP, NetSuite, Coupa, BirchStreet — connect your existing stack in days. No rip-and-replace. No retraining your AP team.",
  },
  {
    icon: "📦",
    title: "Supplier Onboarding & Management",
    description: "Finexio manages supplier enrollment, payment preferences, and ongoing communications. Your team approves. We do everything else.",
  },
  {
    icon: "💰",
    title: "Rebate Generation",
    description: "Earn 1–2% on virtual card payments. Most customers generate $50K–$500K per year in rebates — often covering the full platform cost.",
  },
  {
    icon: "📊",
    title: "Real-Time Reporting",
    description: "Full audit trails, payment status, and rebate tracking in one dashboard. SOC 2 Type II certified. Complete visibility into every dollar.",
  },
];

const vsTraditional = [
  { label: "Payment infrastructure ownership", traditional: "Your IT team", finexio: "Finexio owns it" },
  { label: "Fraud liability", traditional: "Your organization", finexio: "$0 — $1M guarantee" },
  { label: "Supplier onboarding", traditional: "Manual, weeks", finexio: "Automated, days" },
  { label: "Payment rail optimization", traditional: "Manual selection", finexio: "AI-optimized automatically" },
  { label: "Rebate capture", traditional: "Rarely maximized", finexio: "1–2% on card volume" },
  { label: "ERP integration", traditional: "Custom dev work", finexio: "200+ pre-built connectors" },
  { label: "Go-live timeline", traditional: "3–6 months", finexio: "5 business days" },
];

export default function APPaymentsAsAServicePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #043886 0%, #0a4fa3 100%)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(253,218,0,0.2)", color: "#fdda00" }}>
              AP Payments as a Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Stop Running Payments.<br />
              <span style={{ color: "#fdda00" }}>Start Running the Business.</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Finexio replaces your AP payments infrastructure entirely. You keep the approval workflow. We handle everything after — execution, fraud protection, supplier management, and rebate generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/get-started" className="px-8 py-4 rounded-xl font-semibold text-lg text-center transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>See How It Works</a>
              <a href="/pricing" className="px-8 py-4 rounded-xl font-semibold text-lg text-center transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>View Pricing</a>
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="text-sm font-semibold mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>WHAT YOUR TEAM HANDLES</div>
            <div className="space-y-3 mb-8">
              {["Invoice receipt", "Three-way match", "Manager approval", "Controller sign-off"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-sm font-semibold mb-6" style={{ color: "#fdda00" }}>WHAT FINEXIO HANDLES</div>
            <div className="space-y-3">
              {["Payment execution", "Fraud protection", "Supplier enrollment", "Rail optimization", "Rebate capture", "Audit trail"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#fdda00" }}>
                    <svg className="w-3 h-3" fill="#043886" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#043886" }}>Everything Included. Nothing to Build.</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>AP Payments as a Service means the full stack — from execution to protection to reporting — is Finexio's problem, not yours.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#043886" }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Traditional AP vs. AP as a Service</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>The old model puts the burden on your team. Finexio flips that entirely.</p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <div className="grid grid-cols-3 py-4 px-6 text-sm font-bold" style={{ background: "#043886", color: "white" }}>
              <div>Capability</div>
              <div className="text-center">Traditional AP</div>
              <div className="text-center" style={{ color: "#fdda00" }}>Finexio</div>
            </div>
            {vsTraditional.map((row, i) => (
              <div key={row.label} className="grid grid-cols-3 py-4 px-6 text-sm items-center" style={{ background: i % 2 === 0 ? "#f8fafc" : "white", borderTop: "1px solid #e2e8f0" }}>
                <div className="font-medium" style={{ color: "#374151" }}>{row.label}</div>
                <div className="text-center" style={{ color: "#94a3b8" }}>{row.traditional}</div>
                <div className="text-center font-semibold" style={{ color: "#043886" }}>{row.finexio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Hand Off AP Payments?</h2>
          <p className="text-blue-100 mb-8 text-lg">15-minute demo. We will show you exactly what moves off your team's plate.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Book Your Demo</a>
        </div>
      </section>
    </div>
  );
}
