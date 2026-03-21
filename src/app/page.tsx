import Link from "next/link";

const STATS = [
  { value: "1B+", label: "Test Executions Annually" },
  { value: "50+", label: "Fortune 100 Customers" },
  { value: "25+", label: "Countries" },
  { value: "60%", label: "Less Test Maintenance Time" },
];

const PROBLEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#a371f7",
    title: "Code Volume Explosion",
    desc: "AI tools generate in hours what used to take days. Your test coverage can't keep pace with a 10x increase in code output.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#f85149" strokeWidth="2" />
        <path d="M12 8v4m0 4h.01" stroke="#f85149" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "#f85149",
    title: "The Vibe Coding Debt",
    desc: "Developers ship AI-generated code they don't fully understand. No one owns the tests. Quality is invisible until production breaks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#d29922" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "#d29922",
    title: "The Maintenance Tax",
    desc: "Traditional test automation breaks constantly. Teams spend 60% of their time fixing tests, not building coverage. It's a trap.",
  },
];

const PILLARS = [
  {
    color: "#21adc3",
    badge: "FOUNDATION",
    title: "Unified Test Automation",
    desc: "No-code automation across web, API, mobile, desktop, and mainframes. One platform. Zero test code. Every layer covered.",
    href: "/platform/unified",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#21adc3" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 8l2 2 4-4" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "#215bd2",
    badge: "BUSINESS SYSTEMS",
    title: "ACCELQ LIVE",
    desc: "Pre-built, maintained test assets for SAP, Salesforce, ServiceNow, Oracle. Deploy coverage for business-critical systems in days, not months.",
    href: "/platform/live",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#215bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#215bd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "#a371f7",
    badge: "AI AGENTS",
    title: "Autopilot",
    desc: "Agentic AI across the full quality lifecycle. Discovers, designs, generates, self-heals, and analyzes — autonomously. The AI layer for AI-velocity teams.",
    href: "/platform/autopilot",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#a371f7" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STEPS = [
  { n: "01", color: "#21adc3", title: "Discover", desc: "AI reads your specs, Jira stories, and existing code to understand your application's intent." },
  { n: "02", color: "#215bd2", title: "Generate", desc: "Creates comprehensive test coverage from natural language. No code required from anyone." },
  { n: "03", color: "#a371f7", title: "Execute", desc: "Runs tests across web, API, mobile, desktop and business systems in parallel pipelines." },
  { n: "04", color: "#2ea043", title: "Self-Heal", desc: "Automatically repairs tests when your app changes. Zero maintenance overhead. Forever." },
];

const PERSONAS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M8 21H5a2 2 0 0 0-2-2v-3M21 16v3a2 2 0 0 0-2 2h-3" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 10h.01M15 10h.01M9 14h6" stroke="#58a6ff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Engineering Teams",
    color: "#58a6ff",
    desc: "Ship AI-generated code with confidence. Quality gates embedded directly in your CI/CD pipeline — no QA bottleneck, no regression surprises.",
    bullets: ["Integrates with GitHub, GitLab, Azure DevOps", "Quality gates in every pull request", "AI-generated tests from user stories"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#21adc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="#21adc3" strokeWidth="2" />
      </svg>
    ),
    title: "QA & Quality Engineering",
    color: "#21adc3",
    desc: "Stop spending 60% of your time on test maintenance. AI self-heals your coverage so you can focus on strategy, risk analysis, and quality architecture.",
    bullets: ["Self-healing eliminates maintenance work", "AI-powered root cause analysis", "Coverage intelligence dashboards"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#a371f7" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#a371f7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Business Analysts & Owners",
    color: "#a371f7",
    desc: "Own the quality of your SAP, Salesforce, and ServiceNow workflows without filing a single IT ticket. No code, no dependency, no surprises.",
    bullets: ["Author tests in business language", "SAP, Salesforce, ServiceNow built-in", "Validate business processes, not scripts"],
  },
];

const TECH_TILES = [
  { label: "Web Apps", color: "#58a6ff" }, { label: "REST APIs", color: "#21adc3" },
  { label: "Mobile iOS", color: "#a371f7" }, { label: "Mobile Android", color: "#2ea043" },
  { label: "Desktop Apps", color: "#58a6ff" }, { label: "SAP", color: "#1a6abb" },
  { label: "Salesforce", color: "#00a1e0" }, { label: "ServiceNow", color: "#2ea043" },
  { label: "Oracle", color: "#f85149" }, { label: "Mainframe/AS400", color: "#8b949e" },
  { label: "Kafka", color: "#d29922" }, { label: "Databases", color: "#a371f7" },
  { label: "ETL Pipelines", color: "#58a6ff" }, { label: "gRPC/GraphQL", color: "#21adc3" },
  { label: "Email & PDF", color: "#2ea043" }, { label: "Workday", color: "#215bd2" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* ── HERO ── */}
      <section
        className="hero-gradient grid-pattern"
        style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}
      >
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: -100, left: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(162,0,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,91,210,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ marginBottom: 20 }}>
            <span className="badge badge-purple">The AI Testing Gap Is Real</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 24, maxWidth: 900, margin: "0 auto 24px" }}>
            <span style={{ color: "#e6edf3" }}>Ship at AI Speed.</span>
            <br />
            <span className="text-gradient-teal">Without Breaking Things.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#8b949e", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Your AI coding tools just 10x'd your team&apos;s output. Your test coverage didn&apos;t.
            ACCELQ is the no-code, AI-native quality platform that closes the gap — automatically.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 16, padding: "12px 28px" }}>
              Get a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 16, padding: "12px 28px" }}>
              See How It Works
            </Link>
          </div>

          <p style={{ fontSize: 13, color: "#6e7681" }}>
            Trusted by 50+ Fortune 100 companies · 1B+ test executions annually · No credit card required
          </p>

          {/* Dashboard mockup */}
          <div style={{ marginTop: 60, maxWidth: 900, margin: "60px auto 0", background: "#161b22", border: "1px solid #30363d", borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px #30363d" }}>
            {/* Window chrome */}
            <div style={{ background: "#0d1117", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #21262d" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#f85149", "#d29922", "#2ea043"].map((c) => <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
              </div>
              <div style={{ flex: 1, background: "#21262d", borderRadius: 6, padding: "4px 12px", textAlign: "center", fontSize: 12, color: "#6e7681" }}>
                app.accelq.com — Test Suite · E-Commerce Checkout
              </div>
            </div>
            {/* Dashboard content */}
            <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {[
                { label: "Tests Passed", val: "847", sub: "↑ 23 new", color: "#2ea043" },
                { label: "Self-Healed", val: "14", sub: "auto-repaired", color: "#21adc3" },
                { label: "Coverage", val: "94%", sub: "+12% this sprint", color: "#58a6ff" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1117", border: "1px solid #21262d", borderRadius: 8, padding: 16 }}>
                  <div style={{ fontSize: 12, color: "#6e7681", marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "#8b949e" }}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { name: "Checkout → Payment → Confirmation", status: "pass", time: "2.3s", healed: false },
                { name: "User Login → Cart → Checkout", status: "pass", time: "1.8s", healed: true },
                { name: "API: POST /orders — schema validation", status: "pass", time: "0.4s", healed: false },
                { name: "Mobile: iOS Safari checkout flow", status: "pass", time: "3.1s", healed: false },
                { name: "SAP: Sales Order — business process", status: "pass", time: "4.2s", healed: false },
              ].map((t) => (
                <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: "#0d1117", borderRadius: 6, border: "1px solid #21262d" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span style={{ fontSize: 12, color: "#e6edf3", flex: 1 }}>{t.name}</span>
                  {t.healed && <span style={{ fontSize: 10, background: "rgba(33,173,195,0.15)", border: "1px solid rgba(33,173,195,0.3)", color: "#21adc3", padding: "2px 6px", borderRadius: 4 }}>AI healed</span>}
                  <span style={{ fontSize: 11, color: "#6e7681" }}>{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO BAR ── */}
      <section style={{ padding: "40px 0", borderTop: "1px solid #21262d", borderBottom: "1px solid #21262d", background: "#0d1117" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 12, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
            Trusted by engineering and QA teams at
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
            {["Fortune 100 Bank", "Global Insurance Co.", "Tier-1 Telco", "Enterprise SaaS", "Retail Giant", "Healthcare Leader", "Government Agency", "Automotive OEM"].map((name) => (
              <div key={name} style={{ padding: "6px 16px", background: "#161b22", border: "1px solid #30363d", borderRadius: 6, fontSize: 13, color: "#8b949e", fontWeight: 500 }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>The Problem</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 16 }}>
              AI writes code 10x faster.
              <br />
              <span className="text-gradient-purple">Quality can&apos;t keep up.</span>
            </h2>
            <p style={{ color: "#8b949e", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
              The same tools accelerating your development are creating the fastest-growing quality risk in software history.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PROBLEMS.map((p) => (
              <div key={p.title} className="card-border card-hover" style={{ padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Pull stat */}
          <div style={{ marginTop: 48, padding: 32, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, textAlign: "center" }}>
            <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#e6edf3", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>
              &ldquo;We&apos;re generating code <strong style={{ color: "#58a6ff" }}>5x faster</strong> with AI. We&apos;re testing{" "}
              <strong style={{ color: "#f85149" }}>0.5x as thoroughly</strong>. Something has to give.&rdquo;
            </p>
            <p style={{ fontSize: 13, color: "#6e7681", marginTop: 12 }}>— Common sentiment across engineering teams, 2025</p>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section style={{ padding: "100px 0", background: "#0d1117", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>The Solution</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 16 }}>
              ACCELQ: The Quality Intelligence Platform
            </h2>
            <p style={{ color: "#8b949e", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto" }}>
              The only platform that lets your entire team — engineers, QA analysts, and business owners — own quality together, at AI speed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PILLARS.map((p) => (
              <div key={p.title} className="card-hover" style={{ background: "#161b22", border: `1px solid #30363d`, borderRadius: 16, padding: 28, borderTop: `3px solid ${p.color}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${p.color}12, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ marginBottom: 16 }}>
                  <span className="badge" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color, fontSize: 10 }}>{p.badge}</span>
                </div>
                <div style={{ marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#e6edf3", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65, marginBottom: 20 }}>{p.desc}</p>
                <Link href={p.href} style={{ fontSize: 13, color: p.color, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>Lifecycle-First Quality</span>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 16 }}>
              From Spec to Production, Automatically
            </h2>
            <p style={{ color: "#8b949e", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ connects intent to coverage across your entire development lifecycle.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, position: "relative" }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: i === 0 ? "12px 0 0 12px" : i === STEPS.length - 1 ? "0 12px 12px 0" : 0, borderLeft: i > 0 ? "none" : "1px solid #30363d", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}60`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 15, fontWeight: 800, color: s.color }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", borderBottom: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-number" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1, marginBottom: 8 }}>
                  <span className="text-gradient-teal">{s.value}</span>
                </div>
                <div style={{ fontSize: 14, color: "#8b949e", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 className="section-title" style={{ color: "#e6edf3", marginBottom: 16 }}>Built for your whole team</h2>
            <p style={{ color: "#8b949e", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ is the first testing platform that genuinely works for engineers, QA, and business teams alike.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PERSONAS.map((p) => (
              <div key={p.title} className="card-border card-hover" style={{ padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8b949e", marginBottom: 6 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH COVERAGE ── */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="badge badge-teal" style={{ marginBottom: 12, display: "inline-flex" }}>Full-Stack Coverage</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#e6edf3" }}>One platform. Every layer.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {TECH_TILES.map((t) => (
              <div key={t.label} style={{ padding: "8px 16px", background: "#0d1117", border: `1px solid ${t.color}40`, borderRadius: 8, fontSize: 13, color: t.color, fontWeight: 600 }}>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#fccd00"><path d="M10 1l2.39 6.26H19l-5.19 3.77 1.97 6.26L10 13.51l-5.78 3.78 1.97-6.26L1 7.26h6.61z" /></svg>
              ))}
            </div>
            <blockquote style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: "#e6edf3", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>
              &ldquo;We&apos;ve been generating code 5x faster with AI tools. ACCELQ is the only reason our release quality hasn&apos;t degraded.
              It&apos;s the quality layer we didn&apos;t know we needed — and now can&apos;t live without.&rdquo;
            </blockquote>
            <p style={{ fontSize: 14, color: "#8b949e" }}>— VP Engineering, Fortune 500 Financial Services</p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: "100px 0", background: "#161b22", borderTop: "1px solid #30363d", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(33,173,195,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#e6edf3", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Ready to close the AI testing gap?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Join 50+ Fortune 100 companies shipping faster without breaking things.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Get a Demo
            </Link>
            <Link href="/pricing" className="btn-secondary" style={{ fontSize: 16, padding: "14px 32px" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
