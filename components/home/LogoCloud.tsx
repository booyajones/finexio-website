"use client";

const partners = [
  "J.P. Morgan", "Visa", "Mastercard", "BirchStreet", "PairSoft",
  "Craftable", "JAGGAER", "Unimarket", "Pliant", "Emburse", "Rillion",
];

export default function LogoCloud() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #F3F4F6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#9CA3AF" }}>
          Trusted by leading finance teams and procurement platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {partners.map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-md"
              style={{
                background: "#F6F9FC",
                color: "#043886",
                border: "1px solid #E5E7EB",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
