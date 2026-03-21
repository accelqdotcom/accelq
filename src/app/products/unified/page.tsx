import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Unified — One Platform for All Your Testing | ACCELQ",
  description: "Web, API, mobile, manual, and enterprise testing in one no-code platform. ACCELQ Unified gives teams a single quality command center.",
};

const PRODUCTS = [
  { name: "Automate Web", color: "#21adc3", href: "/products/web", desc: "Browser automation with AI self-healing" },
  { name: "Automate API", color: "#58a6ff", href: "/products/api", desc: "REST, GraphQL, SOAP, and gRPC testing" },
  { name: "Automate Mobile", color: "#2ea043", href: "/products/mobile", desc: "iOS and Android native and hybrid apps" },
  { name: "ACCELQ Manual", color: "#a371f7", href: "/products/manual", desc: "Test case management and execution tracking" },
];

const PILLARS = [
  {
    title: "Single Source of Quality Truth",
    color: "#21adc3",
    desc: "Manual results, automated results, and exploratory test sessions all roll up into one real-time quality dashboard. No data aggregation, no exporting, no reconciliation.",
  },
  {
    title: "Shared Test Components",
    color: "#58a6ff",
    desc: "A Login flow built for web tests can be reused in API test setup and mobile regression suites. Build once, inherit everywhere.",
  },
  {
    title: "Business Process Alignment",
    color: "#a371f7",
    desc: "Tests are organized by business process — Order Management, User Onboarding, Checkout — not by technical layers. Everyone understands coverage.",
  },
  {
    title: "One CI/CD Integration",
    color: "#2ea043",
    desc: "Connect once to Jenkins, GitHub Actions, GitLab CI, or Azure DevOps. All test types — web, API, mobile — trigger from the same pipeline.",
  },
];

export default function ACCELQUnifiedPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>ACCELQ Unified</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 820 }}>
            Every Test Type. One Platform.
            <br /><span className="text-gradient-teal">Zero Fragmentation.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Web, API, mobile, manual, and enterprise — ACCELQ Unified eliminates the tool sprawl that costs QA teams 40% of their time in integration overhead.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* PRODUCT MAP */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 13, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32 }}>What&apos;s included in Unified</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {PRODUCTS.map((p) => (
              <Link key={p.name} href={p.href} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${p.color}`, display: "block" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#8b949e" }}>{p.desc}</div>
                <div style={{ fontSize: 12, color: p.color, marginTop: 12 }}>Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Why unified matters</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PILLARS.map((p) => (
              <div key={p.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderLeft: `4px solid ${p.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: p.color, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl" style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Unified vs. tool sprawl</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#6e7681", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>Tool Sprawl</div>
              {["Selenium for web", "Postman for API", "Appium for mobile", "Excel for manual", "4 CI integrations to maintain", "4 dashboards to reconcile", "No shared components"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#8b949e", marginBottom: 8 }}>
                  <span style={{ color: "#f85149" }}>✗</span> {item}
                </div>
              ))}
            </div>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid rgba(33,173,195,0.3)", borderRadius: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#21adc3", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>ACCELQ Unified</div>
              {["One no-code platform for all", "One test asset library", "Shared business components", "One execution infrastructure", "One CI/CD connection", "One quality dashboard", "One team, full coverage"].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#8b949e", marginBottom: 8 }}>
                  <span style={{ color: "#2ea043" }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Consolidate your quality toolchain</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>30-minute demo. See your exact use case covered by one platform.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Request a Demo</Link>
            <Link href="/platform/unified" className="btn-secondary">Platform Overview</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
