import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unified Test Automation — No-Code Testing Across Every Layer",
  description: "ACCELQ Unified covers web, API, mobile, desktop, mainframes, and business systems — all from a single no-code interface. Zero test code required.",
};

const CAPABILITIES = [
  { label: "Web Apps", color: "#58a6ff", desc: "Record & playback with AI-enhanced selectors. Cross-browser, cloud ERP, Fiori." },
  { label: "REST & SOAP APIs", color: "#21adc3", desc: "Full API chain testing. Schema validation, contract testing, data-driven scenarios." },
  { label: "Mobile (iOS/Android)", color: "#a371f7", desc: "Real-device native and browser testing. Zero setup, cloud-native execution." },
  { label: "Desktop Apps", color: "#2ea043", desc: "Windows and macOS desktop automation. Same no-code interface as web." },
  { label: "Mainframe / AS400", color: "#8b949e", desc: "TN3270, CICS, batch job validation. Legacy systems, modern automation." },
  { label: "SAP / Fiori", color: "#1a6abb", desc: "GUI and Fiori UI automation. Business process testing for ECC and S/4HANA." },
  { label: "Salesforce", color: "#00a1e0", desc: "Lightning, Classic, LWC, CPQ. Org-aware automation for all SF clouds." },
  { label: "ServiceNow", color: "#62d84e", desc: "ITSM, HRSD, CSM, Flow Designer. Works across releases." },
  { label: "Kafka & Middleware", color: "#d29922", desc: "Event-driven testing. Validate messages, topics, and integration flows." },
  { label: "Databases", color: "#a371f7", desc: "SQL and NoSQL validation. Inline database assertions in any test." },
  { label: "ETL Pipelines", color: "#58a6ff", desc: "Source-to-target validation. Transform rules, record counts, data quality." },
  { label: "PDF, Email & Files", color: "#21adc3", desc: "Validate document output, email notifications, and file transformations." },
];

const INTEGRATIONS = ["Jira", "GitHub", "GitLab", "Azure DevOps", "Jenkins", "CircleCI", "Bamboo", "Slack", "Teams", "Selenium Grid", "BrowserStack", "Sauce Labs"];

export default function UnifiedPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>One Platform · All Layers</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 800, margin: "0 auto 20px" }}>
            Unified Test Automation.
            <br />
            <span className="text-gradient-teal">Zero Code.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            The only platform covering web, API, mobile, desktop, mainframes, and business systems — all from a single no-code interface. No tool sprawl. No skill gaps.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 24px" }}>Get a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "12px 24px" }}>Explore AI Agents</Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-teal" style={{ marginBottom: 12, display: "inline-flex" }}>What You Can Automate</span>
            <h2 className="section-title" style={{ color: "#e6edf3" }}>Everything your stack touches</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="card-hover" style={{ padding: 20, background: "#161b22", border: "1px solid #30363d", borderRadius: 10, borderLeft: `3px solid ${c.color}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: c.color, marginBottom: 6 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.55 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NO-CODE PHILOSOPHY */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>Why No-Code Matters More Now</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 20, lineHeight: 1.2 }}>
                AI writes code faster than engineers can write tests.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { color: "#21adc3", title: "Close the gap without adding headcount", desc: "No-code means every QA analyst, BA, and product owner can build test coverage — not just SDETs." },
                  { color: "#58a6ff", title: "Zero maintenance debt from code rot", desc: "Test logic built in no-code doesn't accumulate the technical debt of hand-written scripts." },
                  { color: "#a371f7", title: "Business language, not selectors", desc: "Tests that describe business processes, not DOM elements. Understandable by the whole team." },
                ].map((p) => (
                  <div key={p.title} style={{ display: "flex", gap: 14 }}>
                    <div style={{ width: 3, background: p.color, borderRadius: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Comparison */}
            <div>
              <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #30363d" }}>
                  <div style={{ padding: "12px 16px", borderRight: "1px solid #30363d", fontSize: 12, fontWeight: 700, color: "#f85149", textTransform: "uppercase", letterSpacing: "0.06em" }}>Code-Based Automation</div>
                  <div style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: "#21adc3", textTransform: "uppercase", letterSpacing: "0.06em" }}>ACCELQ No-Code</div>
                </div>
                {[
                  ["Requires developer skills", "Any team member can author"],
                  ["Breaks with every UI change", "AI self-heals automatically"],
                  ["Months to build coverage", "Days to full regression suite"],
                  ["Code debt accumulates", "No code, no debt"],
                  ["Engineers own all tests", "Business owns their tests"],
                  ["Maintenance = 60% of effort", "Maintenance = near zero"],
                ].map(([bad, good], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < 5 ? "1px solid #21262d" : "none" }}>
                    <div style={{ padding: "10px 16px", borderRight: "1px solid #21262d", fontSize: 13, color: "#6e7681" }}>✗ {bad}</div>
                    <div style={{ padding: "10px 16px", fontSize: 13, color: "#e6edf3" }}>✓ {good}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Integrates with your entire SDLC</h2>
            <p style={{ color: "#8b949e", fontSize: 14 }}>Plugs into the tools your team already uses.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {INTEGRATIONS.map((name) => (
              <div key={name} style={{ padding: "7px 16px", background: "#161b22", border: "1px solid #30363d", borderRadius: 8, fontSize: 13, color: "#8b949e", fontWeight: 500 }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Start automating everything</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>One platform. Every layer. Zero code.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
