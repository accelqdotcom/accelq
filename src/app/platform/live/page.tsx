import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
    count: "200+",
  },
  {
    name: "SAP",
    color: "#4bbc81",
    href: "/cloud-apps/sap",
    desc: "SAP GUI, Fiori, S/4HANA, BW and business process coverage.",
    modules: ["SAP Fiori", "S/4HANA", "ECC / SAP GUI", "BW/BI Reports", "BAPI/RFC Testing"],
    count: "350+",
  },
  {
    name: "ServiceNow",
    color: "#62d84e",
    href: "/cloud-apps/servicenow",
    desc: "ITSM, HRSD, CSM, Flow Designer and scoped app testing.",
    modules: ["ITSM", "HRSD", "CSM", "Flow Designer", "IntegrationHub"],
    count: "180+",
  },
  {
    name: "Oracle",
    color: "#f87171",
    href: "/cloud-apps/oracle",
    desc: "Oracle Fusion, EBS, OBIEE and business process validation.",
    modules: ["Oracle Fusion", "Oracle EBS", "OBIEE Reports", "Procurement", "Finance Modules"],
    count: "274+",
  },
];

export default function LivePage() {
  return (
    <div style={{ background: "#09090f" }}>

      {/* HERO — two-column with illustration */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient-teal grid-pattern" />
        <div style={{ position: "absolute", top: -80, right: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,229,211,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              {/* LIVE logo badge */}
              <div style={{ marginBottom: 28 }}>
                <Image src="/assets/qlive-logo.svg" alt="ACCELQ LIVE" width={200} height={24} />
              </div>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.04em", marginBottom: 20 }}>
                Production-Ready
                <br />Test Assets.
                <br /><span className="text-gradient-cyan">Out of the Box.</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#8888a8", lineHeight: 1.75, marginBottom: 32 }}>
                ACCELQ LIVE gives your team pre-built, actively maintained test assets for SAP, Salesforce, ServiceNow, and Oracle — so you&apos;re testing in days, not months.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "12px 26px" }}>See LIVE in Action</Link>
                <Link href="/cloud-apps" className="btn-secondary" style={{ fontSize: 15, padding: "12px 26px" }}>Explore Cloud Apps</Link>
              </div>
              <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
                {[{ val: "1000+", label: "Pre-built tests" }, { val: "4", label: "Major platforms" }, { val: "Days", label: "Time to coverage" }].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#00e5d3" }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: "#55556a" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* LIVE Illustration */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/assets/qlive-illustration.svg"
                alt="ACCELQ LIVE illustration"
                width={460}
                height={450}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE UPGRADE PROBLEM */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-purple" style={{ marginBottom: 12, display: "inline-flex" }}>The Problem</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 12 }}>Every upgrade is a risk you don&apos;t have to take blind.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { color: "#f87171", title: "Manual validation takes weeks", desc: "Business analysts spend weeks manually validating business processes after every SAP patch or Salesforce release." },
              { color: "#fbbf24", title: "Regression risk is invisible", desc: "Without automated coverage, regression bugs aren't found until they hit production and impact real business operations." },
              { color: "#c084fc", title: "Business can't own quality", desc: "Without no-code tools, business teams depend entirely on IT and engineering to build and run tests." },
            ].map((p) => (
              <div key={p.title} className="card-hover" style={{ padding: 28, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, borderTop: `3px solid ${p.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: p.color, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CARDS */}
      <section style={{ padding: "80px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-cyan" style={{ marginBottom: 12, display: "inline-flex" }}>ACCELQ LIVE Library</span>
            <h2 className="section-title" style={{ color: "#eeeef5" }}>Pre-built for the systems that run your business</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="card-hover" style={{ background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 14, padding: 28, borderTop: `3px solid ${p.color}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: `radial-gradient(circle at top right, ${p.color}10, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: p.color }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: 6, padding: "3px 8px", fontWeight: 700 }}>{p.count} tests</div>
                </div>
                <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                  {p.modules.map((m) => (
                    <div key={m} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8888a8" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
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
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#eeeef5" }}>How ACCELQ LIVE Works</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, #58a6ff, #00e5d3, #c084fc, #22c55e)", opacity: 0.4 }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative" }}>
              {[
                { n: "1", color: "#58a6ff", title: "Connect", desc: "Pre-built connectors for your SAP, Salesforce, or ServiceNow instance. No scripting." },
                { n: "2", color: "#00e5d3", title: "Activate", desc: "Activate pre-built test assets for your specific modules and business processes." },
                { n: "3", color: "#c084fc", title: "Customize", desc: "Extend with ACCELQ no-code authoring to cover your customizations." },
                { n: "4", color: "#22c55e", title: "Automate", desc: "Schedule or trigger on every release. Full regression runs in minutes." },
              ].map((s) => (
                <div key={s.n} style={{ padding: "28px 20px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 12, textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${s.color}18`, border: `2px solid ${s.color}50`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 18, fontWeight: 900, color: s.color, boxShadow: `0 0 16px ${s.color}15` }}>{s.n}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#eeeef5", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS USER CTA */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, rgba(0,229,211,0.07), rgba(88,166,255,0.05))", borderTop: "1px solid rgba(0,229,211,0.2)", textAlign: "center" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#eeeef5", marginBottom: 12 }}>For business teams, not just engineers</h2>
            <p style={{ color: "#8888a8", lineHeight: 1.75, marginBottom: 28 }}>
              ACCELQ LIVE is designed for the people who know the business processes best — SAP functional consultants, Salesforce admins, and ServiceNow platform owners. No code required.
            </p>
            <Link href="/demo" className="btn-cta">See LIVE in Action</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
