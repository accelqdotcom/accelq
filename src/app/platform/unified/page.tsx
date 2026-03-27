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

const COVERAGE = [
  { label: "Web Apps", color: "#58a6ff" },
  { label: "REST & SOAP APIs", color: "#21adc3" },
  { label: "Mobile iOS/Android", color: "#a371f7" },
  { label: "Desktop Apps", color: "#2ea043" },
  { label: "Mainframe / AS400", color: "#8b949e" },
  { label: "SAP / Fiori", color: "#1a6abb" },
  { label: "Salesforce", color: "#00a1e0" },
  { label: "ServiceNow", color: "#62d84e" },
  { label: "Kafka & Middleware", color: "#d29922" },
  { label: "Databases", color: "#a371f7" },
  { label: "ETL Pipelines", color: "#58a6ff" },
  { label: "PDF, Email & Files", color: "#21adc3" },
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
        </div>
      </section>

      {/* ── AUTOPILOT ON UNIFIED ── */}
      <section style={{ padding: "88px 0", background: "#0a0a12", borderTop: "1px solid #1c1c2e", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(120,86,255,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 6, padding: "5px 14px", marginBottom: 16 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#7856ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em", textTransform: "uppercase" }}>Agentic Layer</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#eeeef5", marginBottom: 10 }}>
              Autopilot runs on top of Unified
            </h2>
            <p style={{ color: "#8888a8", maxWidth: 500, margin: "0 auto", fontSize: 14, lineHeight: 1.75 }}>
              AI agents operate across the full quality lifecycle — using Unified as the execution fabric underneath.
            </p>
          </div>

          {/* Lifecycle flow */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 0, maxWidth: 960, margin: "0 auto 48px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 16, overflow: "hidden" }}>
            {[
              { stage: "DISCOVER", desc: "Reads specs, stories & app structure", color: "#7856ff", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#7856ff" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#7856ff" strokeWidth="2" strokeLinecap="round"/></svg> },
              { stage: "GENERATE", desc: "Creates tests from natural language", color: "#00e5d3", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00e5d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { stage: "EXECUTE", desc: "Runs across all 5 Unified engines", color: "#22d3ee", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polygon points="5,3 19,12 5,21" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round"/></svg> },
              { stage: "SELF-HEAL", desc: "Repairs tests when app changes", color: "#a855f7", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4v5h5M20 20v-5h-5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 9A9 9 0 0 0 5.5 5.5M4 15a9 9 0 0 0 14.5 3.5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg> },
              { stage: "INSIGHTS", desc: "Risk, coverage & quality intelligence", color: "#fccd00", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#fccd00" strokeWidth="2" strokeLinecap="round"/></svg> },
            ].map((s, i, arr) => (
              <div key={s.stage} style={{ flex: 1, padding: "24px 20px", borderRight: i < arr.length - 1 ? "1px solid #2a2a3d" : "none", position: "relative" }}>
                {/* Arrow connector */}
                {i < arr.length - 1 && (
                  <div style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M1 1l6 5-6 5" stroke="#3d3d56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 10, fontWeight: 800, color: s.color, letterSpacing: "0.1em", marginBottom: 4 }}>{s.stage}</div>
                <div style={{ fontSize: 11, color: "#55556a", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Unified platform layer below */}
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: "#3d3d56", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
                <div style={{ width: 20, height: 1, background: "#3d3d56" }} />
                Autopilot executes on all Unified engines
                <div style={{ width: 20, height: 1, background: "#3d3d56" }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
              {[
                { label: "Web", color: "#21adc3" },
                { label: "API", color: "#58a6ff" },
                { label: "Mobile", color: "#2ea043" },
                { label: "Desktop", color: "#8b949e" },
                { label: "Test Mgmt", color: "#a371f7" },
              ].map((e) => (
                <div key={e.label} style={{ background: "#13131a", border: `1px solid ${e.color}30`, borderTop: `2px solid ${e.color}`, borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: e.color }}>{e.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE CHIPS ── */}
      <section style={{ padding: "72px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>Full Stack Coverage</span>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 16, lineHeight: 1.2 }}>12 technology domains. One interface.</h2>
              <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.75, marginBottom: 24 }}>
                No tool switching. No context switching. Autopilot agents operate across every domain through the same Unified execution layer.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ textAlign: "center", padding: "12px 20px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#21adc3" }}>12</div>
                  <div style={{ fontSize: 10, color: "#6e7681", marginTop: 2 }}>Tech domains</div>
                </div>
                <div style={{ textAlign: "center", padding: "12px 20px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#7856ff" }}>1</div>
                  <div style={{ fontSize: 10, color: "#6e7681", marginTop: 2 }}>Interface</div>
                </div>
                <div style={{ textAlign: "center", padding: "12px 20px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#00e5d3" }}>0</div>
                  <div style={{ fontSize: 10, color: "#6e7681", marginTop: 2 }}>Code required</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {COVERAGE.map((c) => (
                <div key={c.label} style={{ padding: "7px 14px", background: "#161b22", border: `1px solid ${c.color}40`, borderLeft: `3px solid ${c.color}`, borderRadius: 6, fontSize: 12, fontWeight: 600, color: c.color }}>
                  {c.label}
                </div>
              ))}
            </div>
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
              { val: "12", label: "Tech domains", sub: "From mainframe to Kafka", color: "#58a6ff" },
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
