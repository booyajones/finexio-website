"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function PaymentDashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Mockup header */}
        <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#169ee3" }} />
            <span className="text-xs font-semibold text-white">Payment Hub</span>
          </div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Live</span>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {[
            { label: "Total Processed", value: "$2.4M", delta: "+12%" },
            { label: "Payments Sent", value: "1,284", delta: "+8%" },
            { label: "Rebates Earned", value: "$18.2K", delta: "+24%" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-4" style={{ background: "rgba(4,56,134,0.3)" }}>
              <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: "#adddf5" }}>{stat.delta}</p>
            </div>
          ))}
        </div>
        {/* Payment list */}
        <div className="p-4 space-y-2">
          {[
            { vendor: "Office Depot Inc.", amount: "$12,450", method: "Virtual Card", status: "Approved" },
            { vendor: "Sysco Corporation", amount: "$84,200", method: "ACH", status: "Processing" },
            { vendor: "W.W. Grainger", amount: "$6,875", method: "Virtual Card", status: "Approved" },
            { vendor: "Staples Business", amount: "$3,340", method: "ACH", status: "Sent" },
          ].map((payment) => (
            <div key={payment.vendor} className="flex items-center justify-between px-3 py-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: "rgba(22,158,227,0.2)", color: "#169ee3" }}>
                  {payment.vendor[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{payment.vendor}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{payment.method}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-white">{payment.amount}</p>
                <p className="text-xs" style={{ color: payment.status === "Approved" ? "#adddf5" : payment.status === "Sent" ? "#169ee3" : "rgba(255,255,255,0.4)" }}>
                  {payment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Floating glow */}
      <div className="absolute -inset-4 rounded-3xl -z-10" style={{ background: "radial-gradient(ellipse at center, rgba(22,158,227,0.15) 0%, transparent 70%)" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 55%, #2e2e3d 100%)" }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(22,158,227,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Floating geometric blobs */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#169ee3" }}
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#adddf5" }}
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 blur-2xl pointer-events-none"
        style={{ background: "#043886" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "rgba(22,158,227,0.15)", border: "1px solid rgba(22,158,227,0.3)", color: "#adddf5" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#169ee3" }} aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                #1 B2B Payment Automation for Mid-Market
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6"
            >
              Automate
              <br />
              <span style={{ color: "#169ee3" }}>Accounts Payable.</span>
              <br />
              Eliminate Manual
              <br />
              Payments.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Finexio connects your ERP to every payment type&mdash;ACH, virtual card, and check&mdash;so your AP team can focus on what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "#169ee3", boxShadow: "0 4px 20px rgba(22,158,227,0.35)" }}
              >
                Get a Demo
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.9)" }}
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp}>
              <p className="text-sm font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                Trusted by 1,000+ mid-market companies
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {["Highgate", "Texas A&M", "Wyndham", "Aramark", "ACCO Brands"].map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <PaymentDashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.03))" }} />
    </section>
  );
}
