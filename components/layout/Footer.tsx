import Link from "next/link";

const solutions = ["AP Automation", "Virtual Cards", "ACH Payments", "Check Payments", "Payment Hub"];
const company = ["About", "Careers", "Partners", "Press", "Blog"];
const resources = ["Documentation", "Case Studies", "ROI Calculator", "Security", "Compliance"];

export default function Footer() {
  return (
    <footer style={{ background: "#2e2e3d" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "#169ee3" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M12 3L4 7.5V12C4 16.2 7.4 20.1 12 21C16.6 20.1 20 16.2 20 12V7.5L12 3Z" fill="white" />
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tighter text-white">FINEXIO</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#adddf5", opacity: 0.7 }}>
              Modernizing B2B payments for the mid-market.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/finexio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Finexio on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/finexio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Finexio on Twitter"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#169ee3" }}>Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#169ee3" }}>Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#169ee3" }}>Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; 2026 Finexio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy Policy</Link>
            <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
