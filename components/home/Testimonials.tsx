"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Approvals stayed the same. Everything else got easier.",
    author: "Daniel Condon",
    title: "CFO",
    company: "Phoenix Stamping",
    stat: "77% of check spend moved to digital within 90 days",
    industry: "Manufacturing",
  },
  {
    quote: "We stopped running payments and started running the business. The difference is profound — our AP team now focuses on strategy, not supplier phone calls.",
    author: "Jennifer Walsh",
    title: "Controller",
    company: "Mid-Market Distribution Co.",
    stat: "82% reduction in AP exception handling time",
    industry: "Distribution",
  },
  {
    quote: "The virtual card revenue alone paid for the program three times over in the first year. I wish we had done this sooner.",
    author: "Marcus Thompson",
    title: "VP Finance",
    company: "Regional Hospitality Group",
    stat: "$340K in virtual card rebates — Year 1",
    industry: "Hospitality",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20" style={{ background: "#F6F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#043886" }}>
            From CFOs Who've Made the Switch
          </h2>
          <p className="text-lg" style={{ color: "#425466" }}>
            Finance teams across manufacturing, distribution, and hospitality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                borderTop: `3px solid #169ee3`,
                boxShadow: "0 2px 16px rgba(4,56,134,0.06)",
              }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#169ee3" }} />
              <p className="text-base italic leading-relaxed mb-6 flex-1" style={{ color: "#111827" }}>
                "{t.quote}"
              </p>
              <div
                className="px-3 py-2 rounded-lg text-xs font-bold mb-4"
                style={{ background: "#EFF6FF", color: "#043886" }}
              >
                📊 {t.stat}
              </div>
              <div>
                <p className="text-sm font-black" style={{ color: "#043886" }}>{t.author}</p>
                <p className="text-xs" style={{ color: "#6B7280" }}>{t.title}, {t.company}</p>
                <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{t.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



