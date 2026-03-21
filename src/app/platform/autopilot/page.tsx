import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autopilot — Agentic AI Across the Full Quality Lifecycle | ACCELQ",
  description: "5 AI agents. 1 platform. Autopilot discovers, designs, generates, self-heals, and analyzes — autonomously. The AI layer built for AI-velocity teams.",
};

const AGENTS = [
  {
    id: "01",
    name: "Discover Agent",
    color: "#7856ff",
    tagline: "Reads intent. Finds gaps.",
    desc: "Connects to Jira, Confluence, GitHub, and your app. Reads specs, user stories, and existing tests. Identifies what's covered, what's missing, and what's highest risk.",
    capabilities: ["Parses user stories & acceptance criteria", "Reads existing test suites", "Identifies high-risk areas", "Maps coverage to business requirements"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#7856ff" strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" stroke="#7856ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="#7856ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "Design Agent",
    color: "#00e5d3",
    tagline: "Designs coverage strategy.",
    desc: "Given discovery output, Design Agent plans test coverage — what scenarios to test, which data variations matter, what boundary conditions exist.",
    capabilities: ["Generates test scenario blueprints", "Identifies data permutations", "Prioritizes by risk and business impact", "Proposes test architecture"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#00e5d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00e5d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Generate Agent",
    color: "#fccd00",
    tagline: "Builds tests from language.",
    desc: "Transforms design blueprints and natural language descriptions into fully executable no-code test cases. No scripting. No prompting. Runs immediately.",
    capabilities: ["Natural language to executable tests", "Web, API, mobile, and ERP coverage", "Data-driven parameterization", "Business-readable test names"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#fccd00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "Self-Heal Agent",
    color: "#f87171",
    tagline: "Tests that repair themselves.",
    desc: "When your app changes and a test breaks, Self-Heal Agent detects the failure, identifies the updated element or flow, repairs the test, and re-runs — without any human involvement.",
    capabilities: ["Detects UI and API changes", "Auto-repairs locators and flows", "Re-runs to validate fix", "Logs all healing decisions"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" stroke="#f87171" strokeWidth="2" />
        <path d="M8 12l3 3 5-5" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "05",
    name: "Analyze Agent",
    color: "#c084fc",
    tagline: "Turns results into decisions.",
    desc: "After every run, Analyze Agent reviews results, identifies root causes of failures, surfaces coverage gaps, and generates actionable quality intelligence reports.",
    capabilities: ["Root cause analysis on failures", "Coverage gap identification", "Risk trend reporting", "Executive quality dashboards"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ARCS = [
  {
    title: "From Spec to Test",
    color: "#7856ff",
    desc: "Discover + Design + Generate run in sequence. A Jira story becomes a full test suite in minutes, not days.",
    agents: ["Discover", "Design", "Generate"],
  },
  {
    title: "Self-Maintaining Coverage",
    color: "#f87171",
    desc: "Generate + Self-Heal ensure tests stay valid. Ship code changes without touching a single test manually.",
    agents: ["Generate", "Self-Heal"],
  },
  {
    title: "Quality Intelligence Loop",
    color: "#c084fc",
    desc: "Analyze feeds Discover. Each cycle surfaces new gaps and risk areas, making coverage progressively smarter.",
    agents: ["Analyze", "Discover", "Design"],
  },
];

export default function AutopilotPage() {
  return (
    <div style={{ background: "#07070e" }}>

      {/* HERO — deep purple */}
      <section style={{ padding: "110px 0 80px", position: "relative", overflow: "hidden" }} className="hero-gradient-purple grid-pattern">
        <div style={{ position: "absolute", top: -100, left: "20%", width: 600, height: 600, background: "radial-gradient(circle, rgba(120,86,255,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(229,73,255,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <span className="badge badge-brand">Agentic AI · Quality Lifecycle</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 24px", maxWidth: 1000 }}>
            <span style={{ color: "#eeeef5" }}>5 AI Agents.</span>
            <br />
            <span className="text-gradient-brand">Autonomous Quality.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", color: "#8888a8", maxWidth: 640, margin: "0 auto 44px", lineHeight: 1.75 }}>
            Autopilot is the agentic AI layer that operates across your full quality lifecycle —
            discovering gaps, generating tests, self-healing failures, and surfacing intelligence.
            Without a human in the loop.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 16, padding: "13px 32px" }}>See Autopilot Live</Link>
            <Link href="/platform/unified" className="btn-secondary" style={{ fontSize: 16, padding: "13px 32px" }}>Platform Overview</Link>
          </div>

          {/* Agent network */}
          <div style={{ marginTop: 72, maxWidth: 820, margin: "72px auto 0" }}>
            <div style={{ padding: 32, background: "rgba(19,19,26,0.85)", border: "1px solid #2a2a3d", borderRadius: 20, backdropFilter: "blur(8px)", boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(120,86,255,0.15)" }}>
              <div style={{ fontSize: 11, color: "#55556a", textAlign: "center", marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>Autopilot Agent Network</div>
              <div style={{ position: "relative", height: 260 }}>
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 820 260" preserveAspectRatio="xMidYMid meet">
                  <line x1="410" y1="130" x2="110" y2="55" stroke="rgba(120,86,255,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
                  <line x1="410" y1="130" x2="270" y2="220" stroke="rgba(0,229,211,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
                  <line x1="410" y1="130" x2="410" y2="28" stroke="rgba(252,205,0,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
                  <line x1="410" y1="130" x2="550" y2="220" stroke="rgba(248,113,113,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
                  <line x1="410" y1="130" x2="710" y2="55" stroke="rgba(192,132,252,0.35)" strokeWidth="1.5" strokeDasharray="5 3" />
                  <ellipse cx="410" cy="130" rx="240" ry="100" fill="none" stroke="rgba(120,86,255,0.07)" strokeWidth="1" />
                </svg>
                {/* Center */}
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 68, height: 68, borderRadius: "50%", background: "linear-gradient(135deg, #7856ff, #a200ff)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(120,86,255,0.55)", zIndex: 2 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {[
                  { name: "Discover", color: "#7856ff", style: { top: "4%", left: "6%" } },
                  { name: "Design", color: "#00e5d3", style: { bottom: "4%", left: "24%" } },
                  { name: "Generate", color: "#fccd00", style: { top: "0%", left: "45%" } },
                  { name: "Self-Heal", color: "#f87171", style: { bottom: "4%", right: "24%" } },
                  { name: "Analyze", color: "#c084fc", style: { top: "4%", right: "6%" } },
                ].map((a) => (
                  <div key={a.name} style={{ position: "absolute", ...a.style, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, zIndex: 2 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${a.color}18`, border: `2px solid ${a.color}55`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 14px ${a.color}18` }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: a.color }} />
                    </div>
                    <span style={{ fontSize: 11, color: a.color, fontWeight: 700, whiteSpace: "nowrap" }}>{a.name}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #2a2a3d", marginTop: 8, paddingTop: 14, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                {["Discovers gaps", "Designs coverage", "Generates tests", "Self-heals failures", "Analyzes results"].map((cap) => (
                  <span key={cap} style={{ fontSize: 11, color: "#55556a", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#7856ff", display: "inline-block" }} />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENAI PARADOX */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>The GenAI Paradox</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#eeeef5", marginBottom: 16, lineHeight: 1.2 }}>
                AI builds code 10x faster.
                <br /><span className="text-gradient-purple">Tests can&apos;t keep up.</span>
              </h2>
              <p style={{ color: "#8888a8", lineHeight: 1.75, marginBottom: 20 }}>
                Every AI coding tool accelerates code generation. But test coverage doesn&apos;t auto-generate. The gap between code velocity and quality coverage grows every sprint. Autopilot is the AI answer to an AI problem.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Code generation speed", before: "1x", after: "10x", color: "#7856ff" },
                { label: "Test coverage velocity", before: "1x", after: "8x with Autopilot", color: "#00e5d3" },
                { label: "Test maintenance overhead", before: "60% of time", after: "< 5% of time", color: "#fccd00" },
                { label: "Time from spec to test", before: "3–5 days", after: "< 30 minutes", color: "#f87171" },
              ].map((m) => (
                <div key={m.label} style={{ padding: "14px 18px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#8888a8" }}>{m.label}</span>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#55556a", textDecoration: "line-through" }}>{m.before}</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" /></svg>
                    <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIVE AGENTS */}
      <section style={{ padding: "80px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge badge-brand" style={{ marginBottom: 16, display: "inline-flex" }}>5 Specialized Agents</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 12 }}>Each agent is a specialist</h2>
            <p style={{ color: "#8888a8", maxWidth: 540, margin: "0 auto" }}>Unlike generic LLM wrappers, each Autopilot agent is purpose-built for one phase of the quality lifecycle.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {AGENTS.map((a) => (
              <div key={a.id} className="card-hover" style={{ padding: 24, background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 14, display: "grid", gridTemplateColumns: "72px 1fr", gap: 24, alignItems: "start", borderLeft: `4px solid ${a.color}` }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${a.color}15`, border: `2px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", boxShadow: `0 0 16px ${a.color}12` }}>{a.icon}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#55556a" }}>{a.id}</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#eeeef5" }}>{a.name}</h3>
                    <span style={{ fontSize: 12, color: a.color, fontStyle: "italic" }}>— {a.tagline}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.7, marginBottom: 14 }}>{a.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {a.capabilities.map((cap) => (
                      <span key={cap} style={{ fontSize: 11, color: a.color, background: `${a.color}10`, border: `1px solid ${a.color}25`, borderRadius: 6, padding: "3px 8px" }}>{cap}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT ARCS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-cyan" style={{ marginBottom: 16, display: "inline-flex" }}>How Agents Combine</span>
            <h2 className="section-title" style={{ color: "#eeeef5" }}>Agents work in arcs</h2>
            <p style={{ color: "#8888a8", maxWidth: 500, margin: "0 auto" }}>Agents sequence and loop to create continuous quality intelligence.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {ARCS.map((arc) => (
              <div key={arc.title} className="card-hover" style={{ padding: 28, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, borderTop: `3px solid ${arc.color}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: `radial-gradient(circle at top right, ${arc.color}10, transparent 70%)`, pointerEvents: "none" }} />
                <h3 style={{ fontSize: 17, fontWeight: 800, color: arc.color, marginBottom: 10 }}>{arc.title}</h3>
                <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.7, marginBottom: 20 }}>{arc.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                  {arc.agents.map((agent, i) => (
                    <span key={agent} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 12, color: arc.color, background: `${arc.color}12`, border: `1px solid ${arc.color}30`, borderRadius: 6, padding: "3px 8px", fontWeight: 600 }}>{agent}</span>
                      {i < arc.agents.length - 1 && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke={arc.color} strokeWidth="1.5" strokeLinecap="round" /></svg>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI APP TESTING */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(120,86,255,0.07), rgba(229,73,255,0.04))", borderTop: "1px solid rgba(120,86,255,0.2)" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-gold" style={{ marginBottom: 20, display: "inline-flex" }}>Testing AI with AI</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>Autopilot tests the AI apps you&apos;re building, too</h2>
            <p style={{ color: "#8888a8", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 40px" }}>
              LLM output validation, RAG pipeline accuracy, MCP protocol conformance, AI agent behavior testing — Autopilot has specialized agents for the AI applications your teams are shipping.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
              {[
                { label: "LLM Output Validation", color: "#7856ff" },
                { label: "RAG Accuracy Testing", color: "#00e5d3" },
                { label: "AI Agent Behavior", color: "#fccd00" },
                { label: "MCP Protocol Tests", color: "#c084fc" },
                { label: "Prompt Regression", color: "#f87171" },
                { label: "Hallucination Detection", color: "#7856ff" },
              ].map((t) => (
                <div key={t.label} style={{ padding: "12px 16px", background: `${t.color}08`, border: `1px solid ${t.color}28`, borderRadius: 10, fontSize: 13, color: t.color, fontWeight: 600, textAlign: "center" }}>{t.label}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center", background: "#07070e", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#eeeef5", marginBottom: 16, letterSpacing: "-0.025em" }}>
            Let AI handle the testing.
          </h2>
          <p style={{ color: "#8888a8", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            See all 5 agents running live on your application in a 30-minute demo.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 16, padding: "14px 36px" }}>See Autopilot in Action</Link>
            <Link href="/pricing" className="btn-secondary" style={{ fontSize: 16, padding: "14px 36px" }}>View Pricing</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
