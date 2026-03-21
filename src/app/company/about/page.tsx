import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ACCELQ — Built for the Way Software Gets Built Now",
  description: "ACCELQ was founded in 2016 on a simple belief: quality should be built into every step of software development. In the AI era, that belief has never mattered more.",
};

const TIMELINE = [
  { year: "2016", title: "Founded", desc: "ACCELQ founded with a mission: make test automation accessible to everyone on the software team. No-code from day one." },
  { year: "2018", title: "First Enterprise Customers", desc: "First Fortune 500 customers deploy ACCELQ for cross-platform enterprise automation. The no-code value proposition validated at scale." },
  { year: "2020", title: "Machine Learning Era", desc: "Launched AI-powered self-healing tests and ML-based locator intelligence. Maintenance burden for customers dropped by 60%+." },
  { year: "2022", title: "Business System Expansion", desc: "ACCELQ LIVE launched with pre-built test assets for SAP, Salesforce, and ServiceNow. Non-technical teams can now own their test coverage." },
  { year: "2023", title: "AI-Native Platform", desc: "Deep integration of LLMs into the authoring, execution, and analysis lifecycle. NL to automation becomes a reality." },
  { year: "2024", title: "Autopilot Agentic Framework", desc: "Launched Autopilot — five specialized AI agents covering the full quality lifecycle. The industry's first agentic QA platform." },
  { year: "2025", title: "ACCELQ Converse & LLM Testing", desc: "Conversational quality orchestration (Converse) and validation for AI applications (LLM/RAG testing, MCP protocol validation)." },
];

const VALUES = [
  { title: "Innovation Without Compromise", desc: "We push the boundaries of what's possible in test automation — but never at the expense of reliability, security, or enterprise trust.", color: "#21adc3" },
  { title: "Business-First Design", desc: "Every feature is designed from the perspective of what helps teams deliver better software faster — not what's technically impressive.", color: "#58a6ff" },
  { title: "Relentless Simplicity", desc: "The most powerful platform is the one teams actually use. Simplicity is our most important engineering constraint.", color: "#a371f7" },
  { title: "Customer Outcomes Over Features", desc: "We measure success by what our customers ship, not by what we build. Your outcomes are our north star.", color: "#2ea043" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Our Story</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 800, margin: "0 auto 20px" }}>
            Built for the Way Software
            <br />
            <span className="text-gradient-blue">Gets Built Now.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            ACCELQ was founded on a simple belief: quality should be built into every step of software development, not bolted on at the end. In the AI era, that belief has never mattered more.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 760, margin: "0 auto", padding: 40, border: "1px solid #30363d", borderRadius: 16, background: "linear-gradient(135deg, rgba(33,173,195,0.06) 0%, rgba(33,91,210,0.06) 100%)" }}>
            <p style={{ fontSize: "1.1rem", color: "#8b949e", marginBottom: 12 }}>Our Vision</p>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 700, color: "#e6edf3", lineHeight: 1.4 }}>
              To deliver a unified, AI-powered platform that enables the{" "}
              <span className="text-gradient-teal">&ldquo;Self-Driving Quality Organization&rdquo;</span>
              {" "}— making quality assurance autonomous, codeless, and a core business accelerator.
            </h2>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { val: "2016", label: "Founded" },
              { val: "200+", label: "Employees" },
              { val: "50+", label: "Fortune 100 Customers" },
              { val: "25+", label: "Countries" },
              { val: "1B+", label: "Test Executions Annually" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-number text-gradient-teal" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#8b949e" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 48 }}>The ACCELQ Journey</h2>
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #21adc3, #215bd2, #a371f7)" }} />
            {TIMELINE.map((item, i) => (
              <div key={item.year} style={{ display: "flex", gap: 24, marginBottom: i < TIMELINE.length - 1 ? 32 : 0, paddingLeft: 52, position: "relative" }}>
                <div style={{ position: "absolute", left: 10, top: 4, width: 20, height: 20, borderRadius: "50%", background: "#21adc3", border: "3px solid #161b22", zIndex: 1 }} />
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#21adc3", letterSpacing: "0.06em" }}>{item.year}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", margin: "2px 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>What we believe</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} className="card-border card-hover" style={{ padding: 24, borderTop: `3px solid ${v.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: v.color, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <p style={{ fontSize: 12, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Recognized by industry analysts</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {["Forrester Wave Leader", "Gartner Cool Vendor", "G2 Leader — Test Automation", "IDC MarketScape"].map((r) => (
              <div key={r} style={{ padding: "10px 20px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, fontSize: 13, color: "#8b949e", fontWeight: 500 }}>{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Join us</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Help build the future of quality engineering — or start testing smarter today.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/company/careers" className="btn-primary">View Open Roles</Link>
            <Link href="/demo" className="btn-secondary">Get a Demo</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
