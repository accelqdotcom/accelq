import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ETL Test Automation — Data Pipeline & Warehouse Testing | ACCELQ",
  description: "Automate source-to-target validation, transformation rule testing, and data quality checks across any ETL pipeline or data warehouse.",
};

const CAPABILITIES = [
  { title: "Source-to-Target Validation", color: "#21adc3", desc: "Compare source and target datasets at any granularity — row counts, column values, aggregations, or full reconciliation. Catch data loss before it reaches production." },
  { title: "Transformation Rule Testing", color: "#58a6ff", desc: "Validate business rules applied during ETL — calculations, lookups, derivations, and conditional mappings. Test the logic, not just the data." },
  { title: "Data Quality Checks", color: "#a371f7", desc: "Null checks, referential integrity, format validation, range checks, and custom business rules — embedded in every pipeline run." },
  { title: "Multi-DB Support", color: "#2ea043", desc: "Oracle, SQL Server, PostgreSQL, MySQL, Snowflake, Redshift, BigQuery, Databricks — test data flows across any combination of platforms." },
  { title: "Incremental Load Testing", color: "#d29922", desc: "Validate delta loads, CDC patterns, and incremental refresh logic. Ensure new records are captured and changed records are correctly updated." },
  { title: "Pipeline Execution Validation", color: "#21adc3", desc: "Trigger ETL jobs and validate execution metadata — run time, record counts, error logs, and audit trail records — automatically." },
];

export default function ETLPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>ETL & Data Pipeline Testing</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Trust Your Data Pipeline
            <br /><span className="text-gradient-teal">at Scale.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Source-to-target validation, transformation rule testing, and data quality checks — automated across every pipeline run. No manual spot-checking, no undiscovered data defects.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request Enterprise Demo</Link>
            <Link href="/enterprise" className="btn-secondary">Enterprise Overview</Link>
          </div>
        </div>
      </section>

      {/* DATABASE COVERAGE */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 13, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Database & warehouse support</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Oracle", "SQL Server", "PostgreSQL", "MySQL", "Snowflake", "Redshift", "BigQuery", "Databricks", "Teradata", "SAP HANA"].map((db) => (
              <div key={db} style={{ padding: "8px 18px", background: "#161b22", border: "1px solid rgba(33,173,195,0.3)", borderRadius: 8, fontSize: 13, color: "#21adc3", fontWeight: 500 }}>{db}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Complete ETL test coverage</h2>
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

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 48 }}>How ACCELQ ETL testing works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Connect sources", desc: "Connect ACCELQ to your source and target systems — databases, flat files, APIs, cloud warehouses.", color: "#21adc3" },
              { step: "02", title: "Define mappings", desc: "Import source-to-target mapping documents or define rules in ACCELQ's visual mapping builder.", color: "#58a6ff" },
              { step: "03", title: "Generate tests", desc: "Autopilot generates test cases from your mappings — row counts, value comparisons, transformation validations.", color: "#a371f7" },
              { step: "04", title: "Run on every load", desc: "Execute against every ETL run. Failures alert in real-time with full row-level diff reporting.", color: "#2ea043" },
            ].map((step) => (
              <div key={step.step} style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: step.color, marginBottom: 12 }}>STEP {step.step}</div>
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
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Eliminate data defects in your pipelines</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Talk to our data testing team about your ETL and warehouse validation needs.</p>
          <Link href="/demo" className="btn-primary">Request Enterprise Demo</Link>
        </div>
      </section>
    </div>
  );
}
