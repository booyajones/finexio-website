"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, to);
      setCount(Math.floor(current));
      if (current >= to) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { label: "Payment Volume Processed", value: 5.8, suffix: "B+", prefix: "$", display: "$5.8B+" },
  { label: "Active Buyers", value: 1300, suffix: "+", prefix: "", display: "1,300+" },
  { label: "Enrolled Suppliers", value: 3000000, suffix: "M+", prefix: "", display: "3M+" },
  { label: "Partner Customers", value: 4700, suffix: "+", prefix: "", display: "4,700+" },
  { label: "Partners Lost Since Launch", value: 0, suffix: "", prefix: "", display: "0" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#043886" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white mb-1">
                {stat.display}
              </p>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#adddf5" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-xs font-semibold" style={{ color: "rgba(173,221,245,0.6)" }}>
          Backed by J.P. Morgan · Visa Commercial Partner · SOC 2 Type II Certified
        </p>
      </div>
    </section>
  );
}
