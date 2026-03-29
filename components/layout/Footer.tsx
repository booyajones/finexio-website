import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "AP Payments as a Service", href: "/solutions" },
      { label: "Finexio Shield", href: "/shield" },
      { label: "Supplier Enablement", href: "/solutions#supplier" },
      { label: "Payment Monetization", href: "/solutions#monetization" },
      { label: "Reporting & Analytics", href: "/solutions#reporting" },
    ],
  },
  {
    title: "For",
    links: [
      { label: "CFOs", href: "/for/cfos" },
      { label: "Controllers", href: "/for/controllers" },
      { label: "AP Managers", href: "/for/ap-managers" },
      { label: "Platform Partners", href: "/platform" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs. Corpay", href: "/compare/finexio-vs-corpay" },
      { label: "vs. Tipalti", href: "/compare/finexio-vs-tipalti" },
      { label: "vs. BILL", href: "/compare/finexio-vs-bill" },
      { label: "AP Automation vs. Outsourcing", href: "/compare/automation-vs-outsourcing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#043886" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Image
              src="/finexio-logo-reversed.png"
              alt="Finexio"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(173,221,245,0.8)" }}>
              AP Payments as a Service. You approve. We handle everything else.
            </p>
            <p className="text-xs font-bold" style={{ color: "rgba(173,221,245,0.5)" }}>
              Backed by J.P. Morgan
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(173,221,245,0.5)" }}>
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 Finexio Inc. · AP Payments as a Service · $5.8B+ processed annually
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "SOC 2 Type II", href: "/security" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
