import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Complete B2B payment automation: virtual cards, ACH, check elimination, and payment hub.",
};

const solutions = [
  {
    id: "virtual-cards",
    title: "Virtual Card Payments",
    subtitle: "Maximize rebates. Minimize fraud.",
    desc: "Finexio issues single-use virtual cards to your suppliers automatically, eliminating check fraud risk while generating meaningful rebate revenue on every payment.",
    bullets: [
      "Earn 1-2% cash rebates on qualifying card spend",
      "Single-use card numbers eliminate fraud exposure",
      "Suppliers get paid faster with no change to their process",
    ],
    icon: "card",
  },
  {
    id: "ach",
    title: "ACH & EFT Payments",
    subtitle: "Straight-through processing at scale.",
    desc: "Automate ACH payment execution directly from your ERP. No manual file uploads, no bank portal logins, no delays.",
    bullets: [
      "Same-day and next-day ACH options available",
      "Full audit trail with remittance detail",
      "Automated payment status and reconciliation",
    ],
    icon: "ach",
  },
  {
    id: "check",
    title: "Check Payments & Elimination",
    subtitle: "Go paperless in 60 days.",
    desc: "For suppliers who still require checks, Finexio manages the entire check issuance process. Then we convert them to digital over time.",
    bullets: [
      "Fully outsourced check printing and mailing",
      "Positive pay and fraud prevention built in",
      "Systematic digital conversion program included",
    ],
    icon: "check",
  },
  {
    id: "hub",
    title: "Payment Hub & Analytics",
    subtitle: "One view across every payment rail.",
    desc: "Finexio Payment Hub gives your team a real-time command center for all AP payments, regardless of method or bank.",
    bullets: [
      "Unified dashboard across ACH, card, and check",
      "Real-time payment status and exception alerts",
      "Rebate and savings reporting by department",
    ],
    icon: "hub",
  },
];

function SolutionIcon({ type }: { type: string }) {
  const cls = "w-8 h-8";
  if (type === "card") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />
    </svg>
  );
  if (type === "ach") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
  if (type === "check") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(22,158,227,0.4) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#adddf5" }}>Solutions</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Complete B2B Payment<br />Automation
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            Every payment type. Every supplier. One platform connected to your ERP.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {solutions.map((sol, i) => (
            <div key={sol.id} id={sol.id} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}>
                  <SolutionIcon type={sol.icon} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#169ee3" }}>{sol.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5" style={{ color: "#043886" }}>{sol.title}</h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "#303941", opacity: 0.75 }}>{sol.desc}</p>
                <ul className="space-y-3 mb-8">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#169ee3" }}>
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "#303941" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl p-10 flex items-center justify-center min-h-[280px]" style={{ background: "linear-gradient(135deg, #f7f8f9 0%, #ececec 100%)", border: "1px solid #ececec" }}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#043886", color: "#adddf5" }}>
                      <div style={{ transform: "scale(1.5)" }}><SolutionIcon type={sol.icon} /></div>
                    </div>
                    <p className="text-lg font-bold" style={{ color: "#043886" }}>{sol.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: "#043886" }}>Ready to get started?</h2>
          <p className="text-base mb-8" style={{ color: "#303941", opacity: 0.7 }}>See how Finexio can transform your AP operations in 30 days.</p>
          <a href="/contact" className="inline-block px-8 py-4 rounded-xl text-base font-bold text-white" style={{ background: "#169ee3" }}>Schedule a Demo</a>
        </div>
      </section>
    </>
  );
}
