"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .navbar {
          font-family: 'DM Sans', sans-serif;
        }

        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          box-shadow: 0 4px 24px rgba(0, 66, 118, 0.10);
        }

        /* Yellow top accent bar */
        .navbar-accent-bar {
          width: 100%;
          height: 3px;
          background: #FACC15;
        }

        .navbar-inner {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #E2E8F0;
          transition: border-color 0.3s;
        }

        .navbar-header.scrolled .navbar-inner {
          border-bottom-color: rgba(0,66,118,0.08);
        }

        .navbar-container {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 48px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Nav links */
        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        .nav-link {
          position: relative;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #475569;
          text-decoration: none;
          border-radius: 2px;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #004276;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-link:hover {
          color: #004276;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #004276;
          font-weight: 600;
        }

        .nav-link.active::after {
          transform: scaleX(1);
          background: #FACC15;
        }

        /* Divider */
        .navbar-divider {
          width: 1px;
          height: 20px;
          background: #E2E8F0;
          margin: 0 8px;
        }

        /* CTA Button */
        .navbar-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #004276;
          color: #FACC15;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 9px 22px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }

        .navbar-cta:hover {
          background: #002d52;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 66, 118, 0.25);
        }

        .navbar-cta:active {
          transform: translateY(0);
        }

        .cta-arrow {
          font-size: 14px;
          transition: transform 0.2s;
        }

        .navbar-cta:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Mobile hamburger */
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #004276;
          border-radius: 1px;
          transition: all 0.25s ease;
        }

        .navbar-hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar-hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 67px; /* accent-bar (3px) + header (64px) */
          left: 0;
          right: 0;
          background: #fff;
          border-bottom: 3px solid #FACC15;
          box-shadow: 0 12px 40px rgba(0,66,118,0.12);
          padding: 16px 24px 24px;
          flex-direction: column;
          gap: 2px;
          z-index: 49;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-nav-link {
          display: block;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: all 0.2s;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #004276;
          border-left-color: #FACC15;
          background: #F8FAFC;
          padding-left: 20px;
        }

        .mobile-nav-link.active {
          font-weight: 600;
        }

        .mobile-cta {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #004276;
          color: #FACC15;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 14px 22px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .mobile-cta:hover {
          background: #002d52;
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 24px;
          }
          .navbar-nav, .navbar-divider {
            display: none;
          }
          .navbar-hamburger {
            display: flex;
          }
        }
      `}</style>

      <div className="navbar">
        <header className={`navbar-header${scrolled ? " scrolled" : ""}`}>
          {/* Yellow accent bar */}
          <div className="navbar-accent-bar" />

          <div className="navbar-inner">
            <div className="navbar-container">
              {/* Logo */}
              <Link href="/" className="navbar-logo">
                <Image
                  src="/logo2.png"
                  alt="LeanCore Logo"
                  width={148}
                  height={38}
                  className="object-contain"
                />
              </Link>

              {/* Desktop Nav */}
              <nav>
                <ul className="navbar-nav">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`nav-link${isActive ? " active" : ""}`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}

                  <div className="navbar-divider" />

                  <li>
                    <Link href="/contact" className="navbar-cta">
                      GET CONSULTATION
                      <span className="cta-arrow">→</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Hamburger */}
              <button
                className={`navbar-hamburger${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`mobile-nav-link${isActive ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            GET CONSULTATION →
          </Link>
        </div>
      </div>
    </>
  );
}
