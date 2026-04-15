"use client";
import Link from "next/link";
import { useState } from "react";

const openings = [
  {
    id: 1,
    title: "Account Executive Intern",
    type: "Internship",
    location: "Surabaya, Indonesia",
    department: "Sales & Business",
    comingSoon: false,
    desc: "Support the sales team in identifying business opportunities, building client relationships, and driving partnerships in the consulting and training space.",
    requirements: [
      "Background in Business, Management, or a related field",
      "Communicative, confident, and target-oriented",
      "Interest in B2B sales and the consulting industry",
      "Fluent in Indonesian; English is a plus",
    ],
  },
  {
    id: 2,
    title: "Product Development Intern",
    type: "Internship",
    location: "Surabaya / Remote",
    department: "Product & Operations",
    comingSoon: false,
    desc: "Assist in developing and refining Leancore's training programs, consulting frameworks, and digital products that serve organizations across Indonesia.",
    requirements: [
      "Background in Industrial Engineering, Management, or related field",
      "Analytical, organized, and detail-oriented",
      "Familiar with tools like Notion, Miro, or Google Workspace",
      "Interest in curriculum development or digital products",
    ],
  },
  {
    id: 3,
    title: "Creative Content & Design Intern",
    type: "Internship",
    location: "Remote / Surabaya",
    department: "Marketing & Creative",
    comingSoon: false,
    desc: "Create compelling visual and written content across social media, website, and digital channels to attract professionals and organizations to Leancore's programs.",
    requirements: [
      "Portfolio of graphic design or social media content",
      "Proficient in Canva, Figma, or Adobe tools",
      "Copywriting skills in Indonesian or English",
      "Familiar with Instagram and LinkedIn",
    ],
  },
];

const values = [
  {
    icon: "⚡",
    title: "Drive for Excellence",
    desc: "We set high standards and continuously push boundaries in client work and in ourselves.",
  },
  {
    icon: "🤝",
    title: "Collaborative Culture",
    desc: "Ideas thrive here. We work together across functions, challenge each other, and grow as a team.",
  },
  {
    icon: "📈",
    title: "Real Impact",
    desc: "Our work moves organizations forward. You'll see the direct result of what you build and deliver.",
  },
  {
    icon: "🎓",
    title: "Continuous Learning",
    desc: "Training access, certification support, and a culture that treats every project as a learning opportunity.",
  },
];

const deptColors: Record<string, string> = {
  "Sales & Business": "#004276",
  "Product & Operations": "#0F766E",
  "Marketing & Creative": "#7C3AED",
};

const typeColors: Record<string, string> = {
  Internship: "#D97706",
};

export default function careerPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("ALL");

  const departments = [
    "ALL",
    ...Array.from(new Set(openings.map((o) => o.department))),
  ];
  const filtered =
    filter === "ALL"
      ? openings
      : openings.filter((o) => o.department === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .career-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .career-hero {
          position: relative;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .career-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #001e3c 0%, #004276 50%, #00334e 100%);
        }
        .career-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .career-hero-orb {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%);
          top: -200px; right: -100px;
          pointer-events: none;
        }
        .career-hero-orb2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%);
          bottom: -150px; left: -80px;
          pointer-events: none;
        }
        .career-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 820px;
          animation: heroFadeUp 0.7s ease both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .career-hero-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: #FACC15;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .career-hero-eyebrow::before,
        .career-hero-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #FACC15;
          opacity: 0.6;
        }
        .career-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .career-hero-title span {
          color: #FACC15;
        }
        .career-hero-desc {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          max-width: 520px;
          margin: 0 auto 36px;
          line-height: 1.8;
        }
        .career-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .career-hero-btn:hover { background: #FEF08A; transform: translateY(-2px); }
        .career-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
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
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #004276;
          margin-bottom: 10px;
        }
        .sec-desc {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          max-width: 500px;
          line-height: 1.75;
          margin-bottom: 48px;
        }
        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin-bottom: 48px;
        }

        /* ── VALUES ── */
        .values-section { background: #fff; }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .value-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 28px 24px;
          transition: box-shadow 0.2s, border-top-color 0.2s;
        }
        .value-card:hover {
          box-shadow: 0 8px 30px rgba(0,66,118,0.1);
          border-top-color: #FACC15;
        }
        .value-icon {
          font-size: 28px;
          margin-bottom: 14px;
          display: block;
        }
        .value-title {
          font-size: 14px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 8px;
        }
        .value-desc {
          font-size: 13px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.7;
        }

        /* ── OPENINGS ── */
        .openings-section { background: #F8FAFC; }
        .filter-bar {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .filter-btn {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 8px 16px;
          border: 1px solid #E2E8F0;
          background: #fff;
          color: #64748B;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn.active, .filter-btn:hover {
          background: #004276;
          color: #fff;
          border-color: #004276;
        }
        .openings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .job-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-left: 4px solid transparent;
          padding: 24px;
          cursor: pointer;
          transition: box-shadow 0.2s, border-left-color 0.2s;
        }
        .job-card:hover, .job-card.open {
          box-shadow: 0 8px 30px rgba(0,66,118,0.1);
          border-left-color: #FACC15;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .job-title {
          font-size: 15px;
          font-weight: 600;
          color: #1E293B;
          line-height: 1.35;
          flex: 1;
          margin-right: 12px;
        }
        .job-expand-btn {
          width: 28px; height: 28px;
          background: #F1F5F9;
          border: none;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          color: #004276;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }
        .job-expand-btn:hover, .job-card.open .job-expand-btn {
          background: #004276;
          color: #FACC15;
        }
        .job-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .job-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 3px 10px;
          border-radius: 2px;
          color: #fff;
        }
        .job-location {
          font-size: 11px;
          color: #94A3B8;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .job-desc {
          font-size: 13px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 0;
        }
        .job-details {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s;
          opacity: 0;
        }
        .job-card.open .job-details {
          max-height: 400px;
          opacity: 1;
          margin-top: 16px;
        }
        .job-requirements {
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
        }
        .job-req-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #004276;
          margin-bottom: 10px;
        }
        .job-req-list {
          list-style: none;
          padding: 0; margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .job-req-list li {
          font-size: 12px;
          color: #475569;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .job-req-list li::before {
          content: '▸';
          color: #FACC15;
          font-size: 10px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .job-apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #004276;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 10px 20px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .job-apply-btn:hover { background: #FACC15; color: #004276; }

        /* ── PROCESS ── */
        .process-section { background: #fff; }
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .process-steps::before {
          content: '';
          position: absolute;
          top: 28px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, #FACC15);
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 12px;
          position: relative;
        }
        .process-num {
          width: 56px; height: 56px;
          background: #004276;
          border: 3px solid #FACC15;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #FACC15;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .process-step-title {
          font-size: 12px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }
        .process-step-desc {
          font-size: 11px;
          font-weight: 300;
          color: #94A3B8;
          line-height: 1.6;
        }

        /* ── CTA ── */
        .cta-section {
          background: #004276;
          position: relative;
          overflow: hidden;
        }
        .cta-grid-tex {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .cta-orb {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%);
          top: -150px; right: -80px;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .cta-text {}
        .cta-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .cta-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }
        .cta-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .cta-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          max-width: 440px;
        }
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-shrink: 0;
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .cta-btn-primary:hover { background: #FEF08A; transform: translateY(-2px); }
        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 12px 28px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          text-align: center;
        }
        .cta-btn-secondary:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }

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
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .process-steps { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .process-steps::before { display: none; }
          .cta-inner { flex-direction: column; text-align: center; }
          .cta-desc { max-width: 100%; }
          .cta-actions { flex-direction: row; }
        }
        @media (max-width: 768px) {
          .openings-grid { grid-template-columns: 1fr; }
          .cta-actions { flex-direction: column; align-items: stretch; }
        }
        @media (max-width: 640px) {
          .sec-wrap { padding: 56px 24px; }
          .values-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
      `}</style>

      <div className="career-page">
        {/* ── HERO ── */}
        <section className="career-hero">
          <div className="career-hero-bg" />
          <div className="career-hero-grid" />
          <div className="career-hero-orb" />
          <div className="career-hero-orb2" />
          <div className="career-hero-content">
            <p className="career-hero-eyebrow">JOIN THE TEAM</p>
            <h1 className="career-hero-title">
              Build What <span>Matters</span>
              <br />
              With Leancore
            </h1>
            <p className="career-hero-desc">
              We're a team of consultants, trainers, and operators who believe
              operational excellence transforms organizations and career. Come
              grow with us.
            </p>
            <a href="#openings" className="career-hero-btn">
              VIEW OPEN POSITIONS →
            </a>
          </div>
          <div className="career-hero-bottom-fade" />
        </section>

        {/* ── VALUES ── */}
        <section className="values-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">WHY LEANCORE</p>
            <h2 className="sec-title">Life at Leancore</h2>
            <p className="sec-desc">
              More than a job it's a community of driven professionals
              committed to excellence in everything they do.
            </p>
            <div className="sec-divider" />
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <p className="value-title">{v.title}</p>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPENINGS ── */}
        <section className="openings-section" id="openings">
          <div className="sec-wrap">
            <p className="sec-eyebrow">OPEN POSITIONS</p>
            <h2 className="sec-title">Current Openings</h2>
            <p className="sec-desc">
              We're opening internship opportunities for driven individuals who
              want to learn hands-on in the world of consulting and business
              development.
            </p>
            <div className="sec-divider" />

            <div className="filter-bar">
              {departments.map((d) => (
                <button
                  key={d}
                  className={`filter-btn${filter === d ? " active" : ""}`}
                  onClick={() => {
                    setFilter(d);
                    setSelected(null);
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="openings-grid">
              {filtered.map((job) => (
                <div
                  key={job.id}
                  className={`job-card${selected === job.id ? " open" : ""}`}
                  onClick={() =>
                    setSelected(selected === job.id ? null : job.id)
                  }
                >
                  <div className="job-header">
                    <p className="job-title">{job.title}</p>
                    <button className="job-expand-btn">
                      {selected === job.id ? "−" : "+"}
                    </button>
                  </div>
                  <div className="job-meta">
                    <span
                      className="job-badge"
                      style={{
                        background: deptColors[job.department] ?? "#004276",
                      }}
                    >
                      {job.department}
                    </span>
                    <span
                      className="job-badge"
                      style={{ background: typeColors[job.type] ?? "#64748B" }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="job-location">📍 {job.location}</p>

                  <div className="job-details">
                    <p
                      className="job-desc"
                      style={{ marginBottom: 16, marginTop: 12 }}
                    >
                      {job.desc}
                    </p>
                    <div className="job-requirements">
                      <p className="job-req-label">REQUIREMENTS</p>
                      <ul className="job-req-list">
                        {job.requirements.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                      <a
                        href={`https://wa.me/6281803540000?text=Hi%20LeanCore,%20I%27m%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="job-apply-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        APPLY NOW →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HIRING PROCESS ── */}
        <section className="process-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">HOW IT WORKS</p>
            <h2 className="sec-title">Our Hiring Process</h2>
            <p className="sec-desc">
              We keep it simple, fast, and human. Here's what to expect after
              you apply.
            </p>
            <div className="sec-divider" />
            <div className="process-steps">
              {[
                {
                  n: "01",
                  title: "Apply",
                  desc: "Send your CV and brief intro via WhatsApp or email.",
                },
                {
                  n: "02",
                  title: "CV Review",
                  desc: "Our team reviews your profile within 3 business days.",
                },
                {
                  n: "03",
                  title: "Interview",
                  desc: "In-depth discussion about your experience and approach.",
                },
                {
                  n: "04",
                  title: "Offer",
                  desc: "If it's a match, we move fast with a formal offer.",
                },
              ].map((s) => (
                <div key={s.n} className="process-step">
                  <div className="process-num">{s.n}</div>
                  <p className="process-step-title">{s.title}</p>
                  <p className="process-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-grid-tex" />
          <div className="cta-orb" />
          <div className="cta-inner">
            <div className="cta-text">
              <p className="cta-eyebrow">DON'T SEE YOUR ROLE?</p>
              <h2 className="cta-title">Send Us Your CV Anyway</h2>
              <p className="cta-desc">
                We're always open to meeting exceptional people. If you believe
                in operational excellence and want to make a real impact, reach
                out we'd love to hear from you.
              </p>
            </div>
            <div className="cta-actions">
              <a
                href="https://wa.me/6281803540000?text=Hi%20LeanCore,%20I%27d%20like%20to%20send%20my%20CV."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-primary"
              >
                SEND CV VIA WHATSAPP →
              </a>
              <a
                href="mailto:info@leancore.id?subject=Open%20Application%20-%20CV%20Submission"
                className="cta-btn-secondary"
              >
                EMAIL YOUR APPLICATION
              </a>
            </div>
          </div>
        </section>

        {/* ── WA FLOAT ── */}
        <a
          href="https://wa.me/6281803540000?text=Hi%20LeanCore%20Consulting,%20I%27d%20like%20to%20learn%20more%20about%20career%20opportunities."
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
      </div>
    </>
  );
}
