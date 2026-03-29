"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #043886 0%, #0a3a7a 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "white" }}>
            Stop Running Payments. Start Running the Business.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            In 60 days, your AP team could be completely out of payment execution. 
            We take it from here.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "#fdda00",
                color: "#043886",
                boxShadow: "0 4px 24px rgba(253,218,0,0.3)",
              }}
            >
              Get Your Free AP Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all "
              style={{ color: "rgba(255,255,255,0.85)", border: "2px solid rgba(255,255,255,0.25)" }}
            >
              Talk to a Payments Expert
            </Link>
          </div>

          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            No pitch. No commitment. Response within 4 business hours.
          </p>

          {/* ROI teaser */}
          <div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {[
              { spend: "$75M AP spend", savings: "$200K/yr savings" },
              { spend: "$150M AP spend", savings: "$425K/yr savings" },
              { spend: "$300M AP spend", savings: "$900K/yr savings" },
              { spend: "$600M AP spend", savings: "$1.8M+/yr savings" },
            ].map((row) => (
              <div key={row.spend} className="text-center">
                <p className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>{row.spend}</p>
                <p className="text-sm font-black" style={{ color: "white" }}>{row.savings}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            Estimated annual virtual card rebate revenue. Starting at $1,200/month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



