import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autopilot — Agentic AI Quality Across Your Entire Lifecycle",
  description: "ACCELQ Autopilot deploys AI agents that discover, generate, design, self-heal, and analyze — autonomously. The AI layer built for AI-velocity teams.",
};

const EVOLUTION = [
  { era: "2015–2017", name: "Teething Era", color: "#6e7681", capabilities: ["Intelligent Locator Building", "DOM Tree Analysis"] },
  { era: "2018–2020", name: "Predictive Typing", color: "#8b949e", capabilities: ["Combinatorial Permutation", "Optimizing Data Set Generation"] },
  { era: "2020–2022", name: "Machine Learning", color: "#58a6ff", capabilities: ["Universe Graph Generation", "NL to Code Generation"] },
  { era: "2023–2024", name: "Deep Learning", color: "#21adc3", capabilities: ["Self-Healing with ML", "Auto-Repair Code Generation"] },
  { era: "2024–Now", name: "Augmented Creativity", color: "#a371f7", capabilities: ["Prompt Text to Automation", "LLM Self-Healing"] },
  { era: "Future", name: "Autonomous Intelligence", color: "#fccd00", capabilities: ["Application Agent", "Migration Agent", "RAG Validation", "ACCELQ Converse"] },
];

const PERILS = [
  { title: "Maintenance Tech Debt", desc: "Generated scripts accumulate rapidly into unmaintainable patches." },
  { title: "Loss of Business Context", desc: "Scripts lack domain knowledge — shallow tests with no real coverage." },
  { title: "Debugging Hallucinations", desc: "LLM hallucinations introduce subtle bugs in the test scripts themselves." },
  { title: "Cross-Functional Silos", desc: "Generated code complexity alienates non-technical stakeholders." },
  { title: "Volume Over Value", desc: "Focus shifts to quantity of tests, not quality or risk alignment." },
  { title: "Diminishing ROI", desc: "Initial velocity gains are offset by escalating costs of governance and maintenance." },
];

const AGENTS = [
  {
    id: "01",
    name: "Discovery Agent",
    color: "#58a6ff",
    badge: "DISCOVER",
    tagline: "Understand your application before you test it.",
    desc: "Autonomously analyzes your application, specs, user stories, and existing code to generate a comprehensive, reusable automation foundation. No manual test analysis required.",
    capabilities: [
      "Reads Jira stories and acceptance criteria",
      "Analyzes application structure and user flows",
      "Generates a business process map",
      "Creates a reusable automation asset library",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#58a6ff" strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v3l2 1" stroke="#58a6ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "Automate Agent",
    color: "#21adc3",
    badge: "AUTOMATE",
    tagline: "Generate sustainable, multi-modal automation.",
    desc: "Creates production-ready automated tests across Web, Mobile, API, and Desktop from diverse enterprise sources — specs, existing scripts, user recordings, or natural language.",
    capabilities: [
      "Natural language to no-code automation",
      "Multi-modal: Web + API + Mobile + Desktop",
      "Imports from existing scripts and recordings",
      "Generates from OpenAPI/Swagger specs",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "DRY Agent",
    color: "#a371f7",
    badge: "DESIGN",
    tagline: "Turn scripts into architecture.",
    desc: "Transforms linear, fragile test scripts into a modular, maintainable automation architecture. Applies Don't-Repeat-Yourself (DRY) principles to create reusable components at scale.",
    capabilities: [
      "Identifies duplicate test logic across suites",
      "Extracts reusable components and modules",
      "Enforces page object and keyword patterns",
      "Reduces total test asset size by 40-60%",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#a371f7" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#a371f7" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#a371f7" strokeWidth="2" />
        <path d="M17.5 14v7M14 17.5h7" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "Change Analyzer Agent",
    color: "#2ea043",
    badge: "SELF-HEAL",
    tagline: "Eliminate test maintenance. Forever.",
    desc: "Monitors your application for changes, automatically detects broken test steps, and repairs them without human intervention. The zero-maintenance test suite, realized.",
    capabilities: [
      "Detects UI element changes automatically",
      "Repairs broken locators and selectors",
      "Flags tests requiring human review",
      "Analyzes code commits for test impact",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 12l3-3 3 3" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12h6M12 9v6" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "05",
    name: "Analyzer Agent",
    color: "#d29922",
    badge: "ANALYZE",
    tagline: "Turn failures into intelligence.",
    desc: "Transforms every test failure into actionable root cause analysis. Goes beyond 'test failed' to tell you what broke, why it broke, and what needs to be fixed.",
    capabilities: [
      "AI-powered root cause analysis",
      "Failure pattern clustering and deduplication",
      "Impact assessment: which features are affected",
      "Automated defect filing with context",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#d29922" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 20h20" stroke="#d29922" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ARCS = [
  {
    title: "Product Arc",
    subtitle: "Multi-Tech Enablement",
    color: "#58a6ff",
    items: ["Web & File Systems", "API, Backend & Middleware", "Mobile, Desktop & Mainframes", "SAP, Salesforce, ServiceNow"],
  },
  {
    title: "Lifecycle Arc",
    subtitle: "Lifecycle-Centric Intelligence",
    color: "#21adc3",
    items: ["Design & Discovery", "Execution & Optimization", "Change Management", "Runtime & Analytics"],
  },
  {
    title: "Feature Arc",
    subtitle: "Natural UX & Smart Governance",
    color: "#a371f7",
    items: ["NLP-Driven Authoring", "Predictive Testing & Risk", "AI-Based Risk Prioritization", "Governance without Bottlenecks"],
  },
];

export default function AutopilotPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(163,113,247,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(33,91,210,0.1) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0 }} className="grid-pattern" />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-purple" style={{ marginBottom: 20, display: "inline-flex" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginRight: 4 }}>
              <circle cx="6" cy="6" r="5" stroke="#a371f7" strokeWidth="1.5" />
              <circle cx="6" cy="6" r="2" fill="#a371f7" />
            </svg>
            Autonomous Quality Intelligence
          </span>

          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.04em", marginBottom: 24, maxWidth: 860, margin: "0 auto 24px" }}>
            <span style={{ color: "#e6edf3" }}>AI Agents for Quality.</span>
            <br />
            <span className="text-gradient-purple">Across Your Entire Lifecycle.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#8b949e", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.7 }}>
            ACCELQ Autopilot deploys a network of specialized AI agents that discover, generate, design, self-heal, and analyze — so your quality keeps pace with your AI-velocity development.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>See Autopilot in Action</Link>
            <Link href="/platform/unified" className="btn-secondary" style={{ fontSize: 15, padding: "12px 28px" }}>Explore the Full Platform</Link>
          </div>
        </div>
      </section>

      {/* ── GENAI PARADOX ── */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 12 }}>The GenAI Test Automation Paradox</h2>
            <p style={{ color: "#8b949e", maxWidth: 560, margin: "0 auto" }}>
              While GenAI excels at rapid test script generation, it introduces critical downstream challenges that create long-term technical and strategic debt.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Promise */}
            <div style={{ padding: 32, background: "rgba(46,160,67,0.06)", border: "1px solid rgba(46,160,67,0.25)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(46,160,67,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#2ea043", letterSpacing: "0.06em", textTransform: "uppercase" }}>The Promise</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Rapid Script Generation</h3>
              <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>
                GenAI&apos;s primary allure is its ability to produce a massive volume of test scripts with unprecedented speed — giving teams the feeling of instant test coverage.
              </p>
            </div>

            {/* Peril */}
            <div style={{ padding: 32, background: "rgba(248,81,73,0.06)", border: "1px solid rgba(248,81,73,0.2)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(248,81,73,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14 14H2z" stroke="#f85149" strokeWidth="1.5" /><path d="M8 6v4M8 11.5v.5" stroke="#f85149" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#f85149", letterSpacing: "0.06em", textTransform: "uppercase" }}>The Hidden Peril</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {PERILS.map((p) => (
                  <div key={p.title} style={{ padding: "10px 12px", background: "rgba(248,81,73,0.06)", borderRadius: 8, border: "1px solid rgba(248,81,73,0.12)" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#f85149", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 11, color: "#8b949e", lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>Our Philosophy</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 20, lineHeight: 1.2 }}>
              &ldquo;GenAI as an enabler, <span className="text-gradient-teal">not a shortcut.&rdquo;</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#8b949e", lineHeight: 1.75 }}>
              ACCELQ is building a sustainable QA platform that augments human intelligence across the test lifecycle.
              We believe in quality that compounds — where every test you create today makes tomorrow&apos;s releases safer,
              not just faster.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI EVOLUTION TIMELINE ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>A Decade of AI Innovation</span>
            <h2 className="section-title" style={{ color: "#e6edf3" }}>Always Ahead of the Curve</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0, position: "relative" }}>
            {EVOLUTION.map((e, i) => (
              <div key={e.era} style={{ padding: "24px 20px", background: "#161b22", border: "1px solid #30363d", borderLeft: i > 0 ? "none" : "1px solid #30363d", position: "relative" }}>
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: e.color, opacity: e.era === "Future" ? 1 : 0.6 }} />
                <div style={{ fontSize: 11, color: e.color, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{e.era}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 10 }}>{e.name}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {e.capabilities.map((c) => (
                    <li key={c} style={{ fontSize: 12, color: "#8b949e", marginBottom: 4, paddingLeft: 12, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: 4, borderRadius: "50%", background: e.color }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 5 AGENTS ── */}
      <section style={{ padding: "100px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>Autopilot Agents</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 16 }}>Five Agents. One Autonomous Quality Loop.</h2>
            <p style={{ color: "#8b949e", maxWidth: 520, margin: "0 auto" }}>
              Each agent specializes in a phase of the quality lifecycle. Together, they form a self-reinforcing loop that gets smarter with every release.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
            {AGENTS.map((agent) => (
              <div key={agent.id} className="card-hover" style={{ background: "#0d1117", border: `1px solid #30363d`, borderRadius: 16, padding: 28, borderTop: `3px solid ${agent.color}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${agent.color}12`, border: `1px solid ${agent.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {agent.icon}
                  </div>
                  <div>
                    <span className="badge" style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30`, color: agent.color, fontSize: 10, marginBottom: 6, display: "inline-flex" }}>{agent.badge}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3" }}>{agent.name}</h3>
                    <p style={{ fontSize: 13, color: agent.color, fontStyle: "italic" }}>{agent.tagline}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65, marginBottom: 16 }}>{agent.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {agent.capabilities.map((c) => (
                    <li key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8b949e", marginBottom: 6 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke={agent.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 ARCS ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>Strategic Architecture</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e6edf3" }}>Three Arcs. Complete Coverage.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {ARCS.map((arc) => (
              <div key={arc.title} className="card-border" style={{ padding: 28, borderTop: `3px solid ${arc.color}` }}>
                <div style={{ fontSize: 13, color: arc.color, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{arc.title}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e6edf3", marginBottom: 16 }}>{arc.subtitle}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {arc.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#8b949e", marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: arc.color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVERSE ── */}
      <section style={{ padding: "100px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>Coming Q1 2026</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 16, lineHeight: 1.2 }}>
                ACCELQ Converse
                <br />
                <span className="text-gradient-purple">Talk to Your Quality Layer</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                A persistent conversational core for quality management. Stakeholders can drive complex lifecycle workflows —
                test planning, impact analysis, execution, reporting, go/no-go decisions — with simple dialogue.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Ask about release quality exposure in natural language", "Coordinate agents across the QA lifecycle via chat", "Get proactive quality alerts in Slack/Teams", "Go/no-go decisions backed by live data"].map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#8b949e", marginBottom: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><path d="M2.5 8l4 4 7-7" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat mockup */}
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "#161b22", padding: "12px 16px", borderBottom: "1px solid #21262d", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a371f7", boxShadow: "0 0 8px rgba(163,113,247,0.6)" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3" }}>ACCELQ Converse</span>
                <span style={{ fontSize: 11, color: "#6e7681", marginLeft: "auto" }}>Live</span>
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { role: "user", text: "What's the quality exposure for the upcoming 'Jaguar' release?" },
                  { role: "ai", text: "Summary looks good, but a new critical defect was logged 3 hours ago. It has a high-risk score based on code churn analysis." },
                  { role: "user", text: "Which business processes are impacted?" },
                  { role: "ai", text: "The defect is linked to the 'International Checkout' process. This is a blocker for 3 downstream test suites." },
                  { role: "user", text: "Log this in Jira and notify the #payments-dev Slack channel." },
                  { role: "ai", text: "Done. Defect filed as JIRA-4821, associated with 'Jaguar', and #payments-dev has been notified with the full context." },
                ].map((msg, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{ maxWidth: "85%", padding: "10px 14px", borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: msg.role === "user" ? "#215bd2" : "#21262d", fontSize: 13, color: "#e6edf3", lineHeight: 1.5 }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI APP TESTING ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>New Capability</span>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#e6edf3", marginBottom: 12 }}>
              Test Your AI Applications Too
            </h2>
            <p style={{ color: "#8b949e", maxWidth: 580, margin: "0 auto" }}>
              As your team ships AI-powered products, ACCELQ validates the AI itself — RAG pipelines, LLM outputs, MCP endpoints, and more.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                color: "#21adc3", title: "LLM & RAG Validation",
                items: ["Hallucination detection (RAGAS metrics)", "Answer relevancy & faithfulness scoring", "Context accuracy & grounding verification", "Conversation-level coherence testing"],
              },
              {
                color: "#a371f7", title: "MCP Protocol Testing",
                items: ["Tool discovery & schema validation", "Full MCP spec compliance verification", "Security: injection & authorization testing", "JSON-RPC 2.0 protocol validation"],
              },
              {
                color: "#58a6ff", title: "AI Governance & Safety",
                items: ["Bias & toxicity scanning", "Prompt injection detection", "Model drift monitoring", "Quantitative QA score dashboards"],
              },
            ].map((item) => (
              <div key={item.title} className="card-border card-hover" style={{ padding: 24, borderTop: `2px solid ${item.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 14 }}>{item.title}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {item.items.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8b949e", marginBottom: 7 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>
            See Autopilot in action
          </h2>
          <p style={{ color: "#8b949e", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
            30 minutes. Your use case. Live product demo with one of our AI quality engineers.
          </p>
          <Link href="/demo" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
            Request a Demo
          </Link>
        </div>
      </section>

    </div>
  );
}
