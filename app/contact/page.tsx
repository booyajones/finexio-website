"use client";

import { useState } from "react";
import { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #043886 0%, #28224b 100%)" }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#adddf5" }}>Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Let&apos;s talk payments
          </h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.72)" }}>
            Schedule a demo or ask us anything. We typically respond within 1 business hour.
          </p>
        </div>
      </section>

      {/* Contact body */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Form */}
            <div className="bg-white rounded-2xl p-8" style={{ boxShadow: "0 4px 24px rgba(4,56,134,0.08)", border: "1px solid #ececec" }}>
              <h2 className="text-2xl font-black mb-6" style={{ color: "#043886" }}>Schedule a Demo</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(22,158,227,0.1)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#169ee3" strokeWidth="2" className="w-8 h-8">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#043886" }}>Thanks! We got your request.</h3>
                  <p className="text-base" style={{ color: "#303941", opacity: 0.7 }}>A Finexio team member will reach out within 1 business hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>First Name</label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }} placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>Last Name</label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }} placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }} placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>Work Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }} placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#303941" }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ border: "1.5px solid #ececec", color: "#303941", background: "#f7f8f9" }}
                      placeholder="Tell us about your AP process..." />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl text-base font-bold text-white hover:opacity-90" style={{ background: "#169ee3" }}>
                    Request a Demo
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
              <div className="rounded-2xl p-8" style={{ background: "#ffffff", border: "1px solid #ececec" }}>
                <h3 className="text-xl font-black mb-6" style={{ color: "#043886" }}>Company Headquarters</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#043886" }}>Orlando, Florida</p>
                      <p className="text-sm" style={{ color: "#303941", opacity: 0.7 }}>300 S Orange Ave, Suite 1000 — Orlando, FL 32801</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(22,158,227,0.1)", color: "#169ee3" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#043886" }}>Email</p>
                      <p className="text-sm" style={{ color: "#169ee3" }}>hello@finexio.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ background: "#043886" }}>
                <h3 className="text-xl font-black text-white mb-4">Why Finexio?</h3>
                <ul className="space-y-3">
                  {["Live in 30 days or less", "Dedicated implementation team", "Hands-off supplier enrollment", "Immediate rebate program activation", "White-glove client success"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#169ee3" }}>
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
