import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Unified — One Platform for Every Test Type, Every Layer",
  description: "Web, API, mobile, desktop, mainframe, and enterprise systems — all in one no-code platform. Eliminate tool sprawl, shared components, one CI/CD. Zero code required.",
};

const PTEAL = "#0d9e80";
const PRODUCTS = [
  {
    name: "Automate Web", href: "/products/web",
    desc: "Codeless AI record & instant playback across web, cloud ERP apps and more",
    icon: <svg width="32" height="28" viewBox="0 0 32 28" fill="none"><path d="M6 2L26 2L22 26L2 26Z" fill={PTEAL} opacity="0.85"/><path d="M10 8L20 8L18 20L8 20Z" fill="#fff" opacity="0.3"/></svg>,
  },
  {
    name: "Automate API", href: "/products/api",
    desc: "REST, SOAP, GraphQL, Kafka, MQs, Microservices — fully codeless",
    icon: <svg width="30" height="28" viewBox="0 0 30 28" fill="none"><path d="M15 1L29 27H1Z" fill={PTEAL} opacity="0.85"/><path d="M15 9L22 23H8Z" fill="#fff" opacity="0.25"/></svg>,
  },
  {
    name: "Automate Mobile", href: "/products/mobile",
    desc: "Zero-setup, cloud-native codeless automation for real-device apps on iOS & Android",
    icon: <svg width="26" height="30" viewBox="0 0 26 30" fill="none"><rect x="3" y="1" width="20" height="28" rx="3" fill={PTEAL} opacity="0.85"/><rect x="7" y="5" width="12" height="16" rx="1" fill="#fff" opacity="0.3"/><circle cx="13" cy="25" r="2" fill="#fff" opacity="0.3"/></svg>,
  },
  {
    name: "Automate Desktop", href: "/products/web",
    desc: "Native Windows & legacy desktop application testing with no-code design-first approach",
    icon: <svg width="30" height="28" viewBox="0 0 30 28" fill="none"><rect x="1" y="1" width="28" height="20" rx="2" fill={PTEAL} opacity="0.85"/><rect x="4" y="4" width="22" height="14" rx="1" fill="#fff" opacity="0.25"/><rect x="11" y="23" width="8" height="2" rx="1" fill={PTEAL} opacity="0.6"/><rect x="8" y="26" width="14" height="2" rx="1" fill={PTEAL} opacity="0.4"/></svg>,
  },
  {
    name: "Test Management", href: "/products/manual",
    desc: "Unified planning, execution, traceability & collaboration across the quality lifecycle",
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="1" y="1" width="26" height="26" rx="3" fill={PTEAL} opacity="0.85"/><rect x="5" y="5" width="18" height="18" rx="1" fill="#fff" opacity="0.25"/><line x1="9" y1="11" x2="19" y2="11" stroke="#fff" strokeWidth="1.5" opacity="0.5"/><line x1="9" y1="15" x2="16" y2="15" stroke="#fff" strokeWidth="1.5" opacity="0.5"/><line x1="9" y1="19" x2="14" y2="19" stroke="#fff" strokeWidth="1.5" opacity="0.4"/></svg>,
  },
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

      {/* ── PRODUCTS IN UNIFIED ── */}
      <section style={{ padding: "72px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="badge badge-teal" style={{ marginBottom: 12, display: "inline-flex" }}>Complete Coverage</span>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>Five specialized engines. One unified platform.</h2>
            <p style={{ fontSize: 13, color: "#6e7681", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Every test type shares the same asset library, execution infrastructure, and quality dashboard.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {PRODUCTS.map((p) => (
              <Link key={p.name} href={p.href} className="card-hover" style={{ padding: "22px 20px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12, display: "block", textDecoration: "none" }}>
                <div style={{ marginBottom: 14 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#e6edf3", marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</div>
                <div style={{ fontSize: 11, color: PTEAL, fontWeight: 600 }}>Learn more →</div>
              </Link>
            ))}
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

      {/* ── ASSET MANAGEMENT, GOVERNANCE & ALM ── */}
      <section style={{ padding: "88px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge badge-blue" style={{ marginBottom: 12, display: "inline-flex" }}>Enterprise Platform</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>
              Asset management, governance, and ALM — built in
            </h2>
            <p style={{ color: "#8b949e", maxWidth: 560, margin: "0 auto", fontSize: 14, lineHeight: 1.75 }}>
              ACCELQ is not just an execution engine. It&apos;s a quality management platform with centralized assets, full traceability, and deep ALM ecosystem integration.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>

            {/* ── ASSET MANAGEMENT ── */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #30363d", background: "rgba(33,173,195,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(33,173,195,0.15)", border: "1px solid rgba(33,173,195,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#21adc3", margin: 0 }}>Test Asset Management</h3>
                </div>
                <p style={{ fontSize: 12, color: "#8b949e", margin: 0, lineHeight: 1.6 }}>Centralized, versioned, reusable across every test type and team</p>
              </div>
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Shared Object Repository", desc: "UI elements, API schemas, and data objects maintained once and inherited by all tests — web, mobile, and API." },
                  { label: "Reusable Test Components", desc: "Build login flows, checkout sequences, and common actions once. Reuse across modalities without duplication." },
                  { label: "Test Data Management", desc: "Parameterized, data-driven execution with built-in test data versioning and environment-aware data sets." },
                  { label: "Version Control for Assets", desc: "Full history of changes to test assets. Branch, compare, and roll back — without leaving the platform." },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── GOVERNANCE ── */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #30363d", background: "rgba(163,113,247,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(163,113,247,0.15)", border: "1px solid rgba(163,113,247,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#a371f7", margin: 0 }}>Quality Governance</h3>
                </div>
                <p style={{ fontSize: 12, color: "#8b949e", margin: 0, lineHeight: 1.6 }}>Traceability, access control, and compliance from requirement to result</p>
              </div>
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Requirement Traceability", desc: "Every test linked to a business requirement. Full coverage matrix shows what's tested, what's not, and what's at risk." },
                  { label: "Role-Based Access Control", desc: "Granular permissions for QA, developers, BAs, and managers. AI actions respect RBAC — no ungoverned automation." },
                  { label: "Audit Trails & History", desc: "Every test execution, result, and change is logged with timestamps and attribution. Full compliance readiness." },
                  { label: "Release Quality Gates", desc: "Configurable go/no-go criteria per release. Block deployments automatically when quality thresholds aren't met." },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ALM INTEGRATION ── */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #30363d", background: "rgba(88,166,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(88,166,255,0.15)", border: "1px solid rgba(88,166,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="6" r="2" stroke="#58a6ff" strokeWidth="2"/><circle cx="19" cy="6" r="2" stroke="#58a6ff" strokeWidth="2"/><circle cx="12" cy="18" r="2" stroke="#58a6ff" strokeWidth="2"/><path d="M7 6h10M5 8v8a2 2 0 0 0 2 2h3M19 8v8a2 2 0 0 1-2 2h-3" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#58a6ff", margin: 0 }}>ALM Ecosystem</h3>
                </div>
                <p style={{ fontSize: 12, color: "#8b949e", margin: 0, lineHeight: 1.6 }}>Bidirectional sync with the tools your teams already live in</p>
              </div>
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Jira & Azure DevOps Sync", desc: "Stories and epics become test coverage. Defects raised from failures flow back as linked tickets — automatically." },
                  { label: "CI/CD Pipeline Integration", desc: "Jenkins, GitHub Actions, GitLab CI, CircleCI. All test types — web, API, mobile — from one pipeline trigger." },
                  { label: "Defect Lifecycle Management", desc: "Failures link to defect records with full execution context, screenshots, and logs. No manual bridging." },
                  { label: "Release & Sprint Tracking", desc: "Coverage and quality metrics aligned to active sprints and release milestones. Visibility for every stakeholder." },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
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
