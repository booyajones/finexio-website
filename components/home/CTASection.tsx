"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "#043886" }}>
            Stop Running Payments. Start Running the Business.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "#425466" }}>
            In 60 days, your AP team could be completely out of payment execution. 
            We take it from here.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #169ee3 0%, #043886 100%)",
                boxShadow: "0 4px 24px rgba(22,158,227,0.35)",
              }}
            >
              Get Your Free AP Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:bg-gray-50"
              style={{ color: "#043886", border: "2px solid #E5E7EB" }}
            >
              Talk to a Payments Expert
            </Link>
          </div>

          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            No pitch. No commitment. Response within 4 business hours.
          </p>

          {/* ROI teaser */}
          <div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl"
            style={{ background: "#F6F9FC", border: "1px solid #E5E7EB" }}
          >
            {[
              { spend: "$75M AP spend", savings: "$200K/yr savings" },
              { spend: "$150M AP spend", savings: "$425K/yr savings" },
              { spend: "$300M AP spend", savings: "$900K/yr savings" },
              { spend: "$600M AP spend", savings: "$1.8M+/yr savings" },
            ].map((row) => (
              <div key={row.spend} className="text-center">
                <p className="text-xs font-medium mb-1" style={{ color: "#6B7280" }}>{row.spend}</p>
                <p className="text-sm font-black" style={{ color: "#043886" }}>{row.savings}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#9CA3AF" }}>
            Estimated annual virtual card rebate revenue. Starting at $1,200/month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



