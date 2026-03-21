"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });

  return (
    <div style={{ background: "#0d1117" }}>
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#e6edf3", marginBottom: 12 }}>Let&apos;s Talk Quality</h1>
            <p style={{ color: "#8b949e", maxWidth: 440, margin: "0 auto" }}>Whether you&apos;re evaluating ACCELQ, need support, or want to explore partnerships — we&apos;re here.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 48, alignItems: "start" }}>
            {/* FORM */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 36 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(33,173,195,0.15)", border: "1px solid rgba(33,173,195,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-9" stroke="#21adc3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Message sent!</h2>
                  <p style={{ color: "#8b949e" }}>We&apos;ll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>Send us a message</h2>
                  {[
                    { label: "Full Name", key: "name", type: "text", required: true },
                    { label: "Work Email", key: "email", type: "email", required: true },
                    { label: "Company", key: "company", type: "text", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>{f.label}{f.required && <span style={{ color: "#21adc3" }}> *</span>}</label>
                      <input type={f.type} required={f.required} value={form[f.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: "100%", padding: "10px 14px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14, outline: "none" }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>Role</label>
                    <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: form.role ? "#e6edf3" : "#6e7681", fontSize: 14, outline: "none" }}>
                      <option value="">Select your role</option>
                      <option>VP Engineering / CTO</option>
                      <option>QA Director / Manager</option>
                      <option>QA Engineer / SDET</option>
                      <option>Business Analyst</option>
                      <option>Product Manager</option>
                      <option>Partner / Reseller</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>Message <span style={{ color: "#21adc3" }}>*</span></label>
                    <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                      placeholder="Tell us about your team, your current testing setup, and what you're hoping to achieve..."
                      style={{ width: "100%", padding: "10px 14px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14, outline: "none", resize: "vertical", fontFamily: "inherit" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: 15, padding: "12px" }}>Send Message</button>
                </form>
              )}
            </div>

            {/* CONTACT OPTIONS */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Sales", detail: "sales@accelq.com", icon: "💼", color: "#21adc3", desc: "Questions about the platform, pricing, or enterprise options." },
                { label: "Support", detail: "support.accelq.com", icon: "🛠", color: "#58a6ff", desc: "Technical support for existing customers." },
                { label: "Partnerships", detail: "partners@accelq.com", icon: "🤝", color: "#a371f7", desc: "SI, technology, and reseller partnership inquiries." },
                { label: "Community", detail: "community.accelq.com", icon: "🌐", color: "#2ea043", desc: "Join the ACCELQ QCommunity platform." },
              ].map((c) => (
                <div key={c.label} className="card-border" style={{ padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 24 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: c.color, marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 13, color: "#e6edf3", marginBottom: 4 }}>{c.detail}</div>
                      <div style={{ fontSize: 12, color: "#8b949e" }}>{c.desc}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Offices */}
              <div style={{ marginTop: 8 }}>
                <p style={{ fontSize: 12, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Offices</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { region: "HQ — North America", detail: "United States" },
                    { region: "EMEA", detail: "Europe" },
                    { region: "APAC", detail: "India" },
                  ].map((o) => (
                    <div key={o.region} style={{ padding: "10px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3" }}>{o.region}</div>
                      <div style={{ fontSize: 12, color: "#8b949e" }}>{o.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
