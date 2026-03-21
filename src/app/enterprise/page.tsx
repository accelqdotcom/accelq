import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Automation — No Challenge Too Complex for No-Code",
  description: "ACCELQ handles enterprise complexity that leaves other tools behind — mainframes, ETL, databases, middleware, API virtualization, and more.",
};

const CAPABILITIES = [
  { title: "Mainframe Automation", href: "/enterprise/mainframe", color: "#8b949e", desc: "AS/400, CICS, TN3270, batch job validation. Legacy systems, modern automation." },
  { title: "ETL Test Automation", href: "/enterprise/etl", color: "#21adc3", desc: "Source-to-target mapping, transform rules, data quality validation across any database." },
  { title: "Database Testing", href: "#", color: "#58a6ff", desc: "SQL/NoSQL inline validation, referential integrity, and data-driven test scenarios." },
  { title: "Middleware Testing", href: "#", color: "#a371f7", desc: "Kafka, RabbitMQ, MQ Series, JMS — event-driven integration testing." },
  { title: "API Virtualization", href: "#", color: "#2ea043", desc: "Stub downstream services in test environments. Test without full system dependencies." },
  { title: "Shift-Left Performance", href: "/enterprise/performance", color: "#d29922", desc: "Embed performance baseline assertions in functional tests. No separate load testing phase." },
];

export default function EnterprisePage() {
  return (
    <div style={{ background: "#0d1117" }}>
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Enterprise-Grade Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 760, margin: "0 auto 20px" }}>
            No Challenge Too Complex
            <br /><span className="text-gradient-blue">for No-Code.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From mainframes to middleware, ETL pipelines to email automation — ACCELQ handles the enterprise complexity that leaves other tools behind.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/unified" className="btn-secondary">Platform Overview</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${c.color}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</p>
                {c.href !== "#" && (
                  <Link href={c.href} style={{ fontSize: 13, color: c.color, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    Learn more <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Why enterprise teams choose ACCELQ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { color: "#21adc3", title: "Governance at Scale", desc: "RBAC, audit trails, SOC 2 Type II compliance, SSO/SAML. Built for security-first enterprise requirements." },
              { color: "#58a6ff", title: "Integration Depth", desc: "Native integration with SAP, Salesforce, AS400, Kafka, Jira, ADO, GitHub, Jenkins — not superficial API hooks." },
              { color: "#a371f7", title: "Business Context", desc: "Tests organized by business process, not technical transactions. Understandable and maintainable by the whole organization." },
            ].map((p) => (
              <div key={p.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderLeft: `4px solid ${p.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: p.color, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>See the full enterprise platform</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>30-minute demo. Your enterprise use case. No slides.</p>
          <Link href="/demo" className="btn-primary">Request Enterprise Demo</Link>
        </div>
      </section>
    </div>
  );
}
