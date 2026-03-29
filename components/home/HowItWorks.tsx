"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect Your ERP",
    desc: "We integrate with SAP, Oracle, NetSuite, and 200+ ERPs in days. No IT project required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="15" y="3" width="7" height="7" rx="1" />
        <rect x="8.5" y="14" width="7" height="7" rx="1" />
        <path d="M5.5 10v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2" />
        <path d="M12 16V10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Your Team Approves",
    desc: "Review and approve payment batches inside your existing ERP workflow. No new systems to learn.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Finexio Executes",
    desc: "We route payments across virtual card, ACH, and check rails. Suppliers get paid on time, every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Shield Protects",
    desc: "Every payment runs through real-time fraud detection. Our $1M guarantee absorbs any liability that slips through.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#169ee3" }}>The Process</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "#043886" }}>
            Four Steps. Zero Overhead.
          </h2>
        </motion.div>
        {/* Progress connector */}
        <div ref={ref} className="hidden lg:flex items-center justify-between mb-12 px-8 relative">
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-px" style={{ background: "rgba(4,56,134,0.1)" }} />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 origin-left"
            style={{ background: "linear-gradient(to right, #043886, #169ee3)" }}
          />
          {steps.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
              style={{ background: "#043886" }}
            >
              {i + 1}
            </motion.div>
          ))}
        </div>
        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#f7f8f9",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#043886", color: "#adddf5" }}
              >
                {step.icon}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#169ee3" }}>
                Step {step.number}
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "#043886" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#303941", opacity: 0.75 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
