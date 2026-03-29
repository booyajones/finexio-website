"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldAlert, TrendingUp, Clock, Eye, Zap } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "The Cost Problem",
    body: "The average check costs $8–$10 to process. AP teams running manual operations spend 40%+ of their time on exceptions, supplier calls, and payment errors. That's not operations — that's overhead.",
    color: "#169ee3",
    bg: "#EFF6FF",
  },
  {
    icon: ShieldAlert,
    title: "The Fraud Problem",
    body: "79% of organizations experienced payment fraud last year. The average BEC incident costs $130,000. And the liability sits entirely with your team — until Finexio.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: TrendingUp,
    title: "The Opportunity Problem",
    body: "Every payment your team runs manually is revenue you're not capturing. Virtual card programs generate $200K–$1.8M+ annually from spend you're already making. Most CFOs don't know this is possible.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

const outcomes = [
  {
    icon: Clock,
    title: "Time Back",
    body: "60–80% reduction in payment operations time. Capacity for close, FP&A, and strategy — not supplier follow-up.",
    span: "lg:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Revenue Generated",
    body: "Turn AP spend into recurring income. Virtual card rebates generate $200K–$1.8M+ annually based on your volume.",
    span: "",
  },
  {
    icon: ShieldAlert,
    title: "Zero Fraud Liability",
    body: "Finexio Shield backs every payment with up to $1M in recovery. You approve. We absorb the risk.",
    span: "",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    body: "Real-time payment status. Board-ready audit trail. One portal.",
    span: "",
  },
  {
    icon: Zap,
    title: "Go Live Fast",
    body: "~60 days to live. No new headcount. No workflow changes.",
    span: "",
  },
];

export default function Features() {
  return (
    <>
      {/* Problem Statement */}
      <section className="py-20" style={{ background: "#F6F9FC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#043886" }}>
              AP Payments Are Quietly Eating Your Finance Team Alive
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#425466" }}>
              Three problems. One fix. No workflow changes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E7EB",
                    borderLeft: `4px solid ${p.color}`,
                    boxShadow: "0 2px 12px rgba(4,56,134,0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: p.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-base font-black mb-3" style={{ color: "#043886" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Bento Grid */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#043886" }}>
              What Finance Teams Get Back
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#425466" }}>
              These aren't features. These are the outcomes CFOs report after going live.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {outcomes.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl p-6 ${o.span}`}
                  style={{
                    background: i === 0 ? "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" : "#F6F9FC",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: i === 0 ? "#fff" : "#EFF6FF" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#169ee3" }} />
                  </div>
                  <h3 className="text-base font-black mb-2" style={{ color: "#043886" }}>{o.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>{o.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Finexio Shield Section */}
      <section className="py-20" style={{ background: "#043886" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6"
                style={{ background: "rgba(22,158,227,0.15)", color: "#adddf5", border: "1px solid rgba(22,158,227,0.3)" }}
              >
                Finexio Shield
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                The Only AP Guarantee in the Market
              </h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                Finexio Shield isn't fraud insurance. It's our conviction that our controls work — and we put $1 million behind that conviction. Account validation on every payment. KYC and sanctions screening always on. We're not covering fraud risk. We're engineering it out, then backing our work.
              </p>
              <div
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-8"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span className="text-3xl font-black" style={{ color: "#FDDA00" }}>$0</span>
                <span className="text-sm font-semibold text-white">fraud liability transferred to your team</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/shield"
                  className="px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:bg-white/10"
                  style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                >
                  Read the Shield Guarantee →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { title: "Bank Account Validation", desc: "Every supplier verified before a single payment routes. No unvalidated payees." },
                { title: "KYC + Sanctions Screening", desc: "Every payee screened against global watchlists on every payment, every time." },
                { title: "AI Transaction Monitoring", desc: "Real-time anomaly detection flags unusual patterns before they become losses." },
                { title: "Human-in-the-Loop Recovery", desc: "When something looks wrong, a specialist reviews it — and we handle recovery." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-black"
                    style={{ background: "#169ee3", color: "#fff" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
