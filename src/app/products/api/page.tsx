import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automate API — REST, GraphQL & SOAP Test Automation | ACCELQ",
  description: "Build, chain, and validate API tests without code. ACCELQ covers REST, GraphQL, SOAP, and gRPC — with built-in contract testing and schema validation.",
};

const FEATURES = [
  {
    title: "No-Code API Builder",
    color: "#58a6ff",
    desc: "Import OpenAPI/Swagger specs or point ACCELQ at any endpoint. Build complex API sequences with business-context naming — not raw HTTP calls.",
  },
  {
    title: "Chained API Flows",
    color: "#21adc3",
    desc: "Extract response tokens, IDs, and values from one API call and inject them into the next. Test end-to-end API workflows that mirror real user journeys.",
  },
  {
    title: "Schema & Contract Validation",
    color: "#a371f7",
    desc: "Assert on response structure, not just values. Catch breaking API changes before they affect downstream consumers.",
  },
  {
    title: "Auth Handling",
    color: "#2ea043",
    desc: "OAuth 2.0, JWT, API keys, Basic Auth, mTLS — configure once, reuse across your entire test suite.",
  },
  {
    title: "GraphQL Support",
    color: "#d29922",
    desc: "Write GraphQL queries and mutations visually. Validate nested response structures with precision.",
  },
  {
    title: "API + UI in One Suite",
    color: "#58a6ff",
    desc: "Combine API setup steps with UI test flows. Seed data via API, validate via UI, teardown via API — all in a single test.",
  },
];

export default function AutomateAPIPage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>API Test Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            API Testing With the Depth
            <br /><span className="text-gradient-blue">Your Backend Deserves.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            REST, GraphQL, SOAP, gRPC — test every layer of your API surface without writing a line of code. From individual endpoints to complex orchestration flows.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/unified" className="btn-secondary">Platform Overview</Link>
          </div>
        </div>
      </section>

      {/* PROTOCOL COVERAGE */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 13, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Protocol coverage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["REST / HTTP", "GraphQL", "SOAP / WSDL", "gRPC", "WebSocket", "OpenAPI 3.x", "Swagger 2.x", "JSON Schema"].map((p) => (
              <div key={p} style={{ padding: "8px 18px", background: "#161b22", border: "1px solid rgba(88,166,255,0.3)", borderRadius: 8, fontSize: 13, color: "#58a6ff", fontWeight: 500 }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Complete API test automation</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="card-hover" style={{ padding: 24, background: "#0d1117", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${f.color}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LAYER */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>Autopilot for APIs</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16, lineHeight: 1.3 }}>
              AI-generated API tests from your spec
            </h2>
            <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 20 }}>
              Import an OpenAPI spec and let Autopilot generate a complete test suite — happy paths, edge cases, and negative scenarios. Review and approve, then run.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Generates test cases from OpenAPI/Swagger automatically",
                "Identifies missing validations in existing test suites",
                "Suggests data permutations for edge case coverage",
                "Flags schema drift between spec and implementation",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#8b949e" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7" stroke="#21adc3" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="#21adc3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: 28, background: "#161b22", border: "1px solid #30363d", borderRadius: 16 }}>
            <div style={{ fontFamily: "monospace", fontSize: 13 }}>
              <div style={{ color: "#6e7681", marginBottom: 12 }}># Autopilot analyzing openapi.yaml</div>
              <div style={{ color: "#8b949e", marginBottom: 8 }}>Endpoints discovered: <span style={{ color: "#e6edf3" }}>47</span></div>
              <div style={{ color: "#8b949e", marginBottom: 8 }}>Tests generated: <span style={{ color: "#2ea043" }}>183</span></div>
              <div style={{ color: "#8b949e", marginBottom: 8 }}>Coverage: <span style={{ color: "#21adc3" }}>Happy path, edge cases, auth</span></div>
              <div style={{ color: "#8b949e", marginBottom: 16 }}>Schema drift detected: <span style={{ color: "#f85149" }}>2 fields</span></div>
              <div style={{ color: "#6e7681", marginBottom: 4 }}>POST /api/orders → 201 ✓</div>
              <div style={{ color: "#6e7681", marginBottom: 4 }}>POST /api/orders → 400 (missing body) ✓</div>
              <div style={{ color: "#6e7681", marginBottom: 4 }}>POST /api/orders → 401 (no auth) ✓</div>
              <div style={{ color: "#6e7681" }}>GET /api/orders/:id → 404 ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Ship APIs with confidence</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See how ACCELQ covers your entire API surface in a 30-minute demo.</p>
          <Link href="/demo" className="btn-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
}
