"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}
    >
      {/* Floating circles */}
      <motion.div
        animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-64 h-64 rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: "#ffffff" }}
      />
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-20 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#adddf5" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Ready to modernize
            <br />
            your AP?
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join 1,000+ companies that process $14B+ in payments annually with Finexio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-white/90 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#043886" }}
            >
              Schedule a Demo
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
              style={{ border: "2px solid rgba(255,255,255,0.5)" }}
            >
              Calculate Your ROI
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
