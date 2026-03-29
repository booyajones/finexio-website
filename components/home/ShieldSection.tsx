"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ShieldSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: large shield mark */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center"
          >
            <div className="relative flex items-center justify-center">
              <div
                className="absolute rounded-full"
                style={{
                  width: 320,
                  height: 320,
                  background: "radial-gradient(circle, rgba(253,218,0,0.15), transparent 70%)",
                  boxShadow: "0 0 80px rgba(253,218,0,0.15)",
                }}
              />
              <Image
                src="/logos/mark-gradient.svg"
                alt="Finexio Shield"
                width={280}
                height={280}
                className="relative z-10"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 px-3 py-1.5 rounded-xl text-xs font-black"
                style={{ background: "#fdda00", color: "#043886" }}
              >
                $1,000,000
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-0 px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: "rgba(22,158,227,0.3)", color: "white", border: "1px solid rgba(22,158,227,0.5)" }}
              >
                SOC 2 Type II
              </motion.div>
            </div>
          </motion.div>
          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(253,218,0,0.15)", color: "#fdda00", border: "1px solid rgba(253,218,0,0.3)" }}>
              THE FINEXIO SHIELD
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              We Do Not Just Say{" "}
              <span style={{ color: "#fdda00" }}>We Are Secure.</span>
              <br />We Back It With{" "}
              <span className="gradient-text">$1 Million.</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Every payment Finexio touches carries our $1M guarantee. Not insurance. Our conviction that real-time fraud detection, bank-grade encryption, and dual-approval workflows stop bad payments before they route.
            </p>
            <div className="space-y-3 mb-8">
              {["Real-time fraud detection on every transaction","Dual-approval workflows enforced automatically","Bank-grade AES-256 encryption end-to-end","SOC 2 Type II, PCI DSS Level 1, ISO 27001","J.P. Morgan banking rails, not a middleman"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="font-black mt-0.5 flex-shrink-0" style={{ color: "#fdda00" }}>&#10003;</span>
                  <span style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/security"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "#fdda00", color: "#043886" }}
              >
                See Full Security Details
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
