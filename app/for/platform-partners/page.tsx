import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Platform Partners | Finexio Partner Program",
  description: "Embed Finexio's AP payment automation into your procurement, ERP, or hospitality platform. Generate revenue share, increase retention, and deliver a complete AP experience.",
};

const partnerTypes = [
  {
    icon: "🔗",
    title: "Procurement Platforms",
    description: "BirchStreet, JAGGAER, Unimarket, Coupa — Finexio embeds into procurement platforms to close the loop between PO approval and payment execution.",
  },
  {
    icon: "🏨",
    title: "Hospitality Technology",
    description: "Property management and hospitality procurement platforms embed Finexio to give operators a complete AP experience inside the tools they already use.",
  },
  {
    icon: "💼",
    title: "ERP & Finance Platforms",
    description: "NetSuite, Oracle, SAP, Microsoft Dynamics — Finexio integrates at the ERP layer so finance teams never leave their core system to execute payments.",
  },
  {
    icon: "🏢",
    title: "PE Portfolio Platforms",
    description: "Private equity firms standardize AP payments across portfolio companies through Finexio. Centralized reporting, distributed execution, zero infrastructure ownership.",
  },
];

const revenueShare = [
  { tier: "Starter", volume: "Up to $50M annual", share: "0.15% on card volume" },
  { tier: "Growth", volume: "$50M – $250M annual", share: "0.20% on card volume" },
  { tier: "Enterprise", volume: "$250M+ annual", share: "Custom — negotiated" },
];

export default function PlatformPartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #043886 0%, #0a4fa3 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(253,218,0,0.2)", color: "#fdda00" }}>
            Finexio Partner Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Embed Payments.<br />
            <span style={{ color: "#fdda00" }}>Generate Revenue.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Finexio's Partner Program lets procurement, ERP, and hospitality platforms embed best-in-class AP payment automation — and earn revenue share on every dollar that flows through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Become a Partner</a>
            <a href="/contact" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Talk to Partnerships</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1,300+", label: "Active Buyers" },
            { value: "3M+", label: "Enrolled Suppliers" },
            { value: "0", label: "Partners Lost" },
            { value: "$5.8B+", label: "Volume Processed" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #e2e8f0" }}>
              <div className="text-3xl font-black mb-1" style={{ color: "#043886" }}>{stat.value}</div>
              <div className="text-sm" style={{ color: "#64748b" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 px-6" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Who Partners With Finexio</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>We work with platforms that want to close the loop between procurement and payment — without building payments infrastructure themselves.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((type) => (
              <div key={type.title} className="rounded-2xl p-8" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#043886" }}>{type.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Share */}
      <section className="py-20 px-6" style={{ background: "#043886" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Revenue Share Model</h2>
            <p className="text-blue-200">Partners earn on every dollar of card volume their customers process through Finexio.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {revenueShare.map((tier) => (
              <div key={tier.tier} className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="text-lg font-bold text-white mb-2">{tier.tier}</div>
                <div className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{tier.volume}</div>
                <div className="text-2xl font-black" style={{ color: "#fdda00" }}>{tier.share}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partners Choose Finexio */}
      <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#043886" }}>Why Platforms Choose Finexio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "No payments infrastructure to build", body: "Finexio owns the rails, the compliance, and the supplier network. You embed the capability — we handle the complexity." },
              { title: "Revenue share from day one", body: "Partners earn on card volume from the first payment. No minimum thresholds. No delay." },
              { title: "Your brand, your experience", body: "White-label options available. Finexio can operate entirely under your product brand." },
              { title: "Implementation support included", body: "Dedicated partner engineering and customer success. We make your integration look flawless." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid #e2e8f0" }}>
                <h3 className="font-bold mb-3" style={{ color: "#043886" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Embed Finexio?</h2>
          <p className="text-blue-200 mb-8 text-lg">Our partnerships team will walk you through the integration options, revenue model, and go-to-market support available.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>
            Start the Partner Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
