import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automate Mobile — iOS & Android Test Automation | ACCELQ",
  description: "Native iOS and Android test automation without code. ACCELQ handles gesture interactions, device farms, and real-device testing for mobile apps.",
};

const FEATURES = [
  {
    title: "Native App Support",
    color: "#2ea043",
    desc: "iOS and Android native apps, hybrid apps, and mobile web — all covered with the same no-code builder and the same test management platform.",
  },
  {
    title: "Gesture Automation",
    color: "#21adc3",
    desc: "Swipe, pinch, scroll, long-press, multi-touch — ACCELQ captures complex gesture interactions that other tools miss.",
  },
  {
    title: "Real Device & Emulator",
    color: "#58a6ff",
    desc: "Run on physical devices via cloud device farms (BrowserStack, Sauce Labs) or local emulators/simulators. Your choice, same tests.",
  },
  {
    title: "Biometric Handling",
    color: "#a371f7",
    desc: "Face ID, Touch ID, and biometric prompts are handled automatically — no manual bypass scripts needed.",
  },
  {
    title: "Network Condition Testing",
    color: "#d29922",
    desc: "Simulate 3G, slow 4G, offline, and network interruptions. Validate your app behavior under real-world connectivity conditions.",
  },
  {
    title: "Deep Link & Push Testing",
    color: "#2ea043",
    desc: "Test deep links, push notification taps, and background-to-foreground transitions that define real mobile user journeys.",
  },
];

export default function AutomateMobilePage() {
  return (
    <div style={{ background: "#0d1117" }}>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }} className="hero-gradient grid-pattern" />
        <div className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-teal" style={{ marginBottom: 20, display: "inline-flex" }}>Mobile Test Automation</span>
          <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 auto 20px", maxWidth: 800 }}>
            Mobile Automation That Goes
            <br /><span className="text-gradient-teal">Beyond the Basics.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#8b949e", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            iOS and Android, native and hybrid, real devices and emulators. ACCELQ gives mobile teams the coverage they need without the Appium complexity they dread.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/demo" className="btn-primary">Get a Demo</Link>
            <Link href="/platform/unified" className="btn-secondary">Platform Overview</Link>
          </div>
        </div>
      </section>

      {/* PLATFORM COVERAGE */}
      <section style={{ padding: "60px 0", borderTop: "1px solid #21262d" }}>
        <div className="container-xl">
          <p style={{ textAlign: "center", fontSize: 13, color: "#6e7681", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Platform & device coverage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["iOS 16+", "Android 12+", "React Native", "Flutter", "Ionic / Cordova", "Mobile Web", "BrowserStack", "Sauce Labs", "AWS Device Farm"].map((p) => (
              <div key={p} style={{ padding: "8px 18px", background: "#161b22", border: "1px solid rgba(46,160,67,0.3)", borderRadius: 8, fontSize: 13, color: "#2ea043", fontWeight: 500 }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", textAlign: "center", marginBottom: 40 }}>Built for real mobile complexity</h2>
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

      {/* UNIFIED TESTING */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>One platform. Web, API, and mobile.</h2>
            <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 32 }}>
              Stop managing separate tools for web, API, and mobile testing. ACCELQ unifies all three on a single platform with shared test components, shared execution infrastructure, and a single source of quality truth.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { label: "Web", color: "#21adc3", href: "/products/web" },
                { label: "API", color: "#58a6ff", href: "/products/api" },
                { label: "Mobile", color: "#2ea043", href: "#" },
              ].map((t) => (
                <div key={t.label} style={{ padding: 20, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, borderTop: `3px solid ${t.color}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: t.color }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#161b22", borderTop: "1px solid #30363d", textAlign: "center" }}>
        <div className="container-xl">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Ready to ship better mobile apps?</h2>
          <p style={{ color: "#8b949e", marginBottom: 28 }}>See ACCELQ mobile automation on your app in a live 30-minute demo.</p>
          <Link href="/demo" className="btn-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
}
