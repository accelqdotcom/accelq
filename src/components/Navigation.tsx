"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NAV = [
  {
    label: "Platform",
    items: [
      {
        group: "AI-Powered Quality Platform",
        links: [
          { label: "Unified Test Automation", href: "/platform/unified", desc: "End-to-end, no-code automation across every layer" },
          { label: "ACCELQ LIVE", href: "/platform/live", desc: "Pre-built test assets for SAP, Salesforce & more" },
          { label: "Autopilot", href: "/platform/autopilot", desc: "Agentic AI across the full quality lifecycle" },
        ],
      },
    ],
  },
  {
    label: "Products",
    items: [
      {
        group: "Test Automation",
        links: [
          { label: "Automate Web", href: "/products/web", desc: "No-code web, desktop & cloud app automation" },
          { label: "Automate API", href: "/products/api", desc: "REST, SOAP, Kafka, microservices & more" },
          { label: "Automate Mobile", href: "/products/mobile", desc: "Real-device native & browser testing" },
          { label: "ACCELQ Manual", href: "/products/manual", desc: "Integrated test management & planning" },
        ],
      },
      {
        group: "Unified",
        links: [
          { label: "ACCELQ Unified", href: "/products/unified", desc: "Full-stack: Web + API + Mobile + Desktop + Manual" },
        ],
      },
    ],
  },
  {
    label: "Enterprise",
    items: [
      {
        group: "Advanced Capabilities",
        links: [
          { label: "Mainframe Automation", href: "/enterprise/mainframe" },
          { label: "ETL Test Automation", href: "/enterprise/etl" },
          { label: "Database Testing", href: "/enterprise/database" },
          { label: "API Virtualization", href: "/enterprise/api-virtualization" },
          { label: "Middleware Testing", href: "/enterprise/middleware" },
          { label: "Shift-Left Performance", href: "/enterprise/performance" },
        ],
      },
    ],
  },
  {
    label: "Cloud Apps & ERP",
    items: [
      {
        group: "Business Applications",
        links: [
          { label: "Salesforce", href: "/cloud-apps/salesforce" },
          { label: "SAP", href: "/cloud-apps/sap" },
          { label: "ServiceNow", href: "/cloud-apps/servicenow" },
          { label: "Oracle", href: "/cloud-apps/oracle" },
          { label: "Workday", href: "/cloud-apps/workday" },
          { label: "MS Dynamics", href: "/cloud-apps/ms-dynamics" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  {
    label: "Company",
    items: [
      {
        group: "About ACCELQ",
        links: [
          { label: "About Us", href: "/company/about", desc: "Our mission, team, and story" },
          { label: "Careers", href: "/company/careers", desc: "Join the team building quality for the AI era" },
          { label: "News", href: "/company/news", desc: "Latest announcements and press" },
          { label: "Contact Us", href: "/company/contact", desc: "Get in touch with our team" },
        ],
      },
    ],
  },
];

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13,17,23,0.95)"
          : "rgba(13,17,23,0.80)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #21262d" : "1px solid transparent",
      }}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#21ADC3" />
                <path d="M7 14L11 10L15 14L19 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="19" cy="20" r="3" fill="white" opacity="0.8" />
              </svg>
              <span className="font-bold text-lg tracking-tight text-white">ACCELQ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="relative">
                  <button
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] transition-colors"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.15s ease",
                      }}
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {openMenu === item.label && item.items && (
                    <div
                      className="nav-dropdown"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                      style={{ left: item.items[0]?.links?.length > 4 ? "-80px" : "0" }}
                    >
                      <div className="p-3">
                        {item.items.map((group) => (
                          <div key={group.group} className="mb-2 last:mb-0">
                            <p className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#6e7681]">
                              {group.group}
                            </p>
                            {group.links?.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-[#21262d] transition-colors group/link"
                                onClick={() => setOpenMenu(null)}
                              >
                                <div>
                                  <span className="block text-sm font-medium text-[#e6edf3] group-hover/link:text-[#58a6ff] transition-colors">
                                    {link.label}
                                  </span>
                                  {"desc" in link && link.desc && (
                                    <span className="block text-xs text-[#8b949e] mt-0.5">{link.desc}</span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.accelq.com"
              className="text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] transition-colors px-2"
            >
              Sign In
            </Link>
            <Link href="/demo" className="btn-primary text-sm py-2 px-4">
              Get a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M4 16L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden animate-slide-down"
          style={{
            background: "#0d1117",
            borderTop: "1px solid #21262d",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div className="container-xl py-4 space-y-1">
            {NAV.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] transition-colors"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}>
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openMenu === item.label && item.items && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {item.items.flatMap((g) =>
                        g.links?.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 rounded-lg text-sm text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#161b22] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            )}
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <Link href="/demo" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                Get a Demo
              </Link>
              <Link
                href="https://app.accelq.com"
                className="btn-secondary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
