"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .footer {
          font-family: 'DM Sans', sans-serif;
          background: #004276;
          color: #fff;
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture */
        .footer-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Yellow top border */
        .footer-top-bar {
          width: 100%;
          height: 3px;
          background: #FACC15;
          position: relative;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 48px 0;
          position: relative;
        }

        /* Brand column */
        .footer-brand-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          margin-top: 16px;
          max-width: 220px;
        }

        .footer-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #FACC15;
        }

        .footer-tagline::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #FACC15;
          opacity: 0.6;
        }

        /* Grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.4fr 1.5fr;
          gap: 48px;
          margin-bottom: 52px;
        }

        /* Column heading */
        .footer-col-title {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #FACC15;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        /* Links */
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0;
          transition: color 0.2s, gap 0.2s;
        }

        .footer-link::before {
          content: '›';
          opacity: 0;
          margin-right: 0;
          font-size: 15px;
          color: #FACC15;
          transition: opacity 0.2s, margin 0.2s;
        }

        .footer-link:hover {
          color: #fff;
          gap: 4px;
        }

        .footer-link:hover::before {
          opacity: 1;
          margin-right: 6px;
        }

        /* Contact items */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        .footer-contact-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          background: rgba(250,204,21,0.12);
          border: 1px solid rgba(250,204,21,0.2);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        /* Social icons */
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .footer-social-btn:hover {
          background: #FACC15;
          border-color: #FACC15;
          transform: translateY(-2px);
        }

        .footer-social-btn:hover img {
          filter: brightness(0) !important;
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 48px 24px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          position: relative;
        }

        .footer-copyright {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
        }

        .footer-copyright span {
          color: #FACC15;
          font-weight: 500;
        }

        .footer-bottom-badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 4px 12px;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .footer-inner { padding: 48px 24px 0; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-bottom { flex-direction: column; text-align: center; padding: 20px 24px 24px; }
          .footer-col-title::after { display: none; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-grid-bg" />
        <div className="footer-top-bar" />

        <div className="footer-inner">
          <div className="footer-grid">
            {/* ── Brand ── */}
            <div>
              <Image
                src="/logo2.png"
                alt="LeanCore Logo"
                width={148}
                height={38}
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="footer-brand-desc">
                Transforming operations and elevating performance through expert
                consulting, certification, and digital solutions.
              </p>
              <span className="footer-tagline">OPERATIONAL EXCELLENCE</span>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Insights", href: "/insights" },
                  { name: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="footer-link">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div>
              <h3 className="footer-col-title">Our Services</h3>
              <ul className="footer-links">
                {[
                  {
                    name: "Business Advisor",
                    href: "/services/businessAdvisor",
                  },
                  {
                    name: "International Certification",
                    href: "/services/internationalCertification",
                  },
                  {
                    name: "Workshop & Training",
                    href: "/services/workshopTraining",
                  },
                  { name: "Mini MBA Program", href: "/services/miniMBA" },
                  {
                    name: "Research & Publication",
                    href: "/services/researchPublication",
                  },
                  { name: "Data Solution", href: "/services/dataSolution" },
                ].map((s) => (
                  <li key={s.name}>
                    <Link href={s.href} className="footer-link">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div>
              <h3 className="footer-col-title">Contact Info</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <Image
                      src="/loc.svg"
                      alt="Location"
                      width={13}
                      height={13}
                      className="brightness-0 invert"
                    />
                  </span>
                  <span>
                    Jl. Raya Darmo Permai, Dukuhpakis
                    <br />
                    Surabaya, Indonesia
                  </span>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <Image
                      src="/wa.svg"
                      alt="WhatsApp"
                      width={13}
                      height={13}
                      className="brightness-0 invert"
                    />
                  </span>
                  <span>+62 818-0354-0000</span>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <Image
                      src="/email.svg"
                      alt="Email"
                      width={13}
                      height={13}
                      className="brightness-0 invert"
                    />
                  </span>
                  <span>operasiunggulindonesia@gmail.com</span>
                </li>
              </ul>

              {/* Socials */}
              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/leancore_consultant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  <Image
                    src="/ig.svg"
                    alt="Instagram"
                    width={14}
                    height={14}
                    className="brightness-0 invert"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={14}
                    height={14}
                    className="brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 <span>LeanCore Consulting</span>. All rights reserved.
          </p>
          <span className="footer-bottom-badge">EST. 2024 · SURABAYA, ID</span>
        </div>
      </footer>
    </>
  );
}
