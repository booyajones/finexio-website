"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#043886]">
      {/* Animated Blobs */}
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] bg-[#169ee3] opacity-20" 
      />
      <motion.div 
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-[#043886] opacity-30" 
      />
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full blur-[80px] bg-[#fdda00] opacity-10" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20 bg-white/10 text-white backdrop-blur-md"
        >
          AP Payments as a Service
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          Your Team Approves.<br />
          <span className="text-[#fdda00]">Finexio Executes.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Automate accounts payable end-to-end. Virtual card, ACH, and check payments with a $1M fraud guarantee. Backed by J.P. Morgan.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/get-started" className="px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(253,218,0,0.4)]" style={{ background: "#fdda00", color: "#043886" }}>Book Your Demo</a>
          <a href="/how-it-works" className="px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>See How It Works</a>
        </motion.div>
      </div>
      
      {/* Stat Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 left-0 right-0 px-6 flex justify-center gap-6"
      >
        {[
          { label: "Payment Volume Processed", value: "$5.8B+" },
          { label: "Active Buyers", value: "1,300+" },
          { label: "Fraud Guarantee", value: "$1M" },
        ].map((stat) => (
          <div key={stat.label} className="px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="text-2xl font-black text-white">{stat.value}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-200/70">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
