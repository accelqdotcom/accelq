import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ServiceNow Test Automation — Every Quarterly Release, Zero Surprises",
  description: "ACCELQ automates testing across ITSM, HRSD, CSM, Flow Designer, and custom scoped apps. No-code testing that keeps pace with ServiceNow's quarterly release cadence.",
};

export default function ServiceNowPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(98,216,78,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0 }} className="grid-pattern" />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ maxWidth: 720 }}>
            <span className="badge" style={{ background: "rgba(98,216,78,0.1)", border: "1px solid rgba(98,216,78,0.3)", color: "#62d84e", marginBottom: 20, display: "inline-flex", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ServiceNow Test Automation
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, color: "#e6edf3" }}>
              Every ServiceNow Patch.
              <br />
              <span style={{ background: "linear-gradient(135deg, #62d84e, #21adc3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Zero Surprises.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#8b949e", lineHeight: 1.7, marginBottom: 36, maxWidth: 580 }}>
              ServiceNow&apos;s quarterly release cycle means constant regression risk. ACCELQ automates testing across ITSM, HRSD, CSM, Flow Designer, and custom scoped apps — so every release is safe.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary">Get a ServiceNow Demo</Link>
              <Link href="/platform/live" className="btn-secondary">Explore ACCELQ LIVE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Coverage across the entire ServiceNow platform</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { name: "ITSM", detail: "Incident, Problem, Change Management" },
              { name: "HRSD", detail: "HR Service Delivery workflows" },
              { name: "CSM", detail: "Customer Service Management" },
              { name: "ITOM", detail: "IT Operations Management" },
              { name: "Service Portal", detail: "Portal UI and catalog testing" },
              { name: "Flow Designer", detail: "Automated workflow validation" },
              { name: "IntegrationHub", detail: "Spoke and integration testing" },
              { name: "Custom Scoped Apps", detail: "Your organization's custom builds" },
            ].map((m) => (
              <div key={m.name} className="card-border card-hover" style={{ padding: 18, borderTop: "2px solid #62d84e" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#62d84e", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#8b949e" }}>{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTERLY CHALLENGE */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>4 releases a year. Can your team keep up?</h2>
              <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                ServiceNow ships quarterly releases — Yokohama, Xanadu, Washington, Vancouver. Each one can break custom configurations, Flow Designer workflows, and third-party integrations. Manual regression testing can&apos;t keep up.
              </p>
              {[
                "Custom configurations break silently across releases",
                "Flow Designer workflows need re-validation after every update",
                "IntegrationHub spokes may need recertification",
                "Platform administrators don't have QA bandwidth",
              ].map((p) => (
                <div key={p} style={{ display: "flex", gap: 10, fontSize: 13, color: "#8b949e", marginBottom: 10 }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><path d="M2 7.5l4 4 7-7" stroke="#62d84e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 20 }}>ACCELQ for ServiceNow</h3>
              {[
                ["No-code for platform admins", "ServiceNow admins and process owners build tests — no scripting knowledge required."],
                ["Pre-built LIVE assets", "ACCELQ LIVE ships with ready-to-use test assets for ITSM, HRSD, and CSM modules."],
                ["Release-ready in hours", "Before every quarterly release, run your full regression suite automatically — get go/no-go in hours."],
                ["Change Management integration", "Test results can feed directly into ServiceNow Change Management as quality gates."],
              ].map(([title, desc]) => (
                <div key={String(title)} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #21262d" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#62d84e", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Ready for the next ServiceNow release?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Get automated regression coverage in place before the next quarterly update.</p>
          <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>Book a ServiceNow Demo</Link>
        </div>
      </section>

    </div>
  );
}
