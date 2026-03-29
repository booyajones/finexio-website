"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  end,
  format,
}: {
  end: number;
  format: (n: number) => string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, end);
      setCount(Math.floor(current));
      if (current >= end) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{format(count)}</span>;
}

const stats = [
  { label: "Payment Volume Processed", end: 58, format: (n: number) => `${(n / 10).toFixed(1)}B+` },
  { label: "Active Buyers", end: 1300, format: (n: number) => n.toLocaleString() + "+" },
  { label: "Enrolled Suppliers", end: 3, format: (n: number) => n + "M+" },
  { label: "Partner Customers", end: 4700, format: (n: number) => n.toLocaleString() + "+" },
  { label: "Partners Lost Since Launch", end: 0, format: () => "0" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#043886" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-black mb-1" style={{ color: "#fdda00", fontSize: "36px" }}>
                <CountUp end={stat.end} format={stat.format} />
              </p>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-xs font-semibold" style={{ color: "rgba(173,221,245,0.6)" }}>
          Backed by J.P. Morgan &middot; Visa Commercial Partner &middot; SOC 2 Type II Certified
        </p>
      </div>
    </section>
  );
}
