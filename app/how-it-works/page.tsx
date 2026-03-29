import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Finexio Works | AP Automation in 4 Steps",
  description: "Your team approves invoices. Finexio handles everything after — payment execution, fraud protection, and supplier management. See how it works.",
};

const steps = [
  {
    number: "01",
    title: "Connect Your ERP",
    description: "Finexio integrates with 200+ ERP and procurement platforms — Oracle, SAP, NetSuite, Coupa, BirchStreet, JAGGAER, and more. Setup takes days, not months. No rip-and-replace.",
    detail: "Your existing workflows stay intact. Finexio sits behind your approval layer and activates on approved invoices.",
  },
  {
    number: "02",
    title: "Your Team Approves",
    description: "Nothing changes for your AP team. Invoices flow through your existing approval process. Finexio only activates on fully approved payables — zero exceptions.",
    detail: "Your controllers and AP managers keep full oversight. Finexio is invisible until the moment payment is needed.",
  },
  {
    number: "03",
    title: "Finexio Executes",
    description: "Finexio automatically selects the optimal payment method — virtual card, ACH, or check — for each supplier. Virtual card payments generate rebates for your business.",
    detail: "Suppliers get paid on time, every time. Your team earns 1–2% rebates on card payments. Average customer earns $50K–$500K per year.",
  },
  {
    number: "04",
    title: "We Protect and Report",
    description: "Every payment is covered by the Finexio Shield — a $1 million fraud guarantee backed by J.P. Morgan rails. Full audit trails, real-time reporting, and SOC 2 Type II compliance.",
    detail: "Zero partners lost since launch. $0 fraud liability for your organization. Complete visibility into every dollar that moves.",
  },
];

const integrations = [
  "Oracle ERP Cloud", "SAP S/4HANA", "NetSuite", "Coupa", "BirchStreet", "JAGGAER",
  "Unimarket", "PairSoft", "Craftable", "Emburse", "Rillion", "Microsoft Dynamics",
];

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 text-center px-6" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            AP Automation, Simplified
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Team Approves.<br />
            <span style={{ color: "#fdda00" }}>Finexio Does the Rest.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            No rip-and-replace. No retraining. Finexio connects to your existing ERP and handles everything after approval — payment execution, fraud protection, supplier management, and rebate generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>See It in Action</a>
            <a href="/contact" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Talk to Sales</a>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#043886" }}>Four Steps. Zero Friction.</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>Most customers go live in under 5 business days.</p>
          </div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="grid md:grid-cols-12 gap-6 items-start rounded-2xl p-8" style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <div className="md:col-span-2 flex items-center gap-4 md:flex-col md:items-start">
                  <div className="text-5xl font-black" style={{ color: "#169ee3", lineHeight: 1 }}>{step.number}</div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-8 mt-2 ml-5" style={{ background: "#e2e8f0" }} />
                  )}
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#043886" }}>{step.title}</h3>
                  <p className="text-base leading-relaxed mb-3" style={{ color: "#374151" }}>{step.description}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Works With Your Stack</h2>
          <p className="text-lg mb-12" style={{ color: "#64748b" }}>200+ ERP and procurement integrations. If you run AP through it, Finexio connects to it.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {integrations.map((name) => (
              <span key={name} className="px-4 py-2 rounded-xl text-sm font-medium" style={{ background: "#f1f5f9", color: "#374151", border: "1px solid #e2e8f0" }}>{name}</span>
            ))}
            <span className="px-4 py-2 rounded-xl text-sm font-medium" style={{ background: "#043886", color: "white" }}>+ 188 more</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" style={{ background: "#043886" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "$5.8B+", label: "Payment Volume Processed" },
            { value: "5 days", label: "Average Onboarding Time" },
            { value: "0", label: "Partners Lost Since Launch" },
            { value: "$1M", label: "Fraud Guarantee" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: "#fdda00" }}>{stat.value}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#f8fafc" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Ready to See It Live?</h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>We will walk you through a personalized demo using your actual ERP and payment volume.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#043886", color: "white" }}>
            Book a 15-Minute Demo
          </a>
        </div>
      </section>
    </div>
  );
}
