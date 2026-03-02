"use client";

import Link from "next/link";

const programTracks = [
  {
    title: "Manufacturing Strategy & Competitive Advantage",
    desc: "Strategic thinking for manufacturing leaders to build sustainable competitive advantage.",
    topics: [
      "Strategic Thinking for Leaders",
      "Industry & Competitiveness Analysis (Porter, Blue Ocean)",
      "Scenario Planning & Risk Management",
      "Sustainability & ESG in Manufacturing",
    ],
  },
  {
    title: "Lean Operations & Process Excellence",
    desc: "Operational efficiency through Lean, Six Sigma, and digital transformation practices.",
    topics: [
      "Lean Thinking & Operational Excellence",
      "Value Stream Mapping & Kaizen",
      "Six Sigma Fundamentals (DMAIC)",
      "Operational Performance Measurement (OEE, Lead Time)",
    ],
  },
  {
    title: "Integrated Supply Chain & Operations Strategy",
    desc: "End-to-end supply chain integration and digital SCM strategy.",
    topics: [
      "Strategic Sourcing & SRM",
      "Demand Planning & S&OP",
      "Risk Management & Resilience",
      "Digital Supply Chain Tools (AI, Blockchain, Visibility)",
    ],
  },
];

const glanceItems = [
  "Manufacturing Strategy & Competitive Advantage",
  "Lean Operations & Process Excellence",
  "Integrated Supply Chain & Operations Strategy",
  "Global Certification Credential",
];

export default function MiniMBA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .mba-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .mba-hero {
          position: relative;
          background-color: #004276;
          background-image: url('/miniMBAHero.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          padding: 160px 48px 120px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Dark overlay to maintain text readability */
        .mba-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 25, 55, 0.85) 0%,
            rgba(0, 66, 118, 0.75) 50%,
            rgba(0, 20, 45, 0.88) 100%
          );
          pointer-events: none;
        }

        .mba-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .mba-hero-orb1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 70%);
          top: -200px; left: -100px;
          pointer-events: none;
        }

        .mba-hero-orb2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -150px; right: -80px;
          pointer-events: none;
        }

        .mba-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        .mba-back-link {
          position: absolute;
          top: 32px; left: 48px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
          z-index: 3;
        }
        .mba-back-link:hover { color: #FACC15; }
        .mba-back-arrow { transition: transform 0.2s; }
        .mba-back-link:hover .mba-back-arrow { transform: translateX(-3px); }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mba-hero-content {
          position: relative;
          z-index: 2;
        }

        .mba-hero-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          margin-bottom: 24px;
          animation: heroFadeUp 0.6s ease both 0.05s;
        }

        .mba-hero-eyebrow::before,
        .mba-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #FACC15; opacity: 0.5;
        }

        .mba-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
          animation: heroFadeUp 0.65s ease both 0.18s;
        }

        .mba-hero-title span { color: #FACC15; }

        .mba-hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 560px;
          line-height: 1.8;
          position: relative;
          animation: heroFadeUp 0.65s ease both 0.3s;
        }

        /* ── SHARED ── */
        .sec-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
        }

        .sec-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #004276;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .sec-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background: #FACC15;
        }

        .sec-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 700;
          color: #004276;
          margin-bottom: 10px;
        }

        .sec-desc {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          max-width: 540px;
          line-height: 1.75;
          margin-bottom: 48px;
        }

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin-bottom: 48px;
        }

        /* ── OVERVIEW ── */
        .overview-section { background: #fff; }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .overview-card {
          background: #004276;
          padding: 44px 40px;
          border-top: 3px solid #FACC15;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .overview-card-title {
          font-family: 'Roboto',;
          font-size: 26px;
          font-weight: 700;
          color: #FACC15;
          margin-bottom: 4px;
        }

        .overview-card p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.80);
          line-height: 1.85;
        }

        .glance-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 44px 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .glance-card-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #004276;
        }

        .glance-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #F1F5F9;
          transition: gap 0.2s;
        }

        .glance-item:last-child { border-bottom: none; padding-bottom: 0; }
        .glance-item:first-of-type { padding-top: 0; }
        .glance-item:hover { gap: 18px; }

        .glance-bullet {
          flex-shrink: 0;
          width: 6px; height: 6px;
          background: #004276;
          border-radius: 1px;
          margin-top: 6px;
          transition: background 0.2s;
        }

        .glance-item:hover .glance-bullet { background: #FACC15; }

        .glance-text {
          font-size: 13px;
          font-weight: 400;
          color: #475569;
          line-height: 1.6;
        }

        /* ── PROGRAM TRACKS ── */
        .tracks-section { background: #F8FAFC; }

        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .track-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: box-shadow 0.3s, transform 0.3s, border-top-color 0.3s;
        }

        .track-card:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.10);
          transform: translateY(-4px);
          border-top-color: #FACC15;
        }

        .track-num {
          width: 32px; height: 32px;
          background: #004276;
          color: #FACC15;
          font-size: 12px;
          font-weight: 700;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .track-card:hover .track-num { background: #FACC15; color: #004276; }

        .track-title {
          font-family: 'Roboto',;
          font-size: 16px;
          font-weight: 700;
          color: #004276;
          line-height: 1.4;
        }

        .track-desc {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.7;
        }

        .track-divider { height: 1px; background: #F1F5F9; }

        .track-topics-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #94A3B8;
          margin-bottom: 10px;
        }

        .track-topic-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
        }

        .track-topic-item:last-child { margin-bottom: 0; }

        .track-topic-bullet {
          flex-shrink: 0;
          width: 6px; height: 6px;
          background: #FACC15;
          border-radius: 1px;
          margin-top: 5px;
        }

        .track-topic-text {
          font-size: 12px;
          font-weight: 400;
          color: #475569;
          line-height: 1.55;
        }

        /* ── VALUE ── */
        .value-section { background: #fff; }

        .value-inner {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-left: 3px solid #FACC15;
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .value-title {
          font-family: 'Roboto',;
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          color: #004276;
          line-height: 1.3;
          margin-bottom: 16px;
        }

        .value-desc {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.8;
        }

        .value-badge-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .value-badge {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-left: 3px solid #004276;
          padding: 16px 20px;
          transition: border-left-color 0.2s, box-shadow 0.2s;
        }

        .value-badge:hover {
          border-left-color: #FACC15;
          box-shadow: 0 4px 16px rgba(0,66,118,0.07);
        }

        .value-badge-icon {
          width: 36px; height: 36px;
          background: #004276;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-badge-text {
          font-size: 13px;
          font-weight: 500;
          color: #004276;
        }

        /* ── CTA ── */
        .cta-section { background: #F8FAFC; }

        .cta-inner {
          background: #004276;
          padding: 72px 48px;
          position: relative;
          overflow: hidden;
        }

        .cta-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .cta-inner::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cta-eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: rgba(250,204,21,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .cta-eyebrow::before,
        .cta-eyebrow::after {
          content: '';
          display: block;
          width: 36px; height: 1px;
          background: rgba(250,204,21,0.4);
        }

        .cta-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .cta-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          margin-bottom: 36px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.75;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .cta-btn:hover { background: #FEF08A; transform: translateY(-2px); }

        /* ── WA FLOAT ── */
        .wa-float {
          position: fixed;
          right: 24px; bottom: 24px; z-index: 50;
          display: inline-flex; align-items: center; gap: 10px;
          background: #25D366; color: #fff;
          padding: 12px 20px; border-radius: 2px;
          box-shadow: 0 8px 32px rgba(37,211,102,0.35);
          text-decoration: none;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          transition: background 0.2s, transform 0.2s;
        }
        .wa-float:hover { background: #1EBE5D; transform: translateY(-2px); }
        .wa-float-label { display: none; }
        @media (min-width: 768px) { .wa-float-label { display: inline; } }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .tracks-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .mba-hero { padding: 120px 24px 100px; }
          .mba-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .overview-grid { grid-template-columns: 1fr; }
          .tracks-grid { grid-template-columns: 1fr; }
          .value-inner { grid-template-columns: 1fr; gap: 32px; padding: 32px 24px; }
          .cta-inner { padding: 56px 24px; }
        }
      `}</style>

      <div className="mba-page">
        {/* ── HERO ── */}
        <section className="mba-hero">
          <div className="mba-hero-overlay" />
          <div className="mba-hero-grid" />
          <div className="mba-hero-orb1" />
          <div className="mba-hero-orb2" />

          <Link href="/services" className="mba-back-link">
            <span className="mba-back-arrow">←</span>
            Back to Services
          </Link>

          <div className="mba-hero-content">
            <p className="mba-hero-eyebrow">EXECUTIVE DEVELOPMENT PROGRAM</p>
            <h1 className="mba-hero-title">
              Mini MBA <span>Program</span>
            </h1>
            <p className="mba-hero-desc">
              Business leaders must combine strategic foresight, lean
              efficiency, and integrated supply chain excellence. LeanCore's
              Mini MBA delivers an intensive learning journey followed by
              internationally recognized certification to validate expertise and
              leadership impact.
            </p>
          </div>

          <div className="mba-hero-bottom-fade" />
        </section>

        {/* ── WA FLOAT ── */}
        <a
          href="https://wa.me/6281803540000?text=Halo%20LeanCore%20Consulting,%20saya%20ingin%20informasi%20lebih%20lanjut."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
        >
          <img
            src="/wa.svg"
            alt="WhatsApp"
            width={18}
            height={18}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="wa-float-label">CHAT VIA WHATSAPP</span>
        </a>

        {/* ── OVERVIEW ── */}
        <section className="overview-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">WHAT WE OFFER</p>
            <h2 className="sec-title">Program Overview</h2>
            <p className="sec-desc">
              A two-fold journey: intensive workshops delivering hands-on
              operational and strategic knowledge, followed by internationally
              recognized certification that validates professional expertise.
            </p>
            <div className="sec-divider" />

            <div className="overview-grid">
              <div className="overview-card">
                <h3 className="overview-card-title">About the Program</h3>
                <p>
                  LeanCore's Mini MBA is designed as a two-fold journey:
                  participants first engage in intensive workshops delivering
                  hands-on operational and strategic knowledge, followed by an
                  internationally recognized certification process that
                  validates professional expertise.
                </p>
                <p>
                  Graduates gain advanced competencies to tackle Industry 4.0
                  challenges while earning global credibility that enhances
                  career progression and organizational impact.
                </p>
              </div>

              <div className="glance-card">
                <h3 className="glance-card-title">
                  Mini MBA Programs at a Glance
                </h3>
                <div>
                  {glanceItems.map((item, i) => (
                    <div key={i} className="glance-item">
                      <span className="glance-bullet" />
                      <p className="glance-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROGRAM TRACKS ── */}
        <section className="tracks-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">CURRICULUM</p>
            <h2 className="sec-title">Program Tracks & Core Topics</h2>
            <p className="sec-desc">
              Three specialized tracks designed to build strategic, operational,
              and supply chain leadership capabilities.
            </p>
            <div className="sec-divider" />

            <div className="tracks-grid">
              {programTracks.map((track, i) => (
                <div key={i} className="track-card">
                  <div className="track-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="track-title">{track.title}</h4>
                  <p className="track-desc">{track.desc}</p>
                  <div className="track-divider" />
                  <div>
                    <p className="track-topics-label">CORE TOPICS</p>
                    {track.topics.map((topic, j) => (
                      <div key={j} className="track-topic-item">
                        <span className="track-topic-bullet" />
                        <span className="track-topic-text">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUE ── */}
        <section className="value-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">THE DIFFERENCE</p>
            <h2 className="sec-title">Training & Global Certification</h2>
            <div className="sec-divider" />

            <div className="value-inner">
              <div>
                <h3 className="value-title">
                  A Unique Blend of Training
                  <br /> & Global Certification
                </h3>
                <p className="value-desc">
                  Each Mini MBA program equips professionals with practical
                  expertise and international credibility—enabling them to
                  advance their careers while driving measurable organizational
                  transformation.
                </p>
              </div>

              <div className="value-badge-wrap">
                {[
                  {
                    icon: "🎓",
                    label: "Internationally Recognized Certification",
                  },
                  { icon: "🏭", label: "Industry 4.0 Ready Competencies" },
                  { icon: "📊", label: "Data-Driven Leadership Skills" },
                  { icon: "🌐", label: "Global Career Advancement" },
                ].map((badge, i) => (
                  <div key={i} className="value-badge">
                    <div className="value-badge-icon">
                      <span style={{ fontSize: 16 }}>{badge.icon}</span>
                    </div>
                    <span className="value-badge-text">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="sec-wrap">
            <div className="cta-inner">
              <div className="cta-content">
                <p className="cta-eyebrow">GET STARTED</p>
                <h3 className="cta-title">
                  Advance Your
                  <br />
                  Leadership Journey
                </h3>
                <p className="cta-desc">
                  Request the Mini MBA brochure and discover how LeanCore can
                  elevate your strategic and operational leadership capability.
                </p>
                <Link href="/contact" className="cta-btn">
                  REQUEST BROCHURE →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}