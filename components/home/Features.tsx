"use client";

import { motion } from "framer-motion";

const bentoCards = [
  {
    accent: "#fdda00",
    accentLabel: "$6–16",
    title: "Manual Cost",
    body: "Per invoice to process manually. AP teams spend 40% of their time on exceptions, supplier calls, and payment errors your software should own.",
    span: "lg:col-span-2",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    accent: "#f87171",
    accentLabel: "73%",
    title: "Fraud Exposure",
    body: "Of organizations experienced payment fraud last year. Average loss: 00K per incident. The liability sits with your team until Finexio.",
    span: "",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    accent: "#34d399",
    accentLabel: "1–2%",
    title: "Missed Revenue",
    body: "Virtual card rebates go uncaptured. That percentage of eligible AP volume generates 00K to .8M annually from spend you are already making.",
    span: "",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <polyline strokeLinecap="round" strokeLinejoin="round" points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline strokeLinecap="round" strokeLinejoin="round" points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20" style={{ background: "#043886" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The AP Status Quo Is Broken
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Three problems your finance team absorbs every month.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bentoCards.map((card, i) => {
            const Icon = () => card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl p-6 ${card.span}`}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  boxShadow: "0 0 40px rgba(22,158,227,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,255,255,0.08)", color: card.accent }}
                >
                  <Icon />
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: card.accent }}>{card.accentLabel}</div>
                <h3 className="text-base font-black text-white mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
