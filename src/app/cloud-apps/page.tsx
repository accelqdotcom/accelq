import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Apps & ERP Testing — SAP, Salesforce, ServiceNow, Oracle",
  description: "Pre-built test assets for the business systems that run your enterprise. ACCELQ LIVE covers SAP, Salesforce, ServiceNow, Oracle, and more.",
};

const APPS = [
  { name: "Salesforce", href: "/cloud-apps/salesforce", color: "#00a1e0", desc: "Sales Cloud, Service Cloud, CPQ, LWC" },
  { name: "SAP", href: "/cloud-apps/sap", color: "#1a6abb", desc: "S/4HANA, ECC, Fiori, BW/BI" },
  { name: "ServiceNow", href: "/cloud-apps/servicenow", color: "#62d84e", desc: "ITSM, HRSD, CSM, Flow Designer" },
  { name: "Oracle", href: "/cloud-apps/oracle", color: "#f85149", desc: "Oracle Fusion, EBS, OBIEE" },
  { name: "Workday", href: "#", color: "#58a6ff", desc: "HCM, Financials, Payroll" },
  { name: "MS Dynamics", href: "#", color: "#215bd2", desc: "D365 Finance, Sales, Operations" },
  { name: "nCino", href: "#", color: "#21adc3", desc: "Banking cloud platform" },
  { name: "Pega", href: "#", color: "#a371f7", desc: "BPM and CRM applications" },
  { name: "Coupa", href: "#", color: "#d29922", desc: "Business spend management" },
];

export default function CloudAppsPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Business Application Testing</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 800, margin: "0 auto 20px" }}>
            Automate Testing for the Systems
            <br /><span className="text-gradient-blue">That Run Your Business.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            SAP, Salesforce, ServiceNow, Oracle — ACCELQ provides pre-built, maintained test assets so every upgrade goes smoothly. No scripting, no ABAP, no Apex.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/platform/live" className="btn-primary">Explore ACCELQ LIVE</Link>
            <Link href="/demo" className="btn-secondary">Get a Demo</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {APPS.map((app) => (
              app.href !== "#" ? (
                <Link key={app.name} href={app.href} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, display: "block", borderTop: `3px solid ${app.color}` }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: app.color, marginBottom: 4 }}>{app.name}</div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{app.desc}</div>
                  <div style={{ fontSize: 12, color: app.color, marginTop: 12 }}>View details →</div>
                </Link>
              ) : (
                <div key={app.name} style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${app.color}`, opacity: 0.7 }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: app.color, marginBottom: 4 }}>{app.name}</div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{app.desc}</div>
                  <div style={{ fontSize: 11, color: "#6e7681", marginTop: 12 }}>Contact us for details</div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", marginBottom: 12 }}>Powered by ACCELQ LIVE</h2>
          <p style={{ color: "#8b949e", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.65 }}>
            ACCELQ LIVE ships with pre-built, actively maintained test assets for your specific platform — so you&apos;re testing in days, not months.
          </p>
          <Link href="/platform/live" className="btn-primary">Learn about ACCELQ LIVE</Link>
        </div>
      </section>
    </div>
  );
}
