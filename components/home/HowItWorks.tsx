"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your ERP",
    desc: "We integrate with SAP, Oracle, NetSuite, and 200+ ERPs in days, not months. No IT project required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="15" y="3" width="7" height="7" rx="1" />
        <rect x="8.5" y="14" width="7" height="7" rx="1" />
        <path d="M5.5 10v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2" />
        <path d="M12 16V10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Enroll Your Suppliers",
    desc: "Our team manages supplier outreach and onboarding&mdash;completely hands-free for your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Approve Payments",
    desc: "Your team reviews and approves payment batches within your existing ERP workflow. Zero new systems to learn.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Earn Rebates",
    desc: "Finexio executes payments across ACH, virtual card, and check rails. You earn rebates on card spend automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ background: "#f7f8f9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#169ee3" }}>The Process</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "#043886" }}>
            How Finexio Works
          </h2>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-20`}
            >
              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-4 justify-center lg:justify-start mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#169ee3" }}>
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight" style={{ color: "#043886" }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed max-w-md mx-auto lg:mx-0" style={{ color: "#303941", opacity: 0.75 }}
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />
              </div>

              {/* Step visual */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <span
                    className="text-[160px] font-black leading-none select-none pointer-events-none"
                    style={{ color: "#043886", opacity: 0.05 }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ background: "#043886", color: "#adddf5", boxShadow: "0 20px 60px rgba(4,56,134,0.25)" }}
                    >
                      <div style={{ transform: "scale(1.8)" }}>{step.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


