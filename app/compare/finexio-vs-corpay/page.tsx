import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finexio vs. Corpay (Paymerang) | AP Automation Comparison",
  description: "See how Finexio compares to Corpay and Paymerang on fraud protection, onboarding speed, ERP integrations, and pricing model.",
};

const rows = [
  { feature: "Fraud guarantee", finexio: "$1M guarantee on every payment", corpay: "No published guarantee" },
  { feature: "Onboarding time", finexio: "5 business days", corpay: "4–12 weeks typical" },
  { feature: "ERP integrations", finexio: "200+ pre-built connectors", corpay: "Limited native integrations" },
  { feature: "Pricing model", finexio: "Flat subscription + rebate share", corpay: "Fee-per-transaction + setup costs" },
  { feature: "Supplier onboarding", finexio: "Managed by Finexio", corpay: "Requires customer involvement" },
  { feature: "Payment rails", finexio: "Virtual card, ACH, check", corpay: "Virtual card, ACH, check" },
  { feature: "Rebate transparency", finexio: "Full visibility in dashboard", corpay: "Limited reporting" },
  { feature: "Backed by", finexio: "J.P. Morgan, Visa, $65M Series B", corpay: "FLEETCOR / public company" },
  { feature: "SOC 2 Type II", finexio: "✅ Certified", corpay: "✅ Certified" },
];

export default function FinexioVsCorpayPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Finexio vs. Corpay
          </h1>
          <p className="text-xl text-blue-100">
            Corpay (formerly Paymerang) is a legacy AP automation vendor. Finexio was built for the modern mid-market — faster onboarding, stronger fraud protection, better transparency.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <div className="grid grid-cols-3 py-4 px-6 text-sm font-bold" style={{ background: "#043886", color: "white" }}>
              <div>Capability</div>
              <div className="text-center" style={{ color: "#fdda00" }}>Finexio</div>
              <div className="text-center" style={{ color: "rgba(255,255,255,0.6)" }}>Corpay / Paymerang</div>
            </div>
            {rows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 py-4 px-6 text-sm items-center" style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <div className="font-medium" style={{ color: "#374151" }}>{row.feature}</div>
                <div className="text-center font-semibold" style={{ color: "#043886" }}>{row.finexio}</div>
                <div className="text-center" style={{ color: "#94a3b8" }}>{row.corpay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">See Finexio vs. Corpay Side-by-Side</h2>
          <p className="text-blue-200 mb-8">We will model both options on your actual AP volume so the comparison is real, not a slide deck.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>
            Book a Comparison Demo
          </a>
        </div>
      </section>
    </div>
  );
}
