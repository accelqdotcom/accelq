import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shift-Left Performance Testing — Embed Performance in Functional Tests | ACCELQ",
  description: "Embed performance baseline assertions directly in functional test cases. Catch regressions in CI/CD before they become production incidents.",
};

const FEATURES = [
  { title: "Inline Performance Assertions", color: "#d29922", desc: "Assert on response times, throughput, and latency thresholds inside your functional test steps. Functional and performance validation in one test run." },
  { title: "Baseline Tracking", color: "#21adc3", desc: "Automatically track performance baselines per build. Flag regressions with configurable thresholds — before they reach staging." },
  { title: "CI/CD Gate Integration", color: "#58a6ff", desc: "Fail builds that violate performance SLAs defined by your team. Block the merge, not just alert after deployment." },
  { title: "API Performance Testing", color: "#a371f7", desc: "Measure response times across all API endpoints in functional test flows. Catch slow queries, N+1 issues, and timeout risks early." },
  { title: "Load Pattern Simulation", color: "#2ea043", desc: "Embed lightweight load patterns in test suites to surface contention issues and race conditions before full load test phases." },
  { title: "Trend Reporting", color: "#d29922", desc: "Track performance trends by test, by module, and by build. Identify which feature introduced the regression before it reaches QA." },
];

export default function PerformancePage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Shift-Left Performance</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Catch Performance Issues
            <br /><span className="text-gradient-blue">Before They Ship.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Stop treating performance as a phase. Embed performance baseline assertions directly in functional tests. Fail fast in CI/CD instead of discovering slow APIs in production.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/enterprise" className="btn-secondary">Enterprise Overview</Link>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 800, margin: "0 auto" }}>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#6e7681", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>Traditional Approach</div>
              {[
                "Performance testing is a separate phase",
                "Run after functional QA completes",
                "Bottleneck is found late in the cycle",
                "Separate tool, separate team",
                "Results don't tie back to code changes",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "#8b949e", marginBottom: 8 }}>
                  <span style={{ color: "#f85149", flexShrink: 0 }}>✗</span> {item}
                </div>
              ))}
            </div>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid rgba(210,153,34,0.4)", borderRadius: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>ACCELQ Shift-Left</div>
              {[
                "Performance asserted in every functional test",
                "Runs on every commit in CI/CD",
                "Regression caught at code-level",
                "Same platform as all other testing",
                "Trend tied to specific build + feature",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "#8b949e", marginBottom: 8 }}>
                  <span style={{ color: "#2ea043", flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Shift-left performance capabilities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${f.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Stop finding performance issues in production</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See how ACCELQ embeds performance validation in your CI/CD pipeline.</p>
          <Link href="/demo" className="btn-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
}
