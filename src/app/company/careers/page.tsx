import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at ACCELQ — Help Build Quality for the AI Era",
  description: "Join 200+ people across 25 countries building the platform that ensures AI-generated code can actually be trusted. See open roles at ACCELQ.",
};

const ROLES = [
  { title: "Senior Frontend Engineer", team: "Platform Engineering", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer — Quality Intelligence", team: "Autopilot", location: "Remote", type: "Full-time" },
  { title: "Enterprise Account Executive", team: "Sales", location: "North America", type: "Full-time" },
  { title: "Solutions Engineer", team: "Sales Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Manager — Autopilot", team: "Product", location: "Remote", type: "Full-time" },
  { title: "Developer Relations Engineer", team: "Growth", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", team: "Customer Success", location: "Remote", type: "Full-time" },
  { title: "Senior QA Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
];

const VALUES = [
  { title: "Innovation Without Compromise", color: "#21adc3" },
  { title: "Business-First Design", color: "#58a6ff" },
  { title: "Relentless Simplicity", color: "#a371f7" },
  { title: "Customer Outcomes Over Features", color: "#2ea043" },
];

const PERKS = [
  "Remote-first with async culture", "Competitive salary + equity", "$2,000 annual learning budget",
  "Conference & travel support", "Comprehensive health benefits", "Home office stipend",
  "Unlimited PTO", "Global team, local autonomy",
];

export default function CareersPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>Join the Team</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 760, margin: "0 auto 20px" }}>
            Help Build Quality
            <br />
            <span className="text-gradient-teal">for the AI Era.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            We&apos;re building the platform that ensures AI-generated code can actually be trusted. Join 200+ people across 25 countries doing the most important work in software quality.
          </p>
        </div>
      </section>

      {/* WHY ACCELQ */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Why ACCELQ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { color: "#a371f7", title: "Cutting-Edge AI Work", desc: "Work on agentic AI systems, LLM orchestration, self-healing algorithms, and the frontier of autonomous quality engineering." },
              { color: "#21adc3", title: "Global Remote-First Team", desc: "200+ people across 25 countries. We believe the best talent is distributed — and we build culture intentionally." },
              { color: "#58a6ff", title: "High Ownership & Impact", desc: "Small, focused teams. Your work ships to Fortune 100 customers and 1B+ test executions annually. Impact is measurable and real." },
              { color: "#2ea043", title: "Competitive Comp + Equity", desc: "Market-rate salaries, meaningful equity, and a full benefits package — because great work deserves great compensation." },
            ].map((p) => (
              <div key={p.title} className="card-border card-hover" style={{ padding: 24, borderTop: `3px solid ${p.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: p.color, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Open positions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {ROLES.map((role) => (
              <div key={role.title} className="card-hover" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, gap: 16 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 3 }}>{role.title}</div>
                  <div style={{ fontSize: 12, color: "#8b949e" }}>{role.team} · {role.location} · {role.type}</div>
                </div>
                <Link href="/company/contact" className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px", whiteSpace: "nowrap" }}>Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Perks & benefits</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {PERKS.map((p) => (
              <div key={p} style={{ padding: "8px 18px", background: "#161b22", border: "1px solid rgba(33,173,195,0.3)", borderRadius: 8, fontSize: 13, color: "#21adc3", fontWeight: 500 }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <p style={{ fontSize: 13, color: "#8b949e", marginBottom: 16 }}>We build around four core values</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ padding: "8px 16px", background: "#0d1117", border: `1px solid ${v.color}40`, borderRadius: 8, fontSize: 13, color: v.color, fontWeight: 600 }}>{v.title}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Don&apos;t see your role?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>We&apos;re always looking for exceptional people. Send us a message and tell us how you&apos;d contribute.</p>
          <Link href="/company/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>

    </div>
  );
}
