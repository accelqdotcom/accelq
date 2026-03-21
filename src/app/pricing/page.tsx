"use client";

import { useState } from "react";
import Link from "next/link";

const TIERS = [
  {
    name: "Starter",
    price: { monthly: "Contact us", annual: "Contact us" },
    tagline: "For growing QA teams",
    color: "#30363d",
    highlight: false,
    cta: "Start Free Trial",
    ctaHref: "/demo",
    features: [
      "Up to 10 users",
      "Web test automation",
      "API testing",
      "Jira & Azure DevOps integration",
      "CI/CD integration",
      "Basic reporting",
      "Community support",
    ],
  },
  {
    name: "Professional",
    price: { monthly: "Contact us", annual: "Contact us" },
    tagline: "For mature QA organizations",
    color: "#21adc3",
    highlight: true,
    badge: "Most Popular",
    cta: "Get a Demo",
    ctaHref: "/demo",
    features: [
      "Unlimited users",
      "Everything in Starter",
      "Mobile test automation",
      "AI self-healing tests",
      "ACCELQ Manual (test management)",
      "Advanced analytics & dashboards",
      "Priority email support",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    tagline: "For Fortune 500 scale",
    color: "#215bd2",
    highlight: false,
    cta: "Contact Sales",
    ctaHref: "/company/contact",
    features: [
      "Everything in Professional",
      "ACCELQ LIVE (SAP, Salesforce, ServiceNow, Oracle)",
      "Autopilot AI agents",
      "Mainframe automation",
      "SSO / SAML",
      "RBAC & enterprise governance",
      "Dedicated Customer Success Manager",
      "Enterprise SLA",
      "Custom integrations",
    ],
  },
];

const FEATURE_TABLE = [
  { category: "Automation", features: [
    { name: "Web Test Automation", starter: true, pro: true, enterprise: true },
    { name: "API Test Automation", starter: true, pro: true, enterprise: true },
    { name: "Mobile Test Automation", starter: false, pro: true, enterprise: true },
    { name: "Desktop Automation", starter: false, pro: true, enterprise: true },
    { name: "Mainframe / AS400", starter: false, pro: false, enterprise: true },
  ]},
  { category: "AI Features", features: [
    { name: "AI Self-Healing Tests", starter: false, pro: true, enterprise: true },
    { name: "Autopilot AI Agents", starter: false, pro: false, enterprise: true },
    { name: "ACCELQ Converse", starter: false, pro: false, enterprise: true },
    { name: "AI Root Cause Analysis", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Business Systems", features: [
    { name: "Salesforce Testing", starter: false, pro: false, enterprise: true },
    { name: "SAP Testing", starter: false, pro: false, enterprise: true },
    { name: "ServiceNow Testing", starter: false, pro: false, enterprise: true },
    { name: "Oracle Testing", starter: false, pro: false, enterprise: true },
    { name: "ACCELQ LIVE Assets", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Platform", features: [
    { name: "Test Management (Manual)", starter: false, pro: true, enterprise: true },
    { name: "CI/CD Integration", starter: true, pro: true, enterprise: true },
    { name: "Advanced Reporting", starter: false, pro: true, enterprise: true },
    { name: "SSO / SAML", starter: false, pro: false, enterprise: true },
    { name: "RBAC & Audit Trails", starter: false, pro: false, enterprise: true },
  ]},
];

const FAQS = [
  { q: "How is ACCELQ priced?", a: "ACCELQ is priced per user, per year with volume discounts available. Enterprise plans are custom-quoted based on platform scope and team size. Contact us for a tailored quote." },
  { q: "Is there a free trial?", a: "Yes — we offer a 14-day free trial with access to core web and API automation features. No credit card required. Contact us to get started." },
  { q: "Can I migrate from my existing tool?", a: "Yes. ACCELQ provides migration assistance from Selenium, UFT, Tosca, Tricentis, and most other automation platforms. Our team will help assess and plan your migration." },
  { q: "What support is included?", a: "Starter includes community support. Professional includes priority email support with a 24-hour SLA. Enterprise includes a dedicated Customer Success Manager and a guaranteed response SLA." },
  { q: "Do you offer nonprofit or startup discounts?", a: "Yes — we have programs for nonprofits, startups (under 3 years, Series A or earlier), and academic institutions. Contact us to discuss eligibility." },
];

export default function PricingPage() {
  const [annual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#0d1117" }}>

      {/* HERO */}
      <section style={{ padding: "80px 0 60px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(33,173,195,0.1) 0%, transparent 60%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <span className="badge badge-teal" style={{ marginBottom: 16, display: "inline-flex" }}>Simple, Scalable Pricing</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#e6edf3", marginBottom: 12 }}>
            Pricing That Scales With Your Team
          </h1>
          <p style={{ color: "#8b949e", maxWidth: 460, margin: "0 auto 32px", fontSize: "1.05rem", lineHeight: 1.65 }}>
            Start with one team. Expand to your enterprise. ACCELQ grows with you.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "start" }}>
            {TIERS.map((tier) => (
              <div key={tier.name} style={{ background: "#161b22", border: `1px solid ${tier.highlight ? tier.color : "#30363d"}`, borderRadius: 16, padding: 28, position: "relative", transform: tier.highlight ? "scale(1.02)" : "none", boxShadow: tier.highlight ? `0 0 40px ${tier.color}20` : "none" }}>
                {tier.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)" }}>
                    <span className="badge" style={{ background: tier.color, color: "#0d1117", borderColor: tier.color, fontSize: 11, fontWeight: 700 }}>{tier.badge}</span>
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#e6edf3", marginBottom: 4 }}>{tier.name}</div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{tier.tagline}</div>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: tier.color, marginBottom: 20 }}>
                  {annual ? tier.price.annual : tier.price.monthly}
                </div>
                <Link href={tier.ctaHref} className={tier.highlight ? "btn-primary" : "btn-secondary"} style={{ display: "block", textAlign: "center", marginBottom: 24, borderColor: tier.highlight ? tier.color : undefined }}>
                  {tier.cta}
                </Link>
                <div style={{ height: 1, background: "#30363d", marginBottom: 20 }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#8b949e", marginBottom: 10 }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5l4 4 7-7" stroke={tier.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE TABLE */}
      <section style={{ padding: "60px 0 80px", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Full feature comparison</h2>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: "1px solid #30363d" }}>
              <div style={{ padding: "12px 20px", fontSize: 12, color: "#6e7681" }}>Feature</div>
              {["Starter", "Professional", "Enterprise"].map((t) => (
                <div key={t} style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: "#e6edf3", textAlign: "center", borderLeft: "1px solid #30363d" }}>{t}</div>
              ))}
            </div>
            {FEATURE_TABLE.map((cat) => (
              <div key={cat.category}>
                <div style={{ padding: "8px 20px", background: "#0d1117", fontSize: 11, fontWeight: 700, color: "#6e7681", letterSpacing: "0.06em", textTransform: "uppercase" }}>{cat.category}</div>
                {cat.features.map((f) => (
                  <div key={f.name} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderTop: "1px solid #21262d" }}>
                    <div style={{ padding: "10px 20px", fontSize: 13, color: "#8b949e" }}>{f.name}</div>
                    {([f.starter, f.pro, f.enterprise] as boolean[]).map((has, i) => (
                      <div key={i} style={{ padding: "10px 16px", textAlign: "center", borderLeft: "1px solid #21262d" }}>
                        {has
                          ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 8l4 4 7-7" stroke="#2ea043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#484f58" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        }
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 0 80px", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Frequently asked questions</h2>
          <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: openFaq === i ? "10px 10px 0 0" : 10, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", color: "#e6edf3", fontSize: 14, fontWeight: 600, textAlign: "left" }}
                >
                  {faq.q}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.15s", flexShrink: 0 }}>
                    <path d="M4 6l4 4 4-4" stroke="#8b949e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#8b949e", lineHeight: 1.65, borderTop: "1px solid #21262d" }}>
                    <div style={{ paddingTop: 12 }}>{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Still have questions?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>Talk to our team. We&apos;ll help you find the right plan for your needs.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="btn-primary">Talk to Sales</Link>
            <Link href="/company/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
