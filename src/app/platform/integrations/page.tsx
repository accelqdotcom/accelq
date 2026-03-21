import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CI/CD Integrations — Plug ACCELQ Into Any Pipeline | ACCELQ",
  description: "Native integrations with GitHub Actions, Jenkins, GitLab CI, Azure DevOps, Jira, and more. Quality gates in every pipeline, zero configuration overhead.",
};

const CI_TOOLS = [
  { name: "GitHub Actions", color: "#e6edf3", desc: "Trigger test suites on push, PR, or merge. Quality gates block merges that break coverage thresholds." },
  { name: "Jenkins", color: "#d29922", desc: "Native ACCELQ plugin for Jenkins pipelines. Schedule, trigger, and report without shell scripts." },
  { name: "GitLab CI/CD", color: "#f85149", desc: "YAML-native integration. Parameterize test runs per environment, per branch, per team." },
  { name: "Azure DevOps", color: "#0078d4", desc: "Full ADO integration: pipeline tasks, test plan sync, work item linking, and dashboard widgets." },
  { name: "CircleCI", color: "#2ea043", desc: "Orb-based integration for CircleCI pipelines. Parallel test execution across ACCELQ projects." },
  { name: "Bamboo", color: "#58a6ff", desc: "Atlassian Bamboo integration with test result publishing and plan linkage." },
];

const DEV_TOOLS = [
  { name: "Jira", color: "#0052cc", desc: "Bi-directional sync: link tests to stories, auto-file defects on failure, coverage visibility in Jira." },
  { name: "GitHub", color: "#e6edf3", desc: "PR status checks, test result comments, and coverage reports surfaced directly in pull requests." },
  { name: "Slack", color: "#4a154b", desc: "Test result notifications with pass/fail breakdown, failure analysis, and drill-down links." },
  { name: "MS Teams", color: "#464eb8", desc: "Teams channel notifications for test runs, failure alerts, and weekly quality reports." },
  { name: "PagerDuty", color: "#06ac38", desc: "Auto-escalate critical test failures to on-call engineers. Integrate quality gates with incident management." },
  { name: "TestRail", color: "#8b949e", desc: "Sync test cases and results between ACCELQ and TestRail for teams with existing TestRail investments." },
];

export default function IntegrationsPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>CI/CD & Tool Integrations</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 820 }}>
            Quality in Every Pipeline,
            <br /><span className="text-gradient-teal">Every Tool, Every Team.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            ACCELQ plugs into the tools your teams already use. One integration, zero friction — quality gates in every CI/CD pipeline and test visibility everywhere decisions are made.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/unified" className="btn-secondary">Platform Overview</Link>
          </div>
        </div>
      </section>

      {/* CI/CD INTEGRATIONS */}
      <section style={{ padding: "80px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 12 }}>CI/CD pipelines</h2>
          <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 40 }}>Native integrations — not webhooks — with the pipelines that ship your software.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {CI_TOOLS.map((t) => (
              <div key={t.name} className="card-hover" style={{ padding: 24, background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>{t.name}</div>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEV TOOLS */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 12 }}>Developer & collaboration tools</h2>
          <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 40 }}>Bring quality visibility to where developers and managers make decisions.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {DEV_TOOLS.map((t) => (
              <div key={t.name} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>{t.name}</div>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API ACCESS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: 16, display: "inline-flex" }}>API & CLI</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16, lineHeight: 1.3 }}>
                Build your own integrations
              </h2>
              <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
                ACCELQ&apos;s REST API and CLI give you full programmatic control over test execution, results, and configuration. Build custom integrations with any tool in your stack.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "REST API for all platform operations",
                  "CLI for pipeline-native test triggering",
                  "Webhook support for event-driven workflows",
                  "OpenAPI spec published and versioned",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#8b949e" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" stroke="#58a6ff" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#58a6ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 16, fontFamily: "monospace", fontSize: 13 }}>
              <div style={{ color: "#6e7681", marginBottom: 12 }}># Trigger via ACCELQ CLI</div>
              <div style={{ color: "#2ea043", marginBottom: 4 }}>$ accelq run --suite &quot;Regression&quot; \</div>
              <div style={{ color: "#2ea043", marginBottom: 4 }}>    --env staging \</div>
              <div style={{ color: "#2ea043", marginBottom: 16 }}>    --fail-on threshold:90</div>
              <div style={{ color: "#e6edf3", marginBottom: 4 }}>Running 247 tests across 4 agents...</div>
              <div style={{ color: "#8b949e", marginBottom: 4 }}>✓ 241 passed</div>
              <div style={{ color: "#f85149", marginBottom: 4 }}>✗ 6 failed</div>
              <div style={{ color: "#8b949e", marginBottom: 16 }}>Coverage: 97.6% (&gt; 90% threshold)</div>
              <div style={{ color: "#2ea043" }}>Exit: 0 (threshold met)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Connect quality to your pipeline today</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See how ACCELQ integrates with your specific toolchain in a live demo.</p>
          <Link href="/demo" className="btn-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
}
