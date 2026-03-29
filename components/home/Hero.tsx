"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "linear-gradient(135deg, #043886 0%, #0a3a7a 30%, #28224b 65%, #1a1235 100%)" }}
    >
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
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ background: "rgba(253,218,0,0.15)", color: "#fdda00", border: "1px solid rgba(253,218,0,0.3)" }}
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
                style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "2px solid rgba(255,255,255,0.25)" }}
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
                <span key={name} className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-white font-semibold text-lg">Payment Dashboard</div>
                  <div className="text-sm" style={{ color: "rgba(173,221,245,0.7)" }}>March 2026 &middot; Live</div>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(253,218,0,0.2)", color: "#fdda00" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "#fdda00" }} />
                  All Systems Go
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Processed Today", value: "$2.4M", delta: "+12%" },
                  { label: "Rebates Earned", value: "$18,400", delta: "+8%" },
                  { label: "Suppliers Paid", value: "847", delta: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="text-xs mb-1" style={{ color: "rgba(173,221,245,0.7)" }}>{stat.label}</div>
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-xs" style={{ color: "#34d399" }}>{stat.delta}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "rgba(173,221,245,0.6)" }}>Recent Payments</div>
                {[
                  { supplier: "Sysco Foods", amount: "$124,500", type: "Virtual Card", status: "Paid" },
                  { supplier: "Office Depot", amount: "$8,200", type: "ACH", status: "Processing" },
                  { supplier: "Staples Inc.", amount: "$3,100", type: "Virtual Card", status: "Paid" },
                ].map((payment) => (
                  <div key={payment.supplier} className="flex items-center justify-between rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div>
                      <div className="text-white text-sm font-medium">{payment.supplier}</div>
                      <div className="text-xs" style={{ color: "rgba(173,221,245,0.6)" }}>{payment.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-sm font-semibold">{payment.amount}</div>
                      <div className="text-xs" style={{ color: payment.status === "Paid" ? "#34d399" : "#fbbf24" }}>
                        {payment.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(253,218,0,0.1)", border: "1px solid rgba(253,218,0,0.2)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(253,218,0,0.2)" }}>
                  <svg className="w-4 h-4" style={{ color: "#fdda00" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "#fde68a" }}>$1M Payment Guarantee Active</div>
                  <div className="text-xs" style={{ color: "rgba(253,218,0,0.6)" }}>Every payment protected against fraud</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}