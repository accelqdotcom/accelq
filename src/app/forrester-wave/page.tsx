"use client";

import Image from "@/components/Img";
import Link from "next/link";
import { useState } from "react";

export default function ForresterWavePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: "#09090f" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,86,255,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: -60, left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(252,205,0,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              {/* Forrester logo */}
              <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
                <Image src="/assets/forrester-logo.svg" alt="Forrester" width={120} height={28} style={{ filter: "brightness(0) invert(1) opacity(0.5)" }} />
                <span style={{ fontSize: 12, color: "#55556a", borderLeft: "1px solid #2a2a3d", paddingLeft: 12 }}>Forrester Wave™ Report</span>
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(252,205,0,0.1)", border: "1px solid rgba(252,205,0,0.3)", borderRadius: 6, padding: "6px 14px", marginBottom: 20 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="7,1 9,5.5 14,5.5 10.5,8.5 12,13 7,10 2,13 3.5,8.5 0,5.5 5,5.5" fill="#fccd00" /></svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#fccd00", letterSpacing: "0.05em" }}>LEADER & CUSTOMER FAVORITE — Q4 2025</span>
              </div>

              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                ACCELQ Named a{" "}
                <span className="text-gradient-gold">Leader</span>
                <br />in Autonomous Testing
              </h1>

              <p style={{ fontSize: "1.05rem", color: "#8888a8", lineHeight: 1.8, marginBottom: 28 }}>
                The Forrester Wave™: Autonomous Testing Platforms, Q4 2025 recognized ACCELQ as a Leader — with the <strong style={{ color: "#eeeef5" }}>highest score in Current Offering</strong> among all evaluated vendors.
              </p>

              <blockquote style={{ borderLeft: "3px solid #7856ff", paddingLeft: 20, marginBottom: 32 }}>
                <p style={{ fontSize: "0.95rem", color: "#c084fc", lineHeight: 1.75, fontStyle: "italic" }}>
                  &ldquo;ACCELQ&apos;s impressive vision and innovation help its strategy stand out among competitors, focusing on a fully autonomous QE platform with event-driven orchestration and explainable AI.&rdquo;
                </p>
                <cite style={{ fontSize: 12, color: "#55556a", fontStyle: "normal", display: "block", marginTop: 10 }}>— Forrester Research, Q4 2025</cite>
              </blockquote>

              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { val: "#1", label: "Current Offering Score" },
                  { val: "Leader", label: "Wave Designation" },
                  { val: "★ Fav", label: "Customer Favorite" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fccd00" }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: "#55556a" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wave chart + badge */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a3d", boxShadow: "0 24px 80px rgba(120,86,255,0.15)" }}>
                <Image
                  src="/assets/forrester-wave-correct.png"
                  alt="Forrester Wave Q4 2025 — ACCELQ Leader"
                  width={680}
                  height={480}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: -20, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 12, padding: "14px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                <Image src="/assets/forrester-wave-badge.svg" alt="Forrester Wave Leader Badge" width={100} height={80} style={{ display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY SCORES */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #2a2a3d", background: "#13131a" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#eeeef5" }}>How ACCELQ Ranked</h2>
            <p style={{ color: "#8888a8", fontSize: 14, marginTop: 8 }}>Forrester evaluates vendors across three core dimensions</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
            {[
              { category: "Current Offering", score: "5.0", bar: 100, color: "#7856ff", highlight: true, note: "Highest among all vendors" },
              { category: "Strategy", score: "4.8", bar: 96, color: "#c084fc", highlight: false, note: "Top-tier strategy score" },
              { category: "Market Presence", score: "4.2", bar: 84, color: "#58a6ff", highlight: false, note: "Strong and growing" },
            ].map((s) => (
              <div key={s.category} style={{ padding: 28, background: "#09090f", border: `1px solid ${s.highlight ? s.color + "50" : "#2a2a3d"}`, borderRadius: 14, position: "relative", overflow: "hidden" }}>
                {s.highlight && (
                  <div style={{ position: "absolute", top: 0, right: 0, background: "#7856ff", color: "white", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderBottomLeftRadius: 8 }}>HIGHEST</div>
                )}
                <div style={{ fontSize: 13, color: "#55556a", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{s.category}</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 12 }}>{s.score}<span style={{ fontSize: "1rem", color: "#55556a" }}>/5.0</span></div>
                <div style={{ height: 6, background: "#2a2a3d", borderRadius: 3, marginBottom: 8 }}>
                  <div style={{ height: "100%", width: `${s.bar}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`, borderRadius: 3 }} />
                </div>
                <div style={{ fontSize: 12, color: "#55556a" }}>{s.note}</div>
              </div>
            ))}
          </div>

          {/* Scorecard */}
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a3d" }}>
            <Image
              src="/assets/forrester-scorecard.png"
              alt="Forrester Wave Scorecard — ACCELQ vs Competitors"
              width={1200}
              height={570}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-brand" style={{ marginBottom: 12, display: "inline-flex" }}>What Forrester Said</span>
            <h2 className="section-title" style={{ color: "#eeeef5" }}>Key Findings from the Report</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {[
              {
                color: "#7856ff",
                icon: "🤖",
                title: "Agentic AI Leadership",
                quote: "ACCELQ focuses on a fully autonomous QE platform with event-driven orchestration and explainable AI — a differentiated approach among evaluated vendors.",
              },
              {
                color: "#00e5d3",
                icon: "🏆",
                title: "Customer Favorite",
                quote: "ACCELQ earned the Customer Favorite designation — a recognition given only to vendors whose customers report the highest satisfaction scores.",
              },
              {
                color: "#fccd00",
                icon: "⚡",
                title: "Strong for Enterprise AI Apps",
                quote: "A strong testing choice for enterprises that prioritize genAI, agent-based automation, and autonomous development across custom and packaged applications.",
              },
              {
                color: "#c084fc",
                icon: "🎯",
                title: "Vision & Innovation",
                quote: "ACCELQ's impressive vision and innovation help its strategy stand out — especially in autonomous test planning, self-healing, and LLM-native test generation.",
              },
            ].map((f) => (
              <div key={f.title} className="card-hover" style={{ background: "#13131a", border: "1px solid #2a2a3d", borderTop: `3px solid ${f.color}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.7, fontStyle: "italic" }}>&ldquo;{f.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT DOWNLOAD FORM */}
      <section id="getreport" style={{ padding: "80px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            {/* Left — value props */}
            <div>
              <span className="badge badge-gold" style={{ marginBottom: 16, display: "inline-flex" }}>Free Download</span>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#eeeef5", lineHeight: 1.2, marginBottom: 20 }}>
                Get the Full<br /><span className="text-gradient-gold">Forrester Wave™</span><br />Report
              </h2>
              <p style={{ color: "#8888a8", lineHeight: 1.8, marginBottom: 32 }}>
                Read the complete Forrester Wave™: Autonomous Testing Platforms, Q4 2025 report — independently researched and published by Forrester Research.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Full vendor comparison across 15+ criteria",
                  "ACCELQ's detailed scoring breakdown",
                  "Analyst commentary and strategic guidance",
                  "How to evaluate autonomous testing platforms",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(120,86,255,0.15)", border: "1px solid rgba(120,86,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#7856ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#8888a8" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: 24, background: "rgba(120,86,255,0.06)", border: "1px solid rgba(120,86,255,0.2)", borderRadius: 12 }}>
                <Image src="/assets/forrester-wave-badge.svg" alt="Forrester Wave Leader 2025" width={80} height={64} style={{ marginBottom: 12 }} />
                <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.65 }}>
                  ACCELQ is one of only a few vendors named both a <strong style={{ color: "#eeeef5" }}>Leader</strong> and a <strong style={{ color: "#fccd00" }}>Customer Favorite</strong> in this evaluation.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 16, padding: 36 }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(120,86,255,0.15)", border: "2px solid #7856ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14l5.5 5.5L22 9" stroke="#7856ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#eeeef5", marginBottom: 12 }}>Report on its way!</h3>
                  <p style={{ color: "#8888a8", fontSize: 14, lineHeight: 1.7 }}>
                    Check your inbox for the complimentary Forrester Wave™ report. Our team will also reach out shortly.
                  </p>
                  <Link href="/demo" className="btn-cta" style={{ display: "inline-block", marginTop: 24, fontSize: 14, padding: "12px 24px" }}>
                    See ACCELQ Live
                  </Link>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#eeeef5", marginBottom: 6 }}>Access the Report</h3>
                  <p style={{ fontSize: 13, color: "#55556a", marginBottom: 24 }}>Complimentary copy — courtesy of ACCELQ</p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                      { id: "email", label: "Work Email", type: "email", placeholder: "jane@company.com" },
                      { id: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
                      { id: "title", label: "Job Title", type: "text", placeholder: "QA Manager" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8888a8", marginBottom: 6 }}>{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={form[field.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            background: "#13131a",
                            border: "1px solid #2a2a3d",
                            borderRadius: 8,
                            color: "#eeeef5",
                            fontSize: 14,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="btn-cta"
                      style={{ marginTop: 8, width: "100%", justifyContent: "center", fontSize: 15, padding: "13px 0" }}
                    >
                      Download Free Report
                    </button>
                    <p style={{ fontSize: 11, color: "#55556a", textAlign: "center", lineHeight: 1.6 }}>
                      By submitting, you agree to our{" "}
                      <Link href="/legal/privacy-policy" style={{ color: "#7856ff" }}>Privacy Policy</Link>.
                      We&apos;ll also send occasional product updates — unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, color: "#55556a", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Why enterprises choose ACCELQ</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { val: "40%", label: "reduction in test maintenance", color: "#7856ff" },
              { val: "10×", label: "faster test creation with AI", color: "#fccd00" },
              { val: "80%", label: "automation coverage achieved", color: "#00e5d3" },
              { val: "Zero", label: "scripting required", color: "#c084fc" },
            ].map((s) => (
              <div key={s.label} style={{ padding: 24, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: s.color, marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#8888a8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(120,86,255,0.08), rgba(252,205,0,0.04))", borderTop: "1px solid rgba(120,86,255,0.2)", textAlign: "center" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#eeeef5", marginBottom: 16 }}>
              Ready to see the #1-ranked platform?
            </h2>
            <p style={{ color: "#8888a8", lineHeight: 1.75, marginBottom: 28 }}>
              Join hundreds of enterprises that chose ACCELQ after reading the Forrester Wave™ report.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "14px 32px" }}>Book a Demo</Link>
              <Link href="#getreport" className="btn-secondary" style={{ fontSize: 15, padding: "14px 32px" }}>Get the Report</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
