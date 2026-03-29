const logos = [
  "Highgate Hotels",
  "Texas A&M University",
  "American Tire Distributors",
  "Wyndham Hotels",
  "Aramark",
  "Pacific Coast Hospitality",
  "ACCO Brands",
  "Highgate Hotels",
  "Texas A&M University",
  "American Tire Distributors",
  "Wyndham Hotels",
  "Aramark",
  "Pacific Coast Hospitality",
  "ACCO Brands",
];

export default function LogoCloud() {
  return (
    <section className="py-14 overflow-hidden" style={{ background: "#f7f8f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#303941", opacity: 0.5 }}>
          Trusted by leading enterprises
        </p>
      </div>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #f7f8f9, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #f7f8f9, transparent)" }} />
        <div className="overflow-hidden">
          <div className="marquee-track">
            {logos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 mx-4 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap"
                style={{ background: "#ffffff", border: "1px solid #ececec", color: "#303941", boxShadow: "0 1px 4px rgba(4,56,134,0.06)" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
