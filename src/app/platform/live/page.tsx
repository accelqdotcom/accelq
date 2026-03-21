import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ LIVE — Pre-Built Test Assets for SAP, Salesforce & More",
  description: "ACCELQ LIVE gives you production-ready test assets for SAP, Salesforce, ServiceNow, and Oracle. Deploy coverage for business-critical systems in days, not months.",
};

const PLATFORMS = [
  {
    name: "Salesforce",
    color: "#00a1e0",
    href: "/cloud-apps/salesforce",
    desc: "All Salesforce clouds — Sales, Service, CPQ, Marketing, LWC.",
    modules: ["Sales Cloud", "Service Cloud", "CPQ & Billing", "Lightning & LWC", "Reports & Dashboards"],
  },
  {
    name: "SAP",
    color: "#1a6abb",
    href: "/cloud-apps/sap",
    desc: "SAP GUI, Fiori, S/4HANA, BW and business process coverage.",
    modules: ["SAP Fiori", "S/4HANA", "ECC / SAP GUI", "BW/BI Reports", "BAPI/RFC Testing"],
  },
  {
    name: "ServiceNow",
    color: "#62d84e",
    href: "/cloud-apps/servicenow",
    desc: "ITSM, HRSD, CSM, Flow Designer and scoped app testing.",
    modules: ["ITSM", "HRSD", "CSM", "Flow Designer", "IntegrationHub"],
  },
  {
    name: "Oracle",
    color: "#f85149",
    href: "/cloud-apps/oracle",
    desc: "Oracle Fusion, EBS, OBIEE and business process validation.",
    modules: ["Oracle Fusion", "Oracle EBS", "OBIEE Reports", "Procurement", "Finance Modules"],
  },
];

export default function LivePage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Zero Setup · Instant Coverage</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 800, margin: "0 auto 20px" }}>
            Production-Ready Test Assets.
            <br />
            <span className="text-gradient-blue">Out of the Box.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            ACCELQ LIVE gives your team pre-built, actively maintained test assets for SAP, Salesforce, ServiceNow, and Oracle — so you&apos;re testing in days, not months.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 24px" }}>See LIVE in Action</Link>
            <Link href="/cloud-apps" className="btn-secondary" style={{ fontSize: 15, padding: "12px 24px" }}>Explore Cloud Apps</Link>
          </div>
        </div>
      </section>

      {/* THE UPGRADE PROBLEM */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-purple" style={{ marginBottom: 12, display: "inline-flex" }}>The Problem</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 12 }}>Every upgrade is a risk you don&apos;t have to take blind.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "⏱", title: "Manual validation takes weeks", desc: "Business analysts spend weeks manually validating business processes after every SAP patch or Salesforce release." },
              { icon: "🔍", title: "Regression risk is invisible", desc: "Without automated coverage, regression bugs aren't found until they hit production and impact real business operations." },
              { icon: "🔗", title: "Business can't own quality", desc: "Without no-code tools, business teams depend entirely on IT and engineering to build and run tests." },
            ].map((p) => (
              <div key={p.title} className="card-border" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CARDS */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-teal" style={{ marginBottom: 12, display: "inline-flex" }}>ACCELQ LIVE Library</span>
            <h2 className="section-title" style={{ color: "#e6edf3" }}>Pre-built for the systems that run your business</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="card-hover" style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: 28, borderTop: `3px solid ${p.color}` }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: p.color, marginBottom: 8 }}>{p.name}</div>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                  {p.modules.map((m) => (
                    <div key={m} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8b949e" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                      {m}
                    </div>
                  ))}
                </div>
                <Link href={p.href} style={{ fontSize: 13, color: p.color, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  View details
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW LIVE WORKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e6edf3" }}>How ACCELQ LIVE Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
            {[
              { n: "1", color: "#58a6ff", title: "Connect", desc: "Pre-built connectors for your SAP, Salesforce, or ServiceNow instance. No scripting." },
              { n: "2", color: "#21adc3", title: "Activate", desc: "Activate pre-built test assets for your specific modules and business processes." },
              { n: "3", color: "#a371f7", title: "Customize", desc: "Extend with ACCELQ no-code authoring to cover your customizations." },
              { n: "4", color: "#2ea043", title: "Automate", desc: "Schedule or trigger on every release. Full regression runs in minutes." },
            ].map((s, i) => (
              <div key={s.n} style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: i === 0 ? "12px 0 0 12px" : i === 3 ? "0 12px 12px 0" : 0, borderLeft: i > 0 ? "none" : "1px solid #30363d", textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}50`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 16, fontWeight: 800, color: s.color }}>{s.n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS USER */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#e6edf3", marginBottom: 12 }}>For business teams, not just engineers</h2>
            <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 28 }}>
              ACCELQ LIVE is designed for the people who know the business processes best — SAP functional consultants, Salesforce admins, and ServiceNow platform owners. No code required.
            </p>
            <Link href="/demo" className="btn-primary">See LIVE in Action</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
