import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Unified — One Platform for Every Test Type, Every Layer",
  description: "Web, API, mobile, desktop, mainframe, and enterprise systems — all in one no-code platform. Eliminate tool sprawl, shared components, one CI/CD. Zero code required.",
};

const PRODUCTS = [
  { name: "Automate Web", color: "#21adc3", href: "/products/web", desc: "Browser automation with AI self-healing selectors across any framework" },
  { name: "Automate API", color: "#58a6ff", href: "/products/api", desc: "REST, GraphQL, SOAP, and gRPC — full chain testing and contract validation" },
  { name: "Automate Mobile", color: "#2ea043", href: "/products/mobile", desc: "iOS and Android native, hybrid, and browser — real-device cloud execution" },
  { name: "ACCELQ Manual", color: "#a371f7", href: "/products/manual", desc: "Test case management and manual execution tracking in the same platform" },
];

const CAPABILITIES = [
  { label: "Web Apps", color: "#58a6ff", desc: "AI-enhanced selectors. Cross-browser, cloud ERP, Fiori." },
  { label: "REST & SOAP APIs", color: "#21adc3", desc: "Full API chain testing, schema validation, contract testing." },
  { label: "Mobile (iOS/Android)", color: "#a371f7", desc: "Real-device native and browser testing. Cloud-native execution." },
  { label: "Desktop Apps", color: "#2ea043", desc: "Windows and macOS desktop automation. Same no-code interface." },
  { label: "Mainframe / AS400", color: "#8b949e", desc: "TN3270, CICS, batch job validation. Legacy systems, modern automation." },
  { label: "SAP / Fiori", color: "#1a6abb", desc: "GUI and Fiori UI automation for ECC and S/4HANA." },
  { label: "Salesforce", color: "#00a1e0", desc: "Lightning, Classic, LWC, CPQ — org-aware across all SF clouds." },
  { label: "ServiceNow", color: "#62d84e", desc: "ITSM, HRSD, CSM, Flow Designer — works across releases." },
  { label: "Kafka & Middleware", color: "#d29922", desc: "Event-driven testing. Validate messages, topics, and integration flows." },
  { label: "Databases", color: "#a371f7", desc: "SQL and NoSQL validation. Inline assertions in any test." },
  { label: "ETL Pipelines", color: "#58a6ff", desc: "Source-to-target validation, transform rules, data quality." },
  { label: "PDF, Email & Files", color: "#21adc3", desc: "Document output, email notifications, file transformations." },
];

const PILLARS = [
  {
    title: "Single Source of Quality Truth",
    color: "#21adc3",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    desc: "Manual results, automated results, and exploratory test sessions all roll up into one real-time quality dashboard. No data aggregation. No exporting. No reconciliation.",
  },
  {
    title: "Shared Test Components",
    color: "#58a6ff",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="8" height="8" rx="2" stroke="#58a6ff" strokeWidth="2"/><rect x="14" y="3" width="8" height="8" rx="2" stroke="#58a6ff" strokeWidth="2"/><rect x="8" y="13" width="8" height="8" rx="2" stroke="#58a6ff" strokeWidth="2"/><path d="M6 11v2M18 11v2M12 11v2" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round"/></svg>,
    desc: "A Login flow built for web tests can be reused in API test setup and mobile regression suites. Build once, inherit everywhere — across every modality.",
  },
  {
    title: "Business Process Alignment",
    color: "#a371f7",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="#a371f7" strokeWidth="2" strokeLinecap="round"/><path d="M9 12h6M9 16h4" stroke="#a371f7" strokeWidth="2" strokeLinecap="round"/></svg>,
    desc: "Tests organized by business process — Order Management, User Onboarding, Checkout — not by technical layer. Every stakeholder understands coverage at a glance.",
  },
  {
    title: "One CI/CD Integration",
    color: "#2ea043",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#2ea043" strokeWidth="2"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#2ea043" strokeWidth="2" strokeLinecap="round"/></svg>,
    desc: "Connect once to Jenkins, GitHub Actions, GitLab CI, or Azure DevOps. All test types — web, API, mobile, manual — trigger from the same pipeline configuration.",
  },
];

const INTEGRATIONS = ["Jira", "GitHub", "GitLab", "Azure DevOps", "Jenkins", "CircleCI", "Bamboo", "Slack", "Teams", "Selenium Grid", "BrowserStack", "Sauce Labs"];

export default function UnifiedPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div style={{ position: "absolute", top: -80, left: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,173,195,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>ACCELQ Unified</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 auto 24px", maxWidth: 860 }}>
            Every Test Type. Every Layer.
            <br />
            <span className="text-gradient-teal">One Platform. Zero Fragmentation.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#8b949e", maxWidth: 620, margin: "0 auto 16px", lineHeight: 1.75 }}>
            Web, API, mobile, desktop, mainframe, and enterprise systems — all automated from a single no-code interface.
            Eliminate the tool sprawl that costs QA teams <strong style={{ color: "#e6edf3" }}>40% of their time</strong> in integration overhead.
          </p>
          <p style={{ fontSize: 13, color: "#6e7681", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.6 }}>
            One test asset library · Shared business components · One CI/CD connection · One quality dashboard
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Get a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>Explore AI Agents →</Link>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "72px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 11, color: "#6e7681", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32, fontWeight: 700 }}>What&apos;s included in Unified</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {PRODUCTS.map((p) => (
              <Link key={p.name} href={p.href} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${p.color}`, display: "block", textDecoration: "none" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</div>
                <div style={{ fontSize: 12, color: p.color }}>Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOL SPRAWL vs UNIFIED ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>
              Stop stitching. Start shipping.
            </h2>
            <p style={{ color: "#8b949e", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Every disconnected tool adds a maintenance tax. ACCELQ Unified is the single platform your whole quality team lives in.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 840, margin: "0 auto" }}>
            {/* Tool Sprawl */}
            <div style={{ padding: 28, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#6e7681", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tool Sprawl Reality</div>
              {[
                "Selenium for web, Postman for API",
                "Appium for mobile, Excel for manual",
                "4 separate CI integrations to maintain",
                "4 dashboards to reconcile",
                "No shared test components",
                "Every team owns their own silo",
                "40% of QA time lost to overhead",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#8b949e", marginBottom: 10, lineHeight: 1.5 }}>
                  <span style={{ color: "#f85149", flexShrink: 0, marginTop: 1 }}>✗</span> {item}
                </div>
              ))}
            </div>
            {/* ACCELQ Unified */}
            <div style={{ padding: 28, background: "#0d1117", border: "1px solid rgba(33,173,195,0.35)", borderRadius: 12, boxShadow: "0 0 32px rgba(33,173,195,0.06)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#21adc3", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>ACCELQ Unified</div>
              {[
                "One no-code platform for all test types",
                "One shared test asset library",
                "Shared business components across modalities",
                "One CI/CD connection for everything",
                "One real-time quality dashboard",
                "One team, complete coverage",
                "Near-zero maintenance overhead",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#e6edf3", marginBottom: 10, lineHeight: 1.5 }}>
                  <span style={{ color: "#2ea043", flexShrink: 0, marginTop: 1 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY UNIFIED MATTERS ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-blue" style={{ marginBottom: 12, display: "inline-flex" }}>Platform Architecture</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3" }}>Why unified matters</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PILLARS.map((p) => (
              <div key={p.title} className="card-hover" style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderLeft: `4px solid ${p.color}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: p.color, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-teal" style={{ marginBottom: 12, display: "inline-flex" }}>Full Stack Coverage</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 12 }}>Everything your stack touches</h2>
            <p style={{ color: "#8b949e", maxWidth: 520, margin: "0 auto", fontSize: 14, lineHeight: 1.7 }}>
              12 technology domains. One interface. No tool switching, no context switching, no integration glue.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="card-hover" style={{ padding: 18, background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, borderLeft: `3px solid ${c.color}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: c.color, marginBottom: 5 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.55 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO-CODE vs CODE ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>Why No-Code Matters More Now</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 24, lineHeight: 1.25 }}>
                AI writes code faster than engineers can write tests.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { color: "#21adc3", title: "Close the gap without adding headcount", desc: "No-code means every QA analyst, BA, and product owner can build test coverage — not just SDETs." },
                  { color: "#58a6ff", title: "Zero maintenance debt from code rot", desc: "Test logic built in no-code doesn't accumulate the technical debt of hand-written scripts that break on every deploy." },
                  { color: "#a371f7", title: "Business language, not selectors", desc: "Tests that describe business processes, not DOM elements. Understandable and ownable by the whole team." },
                ].map((p) => (
                  <div key={p.title} style={{ display: "flex", gap: 14 }}>
                    <div style={{ width: 3, background: p.color, borderRadius: 2, flexShrink: 0, marginTop: 3 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 5 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.65 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #30363d" }}>
                <div style={{ padding: "12px 18px", borderRight: "1px solid #30363d", fontSize: 12, fontWeight: 700, color: "#f85149", textTransform: "uppercase", letterSpacing: "0.06em" }}>Code-Based Automation</div>
                <div style={{ padding: "12px 18px", fontSize: 12, fontWeight: 700, color: "#21adc3", textTransform: "uppercase", letterSpacing: "0.06em" }}>ACCELQ No-Code</div>
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
                  <div style={{ padding: "11px 18px", borderRight: "1px solid #21262d", fontSize: 13, color: "#6e7681" }}>✗ {bad}</div>
                  <div style={{ padding: "11px 18px", fontSize: 13, color: "#e6edf3" }}>✓ {good}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section style={{ padding: "64px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Integrates with your entire SDLC</h2>
            <p style={{ color: "#8b949e", fontSize: 13 }}>Plugs into the tools your team already uses — no new infrastructure required.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {INTEGRATIONS.map((name) => (
              <div key={name} style={{ padding: "7px 16px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, fontSize: 13, color: "#8b949e", fontWeight: 500 }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "88px 0", borderTop: "1px solid #30363d", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(33,173,195,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Consolidate your quality toolchain</h2>
          <p style={{ color: "#8b949e", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>30-minute demo. See your exact use case covered by one platform — web, API, mobile, and enterprise systems.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Request a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>Add AI Agents →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
