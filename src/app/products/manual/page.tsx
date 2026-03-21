import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Manual — Structured Manual Testing & Test Management",
  description: "Manage manual test cases, exploratory testing sessions, and test execution in the same platform as your automated tests. One quality picture.",
};

const FEATURES = [
  {
    title: "Test Case Management",
    color: "#58a6ff",
    desc: "Write, organize, and version manual test cases in the same platform as your automation. No more disconnected spreadsheets or wiki pages.",
  },
  {
    title: "Exploratory Testing",
    color: "#21adc3",
    desc: "Session-based exploratory testing with built-in note-taking, screenshot capture, and bug filing — all linked to your test plan.",
  },
  {
    title: "Unified Reporting",
    color: "#a371f7",
    desc: "Manual and automated results in one dashboard. Executives see one quality score. Teams see the full picture.",
  },
  {
    title: "1-Click Automation Conversion",
    color: "#2ea043",
    desc: "Convert validated manual test cases to automated flows with a single click. Your manual investment becomes the baseline for automation.",
  },
  {
    title: "Traceability",
    color: "#d29922",
    desc: "Link test cases to requirements, user stories, and defects. Prove coverage and compliance with complete audit trails.",
  },
  {
    title: "Execution Tracking",
    color: "#58a6ff",
    desc: "Track pass/fail/blocked status, assign tests to team members, and monitor sprint test completion — all in real time.",
  },
];

export default function ACCELQManualPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Manual Test Management</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Manual Testing That Belongs
            <br /><span className="text-gradient-blue">Alongside Automation.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Manual testing isn&apos;t going away. But it shouldn&apos;t live in a spreadsheet while your automation lives in a different tool. ACCELQ Manual brings everything together.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/products/unified" className="btn-secondary">ACCELQ Unified</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Everything manual testing needs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${f.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BRIDGE */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>The path from manual to automated</h2>
            <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 40 }}>
              Most automation programs fail because they start from scratch. ACCELQ Manual lets you validate test coverage manually first, then convert to automation with one click — preserving business logic, not just steps.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, position: "relative" }}>
              {[
                { phase: "Write", desc: "Create structured test cases aligned to requirements", color: "#58a6ff" },
                { phase: "Execute", desc: "Run manually, track results, file bugs inline", color: "#21adc3" },
                { phase: "Automate", desc: "Convert to automation with one click when stable", color: "#2ea043" },
              ].map((p, i) => (
                <div key={p.phase} style={{ padding: 20, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, position: "relative" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Phase {i + 1}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 8 }}>{p.phase}</div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Unify your quality program</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See how ACCELQ connects manual and automated testing in a single platform.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request a Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
