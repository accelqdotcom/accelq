import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners — Build the Future of Quality Together",
  description: "Join the ACCELQ partner ecosystem. System integrators, technology partners, and resellers helping enterprises close the AI testing gap.",
};

const PARTNER_TYPES = [
  {
    color: "#58a6ff",
    title: "System Integrators",
    subtitle: "Embed ACCELQ in digital transformations",
    desc: "Deliver ACCELQ as part of SAP migrations, Salesforce implementations, ServiceNow deployments, and cloud modernization programs. Add a high-value quality layer to every engagement.",
    benefits: ["Revenue share on licenses", "Co-selling with ACCELQ sales team", "Technical enablement & certification", "Deal registration & protection"],
    examples: "For Accenture, Deloitte, Capgemini-style SIs",
  },
  {
    color: "#21adc3",
    title: "Technology Partners",
    subtitle: "Integrate ACCELQ with your platform",
    desc: "Connect ACCELQ to your CI/CD, APM, DevOps, or AI development platform. Joint GTM opportunities and co-marketing to reach the growing AI-quality market.",
    benefits: ["API access & sandbox environments", "Joint GTM & co-marketing", "Partner listing in marketplace", "Technical integration support"],
    examples: "For DevOps tools, AI coding platforms, observability vendors",
  },
  {
    color: "#a371f7",
    title: "Resellers & Distributors",
    subtitle: "Sell ACCELQ in your region",
    desc: "Carry ACCELQ in your portfolio and deliver it to your customer base. Regional coverage, vertical specialization, and full sales enablement support.",
    benefits: ["Competitive reseller margins", "Regional exclusivity options", "Full sales & marketing enablement", "Local language support resources"],
    examples: "For regional VARs, vertical specialists, managed service providers",
  },
];

const ALLIANCE_BADGES = [
  "Salesforce ISV Partner", "SAP Certified Integration", "ServiceNow Technology Partner",
  "GitHub Technology Partner", "Atlassian Marketplace", "Microsoft Azure Partner",
  "AWS Partner Network", "Google Cloud Partner",
];

export default function PartnersPage() {
  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-blue" style={{ marginBottom: 20, display: "inline-flex" }}>Partner Ecosystem</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 20, maxWidth: 760, margin: "0 auto 20px" }}>
            Build the Future of Quality Together
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Join a global network of SIs, ISVs, and technology partners delivering AI-powered quality engineering to enterprises worldwide.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/company/contact" className="btn-primary">Become a Partner</Link>
            <Link href="/company/contact" className="btn-secondary">Find a Partner</Link>
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>The AI testing market opportunity</h2>
            <p style={{ color: "#8b949e", lineHeight: 1.7 }}>
              AI coding tools are being adopted by enterprises at the fastest pace in developer tooling history. Every adoption creates a quality gap.
              ACCELQ partners are positioned at exactly this intersection — when customers realize they can write code faster but not test it, ACCELQ is the answer.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 32, textAlign: "center" }}>
              {[{ val: "30%", label: "YoY market growth" }, { val: "$22B", label: "Market size by 2026" }, { val: "75%", label: "Enterprises adopting AI coding by 2028" }].map((s) => (
                <div key={s.label}>
                  <div className="text-gradient-teal stat-number" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 4 }}>{s.val}</div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 48 }}>Find your partner track</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PARTNER_TYPES.map((type) => (
              <div key={type.title} className="card-border" style={{ padding: 32, borderLeft: `4px solid ${type.color}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: 11, color: type.color, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{type.subtitle}</div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>{type.title}</h3>
                    <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.65 }}>{type.desc}</p>
                    <p style={{ fontSize: 12, color: "#6e7681", marginTop: 8, fontStyle: "italic" }}>{type.examples}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Benefits</div>
                    {type.benefits.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8b949e", marginBottom: 8 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: type.color, flexShrink: 0 }} />
                        {b}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Link href="/company/contact" className="btn-secondary" style={{ borderColor: type.color, color: type.color }}>
                      Apply for this track
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIANCE BADGES */}
      <section style={{ padding: "60px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 12, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Technology Alliances</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {ALLIANCE_BADGES.map((b) => (
              <div key={b} style={{ padding: "8px 16px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, fontSize: 13, color: "#8b949e", fontWeight: 500 }}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Ready to partner?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Join a growing ecosystem of partners closing the AI testing gap for enterprises worldwide.</p>
          <Link href="/company/contact" className="btn-primary">Apply to Become a Partner</Link>
        </div>
      </section>

    </div>
  );
}
