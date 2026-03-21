import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAP Test Automation — No-Code Testing for SAP S/4HANA, Fiori & ECC",
  description: "ACCELQ automates SAP testing without ABAP or technical expertise. SAP GUI, Fiori, S/4HANA, BW — all covered with no-code business process automation.",
};

const SAP_MODULES = [
  { name: "SAP Fiori / UI5", desc: "Modern web-based SAP interface testing" },
  { name: "SAP GUI (Classic)", desc: "Legacy transaction-based SAP automation" },
  { name: "SAP S/4HANA", desc: "Next-gen ERP with full migration validation" },
  { name: "SAP ECC", desc: "Legacy ERP system regression coverage" },
  { name: "BW / BI Reports", desc: "Business intelligence report validation" },
  { name: "BAPI / RFC Testing", desc: "Backend function module API testing" },
  { name: "IDoc Validation", desc: "EDI message integrity and format testing" },
  { name: "SAP Business One", desc: "SME ERP platform automation" },
];

const PROCESSES = [
  { name: "Order-to-Cash (O2C)", color: "#58a6ff" },
  { name: "Procure-to-Pay (P2P)", color: "#21adc3" },
  { name: "Record-to-Report (R2R)", color: "#a371f7" },
  { name: "Hire-to-Retire (H2R)", color: "#2ea043" },
  { name: "Plan-to-Produce", color: "#d29922" },
  { name: "Acquire-to-Retire", color: "#f85149" },
];

export default function SapPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(26,106,187,0.12) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0 }} className="grid-pattern" />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ maxWidth: 720 }}>
            <span className="badge" style={{ background: "rgba(26,106,187,0.15)", border: "1px solid rgba(26,106,187,0.4)", color: "#58a6ff", marginBottom: 20, display: "inline-flex", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              SAP Test Automation
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, color: "#e6edf3" }}>
              SAP S/4HANA Migration?
              <br />
              <span className="text-gradient-blue">Test Every Business Process.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#8b949e", lineHeight: 1.7, marginBottom: 36, maxWidth: 580 }}>
              From ECC to S/4HANA, from GUI to Fiori — ACCELQ automates SAP testing without ABAP or technical expertise. Business processes, not technical transactions.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary">Get a SAP Demo</Link>
              <Link href="/platform/live" className="btn-secondary">Explore ACCELQ LIVE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Full SAP coverage, no ABAP required</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
            {SAP_MODULES.map((m) => (
              <div key={m.name} className="card-border card-hover" style={{ padding: 18 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#8b949e" }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S/4HANA MIGRATION */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>The Migration Challenge</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>The S/4HANA Migration Testing Challenge</h2>
              <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                Migrating from SAP ECC to S/4HANA means validating thousands of business processes across the entire organization. Manual testing takes months. Missed regressions mean delayed go-live or worse — production failures.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Thousands of test cases needed across all modules",
                  "Parallel validation on ECC and S/4HANA environments",
                  "Business process experts (not developers) must validate",
                  "Timeline pressure — every delay costs millions",
                ].map((p) => (
                  <div key={p} style={{ display: "flex", gap: 10, fontSize: 13, color: "#8b949e" }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><path d="M2 7.5l4 4 7-7" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>How ACCELQ solves this</h3>
              {[
                ["Automation foundation from day 1", "ACCELQ Discovery Agent analyzes your ECC system and generates a comprehensive test asset library automatically."],
                ["Non-technical authors", "SAP functional consultants and business analysts build and run tests — no ABAP, no technical dependency."],
                ["Parallel system coverage", "Run the same test scenarios on ECC and S/4HANA simultaneously — compare outputs, catch regressions."],
                ["Business process organization", "Tests organized by process (O2C, P2P, R2R) not by transaction codes. Makes sense to the business."],
              ].map(([title, desc]) => (
                <div key={String(title)} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #21262d" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#21adc3", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS PROCESS FOCUS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Test business processes, not transaction codes</h2>
            <p style={{ color: "#8b949e", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ organizes SAP tests around end-to-end business flows — the way business stakeholders think, not the way SAP is configured.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {PROCESSES.map((p) => (
              <div key={p.name} style={{ padding: "10px 20px", background: "#161b22", border: `1px solid ${p.color}40`, borderRadius: 10, fontSize: 14, color: p.color, fontWeight: 600 }}>{p.name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Planning an S/4HANA migration?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            Let us show you how teams are validating thousands of SAP business processes in days, not months.
          </p>
          <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>Get a SAP-Specific Demo</Link>
        </div>
      </section>

    </div>
  );
}
