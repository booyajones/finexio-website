import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERP Integrations | 200+ Connectors",
  description: "Finexio integrates with 200+ ERP systems including SAP, Oracle, NetSuite, Microsoft Dynamics, Sage Intacct, and more.",
};

const categories = [
  {
    name: "Enterprise ERP",
    systems: ["SAP S/4HANA", "Oracle Cloud ERP", "Oracle E-Business Suite", "Microsoft Dynamics 365", "Infor CloudSuite", "Epicor ERP"],
  },
  {
    name: "Mid-Market ERP",
    systems: ["NetSuite", "Sage Intacct", "Acumatica", "Microsoft Dynamics GP", "Sage 100", "QuickBooks Enterprise"],
  },
  {
    name: "Procurement & P2P",
    systems: ["Coupa", "SAP Ariba", "BirchStreet", "Basware", "Jaggaer", "Ivalua"],
  },
  {
    name: "Finance & HCM",
    systems: ["Workday", "Concur", "Tipalti", "Bill.com", "AvidXchange", "MineralTree"],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="pt-20">
      <section className="py-24" style={{ background: "linear-gradient(135deg, #043886, #0a4fa3)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(22,158,227,0.2)", color: "#adddf5", border: "1px solid rgba(22,158,227,0.3)" }}>
            200+ INTEGRATIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Works With the ERP You Already Have
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Finexio integrates natively with your existing ERP and procurement platform.
            No ripping and replacing. Days to go live, not months.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            style={{ background: "#fdda00", color: "#043886" }}>
            Check Your Integration &#8594;
          </Link>
        </div>
      </section>

      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>All Your Tools, One Payment Hub</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "#ececec" }}>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: "#169ee3" }}>{cat.name}</h3>
                <ul className="space-y-2">
                  {cat.systems.map((sys) => (
                    <li key={sys} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#169ee3" }} />
                      {sys}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Integration in 3 Steps</h2>
            <p className="text-gray-600">Average time to go live: 5 business days</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Connect", desc: "Provide read-only API access to your ERP. We handle the mapping and configuration." },
              { step: "2", title: "Configure", desc: "Set payment rules, approval workflows, and supplier preferences. We validate everything before go-live." },
              { step: "3", title: "Process", desc: "Your team approves in your ERP. Finexio handles execution, reconciliation, and reporting automatically." },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl" style={{ background: "rgba(4,56,134,0.04)", border: "1px solid rgba(4,56,134,0.08)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black"
                  style={{ background: "#043886", color: "white" }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#043886" }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: "#043886" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Do Not See Your System?</h2>
          <p className="text-blue-200 mb-8">We add new integrations monthly. Talk to us about your specific ERP setup.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            style={{ background: "#fdda00", color: "#043886" }}>
            Request an Integration &#8594;
          </Link>
        </div>
      </section>
    </div>
  );
}