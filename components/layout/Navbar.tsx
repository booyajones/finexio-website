"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Virtual Card Payments", href: "/solutions#virtual-cards", desc: "Maximize rebates, reduce fraud" },
      { label: "ACH Automation", href: "/solutions#ach", desc: "Straight-through processing" },
      { label: "Check Elimination", href: "/solutions#check", desc: "Go paperless overnight" },
      { label: "Payment Hub", href: "/solutions#hub", desc: "Unified payment intelligence" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Integration Layer", href: "/platform#integrations", desc: "200+ ERP connectors" },
      { label: "Payment Execution", href: "/platform#execution", desc: "Multi-rail payment routing" },
      { label: "Intelligence & Reporting", href: "/platform#reporting", desc: "Real-time analytics" },
    ],
  },
  { label: "Integrations", href: "/platform#integrations", children: [] },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Case Studies", href: "#", desc: "See real client results" },
      { label: "ROI Calculator", href: "#", desc: "Estimate your savings" },
      { label: "Documentation", href: "#", desc: "Developer and user guides" },
      { label: "Security", href: "#", desc: "SOC 2, PCI DSS, ISO 27001" },
    ],
  },
  { label: "About", href: "/about", children: [] },
];

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
      style={
        scrolled
          ? { backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.92)", boxShadow: "0 1px 20px rgba(4,56,134,0.08)", borderBottom: "1px solid #ececec" }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "#169ee3" }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M12 3L4 7.5V12C4 16.2 7.4 20.1 12 21C16.6 20.1 20 16.2 20 12V7.5L12 3Z" fill="white" />
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tighter" style={{ color: scrolled ? "#043886" : "#ffffff" }}>
              FINEXIO
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children.length > 0 && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{ color: scrolled ? "#303941" : "rgba(255,255,255,0.88)" }}
                >
                  {link.label}
                  {link.children.length > 0 && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-50">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                <AnimatePresence>
                  {activeDropdown === link.label && link.children.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl overflow-hidden"
                      style={{ boxShadow: "0 20px 60px rgba(4,56,134,0.15)", border: "1px solid #ececec" }}
                    >
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href} className="flex flex-col px-4 py-3 hover:bg-[#f7f8f9] transition-colors">
                            <span className="text-sm font-semibold" style={{ color: "#043886" }}>{child.label}</span>
                            <span className="text-xs mt-0.5 opacity-60" style={{ color: "#303941" }}>{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{ border: scrolled ? "1px solid #ececec" : "1px solid rgba(255,255,255,0.35)", color: scrolled ? "#303941" : "rgba(255,255,255,0.9)" }}
            >Login</Link>
            <Link href="/contact" className="px-5 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all" style={{ background: "#169ee3" }}>
              Get a Demo
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-lg" style={{ color: scrolled ? "#303941" : "#ffffff" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white"
            style={{ borderTop: "1px solid #ececec", boxShadow: "0 20px 40px rgba(4,56,134,0.12)" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className="block px-4 py-3 rounded-lg text-sm font-semibold" style={{ color: "#043886" }} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                  {link.children.length > 0 && (
                    <div className="pl-4 mb-1">
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block px-4 py-2 text-sm" style={{ color: "#303941" }} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid #ececec" }}>
                <Link href="#" className="text-center px-4 py-3 rounded-lg text-sm font-semibold" style={{ border: "1px solid #ececec", color: "#303941" }} onClick={() => setMobileOpen(false)}>Login</Link>
                <Link href="/contact" className="text-center px-4 py-3 rounded-lg text-sm font-semibold text-white" style={{ background: "#169ee3" }} onClick={() => setMobileOpen(false)}>Get a Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
