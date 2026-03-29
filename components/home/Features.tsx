"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Virtual Card Payments",
    desc: "Maximize rebates and reduce fraud with automated virtual card issuance. Earn cash back on every vendor payment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "ACH Automation",
    desc: "Achieve straight-through processing for ACH payments. Eliminate manual intervention and reduce processing time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Check Elimination",
    desc: "Go paperless overnight. Convert legacy check workflows to digital payments without disrupting your suppliers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "ERP Integration",
    desc: "200+ pre-built connectors for SAP, Oracle, NetSuite, and more. Go live in days, not months.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="15" y="3" width="7" height="7" rx="1" />
        <rect x="8.5" y="14" width="7" height="7" rx="1" />
        <path d="M5.5 10v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2" />
        <path d="M12 16V10" />
      </svg>
    ),
  },
  {
    title: "Supplier Enrollment",
    desc: "Guided supplier onboarding managed by our team. We handle outreach, education, and activation end-to-end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Payment Intelligence",
    desc: "Real-time analytics and reporting across all payment rails. Gain visibility into spend, savings, and rebates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#169ee3" }}>Platform Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ color: "#043886" }}>
            Everything your AP team needs
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#303941", opacity: 0.7 }}>
            One platform to automate every payment type, enroll every supplier, and capture every rebate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(4,56,134,0.12)" }}
              className="group p-8 rounded-2xl cursor-default transition-all duration-300"
              style={{ background: "#ffffff", border: "1px solid #ececec", boxShadow: "0 2px 12px rgba(4,56,134,0.05)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2.5" style={{ color: "#043886" }}>{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#303941", opacity: 0.7 }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
