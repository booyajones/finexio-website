import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Finexio is on a mission to modernize B2B payments for mid-market companies across North America.",
};

const team = [
  { name: "Ernest Rolfson", title: "Chief Executive Officer", initials: "ER", desc: "20+ years in B2B fintech and payments innovation." },
  { name: "Chris Wyatt", title: "Chief Revenue Officer", initials: "CW", desc: "GTM leader with deep expertise in mid-market SaaS sales." },
  { name: "Angela Torres", title: "Chief Technology Officer", initials: "AT", desc: "Former payments infrastructure engineer at top-tier banks." },
  { name: "Marcus Webb", title: "Chief Financial Officer", initials: "MW", desc: "PE-backed growth stage finance executive with 3 exits." },
];

const timeline = [
  { year: "2015", event: "Finexio founded in Orlando, FL with a vision to eliminate manual AP payments." },
  { year: "2018", event: "Launched Payment Hub platform and signed first 100 enterprise clients." },
  { year: "2020", event: "Processed $1B+ in annual payments. Expanded to hotel & hospitality vertical." },
  { year: "2022", event: "Raised Series B to accelerate ERP integrations and supplier enrollment." },
  { year: "2024", event: "Surpassed $10B in payments processed. Named top mid-market fintech." },
  { year: "2026", event: "1,000+ clients. Processing $14B annually across ACH, virtual card, and check." },
];

const values = [
  { title: "Client Obsession", desc: "Every feature, every decision is measured by the value it delivers to our clients." },
  { title: "Radical Transparency", desc: "We share data, results, and honest assessments with clients and each other." },
  { title: "Operational Excellence", desc: "We build reliability into everything. Payments must work, every time." },
  { title: "Bold Innovation", desc: "We reimagine what AP automation can be, not just improve what existed before." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(22,158,227,0.4) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#adddf5" }}>Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            On a mission to modernize<br />B2B payments
          </h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.72)" }}>
            Finexio was built for the finance teams fighting through manual check runs, outdated ACH portals, and zero visibility into payment status. We built the platform we wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-6" style={{ color: "#043886" }}>Our Mission</h2>
          <p className="text-xl leading-relaxed" style={{ color: "#303941" }}>
            To become the payments operating system for mid-market finance teams across North America, eliminating manual processes and turning AP into a strategic advantage.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3" style={{ color: "#043886" }}>Leadership Team</h2>
            <p className="text-base" style={{ color: "#303941", opacity: 0.7 }}>Fintech veterans building the future of B2B payments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center p-6 rounded-2xl" style={{ border: "1px solid #ececec" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black" style={{ background: "#043886", color: "#adddf5" }}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#043886" }}>{member.name}</h3>
                <p className="text-xs font-medium mb-2" style={{ color: "#169ee3" }}>{member.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#303941", opacity: 0.65 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3" style={{ color: "#043886" }}>Our Journey</h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-8 items-start">
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="text-lg font-black" style={{ color: "#169ee3" }}>{item.year}</span>
                </div>
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#169ee3" }} />
                  <p className="text-base" style={{ color: "#303941" }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3" style={{ color: "#043886" }}>Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl" style={{ background: "#f7f8f9", borderLeft: "4px solid #169ee3" }}>
                <h3 className="text-lg font-black mb-3" style={{ color: "#043886" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#303941", opacity: 0.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
