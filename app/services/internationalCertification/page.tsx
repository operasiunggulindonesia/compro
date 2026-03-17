"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

const certifications = [
  {
    title: "Certified Strategic Business Analyst (CSBA)",
    summary:
      "Strategic business analysis, competitive positioning, and corporate strategy execution.",
    syllabusUrl: "/silabus/silabus-csba.pdf",
    details: [
      {
        label: "Format",
        value:
          "4 intensive hybrid/online sessions including case studies and international certification exam.",
      },
      {
        label: "Topics",
        items: [
          "Strategic Management & Competitive Advantage",
          "External & Internal Analysis Frameworks",
          "Corporate Strategy & Diversification",
          "Strategy Execution & Strategic Control",
        ],
      },
    ],
  },
  {
    title: "Certified Retail Management Expert (CRME)",
    summary:
      "Retail strategy, merchandising, pricing, and digital transformation.",
    syllabusUrl: "/silabus/silabus-crme.pdf",
    details: [
      {
        label: "Format",
        value: "4 hybrid sessions focused on modern retail management.",
      },
      {
        label: "Topics",
        items: [
          "Retail Strategy & Retail Mix",
          "Merchandising & Pricing",
          "Retail Logistics & Distribution",
          "Digital Retail & E-Tailing",
        ],
      },
    ],
  },
  {
    title: "Certified Supply Chain Manager (CSCM)",
    summary: "Comprehensive supply chain design and logistics optimization.",
    syllabusUrl: "/silabus/silabus-cscm.pdf",
    details: [
      {
        label: "Format",
        value: "4 sessions covering end-to-end supply chain frameworks.",
      },
      {
        label: "Topics",
        items: [
          "Inventory Planning & Control",
          "Demand Forecasting & CRM/SRM",
          "Logistics Cost Planning",
          "Digital Supply Chain (e-SCM)",
        ],
      },
    ],
  },
  {
    title: "Certified International Project Manager (CIPM)",
    summary: "International project lifecycle and governance mastery.",
    syllabusUrl: "/silabus/silabus-cipm.pdf",
    details: [
      {
        label: "Format",
        value: "3 structured sessions on project execution excellence.",
      },
      {
        label: "Topics",
        items: [
          "Integration & Scope Management",
          "Time & Cost Control",
          "Quality & Risk Management",
          "Procurement & Communication",
        ],
      },
    ],
  },
  {
    title: "Certified Forecast Demand Manager (CFDM)",
    summary: "Demand forecasting and advanced statistical modeling.",
    syllabusUrl: "/silabus/silabus-cfdm.pdf",
    details: [
      {
        label: "Format",
        value: "4 sessions focused on demand-driven forecasting systems.",
      },
      {
        label: "Topics",
        items: [
          "Forecasting Techniques",
          "Statistical Models",
          "Demand Planning Strategy",
          "Promotion & New Product Forecasting",
        ],
      },
    ],
  },
];

const aafmCredentials = [
  {
    title: "From Graduate Standards to Global Credentials",
    desc: "Setting benchmarks for postgraduate education with certifications recognized across the USA, Europe, Asia, and the Middle East.",
  },
  {
    title: "Global Network — 150+ Countries",
    desc: "A worldwide community of certified professionals spanning the United States, UK, India, Singapore, UAE, and beyond.",
  },
  {
    title: "Recognized by AACSB & ACBSP Alumni",
    desc: "Endorsed by accreditation bodies linked to Harvard, INSEAD, Oxford, and top AACSB/ACBSP business schools worldwide.",
  },
  {
    title: "ISO 29993 & ISO 9001 Certified",
    desc: "The first international certification body achieving dual ISO accreditation for quality management and learning services.",
  },
  {
    title: "Alliances with Top Universities",
    desc: "Partnerships and recognition from Wharton, NYU, Stanford, and leading institutions across Europe and Asia.",
  },
  {
    title: "Over 25+ Professional Designations",
    desc: "Covering Wealth Management, Supply Chain, Retail, Business Analysis, and Finance for professionals at every level.",
  },
];

export default function InternationalCertification() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ic-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .ic-hero {
          position: relative;
          background-color: #004276;
          background-image: url('/certifHero.jpg');
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

        .ic-hero-overlay {
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

        .ic-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .ic-hero-orb1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 70%);
          top: -200px; left: -100px; pointer-events: none;
        }

        .ic-hero-orb2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -150px; right: -80px; pointer-events: none;
        }

        .ic-back-link {
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

        .ic-back-link:hover { color: #FACC15; }
        .ic-back-arrow { transition: transform 0.2s; }
        .ic-back-link:hover .ic-back-arrow { transform: translateX(-3px); }

        .ic-hero-eyebrow {
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

        .ic-hero-eyebrow::before,
        .ic-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #FACC15; opacity: 0.5;
        }

        .ic-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
        }

        .ic-hero-title span { color: #FACC15; }

        .ic-hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 1000px;
          line-height: 1.8;
          position: relative;
        }

        .ic-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 64px;
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
          width: 36px; height: 2px;
          background: #FACC15;
        }

        .sec-title {
          font-family: 'Roboto',;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #004276;
          margin-bottom: 10px;
        }

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin: 28px 0 40px;
        }

        /* ── INTRO SECTION ── */
        .intro-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .intro-overview {
          background: #004276;
          padding: 40px 36px;
          border-top: 3px solid #FACC15;
        }

        .intro-overview-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #FACC15;
          margin-bottom: 20px;
        }

        .intro-overview p {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.85;
          margin-bottom: 14px;
        }

        .intro-overview p span { color: #FACC15; font-weight: 600; }

        .intro-list {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 36px 32px;
        }

        .intro-list-title {
          font-family: 'Roboto',;
          font-size: 20px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 24px;
        }

        .intro-cert-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #F1F5F9;
          transition: padding-left 0.2s;
          cursor: default;
        }

        .intro-cert-item:last-child { border-bottom: none; }
        .intro-cert-item:hover { padding-left: 6px; }

        .intro-cert-dot {
          flex-shrink: 0;
          width: 7px; height: 7px;
          background: #004276;
          border-radius: 1px;
          margin-top: 6px;
          transition: background 0.2s;
        }

        .intro-cert-item:hover .intro-cert-dot { background: #FACC15; }

        .intro-cert-text {
          font-size: 13px;
          font-weight: 400;
          color: #475569;
          line-height: 1.55;
          transition: color 0.2s;
        }

        .intro-cert-item:hover .intro-cert-text { color: #004276; }

        /* ── AAFM SECTION ── */
        .aafm-section { background: #fff; }

        .aafm-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 56px;
        }

        .aafm-intro-title {
          font-family: 'Roboto',;
          font-size: 28px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 16px;
        }

        .aafm-intro-text {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
        }

        .aafm-img-wrap {
          overflow: hidden;
          border-top: 3px solid #FACC15;
        }

        .aafm-img-wrap img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          display: block;
        }

        .aafm-credentials-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #94A3B8;
          text-align: center;
          margin-bottom: 28px;
        }

        .aafm-creds-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }

        .aafm-cred-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 24px 20px;
          transition: box-shadow 0.2s, transform 0.2s, border-top-color 0.2s;
        }

        .aafm-cred-card:hover {
          box-shadow: 0 8px 32px rgba(0,66,118,0.08);
          transform: translateY(-3px);
          border-top-color: #FACC15;
        }

        .aafm-cred-title {
          font-size: 13px;
          font-weight: 600;
          color: #004276;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .aafm-cred-desc {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.65;
        }

        .lc-aafm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .lc-aafm-img {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lc-aafm-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .lc-aafm-title span { color: #FACC15; }

        .lc-aafm-text {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 12px;
        }

        .lc-aafm-note {
          font-size: 12px;
          font-weight: 300;
          color: #94A3B8;
          font-style: italic;
        }

        /* ── ACCORDION ── */
        .accordion-section { background: #F8FAFC; }

        .accordion-item {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-left: 3px solid #004276;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-left-color 0.2s, box-shadow 0.2s;
        }

        .accordion-item.open {
          border-left-color: #FACC15;
          box-shadow: 0 4px 24px rgba(0,66,118,0.08);
        }

        .accordion-btn {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s;
          gap: 16px;
        }

        .accordion-btn:hover { background: #F8FAFC; }

        .accordion-title {
          font-family: 'Roboto',;
          font-size: 16px;
          font-weight: 700;
          color: #004276;
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .accordion-summary {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
        }

        .accordion-icon {
          flex-shrink: 0;
          width: 28px; height: 28px;
          background: #004276;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FACC15;
          font-size: 18px;
          font-weight: 300;
          transition: background 0.2s;
        }

        .accordion-item.open .accordion-icon { background: #FACC15; color: #004276; }

        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease;
        }

        .accordion-item.open .accordion-body { max-height: 600px; }

        .accordion-content {
          padding: 20px 24px 24px;
          border-top: 1px solid #F1F5F9;
        }

        .accordion-format {
          font-size: 13px;
          font-weight: 300;
          color: #475569;
          margin-bottom: 16px;
          line-height: 1.65;
        }

        .accordion-topics-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #94A3B8;
          margin-bottom: 10px;
        }

        .accordion-topics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .accordion-topic {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #475569;
          line-height: 1.5;
        }

        .accordion-topic::before {
          content: '';
          flex-shrink: 0;
          width: 6px; height: 6px;
          background: #FACC15;
          border-radius: 1px;
          margin-top: 5px;
        }

        /* ── ACCORDION ACTION BUTTONS ── */
        .accordion-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .silabus-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: transparent;
          border: 1.5px solid #004276;
          color: #004276;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }

        .silabus-btn:hover {
          background: #004276;
          color: #FACC15;
          border-color: #004276;
          transform: translateY(-2px);
        }

        .daftar-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #25D366;
          border: 1.5px solid #25D366;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }

        .daftar-btn:hover {
          background: #1EBE5D;
          border-color: #1EBE5D;
          transform: translateY(-2px);
        }

        /* ── PREVIOUS PROJECTS ── */
        .prev-section { background: #fff; }

        .prev-header { text-align: center; margin-bottom: 40px; }

        .prev-header-desc {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .prev-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .prev-img-wrap {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #FACC15;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── CTA ── */
        .cta-section { background: #F8FAFC; padding: 80px 48px; }

        .cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          background: #004276;
          padding: 72px 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
        }

        .cta-grid-tex {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .cta-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #FACC15; margin-bottom: 14px; position: relative; }

        .cta-title {
          font-family: 'Roboto',;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          position: relative;
          line-height: 1.2;
        }

        .cta-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-bottom: 28px;
          position: relative;
          max-width: 400px;
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
          position: relative;
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
          .aafm-creds-grid { grid-template-columns: repeat(2, 1fr); }
          .accordion-topics { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .ic-hero { padding: 120px 24px 100px; }
          .ic-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .intro-grid { grid-template-columns: 1fr; }
          .aafm-intro-grid { grid-template-columns: 1fr; }
          .lc-aafm-grid { grid-template-columns: 1fr; }
          .aafm-creds-grid { grid-template-columns: 1fr; }
          .prev-images { grid-template-columns: 1fr; }
          .cta-section { padding: 56px 24px; }
          .cta-inner { padding: 48px 28px; }
          .accordion-actions { flex-direction: column; align-items: flex-start; }
          .silabus-btn, .daftar-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="ic-page">
        {/* ── HERO ── */}
        <section className="ic-hero">
          <div className="ic-hero-overlay" />
          <div className="ic-hero-grid" />
          <div className="ic-hero-orb1" />
          <div className="ic-hero-orb2" />

          <Link href="/services" className="ic-back-link">
            <span className="ic-back-arrow">←</span>
            Back to Services
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ position: "relative" }}
          >
            <p className="ic-hero-eyebrow">INTERNATIONAL CERTIFICATION</p>
            <h1 className="ic-hero-title">
              Globally <span>Recognized</span>
              <br />
              Professional Credentials
            </h1>
            <p className="ic-hero-desc">
              LeanCore delivers internationally recognized certifications in
              collaboration with AAFM®, combining global standards with
              practical implementation excellence.
            </p>
          </motion.div>

          <div className="ic-hero-bottom-fade" />
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

        {/* ── INTRO ── */}
        <section style={{ background: "#F8FAFC" }}>
          <div className="sec-wrap">
            <p className="sec-eyebrow">PROGRAM OVERVIEW</p>
            <h2 className="sec-title">Certifications & Workshops</h2>
            <div className="sec-divider" />

            <div className="intro-grid">
              <div className="intro-overview">
                <h3 className="intro-overview-title">Program Overview</h3>
                <p>
                  In today's increasingly complex industrial landscape,
                  professionals in operations and supply chain management are
                  expected to hold globally recognized credentials. Through the
                  Certifications & Workshops program facilitated by LeanCore
                  Consulting in collaboration with the global certification body{" "}
                  <span>AAFM®</span>, participants gain both formal competency
                  recognition and in-depth knowledge of best practices.
                </p>
                <p>
                  This program enhances individual capabilities in managing
                  strategic operational and organizational functions in an
                  integrated manner. Participants acquire practical skills to
                  analyze business requirements, manage retail operations
                  effectively, and design efficient supply chain strategies.
                </p>
              </div>

              <div className="intro-list">
                <h3 className="intro-list-title">Available Certifications</h3>
                {certifications.map((item, i) => (
                  <div key={i} className="intro-cert-item">
                    <span className="intro-cert-dot" />
                    <span className="intro-cert-text">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AAFM ── */}
        <section className="aafm-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">OUR PARTNER</p>
            <h2 className="sec-title">What is AAFM®?</h2>
            <div className="sec-divider" />

            <div className="aafm-intro-grid">
              <div>
                <p className="aafm-intro-text">
                  AAFM® (American Academy of Financial Management) is a
                  U.S.–based professional certification body establishing
                  international standards in business, finance, and management
                  education. Acting as a global standard-setting authority,
                  AAFM® bridges academia, industry, and governance to strengthen
                  professional practices worldwide.
                </p>
              </div>
              <div className="aafm-img-wrap">
                <Image
                  src="/aafm.jpg"
                  alt="AAFM Global Certification"
                  width={500}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>

            <p className="aafm-credentials-label">CREDIBILITY BACKED BY</p>

            <motion.div
              className="aafm-creds-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aafmCredentials.map((item, i) => (
                <motion.div
                  key={i}
                  className="aafm-cred-card"
                  variants={fadeUp}
                >
                  <h4 className="aafm-cred-title">{item.title}</h4>
                  <p className="aafm-cred-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="lc-aafm-grid">
              <div className="lc-aafm-img">
                <div>
                  <Image
                    src="/aafmSertif.png"
                    alt="AAFM Certification Example"
                    width={420}
                    height={300}
                    className="object-contain"
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#94A3B8",
                      marginTop: "12px",
                      fontStyle: "italic",
                    }}
                  >
                    Illustration of the certificate awarded to participants upon
                    successful completion of the certification program.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="lc-aafm-title">
                  LeanCore Certifications,
                  <br />
                  Powered by <span>AAFM®</span>
                </h3>
                <p className="lc-aafm-text">
                  Through its partnership with AAFM®, LeanCore delivers
                  internationally recognized certifications that combine global
                  standards with practical business impact. Each program
                  strengthens technical and managerial expertise while providing
                  credentials acknowledged across industries and regions
                  worldwide.
                </p>
                <p className="lc-aafm-text">
                  For professionals and organizations, this means enhanced
                  credibility, stronger career pathways, and the assurance that
                  LeanCore's certification programs meet the highest
                  international standards of excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACCORDION ── */}
        <section className="accordion-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">PROGRAM DETAILS</p>
            <h2 className="sec-title">Certification Program Details</h2>
            <div className="sec-divider" />

            {certifications.map((item, index) => (
              <div
                key={index}
                className={`accordion-item${activeIndex === index ? " open" : ""}`}
              >
                <button
                  className="accordion-btn"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <div>
                    <p className="accordion-title">{item.title}</p>
                    <p className="accordion-summary">{item.summary}</p>
                  </div>
                  <span className="accordion-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div className="accordion-body">
                  <div className="accordion-content">
                    {item.details.map((d, i) => (
                      <div key={i}>
                        {d.value && (
                          <p className="accordion-format">{d.value}</p>
                        )}
                        {d.items && (
                          <>
                            <p className="accordion-topics-label">
                              TOPICS COVERED
                            </p>
                            <div className="accordion-topics">
                              {d.items.map((t, j) => (
                                <div key={j} className="accordion-topic">
                                  {t}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}

                    {/* ── ACTION BUTTONS ── */}
                    <div className="accordion-actions">
                      {/* Download Silabus */}
                      <a
                        href={item.syllabusUrl}
                        download
                        className="silabus-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        DOWNLOAD SILABUS
                      </a>

                      {/* Daftar via WhatsApp */}
                      <a
                        href={`https://wa.me/6281803540000?text=Halo%20LeanCore%20Consulting,%20saya%20ingin%20mendaftar%20program%20*${encodeURIComponent(item.title)}*.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="daftar-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        DAFTAR SEKARANG
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PREVIOUS PROJECTS ── */}
        <section className="prev-section">
          <div className="sec-wrap">
            <div className="prev-header">
              <p className="sec-eyebrow" style={{ justifyContent: "center" }}>
                TRACK RECORD
              </p>
              <h2 className="sec-title" style={{ textAlign: "center" }}>
                Previous Certification Projects
              </h2>
              <p className="prev-header-desc">
                Our certification graduates come from manufacturing,
                pharmaceuticals, energy, transportation, and financial services
                sectors—demonstrating the broad applicability and impact of our
                programs.
              </p>
            </div>

            <div className="prev-images">
              <div className="prev-img-wrap">
                <Image
                  src="/services/certif/certif.png"
                  alt="LeanCore Certification"
                  width={500}
                  height={350}
                  className="object-contain"
                  style={{ maxHeight: 300 }}
                />
              </div>
              <div className="prev-img-wrap">
                <Image
                  src="/services/certif/certif1.png"
                  alt="AAFM Certification Example"
                  width={500}
                  height={350}
                  className="object-contain"
                  style={{ maxHeight: 300 }}
                />
              </div>
              <div className="prev-img-wrap">
                <Image
                  src="/services/certif/certif2.jpeg"
                  alt="AAFM Certification Example"
                  width={500}
                  height={350}
                  className="object-contain"
                  style={{ maxHeight: 300 }}
                />
              </div>
               <div className="prev-img-wrap">
                <Image
                  src="/services/certif/certif3.jpeg"
                  alt="AAFM Certification Example"
                  width={500}
                  height={350}
                  className="object-contain"
                  style={{ maxHeight: 300 }}
                />
              </div>
               <div className="prev-img-wrap">
                <Image
                  src="/services/certif/certif4.jpeg"
                  alt="AAFM Certification Example"
                  width={500}
                  height={350}
                  className="object-contain"
                  style={{ maxHeight: 300 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-grid-tex" />
            <p className="cta-eyebrow">READY TO START?</p>
            <h3 className="cta-title">
              Elevate Your Professional
              <br />
              Credentials Today
            </h3>
            <p className="cta-desc">
              Join LeanCore's internationally recognized certification programs
              and open doors to global opportunities.
            </p>
            <Link href="/contact" className="cta-btn">
              ENROLL NOW →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
