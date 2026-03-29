"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Clock, TrendingUp, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="rounded-2xl overflow-hidden"
        style={{ background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 24px 60px rgba(4,56,134,0.12), 0 4px 16px rgba(4,56,134,0.06)" }}
      >
        <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #F3F4F6" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#169ee3" }} />
            <span className="text-xs font-bold" style={{ color: "#043886" }}>Finexio Payment Hub</span>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#DCFCE7", color: "#16A34A" }}>Live</span>
        </div>
        <div className="grid grid-cols-3 gap-px" style={{ background: "#F3F4F6" }}>
          {[
            { label: "Processed Today", value: "$2.4M", delta: "+12%" },
            { label: "Payments Sent", value: "1,284", delta: "0 failed" },
            { label: "Rebates Earned", value: "$18.2K", delta: "+24%" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-3" style={{ background: "#FAFAFA" }}>
              <p className="text-xs mb-1" style={{ color: "#9CA3AF" }}>{stat.label}</p>
              <p className="text-base font-black" style={{ color: "#043886" }}>{stat.value}</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: "#16A34A" }}>{stat.delta}</p>
            </div>
          ))}
        </div>
        <div className="p-4 space-y-2">
          {[
            { vendor: "Office Depot Inc.", amount: "$12,450", method: "Virtual Card", status: "Approved" },
            { vendor: "Sysco Corporation", amount: "$84,200", method: "ACH", status: "Processing" },
            { vendor: "W.W. Grainger", amount: "$6,875", method: "Virtual Card", status: "Approved" },
            { vendor: "Aramark Services", amount: "$31,200", method: "ACH", status: "Sent" },
          ].map((p) => (
            <div key={p.vendor} className="flex items-center justify-between px-3 py-2.5 rounded-lg" style={{ background: "#F9FAFB", border: "1px solid #F3F4F6" }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: "#EFF6FF", color: "#169ee3" }}>
                  {p.vendor[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#111827" }}>{p.vendor}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{p.method}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold" style={{ color: "#111827" }}>{p.amount}</p>
                <p className="text-xs font-medium" style={{ color: p.status === "Approved" ? "#16A34A" : p.status === "Sent" ? "#169ee3" : "#9CA3AF" }}>{p.status}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-4 mb-4 px-3 py-2.5 rounded-xl flex items-center gap-2" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border: "1px solid #BFDBFE" }}>
          <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: "#043886" }} />
          <span className="text-xs font-semibold" style={{ color: "#043886" }}>Finexio Shield Active — $1M fraud guarantee on every payment</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -right-4 top-8 rounded-xl px-4 py-3 shadow-lg"
        style={{ background: "#fff", border: "1px solid #E5E7EB", minWidth: "160px" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-3.5 h-3.5" style={{ color: "#169ee3" }} />
          <span className="text-xs font-bold" style={{ color: "#043886" }}>Virtual Card Revenue</span>
        </div>
        <p className="text-lg font-black" style={{ color: "#043886" }}>$342K</p>
        <p className="text-xs" style={{ color: "#16A34A" }}>this year</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -left-4 bottom-16 rounded-xl px-4 py-3 shadow-lg"
        style={{ background: "#fff", border: "1px solid #E5E7EB" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-3.5 h-3.5" style={{ color: "#169ee3" }} />
          <span className="text-xs font-bold" style={{ color: "#043886" }}>Time Saved</span>
        </div>
        <p className="text-lg font-black" style={{ color: "#043886" }}>74%</p>
        <p className="text-xs" style={{ color: "#6B7280" }}>less AP ops time</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "#F6F9FC" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(4,56,134,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(4,56,134,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #043886 0%, #169ee3 50%, #adddf5 100%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide" style={{ background: "#EFF6FF", color: "#043886", border: "1px solid #BFDBFE" }}>
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#169ee3" }} />
                AP Payments as a Service — $1M Guarantee
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black tracking-tight leading-[1.06] mb-6" style={{ color: "#043886" }}>
              Your Team Approves.{" "}
              <span style={{ color: "#169ee3" }}>Finexio Executes,</span>{" "}
              Protects, and Pays You Back.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "#425466" }}>
              We take everything after approval — payment delivery, supplier enrollment, fraud prevention, exception handling — and back it with a $1M guarantee. You keep control. We take the work.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link href="/#how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #169ee3 0%, #043886 100%)", boxShadow: "0 4px 20px rgba(22,158,227,0.35)" }}>
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white hover:shadow-md" style={{ color: "#043886", border: "2px solid #043886", background: "transparent" }}>
                Calculate Your Savings
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold" style={{ color: "#6B7280" }}>
              {["🛡 $1M Fraud Guarantee", "✓ SOC 2 Type II", "⚡ Go live in ~60 days", "🏦 Backed by J.P. Morgan"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </motion.div>
          </motion.div>
          <div className="hidden lg:flex justify-center">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
