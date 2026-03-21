import Link from "next/link";
import Image from "@/components/Img";

const STATS = [
  { value: "1B+", label: "Test Executions Annually", color: "#7856ff" },
  { value: "50+", label: "Fortune 100 Customers", color: "#fccd00" },
  { value: "25+", label: "Countries", color: "#00e5d3" },
  { value: "60%", label: "Less Test Maintenance", color: "#c084fc" },
];

const PROBLEMS = [
  {
    color: "#c084fc",
    title: "Code Volume Explosion",
    desc: "AI tools generate in hours what used to take days. Your test coverage can't keep pace with a 10x increase in code output.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    color: "#f87171",
    title: "The Vibe Coding Debt",
    desc: "Developers ship AI-generated code they don't fully understand. No one owns the tests. Quality is invisible until production breaks.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2" /><path d="M12 8v4m0 4h.01" stroke="#f87171" strokeWidth="2" strokeLinecap="round" /></svg>,
  },
  {
    color: "#fbbf24",
    title: "The Maintenance Tax",
    desc: "Traditional test automation breaks constantly. Teams spend 60% of their time fixing tests, not building coverage. It's a trap.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" /></svg>,
  },
];

const PILLARS = [
  {
    color: "#00e5d3",
    badge: "FOUNDATION",
    title: "Unified Test Automation",
    desc: "No-code automation across web, API, mobile, desktop, and mainframes. One platform. Zero test code. Every layer covered.",
    href: "/platform/unified",
    gradient: "rgba(0,229,211,0.06)",
  },
  {
    color: "#7856ff",
    badge: "BUSINESS SYSTEMS",
    title: "ACCELQ LIVE",
    desc: "Pre-built, maintained test assets for SAP, Salesforce, ServiceNow, Oracle. Deploy coverage for business-critical systems in days, not months.",
    href: "/platform/live",
    gradient: "rgba(120,86,255,0.08)",
  },
  {
    color: "#fccd00",
    badge: "AI AGENTS",
    title: "Autopilot",
    desc: "Agentic AI across the full quality lifecycle. Discovers, designs, generates, self-heals, and analyzes — autonomously. The AI layer for AI-velocity teams.",
    href: "/platform/autopilot",
    gradient: "rgba(252,205,0,0.06)",
  },
];

const STEPS = [
  { n: "01", color: "#7856ff", title: "Discover", desc: "AI reads your specs, Jira stories, and existing code to understand your application's intent." },
  { n: "02", color: "#00e5d3", title: "Generate", desc: "Creates comprehensive test coverage from natural language. No code required from anyone." },
  { n: "03", color: "#c084fc", title: "Execute", desc: "Runs tests across web, API, mobile, desktop and business systems in parallel pipelines." },
  { n: "04", color: "#fccd00", title: "Self-Heal", desc: "Automatically repairs tests when your app changes. Zero maintenance overhead. Forever." },
];

const PERSONAS = [
  {
    color: "#7856ff",
    title: "Engineering Teams",
    desc: "Ship AI-generated code with confidence. Quality gates embedded directly in your CI/CD pipeline — no QA bottleneck, no regression surprises.",
    bullets: ["Integrates with GitHub, GitLab, Azure DevOps", "Quality gates in every pull request", "AI-generated tests from user stories"],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M8 21H5a2 2 0 0 0-2-2v-3M21 16v3a2 2 0 0 0-2 2h-3" stroke="#7856ff" strokeWidth="2" strokeLinecap="round" /></svg>,
  },
  {
    color: "#00e5d3",
    title: "QA & Quality Engineering",
    desc: "Stop spending 60% of your time on test maintenance. AI self-heals your coverage so you can focus on strategy, risk analysis, and quality architecture.",
    bullets: ["Self-healing eliminates maintenance work", "AI-powered root cause analysis", "Coverage intelligence dashboards"],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#00e5d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="#00e5d3" strokeWidth="2" /></svg>,
  },
  {
    color: "#fccd00",
    title: "Business Analysts & Owners",
    desc: "Own the quality of your SAP, Salesforce, and ServiceNow workflows without filing a single IT ticket. No code, no dependency, no surprises.",
    bullets: ["Author tests in business language", "SAP, Salesforce, ServiceNow built-in", "Validate business processes, not scripts"],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#fccd00" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="#fccd00" strokeWidth="2" /></svg>,
  },
];

const TECH_TILES = [
  { label: "Web Apps", color: "#7856ff" }, { label: "REST APIs", color: "#00e5d3" },
  { label: "Mobile iOS", color: "#c084fc" }, { label: "Mobile Android", color: "#22c55e" },
  { label: "Desktop Apps", color: "#58a6ff" }, { label: "SAP", color: "#1a6abb" },
  { label: "Salesforce", color: "#00a1e0" }, { label: "ServiceNow", color: "#22c55e" },
  { label: "Oracle", color: "#f87171" }, { label: "Mainframe/AS400", color: "#8888a8" },
  { label: "Kafka", color: "#fbbf24" }, { label: "Databases", color: "#c084fc" },
  { label: "ETL Pipelines", color: "#58a6ff" }, { label: "gRPC/GraphQL", color: "#00e5d3" },
  { label: "Email & PDF", color: "#22c55e" }, { label: "Workday", color: "#7856ff" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#09090f" }}>

      {/* ── HERO ── */}
      <section className="hero-gradient grid-pattern" style={{ padding: "110px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: -120, left: "10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,86,255,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: "8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,73,255,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,229,211,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <span className="badge badge-brand">The AI Testing Gap Is Real</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.75rem, 8vw, 5rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 auto 28px", maxWidth: 960 }}>
            <span style={{ color: "#eeeef5" }}>Ship at AI Speed.</span>
            <br />
            <span className="text-gradient-brand">Without Breaking Things.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#8888a8", maxWidth: 620, margin: "0 auto 44px", lineHeight: 1.75 }}>
            Your AI coding tools just 10x&rsquo;d your team&apos;s output. Your test coverage didn&apos;t.
            ACCELQ is the no-code, AI-native quality platform that closes the gap — automatically.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 16, padding: "13px 32px" }}>
              Get a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 16, padding: "13px 32px" }}>
              See How It Works
            </Link>
          </div>

          <p style={{ fontSize: 13, color: "#55556a" }}>
            Trusted by 50+ Fortune 100 companies &nbsp;·&nbsp; 1B+ test executions annually &nbsp;·&nbsp; No credit card required
          </p>

          {/* Dashboard mockup */}
          <div style={{ marginTop: 64, maxWidth: 940, margin: "64px auto 0" }}>
            <div className="terminal-window" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px #2a2a3d, 0 0 80px rgba(120,86,255,0.08)" }}>
              <div className="terminal-chrome">
                <div style={{ display: "flex", gap: 6 }}>
                  {["#f87171", "#fbbf24", "#22c55e"].map((c) => <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.85 }} />)}
                </div>
                <div style={{ flex: 1, background: "#1c1c27", borderRadius: 6, padding: "4px 14px", textAlign: "center", fontSize: 12, color: "#55556a" }}>
                  app.accelq.com — Test Suite · E-Commerce Platform · Autopilot Mode
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
                  <span style={{ fontSize: 11, color: "#22c55e" }}>Live</span>
                </div>
              </div>
              {/* Stats row */}
              <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
                {[
                  { label: "Tests Passed", val: "847", sub: "↑ 23 new this run", color: "#22c55e" },
                  { label: "AI Self-Healed", val: "14", sub: "auto-repaired", color: "#7856ff" },
                  { label: "Coverage", val: "94%", sub: "+12% this sprint", color: "#00e5d3" },
                  { label: "Time Saved", val: "6.2h", sub: "vs. manual", color: "#fccd00" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ fontSize: 11, color: "#55556a", marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: "#8888a8", marginTop: 4 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              {/* Test run */}
              <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  { name: "Checkout → Payment → Confirmation", status: "pass", time: "2.3s", tag: null },
                  { name: "User Login → Cart → Checkout", status: "pass", time: "1.8s", tag: { label: "AI healed", color: "#7856ff" } },
                  { name: "API: POST /orders — schema validation", status: "pass", time: "0.4s", tag: null },
                  { name: "Mobile: iOS Safari checkout flow", status: "pass", time: "3.1s", tag: null },
                  { name: "SAP: Sales Order — business process", status: "pass", time: "4.2s", tag: { label: "LIVE asset", color: "#00e5d3" } },
                ].map((t) => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", background: "#09090f", borderRadius: 7, border: "1px solid #1c1c27" }}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontSize: 12, color: "#eeeef5", flex: 1 }}>{t.name}</span>
                    {t.tag && <span style={{ fontSize: 10, background: `${t.tag.color}18`, border: `1px solid ${t.tag.color}40`, color: t.tag.color, padding: "2px 7px", borderRadius: 4, whiteSpace: "nowrap" }}>{t.tag.label}</span>}
                    <span style={{ fontSize: 11, color: "#55556a" }}>{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO BAR ── */}
      <section style={{ padding: "36px 0", borderTop: "1px solid #1c1c27", borderBottom: "1px solid #1c1c27" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 11, color: "#55556a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
            Trusted by engineering and QA teams at
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {["Fortune 100 Bank", "Global Insurance Co.", "Tier-1 Telco", "Enterprise SaaS", "Retail Giant", "Healthcare Leader", "Government Agency", "Automotive OEM"].map((name) => (
              <div key={name} style={{ padding: "5px 14px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 6, fontSize: 12, color: "#8888a8" }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORRESTER WAVE LEADER ── */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(120,86,255,0.06) 0%, rgba(252,205,0,0.03) 100%)", borderTop: "1px solid rgba(120,86,255,0.15)", borderBottom: "1px solid rgba(120,86,255,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, left: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(120,86,255,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, right: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(252,205,0,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Left — wave chart */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(120,86,255,0.3)", boxShadow: "0 20px 60px rgba(120,86,255,0.15), 0 0 0 1px rgba(120,86,255,0.1)" }}>
                <Image
                  src="/assets/forrester-wave-chart.png"
                  alt="Forrester Wave Q4 2025 — ACCELQ Leader"
                  width={680}
                  height={480}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              {/* Badge overlay */}
              <div style={{ position: "absolute", top: -16, right: -16, background: "#09090f", border: "1px solid rgba(252,205,0,0.4)", borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <Image src="/assets/forrester-wave-badge.svg" alt="Forrester Wave Leader" width={80} height={64} />
              </div>
            </div>

            {/* Right — copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(252,205,0,0.1)", border: "1px solid rgba(252,205,0,0.35)", borderRadius: 6, padding: "6px 14px", marginBottom: 20 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="7,1 9,5.5 14,5.5 10.5,8.5 12,13 7,10 2,13 3.5,8.5 0,5.5 5,5.5" fill="#fccd00" /></svg>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fccd00", letterSpacing: "0.07em", textTransform: "uppercase" }}>Forrester Wave™ Q4 2025</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Named a{" "}
                <span className="text-gradient-gold">Leader</span>
                {" "}in Autonomous Testing Platforms
              </h2>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.3)", borderRadius: 8, padding: "8px 16px", marginBottom: 20 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.8 3.6L14 6.2l-3 2.9.7 4.1L8 11.2l-3.7 2 .7-4.1L2 6.2l4.2-.6z" stroke="#7856ff" fill="rgba(120,86,255,0.2)" strokeWidth="1.2" /></svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#c084fc" }}>Highest Score in Current Offering</span>
              </div>

              <blockquote style={{ borderLeft: "3px solid rgba(120,86,255,0.5)", paddingLeft: 18, marginBottom: 28 }}>
                <p style={{ fontSize: "0.95rem", color: "#8888a8", lineHeight: 1.8, fontStyle: "italic" }}>
                  &ldquo;ACCELQ&apos;s impressive vision and innovation help its strategy stand out among competitors, focusing on a fully autonomous QE platform with event-driven orchestration and explainable AI.&rdquo;
                </p>
                <cite style={{ fontSize: 11, color: "#55556a", fontStyle: "normal", display: "block", marginTop: 8 }}>— Forrester Research, Autonomous Testing Platforms, Q4 2025</cite>
              </blockquote>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                {[
                  { val: "#1", label: "Current Offering", color: "#7856ff" },
                  { val: "Leader", label: "Wave Position", color: "#fccd00" },
                  { val: "★ Fav", label: "Customer Choice", color: "#00e5d3" },
                ].map((s) => (
                  <div key={s.label} style={{ padding: "12px 20px", background: "rgba(9,9,15,0.8)", border: "1px solid #2a2a3d", borderRadius: 10, textAlign: "center", minWidth: 90 }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 900, color: s.color }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: "#55556a", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/forrester-wave#getreport" className="btn-cta" style={{ fontSize: 14, padding: "11px 24px" }}>
                  Get Free Report
                </Link>
                <Link href="/forrester-wave" className="btn-secondary" style={{ fontSize: 14, padding: "11px 24px" }}>
                  See Full Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>The Problem</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>
              AI writes code 10x faster.
              <br />
              <span className="text-gradient-purple">Quality can&apos;t keep up.</span>
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
              The same tools accelerating your development are creating the fastest-growing quality risk in software history.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
            {PROBLEMS.map((p, i) => (
              <div key={p.title} style={{ padding: 32, background: "#13131a", border: "1px solid #2a2a3d", borderRadius: i === 0 ? "14px 0 0 14px" : i === 2 ? "0 14px 14px 0" : 0, borderLeft: i > 0 ? "none" : "1px solid #2a2a3d", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: `radial-gradient(circle at top right, ${p.color}10, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#eeeef5", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: "32px 40px", background: "linear-gradient(135deg, rgba(120,86,255,0.08), rgba(229,73,255,0.05))", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 14, textAlign: "center" }}>
            <p style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)", color: "#eeeef5", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>
              &ldquo;We&apos;re generating code <strong style={{ color: "#7856ff" }}>5x faster</strong> with AI. We&apos;re testing{" "}
              <strong style={{ color: "#f87171" }}>0.5x as thoroughly</strong>. Something has to give.&rdquo;
            </p>
            <p style={{ fontSize: 13, color: "#55556a", marginTop: 12 }}>— Common sentiment across engineering teams, 2025</p>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section style={{ padding: "100px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-cyan" style={{ marginBottom: 16, display: "inline-flex" }}>The Solution</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>
              ACCELQ: The Quality Intelligence Platform
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 620, margin: "0 auto" }}>
              The only platform that lets your entire team — engineers, QA analysts, and business owners — own quality together, at AI speed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {PILLARS.map((p) => (
              <div key={p.title} className="card-hover" style={{ background: "#09090f", border: `1px solid #2a2a3d`, borderRadius: 16, padding: 32, borderTop: `3px solid ${p.color}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top right, ${p.gradient}, transparent 60%)`, pointerEvents: "none" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ marginBottom: 20 }}>
                    <span className="badge" style={{ background: `${p.color}15`, border: `1px solid ${p.color}35`, color: p.color, fontSize: 10 }}>{p.badge}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#eeeef5", marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>
                  <Link href={p.href} style={{ fontSize: 13, color: p.color, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 5 }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-brand" style={{ marginBottom: 16, display: "inline-flex" }}>Lifecycle-First Quality</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>
              From Spec to Production, Automatically
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ connects intent to coverage across your entire development lifecycle.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, #7856ff, #00e5d3, #c084fc, #fccd00)", opacity: 0.4, zIndex: 0 }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 1 }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ textAlign: "center", padding: "0 12px" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${s.color}18`, border: `2px solid ${s.color}60`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 18, fontWeight: 900, color: s.color, boxShadow: `0 0 20px ${s.color}20` }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#eeeef5", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(120,86,255,0.06) 0%, rgba(229,73,255,0.04) 100%)", borderTop: "1px solid rgba(120,86,255,0.2)", borderBottom: "1px solid rgba(120,86,255,0.2)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-number" style={{ fontSize: "clamp(2.75rem, 5vw, 3.75rem)", fontWeight: 900, lineHeight: 1, marginBottom: 10, color: s.color }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 14, color: "#8888a8", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "100px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>Built for your whole team</h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ is the first testing platform that genuinely works for engineers, QA, and business teams alike.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {PERSONAS.map((p) => (
              <div key={p.title} className="card-hover" style={{ padding: 28, background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 14, borderLeft: `4px solid ${p.color}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#eeeef5", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8888a8", marginBottom: 6 }}>
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
      <section style={{ padding: "80px 0", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="badge badge-cyan" style={{ marginBottom: 12, display: "inline-flex" }}>Full-Stack Coverage</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#eeeef5" }}>One platform. Every layer.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {TECH_TILES.map((t) => (
              <div key={t.label} style={{ padding: "7px 16px", background: "#13131a", border: `1px solid ${t.color}35`, borderRadius: 8, fontSize: 13, color: t.color, fontWeight: 600 }}>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: "100px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#fccd00"><path d="M10 1l2.39 6.26H19l-5.19 3.77 1.97 6.26L10 13.51l-5.78 3.78 1.97-6.26L1 7.26h6.61z" /></svg>
              ))}
            </div>
            <blockquote style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#eeeef5", lineHeight: 1.75, fontStyle: "italic", marginBottom: 28 }}>
              &ldquo;We&apos;ve been generating code 5x faster with AI tools. ACCELQ is the only reason our release quality hasn&apos;t degraded.
              It&apos;s the quality layer we didn&apos;t know we needed — and now can&apos;t live without.&rdquo;
            </blockquote>
            <p style={{ fontSize: 14, color: "#55556a" }}>— VP Engineering, Fortune 500 Financial Services</p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "#09090f", borderTop: "1px solid #2a2a3d" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(120,86,255,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, height: 1 }} className="neon-line" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#eeeef5", marginBottom: 16, letterSpacing: "-0.025em" }}>
            Ready to close the AI testing gap?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8888a8", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Join 50+ Fortune 100 companies shipping faster without breaking things.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 16, padding: "14px 36px" }}>
              Get a Demo
            </Link>
            <Link href="/pricing" className="btn-secondary" style={{ fontSize: 16, padding: "14px 36px" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
