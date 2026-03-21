"use client";

import { useState } from "react";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", title: "", phone: "", interest: "", teamSize: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#0d1117", minHeight: "100vh" }}>
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "start" }}>

            {/* LEFT — Form */}
            <div>
              <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>30 Minutes · Product-Focused · Tailored to You</span>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#e6edf3", marginBottom: 12 }}>
                See ACCELQ in Action
              </h1>
              <p style={{ color: "#8b949e", fontSize: "1rem", lineHeight: 1.65, marginBottom: 36 }}>
                A 30-minute demo tailored to your use case. No slides — just the product. We&apos;ll show you exactly what&apos;s relevant for your team.
              </p>

              {submitted ? (
                <div style={{ padding: 40, background: "#161b22", border: "1px solid rgba(46,160,67,0.4)", borderRadius: 16, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(46,160,67,0.15)", border: "1px solid rgba(46,160,67,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-9" stroke="#2ea043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>You&apos;re on the calendar!</h2>
                  <p style={{ color: "#8b949e", lineHeight: 1.6 }}>We&apos;ve received your request. A member of our team will reach out within 1 business day to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { label: "First Name", key: "firstName", type: "text", required: true },
                      { label: "Last Name", key: "lastName", type: "text", required: true },
                    ].map((f) => (
                      <div key={f.key}>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>{f.label} {f.required && <span style={{ color: "#21adc3" }}>*</span>}</label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          style={{ width: "100%", padding: "10px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14, outline: "none" }}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { label: "Work Email", key: "email", type: "email", required: true },
                    { label: "Company", key: "company", type: "text", required: true },
                    { label: "Job Title", key: "title", type: "text", required: true },
                    { label: "Phone (optional)", key: "phone", type: "tel", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>{f.label} {f.required && <span style={{ color: "#21adc3" }}>*</span>}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: "100%", padding: "10px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8, color: "#e6edf3", fontSize: 14, outline: "none" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>What are you most interested in? <span style={{ color: "#21adc3" }}>*</span></label>
                    <select
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8, color: form.interest ? "#e6edf3" : "#6e7681", fontSize: 14, outline: "none" }}
                    >
                      <option value="">Select a primary use case</option>
                      <option>Web Test Automation</option>
                      <option>API Testing</option>
                      <option>SAP / Salesforce / ServiceNow</option>
                      <option>Mobile Testing</option>
                      <option>AI Autopilot Agents</option>
                      <option>General Platform Overview</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#8b949e", marginBottom: 6 }}>Engineering team size</label>
                    <select
                      value={form.teamSize}
                      onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8, color: form.teamSize ? "#e6edf3" : "#6e7681", fontSize: 14, outline: "none" }}
                    >
                      <option value="">Select team size</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>201–1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ fontSize: 16, padding: "14px 24px", justifyContent: "center", marginTop: 4 }}>
                    Request Your Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <p style={{ fontSize: 12, color: "#6e7681", textAlign: "center" }}>
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT — Value props */}
            <div style={{ paddingTop: 80 }}>
              <div style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 14, marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>What you&apos;ll see in 30 minutes:</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "Live no-code test authoring",
                    "AI self-healing in action",
                    "Autopilot agents demo",
                    "Your specific use case",
                    "CI/CD pipeline integration",
                    "ROI calculation for your team",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#8b949e", marginBottom: 10 }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5l4 4 7-7" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {["30 min", "Product-focused", "No pressure", "Tailored to you", "Same-week scheduling"].map((t) => (
                  <span key={t} className="badge badge-teal" style={{ fontSize: 11 }}>{t}</span>
                ))}
              </div>

              <div style={{ padding: 20, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                  {[...Array(5)].map((_, i) => <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#fccd00"><path d="M7 1l1.8 3.8H13l-3.3 2.6 1.3 4L7 9.3l-4 2.3 1.3-4L1 5.8h4.2z" /></svg>)}
                </div>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6, fontStyle: "italic", marginBottom: 8 }}>
                  &ldquo;Best demo experience I&apos;ve had. They showed us exactly what we needed to see — no fluff, just the product solving our specific problem.&rdquo;
                </p>
                <p style={{ fontSize: 12, color: "#6e7681" }}>— QA Director, Enterprise Software Co.</p>
              </div>

              <div style={{ marginTop: 20, textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "#6e7681" }}>Trusted by</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 8 }}>
                  {["Fortune 100 Companies", "SaaS Enterprises", "Financial Services", "Healthcare Leaders"].map((t) => (
                    <span key={t} style={{ fontSize: 11, color: "#8b949e", padding: "4px 10px", border: "1px solid #30363d", borderRadius: 6 }}>{t}</span>
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
