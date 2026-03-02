"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Business & Management Consulting",
    slug: "businessAdvisor",
    icon: "/bisnis.svg",
    description:
      "LeanCore Consulting supports manufacturing organizations in achieving operational excellence and sustainable growth. Through structured, lean-driven strategies, we deliver practical solutions that transform performance at both strategic and operational levels.",
    features: [
      "Lean Manufacturing & Operational Excellence",
      "Digital Transformation & Smart Factory Initiatives",
      "Supply Chain & Logistics Optimization",
      "Performance Improvement Programs (OEE, Lead Time, Cost Reduction)",
      "Operational Risk & Resilience Management",
      "Workforce Development & Lean Culture Building",
    ],
  },
  {
    number: "02",
    title: "International Certification",
    slug: "internationalCertification",
    icon: "/sertif.svg",
    description:
      "LeanCore Consulting, in collaboration with AAFM®, delivers globally recognized Certifications & Workshops designed to strengthen expertise in operations and supply chain management. Through hands-on workshops, real case studies, and expert-led sessions, participants gain practical skills and formal credentials.",
    features: [
      "Certified Strategic Business Analyst (CSBA)",
      "Certified Retail Management Expert (CRME)",
      "Certified Supply Chain Manager (CSCM)",
      "Certified International Project Manager (CIPM)",
      "Certified Forecast Demand Manager (CFDM)",
    ],
  },
  {
    number: "03",
    title: "Workshop & Training",
    slug: "workshopTraining",
    icon: "/workshop.svg",
    description:
      "LeanCore delivers applied Training & Workshops that build the competencies needed for sustainable operational excellence. Through structured, hands-on learning, participants develop the skills to implement lean principles, optimize processes, and lead transformation in manufacturing and supply chain environments.",
    features: [
      "Lean Thinking & Operational Excellence",
      "Six Sigma & Problem-Solving (DMAIC)",
      "Production Planning & Inventory Optimization",
      "Digital Lean (IoT, Automation, MES)",
    ],
  },
  {
    number: "04",
    title: "Mini MBA Program",
    slug: "miniMBA",
    icon: "/miniMba.png",
    description:
      "LeanCore's Mini MBA Programs combine intensive, hands-on workshops with internationally recognized certification to develop strategic, lean-driven leaders in manufacturing and supply chain management. Designed to address Industry 4.0 challenges.",
    features: [
      "Strategic Thinking for Leaders",
      "Lean Operations & Process Excellence",
      "Integrated Supply Chain & Operations Strategy",
      "Global AAFM® Credential",
    ],
  },
  {
    number: "05",
    title: "Research & Publication",
    slug: "researchPublication",
    icon: "/research.svg",
    description:
      "LeanCore's Research & Publication Program delivers evidence-based insights to support strategic decision-making. Combining academic rigor with practical application, the program provides market analysis, feasibility studies, and industry research that drive innovation and competitive advantage.",
    features: [
      "Feasibility Study & Market Research",
      "Industry & Competitive Intelligence",
      "Operations Webinar Series (Monthly)",
      "Journal of Business Innovation & Strategy",
    ],
  },
  {
    number: "06",
    title: "Data Solution",
    slug: "dataSolution",
    icon: "/data.svg",
    description:
      "Data Solution provides research and analytics services grounded in scientific methodology to support organizations in generating reliable, data-driven insights for strategic decision-making and sustainable business growth.",
    features: [
      "Data Analytics & Visualization",
      "Business Intelligence Solutions",
      "Predictive Modeling & Forecasting",
      "Data Governance & Security",
    ],
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .services-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ── */
        .svc-hero {
          position: relative;
          width: 100%;
          min-height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .svc-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(0,42,78,0.88) 0%,
            rgba(0,66,118,0.78) 50%,
            rgba(0,20,40,0.88) 100%);
        }

        .svc-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ha1 { animation: heroFadeUp 0.6s ease both 0.05s; }
        .ha2 { animation: heroFadeUp 0.65s ease both 0.18s; }
        .ha3 { animation: heroFadeUp 0.65s ease both 0.3s; }
        .ha4 { animation: heroFadeUp 0.65s ease both 0.42s; }

        .svc-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 100px 48px;
          max-width: 760px;
        }

        .svc-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          margin-bottom: 24px;
        }

        .svc-hero-eyebrow::before,
        .svc-hero-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #FACC15;
          opacity: 0.6;
        }

        .svc-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 800;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .svc-hero-title span { color: #FACC15; }

        .svc-hero-rule {
          width: 48px;
          height: 2px;
          background: rgba(255,255,255,0.3);
          margin: 0 auto 20px;
        }

        .svc-hero-desc {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto;
        }

        .svc-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        /* ── SECTION WRAPPER ── */
        .svc-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px 100px;
        }

        .svc-section-header {
          margin-bottom: 48px;
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
        }

        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin: 32px 0 48px;
        }

        /* ── SERVICE CARDS ── */
        .svc-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .svc-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-left: 4px solid #004276;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 0;
          overflow: hidden;
          transition: box-shadow 0.3s, border-left-color 0.3s, transform 0.3s;
        }

        .svc-card:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.10);
          transform: translateY(-3px);
          border-left-color: #FACC15;
        }

        /* Left panel */
        .svc-card-left {
          background: #004276;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          gap: 20px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }

        .svc-card:hover .svc-card-left {
          background: #002d52;
        }

        .svc-card-left::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 1px;
          height: 100%;
          background: rgba(250,204,21,0.2);
        }

        .svc-num {
          font-family: 'Roboto',;
          font-size: 48px;
          font-weight: 800;
          line-height: 1;
          color: #ffffff;
        }


        /* Right panel */
        .svc-card-right {
          padding: 36px 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .svc-card-title {
          font-family: 'Roboto',;
          font-size: 22px;
          font-weight: 700;
          color: #004276;
          line-height: 1.25;
        }

        .svc-card-desc {
          font-size: 13px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.8;
          max-width: 660px;
        }

        .svc-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 32px;
          padding-top: 4px;
        }

        .svc-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12px;
          font-weight: 400;
          color: #475569;
          line-height: 1.55;
        }

        .svc-feature-dot {
          flex-shrink: 0;
          width: 6px; height: 6px;
          background: #FACC15;
          border-radius: 1px;
          margin-top: 5px;
        }

        .svc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
          margin-top: 4px;
        }

        .svc-card-num-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #CBD5E1;
        }

        .svc-learn-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #004276;
          color: #FACC15;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 10px 20px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .svc-learn-btn:hover {
          background: #002d52;
          transform: translateX(3px);
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

        .wa-float:hover {
          background: #1EBE5D;
          transform: translateY(-2px);
        }

        .wa-float-label { display: none; }
        @media (min-width: 768px) { .wa-float-label { display: inline; } }

        @media (max-width: 768px) {
          .svc-section { padding: 56px 24px 72px; }
          .svc-hero-content { padding: 80px 24px; }
          .svc-card { grid-template-columns: 1fr; }
          .svc-card-left { flex-direction: row; padding: 24px 28px; justify-content: flex-start; gap: 16px; }
          .svc-card-left::after { display: none; }
          .svc-num { font-size: 32px; }
          .svc-features { grid-template-columns: 1fr; }
          .svc-card-right { padding: 28px; }
        }
      `}</style>

      <div className="services-page">
        {/* ── HERO ── */}
        <section className="svc-hero">
          <Image
            src="/service.jpg"
            alt="Service Background"
            fill
            priority
            className="object-cover"
          />
          <div className="svc-hero-overlay" />
          <div className="svc-hero-grid" />

          <div className="svc-hero-content">
            <p className="svc-hero-eyebrow ha1">WHAT WE OFFER</p>
            <h1 className="svc-hero-title ha2">
              Our <span>Services</span>
            </h1>
            <div className="svc-hero-rule ha3" />
            <p className="svc-hero-desc ha4">
              Transform your operations with our comprehensive suite of
              consulting, certification, training, and research services.
            </p>
          </div>

          <div className="svc-hero-bottom-fade" />
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

        {/* ── SERVICES LIST ── */}
        <div className="svc-section">
          <div className="svc-section-header">
            <p className="sec-eyebrow">EXPLORE</p>
            <h2 className="sec-title">Our Services</h2>
            <p className="sec-desc">
              Comprehensive solutions tailored for manufacturing organizations
              seeking operational excellence and sustainable growth.
            </p>
            <div className="sec-divider" />
          </div>

          <div className="svc-list">
            {services.map((s) => (
              <div key={s.slug} className="svc-card">
                {/* LEFT */}
                <div className="svc-card-left">
                  <span className="svc-num">{s.number}</span>
                </div>

                {/* RIGHT */}
                <div className="svc-card-right">
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.description}</p>

                  <div className="svc-features">
                    {s.features.map((f, i) => (
                      <div key={i} className="svc-feature-item">
                        <span className="svc-feature-dot" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="svc-card-footer">
                    <span className="svc-card-num-label">
                      SERVICE {s.number}
                    </span>
                    <Link
                      href={`/services/${s.slug}`}
                      className="svc-learn-btn"
                    >
                      LEARN MORE →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
