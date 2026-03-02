"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Widia Rahmi Mulyanis, CSBA",
    role: "Manajer Bisnis PT. Kimia Farma",
    text: "Materinya sangat aplikatif dan langsung bisa saya terapkan di tempat kerja.",
  },
  {
    name: "Sarah Oktania Purnomo Budi Martono, CSBA",
    role: "Mahasiswa Universitas Ciputra",
    text: "Pengajarnya profesional dan komunikatif, jadi mudah dipahami.",
  },
  {
    name: "Agus Darsono Djuwarko, CSBA",
    role: "Direktur PT. United Waru Biscuit Manufactory",
    text: "Contoh kasus yang diberikan sangat relevan dengan kondisi industri saat ini.",
  },
  {
    name: "Widya Arif Sofyan Kurniawan, CSBA",
    role: "VPC H.M. Sampoerna TPO & Owner Protiegg Golden Farm",
    text: "Materinya up-to-date dan disampaikan secara runtut oleh para praktisi.",
  },
  {
    name: "Nisamuddin, CSBA",
    role: "Manajer Bisnis PT. Kimia Farma",
    text: "Metode pengajarannya membuat saya mudah memahami konsep yang kompleks.",
  },
  {
    name: "Lewi Supranata Kristianto, CSBA",
    role: "Director of PT. Visinaga Mitra Kreasindo",
    text: "Saya senang karena diajak berpikir strategis, bukan hanya teori.",
  },
  {
    name: "Hendri Susanto, CSBA",
    role: "Manajer Bisnis PT. Kimia Farma",
    text: "Diskusi kelompoknya seru dan membuka wawasan saya.",
  },
  {
    name: "Raymond Setiyawan, CSBA",
    role: "Mahasiswa Universitas Ciputra",
    text: "Topik-topiknya sangat relevan dengan kebutuhan industri saat ini.",
  },
  {
    name: "Alfaryan Enggar Pangestu, CSBA",
    role: "Customer Service Administrative PT Bank Mandiri Tbk.",
    text: "Materinya disampaikan secara sistematis dan mudah dicerna.",
  },
  {
    name: "Lala Setiany Wee, CSBA",
    role: "CEO MSS Group",
    text: "Topik-topiknya sangat relevan dengan kebutuhan industri saat ini.",
  },
  {
    name: "Komang Anandya Aryansyah Tangkas, CSBA",
    role: "Assistant logistic officer anlog of KRI Usman Harun",
    text: "Saya merasa lebih siap menghadapi tantangan di pekerjaan saya.",
  },
  {
    name: "Clivyne Eugenia Charles, CSBA",
    role: "Mahasiswa Universitas Ciputra",
    text: "Diskusi studi kasusnya membuat saya berpikir kritis dan analitis.",
  },
  {
    name: "Nanda Sani Mitra Imron, CSBA",
    role: "Manager of PT KAI Regional Division II",
    text: "Saya puas karena bisa belajar langsung dari pengajar yang memang praktisi lapangan.",
  },
  {
    name: "Annisa Aurelia Setiadi Suhendra, CDBT",
    role: "Mahasiswa Universitas Ciputra",
    text: "Waktu pelatihannya efektif, padat, dan tidak bertele-tele.",
  },
];

const events = [
  {
    date: "13-14",
    month: "MAR",
    title: "CIPM - Certified Integrated Production Manager",
    batch: "BATCH 1",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/p/DRV06VgD7E1/",
  },
  {
    date: "28",
    month: "MAR",
    title:
      "Predictive Business: Teknik Analisis Data untuk Proyeksi Bisnis 2026",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "10-12",
    month: "APR",
    title: "CFDM - Certified Factory & Digital Manufacturing",
    batch: "BATCH 1",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/p/DRVumqEEq7y/",
  },
  {
    date: "25",
    month: "APR",
    title: "Smart Factory 4.0: Integrating IoT & Data-Driven Strategy",
    type: "PUBLIC TRAINING",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "1-2",
    month: "MAY",
    title: "CSBA - Certified Strategic Business Analyst",
    batch: "BATCH 1",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "30",
    month: "MAY",
    title: "Supply Chain 4.0: Integrasi Logistik & Pengadaan di Era Disrupsi",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "27",
    month: "JUN",
    title: "Global Supply Chain Resilience: Navigating Risk & Uncertainty",
    type: "PUBLIC TRAINING",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "3-4",
    month: "JUL",
    title: "CSCM - Certified Supply Chain Manager",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "25",
    month: "JUL",
    title: "Inventory Crisis: Cara Memangkas Biaya Stok Tanpa Kehabisan Barang",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "1-2",
    month: "AUG",
    title: "CRME - Certified Risk Management Expert",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "14",
    month: "AUG",
    title: "TQM Mastery: Building a Culture of Continuous Improvement",
    type: "PUBLIC TRAINING",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "05",
    month: "SEP",
    title:
      "The Resilient Enterprise: Mitigasi Risiko Bisnis di Tengah Krisis Ekonomi",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "12-13",
    month: "SEP",
    title: "CIPM - Certified Integrated Production Manager",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "2-3",
    month: "OCT",
    title: "CFDM - Certified Factory & Digital Manufacturing",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "10",
    month: "OCT",
    title: "Strategic Business Reengineering: Designing Future-Ready Growth",
    type: "PUBLIC TRAINING",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "24",
    month: "OCT",
    title:
      "Production Mastery: OEE & Lead Time Optimization dalam Industri Manufaktur",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "6-7",
    month: "NOV",
    title: "CSBA - Certified Strategic Business Analyst",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "28",
    month: "NOV",
    title:
      "Strategic Decision Making: Dari Data Analyst Menjadi Business Partner",
    type: "WEBINAR",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "12",
    month: "DEC",
    title: "The Future Leader: Lean Leadership & Organizational Agility",
    type: "PUBLIC TRAINING",
    link: "https://www.instagram.com/leancore_consultant/",
  },
  {
    date: "18-19",
    month: "DEC",
    title: "CSCM - Certified Supply Chain Manager",
    batch: "BATCH 2",
    type: "CERTIFICATION PROGRAM",
    link: "https://www.instagram.com/leancore_consultant/",
  },
];

const typeConfig: Record<
  string,
  { dot: string; badge: string; dateBg: string }
> = {
  "CERTIFICATION PROGRAM": {
    dot: "#004276",
    badge: "#004276",
    dateBg: "#004276",
  },
  WEBINAR: { dot: "#0E7490", badge: "#0E7490", dateBg: "#0E7490" },
  "PUBLIC TRAINING": { dot: "#FACC15", badge: "#FACC15", dateBg: "#FACC15" },
};

const services = [
  {
    title: "Business Advisor",
    image: "/business-advisor.png",
    slug: "businessAdvisor",
  },
  {
    title: "International Certification",
    image: "/international-certification.png",
    slug: "internationalCertification",
  },
  {
    title: "Workshop & Training",
    image: "/workshop-training.png",
    slug: "workshopTraining",
  },
  { title: "Mini MBA", image: "/mini-mba.png", slug: "miniMBA" },
  {
    title: "Research & Publications",
    image: "/research-publications.png",
    slug: "researchPublication",
  },
  { title: "Data Solution", image: "/data-solution.jpg", slug: "dataSolution" },
];

export default function About() {
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(
      () => setTIndex((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(iv);
  }, []);

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

  const prev = () =>
    setTIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setTIndex((p) => (p + 1) % testimonials.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .home-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8FAFC;
        }

        /* ── HERO ANIMATIONS ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .hero-anim-1 { animation: heroFadeUp 0.65s ease both; animation-delay: 0.05s; }
        .hero-anim-2 { animation: heroFadeUp 0.7s  ease both; animation-delay: 0.18s; }
        .hero-anim-3 { animation: heroFadeUp 0.7s  ease both; animation-delay: 0.3s; }
        .hero-anim-4 { animation: heroFadeUp 0.7s  ease both; animation-delay: 0.42s; }
        .hero-anim-5 { animation: heroFadeUp 0.7s  ease both; animation-delay: 0.54s; }

        /* ── SCROLL ANIMATIONS ── */
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
        .hero-section {
          position: relative;
          height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/home.jpg');
          background-size: cover;
          background-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,42,78,0.88) 0%, rgba(0,66,118,0.78) 50%, rgba(0,20,40,0.88) 100%);
        }
        .hero-grid-tex {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 800;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero-title-sub {
          display: block;
          font-size: clamp(18px, 2.8vw, 36px);
          font-weight: 500;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,);
          margin-bottom: 6px;
        }
        .hero-title-main {
          display: block;
          font-size: clamp(56px, 10vw, 108px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FACC15;
          line-height: 1;
        }
        .hero-tagline {
          font-size: 18px;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        .hero-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }
        .hero-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 12px 28px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.2s;
        }
        .hero-btn-primary:hover { background: #FEF08A; transform: translateY(-2px); }
        .hero-btn-secondary {
          background: transparent;
          color: rgba(255,255,255,0.8);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 12px 28px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }
        .hero-scroll {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 48px;
        }
        .hero-scroll-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.3);
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(250,204,21,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-bottom-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #F8FAFC);
        }

        /* ── SHARED SECTION STYLES ── */
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
          margin-bottom: 48px;
        }
        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #FACC15, #E2E8F0, transparent);
          margin-bottom: 48px;
        }

        /* ── SERVICES GRID ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .service-card {
          position: relative;
          height: 240px;
          overflow: hidden;
          border-top: 3px solid transparent;
          transition: border-color 0.3s;
          cursor: pointer;
        }
        .service-card:hover { border-top-color: #FACC15; }
        .service-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,42,78,0.5) 0%, rgba(0,66,118,0.85) 100%);
          transition: opacity 0.3s;
        }
        .service-card:hover .service-card-overlay { opacity: 0.95; }
        .service-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .service-card-title {
          font-family: 'Roboto',;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .service-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FACC15;
          color: #004276;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: 2px;
          text-decoration: none;
          width: fit-content;
          transition: background 0.2s;
        }
        .service-card-btn:hover { background: #FEF08A; }

        /* ── REACH + COMMUNITY WRAPPER ── */
        .reach-community-wrap {
          background: #F8FAFC;
          padding: 0 48px 80px;
        }
        .reach-community-inner {
          max-width: 1000px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── REACH SECTION ── */
        .reach-section {
          background: #004276;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          border: 2px solid #FACC15;
          box-shadow:
            0 0 0 1px rgba(250,204,21,0.15),
            0 12px 50px rgba(0,0,0,0.4),
            0 0 60px rgba(250,204,21,0.08);
        }
        .reach-grid-tex {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          border-radius: 16px;
        }
        .reach-orb {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%);
          top: -200px; left: -100px;
          pointer-events: none;
        }

        /* ── ROW 1: header strip ── */
        .reach-row-top {
          position: relative;
         
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 2px 0px;
          
        }

        /* ── ROW 2: 2 kolom kiri konten | kanan gambar ── */
        .reach-body {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          min-height: 100px;
          left: 2% !important;
        }

        
        /* Left column */
        .reach-inner {
          position: relative;
          padding: 15px 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          text-align: left;
        }

        /* ── PERKS LIST ── */
        .reach-perks-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 110%;
          margin-bottom: 5px;
          border-bottom: 1px solid rgba(250,204,21,0.2);
        }
       
        .reach-perks-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }
        .reach-perks-list li {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1.5;
        }
        .reach-perks-list li .perk-icon {
          color: #4ADE80;
          font-weight: 800;
          font-size: 15px;
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(74,222,128,0.15);
          border-radius: 50%;
        }

        /* ── EYEBROW (row 1) ── */
        .reach-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #FACC15;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .reach-eyebrow::before,
        .reach-eyebrow::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }
        .reach-title {
          font-family: 'Roboto bold',;
          font-size: clamp(30px, 4vw, 45px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 0;
          line-height: 1.2;
        }

       /* ── FREE BADGE ── */
.reach-free-badge {
  display: inline-flex;
  justify-content: center;   /* ✅ center horizontal */
  align-items: center;       /* ✅ center vertical */
  text-align: center;        /* ✅ text di tengah */

  gap: 10px;
  background: linear-gradient(135deg, #FACC15 0%, #F59E0B 100%);
  color: #004276;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 12px 22px;
  border-radius: 8px;
  margin-bottom: 0;
  box-shadow: 0 4px 20px rgba(250,204,21,0.5);
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  line-height: 1; /* ✅ cegah teks turun */
}

.reach-free-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(250,204,21,0.6);
}

.reach-free-badge::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FACC15, #F59E0B);
  opacity: 0.3;
  animation: pulse-ring 2s ease-out infinite;
  pointer-events: none;
}

.reach-free-badge-icon {
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center; /* ✅ icon sejajar teks */
}

.reach-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  margin-top: 12px;
  letter-spacing: 0.02em;
}

        /* ── PHOTO WRAP (right col of row 2) ── */
        .reach-photo-wrap {
          position: relative;
          align-self: stretch;
          overflow: hidden;
          min-height: 280px;
        }
        .reach-photo-wrap img {
          position: absolute !important;
          bottom: 0 !important;
          top: auto !important;
          left: 45% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          max-width: none !important;
          height: 110% !important;
          object-fit: contain !important;
          object-position: bottom center !important;
        }

        /* ── COMMUNITY ── */
        .community-section {
          position: relative;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          border: 2px solid rgba(250,204,21,0.4);
          box-shadow: 0 12px 50px rgba(0,0,0,0.3);
        }
        .community-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,42,78,0.88) 0%, rgba(0,66,118,0.78) 50%, rgba(0,94,168,0.88) 100%);
          border-radius: 16px;
        }
        .community-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .community-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #FACC15;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .community-eyebrow::before,
        .community-eyebrow::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #FACC15;
          opacity: 0.5;
        }
        .community-title {
          font-family: 'Roboto',;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.2;
        }
        .community-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 480px;
        }
        .community-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .community-btn:hover { background: #FEF08A; transform: translateY(-2px); }

        /* ── PROGRAMS ── */
        .programs-section { background: #fff; }
        .programs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .programs-list {
          max-height: 620px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-right: 8px;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,66,118,0.3) transparent;
        }
        .programs-list::-webkit-scrollbar { width: 3px; }
        .programs-list::-webkit-scrollbar-track { background: transparent; }
        .programs-list::-webkit-scrollbar-thumb { background: rgba(0,66,118,0.3); border-radius: 2px; }
        .event-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .event-card:hover {
          box-shadow: 0 4px 20px rgba(0,66,118,0.08);
          border-color: #FACC15;
        }
        .event-date-box {
          flex-shrink: 0;
          width: 56px; height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          color: #fff;
        }
        .event-date-num {
          font-family: 'Roboto', ;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
        }
        .event-date-month {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          margin-top: 2px;
        }
        .event-body { flex: 1; }
        .event-title {
          font-size: 13px;
          font-weight: 500;
          color: #1E293B;
          line-height: 1.45;
          margin-bottom: 8px;
        }
        .event-badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .event-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 3px 8px;
          border-radius: 2px;
          color: #fff;
        }
        .event-batch-badge {
          background: #1dc8f3;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 3px 8px;
          border-radius: 2px;
          color: #ffff;
        }
        .event-link {
          font-size: 11px;
          font-weight: 600;
          color: #004276;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .event-link:hover { color: #FACC15; }
        .programs-right {
          position: relative;
          height: 580px;
          overflow: hidden;
          border-top: 3px solid #FACC15;
        }
        .programs-right-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,42,78,0.5) 0%, rgba(0,42,78,0.92) 100%);
        }
        .programs-right-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 40px 36px;
          color: #fff;
        }
        .programs-right-title {
          font-family: 'Roboto',;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .programs-right-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .programs-right-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FACC15;
          color: #004276;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 12px 24px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .programs-right-btn:hover { background: #FEF08A; }

        /* ── TESTIMONIALS ── */
        .testimonials-section { background: #F8FAFC; }
        .testimonial-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #004276;
          padding: 52px 48px 40px;
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }
        .testimonial-quote-mark {
          position: absolute;
          top: 20px; left: 44px;
          font-family: 'Roboto', serif;
          font-size: 80px;
          font-weight: 800;
          color: rgba(0,66,118,0.07);
          line-height: 1;
          user-select: none;
        }
        .testimonial-text {
          font-size: 17px;
          font-weight: 300;
          color: #334155;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 28px;
          position: relative;
        }
        .testimonial-rule { width: 40px; height: 2px; background: #FACC15; margin-bottom: 20px; }
        .testimonial-name {
          font-family: 'Roboto',;
          font-size: 16px;
          font-weight: 700;
          color: #004276;
        }
        .testimonial-role {
          font-size: 12px;
          font-weight: 400;
          color: #94A3B8;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }
        .testimonial-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
        .testimonial-arrow {
          width: 40px; height: 40px;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          color: #004276;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .testimonial-arrow:hover {
          background: #004276;
          border-color: #004276;
          color: #FACC15;
        }
        .testimonial-dots { display: flex; gap: 6px; }
        .testimonial-dot {
          height: 6px;
          border-radius: 3px;
          background: #E2E8F0;
          transition: width 0.3s, background 0.3s;
          width: 6px;
          cursor: pointer;
        }
        .testimonial-dot.active { width: 24px; background: #004276; }

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
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .programs-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .reach-community-wrap { padding: 0 24px 56px; }
          .reach-body { grid-template-columns: 1fr; }
          .reach-photo-wrap { display: none; }
          .reach-inner { padding: 28px 24px; }
          .reach-row-top { padding: 36px 24px 24px; }
          .community-content { padding: 48px 32px; }
        }

        @media (max-width: 640px) {
          .sec-wrap { padding: 56px 24px; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="home-page">
        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-grid-tex" />
          <div className="hero-content">
            <h1 className="hero-title hero-anim-2">
              <span className="hero-title-sub">OPERATIONAL EXCELLENCE IS</span>
              <span className="hero-title-main">LEANCORE.</span>
            </h1>
            <p className="hero-tagline hero-anim-3">
              Driving efficiency, precision, and transformation across modern
              industries.
            </p>

            <div className="hero-btns hero-anim-5">
              <Link href="/services" className="hero-btn-primary">
                EXPLORE SERVICES →
              </Link>
              <Link href="/contact" className="hero-btn-secondary">
                CONTACT US
              </Link>
            </div>
            <div className="hero-scroll hero-anim-5">
              <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
              <div className="hero-scroll-line" />
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        {/* ── SERVICES ── */}
        <section style={{ background: "#F8FAFC" }}>
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              WHAT WE OFFER
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Our Services
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Business consulting, industry certifications, training workshops,
              mini MBA programs, research publications, and data solutions.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />
            <div className="services-grid">
              {services.map((s, i) => (
                <div
                  key={s.slug}
                  className="service-card"
                  data-animate
                  data-anim="up"
                  data-delay={String((i % 3) + 1)}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="service-card-overlay" />
                  <div className="service-card-content">
                    <h3 className="service-card-title">{s.title}</h3>
                    <Link
                      href={`/services/${s.slug}`}
                      className="service-card-btn"
                    >
                      LEARN MORE →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REACH OUT + COMMUNITY ── */}
        <div className="reach-community-wrap">
          <div className="reach-community-inner">
            {/* REACH OUT */}
            <section
              className="reach-section"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              <div className="reach-grid-tex" />
              <div className="reach-orb" />

              {/* ── ROW 1: Header centered ── */}
              <div className="reach-row-top">
                <p className="reach-eyebrow">FREE CONSULTATION</p>
                <h2 className="reach-title">Reach Out to Us</h2>
              </div>

              {/* ── ROW 2: Kiri konten | Kanan gambar ── */}
              <div className="reach-body">
                {/* Kolom Kiri */}
                <div className="reach-inner">
                  <div className="reach-perks-header">
                    
                  </div>

                  <ul className="reach-perks-list">
                    <li>
                      <span className="perk-icon">✓</span>
                      1-hour session with an experienced consultant
                    </li>
                    <li>
                      <span className="perk-icon">✓</span>
                      Strategies tailored to your organization
                    </li>
                    <li>
                      <span className="perk-icon">✓</span>
                      No commitment, no hidden fees
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/6281803540000?text=Halo%20LeanCore,%20saya%20ingin%20konsultasi%20gratis."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-free-badge"
                  >
                    <span className="reach-free-badge-icon">🎁</span>
                    FREE 1-Hour Online Consultation
                  </a>
                  <p className="reach-sub">
                    No credit card required &nbsp;·&nbsp; Response within 24
                    hours
                  </p>
                </div>

                {/* Kolom Kanan — Gambar */}
                <div className="reach-photo-wrap">
                  <Image
                    src="/reach.png"
                    alt="Reach Out"
                    fill
                    sizes="420px"
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* COMMUNITY */}
            <section
              className="community-section"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/team.jpg"
                  alt="Team"
                  fill
                  className="object-cover"
                  style={{ transform: "scale(1.05)" }}
                  priority
                />
              </div>
              <div className="community-overlay" />
              <div className="community-content">
                <p className="community-eyebrow">JOIN US</p>
                <h2 className="community-title">Join Our Community</h2>
                <p className="community-desc">
                  Stay updated with program launches, exclusive insights, and
                  professional networking opportunities.
                </p>
                <a
                  href="https://chat.whatsapp.com/JFCQDPXTYnz6X6t1WImwQG?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="community-btn"
                >
                  JOIN WHATSAPP COMMUNITY →
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* ── PROGRAMS ── */}
        <section className="programs-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              SCHEDULE
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Upcoming Programs 2026
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Browse our upcoming certifications, webinars, and public training
              events.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />

            <div className="programs-grid">
              <div
                className="programs-list"
                data-animate
                data-anim="left"
                data-delay="2"
              >
                {events.map((ev, i) => {
                  const cfg = typeConfig[ev.type] ?? {
                    dot: "#004276",
                    badge: "#004276",
                    dateBg: "#004276",
                  };
                  return (
                    <div key={i} className="event-card">
                      <div
                        className="event-date-box"
                        style={{ background: cfg.dateBg }}
                      >
                        <span className="event-date-num">{ev.date}</span>
                        <span className="event-date-month">{ev.month}</span>
                      </div>
                      <div className="event-body">
                        <p className="event-title">{ev.title}</p>
                        <div className="event-badges">
                          {ev.batch && (
                            <span className="event-batch-badge">
                              {ev.batch}
                            </span>
                          )}
                          <span
                            className="event-badge"
                            style={{ background: cfg.badge }}
                          >
                            {ev.type}
                          </span>
                        </div>
                        <a
                          href={ev.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-link"
                        >
                          VIEW DETAIL →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="programs-right"
                data-animate
                data-anim="right"
                data-delay="3"
              >
                <Image
                  src="/upcomingClass.png"
                  alt="Upcoming Class"
                  fill
                  className="object-cover"
                />
                <div className="programs-right-overlay" />
                <div className="programs-right-content">
                  <h3 className="programs-right-title">
                    Check & Download the 2026 Schedule
                  </h3>
                  <p className="programs-right-desc">
                    Don't miss your opportunity to join our upcoming programs.
                    Review the complete 2026 schedule and download the full
                    calendar today.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1gpBMe6_-kKxUOnoK_cISSwGq9MvImEDC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="programs-right-btn"
                  >
                    CHECK SCHEDULE →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials-section">
          <div className="sec-wrap">
            <p
              className="sec-eyebrow"
              data-animate
              data-anim="up"
              data-delay="0"
            >
              TESTIMONIALS
            </p>
            <h2
              className="sec-title"
              data-animate
              data-anim="up"
              data-delay="1"
            >
              Client Testimonials
            </h2>
            <p className="sec-desc" data-animate data-anim="up" data-delay="2">
              Hear from professionals who transformed their careers and
              organizations.
            </p>
            <div
              className="sec-divider"
              data-animate
              data-anim="fade"
              data-delay="3"
            />

            <div data-animate data-anim="up" data-delay="3">
              <div className="testimonial-card">
                <span className="testimonial-quote-mark">"</span>
                <p className="testimonial-text">{testimonials[tIndex].text}</p>
                <div className="testimonial-rule" />
                <p className="testimonial-name">{testimonials[tIndex].name}</p>
                <p className="testimonial-role">{testimonials[tIndex].role}</p>
              </div>
              <div className="testimonial-controls">
                <button className="testimonial-arrow" onClick={prev}>
                  ←
                </button>
                <div className="testimonial-dots">
                  {testimonials.map((_, i) => (
                    <div
                      key={i}
                      className={`testimonial-dot${i === tIndex ? " active" : ""}`}
                      onClick={() => setTIndex(i)}
                    />
                  ))}
                </div>
                <button className="testimonial-arrow" onClick={next}>
                  →
                </button>
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}
