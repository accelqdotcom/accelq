"use client";
import { useEffect } from "react";
import Link from "next/link";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap');

.aq-about {
  font-family: 'DM Sans', sans-serif;
  color: #0a0a0a;
  background: #fafafa;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.aq-about * { box-sizing: border-box; }
.aq-about .ab-container { max-width: 1200px; margin: 0 auto; padding: 0 clamp(24px, 5vw, 80px); }

/* HERO */
.aq-about .ab-hero {
  min-height: 100vh; display: flex; flex-direction: column; justify-content: center;
  position: relative; background: #0a0a0a; color: #fafafa; overflow: hidden;
}
.aq-about .ab-hero::before {
  content: ''; position: absolute; top: -40%; right: -20%;
  width: 80vw; height: 80vw; max-width: 900px; max-height: 900px;
  background: radial-gradient(circle, rgba(0,200,83,0.15) 0%, transparent 70%);
  pointer-events: none; animation: abHeroGlow 8s ease-in-out infinite alternate;
}
@keyframes abHeroGlow {
  0% { transform: translate(0,0) scale(1); opacity: 0.6; }
  100% { transform: translate(-40px,60px) scale(1.15); opacity: 1; }
}
.aq-about .ab-hero-inner {
  position: relative; z-index: 1;
  padding: 160px clamp(24px,5vw,80px) clamp(80px,10vw,140px);
  max-width: 1200px; margin: 0 auto; width: 100%;
}
.aq-about .ab-hero-label {
  font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #00c853; margin-bottom: 32px; font-weight: 600;
  opacity: 0; animation: abFadeUp 0.8s 0.2s forwards;
}
.aq-about .ab-hero h1 {
  font-family: 'Instrument Serif', serif; font-weight: 400;
  font-size: clamp(2.8rem, 6vw, 5.5rem); line-height: 1.1;
  max-width: 900px; margin-bottom: 36px;
  opacity: 0; animation: abFadeUp 0.8s 0.4s forwards;
}
.aq-about .ab-hero h1 em { font-style: italic; color: #00c853; }
.aq-about .ab-hero-sub {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem); color: rgba(255,255,255,0.6);
  max-width: 600px; line-height: 1.7;
  opacity: 0; animation: abFadeUp 0.8s 0.6s forwards;
}
.aq-about .ab-hero-stats {
  display: flex; gap: 48px; margin-top: 64px; flex-wrap: wrap;
  opacity: 0; animation: abFadeUp 0.8s 0.8s forwards;
}
.aq-about .ab-stat-num {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2.4rem, 4vw, 3.6rem); line-height: 1; color: #fafafa;
}
.aq-about .ab-stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.45); margin-top: 8px; }
@keyframes abFadeUp {
  from { opacity:0; transform: translateY(24px); }
  to { opacity:1; transform: translateY(0); }
}

/* BELIEF */
.aq-about .ab-belief {
  padding: clamp(56px,8vw,100px) 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.aq-about .ab-belief-inner { max-width: 760px; margin: 0 auto; text-align: center; }
.aq-about .ab-belief-statement {
  font-family: 'Instrument Serif', serif; font-weight: 400;
  font-size: clamp(1.5rem, 2.6vw, 2.2rem); line-height: 1.45; color: #0a0a0a;
}
.aq-about .ab-belief-statement em { font-style: italic; color: #00a844; }
.aq-about .ab-belief-attr {
  margin-top: 28px; display: flex; align-items: center; justify-content: center; gap: 14px;
}
.aq-about .ab-attr-line { width: 28px; height: 1px; background: #00c853; }
.aq-about .ab-attr-text { font-size: 0.82rem; color: #6b6b6b; line-height: 1.5; text-align: left; }
.aq-about .ab-attr-name { font-weight: 600; color: #0a0a0a; }

/* LEADERSHIP */
.aq-about .ab-leadership { padding: 56px 0 64px; }
.aq-about .ab-leadership-label {
  font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: #6b6b6b; font-weight: 600; margin-bottom: 28px; text-align: center;
}
.aq-about .ab-leadership-row { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.aq-about .ab-leader-card {
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  text-decoration: none; color: #0a0a0a; transition: transform 0.2s; width: 130px;
}
.aq-about .ab-leader-card:hover { transform: translateY(-3px); }
.aq-about .ab-leader-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.85);
  letter-spacing: 0.04em; position: relative; overflow: hidden;
}
.aq-about .ab-leader-avatar::after {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.08); transition: border-color 0.2s;
}
.aq-about .ab-leader-card:hover .ab-leader-avatar::after { border-color: #00c853; }
.aq-about .ab-leader-name { font-size: 0.82rem; font-weight: 600; text-align: center; line-height: 1.3; }
.aq-about .ab-leader-title { font-size: 0.72rem; color: #6b6b6b; text-align: center; line-height: 1.35; }
.aq-about .ab-leader-li { width: 16px; height: 16px; opacity: 0; transition: opacity 0.2s; fill: #6b6b6b; }
.aq-about .ab-leader-card:hover .ab-leader-li { opacity: 1; }

/* SECTION SHARED */
.aq-about .ab-section-label {
  font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #00a844; font-weight: 600; margin-bottom: 16px;
}
.aq-about .ab-section-title {
  font-family: 'Instrument Serif', serif; font-weight: 400;
  font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.15;
}
.aq-about .ab-section-title em { font-style: italic; }

/* PIONEERS */
.aq-about .ab-pioneers { padding: clamp(80px,10vw,140px) 0; background: #f3f1ee; }
.aq-about .ab-pioneers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.aq-about .ab-pioneers-left { position: sticky; top: 120px; }
.aq-about .ab-pioneers-left .ab-section-title { margin-bottom: 24px; }
.aq-about .ab-pioneers-desc { font-size: 1.05rem; color: #6b6b6b; line-height: 1.75; max-width: 460px; }
.aq-about .ab-timeline { display: flex; flex-direction: column; }
.aq-about .ab-tl-item { display: grid; grid-template-columns: 60px 1fr; position: relative; }
.aq-about .ab-tl-line { display: flex; flex-direction: column; align-items: center; padding-top: 6px; }
.aq-about .ab-tl-dot { width: 12px; height: 12px; border-radius: 50%; background: #00c853; flex-shrink: 0; z-index: 1; }
.aq-about .ab-tl-connector { width: 1px; flex: 1; background: rgba(0,0,0,0.1); }
.aq-about .ab-tl-item:last-child .ab-tl-connector { display: none; }
.aq-about .ab-tl-content { padding-bottom: 40px; }
.aq-about .ab-tl-era { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: #00a844; font-weight: 600; margin-bottom: 6px; }
.aq-about .ab-tl-title { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; line-height: 1.3; }
.aq-about .ab-tl-desc { font-size: 0.88rem; color: #6b6b6b; line-height: 1.6; }
.aq-about .ab-tl-item.ab-now .ab-tl-dot { width: 16px; height: 16px; box-shadow: 0 0 0 6px rgba(0,200,83,0.15); animation: abNowPulse 2s ease-in-out infinite; }
@keyframes abNowPulse { 0%,100% { box-shadow: 0 0 0 6px rgba(0,200,83,0.1); } 50% { box-shadow: 0 0 0 12px rgba(0,200,83,0.05); } }

/* FRONTIER */
.aq-about .ab-frontier { padding: clamp(80px,10vw,140px) 0; background: #0a0a0a; color: #fafafa; position: relative; overflow: hidden; }
.aq-about .ab-frontier::after {
  content: ''; position: absolute; bottom: -30%; left: -10%;
  width: 60vw; height: 60vw; max-width: 700px; max-height: 700px;
  background: radial-gradient(circle, rgba(0,200,83,0.1) 0%, transparent 70%); pointer-events: none;
}
.aq-about .ab-frontier-inner { position: relative; z-index: 1; }
.aq-about .ab-frontier .ab-section-title { color: #fafafa; margin-bottom: 16px; }
.aq-about .ab-frontier-sub { font-size: 1.05rem; color: rgba(255,255,255,0.5); max-width: 560px; margin-bottom: 64px; line-height: 1.7; }
.aq-about .ab-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.aq-about .ab-pillar { padding: 40px 32px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); transition: border-color 0.3s, background 0.3s; }
.aq-about .ab-pillar:hover { border-color: rgba(0,200,83,0.3); background: rgba(0,200,83,0.04); }
.aq-about .ab-pillar-tag { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: #00c853; font-weight: 600; margin-bottom: 16px; }
.aq-about .ab-pillar h3 { font-family: 'Instrument Serif', serif; font-weight: 400; font-size: 1.5rem; margin-bottom: 16px; line-height: 1.25; }
.aq-about .ab-pillar p { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.65; }
.aq-about .ab-pillar.ab-highlight { background: rgba(0,200,83,0.06); border-color: rgba(0,200,83,0.2); }

/* PROVEN */
.aq-about .ab-proven { padding: clamp(80px,10vw,140px) 0; background: #f3f1ee; }
.aq-about .ab-proven-header { text-align: center; margin-bottom: 56px; }
.aq-about .ab-proven-header .ab-section-title { margin-bottom: 12px; }
.aq-about .ab-dimension { margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(0,0,0,0.08); }
.aq-about .ab-dimension:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
.aq-about .ab-dim-header { display: flex; align-items: baseline; gap: 20px; margin-bottom: 20px; }
.aq-about .ab-dim-number { font-family: 'Instrument Serif', serif; font-size: 1.1rem; color: #00a844; font-weight: 400; flex-shrink: 0; }
.aq-about .ab-dim-name { font-family: 'Instrument Serif', serif; font-size: 1.6rem; line-height: 1.2; }
.aq-about .ab-dim-sep { width: 40px; height: 1px; background: rgba(0,0,0,0.08); flex-shrink: 0; margin: 0 4px; }
.aq-about .ab-dim-desc { font-size: 0.9rem; color: #6b6b6b; line-height: 1.65; max-width: 720px; flex: 1; }
.aq-about .ab-analyst-badges { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
.aq-about .ab-badge-card {
  display: flex; align-items: center; gap: 12px;
  background: #fafafa; border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px; padding: 14px 18px;
  transition: transform 0.2s, box-shadow 0.2s; flex: 1 1 200px; min-width: 200px;
}
.aq-about .ab-badge-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
.aq-about .ab-badge-icon {
  width: 38px; height: 38px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; font-size: 1.05rem; flex-shrink: 0;
}
.aq-about .ab-badge-icon.ab-forrester { background: #e8f5e9; }
.aq-about .ab-badge-icon.ab-gartner { background: #e3f2fd; }
.aq-about .ab-badge-icon.ab-ai { background: #fff3e0; }
.aq-about .ab-badge-text { font-size: 0.78rem; line-height: 1.4; }
.aq-about .ab-badge-title { font-weight: 600; color: #0a0a0a; }
.aq-about .ab-badge-sub { color: #6b6b6b; margin-top: 1px; }
.aq-about .ab-marketplace { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 4px; }
.aq-about .ab-mp-card {
  background: #fafafa; border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px; padding: 20px 22px; flex: 1 1 140px; min-width: 140px;
  text-align: center; transition: transform 0.2s, box-shadow 0.2s;
}
.aq-about .ab-mp-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.06); }
.aq-about .ab-mp-rating { font-family: 'Instrument Serif', serif; font-size: 2.2rem; line-height: 1; }
.aq-about .ab-mp-stars { display: flex; justify-content: center; gap: 2px; margin: 6px 0; }
.aq-about .ab-mp-stars svg { width: 12px; height: 12px; fill: #f59e0b; }
.aq-about .ab-mp-source { font-size: 0.7rem; font-weight: 600; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.06em; }
.aq-about .ab-mp-highlight {
  display: inline-block; margin-top: 8px; font-size: 0.62rem; font-weight: 600;
  color: #00a844; background: rgba(0,200,83,0.08);
  padding: 3px 8px; border-radius: 20px; letter-spacing: 0.02em;
}
.aq-about .ab-logo-cloud { display: flex; flex-wrap: wrap; gap: 0; margin-top: 4px; }
.aq-about .ab-logo-chip {
  background: #fafafa; border: 1px solid rgba(0,0,0,0.08);
  padding: 10px 16px; font-size: 0.76rem; font-weight: 600;
  color: #0a0a0a; margin: -0.5px; transition: background 0.2s, color 0.2s;
}
.aq-about .ab-logo-chip:hover { background: rgba(0,200,83,0.05); color: #00a844; position: relative; z-index: 1; }
.aq-about .ab-partner-label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: #6b6b6b; font-weight: 600; margin-top: 20px; margin-bottom: 8px; }
.aq-about .ab-partner-strip { display: flex; gap: 8px; flex-wrap: wrap; }
.aq-about .ab-partner-chip {
  background: #fafafa; border: 1px solid rgba(0,0,0,0.08);
  border-radius: 6px; padding: 8px 14px; font-size: 0.74rem;
  font-weight: 600; color: #0a0a0a; transition: border-color 0.2s;
}
.aq-about .ab-partner-chip:hover { border-color: #00c853; }

/* TEAM */
.aq-about .ab-team { padding: clamp(80px,10vw,140px) 0; overflow: hidden; }
.aq-about .ab-team-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 64px; align-items: center; }
.aq-about .ab-team-left .ab-section-title { margin-bottom: 20px; }
.aq-about .ab-team-desc { font-size: 1rem; color: #6b6b6b; line-height: 1.75; max-width: 460px; margin-bottom: 32px; }
.aq-about .ab-team-locations { display: flex; gap: 24px; flex-wrap: wrap; }
.aq-about .ab-team-loc { font-size: 0.82rem; font-weight: 500; color: #6b6b6b; display: flex; align-items: center; gap: 6px; }
.aq-about .ab-team-loc::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #00c853; flex-shrink: 0; }
.aq-about .ab-mosaic { display: grid; grid-template-columns: repeat(8, 1fr); gap: 5px; }
.aq-about .ab-avatar { aspect-ratio: 1; border-radius: 10px; overflow: hidden; opacity: 0; animation: abAvatarFade 0.35s forwards; }
.aq-about .ab-avatar-inner { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 600; color: rgba(255,255,255,0.75); text-transform: uppercase; letter-spacing: 0.04em; }
@keyframes abAvatarFade { from { opacity:0; transform: scale(0.8); } to { opacity:1; transform: scale(1); } }

/* CTA */
.aq-about .ab-cta { padding: clamp(80px,10vw,140px) 0; text-align: center; }
.aq-about .ab-cta .ab-section-title { margin-bottom: 20px; }
.aq-about .ab-cta-desc { color: #6b6b6b; font-size: 1.05rem; max-width: 500px; margin: 0 auto 36px; line-height: 1.7; }
.aq-about .ab-cta-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: #0a0a0a; color: #fafafa;
  padding: 16px 36px; border-radius: 60px; text-decoration: none;
  font-weight: 500; font-size: 0.95rem; transition: background 0.3s, transform 0.2s;
}
.aq-about .ab-cta-btn:hover { background: #00a844; transform: translateY(-2px); }

/* REVEAL ANIMATION */
.aq-about .ab-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1); }
.aq-about .ab-reveal.visible { opacity: 1; transform: translateY(0); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .aq-about .ab-pioneers-grid, .aq-about .ab-team-grid { grid-template-columns: 1fr; gap: 48px; }
  .aq-about .ab-pioneers-left { position: static; }
  .aq-about .ab-pillars { grid-template-columns: 1fr; }
  .aq-about .ab-mosaic { grid-template-columns: repeat(6, 1fr); }
  .aq-about .ab-hero-stats { gap: 32px; }
  .aq-about .ab-leadership-row { gap: 24px; }
  .aq-about .ab-dim-header { flex-wrap: wrap; }
}
@media (max-width: 600px) {
  .aq-about .ab-hero-stats { flex-direction: column; gap: 24px; }
  .aq-about .ab-marketplace, .aq-about .ab-analyst-badges { flex-direction: column; }
  .aq-about .ab-mosaic { grid-template-columns: repeat(5, 1fr); }
  .aq-about .ab-badge-card { flex: 1 1 100%; }
  .aq-about .ab-leadership-row { gap: 16px; }
  .aq-about .ab-leader-card { width: 100px; }
}
`;

const STAR = (
  <svg viewBox="0 0 12 12"><polygon points="6,0.5 7.6,4.2 11.5,4.5 8.5,7.2 9.4,11.2 6,9.2 2.6,11.2 3.5,7.2 0.5,4.5 4.4,4.2" /></svg>
);

const LINKEDIN_PATH = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const LEADERS = [
  { initials: "MA", bg: "#283593", name: "Mahendra Alladi", title: "Founder & CEO" },
  { initials: "GN", bg: "#00695c", name: "Guljeet Nagpaul", title: "Chief Product Officer" },
  { initials: "RN", bg: "#5c6bc0", name: "Ravikanth Nagulapalli", title: "CTO" },
  { initials: "RS", bg: "#8d6e63", name: "Raj S", title: "Chief Architect" },
  { initials: "NJ", bg: "#00897b", name: "Nishan Joseph", title: "VP Strategic Alliances" },
  { initials: "SK", bg: "#ad1457", name: "Shriram Krishnan", title: "SVP, APAC & EMEA" },
];

const AVATAR_COLORS = [
  "#37474f","#5c6bc0","#00897b","#8d6e63","#7e57c2","#ef6c00",
  "#546e7a","#00695c","#ad1457","#283593","#00838f","#4e342e",
  "#6a1b9a","#e65100","#1565c0","#2e7d32","#c62828","#4527a0",
  "#00796b","#bf360c","#1a237e","#827717","#880e4f","#004d40",
];
const AVATAR_INITIALS = [
  "MA","GN","RN","RS","NJ","SK","SM","PD","VR","KS",
  "AR","DM","SB","PR","HT","RK","JK","MV","AS","LP",
  "NK","BT","SC","RM","KP","VK","TN","AG","RB","SG",
  "MK","DJ","PS","KR","AD","SR","NM","VP","BK","HS",
  "JS","CM","RP","ST","ML","KD","AV","YS","DK","GT",
  "PB","RC","SN","AM","RT","HL","JM","KV","NT","PA",
  "VS","GB","LK","DR",
];

export default function AboutPage() {
  useEffect(() => {
    // Intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement?.querySelectorAll(".ab-reveal") ?? [];
          const idx = Array.from(siblings).indexOf(entry.target as HTMLElement);
          (entry.target as HTMLElement).style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".ab-reveal").forEach((el) => observer.observe(el));

    // Avatar mosaic
    const mosaic = document.getElementById("ab-avatar-mosaic");
    if (mosaic && mosaic.childElementCount === 0) {
      AVATAR_INITIALS.forEach((init, i) => {
        const el = document.createElement("div");
        el.className = "ab-avatar";
        el.style.animationDelay = `${i * 0.025}s`;
        el.innerHTML = `<div class="ab-avatar-inner" style="background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}">${init}</div>`;
        mosaic.appendChild(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aq-about">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* 1. HERO */}
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <p className="ab-hero-label">About ACCELQ</p>
          <h1>We didn&apos;t follow the<br />testing revolution.<br /><em>We started it.</em></h1>
          <p className="ab-hero-sub">Since 2016, ACCELQ has been the company that moves first — pioneering codeless automation, redefining enterprise QA, and now leading the agentic AI era in quality engineering.</p>
          <div className="ab-hero-stats">
            <div><div className="ab-stat-num">1B+</div><div className="ab-stat-label">Test executions</div></div>
            <div><div className="ab-stat-num">50+</div><div className="ab-stat-label">Fortune 100 clients</div></div>
            <div><div className="ab-stat-num">3×</div><div className="ab-stat-label">Forrester Wave™ Leader</div></div>
          </div>
        </div>
      </section>

      {/* 2. BELIEF */}
      <section className="ab-belief">
        <div className="ab-container">
          <div className="ab-belief-inner ab-reveal">
            <div className="ab-belief-statement">
              Quality engineering has been held back by <em>silos, inefficiency, and inaccessibility</em> for too long. We built ACCELQ to break those barriers — to make quality everyone&apos;s responsibility, put automation at the center of every QA practice, and give entire organizations the power to ship with&nbsp;confidence.
            </div>
            <div className="ab-belief-attr">
              <div className="ab-attr-line" />
              <div className="ab-attr-text">
                <span className="ab-attr-name">Mahendra Alladi</span><br />Founder &amp; CEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP */}
      <section className="ab-leadership">
        <div className="ab-container">
          <div className="ab-leadership-label ab-reveal">Leadership</div>
          <div className="ab-leadership-row ab-reveal">
            {LEADERS.map((l) => (
              <a key={l.name} href="#" className="ab-leader-card" target="_blank" rel="noopener">
                <div className="ab-leader-avatar" style={{ background: l.bg }}>{l.initials}</div>
                <div className="ab-leader-name">{l.name}</div>
                <div className="ab-leader-title">{l.title}</div>
                <svg className="ab-leader-li" viewBox="0 0 24 24"><path d={LINKEDIN_PATH} /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALWAYS AHEAD */}
      <section className="ab-pioneers">
        <div className="ab-container">
          <div className="ab-pioneers-grid">
            <div className="ab-pioneers-left ab-reveal">
              <p className="ab-section-label">Our Journey</p>
              <h2 className="ab-section-title">Always ahead<br /><em>of the curve.</em></h2>
              <p className="ab-pioneers-desc">Every era in testing had a company that moved first. In cloud-native QA, codeless automation, multi-modal testing, and now agentic AI — that company has been ACCELQ. We don&apos;t wait for paradigm shifts. We create them.</p>
            </div>
            <div className="ab-timeline ab-reveal">
              {[
                { era: "2016 — The Beginning", title: "Unified Cloud Platform", desc: "100% browser-based. Zero setup. We eliminated versioning nightmares and set a new standard for collaborative QA — years before competitors caught on.", now: false },
                { era: "Industry First", title: "Democratized No-Code Automation", desc: "Empowered business analysts, not just specialist coders. Proved codeless could conquer real-world enterprise complexity and unlocked 3x productivity gains.", now: false },
                { era: "Breakthrough", title: "True Multi-Modal Automation", desc: "One flow to test across Web, Mobile, API, and DB. Mirrored real-world user journeys and drastically simplified end-to-end validation for complex apps.", now: false },
                { era: "Strategic Shift", title: "End-to-End Governance", desc: "Integrated test design, planning, and management into a single platform. Shifted the industry's focus from scripting to strategic quality management.", now: false },
                { era: "Enterprise Scale", title: "ACCELQ Live for Packaged Apps", desc: "Release-aligned automation for Salesforce, SAP, and enterprise platforms. Turned reactive maintenance into proactive, release-synced validation.", now: false },
                { era: "Now — The Agentic Era", title: "Autopilot & Autonomous QA", desc: "GenAI embedded across the entire lifecycle. Natural language test generation, autonomous self-healing, and AI agents that understand business intent. The next frontier is here.", now: true },
              ].map((item) => (
                <div key={item.title} className={`ab-tl-item${item.now ? " ab-now" : ""}`}>
                  <div className="ab-tl-line"><div className="ab-tl-dot" /><div className="ab-tl-connector" /></div>
                  <div className="ab-tl-content">
                    <div className="ab-tl-era">{item.era}</div>
                    <div className="ab-tl-title">{item.title}</div>
                    <div className="ab-tl-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILT TO LEAD */}
      <section className="ab-frontier">
        <div className="ab-container ab-frontier-inner">
          <p className="ab-section-label ab-reveal">The Next Frontier</p>
          <h2 className="ab-section-title ab-reveal">Built to lead in the <em>agentic era.</em></h2>
          <p className="ab-frontier-sub ab-reveal">A foundation that runs anything. A data moat that knows everything. Now — an AI core with deep application intelligence to fuel it all.</p>
          <div className="ab-pillars">
            <div className="ab-pillar ab-reveal"><div className="ab-pillar-tag">The Foundation</div><h3>Execution Engine</h3><p>Web. Mobile. API. DB. Salesforce. SAP. One engine, battle-tested across 1 billion+ executions. Deterministic. Bulletproof.</p></div>
            <div className="ab-pillar ab-reveal"><div className="ab-pillar-tag">The Fuel</div><h3>The Data Moat</h3><p>Every pattern. Every edge case. Every failure mode. Years of accumulated learning from the world&apos;s most complex enterprises — a moat no one can fast-follow.</p></div>
            <div className="ab-pillar ab-highlight ab-reveal"><div className="ab-pillar-tag">The Leap</div><h3>Conversational AI Core</h3><p>Enterprise-grade. Conversational. AI agents with deep application intelligence that go from requirements to execution autonomously. Already in motion. Accelerating fast.</p></div>
          </div>
        </div>
      </section>

      {/* 6. PROVEN */}
      <section className="ab-proven">
        <div className="ab-container">
          <div className="ab-proven-header ab-reveal">
            <p className="ab-section-label">Proven on Every Front</p>
            <h2 className="ab-section-title">Validated by analysts. Loved by users.<br /><em>Trusted by the market.</em></h2>
          </div>

          {/* Analysts */}
          <div className="ab-dimension ab-reveal">
            <div className="ab-dim-header">
              <div className="ab-dim-number">01</div>
              <div className="ab-dim-name">The Analysts</div>
              <div className="ab-dim-sep" />
              <div className="ab-dim-desc">The industry&apos;s most rigorous evaluations have consistently placed ACCELQ at the forefront — across three consecutive Forrester Waves, earning the highest scores for both capabilities and vision.</div>
            </div>
            <div className="ab-analyst-badges">
              {[
                { icon: "🏆", cls: "ab-forrester", title: "Forrester Wave™ Leader", sub: "3× consecutive · Highest Current Offering score" },
                { icon: "⭐", cls: "ab-forrester", title: "Customer Favorite", sub: "Only vendor with \"double halo\" distinction" },
                { icon: "📊", cls: "ab-gartner", title: "Gartner MQ Recognized", sub: "AI-Augmented Software Testing Tools" },
                { icon: "🧠", cls: "ab-ai", title: "AI Breakthrough Award", sub: "Engineering Solution of the Year 2025" },
              ].map((b) => (
                <div key={b.title} className="ab-badge-card">
                  <div className={`ab-badge-icon ${b.cls}`}>{b.icon}</div>
                  <div className="ab-badge-text"><div className="ab-badge-title">{b.title}</div><div className="ab-badge-sub">{b.sub}</div></div>
                </div>
              ))}
            </div>
          </div>

          {/* Users */}
          <div className="ab-dimension ab-reveal">
            <div className="ab-dim-header">
              <div className="ab-dim-number">02</div>
              <div className="ab-dim-name">The Users</div>
              <div className="ab-dim-sep" />
              <div className="ab-dim-desc">Across every major software marketplace, ACCELQ is consistently the highest-rated platform in its category — and the only vendor to earn the Customer Favorite distinction across the entire competitive landscape.</div>
            </div>
            <div className="ab-marketplace">
              {[
                { rating: "4.8", source: "G2", highlight: "Leader · Every Quarter" },
                { rating: "4.7", source: "Gartner Peer Insights", highlight: "100% Peer Sentiment" },
                { rating: "4.8", source: "Capterra", highlight: "Top Rated" },
                { rating: "4.7", source: "TrustRadius", highlight: "Top Rated" },
              ].map((m) => (
                <div key={m.source} className="ab-mp-card">
                  <div className="ab-mp-rating">{m.rating}</div>
                  <div className="ab-mp-stars">{STAR}{STAR}{STAR}{STAR}{STAR}</div>
                  <div className="ab-mp-source">{m.source}</div>
                  <div className="ab-mp-highlight">{m.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Market */}
          <div className="ab-dimension ab-reveal">
            <div className="ab-dim-header">
              <div className="ab-dim-number">03</div>
              <div className="ab-dim-name">The Market</div>
              <div className="ab-dim-sep" />
              <div className="ab-dim-desc">Enterprises across 25+ countries — including 50+ Fortune 100 companies — run their most critical quality operations on ACCELQ. Deeply embedded in the ecosystems that power the modern enterprise.</div>
            </div>
            <div className="ab-logo-cloud">
              {["Amazon","Capital One","Fannie Mae","Toyota","BBC","NVIDIA","MasterCard","eBay","Southwest","GE","PwC","Pfizer","S&P Global","Etihad","Macy's","Cedars-Sinai","Wendy's","Fisher Investments"].map((c) => (
                <div key={c} className="ab-logo-chip">{c}</div>
              ))}
            </div>
            <div className="ab-partner-label">Ecosystem Partners</div>
            <div className="ab-partner-strip">
              {["Salesforce","Oracle","SAP","ServiceNow","Workday","nCino","Coupa"].map((p) => (
                <div key={p} className="ab-partner-chip">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM */}
      <section className="ab-team">
        <div className="ab-container">
          <div className="ab-team-grid">
            <div className="ab-reveal">
              <p className="ab-section-label">Our Team</p>
              <h2 className="ab-section-title">The reason<br /><em>we keep winning.</em></h2>
              <p className="ab-team-desc">Every breakthrough on this page — every industry first, every enterprise won, every award earned — traces back to this team. Engineers, designers, domain experts, and customer champions spread across four continents, united by a shared obsession: making quality engineering radically better.</p>
              <div className="ab-team-locations">
                {["India","United States","Canada","Australia"].map((loc) => (
                  <span key={loc} className="ab-team-loc">{loc}</span>
                ))}
              </div>
            </div>
            <div className="ab-mosaic ab-reveal" id="ab-avatar-mosaic" />
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="ab-cta">
        <div className="ab-container ab-reveal">
          <p className="ab-section-label">Get Started</p>
          <h2 className="ab-section-title">Ready to see what <em>comes next?</em></h2>
          <p className="ab-cta-desc">Talk to our team and discover how ACCELQ is redefining quality engineering for the agentic era.</p>
          <Link href="/demo" className="ab-cta-btn">
            Schedule a Demo{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
