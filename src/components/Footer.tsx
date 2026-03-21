"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Platform: [
    { label: "Unified Test Automation", href: "/platform/unified" },
    { label: "ACCELQ LIVE", href: "/platform/live" },
    { label: "Autopilot (AI)", href: "/platform/autopilot" },
    { label: "CI/CD Integrations", href: "/platform/integrations" },
  ],
  Products: [
    { label: "Automate Web", href: "/products/web" },
    { label: "Automate API", href: "/products/api" },
    { label: "Automate Mobile", href: "/products/mobile" },
    { label: "ACCELQ Manual", href: "/products/manual" },
    { label: "ACCELQ Unified", href: "/products/unified" },
  ],
  Enterprise: [
    { label: "Salesforce", href: "/cloud-apps/salesforce" },
    { label: "SAP", href: "/cloud-apps/sap" },
    { label: "ServiceNow", href: "/cloud-apps/servicenow" },
    { label: "Oracle", href: "/cloud-apps/oracle" },
    { label: "Mainframe", href: "/enterprise/mainframe" },
    { label: "ETL Testing", href: "/enterprise/etl" },
  ],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/company/contact" },
    { label: "Get a Demo", href: "/demo" },
  ],
};

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/accelq",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/accelqtest",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@accelq",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#06060c",
        borderTop: "1px solid #2a2a3d",
      }}
    >
      {/* Main footer */}
      <div className="container-xl section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image src="/assets/accelq-logo.svg" alt="ACCELQ" width={110} height={20} />
            </Link>
            <p style={{ fontSize: 13, color: "#8888a8", lineHeight: 1.65, marginBottom: 20 }}>
              The AI-native quality platform for teams who ship at the speed of AI development.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ color: "#55556a", transition: "color 0.15s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#e6edf3")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#55556a")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#55556a", marginBottom: 12 }}>
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontSize: 13, color: "#8888a8", transition: "color 0.15s ease" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c084fc")}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#8888a8")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2a2a3d" }}>
        <div className="container-xl" style={{ padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#55556a" }}>
            © {new Date().getFullYear()} ACCELQ Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <Link
                key={t}
                href={`/legal/${t.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontSize: 12, color: "#55556a", transition: "color 0.15s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#8888a8")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#55556a")}
              >
                {t}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2ea043",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(46,160,67,0.6)",
              }}
            />
            <span style={{ fontSize: 12, color: "#55556a" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
