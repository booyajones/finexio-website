"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ShieldSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #0a3570 100%)" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: "radial-gradient(circle, rgba(22,158,227,0.2), transparent)" }} />
              <div className="relative z-10 w-48 h-48 flex items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg, rgba(22,158,227,0.2), rgba(4,56,134,0.4))", border: "2px solid rgba(253,218,0,0.4)" }}>
                <svg className="w-24 h-24" style={{ color: "#fdda00" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: "#fdda00", color: "#043886" }}
              >
                $1,000,000
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-4 px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: "rgba(22,158,227,0.3)", color: "white", border: "1px solid rgba(22,158,227,0.5)" }}
              >
                SOC 2 Type II
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(253,218,0,0.15)", color: "#fdda00", border: "1px solid rgba(253,218,0,0.3)" }}>
              THE FINEXIO SHIELD
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              We Do Not Just Say{" "}
              <span style={{ color: "#fdda00" }}>We Are Secure.</span>
              <br />We Back It With{" "}
              <span className="gradient-text">$1 Million.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every payment Finexio touches is backed by our $1M payment guarantee.
              This is not insurance. It is our conviction that our fraud detection,
              bank-grade encryption, and dual-approval workflows will never let a bad
              payment through.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Real-time fraud detection on every transaction",
                "Dual-approval workflows enforced automatically",
                "Bank-grade AES-256 encryption end-to-end",
                "SOC 2 Type II, PCI DSS Level 1, ISO 27001",
                "J.P. Morgan banking rails, not a middleman",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "#fdda00" }}>&#10003;</span>
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/security"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "#fdda00", color: "#043886" }}
              >
                See Full Security Details &#8594;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Talk to Security Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}