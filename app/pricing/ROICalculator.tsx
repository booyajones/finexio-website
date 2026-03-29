"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [volume, setVolume] = useState(5000000);
  const [cardPct, setCardPct] = useState(40);
  const rebateRate = 0.015;
  const cardVolume = volume * (cardPct / 100);
  const annualRebate = cardVolume * rebateRate;
  const laborSavings = volume * 0.002;
  const totalSavings = annualRebate + laborSavings;
  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const fmtVol = (n: number) => {
    if (n >= 1000000) return "$" + (n / 1000000).toFixed(1) + "M";
    return "$" + (n / 1000).toFixed(0) + "K";
  };

  return (
    <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #043886, #0a4fa3)", boxShadow: "0 20px 60px rgba(4,56,134,0.3)" }}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Your AP Profile</h3>
          <div className="mb-6">
            <label className="block text-blue-200 text-sm mb-2">Annual AP Volume: <span className="text-white font-bold">{fmtVol(volume)}</span></label>
            <input type="range" min="500000" max="100000000" step="500000" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full accent-yellow-400" />
            <div className="flex justify-between text-xs text-blue-300 mt-1">
              <span>$500K</span>
              <span>$100M</span>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-blue-200 text-sm mb-2">Virtual Card Eligible: <span className="text-white font-bold">{cardPct}%</span></label>
            <input type="range" min="10" max="80" step="5" value={cardPct} onChange={(e) => setCardPct(Number(e.target.value))} className="w-full accent-yellow-400" />
            <div className="flex justify-between text-xs text-blue-300 mt-1">
              <span>10%</span>
              <span>80%</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Your Estimated ROI</h3>
          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: "rgba(253,218,0,0.15)", border: "1px solid rgba(253,218,0,0.3)" }}>
              <div className="text-sm text-yellow-200 mb-1">Annual Card Rebates</div>
              <div className="text-3xl font-bold" style={{ color: "#fdda00" }}>{fmt(annualRebate)}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="text-sm text-blue-200 mb-1">Labor Savings (AP Automation)</div>
              <div className="text-2xl font-bold text-white">{fmt(laborSavings)}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: "rgba(22,158,227,0.2)", border: "1px solid rgba(22,158,227,0.4)" }}>
              <div className="text-sm text-blue-200 mb-1">Total Annual Benefit</div>
              <div className="text-3xl font-bold text-white">{fmt(totalSavings)}</div>
            </div>
          </div>
          <p className="text-xs text-blue-300 mt-4">Estimated based on 1.5% avg rebate rate and $0.20/payment labor savings. Actual results vary.</p>
          <a href="/contact" className="block text-center mt-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105" style={{ background: "#fdda00", color: "#043886" }}>Get Your Custom Analysis</a>
        </div>
      </div>
    </div>
  );
}