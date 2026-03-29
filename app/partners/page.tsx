import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | Finexio Partner Ecosystem",
  description: "Finexio partners with BirchStreet, J.P. Morgan, Highgate Hotels, Wyndham, Texas A&M, and ATD. Become a technology or referral partner.",
};

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <section className="py-24 text-center" style={{ background: "linear-gradient(135deg, #043886, #0a4fa3)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partners Who Believe in Better Payments</h1>
          <p className="text-xl text-blue-100 mb-8">
            We partner with the best in hospitality, procurement, and enterprise software
            to bring seamless AP automation to more businesses.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            style={{ background: "#fdda00", color: "#043886" }}>
            Become a Partner &#8594;
          </Link>
        </div>
      </section>

      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Featured Partners</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "J.P. Morgan", type: "Banking Partner", desc: "Our primary banking infrastructure partner, providing institutional-grade payment rails and fraud protection." },
              { name: "BirchStreet Systems", type: "Technology Partner", desc: "Deep integration with BirchStreet hospitality procurement platform, automating payments for 5,000+ hotel properties." },
              { name: "Highgate Hotels", type: "Customer Partner", desc: "One of the largest hotel investment and management companies, processing millions in monthly AP through Finexio." },
              { name: "Wyndham Hotels", type: "Enterprise Customer", desc: "Wyndham franchise network uses Finexio to standardize AP automation across their managed properties." },
              { name: "Texas A&M University", type: "Higher Education", desc: "Finexio powers automated vendor payments for one of the largest university systems in the US." },
              { name: "ATD (American Tire Distributors)", type: "Distribution Partner", desc: "ATD processes high-volume supplier payments through Finexio with virtual card rebates that offset program costs." },
            ].map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "#ececec" }}>
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
                  style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}>
                  {partner.type}
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#043886" }}>{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#043886" }}>Partner With Finexio</h2>
          <p className="text-gray-600 mb-8">Whether you are an ERP vendor, system integrator, or referral partner, we want to work with you.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
            style={{ background: "#043886", color: "white" }}>
            Start a Partnership Conversation &#8594;
          </Link>
        </div>
      </section>
    </div>
  );
}