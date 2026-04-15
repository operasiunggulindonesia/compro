"use client";

import Link from "next/link";
import { useEffect } from "react";

const researchAreas = [
  {
    title: "Feasibility Study",
    items: [
      "Market, technical, legal, and financial analysis",
      "Go / No-Go recommendations for investment or expansion",
    ],
  },
  {
    title: "Market Research & Analysis",
    items: [
      "Market segmentation",
      "Consumer behavior",
      "Market size and industry trends",
      "Competitor benchmarking",
    ],
  },
  {
    title: "Industry & Competitive Intelligence",
    items: [
      "Industry profiling",
      "Competitor analysis (Porter's Five Forces, SWOT)",
      "Trendwatching and disruptor analysis",
    ],
  },
  {
    title: "Operational & Process Research",
    items: [
      "Time-motion study",
      "Bottleneck & value stream analysis",
      "Productivity & efficiency studies",
    ],
  },
  {
    title: "Digital Readiness & Technology Adoption Research",
    items: [
      "Digital readiness assessment",
      "Technology adoption surveys",
      "Maturity assessment",
    ],
  },
];

const events = [
  {
    number: "01",
    title: "Operations Webinar Series",
    freq: "1–2× PER MONTH",
    texts: [
      "As part of our commitment to transforming operations and elevating performance, LeanCore Consulting proudly presents the Operations Webinar Series.",
      "This series brings together experts in Supply Chain and Operations Management, delivering insightful discussions on current and relevant topics for professionals, academics, and students alike.",
      "Each session is led by experienced speakers and conducted free of charge via Zoom, making it accessible to a wide audience eager to enhance their knowledge and professional capability.",
    ],
    images: ["/services/research/event.png", "/services/research/event1.png"],
    imgLayout: "three",
  },
  {
    number: "02",
    title: "Talk Shows & Workshops",
    freq: "3–4× PER YEAR",
    texts: [
      "In collaboration with our partner, the Center of Business Operations Strategy (CBOS) – Universitas Ciputra, LeanCore Consulting actively contributes to talk shows, workshops, applied research projects, and knowledge-sharing sessions.",
      "These initiatives respond to emerging industrial challenges and institutional demand, focusing on statistical and data-driven analysis, operational strategy, and practical software applications.",
      "Through this partnership, LeanCore and CBOS provide an integrated platform connecting academic research with real-world business solutions, fostering analytical capability and innovation in operations management.",
    ],
    images: ["/services/research/talkshow.png", "/services/research/talkshow1.png", "/services/research/talkshow2.png"],
    imgLayout: "three",
  },
  {
    number: "03",
    title: "Book Publications",
    freq: "3× PER YEAR",
    texts: [
      "In collaboration with the Center of Business Operations Strategy (CBOS) – Universitas Ciputra, LeanCore Consulting develops and provides research-based publications that support methodological and analytical competencies in business studies.",
      "The series includes CB-SEM dengan AMOS: Teori dan Aplikasi, which explains the theoretical foundation and practical implementation of covariance-based structural equation modeling; JASP untuk Riset Bisnis, introducing accessible tools for quantitative data analysis; and Metode Penelitian Bisnis (SmartPLS), outlining quantitative research design and analysis using SmartPLS.",
    ],
    images: ["/services/research/book1.png", "/services/research/book2.png", "/services/research/book3.png"],
    imgLayout: "three",
    tall: true,
  },
  {
    number: "04",
    title: "Article Journal Publications – JBIS",
    freq: null,
    texts: [
      "The Journal of Business Innovation & Strategy (JBIS), initiated by LeanCore, serves as a publication platform for scholarly and practical works in management.",
      "It emphasizes empirical and statistically grounded studies addressing contemporary business challenges and provides valuable references for professionals, researchers, and organizations seeking evidence-based insights.",
    ],
    images: ["/services/research/journal.png"],
    imgLayout: "three",
  },
];

// ── AUTO-CENTERING IMAGE GRID ──
// Splits images into full rows + an (optional) shorter last row that is centered.
// Works for any count: 1, 2, 4, 5, 7, etc.
function ImgGrid({
  images,
  imgLayout,
  tall,
}: {
  images: string[];
  imgLayout: string;
  tall?: boolean;
}) {
  const cols = imgLayout === "two" ? 2 : imgLayout === "single" ? 1 : 3;
  const height = tall ? 280 : imgLayout === "single" ? 260 : 200;

  const remainder = images.length % cols;
  const fullCount = remainder === 0 ? images.length : images.length - remainder;
  const fullRows = images.slice(0, fullCount);
  const lastRow = remainder === 0 ? [] : images.slice(fullCount);

  // Width of each item accounting for 2px gaps
  const itemStyle = (count: number): React.CSSProperties => ({
    width: `calc(${100 / cols}% - ${((cols - 1) * 2) / cols}px)`,
    flexShrink: 0,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Full rows — render in sets of `cols` */}
      {Array.from({ length: fullRows.length / cols }).map((_, rowIdx) => (
        <div key={rowIdx} style={{ display: "flex", gap: 2 }}>
          {fullRows.slice(rowIdx * cols, rowIdx * cols + cols).map((src, i) => (
            <div key={i} className="event-img-wrap" style={itemStyle(cols)}>
              <img src={src} alt="" style={{ height }} />
            </div>
          ))}
        </div>
      ))}

      {/* Last incomplete row — centered */}
      {lastRow.length > 0 && (
        <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
          {lastRow.map((src, i) => (
            <div key={i} className="event-img-wrap" style={itemStyle(cols)}>
              <img src={src} alt="" style={{ height }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResearchPublication() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .rp-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .rp-hero {
          position: relative;
          background-color: #004276;
          background-image: url('/researchHero.jpg');
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

        .rp-hero-overlay {
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

        .rp-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .rp-hero-orb1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 70%);
          top: -200px; left: -100px;
          pointer-events: none;
        }

        .rp-hero-orb2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -150px; right: -80px;
          pointer-events: none;
        }

        .rp-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        .rp-back-link {
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
        .rp-back-link:hover { color: #FACC15; }
        .rp-back-arrow { transition: transform 0.2s; }
        .rp-back-link:hover .rp-back-arrow { transform: translateX(-3px); }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rp-hero-eyebrow {
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

        .rp-hero-eyebrow::before,
        .rp-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #FACC15; opacity: 0.5;
        }

        .rp-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
          animation: heroFadeUp 0.65s ease both 0.2s;
        }

        .rp-hero-title span { color: #FACC15; }

        .rp-hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 560px;
          line-height: 1.8;
          position: relative;
          animation: heroFadeUp 0.65s ease both 0.35s;
        }

        .rp-hero-content {
          position: relative;
          z-index: 2;
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
          max-width: 580px;
          line-height: 1.75;
          margin-bottom: 48px;
        }

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin-bottom: 48px;
        }

        /* ── OVERVIEW ── */
        .overview-section { background: #F8FAFC; }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .overview-left {
          background: #004276;
          padding: 44px 40px;
          border-top: 3px solid #FACC15;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .overview-left-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #FACC15;
        }

        .overview-left p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.80);
          line-height: 1.85;
        }

        .overview-right {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 44px 40px;
          height: 100%;
        }

        .overview-right-title {
          font-family: 'Roboto',;
          font-size: 20px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 28px;
        }

        /* ── RESEARCH AREAS — full navy ── */
        .areas-section {
          background: #004276;
          position: relative;
          overflow: hidden;
        }

        .areas-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .areas-bg-grid::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
        }

        .areas-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          position: relative;
          z-index: 1;
        }

        .areas-header {
          display: grid;
          grid-template-columns: auto 1px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 56px;
        }

        .areas-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(250,204,21,0.6);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .areas-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(250,204,21,0.4);
        }

        .areas-header-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #FACC15;
          line-height: 1.2;
        }

        .areas-header-rule {
          width: 1px;
          height: 80px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        .areas-header-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.85;
          max-width: 500px;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
        }

        .area-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 3px solid rgba(250,204,21,0.3);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.3s, border-top-color 0.3s;
        }

        .area-card:hover {
          background: rgba(250,204,21,0.06);
          border-top-color: #FACC15;
        }

        .area-card-title {
          font-family: 'Roboto',;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
        }

        .area-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .area-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 7px;
        }

        .area-item:last-child { margin-bottom: 0; }

        .area-bullet {
          flex-shrink: 0;
          width: 4px; height: 4px;
          background: #FACC15;
          border-radius: 1px;
          margin-top: 6px;
          opacity: 0.7;
        }

        .area-text {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.55;
        }

        /* ── EVENTS ── */
        .events-section { background: #fff; }

        .event-block { margin-bottom: 24px; }
        .event-block:last-child { margin-bottom: 0; }

        .event-block-inner {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          overflow: hidden;
          transition: border-top-color 0.3s;
        }

        .event-block-inner:hover { border-top-color: #FACC15; }

        .event-header {
          background: #004276;
          padding: 22px 36px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .event-num {
          width: 36px; height: 36px;
          background: #FACC15;
          color: #004276;
          font-size: 13px;
          font-weight: 700;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .event-header-title {
          font-family: 'Roboto',;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .event-freq {
          margin-left: auto;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(250,204,21,0.7);
          white-space: nowrap;
        }

        .event-body {
          padding: 36px;
          display: grid;
          gap: 32px;
        }

        .event-body.layout-two {
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }

        .event-text p {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 12px;
        }

        .event-text p:last-child { margin-bottom: 0; }

        .event-img-wrap {
          overflow: hidden;
          border-top: 3px solid #FACC15;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3f4f6;
        }

        .event-img-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.5s ease;
        }

        .event-img-wrap:hover img {
          transform: scale(1.04);
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
          max-width: 440px;
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

        /* ── SCROLL ANIMATIONS ── */
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        [data-animate] {
          animation: fadeUpIn 0.6s ease both;
          animation-play-state: paused;
        }

        [data-delay="1"] { animation-delay: 0.05s; }
        [data-delay="2"] { animation-delay: 0.15s; }
        [data-delay="3"] { animation-delay: 0.25s; }
        [data-delay="4"] { animation-delay: 0.35s; }
        [data-delay="5"] { animation-delay: 0.45s; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .areas-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .rp-hero { padding: 120px 24px 100px; }
          .rp-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .rp-hero-content { padding: 0 24px; }
          .overview-grid { grid-template-columns: 1fr; }
          .areas-inner { padding: 56px 24px; }
          .areas-header { grid-template-columns: 1fr; gap: 16px; }
          .areas-header-rule { display: none; }
          .areas-grid { grid-template-columns: 1fr 1fr; }
          .event-body.layout-two { grid-template-columns: 1fr; }
          .cta-inner { padding: 56px 24px; }
        }

        @media (max-width: 480px) {
          .areas-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="rp-page">
        {/* ── HERO ── */}
        <section className="rp-hero">
          <div className="rp-hero-overlay" />
          <div className="rp-hero-grid" />
          <div className="rp-hero-orb1" />
          <div className="rp-hero-orb2" />

          <Link href="/services" className="rp-back-link">
            <span className="rp-back-arrow">←</span>
            Back to Services
          </Link>

          <div className="rp-hero-content">
            <p className="rp-hero-eyebrow">KNOWLEDGE & INTELLIGENCE</p>
            <h1 className="rp-hero-title">
              Research &amp; <span>Publication</span>
            </h1>
            <p className="rp-hero-desc">
              Organizations need more than intuition — they require insights
              grounded in research, analysis, and evidence-based intelligence to
              drive sustainable competitive advantage.
            </p>
          </div>

          <div className="rp-hero-bottom-fade" />
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
            <p className="sec-eyebrow">WHAT WE DO</p>
            <h2 className="sec-title">Research & Publication Program</h2>
            <p className="sec-desc">
              Bridging academic rigor with practical business application across
              market analysis, feasibility studies, industry intelligence, and
              operational research.
            </p>
            <div className="sec-divider" />

            <div className="overview-grid">
              <div className="overview-left" data-animate data-delay="1">
                <h3 className="overview-left-title">About the Program</h3>
                <p>
                  LeanCore's Research and Publication Program is designed to
                  bridge academic rigor with practical business application. The
                  program encompasses market analysis, feasibility studies,
                  industry intelligence, operational research, and digital
                  readiness assessment.
                </p>
                <p>
                  Each study is crafted to provide actionable insights that
                  drive innovation, efficiency, and competitiveness while
                  contributing to advancing applied business knowledge through
                  journal publications and thought leadership initiatives.
                </p>
              </div>

              <div className="overview-right" data-animate data-delay="2">
                <h3 className="overview-right-title">Our Research Services</h3>
                {researchAreas.map((area, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "16px 0",
                      borderBottom:
                        i < researchAreas.length - 1
                          ? "1px solid #F1F5F9"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        background: "#004276",
                        borderRadius: 1,
                        marginTop: 6,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1E293B",
                          marginBottom: 2,
                          lineHeight: 1.4,
                        }}
                      >
                        {area.title}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 300,
                          color: "#64748B",
                          lineHeight: 1.6,
                        }}
                      >
                        {area.items.slice(0, 2).join(", ")}
                        {area.items.length > 2
                          ? `, +${area.items.length - 2} more`
                          : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RESEARCH AREAS — full navy ── */}
        <section className="areas-section">
          <div className="areas-bg-grid" />
          <div className="areas-inner">
            <div className="areas-header">
              <div>
                <p className="areas-eyebrow">RESEARCH SCOPE</p>
                <h2 className="areas-header-title">
                  Research
                  <br />
                  Areas
                </h2>
              </div>
              <div className="areas-header-rule" />
              <p className="areas-header-desc">
                Five specialized research domains designed to deliver
                evidence-based insights across every stage of the business
                lifecycle from market entry to operational optimization and
                digital transformation.
              </p>
            </div>

            <div className="areas-grid">
              {researchAreas.map((card, i) => (
                <div
                  key={i}
                  className="area-card"
                  data-animate
                  data-delay={String(i + 1)}
                >
                  <h4 className="area-card-title">{card.title}</h4>
                  <div className="area-divider" />
                  <div>
                    {card.items.map((item, j) => (
                      <div key={j} className="area-item">
                        <span className="area-bullet" />
                        <span className="area-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section className="events-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">INITIATIVES</p>
            <h2 className="sec-title">Events & Publications</h2>
            <p className="sec-desc">
              A robust portfolio of knowledge sharing activities connecting
              academia, industry, and professional practice.
            </p>
            <div className="sec-divider" />

            {events.map((ev, idx) => (
              <div
                key={ev.number}
                className="event-block"
                data-animate
                data-delay={String((idx % 3) + 1)}
              >
                <div className="event-block-inner">
                  <div className="event-header">
                    <div className="event-num">{ev.number}</div>
                    <h3 className="event-header-title">{ev.title}</h3>
                    {ev.freq && <span className="event-freq">{ev.freq}</span>}
                  </div>

                  <div
                    className={`event-body ${ev.imgLayout === "single" || ev.imgLayout === "two" ? "layout-two" : ""}`}
                  >
                    <div className="event-text">
                      {ev.texts.map((t, i) => (
                        <p key={i}>{t}</p>
                      ))}
                    </div>

                    <ImgGrid
                      images={ev.images}
                      imgLayout={ev.imgLayout}
                      tall={ev.tall}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="sec-wrap">
            <div className="cta-inner">
              <div className="cta-content">
                <p className="cta-eyebrow">COLLABORATE</p>
                <h3 className="cta-title">
                  Turn Research Into
                  <br />
                  Strategic Advantage
                </h3>
                <p className="cta-desc">
                  Collaborate with LeanCore to transform data into actionable
                  insights and evidence based strategies that drive innovation,
                  operational excellence, and sustainable growth.
                </p>
                <Link href="/contact" className="cta-btn">
                  START COLLABORATION →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
