import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & The Finexio Shield | $1M Payment Guarantee",
  description: "Finexio backs every payment with a $1M guarantee. SOC 2 Type II, PCI DSS Level 1, bank-grade encryption, and J.P. Morgan banking rails.",
};

const certifications = [
  { name: "SOC 2 Type II", desc: "Annual independent security audit" },
  { name: "PCI DSS Level 1", desc: "Highest payment card industry standard" },
  { name: "ISO 27001", desc: "International information security standard" },
  { name: "Bank-Grade AES-256", desc: "Military-grade encryption at rest and in transit" },
  { name: "99.9% Uptime SLA", desc: "Contractually guaranteed availability" },
  { name: "J.P. Morgan Rails", desc: "Payments run on institutional banking infrastructure" },
];

export default function SecurityPage() {
  return (
    <div className="pt-20">
      <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #0a3570 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(22,158,227,0.3), transparent)", transform: "scale(1.5)" }} />
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(22,158,227,0.3), rgba(4,56,134,0.5))", border: "2px solid rgba(253,218,0,0.5)" }}>
                <svg className="w-12 h-12" style={{ color: "#fdda00" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
            </div>
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(253,218,0,0.15)", color: "#fdda00", border: "1px solid rgba(253,218,0,0.3)" }}>
            THE FINEXIO SHIELD
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            $1 Million. Per Incident.{" "}
            <span style={{ color: "#fdda00" }}>No Exceptions.</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            We do not offer the $1M guarantee because we expect fraud to happen.
            We offer it because we are certain it will not. This is our conviction
            made tangible, backed by J.P. Morgan-grade infrastructure and verified by
            three independent security certifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
              style={{ background: "#fdda00", color: "#043886" }}>
              Request Security Brief &#8594;
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
              Talk to Our Security Team
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>How the $1M Guarantee Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple. If a fraudulent or unauthorized payment gets through our system, we cover it.
              No lengthy claims process. No fine print. No exceptions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: "01", title: "Fraud Detected", desc: "If any unauthorized payment bypasses our controls, our fraud detection system flags it within milliseconds and halts the transaction." },
              { step: "02", title: "Instant Notification", desc: "You are notified immediately via email and in-dashboard alert. Our security team is automatically engaged with your account." },
              { step: "03", title: "Full Reimbursement", desc: "We cover 100% of the unauthorized payment up to $1M per incident. No forms, no waiting, no battle with insurance." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl p-8 text-center bg-white shadow-sm border" style={{ borderColor: "#ececec" }}>
                <div className="text-5xl font-black mb-4 opacity-20" style={{ color: "#043886" }}>{item.step}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#043886" }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#043886" }}>Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border" style={{ borderColor: "#ececec" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(4,56,134,0.08)" }}>
                  <svg className="w-5 h-5" style={{ color: "#043886" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#043886" }}>{cert.name}</h3>
                  <p className="text-gray-500 text-sm">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#043886" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Built on Institutional Infrastructure</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Finexio does not build on consumer fintech shortcuts. Every payment runs on
              J.P. Morgan banking rails with full institutional-grade security controls.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Zero-Trust Architecture", desc: "Every request verified. No implicit trust based on network location or past authentication." },
              { title: "Dual-Control Approval", desc: "High-value payments require multiple authorized approvers, enforced at the system level, not policy level." },
              { title: "Real-Time Fraud ML", desc: "Machine learning models trained on $5.8B+ in transaction history flag anomalies before they complete." },
              { title: "Immutable Audit Trail", desc: "Every action logged with cryptographic signatures. Full audit trail for compliance and forensics." },
              { title: "Tokenized Card Data", desc: "Virtual card numbers are single-use and supplier-locked. Stolen numbers are worthless." },
              { title: "Penetration Tested Annually", desc: "Independent third-party security firms attempt to break our system every year. They do not succeed." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl glass-card">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Ready to Process Payments with Confidence?</h2>
          <p className="text-gray-600 mb-8">Every Finexio customer gets the Shield from day one, no add-on, no upgrade required.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
              style={{ background: "#043886", color: "white" }}>
              Start Processing Securely &#8594;
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg"
              style={{ background: "#f7f8f9", color: "#043886", border: "1px solid #ececec" }}>
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}