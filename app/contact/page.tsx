"use client";

import Link from "next/link";
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
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .contact-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .contact-hero {
          position: relative;
          background: #004276;
          padding: 100px 48px 120px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .contact-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .contact-hero-orb1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.14) 0%, transparent 70%);
          top: -180px; left: -100px;
          pointer-events: none;
        }

        .contact-hero-orb2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,90,158,0.4) 0%, transparent 70%);
          bottom: -100px; right: -60px;
          pointer-events: none;
        }

        .contact-back-link {
          position: absolute;
          top: 32px; left: 48px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.04em;
        }

        .contact-back-link:hover { color: #FACC15; }

        .contact-back-arrow {
          transition: transform 0.2s;
        }

        .contact-back-link:hover .contact-back-arrow {
          transform: translateX(-3px);
        }

        .contact-hero-eyebrow {
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

        .contact-hero-eyebrow::before,
        .contact-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }

        .contact-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          position: relative;
        }

        .contact-hero-title span { color: #FACC15; }

        .contact-hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 500px;
          line-height: 1.75;
          position: relative;
        }

        .contact-hero-content {
          position: relative;
        }

        .contact-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        /* ── SECTION WRAPPER ── */
        .contact-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px 100px;
        }

        .contact-section-title {
          font-family: 'Roboto',;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #004276;
          margin-bottom: 12px;
        }

        .contact-section-sub {
          font-size: 14px;
          font-weight: 300;
          color: #64748B;
          max-width: 520px;
          line-height: 1.75;
          margin-bottom: 56px;
        }

        .section-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #004276;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .section-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background: #FACC15;
        }

        /* ── CONTACT CARDS ── */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .contact-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          transition: box-shadow 0.3s, transform 0.3s, border-top-color 0.3s;
        }

        .contact-card:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.10);
          transform: translateY(-4px);
          border-top-color: #FACC15;
        }

        .contact-card-icon {
          width: 48px; height: 48px;
          background: #004276;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .contact-card:hover .contact-card-icon {
          background: #FACC15;
        }

        .contact-card:hover .contact-card-icon img {
          filter: brightness(0) !important;
        }

        .contact-card-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #94A3B8;
          text-transform: uppercase;
        }

        .contact-card-title {
          font-family: 'Roboto ', ;
          font-size: 16px;
          font-weight: 700;
          color: #004276;
        }

        .contact-card-text {
          font-size: 13px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.7;
        }

        .contact-card-link {
          font-size: 13px;
          font-weight: 500;
          color: #004276;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-card-link:hover { color: #FACC15; }

        /* ── DIVIDER ── */
        .contact-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin: 56px 0;
        }

        /* ── SOCIAL & HOURS ROW ── */
        .contact-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 56px;
        }

        .contact-panel {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #FACC15;
          padding: 36px 32px;
          transition: box-shadow 0.3s, transform 0.3s;
        }

        .contact-panel:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.08);
          transform: translateY(-3px);
        }

        .contact-panel-title {
          font-family: 'Roboto',;
          font-size: 18px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 24px;
        }

        /* Socials */
        .social-btns {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 44px; height: 44px;
          background: #004276;
          border: 1px solid #E2E8F0;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .social-btn:hover {
          background: #004276;
          border-color: #004276;
          transform: translateY(-2px);
        }

        .social-btn:hover img {
          filter: brightness(0) invert(1) !important;
        }

        .social-desc {
          font-size: 13px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        /* Hours table */
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #F1F5F9;
          font-size: 13px;
        }

        .hours-row:last-child { border-bottom: none; }

        .hours-day { color: #64748B; font-weight: 400; }

        .hours-time {
          font-weight: 600;
          color: #004276;
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .hours-closed {
          font-weight: 600;
          color: #EF4444;
          font-size: 12px;
        }

        .hours-badge {
          display: inline-block;
          background: rgba(250,204,21,0.15);
          color: #92400E;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 2px 8px;
          border-radius: 2px;
          margin-left: 8px;
        }

        /* ── MAP ── */
        .contact-map-section {
          margin-top: 0;
        }

        .map-header {
          margin-bottom: 20px;
        }

        .map-wrap {
          border: 1px solid #E2E8F0;
          overflow: hidden;
          height: 420px;
        }

        .map-wrap iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* ── WHATSAPP FLOATING ── */
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
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }

        .wa-float:hover {
          background: #1EBE5D;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(37,211,102,0.4);
        }

        .wa-float-label {
          display: none;
        }

        @media (min-width: 768px) {
          .wa-float-label { display: inline; }
        }

        @media (max-width: 1024px) {
          .contact-cards-grid { grid-template-columns: 1fr 1fr; }
          .contact-bottom-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .contact-hero { padding: 120px 24px 100px; }
          .contact-back-link { left: 24px; }
          .contact-section { padding: 56px 24px 72px; }
          .contact-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-page">
        {/* ── HERO ── */}
        <section className="contact-hero">
          <div className="contact-hero-grid" />
          <div className="contact-hero-orb1" />
          <div className="contact-hero-orb2" />

          <Link href="/services" className="contact-back-link">
            <span className="contact-back-arrow">←</span>
            Back to Services
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="contact-hero-content"
          >
            <p className="contact-hero-eyebrow">GET IN TOUCH</p>
            <h1 className="contact-hero-title">
              Contact
              <br />
              <span>LeanCore</span>
            </h1>
            <p className="contact-hero-sub">
              We welcome consulting inquiries, collaboration opportunities,
              academic partnerships, and professional discussions.
            </p>
          </motion.div>

          <div className="contact-hero-bottom-fade" />
        </section>

        {/* ── MAIN CONTENT ── */}
        <div className="contact-section">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">REACH US</p>
            <h2 className="contact-section-title">Contact Information</h2>
            <p className="contact-section-sub">
              Our team is ready to assist you with consulting services, research
              support, certification programs, and executive development
              initiatives.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className="contact-cards-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Address */}
            <motion.div className="contact-card" variants={fadeUp}>
              <span className="contact-card-label">Location</span>
              <div className="contact-card-icon">
                <img
                  src="/loc.svg"
                  alt="Location"
                  width={18}
                  height={18}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <h3 className="contact-card-title">Office Address</h3>
              <p className="contact-card-text">
                Jl. Raya Darmo Permai, Pradahkalikendal
                <br />
                Kec. Dukuhpakis, Surabaya
                <br />
                Jawa Timur, Indonesia
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div className="contact-card" variants={fadeUp}>
              <span className="contact-card-label">WhatsApp</span>
              <a
                href="https://wa.me/6281803540000?text=Halo%20LeanCore%20Consulting,%20saya%20ingin%20informasi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-icon"
              >
                <img
                  src="/wa.svg"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
              <h3 className="contact-card-title">Phone Number</h3>
              <a
                href="https://wa.me/6281803540000"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                +62 818-0354-0000
              </a>
            </motion.div>

            {/* Email */}
            <motion.div className="contact-card" variants={fadeUp}>
              <span className="contact-card-label">Email</span>
              <div className="contact-card-icon">
                <img
                  src="/email.svg"
                  alt="Email"
                  width={18}
                  height={18}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <h3 className="contact-card-title">Email Address</h3>
              <a
                href="mailto:operasiunggulindonesia@gmail.com"
                className="contact-card-link"
                style={{ fontSize: "12px" }}
              >
                operasiunggulindonesia@gmail.com
              </a>
            </motion.div>
          </motion.div>

          <div className="contact-divider" />

          {/* Social + Hours row */}
          <motion.div
            className="contact-bottom-row"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Social */}
            <motion.div className="contact-panel" variants={fadeUp}>
              <h3 className="contact-panel-title">Follow Us</h3>
              <p className="social-desc">
                Stay updated with our latest insights, programs, and
                announcements through our social channels.
              </p>
              <div className="social-btns">
                <a
                  href="https://www.instagram.com/leancore_consultant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Instagram"
                >
                  <img src="/ig.svg" alt="Instagram" width={16} height={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/leancore-consulting/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="LinkedIn"
                >
                  <img
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div className="contact-panel" variants={fadeUp}>
              <h3 className="contact-panel-title">Business Hours</h3>
              <div>
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">09:00 – 17:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">
                    Saturday
                    <span className="hours-badge">HALF DAY</span>
                  </span>
                  <span className="hours-time">09:00 – 12:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-closed">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="contact-map-section"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="map-header">
              <p className="section-eyebrow">LOCATION</p>
              <h2 className="contact-section-title">Visit Our Office</h2>
              <p className="contact-section-sub" style={{ marginBottom: 0 }}>
                We'd be happy to welcome you to our office in Surabaya.
              </p>
            </div>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3089064359926!2d112.7169!3d-7.2953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb82b2b3e3e5%3A0x4027a76e352e1d0!2sJl.%20Raya%20Darmo%20Permai%2C%20Surabaya!5e0!3m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                title="LeanCore Office Location"
              />
            </div>
          </motion.div>
        </div>

        {/* ── WHATSAPP FLOATING ── */}
        <a
          href="https://chat.whatsapp.com/JFCQDPXTYnz6X6t1WImwQG?mode=gi_t"
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
          <span className="wa-float-label">JOIN WHATSAPP COMMUNITY</span>
        </a>
      </div>
    </>
  );
}
