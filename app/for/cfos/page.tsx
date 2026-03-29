import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For CFOs | Finexio AP Automation",
  description: "Finexio gives CFOs real-time payment visibility, fraud elimination, and working capital optimization — without adding headcount or changing the approval process.",
};

const outcomes = [
  { metric: "100%", label: "Payment visibility", sub: "Every dollar tracked in real time" },
  { metric: "$0", label: "Fraud liability", sub: "$1M guarantee on every payment" },
  { metric: "1–2%", label: "Virtual card rebates", sub: "Turns AP spend into revenue" },
  { metric: "5 days", label: "To go live", sub: "No IT project, no rip-and-replace" },
];

const painPoints = [
  {
    pain: "\"I have no visibility into what's been paid, what's pending, or where errors occurred.\"",
    solution: "Real-time payment dashboard. Every payment, every rail, every status — in one view. Audit-ready at all times.",
  },
  {
    pain: "\"My AP team is manually managing vendor payment methods and it eats their time.\"",
    solution: "Finexio handles supplier onboarding and payment preference management entirely. Your AP team focuses on approvals, not administration.",
  },
  {
    pain: "\"We've had two BEC fraud incidents in the past three years. Our exposure is real.\"",
    solution: "The Finexio Shield provides a $1M fraud guarantee on every payment. Backed by J.P. Morgan rails with dual-control authorization.",
  },
  {
    pain: "\"Our ERP integration project has been sitting in the IT queue for eight months.\"",
    solution: "200+ pre-built connectors. Most customers are live in 5 business days. Zero custom development required.",
  },
];

export default function ForCFOsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "rgba(253,218,0,0.2)", color: "#fdda00" }}>
            Built for Finance Leaders
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AP Automation That<br />
            <span style={{ color: "#fdda00" }}>a CFO Can Stand Behind</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Finexio eliminates AP fraud exposure, generates rebate revenue, and gives you real-time visibility into every payment — without a single IT project or headcount addition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Book a CFO Demo</a>
            <a href="/shield" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>View the $1M Guarantee</a>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((item) => (
              <div key={item.label} className="rounded-2xl p-6 text-center" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#043886" }}>{item.metric}</div>
                <div className="font-semibold mb-1" style={{ color: "#374151" }}>{item.label}</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CFO Pain Points */}
      <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>The CFO Conversations We Have Every Week</h2>
            <p className="text-lg" style={{ color: "#64748b" }}>These are the actual problems Finexio was built to solve.</p>
          </div>
          <div className="space-y-6">
            {painPoints.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
                <div className="p-6" style={{ background: "white" }}>
                  <p className="text-base italic mb-4" style={{ color: "#64748b" }}>{item.pain}</p>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#169ee3" }}>
                      <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: "#043886" }}>{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6" style={{ background: "#043886" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6" style={{ color: "#fdda00" }}>"</div>
          <blockquote className="text-xl text-white mb-8 leading-relaxed">
            Finexio turned our AP function from a cost center into a profit center. We captured $340,000 in virtual card rebates last year and had zero fraud incidents. The visibility alone was worth the switch.
          </blockquote>
          <div>
            <div className="font-semibold text-white">VP Finance, $400M Healthcare Hospitality Platform</div>
            <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Finexio Customer · 3 years</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#f8fafc" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Built for Your Board Presentation</h2>
          <p className="text-lg mb-8" style={{ color: "#64748b" }}>We will model your actual AP volume and show you the fraud exposure elimination, rebate projection, and ROI timeline before you commit to anything.</p>
          <a href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#043886", color: "white" }}>
            Get a CFO-Ready Analysis
          </a>
        </div>
      </section>
    </div>
  );
}
