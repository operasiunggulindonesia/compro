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
  visible: { transition: { staggerChildren: 0.08 } },
};

const trainingAreas = [
  "Production Planning & Inventory Optimization",
  "Strategic Thinking for Manufacturing Leaders",
  "SCM Risk, Resilience & Disruption Management",
  "Managing Change & Lean Leadership Culture",
  "Digital Lean (IoT, Automation, MES)",
  "Lean Thinking & Operational Excellence Principles",
  "Demand Forecasting & Sales & Operations Planning (S&OP)",
  "Kaizen, 5S, TPM & Gemba Walk",
  "Value Stream Mapping & Process Redesign",
  "Six Sigma & Problem-Solving (DMAIC)",
];

const whyChoose = [
  {
    title: "Professional Certification",
    desc: "Gain recognized credentials to boost credibility in operations and management.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Tailored schedules to fit company or individual needs.",
  },
  {
    title: "Comprehensive Material",
    desc: "Covering latest practices in Lean, Six Sigma, and digitalization.",
  },
  {
    title: "Experienced Trainers",
    desc: "Delivered by industry experts with strong managerial insight.",
  },
  {
    title: "Real-Industry Case Studies",
    desc: "Learn from actual challenges faced by leading companies.",
  },
  {
    title: "Free Consultation",
    desc: "Advisory sessions to diagnose issues and design solutions.",
  },
  {
    title: "Holistic Competency Development",
    desc: "Enhance technical, managerial, and leadership skills.",
  },
  {
    title: "Practical & Data-Driven Approach",
    desc: "Equip participants to make smarter, analytics-based decisions.",
  },
];

const projects = [
  "CB-SEM for Business Research",
  "SEM-PLS for Business Research",
  "Data Analytics for Business Research",
  "Green Supply Chain Management for the Plastic Industry",
  "Optimization of Cold Chain at ID FOOD",
  "Development of Business Process Management Performance at PPPK Petra",
  "Internet of Defense Things Workshop – Indonesian Ministry of Defense",
  "Material Requirement Planning System Workshop – Indonesian Ministry of Defense",
  "Mini MBA Leadership Development Program – PMP ICE & FROST",
];

const workshopPhotos = [
  { src: "/services/workshop/workshop.jpeg" },
  { src: "/services/workshop/workshop1.png" },
  { src: "/services/workshop/workshop2.jpeg" },
  { src: "/services/workshop/workshop3.jpeg" },
];

export default function WorkshopTraining() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .wt-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .wt-hero {
          position: relative;
          padding: 160px 48px 120px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 580px;
          justify-content: center;
        }

        .wt-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,42,78,0.90) 0%,
            rgba(0,66,118,0.80) 50%,
            rgba(0,20,40,0.90) 100%
          );
        }

        .wt-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .wt-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        .wt-back-link {
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

        .wt-back-link:hover { color: #FACC15; }
        .wt-back-arrow { transition: transform 0.2s; }
        .wt-back-link:hover .wt-back-arrow { transform: translateX(-3px); }

        .wt-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          position: relative;
        }

        .wt-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          margin-bottom: 24px;
        }

        .wt-hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }

        .wt-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .wt-hero-title span { color: #FACC15; }

        .wt-hero-desc {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          line-height: 1.8;
        }

        .wt-hero-bottom-fade {
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

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin: 28px 0 40px;
        }

        /* ── OVERVIEW + TRAINING AREAS ── */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .overview-card {
          background: #004276;
          border-top: 3px solid #FACC15;
          padding: 40px 36px;
          height: 100%;
        }

        .overview-card-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #FACC15;
          margin-bottom: 20px;
        }

        .overview-card p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          line-height: 1.85;
          margin-bottom: 16px;
        }

        .overview-card p:last-child { margin-bottom: 0; }

        .training-areas-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 40px 36px;
        }

        .training-areas-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 24px;
        }

        .training-area-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #F1F5F9;
          font-size: 13px;
          font-weight: 400;
          color: #475569;
          line-height: 1.5;
          transition: color 0.2s;
        }

        .training-area-item:last-child { border-bottom: none; }
        .training-area-item:hover { color: #004276; }

        .training-area-dot {
          flex-shrink: 0;
          width: 7px; height: 7px;
          background: #004276;
          border-radius: 1px;
          margin-top: 5px;
          transition: background 0.2s;
        }

        .training-area-item:hover .training-area-dot { background: #FACC15; }

        /* ── WHY CHOOSE ── */
        .why-section { background: #fff; }

        .why-section-center {
          text-align: center;
          margin-bottom: 48px;
        }

        .why-section-center .sec-eyebrow {
          justify-content: center;
        }

        .why-section-center .sec-eyebrow::before {
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background: #FACC15;
        }

        .why-section-center .sec-eyebrow::after { display: none; }

        .why-desc {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .why-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 24px 20px;
          transition: box-shadow 0.25s, transform 0.25s, border-top-color 0.25s;
        }

        .why-card:hover {
          box-shadow: 0 8px 32px rgba(0,66,118,0.09);
          transform: translateY(-4px);
          border-top-color: #FACC15;
        }

        .why-card-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #FACC15;
          margin-bottom: 10px;
        }

        .why-card-title {
          font-size: 13px;
          font-weight: 600;
          color: #004276;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .why-card-desc {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.65;
        }

        /* ── PROJECTS ── */
        .projects-section { background: #F8FAFC; }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        .project-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-left: 3px solid #004276;
          padding: 16px 18px;
          font-size: 13px;
          font-weight: 400;
          color: #475569;
          line-height: 1.55;
          transition: border-left-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }

        .project-card:hover {
          border-left-color: #FACC15;
          box-shadow: 0 4px 20px rgba(0,66,118,0.08);
          transform: translateY(-2px);
        }

        .project-arrow {
          flex-shrink: 0;
          font-size: 12px;
          color: #004276;
          margin-top: 2px;
          font-weight: 700;
          transition: color 0.2s;
        }

        .project-card:hover .project-arrow { color: #FACC15; }

        /* ── PHOTO SHOWCASE ── */
        .photo-showcase {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #FACC15;
          padding: 40px;
        }

        .photo-showcase-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .photo-showcase-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #004276;
        }

        .photo-showcase-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, #E2E8F0, transparent);
        }

        .photo-showcase-count {
          font-size: 10px;
          font-weight: 600;
          color: #FACC15;
          letter-spacing: 0.1em;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 260px);
          gap: 12px;
        }

        .photo-item {
          position: relative;
          overflow: hidden;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          cursor: pointer;
        }

        .photo-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 42, 78, 0.45) 0%,
            transparent 55%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-item:hover::after {
          opacity: 1;
        }

        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
          display: block;
        }

        .photo-item:hover img {
          transform: scale(1.05);
        }

        .photo-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px 18px;
          z-index: 2;
          transform: translateY(8px);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .photo-item:hover .photo-item-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .photo-item-label {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .photo-item-num {
          font-size: 10px;
          font-weight: 400;
          color: #FACC15;
          margin-top: 2px;
        }

        /* ── CTA ── */
        .cta-section {
          background: #F8FAFC;
          padding: 0 48px 80px;
        }

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

        .cta-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #FACC15;
          margin-bottom: 16px;
          position: relative;
        }

        .cta-title {
          font-family: 'Roboto',;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          position: relative;
          line-height: 1.25;
        }

        .cta-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-bottom: 32px;
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
          right: 24px; bottom: 24px;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          padding: 12px 20px;
          border-radius: 2px;
          box-shadow: 0 8px 32px rgba(37,211,102,0.35);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition: background 0.2s, transform 0.2s;
        }

        .wa-float:hover { background: #1EBE5D; transform: translateY(-2px); }
        .wa-float-label { display: none; }
        @media (min-width: 768px) { .wa-float-label { display: inline; } }

        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .overview-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .wt-hero { padding: 120px 24px 100px; }
          .wt-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .projects-grid { grid-template-columns: 1fr; }
          .photo-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 220px);
          }
          .photo-showcase { padding: 24px; }
          .cta-section { padding: 0 24px 56px; }
          .cta-inner { padding: 48px 28px; }
          .why-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="wt-page">
        {/* ── HERO ── */}
        <section className="wt-hero">
          <Image
            src="/workshopHero.jpg"
            alt="Workshop & Training"
            fill
            priority
            className="object-cover"
          />
          <div className="wt-hero-overlay" />
          <div className="wt-hero-grid" />

          <Link href="/services" className="wt-back-link">
            <span className="wt-back-arrow">←</span>
            Back to Services
          </Link>

          <div className="wt-hero-inner">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ position: "relative" }}
            >
              <p className="wt-hero-eyebrow">PROFESSIONAL DEVELOPMENT</p>
              <h1 className="wt-hero-title">
                Workshop &amp; <span>Training</span>
              </h1>
              <p className="wt-hero-desc">
                Sustainable operational transformation requires more than just
                strategy—it demands the right competency development at every
                level. LeanCore's training programs deliver practical, hands-on
                learning experiences that improve efficiency, resilience, and
                leadership in manufacturing and supply chain management.
              </p>
            </motion.div>
          </div>

          <div className="wt-hero-bottom-fade" />
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

        {/* ── OVERVIEW + TRAINING AREAS ── */}
        <section style={{ background: "#F8FAFC" }}>
          <div className="sec-wrap">
            <p className="sec-eyebrow">PROGRAM</p>
            <h2 className="sec-title">Program Overview & Training Areas</h2>
            <div className="sec-divider" />

            <div className="overview-grid">
              {/* Left: Overview */}
              <div className="overview-card">
                <h3 className="overview-card-title">Program Overview</h3>
                <p>
                  Our programs equip industry professionals with technical and
                  managerial capabilities to apply Lean principles, process
                  improvement frameworks, and data-driven operational
                  management.
                </p>
                <p>
                  Participants gain a solid understanding of Lean Thinking,
                  Kaizen, Six Sigma, production planning, Lean leadership, and
                  supply chain resilience—while learning to address digital
                  transformation and industrial disruption through structured
                  approaches.
                </p>
              </div>

              {/* Right: Training Areas */}
              <div className="training-areas-card">
                <h3 className="training-areas-title">Training Areas</h3>
                {trainingAreas.map((item, i) => (
                  <div key={i} className="training-area-item">
                    <span className="training-area-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section className="why-section">
          <div className="sec-wrap">
            <div className="why-section-center">
              <p className="sec-eyebrow" style={{ justifyContent: "center" }}>
                <span />
                WHY CHOOSE US
                <span
                  style={{
                    display: "block",
                    width: 36,
                    height: 2,
                    background: "#FACC15",
                  }}
                />
              </p>
              <h2 className="sec-title" style={{ color: "#004276" }}>
                Why Choose LeanCore Workshop &amp; Training?
              </h2>
              <p className="why-desc">
                Our workshops are transformative experiences combining academic
                rigor, industry best practices, and hands-on implementation to
                deliver measurable impact.
              </p>
            </div>

            <motion.div
              className="why-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChoose.map((item, i) => (
                <motion.div key={i} className="why-card" variants={fadeUp}>
                  <p className="why-card-num">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="why-card-title">{item.title}</h4>
                  <p className="why-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="projects-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">TRACK RECORD</p>
            <h2 className="sec-title">
              Previous Workshops &amp; Training Projects
            </h2>
            <div className="sec-divider" />

            <motion.div
              className="projects-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((item, i) => (
                <motion.div key={i} className="project-card" variants={fadeUp}>
                  <span className="project-arrow">▸</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* ── PHOTO SHOWCASE ── */}
            <div className="photo-showcase">
              <div className="photo-showcase-header">
                <span className="photo-showcase-label">DOCUMENTATION</span>
                <span className="photo-showcase-line" />
              </div>

              <motion.div
                className="photo-grid"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {workshopPhotos.map((photo, i) => (
                  <motion.div key={i} className="photo-item" variants={fadeUp}>
                    <Image
                      src={photo.src}
                      alt={`Workshop photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="photo-item-overlay"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-grid-tex" />
            <p className="cta-eyebrow">READY TO START?</p>
            <h3 className="cta-title">
              Ready to Strengthen Your
              <br />
              Organization's Capability?
            </h3>
            <p className="cta-desc">
              Join our transformative workshops and build sustainable
              operational excellence.
            </p>
            <Link href="/contact" className="cta-btn">
              REGISTER NOW →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
