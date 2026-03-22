import Link from "next/link";

export const metadata = {
  title: "Why ACCELQ — The Independent Business Assurance Layer for AI-Native Development",
  description: "Eight problems defining quality in the AI coding era — and how ACCELQ's architecture was built for this moment before the moment arrived.",
};

const STATS = [
  { val: "41%", label: "of all new code is now AI-generated", src: "GitHub, 2026" },
  { val: "1.7×", label: "more issues in AI-authored PRs vs. human-written", src: "CodeRabbit, 2025" },
  { val: "76%", label: "of developers ship code they don't fully understand", src: "Stack Overflow, 2026" },
  { val: "39%", label: "increase in code churn from AI coding tools", src: "GitClear, 2026" },
  { val: "75%", label: "of tech leaders face severe AI-generated debt", src: "Forrester" },
  { val: "7.2%", label: "drop in delivery stability per 25% AI usage increase", src: "Google DORA, 2024" },
];

const VALUE_PROPS = [
  {
    word: "Independent",
    color: "#7856ff",
    desc: "When AI writes code and AI writes tests, you get circular validation — the same model, the same blind spots. ACCELQ's design-first, business-process-anchored approach creates a validation layer architecturally independent from the code generation pipeline.",
  },
  {
    word: "Business Assurance",
    color: "#00e5d3",
    desc: "In a world where code is disposable — regenerated from specs, rewritten by agents — the code itself is no longer the stable artifact. Business processes are. ACCELQ tests business processes end-to-end, assuring that the business gets what it needs.",
  },
  {
    word: "Layer",
    color: "#fccd00",
    desc: "Not a tool. A layer in the development stack. Just as observability became a layer, quality assurance must become a persistent, always-on membrane between AI-generated code and production.",
  },
  {
    word: "AI-Native",
    color: "#c084fc",
    desc: "Purpose-built for a world where code is AI-generated, specs drive development, and engineers direct agents rather than write implementations. The problems are fundamentally different — the solution must be too.",
  },
];

const DNA_CAPABILITIES = [
  { cap: "Application Universe (business process blueprint)", platform: true, autopilot: false },
  { cap: "Design-first modularity & reusability", platform: true, autopilot: false },
  { cap: "Referential integrity & change impact analysis", platform: true, autopilot: false },
  { cap: "Business-semantic data definitions", platform: true, autopilot: false },
  { cap: "No-code natural language test logic", platform: true, autopilot: false },
  { cap: "Cross-stack unified E2E (Web + API + Mobile + Desktop + Mainframe)", platform: true, autopilot: false },
  { cap: "Self-healing (semantic, not just XPath)", platform: true, autopilot: true },
  { cap: "Scenario discovery from live apps", platform: false, autopilot: true },
  { cap: "Jira-to-automation pipeline", platform: false, autopilot: true },
  { cap: "Logic Insights & optimization", platform: false, autopilot: true },
  { cap: "Predictive path analysis & auto test generation", platform: true, autopilot: true },
];

const PROBLEMS = [
  {
    n: "01",
    title: "The Illusion of Quality",
    subtitle: "AI-generated code looks correct but fails silently",
    gtm: "AI code passes its own tests. ACCELQ tests what the business actually needs.",
    color: "#7856ff",
    what: "AI-generated code is syntactically clean and passes superficial tests — often written by AI as well. But logic and correctness errors appear 1.7× more often in AI code. The code looks right but silently does the wrong thing. Teams see high coverage scores that mask low actual defect detection.",
    capabilities: [
      { tag: "Platform DNA", label: "Business process as the unit of validation", desc: "ACCELQ tests whether a customer can complete a loan application end-to-end — not whether a function returns the right type. The AI code might look perfect at the function level and still break the loan flow." },
      { tag: "Platform DNA", label: "Test generation from business semantics", desc: "Cases are generated from data definitions and business rules — not from code inspection. Coverage is driven by business logic, not by what the AI happened to implement." },
      { tag: "Platform DNA", label: "Predictive path analysis", desc: "Test scenarios are modeled from UI and data flows, surfacing paths AI-generated code never considered — edge cases the AI skipped because they weren't in its training data." },
    ],
  },
  {
    n: "02",
    title: "The Velocity / QA Mismatch",
    subtitle: "Code ships at 10x speed. QA is still at 1x.",
    gtm: "AI writes code at 10x. ACCELQ validates at 10x. No gap.",
    color: "#00e5d3",
    what: "AI coding tools write 41% of all new commercial code. Development velocity is up 3–5×. Yet QA teams still manually author test scripts and manually maintain them when the UI changes. The QA backlog compounds exponentially while dev capacity becomes infinite.",
    capabilities: [
      { tag: "Platform DNA", label: "No-code test automation", desc: "In the AI era, no-code isn't about empowering manual testers — it's about velocity parity. Tests built in hours to match specs shipped in hours. No programming syntax required." },
      { tag: "Autopilot", label: "Scenario discovery + Jira-to-automation", desc: "The Discovery Agent learns how the application works and generates test scenarios automatically. Direct parsing of Jira requirements generates automation in parallel with code generation — dev and QA happen simultaneously, not sequentially." },
      { tag: "Platform DNA", label: "Dynamic parallel execution", desc: "Dynamic job splitting across multiple agents delivers throughput that matches AI code generation. More tests run concurrently, closing the velocity gap structurally." },
    ],
  },
  {
    n: "03",
    title: "Context Blindness",
    subtitle: "AI generates code from statistics, not business understanding.",
    gtm: "AI doesn't understand your business. ACCELQ does. The Application Universe is your living context model.",
    color: "#fccd00",
    what: "65% of developers report context gaps as the primary source of poor AI code quality. AI doesn't know your HIPAA constraints, your atomic transaction requirements, or the three downstream services consuming that API contract. It can't encode what it doesn't understand.",
    capabilities: [
      { tag: "Platform DNA", label: "The Application Universe", desc: "A structured blueprint of the application capturing how it behaves from a business perspective — business processes, their relationships, and their rules. When AI changes a component, ACCELQ knows which business processes are affected because the relationships are encoded in the Universe, not the code." },
      { tag: "Platform DNA", label: "Business-semantic data definitions", desc: "Data isn't just input values — it's structured around business meaning. Tests validate business rules, not just data types. Consistency is driven by semantics, not syntax." },
      { tag: "Platform DNA", label: "Cross-stack unified validation", desc: "API and UI testing in the same flow. A correct API endpoint can still break the mobile flow. ACCELQ validates the entire chain: web, API, database, mobile, backend — in a single test." },
    ],
  },
  {
    n: "04",
    title: "Technical Debt at AI Speed",
    subtitle: "39% more code churn. 75% of leaders face severe debt by 2026.",
    gtm: "AI compounds tech debt at 10x speed. ACCELQ's design-first architecture is structurally immune to it.",
    color: "#f87171",
    what: "Code churn increased 39% in AI-heavy projects. An 8× increase in duplicated code blocks. Test maintenance was already 60–70% of effort — with AI-generated code changing faster, that burden becomes mathematically unsustainable. Every new feature generates more scripts that break when the next AI change arrives.",
    capabilities: [
      { tag: "Platform DNA", label: "Design-first modularity", desc: "A change in one component doesn't cascade into breaking hundreds of tests. Modularity contains the blast radius of change — structurally, not tactically." },
      { tag: "Autopilot", label: "Self-healing beyond XPath juggling", desc: "ACCELQ dynamically adapts using core semantic and functional attributes of elements — not fragile HTML locators. Cosmetic changes don't break tests; behavioral changes do." },
      { tag: "Platform DNA", label: "Scenario/case decoupling", desc: "Test scenarios (business intent) are stable. Test cases (data-driven permutations) regenerate dynamically. When AI rewrites the implementation, your business intent survives intact." },
    ],
  },
  {
    n: "05",
    title: "Circular Validation",
    subtitle: "AI tests AI code. Same model, same blind spots.",
    gtm: "AI testing AI code is a mirror — it only sees what it expects. ACCELQ is a window into what the business actually requires.",
    color: "#c084fc",
    what: "When the same AI writes both code and tests, the tests inherit the code's assumptions. High coverage scores mask low actual defect detection. The test suite becomes a mirror — validating what AI thinks is correct, not what is correct. This is the existential threat to testing in the AI era.",
    capabilities: [
      { tag: "Platform DNA", label: "Business process origin of test logic", desc: "ACCELQ's tests are authored from business process models and the Application Universe — not from code. Tests don't know what the AI wrote. They know what the business expects. A fundamentally different origin that can't share AI's code-generation blind spots." },
      { tag: "Autopilot", label: "Human intent, AI-assisted execution", desc: "Business intent is defined by humans who understand the domain. Autopilot generates and maintains the execution of that intent. AI assists in the how — humans define the what. This breaks the circular dependency." },
      { tag: "Platform DNA", label: "No-code as intellectual independence", desc: "A business analyst writing 'verify the customer receives a confirmation email within 2 minutes of order placement' is validating from a completely different frame of reference than the AI that generated the order processing microservice." },
    ],
  },
  {
    n: "06",
    title: "Comprehension Debt",
    subtitle: "Teams are shipping code nobody can mentally model.",
    gtm: "You don't need to understand the code to assure the business outcome. ACCELQ validates what the software does, in language your team already speaks.",
    color: "#22c55e",
    what: "76% of developers report generating code they don't fully understand. When code breaks in production, debugging becomes archaeology. A failed Selenium test pointing to line 847 of an AI-generated file tells you nothing about what went wrong at the business level.",
    capabilities: [
      { tag: "Platform DNA", label: "Business-process-level failure reporting", desc: "When an ACCELQ test fails, it fails at the business process level: 'the loan approval workflow broke at the credit check step.' Comprehensible regardless of whether anyone understands the underlying code." },
      { tag: "Platform DNA", label: "The Application Universe as comprehension anchor", desc: "Even when the codebase is opaque, the Universe provides a navigable map of what the application does — a visual blueprint that persists regardless of how the code was generated." },
      { tag: "Autopilot", label: "Logic Insights", desc: "Autopilot analyzes test logic and suggests optimizations, helping teams understand and improve their quality strategy. The testing layer itself becomes more comprehensible over time." },
    ],
  },
  {
    n: "07",
    title: "Architectural Drift",
    subtitle: "AI erodes your codebase's patterns one PR at a time.",
    gtm: "AI erodes your architecture one PR at a time. ACCELQ's Application Universe is the architectural north star your tests are anchored to.",
    color: "#fb923c",
    what: "AI-generated code is 'highly functional but systematically lacking in architectural judgment.' Each AI PR is locally correct but globally corrosive. Naming conventions drift. Design patterns erode. Tests that relied on consistent patterns start failing unpredictably — and teams waste time triaging false failures instead of finding real defects.",
    capabilities: [
      { tag: "Platform DNA", label: "Application Universe as architectural anchor", desc: "While the code drifts, the Application Universe remains stable. Tests anchored to the Universe continue to validate intended behavior even as the implementation drifts underneath." },
      { tag: "Platform DNA", label: "Referential integrity as drift detection", desc: "When AI-generated code breaks an expected relationship — an API contract changes without the downstream consumer being updated — ACCELQ's referential integrity flags it. Not after production fails, but before the next deployment." },
      { tag: "Platform DNA", label: "Self-healing absorbs cosmetic drift, surfaces behavioral drift", desc: "Cosmetic changes (renamed CSS classes, restructured DOM) are absorbed without breaking tests. Behavioral changes correctly fail — distinguishing real regression from superficial change." },
    ],
  },
  {
    n: "08",
    title: "The Last Mile Problem",
    subtitle: "Everything passes. Production fails.",
    gtm: "Tests pass. But does the business work? ACCELQ validates the complete business transaction — from browser to mainframe, under real-world conditions, continuously.",
    color: "#e879f9",
    what: "Everything compiles. Unit tests pass. Integration tests pass. Production fails. The illusion of quality, context blindness, architectural drift, and comprehension debt all converge at the last mile — the gap between 'all tests green' and 'customers are happy.' Traditional tools test slices, not flows.",
    capabilities: [
      { tag: "Platform DNA", label: "True end-to-end across the full stack", desc: "A single test traverses the complete business transaction: web UI → API → database → middleware → mainframe → back. Catches failures at integration boundaries — exactly where AI-generated code creates the most risk." },
      { tag: "Platform DNA", label: "Business process validation under realistic data", desc: "Test cases are generated for all permutations and combinations of business rules and data conditions — including the edge cases that AI-generated code never considered." },
      { tag: "Platform DNA", label: "Continuous execution in CI/CD + packaged app assurance", desc: "Every build, every commit, every AI-generated change is validated against full business flow. For Salesforce, SAP, ServiceNow, Oracle — pre-built assets close the gap between custom code and platform behavior." },
    ],
  },
];

const PRINCIPLES = [
  { title: "Design-first = Spec-first", desc: "The same principle driving spec-driven development is what ACCELQ has always done for test assets. Design before implementation. Structure before execution." },
  { title: "Business process as truth", desc: "When code is disposable, business processes are the stable artifact. ACCELQ has always tested processes, not pages." },
  { title: "No-code as velocity parity", desc: "When code generates in seconds, tests must too. No-code isn't a convenience — it's the only way to keep pace." },
  { title: "Referential integrity as governance", desc: "When AI introduces changes without understanding dependencies, you need a system that does. ACCELQ's asset relationships are the governance layer." },
  { title: "Unified stack as the assurance membrane", desc: "When AI changes web, API, mobile, and backend simultaneously, you need tests that traverse the entire chain in a single flow." },
];

export default function WhyACCELQ() {
  return (
    <div style={{ background: "#09090f" }}>

      {/* ── HERO ── */}
      <section className="hero-gradient grid-pattern" style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, left: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,86,255,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,73,255,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <span className="badge badge-brand">Why ACCELQ</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 auto 28px", maxWidth: 900 }}>
            <span style={{ color: "#eeeef5" }}>The world changed.</span>
            <br />
            <span className="text-gradient-brand">ACCELQ was already there.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)", color: "#8888a8", maxWidth: 680, margin: "0 auto 20px", lineHeight: 1.8 }}>
            Eight problem statements defining quality assurance in the copilot and agentic era — and how ACCELQ&apos;s architecture was built for this moment before the moment arrived.
          </p>
          <p style={{ fontSize: "1rem", color: "#c084fc", maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 500 }}>
            The independent business assurance layer for AI-native development.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "12px 28px" }}>
              Get a Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "12px 28px" }}>
              See the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ── AI CODE QUALITY CRISIS STATS ── */}
      <section className="section-light" style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", color: "#f87171", marginBottom: 16, display: "inline-flex" }}>The AI Code Quality Crisis — By the Numbers</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#0f0f1a", letterSpacing: "-0.02em" }}>
              This is the new baseline. Every organization using AI coding tools is living it.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {STATS.map((s) => (
              <div key={s.val} className="card-light" style={{ padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#f87171", letterSpacing: "-0.03em", marginBottom: 8 }}>{s.val}</div>
                <p style={{ fontSize: 14, color: "#0f0f1a", fontWeight: 600, lineHeight: 1.5, marginBottom: 6 }}>{s.label}</p>
                <p style={{ fontSize: 11, color: "#6b6b8a", fontStyle: "italic" }}>{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUE PROPOSITION ── */}
      <section style={{ padding: "100px 0", background: "#13131a", borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="badge badge-purple" style={{ marginBottom: 16, display: "inline-flex" }}>Core Value Proposition</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#eeeef5", letterSpacing: "-0.03em", marginBottom: 16 }}>
              ACCELQ is the{" "}
              <span className="text-gradient-brand">independent business assurance layer</span>
              {" "}for AI-native development
            </h2>
            <p style={{ color: "#8888a8", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
              Four words. Each one a deliberate architectural decision. Each one a direct answer to a specific failure mode of the AI coding era.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {VALUE_PROPS.map((v) => (
              <div key={v.word} className="card-hover" style={{ background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 16, padding: 32, borderTop: `3px solid ${v.color}` }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: v.color, marginBottom: 14 }}>{v.word}</div>
                <p style={{ fontSize: 14, color: "#8888a8", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM DNA vs AUTOPILOT ── */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ background: "rgba(120,86,255,0.08)", border: "1px solid rgba(120,86,255,0.2)", color: "#7856ff", marginBottom: 16, display: "inline-flex" }}>Strategic Insight</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, color: "#0f0f1a", letterSpacing: "-0.03em", marginBottom: 16 }}>
              Platform DNA vs. AI Accelerant
            </h2>
            <p style={{ color: "#4a4a6a", fontSize: "1.05rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.75 }}>
              The testing industry is bolting AI features onto architectures built for a different era. ACCELQ is different: <strong>six of the eight critical new-world problems are solved primarily by platform architecture built before AI-generated code was mainstream.</strong> Autopilot is the accelerant, not the foundation.
            </p>
          </div>

          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 0, border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
              {/* Header */}
              <div style={{ background: "#f8f7ff", padding: "12px 20px", fontSize: 11, fontWeight: 700, color: "#6b6b8a", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #e8e8f0" }}>Capability</div>
              <div style={{ background: "#7856ff", padding: "12px 20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid rgba(120,86,255,0.3)", whiteSpace: "nowrap" }}>Platform DNA</div>
              <div style={{ background: "#1a1a2e", padding: "12px 20px", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #2a2a3d", whiteSpace: "nowrap" }}>Autopilot</div>
              {/* Rows */}
              {DNA_CAPABILITIES.map((row, i) => (
                <>
                  <div key={`cap-${i}`} style={{ padding: "11px 20px", fontSize: 13, color: "#0f0f1a", borderBottom: i < DNA_CAPABILITIES.length - 1 ? "1px solid #f0f0f8" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>{row.cap}</div>
                  <div key={`plat-${i}`} style={{ padding: "11px 20px", textAlign: "center", borderBottom: i < DNA_CAPABILITIES.length - 1 ? "1px solid #f0f0f8" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa", borderLeft: "1px solid #e8e8f0" }}>
                    {row.platform ? <span style={{ color: "#7856ff", fontWeight: 700, fontSize: 16 }}>●</span> : <span style={{ color: "#d0d0e0", fontSize: 16 }}>○</span>}
                  </div>
                  <div key={`auto-${i}`} style={{ padding: "11px 20px", textAlign: "center", borderBottom: i < DNA_CAPABILITIES.length - 1 ? "1px solid #f0f0f8" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa", borderLeft: "1px solid #e8e8f0" }}>
                    {row.autopilot ? <span style={{ color: "#c084fc", fontWeight: 700, fontSize: 16 }}>●</span> : <span style={{ color: "#d0d0e0", fontSize: 16 }}>○</span>}
                  </div>
                </>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#6b6b8a", textAlign: "center", marginTop: 20, lineHeight: 1.7 }}>
              Without the underlying design-first, business-process-anchored architecture, Autopilot would be another GenAI wrapper — which is exactly what competitors are shipping.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8 PROBLEMS ── */}
      {PROBLEMS.map((p, idx) => {
        const isLight = idx % 2 === 0;
        return (
          <section
            key={p.n}
            id={`problem-${p.n}`}
            style={{
              padding: "100px 0",
              background: isLight ? "#09090f" : "#13131a",
              borderTop: "1px solid #2a2a3d",
            }}
          >
            <div className="container-xl">
              {/* Problem header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginBottom: 56 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: p.color, letterSpacing: "0.1em" }}>PROBLEM {p.n}</span>
                    <div style={{ height: 1, flex: 1, background: `${p.color}40` }} />
                  </div>
                  <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#eeeef5", lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: 12 }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "#55556a", fontStyle: "italic", marginBottom: 20 }}>{p.subtitle}</p>
                  <p style={{ fontSize: 15, color: "#8888a8", lineHeight: 1.8 }}>{p.what}</p>
                </div>
                {/* GTM Message */}
                <div style={{ background: `${p.color}0d`, border: `1px solid ${p.color}30`, borderRadius: 16, padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>GTM Message</div>
                  <p style={{ fontSize: "1.05rem", color: "#eeeef5", lineHeight: 1.7, fontWeight: 500, fontStyle: "italic", margin: 0 }}>
                    &ldquo;{p.gtm}&rdquo;
                  </p>
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#55556a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>How ACCELQ solves this</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                  {p.capabilities.map((c) => (
                    <div key={c.label} style={{ background: "#09090f", border: "1px solid #2a2a3d", borderRadius: 12, padding: 24, borderLeft: `3px solid ${p.color}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4,
                          background: c.tag === "Platform DNA" ? `${p.color}15` : "rgba(192,132,252,0.1)",
                          color: c.tag === "Platform DNA" ? p.color : "#c084fc",
                          border: `1px solid ${c.tag === "Platform DNA" ? `${p.color}30` : "rgba(192,132,252,0.25)"}`,
                          textTransform: "uppercase", letterSpacing: "0.06em",
                        }}>{c.tag}</span>
                      </div>
                      <h4 style={{ fontSize: 14, fontWeight: 700, color: "#eeeef5", marginBottom: 8 }}>{c.label}</h4>
                      <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── THE BOTTOM LINE ── */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge" style={{ background: "rgba(120,86,255,0.08)", border: "1px solid rgba(120,86,255,0.2)", color: "#7856ff", marginBottom: 16, display: "inline-flex" }}>The Bottom Line</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#0f0f1a", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Five principles. One platform. Built before the moment demanded them.
            </h2>
            <p style={{ color: "#4a4a6a", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.75 }}>
              The software industry built testing tools for a world where humans wrote code at human speed. That world is gone. ACCELQ was built on principles the industry is only now discovering it needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 60 }}>
            {PRINCIPLES.map((pr, i) => (
              <div key={pr.title} className="card-light" style={{ padding: 28 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(120,86,255,0.1)", border: "1px solid rgba(120,86,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 13, fontWeight: 800, color: "#7856ff" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f0f1a", marginBottom: 8 }}>{pr.title}</h3>
                <p style={{ fontSize: 13, color: "#4a4a6a", lineHeight: 1.75, margin: 0 }}>{pr.desc}</p>
              </div>
            ))}
          </div>

          {/* Close */}
          <div style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)", borderRadius: 20, padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(120,86,255,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#eeeef5", letterSpacing: "-0.025em", marginBottom: 16, lineHeight: 1.2 }}>
                Where AI creates,{" "}
                <span className="text-gradient-brand">ACCELQ assures.</span>
              </p>
              <p style={{ fontSize: "1rem", color: "#8888a8", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.75 }}>
                Not a better test tool. The assurance architecture the AI era demands — built from day one on the principles that make it possible.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/demo" className="btn-cta" style={{ fontSize: 15, padding: "12px 28px" }}>
                  Get a Demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <Link href="/platform/autopilot" className="btn-secondary" style={{ fontSize: 15, padding: "12px 28px" }}>
                  Explore the Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
