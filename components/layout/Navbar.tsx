"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Virtual Card Payments", href: "/solutions#virtual-card", desc: "Earn 1-2% rebates on every payment" },
      { label: "ACH Automation", href: "/solutions#ach", desc: "Same-day and next-day ACH at scale" },
      { label: "Check Elimination", href: "/solutions#check", desc: "Digitize and eliminate paper checks" },
      { label: "Payment Hub", href: "/solutions#hub", desc: "Unified dashboard for all payment types" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    dropdown: [
      { label: "How It Works", href: "/platform", desc: "End-to-end AP automation flow" },
      { label: "Integrations", href: "/integrations", desc: "200+ ERP and procurement connectors" },
      { label: "Security & Shield", href: "/security", desc: "$1M payment guarantee" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Case Studies", href: "/resources", desc: "Real results from real customers" },
      { label: "ROI Calculator", href: "/pricing#roi", desc: "Calculate your AP savings" },
      { label: "Security Brief", href: "/security", desc: "The Finexio Shield explained" },
      { label: "Blog", href: "/resources", desc: "AP automation insights" },
    ],
  },
  { label: "About", href: "/about" },
];

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; desc: string }[];
};
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(4,56,134,0.1)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(4,56,134,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #043886, #169ee3)" }}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </div>
          <span className="font-bold text-xl" style={{ color: scrolled ? "#043886" : "white" }}>
            Finexio
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item: NavItem) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                style={{ color: scrolled ? "#303941" : "rgba(255,255,255,0.85)" }}
              >
                {item.label}
                {item.dropdown && (
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 w-56"
                    >
                      <div className="rounded-xl shadow-xl overflow-hidden"
                        style={{ background: "white", border: "1px solid #ececec" }}>
                        {item.dropdown.map((sub) => (
                          <Link key={sub.label} href={sub.href} className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                            <div className="text-sm font-medium" style={{ color: "#043886" }}>{sub.label}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{sub.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="text-sm font-medium px-4 py-2 rounded-lg"
            style={{ color: scrolled ? "#303941" : "rgba(255,255,255,0.8)" }}>Login</Link>
          <Link href="/contact" className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
            style={{ background: "#169ee3", color: "white" }}>Get a Demo</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg"
          aria-label="Toggle menu" style={{ color: scrolled ? "#303941" : "white" }}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "white", borderTop: "1px solid #ececec" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navigation.map((item: NavItem) => (
                <div key={item.label}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium"
                    style={{ color: "#303941" }}>
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 rounded-xl text-sm" style={{ color: "#169ee3" }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-xl font-semibold"
                  style={{ background: "#043886", color: "white" }}>
                  Get a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}