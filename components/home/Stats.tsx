"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCountUp(target: number, duration: number = 2, inView: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { value: 14, suffix: "B+", prefix: "$", label: "Annual payment volume processed" },
  { value: 1000, suffix: "+", prefix: "", label: "Mid-market clients" },
  { value: 98, suffix: "%", prefix: "", label: "Client retention rate" },
  { value: 200, suffix: "+", prefix: "", label: "ERP integrations" },
];

function StatCard({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center px-6"
    >
      <div className="text-5xl md:text-6xl font-black mb-3 tracking-tight" style={{ color: "#ffffff" }}>
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "#adddf5", opacity: 0.8 }}>{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="stats" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#043886" }}>
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(22,158,227,0.3) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            The scale of Finexio
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Numbers that define our impact in B2B payments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
