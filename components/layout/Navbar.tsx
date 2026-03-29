"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const solutions = [
  { label: "AP Payments as a Service", href: "/solutions", desc: "Fully managed payment delivery" },
  { label: "Finexio Shield", href: "/shield", desc: "$1M fraud protection guarantee" },
  { label: "Supplier Enablement", href: "/solutions#supplier", desc: "AI-powered supplier network" },
  { label: "Payment Monetization", href: "/solutions#monetization", desc: "Turn AP into revenue" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.98)",
        borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 12px rgba(4,56,134,0.07)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/finexio-logo-primary.svg"
            alt="Finexio"
            width={140}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ color: "#374151" }}
            >
              Solutions <ChevronDown className="w-4 h-4 opacity-60" />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 rounded-xl shadow-xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #E5E7EB" }}
                >
                  {solutions.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex flex-col px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-sm font-semibold" style={{ color: "#043886" }}>{s.label}</span>
                      <span className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{s.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { label: "For CFOs", href: "/for/cfos" },
            { label: "For Platforms", href: "/platform" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ color: "#374151" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
            style={{ color: "#374151" }}
          >
            Log In
          </Link>
          <Link
            href="/get-started"
            className="px-5 py-2.5 text-sm font-bold rounded-full text-white transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #169ee3 0%, #043886 100%)",
              boxShadow: "0 2px 12px rgba(22,158,227,0.3)",
            }}
          >
            See Your Savings →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" style={{ color: "#043886" }} /> : <Menu className="w-5 h-5" style={{ color: "#043886" }} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#fff", borderTop: "1px solid #E5E7EB" }}
          >
            <div className="px-4 py-4 space-y-1">
              {[
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Solutions", href: "/solutions" },
                { label: "Finexio Shield", href: "/shield" },
                { label: "For CFOs", href: "/for/cfos" },
                { label: "For Platforms", href: "/platform" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
                  style={{ color: "#043886" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t mt-3" style={{ borderColor: "#E5E7EB" }}>
                <Link
                  href="/get-started"
                  className="block text-center px-5 py-3 text-sm font-bold rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #169ee3 0%, #043886 100%)" }}
                >
                  See Your Savings →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
