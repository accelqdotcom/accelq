import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mainframe Test Automation — AS/400, CICS, TN3270 | ACCELQ",
  description: "Automate testing for AS/400, CICS, TN3270, and batch job validation without scripting. ACCELQ brings modern no-code automation to legacy mainframe systems.",
};

const CAPABILITIES = [
  { title: "TN3270 Terminal Automation", color: "#8b949e", desc: "Navigate green-screen interfaces with full no-code interaction recording. No HLLAPI scripts, no Selenium customization." },
  { title: "AS/400 / iSeries", color: "#21adc3", desc: "IBM AS/400 and iSeries application testing — including RPG applications and interactive sessions." },
  { title: "CICS Transaction Testing", color: "#58a6ff", desc: "End-to-end CICS transaction validation, including program calls, file I/O assertions, and transaction rollback scenarios." },
  { title: "Batch Job Validation", color: "#a371f7", desc: "Trigger JCL batch jobs and validate outputs, spool files, and downstream data changes — all from the same test suite." },
  { title: "MQ Series Integration", color: "#2ea043", desc: "Read and write to MQ queues as part of mainframe integration tests. Validate message content, routing, and error handling." },
  { title: "Data Validation", color: "#d29922", desc: "Compare VSAM files, DB2 tables, and flat-file outputs against expected results. Source-to-target validation built in." },
];

export default function MainframePage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Mainframe Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Legacy Systems.
            <br /><span className="text-gradient-blue">Modern Automation.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            The mainframe isn&apos;t going away — and neither is the risk it represents. ACCELQ brings no-code test automation to AS/400, CICS, TN3270, and batch workloads that other tools ignore.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request Enterprise Demo</Link>
            <Link href="/enterprise" className="btn-secondary">Enterprise Overview</Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16, lineHeight: 1.3 }}>
                The mainframe risk no one talks about
              </h2>
              <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                Every mainframe modernization project — cloud lift, core banking migration, ERP upgrade — requires regression testing the mainframe systems before cutover. Most teams do this manually, with spreadsheets and tribal knowledge.
              </p>
              <p style={{ color: "#8b949e", lineHeight: 1.7 }}>
                That means migrations take 3–4x longer than planned, and risk is never truly quantified. ACCELQ changes that.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { stat: "70%", label: "of mainframe incidents are regression failures from change events" },
                { stat: "3x", label: "longer migration timelines when testing is manual" },
                { stat: "60%", label: "of mainframe teams still rely on spreadsheets for test tracking" },
              ].map((s) => (
                <div key={s.stat} style={{ display: "flex", gap: 16, padding: 20, background: "#161b22", border: "1px solid #30363d", borderRadius: 10, alignItems: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#8b949e", flexShrink: 0, minWidth: 60 }}>{s.stat}</div>
                  <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Full mainframe coverage</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${c.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: c.color, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Modernize without the risk</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Talk to our enterprise team about your mainframe automation challenge.</p>
          <Link href="/demo" className="btn-primary">Request Enterprise Demo</Link>
        </div>
      </section>
    </div>
  );
}
