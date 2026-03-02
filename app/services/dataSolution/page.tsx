"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const supportServices = [
  "Data Cleaning & Preprocessing",
  "Validity & Reliability Testing",
  "Descriptive & Inferential Statistics",
  "Quantitative & Qualitative Modeling",
  "Structural Equation Modeling (SEM / PLS)",
  "Regression, Multivariate & Panel Data Analysis",
  "Research Visualization & Reporting",
  "Journal-Standard Interpretation",
];

const valueProps = [
  {
    number: "01",
    title: "Methodological Alignment",
    desc: "Analysis aligned with your research questions, hypotheses, and theoretical framework to ensure coherent scientific contribution.",
  },
  {
    number: "02",
    title: "Journal-Ready Output",
    desc: "Interpretation and reporting structured according to academic publication standards for undergraduate, master's, and doctoral levels.",
  },
  {
    number: "03",
    title: "Advanced Statistical Expertise",
    desc: "Deep expertise in SEM, PLS, regression, multivariate and panel data modeling applied with methodological rigor.",
  },
];

export default function DataSolution() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ds-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO — centered like internationalCertification ── */
        .ds-hero {
          position: relative;
          background: #004276;
          padding: 160px 48px 120px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 580px;
          justify-content: center;
        }

        .ds-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,42,78,0.90) 0%,
            rgba(0,66,118,0.80) 50%,
            rgba(0,20,40,0.90) 100%
          );
        }

        .ds-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .ds-hero-orb1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 70%);
          top: -200px; left: -100px;
          pointer-events: none;
        }

        .ds-hero-orb2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -150px; right: -80px;
          pointer-events: none;
        }

        .ds-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        .ds-back-link {
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
        }

        .ds-back-link:hover { color: #FACC15; }
        .ds-back-arrow { transition: transform 0.2s; }
        .ds-back-link:hover .ds-back-arrow { transform: translateX(-3px); }

        .ds-hero-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          margin-bottom: 24px;
        }

        .ds-hero-eyebrow::before,
        .ds-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #FACC15; opacity: 0.5;
        }

        .ds-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
        }

        .ds-hero-title span { 
        color: #FACC15; 
        position: relative;
          margin: 0 auto;
          }

        .ds-hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          line-height: 1.8;
          position: relative;
          margin: 0 auto;
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
          font-size: clamp(26px, 3.5vw, 38px);
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
        }

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin: 28px 0 40px;
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
          display: flex;
          flex-direction: column;
        }

        .overview-right-title {
          font-family: 'Roboto',;
          font-size: 20px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 28px;
        }

        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #F1F5F9;
          transition: padding-left 0.2s;
        }

        .service-item:last-child { border-bottom: none; padding-bottom: 0; }
        .service-item:first-of-type { padding-top: 0; }
        .service-item:hover { padding-left: 4px; }

        .service-dot {
          flex-shrink: 0;
          width: 6px; height: 6px;
          background: #004276;
          border-radius: 1px;
          margin-top: 6px;
          transition: background 0.2s;
        }

        .service-item:hover .service-dot { background: #FACC15; }

        .service-text {
          font-size: 13px;
          font-weight: 400;
          color: #475569;
          line-height: 1.6;
          transition: color 0.2s;
        }

        .service-item:hover .service-text { color: #004276; }

        /* ── VALUE PROPS — navy panel ── */
        .value-section {
          background: #004276;
          position: relative;
          overflow: hidden;
        }

        .value-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .value-bg-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
        }

        .value-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          position: relative;
          z-index: 1;
        }

        .value-header {
          display: grid;
          grid-template-columns: auto 1px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 56px;
        }

        .value-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(250,204,21,0.6);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .value-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(250,204,21,0.4);
        }

        .value-header-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #FACC15;
          line-height: 1.2;
        }

        .value-header-rule {
          width: 1px;
          height: 80px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        .value-header-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.85;
          max-width: 500px;
        }

        .value-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .value-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 3px solid rgba(250,204,21,0.3);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.3s, border-top-color 0.3s;
        }

        .value-card:hover {
          background: rgba(250,204,21,0.06);
          border-top-color: #FACC15;
        }

        .value-card-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #FACC15;
        }

        .value-card-title {
          font-family: 'Roboto',;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
        }

        .value-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .value-card-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
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
          width: 36px;
          height: 1px;
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

        @media (max-width: 1024px) {
          .value-cards { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .ds-hero { padding: 120px 24px 100px; }
          .ds-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .overview-grid { grid-template-columns: 1fr; }
          .value-inner { padding: 56px 24px; }
          .value-header { grid-template-columns: 1fr; gap: 16px; }
          .value-header-rule { display: none; }
          .value-cards { grid-template-columns: 1fr; }
          .cta-inner { padding: 56px 24px; }
        }
      `}</style>

      <div className="ds-page">
        {/* ── HERO ── */}
        <section className="ds-hero">
          <Image
            src="/dataSolution.jpg"
            alt="Data Solution"
            fill
            priority
            className="object-cover"
          />
          <div className="ds-hero-overlay" />
          <div className="ds-hero-grid" />
          <div className="ds-hero-orb1" />
          <div className="ds-hero-orb2" />

          <Link href="/services" className="ds-back-link">
            <span className="ds-back-arrow">←</span>
            Back to Services
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ position: "relative", zIndex: 2 }}
          >
            <p className="ds-hero-eyebrow">ACADEMIC RESEARCH SUPPORT</p>
            <h1 className="ds-hero-title">
              Data Solution
              <br />
              <span>Research Support for Undergraduate, </span>
                <span> Master’s, and Doctoral Programs </span>
            </h1>
            <p className="ds-hero-desc">
              A methodology-driven research mentoring service designed to
              support undergraduate, master's, and doctoral students in
              producing rigorous, publishable, and scientifically grounded
              research outcomes.
            </p>
          </motion.div>

          <div className="ds-hero-bottom-fade" />
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
            <p className="sec-eyebrow">RESEARCH SUPPORT</p>
            <h2 className="sec-title">
              Methodology-Driven Research Assistance
            </h2>
            <p className="sec-desc">
              Going beyond technical analysis to ensure every statistical output
              aligns with your research questions, theoretical framework, and
              intended scientific contribution.
            </p>
            <div className="sec-divider" />

            <div className="overview-grid">
              <div className="overview-left">
                <h3 className="overview-left-title">About the Service</h3>
                <p>
                  Our approach goes beyond technical analysis. We ensure that
                  every statistical output aligns with your research questions,
                  theoretical framework, and intended scientific contribution.
                </p>
                <p>
                  From data preparation to interpretation aligned with journal
                  standards, we provide structured guidance that strengthens
                  both analytical rigor and academic credibility — at every
                  level of study.
                </p>
              </div>

              <div className="overview-right">
                <h3 className="overview-right-title">
                  Research Support Services
                </h3>
                {supportServices.map((item, i) => (
                  <div key={i} className="service-item">
                    <span className="service-dot" />
                    <p className="service-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUE PROPS ── */}
        <section className="value-section">
          <div className="value-bg-grid" />
          <div className="value-bg-top" />
          <div className="value-inner">
            <div className="value-header">
              <div>
                <p className="value-eyebrow">VALUE PROPOSITION</p>
                <h2 className="value-header-title">
                  Why Choose
                  <br />
                  Data Solution?
                </h2>
              </div>
              <div className="value-header-rule" />
              <p className="value-header-desc">
                Our support is not merely statistical — but methodological. We
                ensure coherence between research design, analytical model, and
                theoretical grounding to maximize your academic contribution.
              </p>
            </div>

            <motion.div
              className="value-cards"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {valueProps.map((item) => (
                <motion.div
                  key={item.number}
                  className="value-card"
                  variants={fadeUp}
                >
                  <span className="value-card-num">{item.number}</span>
                  <h3 className="value-card-title">{item.title}</h3>
                  <div className="value-card-divider" />
                  <p className="value-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="sec-wrap">
            <div className="cta-inner">
              <div className="cta-content">
                <p className="cta-eyebrow">GET STARTED</p>
                <h3 className="cta-title">
                  Strengthen Your Research
                  <br />
                  with Scientific Precision
                </h3>
                <p className="cta-desc">
                  Let's ensure your research stands on strong methodological
                  foundations and delivers meaningful academic contribution.
                </p>
                <Link href="/contact" className="cta-btn">
                  CONSULT YOUR RESEARCH →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
