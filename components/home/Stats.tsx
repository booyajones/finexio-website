"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);
  return count;
}

const statsData = [
  { end: 58, suffix: "B+", prefix: "$", label: "Annual Payment Volume", decimal: true },
  { end: 1300, suffix: "+", prefix: "", label: "Enterprise Buyers", decimal: false },
  { end: 3, suffix: "M+", prefix: "", label: "Enrolled Suppliers", decimal: false },
  { end: 98, suffix: "%", prefix: "", label: "Client Retention Rate", decimal: false },
];

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count0 = useCountUp(58, 2000, started);
  const count1 = useCountUp(1300, 2000, started);
  const count2 = useCountUp(3, 2000, started);
  const count3 = useCountUp(98, 2000, started);
  const counts = [count0, count1, count2, count3];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "#043886" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">The Numbers Behind the Conviction</h2>
          <p className="text-blue-200">Backed by scale, proven by results</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl glass-card"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: "#fdda00" }}>
                {stat.prefix}
                {stat.decimal ? (counts[i] / 10).toFixed(1) : counts[i].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}