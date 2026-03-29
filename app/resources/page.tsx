import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Finexio AP Automation",
  description: "Case studies, ROI calculators, and AP automation insights from Finexio.",
};

const caseStudies = [
  {
    company: "Highgate Hotels",
    industry: "Hospitality",
    metric: "$2.4M",
    metricLabel: "Annual Rebates Earned",
    desc: "Highgate Hotels automated AP across 200+ properties, converting paper checks to virtual card payments and generating over $2.4M in annual rebates.",
    tags: ["Virtual Card", "Multi-Property", "Hospitality"],
  },
  {
    company: "Texas A&M University",
    industry: "Higher Education",
    metric: "68%",
    metricLabel: "Reduction in Manual Processing",
    desc: "Texas A&M University System integrated Finexio with their existing procurement stack to automate supplier payments and reduce manual AP workload by 68%.",
    tags: ["ACH Automation", "ERP Integration", "Education"],
  },
  {
    company: "Wyndham Hotels & Resorts",
    industry: "Hospitality",
    metric: "5 Days",
    metricLabel: "Time to Live",
    desc: "Wyndham went live with Finexio in under 5 business days, connecting their existing ERP and enabling virtual card payments to 3,000+ suppliers.",
    tags: ["Fast Onboarding", "Virtual Card", "Hospitality"],
  },
];

const resources = [
  {
    type: "Whitepaper",
    title: "The AP Automation Playbook for Mid-Market Finance Teams",
    desc: "A practical guide to evaluating, implementing, and measuring AP automation ROI.",
    href: "/contact",
  },
  {
    type: "Guide",
    title: "Virtual Card Rebates: How to Turn AP Into a Profit Center",
    desc: "Learn how leading finance teams earn 1-2% cash back on every supplier payment.",
    href: "/contact",
  },
  {
    type: "Report",
    title: "2026 State of B2B Payments Security",
    desc: "Research on payment fraud trends and how enterprise buyers are protecting themselves.",
    href: "/security",
  },
  {
    type: "Checklist",
    title: "AP Automation Vendor Evaluation Checklist",
    desc: "20 questions to ask every AP automation vendor before you sign.",
    href: "/contact",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(253,218,0,0.15)", color: "#fdda00", border: "1px solid rgba(253,218,0,0.3)" }}>
            Case Studies &amp; Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Results From Real Customers</h1>
          <p className="text-xl text-blue-100">See how mid-market finance teams use Finexio to automate AP, eliminate fraud risk, and earn cash rebates.</p>
        </div>
      </section>
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#043886" }}>Customer Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="rounded-2xl p-8 bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}>{cs.industry}</span>
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: "#fdda00" }}>{cs.metric}</div>
                <div className="text-sm font-medium mb-4" style={{ color: "#043886" }}>{cs.metricLabel}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#043886" }}>{cs.company}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{cs.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-lg" style={{ background: "#f1f5f9", color: "#64748b" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#043886" }}>Guides &amp; Whitepapers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <Link key={r.title} href={r.href} className="block rounded-2xl p-6 transition-all hover:scale-[1.01]" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-lg mb-3 inline-block" style={{ background: "rgba(4,56,134,0.08)", color: "#043886" }}>{r.type}</span>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#043886" }}>{r.title}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
                <span className="text-sm font-medium mt-3 inline-block" style={{ color: "#169ee3" }}>Download &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Want a Custom ROI Analysis?</h2>
          <p className="text-blue-200 mb-8">Our team will build a savings model based on your actual AP volume and supplier mix.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Talk to Our Team &rarr;</Link>
        </div>
      </section>
    </div>
  );
}