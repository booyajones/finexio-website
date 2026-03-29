import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | Finexio AP Automation",
  description: "Book a 15-minute demo with a Finexio AP specialist. We will model your payment volume, show your fraud exposure, and calculate your rebate potential.",
};

const steps = [
  { number: "1", title: "Book a 15-Minute Session", description: "No sales pressure. A Finexio AP specialist walks you through your specific volume, ERP, and goals." },
  { number: "2", title: "Get a Custom ROI Model", description: "We model your actual AP volume and show rebate potential, fraud exposure reduction, and cost savings." },
  { number: "3", title: "Go Live in 5 Business Days", description: "If you decide to move forward, most customers are fully live within a week. No IT project required." },
];

export default function GetStartedPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            See Finexio in<br />
            <span style={{ color: "#fdda00" }}>15 Minutes</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            No fluff. No generic demo. We model your actual payment volume and show you exactly what Finexio would look like for your team.
          </p>
        </div>
      </section>

      {/* Form + Steps */}
      <section className="py-24 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 8px 30px rgba(0,0,0,0.07)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#043886" }}>Book Your Demo</h2>
            <p className="text-sm mb-8" style={{ color: "#64748b" }}>A real AP specialist — not an SDR — will take your session.</p>
            <form className="space-y-5" action="/contact" method="GET">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>Full Name *</label>
                <input type="text" placeholder="Sarah Chen" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#374151" }} required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>Work Email *</label>
                <input type="email" placeholder="sarah@company.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#374151" }} required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>Company Name *</label>
                <input type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#374151" }} required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>Annual AP Payment Volume</label>
                <select className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#374151" }}>
                  <option value="">Select range</option>
                  <option>Under $25M</option>
                  <option>$25M – $100M</option>
                  <option>$100M – $500M</option>
                  <option>$500M+</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105" style={{ background: "#043886", color: "white" }}>
                Book My 15-Minute Demo →
              </button>
              <p className="text-xs text-center" style={{ color: "#94a3b8" }}>No commitment required. We will reach out within one business day.</p>
            </form>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#043886" }}>What Happens Next</h2>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg" style={{ background: "#043886", color: "white" }}>{step.number}</div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#043886" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl p-6" style={{ background: "#043886" }}>
              <div className="text-sm font-semibold mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>TRUSTED BY</div>
              <div className="flex flex-wrap gap-3">
                {["J.P. Morgan", "Visa", "BirchStreet", "JAGGAER", "Unimarket"].map((name) => (
                  <span key={name} className="text-sm px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>{name}</span>
                ))}
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="text-2xl font-black mb-1" style={{ color: "#fdda00" }}>0</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Partners lost since launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
