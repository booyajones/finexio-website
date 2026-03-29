"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #043886 0%, #169ee3 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Stop Running Payments. Start Running the Business.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            In 60 days, your AP team could be completely out of payment execution. We take it from here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105"
              style={{
                background: "#fdda00",
                color: "#043886",
                boxShadow: "0 0 40px rgba(253,218,0,0.3)",
              }}
            >
              Get Your Free AP Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-white/20"
              style={{ color: "white", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              Talk to a Payments Expert
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            {["J.P. Morgan", "SOC 2 Type II", "Visa Commercial", "0 Partners Lost"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span>·</span>}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
