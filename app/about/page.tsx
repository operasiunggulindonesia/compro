"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const partnerLogos = [
  "/partner/mapnGroup.png",
  "/partner/bankArthaya.png",
  "/partner/kimiaFarma.png",
  "/partner/cocaCola.png",
  "/partner/mandiri.png",
  "/partner/sig.jpg",
  "/partner/pmpGroup.png",
  "/partner/HMSampoerna.png",
  "/partner/mpmMotor.jpg",
  "/partner/univPertahanan.jpg",
  "/partner/perhimpunan.png",
  "/partner/pratamaGroup.png",
  "/partner/uc.jpg",
  "/partner/kementrianPertahanan.png",
  "/partner/tutWuri.jpg",
  "/partner/ot.png",
  "/partner/cbos.jpg",
  "/partner/idFood.png",
  "/partner/silog.jpg",
  "/partner/maesaGroup.jpg",
  "/partner/ubmBiscuits.png",
  "/partner/visiniaga.png",
  "/partner/pln.png",
  "/partner/kai.png",
  "/partner/kiabadi.png",
  "/partner/freeport.png",
  "/partner/logo_global.png",
  "/partner/supra.png",
  "/partner/rodaLink.jpg",
  "/partner/petroKimia.png",
];

const boardMembers = [
  {
    image: "/puty.png",
    name: "Dr. (cand.) Anak Agung Ayu Puty Andrina, S.M., M.M. CBOA, CPOD",
    position: "Founder & Director",
    linkedin: "https://www.linkedin.com/in/putyandrina",
    expertise: ["Digital Business Transformation", "Supply Chain Management"],
  },
  {
    image: "/timotius.png",
    name: "Assoc. Prof. Dr. Timotius Febry, SE., ST., MM., MT., CSCA., CDS",
    position: "Founder & Chief of Operations",
    linkedin: "https://www.linkedin.com/in/timotius-febry-cws-3941926b",
    expertise: [
      "Supply Chain Management",
      "Manufacturing and Production",
      "Maintenance and Reliability Management",
      "Transportation Management",
      "Business Process Reengineering",
    ],
  },
];

const teamMembers = [
  {
    image: "/merita.png",
    name: "Merita Rahma Anastasya, S.M.",
    position: "Account Executive",
    linkedin: "https://www.linkedin.com/in/merita-anastasya/",
    expertise: [
      "Client Relationship Management",
      "Account & Pipeline Management",
    ],
  },
  {
    image: "/insyuzuu.png",
    name: "Insyuzuu Cahyani Aisyah, S.Kom.",
    position: "Product Engineer",
    linkedin: "https://www.linkedin.com/in/insyuzuu-cahyani-aisyah",
    expertise: [
      "Design & Develop reliable and scalable software aligned with business goals",
    ],
  },
  {
    image: "/vero.png",
    name: "Veronika Juliana Purwandanu, S.M.",
    position: "Account Executive",
    linkedin: "https://www.linkedin.com/in/veronikajuliana/?locale=en_US",
    expertise: [
      "Client Relationship Management",
      "Account & Pipeline Management",
    ],
  },
];

const trainers = [
  {
    name: "Dr. Widya Arif Sofyan Kurniawan, S.M., M.M. CSBA",
    position: "VPC H.M. Sampoerna TPO",
    linkedin: "https://www.linkedin.com/",
    expertise: ["Retail Management"],
  },
  {
    name: "Lala Setiany Wee, S.E., M.M., CSBA",
    position: "Owner of Mitra Sukses Group, CCA Indonesia",
    linkedin: "https://www.linkedin.com/",
    expertise: ["Retail Management"],
  },
  {
    name: "Dr. Ir. Elkana Timotius, S.T., M.M., M.T., CPM (Asia), Dip.RetMgt, IPU., CSCM",
    position: "GM Retail Business Rodalink Indonesia",
    linkedin: "https://www.linkedin.com/in/elkanatimotius/",
    expertise: ["Retail Management"],
  },
  {
    name: "Agus Darsono, MM., CSBA",
    position: "Director PT. United Waru Biscuit Manufactory",
    linkedin: "https://www.linkedin.com/in/agus-darsono-a300b438/",
    expertise: ["Retail Management"],
  },
  {
    name: "Edward Cesario, CSCM",
    position: "Director of Supply Chain in OT Group",
    linkedin: "https://www.linkedin.com/in/edward-cesario-cscm-8235561b/",
    expertise: ["Supply Chain Management"],
  },
  {
    name: "Eufemia Citra, M.Farm, CSCM",
    position: "PPIC & Warehouse Manager Mega Lifesciences Indonesia",
    linkedin:
      "https://www.linkedin.com/in/apt-eufemia-citra-m-farm-cscm-1450a6102/",
    expertise: ["Supply Chain Management"],
  },
  {
    name: "Dr. Ir. Bagusranu Wahyudi Putra, ST., MM., MMT., CSCA., CSCM",
    position:
      "Assistant Vice President in Port Planning & Control - PT Petrokimia Gresik",
    linkedin: "https://www.linkedin.com/in/bagusranu/",
    expertise: ["Supply Chain Management"],
  },
  {
    name: "apt. Widia Rahmi Mulyanis, S.Farm., CSBA",
    position: "PT. Kimia Farma Apotek - Pharmacy Manager",
    linkedin: "https://www.linkedin.com/in/widia-rahmi-mulyanis-355031205/",
    expertise: ["Strategic Business Analyst"],
  },
  {
    name: "Ir. Lewi S. Kristianto, M.M. CSBA",
    position: "Director PT. Visiniaga Mitra Kreasindo",
    linkedin: "https://www.linkedin.com/in/ichtus/",
    expertise: ["Strategic Business Analyst"],
  },
  {
    name: "Wiraatmaja Lookman",
    position: "Direktur dan Ahli K3 Umum PT. Lookman Djaja Logistic",
    linkedin: "https://www.linkedin.com/in/wiraatmaja-lookman-27427179",
    expertise: ["Logistics Management"],
  },
  {
    name: "Dr. Ferdy Yap, S.E., M.M.",
    position: "Direktur Utama Global Trans Logistics",
    linkedin: "https://www.linkedin.com/in/ferdy-yap-4a234a389",
    expertise: ["Logistics Operations"],
  },
  {
    name: "Dr. Andi Hendra Paluseri",
    position:
      "Sr Expert Stakeholder Advocacy | Chief ENC BUMN Hijau | Deputi ESDM ACEXI | Sekjen IAE ITB Pertamina",
    linkedin: "https://www.linkedin.com/in/dr-andi-hendra-paluseri-a26b0284",
    expertise: ["Stakeholder Advocacy"],
  },
  {
    name: "Ian Gibranata",
    position:
      "Operations Excellence & Management Specialist at Sinar Baja Electric | LSS Green Belt Certified",
    linkedin: "https://www.linkedin.com/in/ian-gibranata-82974725a",
    expertise: ["Operational Excellence"],
  },
];

const primeValues = [
  {
    letter: "P",
    title: "Passion",
    desc: "At LeanCore, passion means working with genuine enthusiasm and dedication to help organizations unlock their full potential. Every project is approached with energy and commitment to create meaningful impact.",
  },
  {
    letter: "R",
    title: "Responsibility",
    desc: "LeanCore takes full accountability for the results and long-term impact of every engagement. This value ensures that solutions delivered are not only effective but also sustainable for the client's growth.",
  },
  {
    letter: "I",
    title: "Innovation",
    desc: "Innovation is at the heart of LeanCore's approach. By combining lean principles with digital transformation, LeanCore continuously seeks new methods, tools, and strategies to help organizations adapt and thrive.",
  },
  {
    letter: "M",
    title: "Mindfulness",
    desc: "LeanCore is attentive to the needs, challenges, and aspirations of stakeholders. This mindfulness ensures that every solution is context-sensitive, people-centered, and aligned with the dynamic business environment.",
  },
  {
    letter: "E",
    title: "Excellence",
    desc: "LeanCore is committed to delivering world-class quality in consulting, training, and certification. Excellence means setting high standards, measuring success with tangible results, and continuously striving to exceed expectations.",
  },
];

// Tag color map
const expertiseColors: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  "Retail Management": {
    bg: "rgba(124,58,237,0.12)",
    color: "#7C3AED",
    border: "rgba(124,58,237,0.3)",
  },
  "Supply Chain Management": {
    bg: "rgba(0,66,118,0.10)",
    color: "#004276",
    border: "rgba(0,66,118,0.3)",
  },
  "Strategic Business Analyst": {
    bg: "rgba(15,118,110,0.10)",
    color: "#0F766E",
    border: "rgba(15,118,110,0.3)",
  },
  "Logistics Management": {
    bg: "rgba(234,88,12,0.10)",
    color: "#C2410C",
    border: "rgba(234,88,12,0.3)",
  },
  "Stakeholder Advocacy": {
    bg: "rgba(2,132,199,0.10)",
    color: "#0369A1",
    border: "rgba(2,132,199,0.3)",
  },
  "Operational Excellence": {
    bg: "rgba(22,163,74,0.10)",
    color: "#15803D",
    border: "rgba(22,163,74,0.3)",
  },
};

export default function AboutCompany() {
  const [showAllTrainers, setShowAllTrainers] = useState(false);
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
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .about-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ha1 { animation: heroFadeUp 0.65s ease both 0.05s; }
        .ha2 { animation: heroFadeUp 0.70s ease both 0.18s; }
        .ha3 { animation: heroFadeUp 0.70s ease both 0.30s; }
        .ha4 { animation: heroFadeUp 0.70s ease both 0.42s; }
        .ha5 { animation: heroFadeUp 0.70s ease both 0.54s; }

        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        [data-animate] {
          animation-fill-mode: both;
          animation-play-state: paused;
          animation-duration: 0.65s;
          animation-timing-function: ease;
        }
        [data-anim="up"]    { animation-name: fadeUpIn; }
        [data-anim="left"]  { animation-name: fadeInLeft; }
        [data-anim="right"] { animation-name: fadeInRight; }
        [data-anim="fade"]  { animation-name: fadeIn; animation-duration: 0.9s; }
        [data-delay="0"] { animation-delay: 0s; }
        [data-delay="1"] { animation-delay: 0.08s; }
        [data-delay="2"] { animation-delay: 0.16s; }
        [data-delay="3"] { animation-delay: 0.24s; }
        [data-delay="4"] { animation-delay: 0.32s; }
        [data-delay="5"] { animation-delay: 0.40s; }
        [data-delay="6"] { animation-delay: 0.48s; }

        /* ── HERO ── */
        .about-hero {
          position: relative;
          height: 660px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,42,78,0.88) 0%, rgba(0,66,118,0.78) 50%, rgba(0,20,40,0.88) 100%);
        }
        .about-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .about-hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #FACC15;
          margin-bottom: 24px;
        }
        .about-hero-eyebrow::before,
        .about-hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #FACC15;
          opacity: 0.6;
        }
        .about-hero-title {
          font-family: 'Roboto',;
          font-size: clamp(48px, 7vw, 84px);
          font-weight: 800;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .about-hero-title span { color: #FACC15; }
        .about-hero-tagline {
          font-size: 18px;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        .about-hero-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 560px;
          line-height: 1.8;
          margin-bottom: 36px;
        }
        .about-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 13px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .about-hero-btn:hover { background: #FEF08A; transform: translateY(-2px); }

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
          max-width: 540px;
          line-height: 1.75;
          margin-bottom: 48px;
        }
        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin-bottom: 48px;
        }

        /* ── ABOUT US ── */
        .about-us-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-us-text p {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 1px;
        }
        .about-us-text p span { font-weight: 600; color: #004276; }
        .about-us-img {
          overflow: hidden;
          border-top: 3px solid #FACC15;
          box-shadow: 0 16px 48px rgba(0,66,118,0.12);
        }
        .about-us-img img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .about-us-img:hover img { transform: scale(1.03); }

        /* ── VISION & MISSION ── */
        .vm-section { background: #fff; }
        .vm-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          display: grid;
          grid-template-columns: 220px 1fr;
          margin-bottom: 16px;
          overflow: hidden;
        }
        .vm-card:last-child { margin-bottom: 0; }
        .vm-card-left {
          background: #004276;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .vm-card-left::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
        }
        .vm-icon-wrap {
          width: 64px; height: 64px;
          background: rgba(250,204,21,0.15);
          border: 1px solid rgba(250,204,21,0.3);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .vm-card-label {
          font-family: 'Roboto',;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        .vm-card-right {
          padding: 40px 48px;
          font-size: 15px;
          font-weight: 300;
          color: #475569;
          line-height: 1.85;
          display: flex;
          align-items: center;
        }
        .vm-card-right strong { color: #004276; font-weight: 600; }
        .vm-mission-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .vm-mission-item:last-child { margin-bottom: 0; }
        .vm-num {
          flex-shrink: 0;
          width: 36px; height: 36px;
          background: #004276;
          color: #FACC15;
          font-size: 13px;
          font-weight: 700;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vm-mission-text {
          font-size: 14px;
          font-weight: 300;
          color: #475569;
          line-height: 1.75;
          padding-top: 6px;
        }
        .vm-mission-text strong { color: #004276; font-weight: 600; }

        /* ── PRIME VALUES ── */
        .prime-section { background: #F8FAFC; }
        .prime-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .prime-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: box-shadow 0.3s, transform 0.3s, border-top-color 0.3s;
        }
        .prime-card:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.10);
          transform: translateY(-4px);
          border-top-color: #FACC15;
        }
        .prime-letter {
          width: 52px; height: 52px;
          background: #004276;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: background 0.2s;
        }
        .prime-card:hover .prime-letter { background: #FACC15; }
        .prime-letter span {
          font-family: 'Roboto',;
          font-size: 26px;
          font-weight: 800;
          color: #FACC15;
          transition: color 0.2s;
        }
        .prime-card:hover .prime-letter span { color: #004276; }
        .prime-title {
          font-family: 'Roboto', ;
          font-size: 18px;
          font-weight: 700;
          color: #004276;
          margin-bottom: 10px;
        }
        .prime-desc {
          font-size: 12px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.7;
        }

        /* ══════════════════════════════════════════
           ── EXECUTIVE BOARD ──
           ONLY CHANGE: exec-grid now 2-col centered
        ══════════════════════════════════════════ */
        .exec-section { background: #fff; }

        .exec-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 760px;
          margin: 0 auto;
        }

        .exec-card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3 / 4;
          box-shadow: 0 8px 32px rgba(0,42,78,0.14);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s ease;
        }
        .exec-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,42,78,0.22);
        }

        .exec-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
          display: block;
        }
        .exec-card:hover .exec-photo { transform: scale(1.05); }

        .exec-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 22, 45, 0.97) 0%,
            rgba(0, 42, 78, 0.75) 40%,
            rgba(0, 42, 78, 0.10) 70%,
            transparent 100%
          );
          transition: opacity 0.4s ease;
        }

        .exec-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
          z-index: 3;
        }

        .exec-linkedin {
          position: absolute;
          top: 14px; right: 14px;
          z-index: 4;
          width: 34px; height: 34px;
          background: #0A66C2;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s, transform 0.25s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .exec-linkedin:hover { background: #004182; transform: scale(1.12); }

        .exec-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          padding: 24px 22px 22px;
        }

        .exec-position-badge {
          display: inline-block;
          background: #FACC15;
          color: #003560;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          padding: 4px 10px;
          border-radius: 2px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .exec-name {
          font-family: 'Roboto',;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .exec-expertise {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.35s ease;
        }
        .exec-card:hover .exec-expertise { max-height: 200px; opacity: 1; }
        .exec-expertise-label {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.45);
          margin-bottom: 8px;
        }
        .exec-expertise-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .exec-pill {
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(250,204,21,0.35);
          color: rgba(255,255,255,0.85);
          font-size: 10px;
          font-weight: 400;
          padding: 3px 9px;
          border-radius: 2px;
          backdrop-filter: blur(4px);
        }

        /* ══════════════════════════════════════════
           ── OUR TEAM ──
        ══════════════════════════════════════════ */
        .team-section { background: #F0F4F8; }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .team-card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3 / 4;
          box-shadow: 0 6px 24px rgba(0,42,78,0.10);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 52px rgba(0,42,78,0.18);
        }

        .team-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
          display: block;
        }
        .team-card:hover .team-photo { transform: scale(1.05); }

        .team-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 15, 35, 0.96) 0%,
            rgba(0, 35, 65, 0.70) 38%,
            rgba(0, 35, 65, 0.08) 68%,
            transparent 100%
          );
        }

        .team-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #FACC15;
          z-index: 3;
        }

        .team-linkedin {
          position: absolute;
          top: 14px; right: 14px;
          z-index: 4;
          width: 34px; height: 34px;
          background: #0A66C2;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s, transform 0.25s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .team-linkedin:hover { background: #004182; transform: scale(1.12); }

        .team-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          padding: 22px 20px 20px;
        }

        .team-position-badge {
          display: inline-block;
          background: rgba(250,204,21,0.18);
          border: 1px solid rgba(250,204,21,0.5);
          color: #FACC15;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.13em;
          padding: 3px 9px;
          border-radius: 2px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .team-name {
          font-family: 'Roboto',;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          margin-bottom: 12px;
        }

        .team-expertise {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.35s ease;
        }
        .team-card:hover .team-expertise { max-height: 180px; opacity: 1; }
        .team-expertise-label {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.40);
          margin-bottom: 7px;
        }
        .team-expertise-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .team-pill {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(250,204,21,0.30);
          color: rgba(255,255,255,0.80);
          font-size: 10px;
          font-weight: 400;
          padding: 3px 9px;
          border-radius: 2px;
          backdrop-filter: blur(4px);
        }

        /* ══════════════════════════════════════════
           ── ASSOCIATE TRAINERS (NEW DESIGN) ──
        ══════════════════════════════════════════ */
        .trainers-section { background: #fff; }

        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .trainer-card {
          position: relative;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .trainer-card:hover {
          box-shadow: 0 12px 40px rgba(0,66,118,0.12);
          transform: translateY(-4px);
        }

        /* gold + navy gradient top accent */
        .trainer-card::before {
          content: '';
          display: block;
          height: 3px;
          background: linear-gradient(to right, #FACC15, #004276);
          flex-shrink: 0;
        }

        /* avatar + header row */
        .trainer-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 20px 0;
        }

        /* monogram avatar */
        .trainer-avatar {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          background: #004276;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .trainer-card:hover .trainer-avatar { background: #FACC15; }
        .trainer-monogram {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #FACC15;
          letter-spacing: -0.02em;
          transition: color 0.2s;
          user-select: none;
        }
        .trainer-card:hover .trainer-monogram { color: #004276; }

        /* name + position beside avatar */
        .trainer-header-text {
          flex: 1;
          min-width: 0;
        }

        .trainer-name {
          font-size: 13px;
          font-weight: 700;
          color: #1E293B;
          line-height: 1.45;
          margin-bottom: 4px;
        }

        .trainer-position {
          font-size: 11.5px;
          font-weight: 300;
          color: #64748B;
          line-height: 1.5;
        }

        /* body below header */
        .trainer-body {
          padding: 14px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }

        .trainer-divider {
          height: 1px;
          background: #E2E8F0;
        }

        .trainer-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .trainer-expertise-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #94A3B8;
          margin-bottom: 6px;
        }

        .trainer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          flex: 1;
        }

        .trainer-badge {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 2px;
          border: 1px solid;
        }

        /* LinkedIn link */
        .trainer-linkedin-btn {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: #0A66C2;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 2px 6px rgba(10,102,194,0.25);
        }
        .trainer-linkedin-btn:hover {
          background: #004182;
          transform: scale(1.1);
        }

        /* See More button */
        .trainers-see-more {
          margin-top: 32px;
          display: flex;
          justify-content: center;
        }
        .trainers-see-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 12px 28px;
          border: 1.5px solid #004276;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .trainers-see-more-btn:hover {
          background: #004276;
          color: #FACC15;
          border-color: #004276;
          transform: translateY(-2px);
        }
        .trainers-see-more-arrow {
          font-size: 14px;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .trainers-see-more-arrow.open {
          transform: rotate(180deg);
        }

        /* Hidden trainers fade-in */
        .trainer-card.trainer-hidden {
          display: none;
        }
        .trainer-card.trainer-visible-extra {
          animation: fadeUpIn 0.45s ease both;
        }

        /* ── PARTNERS ── */
        .partners-section { background: #F8FAFC; }
        .marquee-wrap {
          overflow: hidden;
          position: relative;
        }
        .marquee-wrap::before,
        .marquee-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
        }
        .marquee-wrap::before { left: 0; background: linear-gradient(to right, #F8FAFC, transparent); }
        .marquee-wrap::after  { right: 0; background: linear-gradient(to left, #F8FAFC, transparent); }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 64px;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
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
          .prime-grid { grid-template-columns: repeat(3, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .trainers-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .sec-wrap { padding: 56px 24px; }
          .about-us-grid { grid-template-columns: 1fr; }
          .vm-card { grid-template-columns: 1fr; }
          .prime-grid { grid-template-columns: repeat(2, 1fr); }
          .exec-grid { grid-template-columns: 1fr; max-width: 420px; }
          .team-grid { grid-template-columns: 1fr; }
          .trainers-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .prime-grid { grid-template-columns: 1fr; }
          .trainers-grid { grid-template-columns: 1fr; }
        }

        /* Touch devices: always show expertise */
        @media (hover: none) {
          .exec-expertise, .team-expertise {
            max-height: 200px;
            opacity: 1;
          }
        }
      `}</style>

      <div className="about-page">
        {/* ── HERO ── */}
        <section className="about-hero">
          <Image
            src="/about1.jpg"
            alt="About LeanCore"
            fill
            priority
            className="object-cover"
          />
          <div className="about-hero-overlay" />
          <div className="about-hero-grid" />
          <div className="about-hero-content">
            <p className="about-hero-eyebrow ha1">ABOUT LEANCORE</p>
            <h1 className="about-hero-title ha2">
              LeanCore <span>Consulting</span>
            </h1>
            <p className="about-hero-tagline ha3">
              Driving efficiency, precision, and transformation across modern
              industries.
            </p>
            <p className="about-hero-desc ha4">
              PT Operasi Unggul Indonesia — a management consulting firm
              dedicated to helping Indonesian manufacturing organizations
              achieve sustainable operational excellence.
            </p>
            <Link href="/contact" className="about-hero-btn ha5">
              CONTACT US →
            </Link>
          </div>
          <div className="about-hero-bottom-fade" />
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

        {/* ── ABOUT US ── */}
        <section style={{ background: "#fff" }}>
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              WHO WE ARE
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              About Us
            </h2>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="2"
            />
            <div className="about-us-grid">
              <div
                className="about-us-text"
                data-animate
                data-anim="left"
                data-delay="2"
              >
                <p>
                  Founded with a clear mission to elevate Indonesian
                  manufacturing through operational excellence,{" "}
                  <span>LeanCore Consulting</span> has evolved into a trusted
                  strategic partner for organizations determined to build
                  sustainable competitive advantage in an increasingly dynamic
                  marketplace.
                </p>
                <p>
                  Backed by decades of collective expertise in supply chain
                  management, lean manufacturing, digital transformation, and
                  strategic business development, our consultants deliver more
                  than insights. We work side-by-side with leadership teams to
                  translate strategy into execution—ensuring measurable, lasting
                  results.
                </p>
                <p>
                  Through an integrated approach that combines consulting,
                  executive training, and certification programs, we empower
                  organizations to strengthen internal capabilities, foster
                  operational discipline, and drive long-term, scalable growth.
                </p>
              </div>
              <div
                className="about-us-img"
                data-animate
                data-anim="right"
                data-delay="3"
              >
                <img src="/aboutUs.jpeg" alt="Manufacturing Excellence" />
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="vm-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              OUR DIRECTION
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Vision & Mission
            </h2>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="2"
            />

            <div className="vm-card" data-animate data-anim="up" data-delay="2">
              <div className="vm-card-left">
                <div className="vm-icon-wrap">
                  <img
                    src="/vision.svg"
                    alt="Vision"
                    width={28}
                    height={28}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p className="vm-card-label">Our Vision</p>
              </div>
              <div className="vm-card-right">
                <p>
                  To become a <strong>trusted strategic partner</strong> in
                  global operational transformation by building efficient,
                  resilient, and competitive manufacturing enterprises through{" "}
                  <strong>lean thinking</strong> and{" "}
                  <strong>continuous innovation</strong>.
                </p>
              </div>
            </div>

            <div className="vm-card" data-animate data-anim="up" data-delay="3">
              <div className="vm-card-left">
                <div className="vm-icon-wrap">
                  <img
                    src="/mission.svg"
                    alt="Mission"
                    width={28}
                    height={28}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p className="vm-card-label">Our Mission</p>
              </div>
              <div className="vm-card-right" style={{ display: "block" }}>
                {[
                  {
                    text: (
                      <>
                        Driving{" "}
                        <strong>efficiency and operational excellence</strong>{" "}
                        through lean thinking and continuous improvement.
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        Accelerating{" "}
                        <strong>innovation and digitalization</strong> to create
                        adaptive supply chains and smart factories.
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        Developing{" "}
                        <strong>industrial capabilities and leadership</strong>{" "}
                        through world-class consulting, training, and
                        certification programs.
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="vm-mission-item">
                    <div className="vm-num">{i + 1}</div>
                    <p className="vm-mission-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRIME VALUES ── */}
        <section className="prime-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              OUR PRINCIPLES
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              PRIME Values
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              The core principles driving LeanCore's excellence.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />
            <div className="prime-grid">
              {primeValues.map((v, i) => (
                <div
                  key={v.letter}
                  className="prime-card"
                  data-animate
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <div className="prime-letter">
                    <span>{v.letter}</span>
                  </div>
                  <h3 className="prime-title">{v.title}</h3>
                  <p className="prime-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXECUTIVE BOARD ── */}
        <section className="exec-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              LEADERSHIP
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Executive Board
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Leadership team driving operational excellence across every
              engagement.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />

            <div className="exec-grid">
              {boardMembers.map((m, i) => (
                <div
                  key={i}
                  className="exec-card"
                  data-animate
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <img className="exec-photo" src={m.image} alt={m.name} />
                  <div className="exec-gradient" />
                  <div className="exec-top-bar" />
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exec-linkedin"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={15}
                      height={15}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </a>
                  <div className="exec-content">
                    <div className="exec-position-badge">{m.position}</div>
                    <h3 className="exec-name">{m.name}</h3>
                    <div className="exec-expertise">
                      <p className="exec-expertise-label">EXPERTISE</p>
                      <div className="exec-expertise-pills">
                        {m.expertise.map((e, j) => (
                          <span key={j} className="exec-pill">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="team-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              OUR PEOPLE
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Our Team
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              The dedicated professionals behind LeanCore's daily operations and
              client success.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />

            <div className="team-grid">
              {teamMembers.map((m, i) => (
                <div
                  key={i}
                  className="team-card"
                  data-animate
                  data-anim="up"
                  data-delay={String(i + 1)}
                >
                  <img className="team-photo" src={m.image} alt={m.name} />
                  <div className="team-gradient" />
                  <div className="team-top-bar" />
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={15}
                      height={15}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </a>
                  <div className="team-content">
                    <div className="team-position-badge">{m.position}</div>
                    <h3 className="team-name">{m.name}</h3>
                    <div className="team-expertise">
                      <p className="team-expertise-label">EXPERTISE</p>
                      <div className="team-expertise-pills">
                        {m.expertise.map((e, j) => (
                          <span key={j} className="team-pill">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ASSOCIATE TRAINERS ── */}
        <section className="trainers-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              OUR EXPERTS
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Associate Trainers
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Industry experts bringing real-world experience and strategic
              insight to elevate your organization.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />

            <div className="trainers-grid">
              {trainers.map((t, i) => {
                const isHidden = !showAllTrainers && i >= 6;
                const isExtra = showAllTrainers && i >= 6;

                const initials = t.name
                  .split(" ")
                  .filter((w) => /^[A-Z]/.test(w))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("");

                const colors = expertiseColors[t.expertise[0]] ?? {
                  bg: "rgba(0,66,118,0.08)",
                  color: "#004276",
                  border: "rgba(0,66,118,0.25)",
                };

                return (
                  <div
                    key={i}
                    className={`trainer-card${isHidden ? " trainer-hidden" : ""}${isExtra ? " trainer-visible-extra" : ""}`}
                    data-animate
                    data-anim="up"
                    data-delay={String((i % 3) + 1)}
                  >
                    {/* Header: avatar + name/position */}
                    <div className="trainer-header">
                      <div className="trainer-avatar">
                        <span className="trainer-monogram">{initials}</span>
                      </div>
                      <div className="trainer-header-text">
                        <p className="trainer-name">{t.name}</p>
                        <p className="trainer-position">{t.position}</p>
                      </div>
                    </div>

                    {/* Body: expertise + LinkedIn */}
                    <div className="trainer-body">
                      <div className="trainer-divider" />
                      <p className="trainer-expertise-label">EXPERTISE</p>
                      <div className="trainer-footer">
                        <div className="trainer-badges">
                          {t.expertise.map((e, j) => {
                            const ec = expertiseColors[e] ?? {
                              bg: "rgba(0,66,118,0.08)",
                              color: "#004276",
                              border: "rgba(0,66,118,0.25)",
                            };
                            return (
                              <span
                                key={j}
                                className="trainer-badge"
                                style={{
                                  background: ec.bg,
                                  color: ec.color,
                                  borderColor: ec.border,
                                }}
                              >
                                {e}
                              </span>
                            );
                          })}
                        </div>
                        <a
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="trainer-linkedin-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={15}
                            height={15}
                            style={{ filter: "brightness(0) invert(1)" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See More / See Less */}
            {trainers.length > 6 && (
              <div className="trainers-see-more">
                <button
                  className="trainers-see-more-btn"
                  onClick={() => setShowAllTrainers((v) => !v)}
                >
                  {showAllTrainers
                    ? "SEE LESS"
                    : `SEE MORE (${trainers.length - 6} MORE)`}
                  <span
                    className={`trainers-see-more-arrow${showAllTrainers ? " open" : ""}`}
                  >
                    ▾
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── TRUSTED PARTNERS ── */}
        <section className="partners-section">
          <div className="sec-wrap" style={{ paddingBottom: 48 }}>
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              COLLABORATIONS
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Our Trusted Partners
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Collaborating with leading organizations across industries.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />
          </div>
          <div
            className="marquee-wrap"
            style={{ paddingBottom: 80 }}
            data-animate
            data-anim="fade"
            data-delay="0"
          >
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 16px",
                  }}
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                    style={{ maxHeight: 72, width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
