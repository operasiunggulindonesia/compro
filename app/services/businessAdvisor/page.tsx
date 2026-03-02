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

const consultingServices = [
  {
    title: "Lean Manufacturing & Operational Excellence",
    desc: "Eliminating waste, reducing variation, and driving continuous improvement through Lean and Six Sigma frameworks.",
  },
  {
    title: "Digital Transformation & Smart Factory Initiatives",
    desc: "Helping companies adopt Industry 4.0 through IoT, automation, and data-driven decision-making.",
  },
  {
    title: "Supply Chain & Logistics Optimization",
    desc: "Streamlining processes, enhancing visibility, and strengthening supply chain responsiveness.",
  },
  {
    title: "Performance Improvement Programs",
    desc: "Providing structured improvement initiatives focused on OEE, lead time, cost reduction, and productivity.",
  },
  {
    title: "Operational Risk & Resilience Management",
    desc: "Improving reliability through risk-based thinking and operational controls at the system level.",
  },
  {
    title: "Workforce Development & Culture Building",
    desc: "Enhancing organizational agility by fostering Lean leadership and engaging front-line teams.",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Diagnose",
    desc: "Identifying root causes and improvement opportunities through structured assessment.",
    icon: "/diagnose.svg",
  },
  {
    number: "02",
    title: "Design",
    desc: "Developing strategic frameworks and practical action plans aligned with goals.",
    icon: "/design.svg",
  },
  {
    number: "03",
    title: "Deliver",
    desc: "Executing solutions with measurable impact and operational results.",
    icon: "/deliver.svg",
  },
  {
    number: "04",
    title: "Develop",
    desc: "Strengthening long-term capabilities for continuous growth and innovation.",
    icon: "/develop.svg",
  },
];

const projects = [
  "TQM Development & Implementation – PMP Ice Manufacturing",
  "Quality & Efficiency Improvement – PT. AMJ Mitra Produksi Sampoerna",
  "Feasibility Study & Financing Strategy – Maesa Group",
  "TQM Performance Optimization – PT. Mufasufu Jaya Lestari",
  "Continuous Improvement Advisory – PT. Kiabadi",
  "Palm Oil Investment Strategy – SILOG Group",
  "Feasibility Study & Financing Strategy – PT Multi Aneka Pangan",
  "Corporate Development Strategy – Global Pratama Group",
  "Defence Supply Chain Risk Management – Kementrian Pertahanan RI",
  "Performance Measurement System – Program PRAKTISI MENGAJAR Kemendikbud Ristek RI",
  "Sales Performance Measurement – Mitra Jaya Manufacturing",
  "And many more engagements across industries.",
];

export default function BusinessAdvisor() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ba-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .ba-hero {
          position: relative;
          background-color: #004276;
          background-image: url('/businessHero.jpg');
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

        /* Dark overlay to preserve readability while showing the image */
        .ba-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 30, 60, 0.82) 0%,
            rgba(0, 66, 118, 0.72) 50%,
            rgba(0, 20, 45, 0.85) 100%
          );
          pointer-events: none;
        }

        .ba-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .ba-hero-orb1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 70%);
          top: -200px; left: -100px;
          pointer-events: none;
        }

        .ba-hero-orb2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -150px; right: -80px;
          pointer-events: none;
        }

        .ba-back-link {
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

        .ba-back-link:hover { color: #FACC15; }

        .ba-back-arrow { transition: transform 0.2s; }
        .ba-back-link:hover .ba-back-arrow { transform: translateX(-3px); }

        .ba-hero-eyebrow {
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

        .ba-hero-eyebrow::before,
        .ba-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }

        .ba-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
        }

        .ba-hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 1000px;
          line-height: 1.8;
          position: relative;
        }

        .ba-hero-bottom-fade {
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

        /* ── COMMITMENT SECTION ── */
        .commit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .commit-text p {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 16px;
        }

        .commit-services {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 36px 32px;
        }

        .commit-services-title {
          font-family: 'Roboto',;
          font-size: 18px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 28px;
        }

        .commit-service-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid #F1F5F9;
        }

        .commit-service-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .commit-dot {
          flex-shrink: 0;
          width: 8px; height: 8px;
          background: #004276;
          border-radius: 1px;
          margin-top: 6px;
          transition: background 0.2s;
        }

        .commit-service-item:hover .commit-dot { background: #FACC15; }

        .commit-service-title {
          font-size: 13px;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .commit-service-desc {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.65;
        }

        /* ── WORKING APPROACH ── */
        .approach-section {
          background: #004276;
          position: relative;
          overflow: hidden;
        }

        .approach-grid-tex {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .approach-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          position: relative;
        }

        .approach-header {
          display: grid;
          grid-template-columns: auto 1px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 64px;
        }

        .approach-header-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #FACC15;
          line-height: 1.2;
        }

        .approach-header-rule {
          width: 1px;
          height: 72px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }

        .approach-header-desc {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          max-width: 500px;
        }

        .approach-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        .approach-steps::before {
          content: '';
          position: absolute;
          top: 80px;
          left: 10%;
          width: 80%;
          height: 1px;
          background: rgba(255,255,255,0.12);
        }

        .approach-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .approach-step-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #FACC15;
        }

        .approach-step-icon {
          position: relative;
          width: 72px; height: 72px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(250,204,21,0.3);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }

        .approach-step:hover .approach-step-icon {
          background: rgba(250,204,21,0.12);
          border-color: rgba(250,204,21,0.6);
        }

        .approach-step-title {
          font-family: 'Roboto',;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .approach-step-desc {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          max-width: 200px;
        }

        /* ── PROJECTS ── */
        .projects-section { background: #fff; }

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
          background: #F8FAFC;
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

        .projects-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .projects-img-wrap {
          overflow: hidden;
          border-top: 3px solid #FACC15;
        }

        .projects-img-wrap img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .projects-img-wrap:hover img { transform: scale(1.04); }

        /* ── CTA ── */
        .cta-section {
          background: #F8FAFC;
          padding: 80px 48px;
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
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
          line-height: 1.2;
        }

        .cta-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-bottom: 32px;
          position: relative;
          max-width: 440px;
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

        .cta-btn:hover {
          background: #FEF08A;
          transform: translateY(-2px);
        }

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
          .commit-grid { grid-template-columns: 1fr; }
          .approach-steps { grid-template-columns: repeat(2, 1fr); }
          .approach-steps::before { display: none; }
          .projects-images { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .ba-hero { padding: 120px 24px 100px; }
          .ba-back-link { left: 24px; }
          .sec-wrap { padding: 56px 24px; }
          .approach-inner { padding: 56px 24px; }
          .approach-header { grid-template-columns: 1fr; gap: 16px; }
          .approach-header-rule { display: none; }
          .approach-steps { grid-template-columns: 1fr 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
          .projects-images { grid-template-columns: 1fr; }
          .cta-section { padding: 56px 24px; }
          .cta-inner { padding: 48px 28px; }
        }
      `}</style>

      <div className="ba-page">
        {/* ── HERO ── */}
        <section className="ba-hero">
          {/* Background image overlay layers */}
          <div className="ba-hero-overlay" />
          <div className="ba-hero-grid" />
          <div className="ba-hero-orb1" />
          <div className="ba-hero-orb2" />

          <Link href="/services" className="ba-back-link">
            <span className="ba-back-arrow">←</span>
            Back to Services
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ position: "relative" }}
          >
            <p className="ba-hero-eyebrow">
              BUSINESS &amp; MANAGEMENT CONSULTING
            </p>
            <h1 className="ba-hero-title">
              Strategic Partner for
              <br />
              Manufacturing{" "}
              <span style={{ color: "#FACC15" }}>Transformation</span>
            </h1>
            <p className="ba-hero-desc">
              Supporting organizations through strategy execution, operational
              excellence, and sustainable business transformation driven by
              data, leadership, and innovation.
            </p>
          </motion.div>

          <div className="ba-hero-bottom-fade" />
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

        {/* ── COMMITMENT ── */}
        <section style={{ background: "#F8FAFC" }}>
          <div className="sec-wrap">
            <p className="sec-eyebrow">OUR COMMITMENT</p>
            <h2 className="sec-title">Business Management Consulting</h2>
            <div className="sec-divider" />

            <div className="commit-grid">
              <div className="commit-text">
                <p>
                  As a strategic partner for manufacturing companies, LeanCore
                  Consulting delivers Business and Management Consulting
                  services designed to drive efficiency, resilience, and
                  sustainable growth. Through lean thinking and operational
                  excellence, we help organizations uncover hidden potential and
                  implement real transformation on the ground.
                </p>
                <p>
                  Backed by a team of experts with cross-industry experience, we
                  are committed to delivering solutions that are relevant,
                  impactful, and ready to meet future challenges. To achieve
                  comprehensive transformation, we offer a wide range of
                  consulting services covering both strategic and operational
                  aspects.
                </p>
              </div>

              <div className="commit-services">
                <h3 className="commit-services-title">
                  Our Consulting Services
                </h3>
                {consultingServices.map((item, i) => (
                  <div key={i} className="commit-service-item">
                    <span className="commit-dot" />
                    <div>
                      <p className="commit-service-title">{item.title}</p>
                      <p className="commit-service-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WORKING APPROACH ── */}
        <section className="approach-section">
          <div className="approach-grid-tex" />
          <div className="approach-inner">
            <div className="approach-header">
              <h2 className="approach-header-title">
                Our Working
                <br />
                Approach
              </h2>
              <div className="approach-header-rule" />
              <p className="approach-header-desc">
                LeanCore drives transformation through a clear approach:
                Diagnose challenges, Design solutions, Deliver results, and
                Develop lasting capabilities for continuous growth.
              </p>
            </div>

            <motion.div
              className="approach-steps"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workingSteps.map((step) => (
                <motion.div
                  key={step.number}
                  className="approach-step"
                  variants={fadeUp}
                >
                  <span className="approach-step-num">{step.number}</span>
                  <div className="approach-step-icon">
                    <img
                      src={step.icon}
                      alt={step.title}
                      width={32}
                      height={32}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <h3 className="approach-step-title">{step.title}</h3>
                  <p className="approach-step-desc">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="projects-section">
          <div className="sec-wrap">
            <p className="sec-eyebrow">TRACK RECORD</p>
            <h2 className="sec-title">Previous Consulting Projects</h2>
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

            <div className="projects-images">
              {["/bmc.png", "/bmc1.png", "/bmc2.png", "/bmc3.jpeg", "/bmc4.jpeg", "/bmc5.jpeg"].map((src, i) => (
                <div key={i} className="projects-img-wrap">
                  <Image
                    src={src}
                    alt={`Consulting Project ${i + 1}`}
                    width={400}
                    height={240}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-grid-tex" />
            <p className="cta-eyebrow">READY TO START?</p>
            <h3 className="cta-title">
              Ready to Transform
              <br />
              Your Operations?
            </h3>
            <p className="cta-desc">
              Let's discuss how LeanCore can help your organization achieve
              operational excellence and sustainable growth.
            </p>
            <Link href="/contact" className="cta-btn">
              BOOK CONSULTATION →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}