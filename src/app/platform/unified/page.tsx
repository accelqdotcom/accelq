import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Unified — Agentic Quality Automation Across Every Layer",
  description: "Web, API, mobile, desktop, mainframe, and enterprise systems — all automated by agentic AI on one no-code platform. Zero code. Zero fragmentation.",
};

const PTEAL = "#0d9e80";

const PRODUCTS = [
  {
    name: "Automate Web", href: "/products/web",
    desc: "Codeless AI automation across web, cloud ERP apps and more",
    icon: <svg width="32" height="28" viewBox="0 0 32 28" fill="none"><path d="M6 2L26 2L22 26L2 26Z" fill={PTEAL} opacity="0.85"/><path d="M10 8L20 8L18 20L8 20Z" fill="#fff" opacity="0.3"/></svg>,
  },
  {
    name: "Automate API", href: "/products/api",
    desc: "REST, SOAP, GraphQL, Kafka, Microservices — fully codeless",
    icon: <svg width="30" height="28" viewBox="0 0 30 28" fill="none"><path d="M15 1L29 27H1Z" fill={PTEAL} opacity="0.85"/><path d="M15 9L22 23H8Z" fill="#fff" opacity="0.25"/></svg>,
  },
  {
    name: "Automate Mobile", href: "/products/mobile",
    desc: "Cloud-native iOS & Android on real devices, zero setup",
    icon: <svg width="26" height="30" viewBox="0 0 26 30" fill="none"><rect x="3" y="1" width="20" height="28" rx="3" fill={PTEAL} opacity="0.85"/><rect x="7" y="5" width="12" height="16" rx="1" fill="#fff" opacity="0.3"/><circle cx="13" cy="25" r="2" fill="#fff" opacity="0.3"/></svg>,
  },
  {
    name: "Automate Desktop", href: "/products/web",
    desc: "Native Windows & legacy desktop, no-code design-first",
    icon: <svg width="30" height="28" viewBox="0 0 30 28" fill="none"><rect x="1" y="1" width="28" height="20" rx="2" fill={PTEAL} opacity="0.85"/><rect x="4" y="4" width="22" height="14" rx="1" fill="#fff" opacity="0.25"/><rect x="11" y="23" width="8" height="2" rx="1" fill={PTEAL} opacity="0.6"/><rect x="8" y="26" width="14" height="2" rx="1" fill={PTEAL} opacity="0.4"/></svg>,
  },
  {
    name: "Test Management", href: "/products/manual",
    desc: "Planning, execution, traceability & collaboration unified",
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="1" y="1" width="26" height="26" rx="3" fill={PTEAL} opacity="0.85"/><rect x="5" y="5" width="18" height="18" rx="1" fill="#fff" opacity="0.25"/><line x1="9" y1="11" x2="19" y2="11" stroke="#fff" strokeWidth="1.5" opacity="0.5"/><line x1="9" y1="15" x2="16" y2="15" stroke="#fff" strokeWidth="1.5" opacity="0.5"/><line x1="9" y1="19" x2="14" y2="19" stroke="#fff" strokeWidth="1.5" opacity="0.4"/></svg>,
  },
];

const TECH_DOMAINS = [
  {
    label: "Web Applications",
    color: "#58a6ff",
    tech: "Chrome · Firefox · Safari · Edge",
    caps: ["Cross-browser parallel execution", "SPA, dynamic & shadow DOM support", "Visual regression & pixel diffing"],
    agentic: "Autopilot maps UI flows directly from design specs or Jira stories",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#58a6ff" strokeWidth="1.8"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#58a6ff" strokeWidth="1.8"/></svg>,
  },
  {
    label: "REST & GraphQL APIs",
    color: "#21adc3",
    tech: "REST · GraphQL · OpenAPI 3.0 · Swagger",
    caps: ["Codeless request chaining & assertions", "Contract & schema validation", "OAuth, JWT & API key auth flows"],
    agentic: "Autopilot generates full test suites from OpenAPI or GraphQL schemas",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h7" stroke="#21adc3" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "SOAP & Web Services",
    color: "#22d3ee",
    tech: "SOAP · WSDL · XML · WS-Security",
    caps: ["WSDL-driven test generation", "XML payload & namespace validation", "Enterprise SOA & ESB coverage"],
    agentic: "Autopilot parses WSDL definitions and drafts scenario coverage",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#22d3ee" strokeWidth="1.8"/><path d="M8 9l4 3-4 3M13 15h3" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Mobile — iOS & Android",
    color: "#a371f7",
    tech: "iOS · Android · React Native · Flutter",
    caps: ["Real device cloud, no emulator limits", "Native, hybrid & cross-platform apps", "Gesture, biometric & deep-link testing"],
    agentic: "Autopilot self-heals tests when screens or navigation flows change",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#a371f7" strokeWidth="1.8"/><circle cx="12" cy="18" r="1" fill="#a371f7"/></svg>,
  },
  {
    label: "Desktop Applications",
    color: "#2ea043",
    tech: "Windows · .NET · Java Swing · Electron",
    caps: ["Native control & widget recognition", "Legacy thick client, no instrumentation", "Win32, WPF & modern desktop apps"],
    agentic: "Autopilot detects layout shifts and repairs locators automatically",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#2ea043" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="#2ea043" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Mainframe & AS/400",
    color: "#8b949e",
    tech: "z/OS · AS/400 · CICS · IMS · COBOL",
    caps: ["Green screen & terminal automation", "3270/5250 emulation, no agent needed", "Host transaction & batch job validation"],
    agentic: "Autopilot learns screen maps and generates end-to-end host flows",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#8b949e" strokeWidth="1.8"/><path d="M6 9h4M6 12h6M6 15h3" stroke="#8b949e" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Business & Enterprise Apps",
    color: "#1a6abb",
    tech: "SAP · Salesforce · ServiceNow · Oracle",
    caps: ["SAP Fiori + SAP GUI, no add-ons", "Salesforce Lightning & Flow testing", "ServiceNow ITSM workflow validation"],
    agentic: "Autopilot understands business process flows and tests end-to-end scenarios",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#1a6abb" strokeWidth="1.8"/><path d="M9 22V12h6v10" stroke="#1a6abb" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Event Streaming & Middleware",
    color: "#d29922",
    tech: "Kafka · IBM MQ · RabbitMQ · AWS SNS/SQS",
    caps: ["Produce, consume & assert message flows", "Schema registry & Avro validation", "End-to-end async event chain testing"],
    agentic: "Autopilot traces event propagation across producers and consumers",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" stroke="#d29922" strokeWidth="1.8"/><circle cx="19" cy="6" r="2" stroke="#d29922" strokeWidth="1.8"/><circle cx="19" cy="18" r="2" stroke="#d29922" strokeWidth="1.8"/><path d="M7 11.5l10-4M7 12.5l10 4" stroke="#d29922" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Databases",
    color: "#f78166",
    tech: "SQL Server · Oracle · PostgreSQL · MongoDB",
    caps: ["Query result & row-level validation", "Pre/post test data state management", "Cross-DB integrity & referential checks"],
    agentic: "Autopilot verifies data side-effects after every test step automatically",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="#f78166" strokeWidth="1.8"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#f78166" strokeWidth="1.8"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#f78166" strokeWidth="1.8"/></svg>,
  },
  {
    label: "ETL & Data Pipelines",
    color: "#00e5d3",
    tech: "Informatica · Talend · dbt · Apache Spark",
    caps: ["Source-to-target transformation validation", "Pipeline regression & data drift detection", "Reconciliation across staging & production"],
    agentic: "Autopilot monitors pipeline outputs and flags anomalies in real time",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M5 6h14M5 18h14" stroke="#00e5d3" strokeWidth="1.8" strokeLinecap="round"/><circle cx="19" cy="6" r="2" fill="#00e5d3"/><circle cx="5" cy="12" r="2" fill="#00e5d3"/><circle cx="19" cy="18" r="2" fill="#00e5d3"/></svg>,
  },
  {
    label: "Documents & File Systems",
    color: "#fccd00",
    tech: "PDF · Excel · CSV · Email · SFTP",
    caps: ["Content extraction & field-level validation", "Format compliance & structure checks", "Cross-system file delivery tracking"],
    agentic: "Autopilot validates document outputs as part of end-to-end test flows",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#fccd00" strokeWidth="1.8"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#fccd00" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Service Virtualization",
    color: "#e879f9",
    tech: "Virtual Services · API Mocking · Stubs · Simulators",
    caps: ["Mock unavailable services & third-party APIs", "Simulate edge cases, errors & latency", "Shift-left testing without environment dependencies"],
    agentic: "Autopilot auto-creates virtual services from recorded traffic or specs",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="8" height="10" rx="2" stroke="#e879f9" strokeWidth="1.8"/><rect x="14" y="7" width="8" height="10" rx="2" stroke="#e879f9" strokeWidth="1.8"/><path d="M10 12h4" stroke="#e879f9" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 1.5"/></svg>,
  },
];

const INTEGRATIONS = ["Jira", "GitHub", "GitLab", "Azure DevOps", "Jenkins", "CircleCI", "Bamboo", "Slack", "Teams", "Selenium Grid", "BrowserStack", "Sauce Labs"];

export default function UnifiedPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div style={{ position: "absolute", top: -80, left: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(13,158,128,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,86,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(13,158,128,0.1)", border: "1px solid rgba(13,158,128,0.3)", borderRadius: 20, padding: "5px 14px 5px 8px", marginBottom: 24 }}>
            <span style={{ background: "#7856ff", borderRadius: 12, padding: "3px 10px", fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.07em" }}>AUTOPILOT</span>
            <span style={{ fontSize: 12, color: "#8b949e" }}>Agentic AI · Unified Platform</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 auto 24px", maxWidth: 860 }}>
            Every Test Type. Every Layer.
            <br />
            <span className="text-gradient-teal">Driven by Agentic AI.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Unified is the execution engine. Autopilot is the AI brain. Together they autonomously discover, generate, execute, and self-heal across every modality — with zero code.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Get a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>Explore Autopilot →</Link>
          </div>
        </div>
      </section>

      {/* ── 5 ENGINES ── */}
      <section style={{ padding: "72px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>Five specialized engines. One unified platform.</h2>
            <p style={{ fontSize: 13, color: "#6e7681", maxWidth: 460, margin: "0 auto" }}>Every engine shares the same asset library, AI layer, and quality dashboard.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {PRODUCTS.map((p) => (
              <Link key={p.name} href={p.href} className="card-hover" style={{ padding: "20px 16px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12, display: "block", textDecoration: "none" }}>
                <div style={{ marginBottom: 12 }}>{p.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#e6edf3", marginBottom: 5 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "#6e7681", lineHeight: 1.55, marginBottom: 10 }}>{p.desc}</div>
                <div style={{ fontSize: 11, color: PTEAL, fontWeight: 600 }}>Learn more →</div>
              </Link>
            ))}
          </div>

          {/* Autopilot spanning bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginTop: 0 }}>
            {[0,1,2,3,4].map((i) => (
              <div key={i} style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: 1, height: 16, background: "linear-gradient(to bottom, #30363d, rgba(120,86,255,0.4))" }} />
              </div>
            ))}
          </div>
          <Link href="/platform/autopilot" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", background: "rgba(120,86,255,0.07)", border: "1px solid rgba(120,86,255,0.22)", borderRadius: 12, textDecoration: "none", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(120,86,255,0.12)", border: "1px solid rgba(120,86,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#7856ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#c9d1d9", marginBottom: 2 }}>Autopilot — Agentic AI Layer</div>
                <div style={{ fontSize: 12, color: "#6e7681" }}>Discover · Generate · Execute · Self-Heal · Insights — runs autonomously across all five engines</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#7856ff", fontWeight: 600, whiteSpace: "nowrap" }}>Explore Autopilot →</div>
          </Link>
        </div>
      </section>

      {/* ── TECH DOMAIN TILES ── */}
      <section style={{ padding: "88px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>Full-Stack Coverage</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12, lineHeight: 1.2 }}>Every technology domain. One platform.</h2>
            <p style={{ fontSize: 14, color: "#8b949e", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
              No stitching tools together. Autopilot agents operate natively across every stack through the same Unified execution layer.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {TECH_DOMAINS.map((d) => (
              <div key={d.label} style={{ background: "#161b22", border: "1px solid #30363d", borderTop: `2px solid ${d.color}`, borderRadius: 12, padding: "22px 20px", display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${d.color}15`, border: `1px solid ${d.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {d.icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#e6edf3" }}>{d.label}</div>
                </div>
                {/* Tech tags */}
                <div style={{ fontSize: 11, color: "#6e7681", marginBottom: 16, paddingLeft: 42 }}>{d.tech}</div>
                {/* Capabilities */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18, flex: 1 }}>
                  {d.caps.map((cap) => (
                    <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ marginTop: 1, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" stroke={d.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontSize: 12, color: "#c9d1d9", lineHeight: 1.5 }}>{cap}</span>
                    </div>
                  ))}
                </div>
                {/* Agentic hint */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 7, paddingTop: 14, borderTop: "1px solid #21262d" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginTop: 1, flexShrink: 0 }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#7856ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: 11, color: "#7856ff", lineHeight: 1.5 }}>{d.agentic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSET, GOVERNANCE & ALM ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-blue" style={{ marginBottom: 12, display: "inline-flex" }}>Enterprise Platform</span>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 800, color: "#e6edf3" }}>Asset management, governance & ALM — built in</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>

            {/* Asset Management */}
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #21262d" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(33,173,195,0.12)", border: "1px solid rgba(33,173,195,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#21adc3" }}>Test Asset Management</div>
                  <div style={{ fontSize: 11, color: "#6e7681" }}>Centralized · Versioned · Reusable</div>
                </div>
              </div>
              {[
                ["Shared Object Repository", "#21adc3"],
                ["Reusable Test Components", "#21adc3"],
                ["Test Data Management", "#21adc3"],
                ["Version Control for Assets", "#21adc3"],
              ].map(([label, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={color as string} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: 13, color: "#e6edf3", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Governance */}
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #21262d" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(163,113,247,0.12)", border: "1px solid rgba(163,113,247,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#a371f7" }}>Quality Governance</div>
                  <div style={{ fontSize: 11, color: "#6e7681" }}>Traceability · RBAC · Compliance</div>
                </div>
              </div>
              {[
                ["Requirement Traceability", "#a371f7"],
                ["Role-Based Access Control", "#a371f7"],
                ["Audit Trails & History", "#a371f7"],
                ["Release Quality Gates", "#a371f7"],
              ].map(([label, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={color as string} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: 13, color: "#e6edf3", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* ALM */}
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #21262d" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(88,166,255,0.12)", border: "1px solid rgba(88,166,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="6" r="2" stroke="#58a6ff" strokeWidth="2"/><circle cx="19" cy="6" r="2" stroke="#58a6ff" strokeWidth="2"/><circle cx="12" cy="18" r="2" stroke="#58a6ff" strokeWidth="2"/><path d="M7 6h10M5 8v8a2 2 0 0 0 2 2h3M19 8v8a2 2 0 0 1-2 2h-3" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#58a6ff" }}>ALM Ecosystem</div>
                  <div style={{ fontSize: 11, color: "#6e7681" }}>Bidirectional sync · CI/CD · Defects</div>
                </div>
              </div>
              {[
                ["Jira & Azure DevOps Sync", "#58a6ff"],
                ["CI/CD Pipeline Integration", "#58a6ff"],
                ["Defect Lifecycle Management", "#58a6ff"],
                ["Release & Sprint Tracking", "#58a6ff"],
              ].map(([label, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={color as string} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: 13, color: "#e6edf3", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── PLATFORM STATS ── */}
      <section style={{ padding: "64px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { val: "5", label: "Test engines", sub: "Web · API · Mobile · Desktop · Manual", color: PTEAL },
              { val: "5+", label: "Tech categories", sub: "Web · APIs · Mobile · Enterprise · Data", color: "#58a6ff" },
              { val: "1", label: "CI/CD connection", sub: "All test types, one pipeline trigger", color: "#a371f7" },
              { val: "0", label: "Code required", sub: "No-code from design to execution", color: "#00e5d3" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "28px 32px", background: "#161b22", borderRadius: i === 0 ? "12px 0 0 12px" : i === 3 ? "0 12px 12px 0" : 0, borderLeft: i > 0 ? "none" : "1px solid #30363d", borderRight: "1px solid #30363d", borderTop: "1px solid #30363d", borderBottom: "1px solid #30363d", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", margin: "8px 0 4px" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#6e7681" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section style={{ padding: "56px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 11, color: "#6e7681", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>Integrates with your entire SDLC</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {INTEGRATIONS.map((name) => (
              <div key={name} style={{ padding: "6px 14px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, fontSize: 12, color: "#8b949e", fontWeight: 500 }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "88px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(13,158,128,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 6, padding: "5px 14px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em" }}>AUTOPILOT + UNIFIED</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>The complete agentic quality platform</h2>
          <p style={{ color: "#8b949e", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.7 }}>See how Unified and Autopilot work together across your exact stack in a 30-minute demo.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Request a Demo</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>Explore Autopilot →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
