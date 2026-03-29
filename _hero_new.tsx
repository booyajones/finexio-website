"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #043886 0%, #0a3a7a 30%, #28224b 65%, #1a1235 100%)",
      }}
    >
      {/* Gradient mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,158,227,0.25) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(4,56,134,0.5) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(253,218,0,0.08) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: "rgba(253,218,0,0.15)",
                  color: "#fdda00",
                  border: "1px solid rgba(253,218,0,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: "#fdda00" }} />
                J.P. Morgan Backed &middot; $1M Payment Guarantee
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your Team Approves.{" "}
              <span className="gradient-text">Finexio Executes,</span>{" "}
              Protects, and{" "}
              <span style={{ color: "#fdda00" }}>Pays You Back.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Automate accounts payable end-to-end. Virtual card, ACH, and
              check&mdash;with cash rebates that turn AP into a profit center.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ background: "#fdda00", color: "#043886" }}
              >
                Book a Demo &#8594;
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.25)",
                }}
              >
                See How It Works
              </Link>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Trusted by:</span>
              {["Highgate Hotels", "Texas A&M", "Wyndham", "ATD", "BirchStreet"].map((name) => (
                <span key={name} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>{name}</span>
              ))}
            </motion.div>
          </div>
          {/* Right column: dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>AP Dashboard</span>
                <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: "rgba(22,158,227,0.25)", color: "#adddf5" }}>Live</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Invoices Processed</p>
                  <p className="text-xl font-black" style={{ color: "white" }}>12,847</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(22,158,227,0.8)" }}>this month</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Fraud Blocked</p>
                  <p className="text-xl font-black" style={{ color: "white" }}>0</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(22,158,227,0.8)" }}>incidents</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Virtual Card Rebate</p>
                  <p className="text-xl font-black" style={{ color: "white" }}>2.3%</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(22,158,227,0.8)" }}>avg rate</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Time Saved</p>
                  <p className="text-xl font-black" style={{ color: "white" }}>4.2 hrs</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(22,158,227,0.8)" }}>per week</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Recent Payments</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-1.5">
                    <div>
                      <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>Sysco Foods</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Virtual Card</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold" style={{ color: "white" }}>$48,200</p>
                      <p className="text-xs" style={{ color: "#4ade80" }}>Sent</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div>
                      <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>Office Depot</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>ACH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold" style={{ color: "white" }}>$12,750</p>
                      <p className="text-xs" style={{ color: "#4ade80" }}>Sent</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div>
                      <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>Grainger</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Virtual Card</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold" style={{ color: "white" }}>$93,400</p>
                      <p className="text-xs" style={{ color: "#4ade80" }}>Sent</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(253,218,0,0.1)", border: "1px solid rgba(253,218,0,0.25)" }}>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#fdda00" }}>Finexio Shield</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Every payment guaranteed</p>
                </div>
                <span className="text-sm font-black" style={{ color: "#fdda00" }}>$1M</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
