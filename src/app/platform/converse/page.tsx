import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCELQ Converse — Conversational Quality Command Center",
  description: "Drive complex QA lifecycle workflows through simple dialogue. ACCELQ Converse is your persistent conversational core for test planning, impact analysis, execution, and go/no-go decisions.",
};

const USE_CASES = [
  {
    role: "QA Manager",
    color: "#7856ff",
    icon: "💬",
    dialogue: [
      { who: "Manager", msg: "What's the quality exposure for the upcoming 'Jaguar' release?" },
      { who: "Converse", msg: "Summary looks good, but a new critical defect was logged 3 hours ago. It has a high-risk score based on code churn analysis." },
      { who: "Manager", msg: "Tell me more. Which business processes are impacted?" },
      { who: "Converse", msg: "The defect is linked to 'International Checkout'. This is a blocker. Shall I log it in Jira and notify #payments-dev?" },
    ],
  },
  {
    role: "DevOps Engineer",
    color: "#00e5d3",
    icon: "⚙️",
    dialogue: [
      { who: "CI/CD Pipeline", msg: "Generate compliant, synthetic test data for user story JIRA-456." },
      { who: "Converse", msg: "Test data generated for JIRA-456. 847 records across 12 edge cases. Injecting into staging environment now." },
      { who: "Pipeline", msg: "Run smoke suite against staging." },
      { who: "Converse", msg: "All 143 smoke tests passed in 4m 12s. Quality gate: PASS. Promoting to pre-prod." },
    ],
  },
  {
    role: "Engineering Lead",
    color: "#fccd00",
    icon: "📊",
    dialogue: [
      { who: "Slack", msg: "Quality trends for the payments component are degrading." },
      { who: "Converse", msg: "Failure rate up 18% over last 3 builds. Root cause: schema drift in /api/checkout. 4 related tests are failing." },
      { who: "Lead", msg: "Who changed the schema?" },
      { who: "Converse", msg: "PR #2341 by @jake.chen merged 6h ago. Test cases auto-updated. Notifying Jake now." },
    ],
  },
];

const CAPABILITIES = [
  { color: "#7856ff", title: "Strategic Test Planning", desc: "Describe your release goals in plain language. Converse generates a risk-prioritized test plan, assigns coverage targets, and coordinates execution automatically." },
  { color: "#00e5d3", title: "Impact Analysis on Demand", desc: "Ask which tests are affected by any code change, business process update, or configuration shift. Instant answer backed by the Application Quality Knowledge Graph." },
  { color: "#c084fc", title: "Go/No-Go Decisions", desc: "Get an AI-driven release readiness assessment based on test results, defect density, code churn, and business process coverage — all in one conversational query." },
  { color: "#fccd00", title: "Agent Orchestration", desc: "Converse coordinates a network of specialized AI agents across your QA lifecycle — from test generation to execution, self-healing, and root cause analysis." },
  { color: "#58a6ff", title: "Cross-Tool Integration", desc: "Drives actions in Jira, Slack, Teams, ServiceNow, and your CI/CD pipeline. A single conversation can span your entire SDLC toolchain." },
  { color: "#22c55e", title: "Persistent Context", desc: "Unlike task-bound chat, Converse maintains full lifecycle memory — every test run, defect, code change, and business process decision informs every future interaction." },
];

const INTEGRATIONS = [
  { name: "Jira", color: "#0052CC" },
  { name: "Slack", color: "#4A154B" },
  { name: "MS Teams", color: "#6264A7" },
  { name: "ServiceNow", color: "#62D84E" },
  { name: "GitHub", color: "#6e40c9" },
  { name: "GitLab", color: "#FC6D26" },
  { name: "Jenkins", color: "#D33833" },
  { name: "Azure DevOps", color: "#0078D4" },
];

export default function ConversePage() {
  return (
    <div style={{ background: "#09090f" }}>

      {/* HERO — dark */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,86,255,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: -60, right: "8%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,229,211,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(120,86,255,0.12)", border: "1px solid rgba(120,86,255,0.35)", borderRadius: 6, padding: "6px 14px", marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7856ff", display: "inline-block", boxShadow: "0 0 8px rgba(120,86,255,0.8)" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#c084fc", letterSpacing: "0.08em", textTransform: "uppercase" }}>Q4 2025 — Now Available</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.04em", marginBottom: 24, maxWidth: 900, margin: "0 auto 24px" }}>
            <span className="text-gradient-brand">ACCELQ Converse</span>
            <br />
            <span style={{ color: "#eeeef5" }}>Quality, On Demand.</span>
            <br />
            <span style={{ color: "#eeeef5" }}>Via Conversation.</span>
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#8888a8", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.8 }}>
            A persistent conversational core that goes beyond task-bound chat. Drive complex QA lifecycle workflows with simple dialogue — from strategic test planning and impact analysis to execution, reporting, and go/no-go decisions.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "13px 32px" }}>See Converse in Action</Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "13px 32px" }}>Meet the Agents</Link>
          </div>

          {/* Chat demo mockup */}
          <div style={{ maxWidth: 720, margin: "64px auto 0", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(120,86,255,0.08)" }}>
            {/* Chrome */}
            <div style={{ background: "#1c1c27", borderBottom: "1px solid #2a2a3d", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#f87171", "#fbbf24", "#22c55e"].map((c) => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7856ff", display: "inline-block", boxShadow: "0 0 6px rgba(120,86,255,0.9)" }} />
                <span style={{ fontSize: 12, color: "#55556a", fontWeight: 500 }}>ACCELQ Converse — Release: Jaguar v4.2</span>
              </div>
            </div>
            {/* Messages */}
            <div style={{ padding: "28px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { who: "You", msg: "What's the quality exposure for the Jaguar release?", align: "right" },
                { who: "Converse", msg: "847 tests passed ✓  |  3 failing  |  1 critical blocker detected 3h ago in International Checkout (code churn score: HIGH). Recommend hold on go/no-go.", align: "left", color: "#c084fc" },
                { who: "You", msg: "Log the blocker in Jira and notify #payments-dev", align: "right" },
                { who: "Converse", msg: "Done. JAGUAR-2341 created, P0 priority, assigned to @jake.chen. Slack notification sent to #payments-dev with full defect context.", align: "left", color: "#c084fc" },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: m.align === "right" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    maxWidth: "75%",
                    padding: "12px 16px",
                    borderRadius: m.align === "right" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: m.align === "right" ? "rgba(120,86,255,0.18)" : "#1c1c27",
                    border: `1px solid ${m.align === "right" ? "rgba(120,86,255,0.35)" : "#2a2a3d"}`,
                  }}>
                    <div style={{ fontSize: 10, color: m.color || "#7856ff", fontWeight: 700, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.who}</div>
                    <div style={{ fontSize: 13, color: "#eeeef5", lineHeight: 1.6 }}>{m.msg}</div>
                  </div>
                </div>
              ))}
              {/* Typing indicator */}
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "12px 18px", borderRadius: "16px 16px 16px 4px", background: "#1c1c27", border: "1px solid #2a2a3d", display: "flex", gap: 5, alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#7856ff", opacity: 0.5 + i * 0.25 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES — light section */}
      <section className="section-light-blue" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-flex", background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Real Conversations</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0f0f1a", letterSpacing: "-0.03em", marginBottom: 12 }}>Works for every role on your team</h2>
            <p style={{ color: "#4a4a6a", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto" }}>From QA managers making release calls to engineers debugging CI failures — Converse speaks the language of every stakeholder.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {USE_CASES.map((uc) => (
              <div key={uc.role} className="card-light" style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 22 }}>{uc.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: uc.color }}>{uc.role}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {uc.dialogue.map((line, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: line.who === "Converse" ? "flex-start" : "flex-end" }}>
                      <div style={{
                        maxWidth: "85%",
                        padding: "9px 13px",
                        borderRadius: line.who === "Converse" ? "12px 12px 12px 3px" : "12px 12px 3px 12px",
                        background: line.who === "Converse" ? "rgba(120,86,255,0.07)" : "#f0eeff",
                        border: `1px solid ${line.who === "Converse" ? "rgba(120,86,255,0.18)" : "rgba(120,86,255,0.25)"}`,
                      }}>
                        <div style={{ fontSize: 9, fontWeight: 700, color: line.who === "Converse" ? uc.color : "#7856ff", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{line.who}</div>
                        <div style={{ fontSize: 12, color: "#0f0f1a", lineHeight: 1.55 }}>{line.msg}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — dark section */}
      <section style={{ padding: "100px 0", background: "#09090f" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge badge-brand" style={{ marginBottom: 16, display: "inline-flex" }}>Capabilities</span>
            <h2 className="section-title" style={{ color: "#eeeef5" }}>Everything you can do with Converse</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="card-hover" style={{ padding: 28, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, borderTop: `3px solid ${cap.color}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${cap.color}15`, border: `1px solid ${cap.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: cap.color, opacity: 0.8 }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#eeeef5", marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.7 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE GRAPH — light section */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-flex", background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>MCP-Powered</span>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#0f0f1a", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Anchored by an Application Quality Knowledge Graph
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a6a", lineHeight: 1.8, marginBottom: 28 }}>
                Every conversation is powered by a deep, living knowledge graph of your application&apos;s business processes, historical test data, code changes, and defect patterns. Converse doesn&apos;t just answer questions — it understands context.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { color: "#7856ff", title: "Business Process Mapping", desc: "Knows which tests cover which business processes — across all your applications." },
                  { color: "#00e5d3", title: "Historical Intelligence", desc: "Every past failure, fix, and trend informs every future recommendation." },
                  { color: "#fccd00", title: "Code Change Correlation", desc: "Automatically links code commits to test coverage gaps and risk exposure." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, marginTop: 6, flexShrink: 0, boxShadow: `0 0 6px ${item.color}` }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f0f1a", marginBottom: 3 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "#4a4a6a", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual diagram */}
            <div style={{ position: "relative" }}>
              <div style={{ background: "#0f0f1a", borderRadius: 20, padding: 32, boxShadow: "0 24px 64px rgba(15,15,26,0.15)" }}>
                {/* Central node */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #7856ff, #e549ff)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(120,86,255,0.5)" }}>
                    <span style={{ fontSize: 28 }}>🧠</span>
                  </div>
                </div>
                <div style={{ textAlign: "center", color: "#eeeef5", fontWeight: 700, fontSize: 13, marginBottom: 24 }}>Quality Knowledge Graph</div>
                {/* Spokes */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Test History", icon: "📋", color: "#7856ff" },
                    { label: "Code Changes", icon: "⚡", color: "#00e5d3" },
                    { label: "Business Flows", icon: "🔄", color: "#fccd00" },
                    { label: "Defect Patterns", icon: "🎯", color: "#f87171" },
                    { label: "Risk Scores", icon: "📊", color: "#c084fc" },
                    { label: "Coverage Map", icon: "🗺️", color: "#22c55e" },
                  ].map((node) => (
                    <div key={node.label} style={{ background: "#1c1c27", border: `1px solid ${node.color}30`, borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
                      <div style={{ fontSize: 18, marginBottom: 6 }}>{node.icon}</div>
                      <div style={{ fontSize: 10, color: node.color, fontWeight: 600 }}>{node.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS — dark */}
      <section style={{ padding: "80px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#eeeef5", marginBottom: 10 }}>Converse meets your team where they work</h2>
            <p style={{ color: "#8888a8", fontSize: 14 }}>Natively integrated with the tools your team already uses</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {INTEGRATIONS.map((tool) => (
              <div key={tool.name} style={{ padding: "10px 22px", background: "#09090f", border: `1px solid ${tool.color}40`, borderRadius: 10, fontSize: 13, color: tool.color, fontWeight: 700, letterSpacing: "0.02em" }}>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light */}
      <section className="section-light-warm" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#0f0f1a", letterSpacing: "-0.03em", marginBottom: 16 }}>
              Ready to command your quality lifecycle?
            </h2>
            <p style={{ color: "#4a4a6a", lineHeight: 1.8, marginBottom: 36, fontSize: "1.05rem" }}>
              ACCELQ Converse turns every quality decision into a conversation. See it live with your team&apos;s workflows.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "14px 32px" }}>Book a Demo</Link>
              <Link href="/platform/autopilot" style={{ fontSize: 15, padding: "14px 32px", display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid #2a2a3d", borderRadius: 10, color: "#0f0f1a", fontWeight: 600, textDecoration: "none" }}>
                See Autopilot Agents
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
