"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finexio eliminated 90% of our manual check payments in just 60 days. The ROI was immediate and the team made the entire transition seamless.",
    name: "Sarah Mitchell",
    title: "VP of Finance",
    company: "Highgate Hotels",
    initials: "SM",
  },
  {
    quote: "The supplier enrollment process was completely hands-off for our team. Finexio handled everything from outreach to activation. We were live in weeks.",
    name: "David Okonkwo",
    title: "Controller",
    company: "Regional Distribution Co.",
    initials: "DO",
  },
  {
    quote: "We earn meaningful rebates on our card program that we simply were not capturing before. Finexio turned our AP department into a revenue center.",
    name: "Jennifer Castillo",
    title: "Chief Financial Officer",
    company: "Mid-Market Manufacturer",
    initials: "JC",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#169ee3" className="w-4 h-4" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#169ee3" }}>Client Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "#043886" }}>
            What our clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col p-8 rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid #ececec",
                borderLeft: "4px solid #169ee3",
                boxShadow: "0 2px 16px rgba(4,56,134,0.06)",
              }}
            >
              <StarRating />
              <blockquote className="text-base leading-relaxed mb-8 flex-1" style={{ color: "#303941" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "#043886", color: "#adddf5" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#043886" }}>{t.name}</p>
                  <p className="text-sm" style={{ color: "#303941", opacity: 0.6 }}>{t.title}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
