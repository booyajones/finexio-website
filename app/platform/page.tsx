import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "The Finexio Payment Platform: integration layer, payment execution, and intelligence & reporting.",
};

const pillars = [
  {
    title: "Integration Layer",
    desc: "200+ pre-built ERP connectors. Deploy in days with zero disruption to existing workflows.",
    bullets: ["SAP, Oracle, NetSuite, Sage, Acumatica", "Real-time data sync and validation", "Secure API and SFTP connections"],
    color: "#043886",
  },
  {
    title: "Payment Execution",
    desc: "Intelligent payment routing across ACH, virtual card, and check. Every payment, every time.",
    bullets: ["Multi-rail execution engine", "Automated payment matching and reconciliation", "Exception handling and retry logic"],
    color: "#169ee3",
  },
  {
    title: "Intelligence & Reporting",
    desc: "Real-time visibility across all payment activity. Dashboards, alerts, and analytics built for finance teams.",
    bullets: ["Live payment status and audit trail", "Rebate and savings tracking", "Custom reporting and data export"],
    color: "#28224b",
  },
];

const badges = ["SOC 2 Type II", "PCI DSS Level 1", "ISO 27001", "Bank-Grade Encryption", "99.9% Uptime SLA"];

const integrations = ["SAP", "Oracle", "NetSuite", "Microsoft Dynamics", "Sage Intacct", "Acumatica", "Epicor", "Infor", "QuickBooks Enterprise", "Coupa", "Ariba", "Workday"];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(22,158,227,0.4) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#adddf5" }}>The Platform</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            The Finexio<br />Payment Platform
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            Enterprise-grade infrastructure built to process billions in B2B payments securely and reliably.
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3" style={{ color: "#043886" }}>How the Platform Connects</h2>
            <p className="text-base" style={{ color: "#303941", opacity: 0.7 }}>From your ERP to your suppliers in one continuous flow.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { label: "Your ERP", sublabel: "SAP, Oracle, NetSuite, +200", bg: "#043886" },
              { label: "Finexio Hub", sublabel: "Routing & Execution Engine", bg: "#169ee3" },
              { label: "Payment Rails", sublabel: "ACH, Virtual Card, Check", bg: "#28224b" },
            ].map((node, i) => (
              <div key={node.label} className="flex items-center gap-4 flex-1">
                <div className="flex-1 rounded-2xl p-6 text-center" style={{ background: node.bg }}>
                  <p className="text-base font-bold text-white">{node.label}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{node.sublabel}</p>
                </div>
                {i < 2 && (
                  <div className="flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#169ee3" strokeWidth="2" className="w-8 h-8">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section id="execution" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: "#043886" }}>Three Platform Pillars</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#303941", opacity: 0.7 }}>Every component designed to maximize reliability, security, and ROI for your AP team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl p-8" style={{ background: "#f7f8f9", border: "1px solid #ececec" }}>
                <div className="w-12 h-12 rounded-xl mb-5" style={{ background: p.color }} />
                <h3 className="text-xl font-black mb-3 tracking-tight" style={{ color: "#043886" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#303941", opacity: 0.75 }}>{p.desc}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "#303941" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#169ee3" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20" style={{ background: "#043886" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Security & Compliance</h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            Finexio is certified and audited against the most rigorous financial security standards.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <div key={badge} className="px-5 py-2.5 rounded-full text-sm font-bold" style={{ background: "rgba(255,255,255,0.1)", color: "#adddf5", border: "1px solid rgba(173,221,245,0.3)" }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4" style={{ color: "#043886" }}>200+ ERP Integrations</h2>
          <p className="text-base mb-10" style={{ color: "#303941", opacity: 0.7 }}>Pre-built connectors for every major ERP and financial system.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((erp) => (
              <div key={erp} className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: "#ffffff", border: "1px solid #ececec", color: "#303941" }}>
                {erp}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
