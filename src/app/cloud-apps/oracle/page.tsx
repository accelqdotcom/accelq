import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oracle Test Automation — Oracle Fusion, EBS & Cloud Apps | ACCELQ",
  description: "Automated testing for Oracle Fusion Cloud, E-Business Suite, and OBIEE. Pre-built test assets for Oracle financials, supply chain, and HCM modules.",
};

const MODULES = [
  { name: "Oracle Fusion Cloud", color: "#f85149", desc: "ERP Cloud, SCM Cloud, HCM Cloud, CX Cloud" },
  { name: "Oracle EBS", color: "#d29922", desc: "E-Business Suite 12.x, all modules" },
  { name: "Oracle Financials", color: "#21adc3", desc: "GL, AP, AR, FA, Cash Management" },
  { name: "Oracle SCM", color: "#2ea043", desc: "Order Management, Inventory, Procurement" },
  { name: "Oracle HCM", color: "#58a6ff", desc: "Core HR, Payroll, Talent, Time & Labor" },
  { name: "OBIEE / OAC", color: "#a371f7", desc: "Oracle Analytics, BI Publisher, OTBI" },
];

const CHALLENGES = [
  {
    title: "Quarterly Update Validation",
    desc: "Oracle Cloud ships quarterly updates that touch every module. ACCELQ&apos;s pre-built, maintained test assets validate critical workflows after every update — in hours, not weeks.",
    color: "#21adc3",
  },
  {
    title: "EBS to Cloud Migration",
    desc: "Migrating from EBS to Fusion? ACCELQ maps business processes across both platforms so you can validate equivalence and sign off on migration with confidence.",
    color: "#58a6ff",
  },
  {
    title: "Custom Extension Testing",
    desc: "Oracle Fusion customizations, PaaS extensions, and integrations are all covered. Test standard Oracle UI alongside your custom configurations in one suite.",
    color: "#a371f7",
  },
];

export default function OraclePage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Oracle Test Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Oracle Quarterly Updates.
            <br /><span className="text-gradient-blue">No More Surprises.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Oracle Fusion Cloud, EBS, and Analytics — ACCELQ provides pre-built test assets for your Oracle estate so every update, upgrade, and customization gets validated before it reaches your users.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/live" className="btn-secondary">ACCELQ LIVE</Link>
          </div>
        </div>
      </section>

      {/* MODULE COVERAGE */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Oracle platform coverage</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {MODULES.map((m) => (
              <div key={m.name} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${m.color}` }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: m.color, marginBottom: 6 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#8b949e" }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Oracle testing challenges we solve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {CHALLENGES.map((c) => (
              <div key={c.title} className="card-hover" style={{ padding: 28, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderLeft: `4px solid ${c.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: c.color, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCELQ LIVE */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>ACCELQ LIVE</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16, lineHeight: 1.3 }}>
                Pre-built Oracle test assets. Ready to run.
              </h2>
              <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                ACCELQ LIVE ships with hundreds of pre-built test cases for Oracle Fusion and EBS — covering the business processes that matter most. Each asset is actively maintained by ACCELQ&apos;s Oracle practice team.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "300+ pre-built Oracle Fusion test cases",
                  "Maintained through every quarterly update",
                  "Covers Financials, SCM, HCM, and CX",
                  "Import and customize for your configuration",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#8b949e" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" stroke="#21adc3" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#21adc3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/platform/live" className="btn-primary">Learn about ACCELQ LIVE</Link>
              </div>
            </div>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 16 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: "#6e7681", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>ACCELQ LIVE — Oracle Fusion</div>
                <div style={{ fontSize: 14, color: "#e6edf3", marginBottom: 4 }}>Ready-to-run test suites</div>
              </div>
              {[
                { module: "Procure-to-Pay", tests: 48, status: "maintained" },
                { module: "Order-to-Cash", tests: 62, status: "maintained" },
                { module: "Record-to-Report", tests: 35, status: "maintained" },
                { module: "Hire-to-Retire", tests: 41, status: "maintained" },
                { module: "Core Financials", tests: 88, status: "maintained" },
              ].map((m) => (
                <div key={m.module} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #21262d" }}>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{m.module}</div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#e6edf3" }}>{m.tests} tests</span>
                    <span style={{ fontSize: 11, color: "#2ea043", background: "rgba(46,160,67,0.15)", padding: "2px 8px", borderRadius: 4 }}>✓ current</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Validate every Oracle update with confidence</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Talk to our Oracle practice team about your specific modules and customizations.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request a Demo</Link>
            <Link href="/cloud-apps" className="btn-secondary">All Cloud Apps</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
