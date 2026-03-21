import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automate Web — No-Code Browser Test Automation | ACCELQ",
  description: "Record, build, and maintain cross-browser web tests without writing a line of code. ACCELQ's AI-powered self-healing keeps tests green through UI changes.",
};

const FEATURES = [
  {
    title: "Visual Test Builder",
    color: "#21adc3",
    desc: "Build tests by interacting with your live application. ACCELQ captures element context — not brittle CSS selectors — so tests survive UI refactors.",
  },
  {
    title: "Self-Healing AI",
    color: "#58a6ff",
    desc: "When a UI change breaks a locator, Autopilot automatically identifies the updated element and repairs the test. No manual intervention needed.",
  },
  {
    title: "Cross-Browser Execution",
    color: "#a371f7",
    desc: "Run the same test across Chrome, Firefox, Safari, and Edge in parallel. Catch browser-specific regressions before they reach users.",
  },
  {
    title: "Dynamic Element Handling",
    color: "#2ea043",
    desc: "Tables, dropdowns, modals, SPAs, shadow DOM — ACCELQ handles modern web patterns that trip up legacy automation tools.",
  },
  {
    title: "Data-Driven Testing",
    color: "#d29922",
    desc: "Parameterize any test with external data sources: Excel, CSV, API responses, or database queries. One test covers thousands of scenarios.",
  },
  {
    title: "Component Reuse",
    color: "#21adc3",
    desc: "Build a library of reusable test components aligned to business flows — Login, Checkout, Submit Form. Changes propagate automatically.",
  },
];

const STATS = [
  { value: "70%", label: "faster test creation vs. scripted tools" },
  { value: "90%", label: "reduction in test maintenance overhead" },
  { value: "5x", label: "more test coverage from the same team" },
];

export default function AutomateWebPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>Web Test Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Web Automation That Survives
            <br /><span className="text-gradient-teal">Every UI Change.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Build comprehensive web test suites visually. No Selenium, no XPath maintenance, no flaky tests. Just coverage that grows as fast as your product does.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary">See Autopilot AI</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: 24 }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#21adc3", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#8b949e" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Built for modern web applications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${f.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 48 }}>From click to coverage in minutes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Open your app", desc: "Launch the ACCELQ recorder and navigate your web application as a user would." },
              { step: "02", title: "ACCELQ captures intent", desc: "The platform records your actions as business-level test steps, not raw selectors." },
              { step: "03", title: "Add assertions", desc: "Validate data, page state, and UI elements with point-and-click assertion builders." },
              { step: "04", title: "Execute anywhere", desc: "Run locally, in CI/CD, or on cloud grids — in parallel across browsers — on every commit." },
            ].map((step) => (
              <div key={step.step} style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#21adc3", marginBottom: 12 }}>STEP {step.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Ready to automate your web tests?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See how teams go from zero to full regression coverage in under a week.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request a Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
