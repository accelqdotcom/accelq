"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "@/components/Img";

/* ─── PLATFORM ─────────────────────────────────────────────── */
const PLATFORM_PRODUCTS = [
  {
    id: "unified", href: "/platform/unified",
    name: "Unified Test Automation",
    desc: "Full-stack no-code automation across Web, API, Mobile, Desktop & Mainframe",
    color: "#00b4ff",
    tags: ["Web", "API", "Mobile", "Desktop", "Mainframe"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="1" y="1" width="8" height="8" rx="2" stroke="#00b4ff" strokeWidth="1.5"/><rect x="13" y="1" width="8" height="8" rx="2" stroke="#00b4ff" strokeWidth="1.5"/><rect x="1" y="13" width="8" height="8" rx="2" stroke="#00b4ff" strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="#00b4ff" strokeWidth="1.5"/><line x1="11" y1="5" x2="13" y2="5" stroke="#00b4ff" strokeWidth="1" opacity=".5"/><line x1="5" y1="11" x2="5" y2="13" stroke="#00b4ff" strokeWidth="1" opacity=".5"/><line x1="17" y1="11" x2="17" y2="13" stroke="#00b4ff" strokeWidth="1" opacity=".5"/></svg>,
  },
  {
    id: "live", href: "/platform/live",
    name: "LIVE for ERP Apps",
    desc: "Business process automation for Salesforce, ServiceNow, Oracle, SAP & more",
    color: "#10b981",
    tags: ["Salesforce", "SAP", "Oracle", "ServiceNow"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#10b981" strokeWidth="1.5"/><circle cx="11" cy="11" r="4" stroke="#10b981" strokeWidth="1.5"/><line x1="11" y1="2" x2="11" y2="7" stroke="#10b981" strokeWidth="1" opacity=".4"/><line x1="11" y1="15" x2="11" y2="20" stroke="#10b981" strokeWidth="1" opacity=".4"/><line x1="2" y1="11" x2="7" y2="11" stroke="#10b981" strokeWidth="1" opacity=".4"/><line x1="15" y1="11" x2="20" y2="11" stroke="#10b981" strokeWidth="1" opacity=".4"/></svg>,
  },
  {
    id: "converse", href: "/platform/converse",
    name: "Comprehensive Test Management",
    desc: "Unified planning, execution, traceability & collaboration across the lifecycle",
    color: "#f59e0b",
    tags: ["Planning", "Traceability", "Collaboration"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="18" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.5"/><line x1="2" y1="8" x2="20" y2="8" stroke="#f59e0b" strokeWidth="1"/><line x1="6" y1="12" x2="16" y2="12" stroke="#f59e0b" strokeWidth="1" opacity=".5"/><line x1="6" y1="15" x2="13" y2="15" stroke="#f59e0b" strokeWidth="1" opacity=".5"/></svg>,
  },
  {
    id: "integrations", href: "/platform/integrations",
    name: "Analytics & Governance",
    desc: "Real-time quality intelligence, risk coverage & enterprise compliance visibility",
    color: "#a855f7",
    tags: ["Dashboards", "Risk", "Compliance"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><polyline points="2,18 7,12 11,14 15,6 20,3" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="12" r="1.5" fill="#a855f7" opacity=".6"/><circle cx="11" cy="14" r="1.5" fill="#a855f7" opacity=".6"/><circle cx="15" cy="6" r="1.5" fill="#a855f7" opacity=".6"/></svg>,
  },
];

/* ─── PRODUCTS ──────────────────────────────────────────────── */
const PRODUCT_ITEMS = [
  {
    href: "/products/web", name: "Automate Web", color: "#00b4ff",
    desc: "No-code web, desktop & cloud app automation",
    tags: ["Web", "Desktop", "Cloud"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="3" stroke="#00b4ff" strokeWidth="1.5"/><line x1="2" y1="9" x2="20" y2="9" stroke="#00b4ff" strokeWidth="1" opacity=".5"/><circle cx="5.5" cy="6.5" r="1" fill="#00b4ff" opacity=".6"/><circle cx="8.5" cy="6.5" r="1" fill="#00b4ff" opacity=".6"/></svg>,
  },
  {
    href: "/products/api", name: "Automate API", color: "#10b981",
    desc: "REST, SOAP, GraphQL, Kafka & microservices testing",
    tags: ["REST", "GraphQL", "Kafka"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M7 6l-4 5 4 5M15 6l4 5-4 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="4" x2="12" y2="18" stroke="#10b981" strokeWidth="1" opacity=".5"/></svg>,
  },
  {
    href: "/products/mobile", name: "Automate Mobile", color: "#f59e0b",
    desc: "Real-device native & browser testing for iOS & Android",
    tags: ["iOS", "Android", "Native"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="6" y="1" width="10" height="20" rx="3" stroke="#f59e0b" strokeWidth="1.5"/><circle cx="11" cy="17" r="1" fill="#f59e0b"/><line x1="8" y1="5" x2="14" y2="5" stroke="#f59e0b" strokeWidth="1" opacity=".5"/></svg>,
  },
  {
    href: "/products/manual", name: "ACCELQ Manual", color: "#a855f7",
    desc: "Integrated test management, planning & execution",
    tags: ["Test Plans", "Execution", "Reporting"],
    icon: <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="3" y="2" width="16" height="18" rx="2" stroke="#a855f7" strokeWidth="1.5"/><line x1="7" y1="7" x2="15" y2="7" stroke="#a855f7" strokeWidth="1" opacity=".6"/><line x1="7" y1="11" x2="15" y2="11" stroke="#a855f7" strokeWidth="1" opacity=".4"/><line x1="7" y1="15" x2="12" y2="15" stroke="#a855f7" strokeWidth="1" opacity=".4"/></svg>,
  },
];

/* ─── ENTERPRISE ────────────────────────────────────────────── */
const ENTERPRISE_ITEMS = [
  { href: "/enterprise/mainframe", name: "Mainframe Automation", color: "#00b4ff", desc: "COBOL, JCL, CICS — full mainframe coverage", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="18" height="18" rx="2" stroke="#00b4ff" strokeWidth="1.5"/><line x1="2" y1="8" x2="20" y2="8" stroke="#00b4ff" strokeWidth="1" opacity=".5"/><line x1="2" y1="14" x2="20" y2="14" stroke="#00b4ff" strokeWidth="1" opacity=".5"/><circle cx="6" cy="5" r="1" fill="#00b4ff" opacity=".6"/><circle cx="9" cy="5" r="1" fill="#00b4ff" opacity=".6"/></svg> },
  { href: "/enterprise/etl", name: "ETL Test Automation", color: "#10b981", desc: "Data pipeline validation at scale", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 4l3 2-3 2M5 9l-3 2 3 2" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/enterprise/database", name: "Database Testing", color: "#f59e0b", desc: "SQL, NoSQL & data integrity validation", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><ellipse cx="11" cy="6" rx="8" ry="3" stroke="#f59e0b" strokeWidth="1.5"/><path d="M3 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#f59e0b" strokeWidth="1.5"/><path d="M3 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#f59e0b" strokeWidth="1.5"/></svg> },
  { href: "/enterprise/api-virtualization", name: "API Virtualization", color: "#a855f7", desc: "Service mocking for continuous testing", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="4" stroke="#a855f7" strokeWidth="1.5"/><path d="M11 2v4M11 16v4M2 11h4M16 11h4" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" opacity=".5"/></svg> },
  { href: "/enterprise/middleware", name: "Middleware Testing", color: "#f87171", desc: "ESB, MQ & integration layer validation", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M4 11h14M11 4l7 7-7 7" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/enterprise/performance", name: "Shift-Left Performance", color: "#fccd00", desc: "Performance testing embedded in CI/CD", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#fccd00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

/* ─── CLOUD APPS ────────────────────────────────────────────── */
const CLOUD_APPS = [
  { href: "/cloud-apps/salesforce", name: "Salesforce", color: "#00a1e0", desc: "Sales Cloud, Service Cloud, CPQ & more", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M11 3C7.13 3 4 6.13 4 10c0 1.74.63 3.33 1.67 4.56L4 19h4.5l1.44-1.44C10.27 17.82 10.63 18 11 18c3.87 0 7-3.13 7-7s-3.13-8-7-8z" stroke="#00a1e0" strokeWidth="1.5"/></svg> },
  { href: "/cloud-apps/sap", name: "SAP", color: "#0070f2", desc: "S/4HANA, Fiori, BTP & legacy landscapes", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="12" rx="2" stroke="#0070f2" strokeWidth="1.5"/><path d="M3 9h16" stroke="#0070f2" strokeWidth="1" opacity=".5"/><path d="M8 14h6" stroke="#0070f2" strokeWidth="1" opacity=".5"/></svg> },
  { href: "/cloud-apps/servicenow", name: "ServiceNow", color: "#62d84e", desc: "ITSM, HRSD, CSM & platform workflows", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M11 3a8 8 0 1 0 0 16A8 8 0 0 0 11 3z" stroke="#62d84e" strokeWidth="1.5"/><path d="M8 11l2 2 4-4" stroke="#62d84e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/cloud-apps/oracle", name: "Oracle", color: "#e05a2b", desc: "Fusion, EBS & Cloud applications", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><ellipse cx="11" cy="11" rx="8" ry="5" stroke="#e05a2b" strokeWidth="1.5"/><line x1="3" y1="11" x2="19" y2="11" stroke="#e05a2b" strokeWidth="1" opacity=".5"/></svg> },
  { href: "/cloud-apps/workday", name: "Workday", color: "#00aadf", desc: "HCM, Finance & Adaptive Planning", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M11 4v7l5 3" stroke="#00aadf" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="8" stroke="#00aadf" strokeWidth="1.5"/></svg> },
  { href: "/cloud-apps/ms-dynamics", name: "MS Dynamics", color: "#742774", desc: "D365 Finance, Sales, Supply Chain", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#742774" strokeWidth="1.5"/><rect x="12" y="3" width="7" height="7" rx="1" stroke="#742774" strokeWidth="1.5"/><rect x="3" y="12" width="7" height="7" rx="1" stroke="#742774" strokeWidth="1.5"/><rect x="12" y="12" width="7" height="7" rx="1" stroke="#742774" strokeWidth="1.5"/></svg> },
];

/* ─── COMPANY ───────────────────────────────────────────────── */
const COMPANY_ITEMS = [
  { href: "/company/about", name: "About Us", color: "#00b4ff", desc: "Our mission, team, and story", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#00b4ff" strokeWidth="1.5"/><path d="M3 19c0-3.87 3.58-7 8-7s8 3.13 8 7" stroke="#00b4ff" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { href: "/company/careers", name: "Careers", color: "#10b981", desc: "Join the team building quality for the AI era", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="3" y="7" width="16" height="12" rx="2" stroke="#10b981" strokeWidth="1.5"/><path d="M8 7V5a3 3 0 0 1 6 0v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { href: "/forrester-wave", name: "Forrester Wave™ Leader", color: "#fccd00", desc: "Q4 2025 — Highest score in Current Offering", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><polygon points="11,2 13.5,8 20,8.5 15,13 17,19.5 11,16 5,19.5 7,13 2,8.5 8.5,8" stroke="#fccd00" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
  { href: "/why-accelq", name: "Why ACCELQ", color: "#a855f7", desc: "The independent business assurance layer", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#a855f7" strokeWidth="1.5"/><path d="M11 8v4M11 15v1" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { href: "/company/news", name: "News", color: "#f59e0b", desc: "Latest announcements and press", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="3" y="4" width="16" height="14" rx="2" stroke="#f59e0b" strokeWidth="1.5"/><line x1="7" y1="9" x2="15" y2="9" stroke="#f59e0b" strokeWidth="1" opacity=".6"/><line x1="7" y1="13" x2="12" y2="13" stroke="#f59e0b" strokeWidth="1" opacity=".4"/></svg> },
  { href: "/company/contact", name: "Contact Us", color: "#f87171", desc: "Get in touch with our team", icon: <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M4 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#f87171" strokeWidth="1.5"/><polyline points="2,6 11,13 20,6" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg> },
];

/* ─── MOBILE NAV FLAT LIST ──────────────────────────────────── */
const MOBILE_NAV = [
  { label: "Platform", children: [
    { label: "Autopilot", href: "/platform/autopilot" },
    { label: "Unified Test Automation", href: "/platform/unified" },
    { label: "LIVE for ERP Apps", href: "/platform/live" },
    { label: "Test Management", href: "/platform/converse" },
    { label: "Analytics & Governance", href: "/platform/integrations" },
  ]},
  { label: "Products", children: [
    { label: "Automate Web", href: "/products/web" },
    { label: "Automate API", href: "/products/api" },
    { label: "Automate Mobile", href: "/products/mobile" },
    { label: "ACCELQ Manual", href: "/products/manual" },
    { label: "ACCELQ Unified", href: "/products/unified" },
  ]},
  { label: "Enterprise", children: ENTERPRISE_ITEMS.map(i => ({ label: i.name, href: i.href })) },
  { label: "Cloud Apps & ERP", children: CLOUD_APPS.map(i => ({ label: i.name, href: i.href })) },
  { label: "Why ACCELQ", href: "/why-accelq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Company", children: COMPANY_ITEMS.map(i => ({ label: i.name, href: i.href })) },
];

/* ─── SHARED MEGA DROPDOWN SHELL ───────────────────────────── */
function MegaShell({ width, children }: { width: number; children: React.ReactNode }) {
  return (
    <div style={{
      width,
      background: "#13161f",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
      animation: "slideDown 0.15s ease-out",
    }}>
      {children}
    </div>
  );
}

function MegaHeader({ label }: { label: string }) {
  return (
    <div style={{ padding: "14px 22px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function MegaFooter({ left, right, rightHref }: { left: string; right: string; rightHref: string }) {
  return (
    <div style={{ padding: "12px 22px 14px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>{left}</span>
      <Link href={rightHref} style={{ fontSize: 12, fontWeight: 600, color: "#00b4ff", textDecoration: "none" }}>{right} →</Link>
    </div>
  );
}

function ProductRow({ item, color, hovered, onHover, onLeave }: {
  item: { href: string; name: string; desc: string; color: string; tags: string[]; icon: React.ReactNode };
  color?: string;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const c = color ?? item.color;
  return (
    <Link
      href={item.href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, padding: "13px 16px",
        borderRadius: 12, background: hovered ? `${c}09` : "transparent",
        textDecoration: "none", transition: "background 0.2s",
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: `${c}12`, border: `1px solid ${c}25`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.2s",
      }}>{item.icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: hovered ? c : "#e2e0d8", fontSize: 13.5, fontWeight: 600, marginBottom: 3, transition: "color 0.2s" }}>
          {item.name}
          <span style={{ marginLeft: 5, opacity: hovered ? 1 : 0, transition: "opacity 0.2s", fontSize: 12 }}>→</span>
        </div>
        <div style={{ color: "#6b6960", fontSize: 12, lineHeight: 1.45 }}>{item.desc}</div>
        <div style={{ display: "flex", gap: 5, marginTop: 6, flexWrap: "wrap" }}>
          {item.tags.map(tag => (
            <span key={tag} style={{ fontSize: 10, fontWeight: 500, color: c, background: `${c}10`, padding: "2px 7px", borderRadius: 4, opacity: hovered ? 1 : 0.55, transition: "opacity 0.2s" }}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CompactRow({ item, hovered, onHover, onLeave }: {
  item: { href: string; name: string; desc: string; color: string; icon: React.ReactNode };
  hovered: boolean; onHover: () => void; onLeave: () => void;
}) {
  return (
    <Link
      href={item.href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        display: "flex", alignItems: "center", gap: 12, padding: "11px 16px",
        borderRadius: 10, background: hovered ? `${item.color}09` : "transparent",
        textDecoration: "none", transition: "background 0.2s",
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        background: `${item.color}12`, border: `1px solid ${item.color}25`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.2s",
      }}>{item.icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: hovered ? item.color : "#e2e0d8", fontSize: 13, fontWeight: 600, transition: "color 0.2s" }}>
          {item.name}<span style={{ marginLeft: 4, opacity: hovered ? 1 : 0, transition: "opacity 0.2s", fontSize: 11 }}>→</span>
        </div>
        <div style={{ color: "#6b6960", fontSize: 11.5, lineHeight: 1.35, marginTop: 1 }}>{item.desc}</div>
      </div>
    </Link>
  );
}

/* ─── PLATFORM DROPDOWN ─────────────────────────────────────── */
function PlatformDropdown() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [apHovered, setApHovered] = useState(false);
  return (
    <MegaShell width={560}>
      <MegaHeader label="AI-Powered Quality Platform" />

      {/* Autopilot featured item */}
      <div style={{ padding: "10px 14px 6px" }}>
        <Link
          href="/platform/autopilot"
          onMouseEnter={() => setApHovered(true)}
          onMouseLeave={() => setApHovered(false)}
          style={{
            display: "block", position: "relative", borderRadius: 14,
            border: `1px solid ${apHovered ? "rgba(168,85,247,0.35)" : "rgba(255,255,255,0.07)"}`,
            background: apHovered ? "linear-gradient(135deg, rgba(168,85,247,0.07), rgba(0,180,255,0.04))" : "rgba(255,255,255,0.015)",
            padding: "14px 16px", textDecoration: "none", transition: "all 0.25s", overflow: "hidden",
          }}
        >
          {apHovered && (
            <div style={{
              position: "absolute", inset: -2, borderRadius: 16, pointerEvents: "none",
              background: "conic-gradient(from 0deg, rgba(168,85,247,0.2), rgba(0,180,255,0.2), rgba(16,185,129,0.15), rgba(245,158,11,0.12), rgba(168,85,247,0.2))",
              animation: "rotateConic 4s linear infinite", filter: "blur(6px)", opacity: 0.45,
            }} />
          )}
          <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(0,180,255,0.15))",
              border: "1px solid rgba(168,85,247,0.28)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transform: apHovered ? "scale(1.08)" : "scale(1)", transition: "transform 0.25s",
            }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3" stroke="url(#apg)" strokeWidth="1.5"/>
                <path d="M9 2V5M9 13V16M2 9H5M13 9H16" stroke="url(#apg)" strokeWidth="1" strokeLinecap="round" opacity=".6"/>
                <path d="M4.5 4.5L6.2 6.2M11.8 11.8L13.5 13.5M4.5 13.5L6.2 11.8M11.8 6.2L13.5 4.5" stroke="url(#apg)" strokeWidth=".8" strokeLinecap="round" opacity=".4"/>
                <defs><linearGradient id="apg" x1="2" y1="2" x2="16" y2="16"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#00b4ff"/></linearGradient></defs>
              </svg>
            </div>
            <div style={{
              fontSize: 14.5, fontWeight: 700,
              background: apHovered ? "linear-gradient(90deg, #c084fc, #60a5fa, #34d399)" : "linear-gradient(90deg, #c4c0b8, #c4c0b8)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundSize: apHovered ? "200% auto" : "100% auto",
              animation: apHovered ? "shimmer 3s linear infinite" : "none", transition: "all 0.25s",
            }}>Autopilot</div>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#a855f7", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: 5, letterSpacing: "0.04em" }}>AGENTIC AI</span>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 12, color: apHovered ? "#c084fc" : "rgba(255,255,255,0.2)", transition: "color 0.2s" }}>→</span>
          </div>
          <div style={{ position: "relative", zIndex: 1, fontSize: 12, color: "#6b6960", lineHeight: 1.45, paddingLeft: 42, marginTop: 4 }}>
            The intelligence layer. AI agents that discover, generate, execute & maintain tests autonomously across the entire lifecycle.
          </div>
        </Link>
      </div>

      {/* Platform products below Autopilot */}
      <div style={{ padding: "2px 14px 6px", position: "relative" }}>
        <div style={{ position: "absolute", left: 36, top: 0, bottom: 8, width: 1, background: "repeating-linear-gradient(to bottom, rgba(168,85,247,0.14) 0px, rgba(168,85,247,0.14) 3px, transparent 3px, transparent 7px)" }} />
        <div style={{ borderLeft: "1px solid rgba(168,85,247,0.07)", padding: "4px 0 4px 6px" }}>
          {PLATFORM_PRODUCTS.map(p => (
            <ProductRow key={p.id} item={p} hovered={hoveredProduct === p.id} onHover={() => setHoveredProduct(p.id)} onLeave={() => setHoveredProduct(null)} />
          ))}
        </div>
      </div>

      <MegaFooter left="All products unified on one cloud platform" right="Platform overview" rightHref="/platform/unified" />
    </MegaShell>
  );
}

/* ─── PRODUCTS DROPDOWN ─────────────────────────────────────── */
function ProductsDropdown() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [unifiedHovered, setUnifiedHovered] = useState(false);
  return (
    <MegaShell width={520}>
      <MegaHeader label="Test Automation" />
      <div style={{ padding: "8px 14px 4px" }}>
        {PRODUCT_ITEMS.map(p => (
          <ProductRow key={p.href} item={p} hovered={hovered === p.href} onHover={() => setHovered(p.href)} onLeave={() => setHovered(null)} />
        ))}
      </div>
      {/* Unified featured footer item */}
      <div style={{ padding: "4px 14px 8px" }}>
        <Link
          href="/products/unified"
          onMouseEnter={() => setUnifiedHovered(true)}
          onMouseLeave={() => setUnifiedHovered(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px", borderRadius: 12, textDecoration: "none",
            background: unifiedHovered ? "rgba(0,229,211,0.07)" : "rgba(0,229,211,0.03)",
            border: `1px solid ${unifiedHovered ? "rgba(0,229,211,0.25)" : "rgba(0,229,211,0.1)"}`,
            transition: "all 0.2s",
          }}
        >
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00e5d3", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 2 }}>ACCELQ Unified</span>
            <span style={{ fontSize: 12, color: "#6b6960" }}>Full-stack: Web + API + Mobile + Desktop + Manual</span>
          </div>
          <span style={{ fontSize: 12, color: unifiedHovered ? "#00e5d3" : "rgba(255,255,255,0.2)", transition: "color 0.2s" }}>→</span>
        </Link>
      </div>
      <MegaFooter left="One test. Every layer." right="All products" rightHref="/products/unified" />
    </MegaShell>
  );
}

/* ─── ENTERPRISE DROPDOWN ───────────────────────────────────── */
function EnterpriseDropdown() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <MegaShell width={560}>
      <MegaHeader label="Advanced Enterprise Automation" />
      <div style={{ padding: "8px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {ENTERPRISE_ITEMS.map(item => (
          <CompactRow key={item.href} item={item} hovered={hovered === item.href} onHover={() => setHovered(item.href)} onLeave={() => setHovered(null)} />
        ))}
      </div>
      <MegaFooter left="Enterprise depth. Zero compromise." right="Enterprise overview" rightHref="/enterprise/mainframe" />
    </MegaShell>
  );
}

/* ─── CLOUD APPS DROPDOWN ───────────────────────────────────── */
function CloudAppsDropdown() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [liveHovered, setLiveHovered] = useState(false);
  return (
    <MegaShell width={540}>
      <MegaHeader label="Business Application Testing" />
      {/* ACCELQ LIVE featured */}
      <div style={{ padding: "10px 14px 6px" }}>
        <Link
          href="/platform/live"
          onMouseEnter={() => setLiveHovered(true)}
          onMouseLeave={() => setLiveHovered(false)}
          style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
            borderRadius: 12, textDecoration: "none", transition: "all 0.2s",
            background: liveHovered ? "rgba(16,185,129,0.07)" : "rgba(16,185,129,0.03)",
            border: `1px solid ${liveHovered ? "rgba(16,185,129,0.3)" : "rgba(16,185,129,0.12)"}`,
          }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transform: liveHovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#10b981" strokeWidth="1.5"/><circle cx="11" cy="11" r="4" stroke="#10b981" strokeWidth="1.5"/><line x1="11" y1="2" x2="11" y2="7" stroke="#10b981" strokeWidth="1" opacity=".5"/><line x1="11" y1="15" x2="11" y2="20" stroke="#10b981" strokeWidth="1" opacity=".5"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: liveHovered ? "#10b981" : "#e2e0d8", transition: "color 0.2s", marginBottom: 2 }}>
              ACCELQ LIVE <span style={{ fontSize: 10, fontWeight: 600, background: "rgba(16,185,129,0.12)", color: "#10b981", padding: "1px 7px", borderRadius: 4, marginLeft: 4 }}>PRE-BUILT</span>
            </div>
            <div style={{ fontSize: 12, color: "#6b6960" }}>Pre-built, release-aligned test assets for packaged enterprise apps</div>
          </div>
          <span style={{ fontSize: 12, color: liveHovered ? "#10b981" : "rgba(255,255,255,0.18)", transition: "color 0.2s" }}>→</span>
        </Link>
      </div>
      <div style={{ padding: "4px 14px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {CLOUD_APPS.map(item => (
          <CompactRow key={item.href} item={item} hovered={hovered === item.href} onHover={() => setHovered(item.href)} onLeave={() => setHovered(null)} />
        ))}
      </div>
      <MegaFooter left="Pre-built. Release-aligned. Enterprise-ready." right="See all apps" rightHref="/cloud-apps/salesforce" />
    </MegaShell>
  );
}

/* ─── COMPANY DROPDOWN ──────────────────────────────────────── */
function CompanyDropdown() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <MegaShell width={400}>
      <MegaHeader label="About ACCELQ" />
      <div style={{ padding: "8px 14px 8px" }}>
        {COMPANY_ITEMS.map(item => (
          <CompactRow key={item.href} item={item} hovered={hovered === item.href} onHover={() => setHovered(item.href)} onLeave={() => setHovered(null)} />
        ))}
      </div>
      <MegaFooter left="Building quality for the AI era" right="Get a Demo" rightHref="/demo" />
    </MegaShell>
  );
}

/* ─── NAV ITEMS CONFIG ──────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Platform",        dropdown: "platform" },
  { label: "Products",        dropdown: "products" },
  { label: "Enterprise",      dropdown: "enterprise" },
  { label: "Cloud Apps & ERP",dropdown: "cloud" },
  { label: "Why ACCELQ",      href: "/why-accelq" },
  { label: "Pricing",         href: "/pricing" },
  { label: "Partners",        href: "/partners" },
  { label: "Company",         dropdown: "company" },
];

/* ─── MAIN NAVIGATION ───────────────────────────────────────── */
export default function Navigation() {
  const [openMenu, setOpenMenu]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const navRef  = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown  = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(key); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 140); };
  const cancelClose   = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(key); };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) { setOpenMenu(null); setMobileOpen(false); }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => { return () => { if (closeTimer.current) clearTimeout(closeTimer.current); }; }, []);

  function renderDropdown(key: string) {
    switch (key) {
      case "platform":  return <PlatformDropdown />;
      case "products":  return <ProductsDropdown />;
      case "enterprise":return <EnterpriseDropdown />;
      case "cloud":     return <CloudAppsDropdown />;
      case "company":   return <CompanyDropdown />;
      default: return null;
    }
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,15,0.97)" : "rgba(9,9,15,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #2a2a3d" : "1px solid transparent",
      }}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/assets/accelq-logo.svg" alt="ACCELQ" width={120} height={22} priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map(item => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-[#8888a8] hover:text-[#eeeef5] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="relative">
                  <button
                    onMouseEnter={() => openDropdown(item.dropdown!)}
                    onMouseLeave={scheduleClose}
                    onClick={() => setOpenMenu(openMenu === item.dropdown ? null : item.dropdown!)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-[#8888a8] hover:text-[#eeeef5] transition-colors"
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: openMenu === item.dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}>
                      <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </button>

                  {openMenu === item.dropdown && (
                    <div
                      className="absolute"
                      style={{ top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", zIndex: 200 }}
                      onMouseEnter={() => cancelClose(item.dropdown!)}
                      onMouseLeave={scheduleClose}
                    >
                      {/* invisible bridge */}
                      <div style={{ position: "absolute", top: -8, left: 0, right: 0, height: 8 }} />
                      {renderDropdown(item.dropdown!)}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://app.accelq.com" className="text-sm font-medium text-[#8888a8] hover:text-[#eeeef5] transition-colors px-2">
              Sign In
            </Link>
            <Link href="/demo" className="btn-primary text-sm py-2 px-4">
              Get a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#1c1c27] transition-colors"
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
        <div className="lg:hidden animate-slide-down" style={{ background: "#09090f", borderTop: "1px solid #2a2a3d", maxHeight: "80vh", overflowY: "auto" }}>
          <div className="container-xl py-4 space-y-1">
            {MOBILE_NAV.map(item =>
              item.href ? (
                <Link key={item.label} href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] transition-colors"
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: openMobile === item.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}>
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openMobile === item.label && item.children && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}
                          className="block px-3 py-2 rounded-lg text-sm text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#161b22] transition-colors"
                          onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <Link href="/demo" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>Get a Demo</Link>
              <Link href="https://app.accelq.com" className="btn-secondary justify-center" onClick={() => setMobileOpen(false)}>Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
