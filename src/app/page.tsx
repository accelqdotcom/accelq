import Link from "next/link";
import Image from "@/components/Img";

const BASE = process.env.NODE_ENV === "production" ? "/accelq" : "";

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

      {/* ── FORRESTER TOP SECTION ── */}
      <section style={{ padding: "80px 0 72px", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(120,86,255,0.12)" }}>
        <div style={{ position: "absolute", top: -60, left: "10%", width: 500, height: 400, background: "radial-gradient(circle, rgba(120,86,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: "5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(252,205,0,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

            {/* Left — wave chart */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(120,86,255,0.3)", boxShadow: "0 20px 60px rgba(120,86,255,0.15), 0 0 0 1px rgba(120,86,255,0.1)", height: 380 }}>
                <Image
                  src="/assets/forrester-wave-correct.png"
                  alt="Forrester Wave Q4 2025 — ACCELQ Leader"
                  width={680}
                  height={480}
                  style={{ width: "100%", height: "140%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
                />
              </div>
            </div>

            {/* Right — positioning headline */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(252,205,0,0.1)", border: "1px solid rgba(252,205,0,0.35)", borderRadius: 6, padding: "6px 14px", marginBottom: 24 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="7,1 9,5.5 14,5.5 10.5,8.5 12,13 7,10 2,13 3.5,8.5 0,5.5 5,5.5" fill="#fccd00" /></svg>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fccd00", letterSpacing: "0.07em", textTransform: "uppercase" }}>Forrester Wave™ Leader · Q4 2025</span>
              </div>

              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 20 }}>
                <span style={{ color: "#eeeef5", display: "block" }}>The Definitive Platform for</span>
                <span style={{ display: "block", background: "linear-gradient(90deg, #00e5d3 0%, #22d3ee 60%, #00b4d8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Agentic Quality Assurance
                </span>
              </h2>

              <blockquote style={{ borderLeft: "3px solid rgba(120,86,255,0.5)", paddingLeft: 18, marginBottom: 28 }}>
                <p style={{ fontSize: "0.95rem", color: "#8888a8", lineHeight: 1.8, fontStyle: "italic" }}>
                  &ldquo;ACCELQ&apos;s impressive vision and innovation help its strategy stand out among competitors, focusing on a fully autonomous QE platform with event-driven orchestration and explainable AI.&rdquo;
                </p>
                <cite style={{ fontSize: 11, color: "#55556a", fontStyle: "normal", display: "block", marginTop: 8 }}>— Forrester Research, Autonomous Testing Platforms, Q4 2025</cite>
              </blockquote>

              <div style={{ display: "flex", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
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

      {/* ── HERO ── */}
      <section className="hero-gradient grid-pattern" style={{ padding: "110px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: -100, left: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,229,211,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,86,255,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 300, background: "radial-gradient(ellipse, rgba(0,229,211,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>

          {/* Autopilot chat input UI */}
          <div style={{ maxWidth: 620, margin: "0 auto 44px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,211,0.08)" }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px", borderBottom: "1px solid #2a2a3d" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e5d3", boxShadow: "0 0 6px rgba(0,229,211,0.8)", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#00e5d3", letterSpacing: "0.08em" }}>AUT CONTEXT: ACME</span>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {["#55556a", "#55556a", "#55556a"].map((c, i) => <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ background: "#7856ff", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.08em" }}>AUTOPILOT</span>
              </div>
            </div>
            {/* Input row */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 18px", borderBottom: "1px solid #1c1c27" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,229,211,0.12)", border: "1px solid rgba(0,229,211,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#00e5d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span style={{ flex: 1, fontSize: 15, color: "#8888a8", textAlign: "left" }}>Generate a regression suite for my mobile checkout flow...</span>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#00e5d3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#09090f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            {/* Lifecycle tabs */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "10px 18px" }}>
              {[
                { label: "DISCOVERY", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#55556a" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#55556a" strokeWidth="2" strokeLinecap="round"/></svg> },
                { label: "GENERATION", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" stroke="#55556a" strokeWidth="2" strokeLinejoin="round"/></svg> },
                { label: "RECONCILIATION", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 4v5h5M20 20v-5h-5" stroke="#55556a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 9A9 9 0 0 0 5.5 5.5M4 15a9 9 0 0 0 14.5 3.5" stroke="#55556a" strokeWidth="2" strokeLinecap="round"/></svg> },
                { label: "OPTIMIZATION", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z" stroke="#55556a" strokeWidth="2" strokeLinejoin="round"/></svg> },
                { label: "EXECUTION", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polygon points="5,3 19,12 5,21" stroke="#55556a" strokeWidth="2" strokeLinejoin="round"/></svg> },
                { label: "INSIGHTS", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#55556a" strokeWidth="2" strokeLinecap="round"/></svg> },
              ].map((tab) => (
                <div key={tab.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  {tab.icon}
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#55556a", letterSpacing: "0.06em" }}>{tab.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <Link href="/platform/autopilot" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00e5d3", color: "#09090f", fontSize: 13, fontWeight: 800, padding: "13px 28px", borderRadius: 8, letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase" }}>
              Explore the Agentic Era
            </Link>
            <Link href="/demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#eeeef5", fontSize: 13, fontWeight: 700, padding: "13px 28px", borderRadius: 8, border: "1px solid #3d3d56", letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase" }}>
              Book a Demo
            </Link>
          </div>

          {/* Logo scroll */}
          <div style={{ marginBottom: 72 }}>
            <p style={{ fontSize: 11, color: "#3d3d56", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Trusted by global enterprises</p>
            <div className="logo-marquee-wrap">
              <div className="logo-marquee-track">
                {[
                  "client-anthem.svg", "client-frontier.svg", "client-intel.svg",
                  "client-intuit.svg", "client-pfizer.svg", "client-unitedairlines.svg",
                  "client-unitedhealth.svg", "client-wellsfargo.svg",
                  "client-anthem.svg", "client-frontier.svg", "client-intel.svg",
                  "client-intuit.svg", "client-pfizer.svg", "client-unitedairlines.svg",
                  "client-unitedhealth.svg", "client-wellsfargo.svg",
                ].map((logo, i) => (
                  <div key={i} style={{ padding: "0 36px", flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${BASE}/assets/logos/${logo}`}
                      alt={logo.replace("client-", "").replace(".svg", "")}
                      style={{ height: 26, width: "auto", display: "block", mixBlendMode: "screen", opacity: 0.55 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "left" }}>

            {/* Card 1: Lifecycle Governance */}
            <div style={{ background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, padding: 24, overflow: "hidden" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#7856ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Lifecycle Governance</div>
              <p style={{ fontSize: 12, color: "#55556a", lineHeight: 1.6, marginBottom: 20 }}>End-to-end lifecycle governance from coverage planning through release confidence</p>
              {/* Mini dashboard */}
              <div style={{ background: "#09090f", border: "1px solid #1c1c27", borderRadius: 10, padding: "14px 16px", marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#55556a", marginBottom: 10, letterSpacing: "0.06em" }}>COVERAGE</div>
                {[
                  { label: "AUT", val: 82, color: "#7856ff" },
                  { label: "API", val: 91, color: "#00e5d3" },
                  { label: "MAIL", val: 67, color: "#fccd00" },
                ].map((b) => (
                  <div key={b.label} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, color: "#8888a8" }}>{b.label}</span>
                      <span style={{ fontSize: 10, color: b.color, fontWeight: 700 }}>{b.val}%</span>
                    </div>
                    <div style={{ height: 4, background: "#1c1c27", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ width: `${b.val}%`, height: "100%", background: b.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#0a1f12", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "2px solid #22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#22c55e" }}>96</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#22c55e", letterSpacing: "0.06em" }}>Release: GO</div>
                  <div style={{ fontSize: 10, color: "#55556a" }}>96% coverage · Compliance cleared</div>
                </div>
              </div>
            </div>

            {/* Card 2: Multi Channel Automation */}
            <div style={{ background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#00e5d3", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Multi Channel Automation</div>
              <p style={{ fontSize: 12, color: "#55556a", lineHeight: 1.6, marginBottom: 24 }}>Unified platform for Enterprise stack across Web, Mobile, API, Desktop & Backend</p>
              {/* Tech icons */}
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
                {[
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00e5d3" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#00e5d3" strokeWidth="1.5"/></svg>, label: "Web" },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="3" stroke="#00e5d3" strokeWidth="1.5"/><circle cx="12" cy="17" r="1" fill="#00e5d3"/></svg>, label: "Mobile" },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="#00e5d3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "API" },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="#00e5d3" strokeWidth="1.5"/><path d="M8 22h8M12 18v4" stroke="#00e5d3" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: "Desktop" },
                ].map((t) => (
                  <div key={t.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(0,229,211,0.08)", border: "1px solid rgba(0,229,211,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {t.icon}
                    </div>
                    <span style={{ fontSize: 10, color: "#55556a", fontWeight: 600 }}>{t.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1c1c27", paddingTop: 16 }}>
                <p style={{ fontSize: 12, color: "#8888a8", textAlign: "center", margin: 0 }}>One test. One flow. Every technology in your stack.</p>
              </div>
            </div>

            {/* Card 3: Enterprise Stack Coverage */}
            <div style={{ background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#fccd00", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Enterprise Stack Coverage</div>
              <p style={{ fontSize: 12, color: "#55556a", lineHeight: 1.6, marginBottom: 20 }}>Revolutionary approach to Business Assurance in multi-cloud packaged app environment</p>
              {/* ACCELQ LIVE badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,229,211,0.08)", border: "1px solid rgba(0,229,211,0.2)", borderRadius: 6, padding: "4px 10px", marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e5d3", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#00e5d3", letterSpacing: "0.08em" }}>ACCELQ LIVE</span>
              </div>
              {/* Enterprise app logos as text */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                {[
                  { name: "Salesforce", color: "#00a1e0" },
                  { name: "Oracle", color: "#f80000" },
                  { name: "SAP", color: "#0070f2" },
                  { name: "ServiceNow", color: "#62d84e" },
                ].map((app) => (
                  <div key={app.name} style={{ padding: "4px 10px", background: `${app.color}12`, border: `1px solid ${app.color}35`, borderRadius: 5, fontSize: 11, fontWeight: 700, color: app.color }}>
                    {app.name}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1c1c27", paddingTop: 16 }}>
                <p style={{ fontSize: 12, color: "#8888a8", margin: 0 }}>Business processes that span systems, validated end-to-end</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── AUTOPILOT ECOSYSTEM ── */}
      <section style={{ padding: "96px 0", position: "relative", overflow: "hidden", borderTop: "1px solid #1c1c27" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ position: "relative" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#38bdf8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: "monospace" }}>System Architecture</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#eeeef5", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
              The Autopilot Ecosystem
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
              Designed as a unified architectural stack, Autopilot coordinates everything from deep AI foundation layers to external enterprise operational tools.
            </p>
          </div>

          {/* Stack */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860, margin: "0 auto" }}>

            {/* ── ROW 1: TARGET INTERFACES ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <div style={{ width: 180, flexShrink: 0, textAlign: "right" }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#8888a8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, fontFamily: "monospace" }}>Target Interfaces</div>
                <div style={{ fontSize: 10, color: "#3d3d56" }}>Cross-Platform Validation</div>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Card 1 */}
                <div style={{ background: "rgba(19,19,26,0.8)", border: "1px solid #2a2a3d", borderRadius: 12, padding: "20px 22px", transition: "border-color 0.2s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 3h20v14H2zM8 3v14M2 8h20" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 17l-3 4h16l-3-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>Omnichannel Output</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Drive execution natively across Web, Mobile, API, and Desktop environments.</p>
                </div>
                {/* Card 2 */}
                <div style={{ background: "rgba(19,19,26,0.8)", border: "1px solid #2a2a3d", borderRadius: 12, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#4ade80" strokeWidth="2"/><circle cx="9" cy="9" r="1.5" fill="#4ade80"/><circle cx="15" cy="9" r="1.5" fill="#4ade80"/><path d="M8 15c.8-1.2 2.2-2 4-2s3.2.8 4 2" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>LLM App Testing</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Validate next-gen Generative AI apps and Model Context Protocols (MCP).</p>
                </div>
              </div>
            </div>

            {/* Vertical pipe connector */}
            <div style={{ width: 2, height: 32, background: "linear-gradient(to bottom, rgba(56,189,248,0.5), transparent)", margin: "0 auto 0 calc(180px + 32px + 50%)" }} />

            {/* ── ROW 2: ORCHESTRATION ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <div style={{ width: 180, flexShrink: 0, textAlign: "right" }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#8888a8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, fontFamily: "monospace" }}>Orchestration</div>
                <div style={{ fontSize: 10, color: "#3d3d56" }}>Integration &amp; Routing</div>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, position: "relative" }}>
                {/* Horizontal line between cards */}
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(42,42,61,0.5)", zIndex: 0 }} />
                {/* Card 3 — Enterprise Agents with ACCELQ LIVE badge */}
                <div style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(56,189,248,0.35)", borderRadius: 12, padding: "20px 22px", position: "relative", zIndex: 1, boxShadow: "0 0 20px rgba(14,165,233,0.08)" }}>
                  <div style={{ position: "absolute", top: -10, right: -10, background: "#38bdf8", color: "#09090f", fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 99, letterSpacing: "0.08em", textTransform: "uppercase" }}>ACCELQ Live</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#38bdf8" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#38bdf8" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#38bdf8" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="#38bdf8" strokeWidth="2"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>Enterprise Agents</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Specialized metadata knowledge for Salesforce, MS Dynamics, Workday, and more.</p>
                </div>
                {/* Card 4 */}
                <div style={{ background: "rgba(19,19,26,0.8)", border: "1px solid #2a2a3d", borderRadius: 12, padding: "20px 22px", position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" stroke="#60a5fa" strokeWidth="2"/><circle cx="19" cy="12" r="2" stroke="#60a5fa" strokeWidth="2"/><circle cx="12" cy="5" r="2" stroke="#60a5fa" strokeWidth="2"/><path d="M7 12h5M14 12h3M12 7v3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>Universal MCP Layer</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Expose Autopilot capabilities securely to external workflows (Teams, Slack, GitHub).</p>
                </div>
              </div>
            </div>

            {/* Vertical pipe connector */}
            <div style={{ width: 2, height: 32, background: "linear-gradient(to bottom, rgba(56,189,248,0.5), transparent)", margin: "0 auto 0 calc(180px + 32px + 50%)" }} />

            {/* ── ROW 3: INTELLIGENCE CORE ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <div style={{ width: 180, flexShrink: 0, textAlign: "right" }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#c084fc", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, fontFamily: "monospace" }}>Intelligence Core</div>
                <div style={{ fontSize: 10, color: "rgba(192,132,252,0.4)" }}>Data &amp; Semantic Foundation</div>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Card 5 — bottom yellow accent */}
                <div style={{ background: "rgba(19,19,26,0.8)", border: "1px solid #2a2a3d", borderBottom: "2px solid rgba(250,204,21,0.45)", borderRadius: 12, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-7 4 4 3-5 4 4" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 21h18" stroke="#facc15" strokeWidth="2" strokeLinecap="round"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>Elastic Analytics</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Massive-scale historical data processing to detect flakiness and execution anomalies.</p>
                </div>
                {/* Card 6 — bottom pink accent */}
                <div style={{ background: "rgba(19,19,26,0.8)", border: "1px solid #2a2a3d", borderBottom: "2px solid rgba(236,72,153,0.45)", borderRadius: 12, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 8C17 11.866 14.314 15 11 15H7M7 15l3-3M7 15l3 3" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="17" cy="5" r="3" stroke="#f472b6" strokeWidth="2"/></svg>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", margin: 0 }}>Semantic Help</h3>
                  </div>
                  <p style={{ fontSize: 12, color: "#8888a8", lineHeight: 1.6, margin: 0 }}>Context-aware best-practices assistant for continuous user enablement and learning.</p>
                </div>
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
            <p style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)", color: "#eeeef5", lineHeight: 1.75, maxWidth: 760, margin: "0 auto" }}>
              The core problem: <strong style={{ color: "#c084fc" }}>AI that writes code cannot validate that code.</strong>{" "}
              It shares the same blind spots, the same assumptions, the same context. You need an <strong style={{ color: "#eeeef5" }}>independent validation layer</strong> — one that speaks business process, not just code syntax.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE NEW VALUE PROPOSITION ── */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(120,86,255,0.08)", border: "1px solid rgba(120,86,255,0.2)", borderRadius: 6, padding: "6px 16px", marginBottom: 20 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.5 3.5L11 5 8.5 7.5 9.2 11 6 9.3 2.8 11 3.5 7.5 1 5l3.5-.5z" fill="#7856ff" /></svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em", textTransform: "uppercase" }}>The New Value Proposition</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#0f0f1a", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
              From test automation tool<br />
              <span style={{ color: "#7856ff" }}>→ business assurance intelligence</span>
            </h2>
            <p style={{ color: "#4a4a6a", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
              The shift in AI-native development demands a completely different approach to quality. Here&apos;s what that looks like.
            </p>
          </div>

          {/* Layer 1: Intent Validation */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: "#7856ff", borderRadius: "14px 14px 0 0", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Layer 01</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Intent validation, not just code validation</h3>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", maxWidth: 320, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
                Does it do what the business needs — not just what AI wrote?
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#e8e8f0" }}>
              {[
                {
                  title: "Business process as the unit of truth",
                  desc: "Code is disposable — it can be regenerated from specs at any time. Business processes are stable. ACCELQ anchors validation to what the business intends, not what the code happens to do today.",
                  icon: "🏛",
                },
                {
                  title: "Independent validation layer",
                  desc: "Tests that run on the same AI that wrote the code share its blind spots. ACCELQ operates as a genuinely separate system — catching the gaps that AI coding tools are structurally unable to see.",
                  icon: "🔍",
                },
              ].map((c) => (
                <div key={c.title} className="card-light" style={{ padding: 32, borderRadius: 0, border: "none", boxShadow: "none" }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{c.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f0f1a", marginBottom: 10 }}>{c.title}</h4>
                  <p style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 2: Quality at Generation Speed */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: "#0f172a", borderRadius: 0, padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Layer 02</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Quality at generation speed</h3>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", maxWidth: 320, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
                No-code isn&apos;t a convenience — it&apos;s a survival requirement
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#e8e8f0" }}>
              {[
                {
                  title: "Design-first = spec-first",
                  desc: "Specification-driven development is what ACCELQ always applied to QA — design test intent before implementation, not after. In the AI era, this is the only model that scales: specs are stable, code is ephemeral.",
                  icon: "📐",
                  accent: "#00e5d3",
                },
                {
                  title: "Agentic quality, human judgment",
                  desc: "AI agents handle the speed — continuous discovery, generation, and self-healing. Humans handle correctness — approving release gates, validating business outcomes, setting risk thresholds. Both are essential.",
                  icon: "🤝",
                  accent: "#fccd00",
                },
              ].map((c) => (
                <div key={c.title} className="card-light" style={{ padding: 32, borderRadius: 0, border: "none", boxShadow: "none", borderTop: `3px solid ${c.accent}` }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{c.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f0f1a", marginBottom: 10 }}>{c.title}</h4>
                  <p style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 3: Continuous Assurance */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ background: "#1a3a2a", borderRadius: 0, padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Layer 03</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Continuous assurance, not just testing</h3>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", maxWidth: 320, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
                Always on, always validating, always learning
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, background: "#e8e8f0" }}>
              {[
                {
                  title: "Governance & auditability",
                  desc: "Full traceability of intent — from business requirement through test execution to outcome. Every decision is explainable, every result is attributable.",
                  icon: "📋",
                  accent: "#7856ff",
                },
                {
                  title: "Architectural guardrails",
                  desc: "Continuous validation prevents pattern erosion as AI-generated code accumulates. Quality gates embedded in every pipeline stage, not bolted on at the end.",
                  icon: "🛡",
                  accent: "#00e5d3",
                },
                {
                  title: "Risk intelligence",
                  desc: "Not everything needs testing equally. ACCELQ learns which areas carry the highest business risk and prioritizes coverage where it matters most — intelligently.",
                  icon: "🎯",
                  accent: "#fccd00",
                },
              ].map((c) => (
                <div key={c.title} className="card-light" style={{ padding: 28, borderRadius: 0, border: "none", boxShadow: "none", borderTop: `3px solid ${c.accent}` }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0f0f1a", marginBottom: 8 }}>{c.title}</h4>
                  <p style={{ fontSize: 13, color: "#4a4a6a", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: "0 0 14px 14px", background: "#e8e8f0", padding: 2 }}>
              <div style={{ borderRadius: "0 0 12px 12px", background: "#fff" }} />
            </div>
          </div>

          {/* Core value proposition */}
          <div style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)", borderRadius: 16, padding: "40px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(120,86,255,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Core Value Proposition</div>
              <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#eeeef5", lineHeight: 1.4, margin: "0 auto 24px", maxWidth: 700, letterSpacing: "-0.02em" }}>
                The independent business assurance layer<br />for AI-native development
              </p>
              <p style={{ fontSize: 14, color: "#8888a8", maxWidth: 540, margin: "0 auto 28px", lineHeight: 1.75 }}>
                Not a testing tool. Not a QA platform. A permanent quality infrastructure that evolves alongside your codebase — autonomously.
              </p>
              <Link href="/demo" className="btn-cta" style={{ fontSize: 14, padding: "12px 28px" }}>
                See it in action
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section style={{ padding: "100px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-cyan" style={{ marginBottom: 16, display: "inline-flex" }}>The Solution</span>
            <h2 className="section-title" style={{ color: "#eeeef5", marginBottom: 16 }}>
              One platform delivers all three layers
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto" }}>
              Intent validation, generation-speed quality, and continuous assurance — unified in a single AI-native platform your entire team can use without writing test code.
            </p>
          </div>

          {/* Products overview graphic */}
          <div style={{ maxWidth: 720, margin: "0 auto 48px", borderRadius: 16, overflow: "hidden", border: "1px solid #2a2a3d", background: "#09090f", padding: 8 }}>
            <Image
              src="/assets/hero-products.svg"
              alt="ACCELQ product channels — Web, API, Mobile, Manual"
              width={720}
              height={200}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
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

      {/* ── CONVERSE TEASER ── */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Chat UI */}
            <div style={{ background: "#0f0f1a", borderRadius: 18, overflow: "hidden", boxShadow: "0 24px 64px rgba(15,15,26,0.15)" }}>
              <div style={{ background: "#1c1c27", borderBottom: "1px solid #2a2a3d", padding: "12px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7856ff", boxShadow: "0 0 6px rgba(120,86,255,0.9)", display: "inline-block" }} />
                <span style={{ fontSize: 12, color: "#55556a" }}>ACCELQ Converse · Release: Jaguar v4.2</span>
              </div>
              <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { who: "You", msg: "What's our quality exposure for the Jaguar release?", right: true },
                  { who: "Converse", msg: "847 tests passed. 1 critical blocker in International Checkout logged 3h ago. Code churn score: HIGH. Recommend hold.", right: false, color: "#c084fc" },
                  { who: "You", msg: "Log it in Jira and alert #payments-dev in Slack.", right: true },
                  { who: "Converse", msg: "Done. JAGUAR-2341 created (P0). @payments-dev notified with full defect context and impact analysis.", right: false, color: "#c084fc" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: m.right ? "flex-end" : "flex-start" }}>
                    <div style={{ maxWidth: "80%", padding: "10px 14px", borderRadius: m.right ? "14px 14px 3px 14px" : "14px 14px 14px 3px", background: m.right ? "rgba(120,86,255,0.2)" : "#13131a", border: `1px solid ${m.right ? "rgba(120,86,255,0.35)" : "#2a2a3d"}` }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: m.color || "#7856ff", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>{m.who}</div>
                      <div style={{ fontSize: 12, color: "#eeeef5", lineHeight: 1.55 }}>{m.msg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 6, padding: "5px 12px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7856ff", display: "inline-block", boxShadow: "0 0 6px rgba(120,86,255,0.8)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7856ff", letterSpacing: "0.08em", textTransform: "uppercase" }}>New — ACCELQ Converse</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#0f0f1a", lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Command your entire quality lifecycle. By conversation.
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a6a", lineHeight: 1.8, marginBottom: 28 }}>
                Ask questions, trigger agent workflows, get go/no-go decisions, and orchestrate cross-tool actions — all through simple dialogue. Converse is the brain on top of Autopilot.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  "Strategic test planning via natural language",
                  "Impact analysis on any code change or release",
                  "Instant go/no-go release readiness decisions",
                  "Drives Jira, Slack, Teams, ServiceNow automatically",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#7856ff" strokeWidth="1.5" /><path d="M5 8l2.5 2.5L11 5.5" stroke="#7856ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontSize: 14, color: "#0f0f1a" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/platform/converse" className="btn-cta" style={{ fontSize: 14, padding: "12px 24px", display: "inline-flex" }}>
                Explore ACCELQ Converse
              </Link>
            </div>
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${s.color}18`, border: `2px solid ${s.color}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 15, fontWeight: 900, color: s.color, boxShadow: `0 0 16px ${s.color}20` }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#eeeef5", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ display: "none" }} />
                  )}
                </div>
              ))}
            </div>
            {/* Pipeline diagram */}
            <div style={{ background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 16, padding: 28 }}>
              {/* Top bar — live indicator */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #2a2a3d" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
                <span style={{ fontSize: 11, color: "#55556a", fontFamily: "monospace" }}>accelq · autopilot · e-commerce-platform · run #847</span>
              </div>
              {/* Pipeline stages */}
              {[
                { label: "Jira Story", sub: "PROJ-2341", color: "#7856ff", icon: "📋", status: "source" },
                { label: "Discover", sub: "12 risks found", color: "#7856ff", icon: "🔍", status: "done" },
                { label: "Generate", sub: "47 tests created", color: "#fccd00", icon: "⚡", status: "done" },
                { label: "Execute", sub: "parallel · 3 envs", color: "#00e5d3", icon: "▶", status: "running" },
                { label: "Self-Heal", sub: "2 auto-repaired", color: "#f87171", icon: "🔧", status: "done" },
                { label: "Ship", sub: "quality: PASS", color: "#22c55e", icon: "✓", status: "pass" },
              ].map((stage, i, arr) => (
                <div key={stage.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${stage.color}15`, border: `1.5px solid ${stage.color}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
                      {stage.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#eeeef5" }}>{stage.label}</div>
                      <div style={{ fontSize: 11, color: "#55556a", fontFamily: "monospace" }}>{stage.sub}</div>
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 5, background: stage.status === "running" ? "rgba(0,229,211,0.12)" : stage.status === "pass" ? "rgba(34,197,94,0.12)" : `${stage.color}12`, color: stage.status === "running" ? "#00e5d3" : stage.status === "pass" ? "#22c55e" : stage.color, border: `1px solid ${stage.status === "running" ? "rgba(0,229,211,0.3)" : stage.status === "pass" ? "rgba(34,197,94,0.3)" : `${stage.color}30`}` }}>
                      {stage.status === "running" ? "RUNNING" : stage.status === "pass" ? "PASS" : stage.status === "source" ? "INPUT" : "✓ DONE"}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ marginLeft: 17, width: 2, height: 8, background: `linear-gradient(${stage.color}, ${arr[i+1].color})`, opacity: 0.4, borderRadius: 1 }} />
                  )}
                </div>
              ))}
              {/* Bottom metric */}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #2a2a3d", display: "flex", gap: 20 }}>
                {[{ val: "4m 12s", label: "Total runtime" }, { val: "47/47", label: "Tests passed" }, { val: "94%", label: "Coverage" }].map((m) => (
                  <div key={m.label}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#22c55e" }}>{m.val}</div>
                    <div style={{ fontSize: 10, color: "#55556a" }}>{m.label}</div>
                  </div>
                ))}
              </div>
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
      <section className="section-light-blue" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="section-title" style={{ color: "#0f0f1a", marginBottom: 16 }}>Built for your whole team</h2>
            <p style={{ color: "#4a4a6a", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
              ACCELQ is the first testing platform that genuinely works for engineers, QA, and business teams alike.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {PERSONAS.map((p) => (
              <div key={p.title} className="card-light" style={{ padding: 28, borderLeft: `4px solid ${p.color}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f0f1a", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#4a4a6a", marginBottom: 6 }}>
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
            <p style={{ color: "#8888a8", fontSize: 14, marginTop: 10 }}>Integrates with your entire ecosystem — cloud, enterprise, and everything in between.</p>
          </div>
          {/* Platform coverage architecture diagram */}
          <div style={{ maxWidth: 860, margin: "0 auto 48px", background: "#13131a", border: "1px solid #2a2a3d", borderRadius: 16, padding: 32 }}>
            {/* ACCELQ platform label */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#55556a", letterSpacing: "0.12em", textTransform: "uppercase" }}>ACCELQ Unified Platform</span>
            </div>
            {/* Rows of coverage layers */}
            {[
              {
                label: "Frontend & Apps",
                color: "#7856ff",
                items: ["Web Apps", "Desktop Apps", "Mobile iOS", "Mobile Android", "PWA"],
              },
              {
                label: "APIs & Services",
                color: "#00e5d3",
                items: ["REST / HTTP", "GraphQL", "SOAP / WSDL", "gRPC", "WebSocket", "Kafka"],
              },
              {
                label: "Enterprise & ERP",
                color: "#fccd00",
                items: ["SAP Fiori / S4HANA", "Salesforce", "ServiceNow", "Oracle Fusion", "Workday", "MS Dynamics"],
              },
              {
                label: "Data & Backend",
                color: "#f87171",
                items: ["ETL Pipelines", "Databases", "Mainframe / AS400", "Middleware", "Email & PDF"],
              },
            ].map((row) => (
              <div key={row.label} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: row.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{row.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {row.items.map((item) => (
                    <div key={item} style={{ padding: "6px 14px", background: `${row.color}0d`, border: `1px solid ${row.color}30`, borderRadius: 7, fontSize: 12, color: row.color, fontWeight: 500 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Bottom — AI layer */}
            <div style={{ marginTop: 20, padding: "14px 20px", background: "linear-gradient(135deg, rgba(120,86,255,0.1), rgba(229,73,255,0.07))", border: "1px solid rgba(120,86,255,0.25)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#c084fc" }}>✦ Autopilot AI — Self-healing · Auto-generation · Coverage intelligence</span>
              <span style={{ fontSize: 11, color: "#55556a" }}>across all layers</span>
            </div>
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
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#fccd00"><path d="M10 1l2.39 6.26H19l-5.19 3.77 1.97 6.26L10 13.51l-5.78 3.78 1.97-6.26L1 7.26h6.61z" /></svg>
              ))}
            </div>
            <blockquote style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#0f0f1a", lineHeight: 1.75, fontStyle: "italic", marginBottom: 28 }}>
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
            Build the assurance layer your AI stack is missing
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#8888a8", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>
            50+ Fortune 100 companies already run ACCELQ as their independent quality infrastructure. See what continuous business assurance looks like for your team.
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
