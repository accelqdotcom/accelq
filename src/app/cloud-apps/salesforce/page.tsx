import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";

export const metadata: Metadata = {
  title: "Salesforce Test Automation — No-Code Testing for Every Salesforce Cloud",
  description: "ACCELQ automates testing across Sales Cloud, Service Cloud, CPQ, LWC, and all Salesforce releases. No Apex, no scripts — pure no-code.",
};

const COVERAGE = ["Sales Cloud", "Service Cloud", "Marketing Cloud", "CPQ & Billing", "Lightning Web Components (LWC)", "Visualforce Pages", "Custom Apex Triggers", "Flow Builder Workflows", "Reports & Dashboards", "Communities / Experience Cloud"];

export default function SalesforcePage() {
  return (
    <div style={{ background: "#09090f" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(0,161,224,0.12) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0 }} className="grid-pattern" />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <span className="badge" style={{ background: "rgba(0,161,224,0.12)", border: "1px solid rgba(0,161,224,0.35)", color: "#00a1e0", marginBottom: 20, display: "inline-flex", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Salesforce Test Automation
              </span>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, color: "#eeeef5" }}>
                Test Every Salesforce Release
                <br />
                <span style={{ background: "linear-gradient(135deg, #00a1e0, #21adc3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>With Confidence.</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#8888a8", lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
                From Sales Cloud to Service Cloud to custom LWC components — no-code automation that keeps pace with Salesforce&apos;s 3-releases-a-year cadence. No Apex. No Selenium. No maintenance nightmare.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/demo" className="btn-cta">Get a Salesforce Demo</Link>
                <Link href="/platform/live" className="btn-secondary">Explore ACCELQ LIVE</Link>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/assets/salesforce-rocket.svg"
                alt="Salesforce test automation illustration"
                width={420}
                height={400}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Everything you need to test in Salesforce</h2>
            <p style={{ color: "#8b949e" }}>Native support for every Salesforce cloud, component type, and customization.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {COVERAGE.map((c) => (
              <div key={c} style={{ padding: "8px 18px", background: "#161b22", border: "1px solid rgba(0,161,224,0.3)", borderRadius: 8, fontSize: 13, color: "#e6edf3", fontWeight: 500 }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SF TESTING IS HARD */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 24 }}>Why Salesforce testing is uniquely hard</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { title: "3 major releases per year", desc: "Spring, Summer, Winter — each can break customizations, LWC components, and integrated flows without warning." },
                  { title: "Dynamic UI complexity", desc: "Lightning components and LWC render differently per org config, user profile, and permission set." },
                  { title: "Multi-org management", desc: "Sandbox, UAT, staging, production — each needs validated coverage before any release or migration." },
                  { title: "CPQ calculation sensitivity", desc: "Pricing rules, product bundles, and discount approvals require precise numerical validation that scripts miss." },
                ].map((p) => (
                  <div key={p.title} style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 3, borderRadius: 2, background: "#00a1e0", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 3 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 20 }}>ACCELQ for Salesforce advantages</h3>
              {[
                "Org-aware — ACCELQ understands Salesforce structure natively",
                "Works with sandboxes, UAT, and production orgs",
                "Pre-built LIVE assets for Sales, Service, CPQ modules",
                "No Apex required — Salesforce admins can author tests",
                "AI self-heals when Salesforce releases change the UI",
                "Parallel execution across multiple orgs simultaneously",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#8b949e", marginBottom: 10 }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5l4 4 7-7" stroke="#00a1e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 36 }}>ACCELQ vs. writing Apex tests or Provar</h2>
          <div style={{ maxWidth: 700, margin: "0 auto", background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: "1px solid #30363d" }}>
              <div style={{ padding: "12px 20px" }} />
              {["Apex Tests", "Provar", "ACCELQ"].map((h, i) => (
                <div key={h} style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: i === 2 ? "#21adc3" : "#8b949e", textAlign: "center", borderLeft: "1px solid #30363d" }}>{h}</div>
              ))}
            </div>
            {[
              ["No-code authoring", false, false, true],
              ["Works for admins & BAs", false, false, true],
              ["Self-healing tests", false, false, true],
              ["Covers UI + API + data", false, true, true],
              ["Multi-org parallel execution", false, false, true],
              ["Pre-built LIVE assets", false, false, true],
            ].map(([label, apex, provar, accelq], i) => (
              <div key={String(label)} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderTop: "1px solid #21262d" }}>
                <div style={{ padding: "10px 20px", fontSize: 13, color: "#8b949e" }}>{label}</div>
                {([apex, provar, accelq] as boolean[]).map((has, j) => (
                  <div key={j} style={{ padding: "10px", textAlign: "center", borderLeft: "1px solid #21262d" }}>
                    {has ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 8l4 4 7-7" stroke={j === 2 ? "#00a1e0" : "#2ea043"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                         : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#484f58" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Stop dreading Salesforce releases</h2>
          <p style={{ color: "#8b949e", marginBottom: 28, maxWidth: 440, margin: "0 auto 28px" }}>See how ACCELQ gives your team confidence before every Salesforce release.</p>
          <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>Get a Salesforce-Specific Demo</Link>
        </div>
      </section>

    </div>
  );
}
