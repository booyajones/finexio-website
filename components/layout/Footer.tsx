import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Virtual Card Payments", href: "/solutions#virtual-card" },
    { label: "ACH Automation", href: "/solutions#ach" },
    { label: "Check Elimination", href: "/solutions#check" },
    { label: "Payment Hub", href: "/solutions#hub" },
  ],
  Platform: [
    { label: "How It Works", href: "/platform" },
    { label: "Integrations", href: "/integrations" },
    { label: "Security & Shield", href: "/security" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
  Resources: [
    { label: "ROI Calculator", href: "/pricing" },
    { label: "Case Studies", href: "/resources" },
    { label: "Security Brief", href: "/security" },
    { label: "Blog", href: "/resources" },
    { label: "Privacy Policy", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#2e2e3d" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #043886, #169ee3)" }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Finexio</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              B2B payment automation for mid-market finance teams. $5.8B+ processed. J.P. Morgan backed.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-sm text-gray-500">&#169; 2026 Finexio, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>J.P. Morgan Banking Partner</span>
            <span>&#183;</span>
            <span>SOC 2 Type II Certified</span>
            <span>&#183;</span>
            <span>$1M Payment Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}