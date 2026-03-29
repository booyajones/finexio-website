"use client";

const logos = [
  "J.P. Morgan",
  "Visa",
  "Mastercard",
  "BirchStreet",
  "JAGGAER",
  "Unimarket",
  "PairSoft",
  "Emburse",
];

export default function LogoBar() {
  return (
    <section className="py-12" style={{background: "#f7f8f9"}}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest" style={{color: "#169ee3"}}>
          Trusted by leading finance teams
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{background: "linear-gradient(to right, #f7f8f9, transparent)"}} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{background: "linear-gradient(to left, #f7f8f9, transparent)"}} />
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="flex items-center justify-center px-10 py-3 mx-4 rounded-lg flex-shrink-0"
              style={{background: "white", border: "1px solid #ececec", minWidth: "200px"}}>
              <span className="font-semibold text-sm" style={{color: "#303941"}}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}