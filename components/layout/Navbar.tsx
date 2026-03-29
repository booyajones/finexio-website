"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    label: "Product",
    href: "/how-it-works",
    dropdown: [
      { label: "How It Works", href: "/how-it-works", desc: "4-step AP automation flow" },
      { label: "AP Payments as a Service", href: "/ap-payments-as-a-service", desc: "The full platform, explained" },
      { label: "Finexio Shield", href: "/shield", desc: "$1M fraud guarantee on every payment" },
      { label: "Integrations", href: "/integrations", desc: "200+ ERP and procurement connectors" },
    ],
  },
  {
    label: "For You",
    href: "/for/cfos",
    dropdown: [
      { label: "For CFOs", href: "/for/cfos", desc: "Fraud elimination and working capital" },
      { label: "For Platform Partners", href: "/for/platform-partners", desc: "Embed payments, earn revenue share" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Compare",
    href: "/compare/finexio-vs-corpay",
    dropdown: [
      { label: "Finexio vs. Corpay", href: "/compare/finexio-vs-corpay", desc: "vs. Paymerang / Corpay" },
      { label: "Finexio vs. Tipalti", href: "/compare/finexio-vs-tipalti", desc: "vs. Tipalti" },
      { label: "Finexio vs. BILL", href: "/compare/finexio-vs-bill", desc: "vs. Bill.com" },
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
        <Link href="/" className="flex items-center">
          <Image 
            src={scrolled ? "/logos/logo-color.svg" : "/logos/logo-reversed.svg"} 
            alt="Finexio" 
            width={140} 
            height={32} 
            priority
            unoptimized
          />
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
            style={{ color: scrolled ? "#303941" : "rgba(255,255,255,0.8)" }}>Log in</Link>
          <Link href="/contact" className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
            style={{ background: "#fdda00", color: "#043886" }}>Get a Demo</Link>
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
                  style={{ background: "#fdda00", color: "#043886" }}>
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