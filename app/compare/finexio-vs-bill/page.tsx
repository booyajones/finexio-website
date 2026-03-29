import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finexio vs. BILL | AP Automation Comparison",
  description: "Finexio vs. BILL (Bill.com): enterprise-grade AP automation vs. SMB-focused invoice management. See how they compare on volume, fraud protection, and ERP integrations.",
};

const rows = [
  { feature: "Market fit", finexio: "Mid-market & enterprise AP", bill: "SMB invoice management" },
  { feature: "Fraud guarantee", finexio: "$1M on every payment", bill: "No published guarantee" },
  { feature: "Payment volume capacity", finexio: "No cap — handles $100M+ AP", bill: "Designed for sub-$25M AP" },
  { feature: "ERP integrations", finexio: "200+ enterprise-grade connectors", bill: "QuickBooks, Xero, NetSuite" },
  { feature: "Onboarding time", finexio: "5 business days", bill: "1–2 weeks" },
  { feature: "Supplier network", finexio: "3M+ enrolled suppliers", bill: "Large network, SMB-focused" },
  { feature: "Virtual card rebates", finexio: "1–2% back to customer", bill: "Revenue kept by BILL" },
  { feature: "Fraud architecture", finexio: "Enterprise AP fraud protection", bill: "Basic fraud detection" },
  { feature: "SOC 2 Type II", finexio: "✅ Certified", bill: "✅ Certified" },
];

export default function FinexioVsBillPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Finexio vs. BILL
          </h1>
          <p className="text-xl text-blue-100">
            BILL is designed for small businesses. Finexio is built for mid-market and enterprise AP teams running $25M to $600M+ in annual payment volume. Different tools for different problems.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <div className="grid grid-cols-3 py-4 px-6 text-sm font-bold" style={{ background: "#043886", color: "white" }}>
              <div>Capability</div>
              <div className="text-center" style={{ color: "#fdda00" }}>Finexio</div>
              <div className="text-center" style={{ color: "rgba(255,255,255,0.6)" }}>BILL</div>
            </div>
            {rows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 py-4 px-6 text-sm items-center" style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <div className="font-medium" style={{ color: "#374151" }}>{row.feature}</div>
                <div className="text-center font-semibold" style={{ color: "#043886" }}>{row.finexio}</div>
                <div className="text-center" style={{ color: "#94a3b8" }}>{row.bill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#043886" }}>Outgrown BILL?</h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>Many Finexio customers started on BILL and migrated when their payment volume crossed $25M. We make that transition straightforward.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#043886", color: "white" }}>
            See If Finexio Is the Right Next Step
          </a>
        </div>
      </section>
    </div>
  );
}
