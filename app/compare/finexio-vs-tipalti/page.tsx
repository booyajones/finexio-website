import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finexio vs. Tipalti | AP Automation Comparison",
  description: "Finexio vs. Tipalti: see how they compare on mid-market AP, fraud protection, ERP integrations, onboarding speed, and pricing.",
};

const rows = [
  { feature: "Primary market focus", finexio: "Mid-market AP automation", tipalti: "Global mass payments / supplier payouts" },
  { feature: "Fraud guarantee", finexio: "$1M on every payment", tipalti: "No published guarantee" },
  { feature: "Onboarding time", finexio: "5 business days", tipalti: "4–8 weeks typical" },
  { feature: "ERP integrations", finexio: "200+ AP-specific connectors", tipalti: "Broad but complex to configure" },
  { feature: "Pricing model", finexio: "Flat subscription", tipalti: "Tiered + per-transaction fees" },
  { feature: "Virtual card rebates", finexio: "1–2% back to customer", tipalti: "Variable, not always customer-facing" },
  { feature: "Fraud protection architecture", finexio: "Built for AP fraud (BEC, vendor impersonation)", tipalti: "Built for global mass payment compliance" },
  { feature: "Supplier network", finexio: "3M+ enrolled suppliers", tipalti: "Large global network" },
  { feature: "SOC 2 Type II", finexio: "✅ Certified", tipalti: "✅ Certified" },
];

export default function FinexioVsTipaltiPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Finexio vs. Tipalti
          </h1>
          <p className="text-xl text-blue-100">
            Tipalti is built for global mass payouts and supplier payments at scale. Finexio is purpose-built for mid-market AP automation — faster, simpler, and with a $1M fraud guarantee.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <div className="grid grid-cols-3 py-4 px-6 text-sm font-bold" style={{ background: "#043886", color: "white" }}>
              <div>Capability</div>
              <div className="text-center" style={{ color: "#fdda00" }}>Finexio</div>
              <div className="text-center" style={{ color: "rgba(255,255,255,0.6)" }}>Tipalti</div>
            </div>
            {rows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 py-4 px-6 text-sm items-center" style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <div className="font-medium" style={{ color: "#374151" }}>{row.feature}</div>
                <div className="text-center font-semibold" style={{ color: "#043886" }}>{row.finexio}</div>
                <div className="text-center" style={{ color: "#94a3b8" }}>{row.tipalti}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Fits Your Team?</h2>
          <p className="text-blue-200 mb-8">We will be honest with you. If Tipalti is a better fit for your use case, we will tell you. But for mid-market AP, we think you will see the difference quickly.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>
            Book a 15-Minute Demo
          </a>
        </div>
      </section>
    </div>
  );
}
