"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const insights = [
  {
    image: "/insight/insight1.jpeg",
    tag: "STRATEGY",
    title: "Three Pillars of Excellence",
    caption:
      "Operational Excellence tidak tercipta secara instan.\nIa dibangun dari harmonisasi tiga pilar utama: People, Process, dan Technology.\n\nPeople adalah penggerak — Kompetensi dan kepemimpinan menentukan arah.\nProcess adalah fondasi — Standar yang jelas mencegah disfungsi operasional.\nTechnology adalah akselerator — Mempercepat kinerja, bukan menggantikan peran manusia.\n\nKetika ketiganya selaras, organisasi mampu mencapai efisiensi operasional yang berkelanjutan dan siap bersaing di era digital.\n\nOne Goal. Three Pillars. Sustainable Operational Efficiency.\n\nBagaimana dengan Perusahaan Anda? Di antara ketiga pilar ini, mana yang paling menantang saat ini?\n\n#OperationsManagement #SupplyChain #BusinessStrategy #LeanManufacturing #DigitalTransformation #Leadership #Insight",
  },
  {
    image: "/insight/insight2.jpeg",
    tag: "OPERATIONS",
    title: "Stop Firefighting, Start Leading",
    caption:
      "Sering 'Memadamkan Api' di kantor?\n\nMasalah datang silih berganti, stok habis tanpa informasi, pengiriman terlambat, hingga satu gangguan pemasok yang langsung menghentikan produksi.\n\nIni bukan sekadar masalah harian — ini sinyal bahwa visibility, ketangguhan, dan kesiapan SDM perlu didiagnosis ulang.\n\nOperasional sehat mampu mengantisipasi, bertahan, dan bertindak tepat di tengah ketidakpastian.\n\nSaatnya beralih dari firefighting mode ke operational excellence berkelanjutan.\n\n#LCCInsight #OperationalConsulting #OperationalExcellence #SupplyChainOptimization #BusinessTransformation #ProcessImprovement #LeanManagement #ConsultingServices",
  },
  {
    image: "/insight/insight3.jpg",
    tag: "LEAN",
    title: "Mengenal 8 Waste: DOWNTIME",
    caption:
      "Sudahkah Anda Mengenal DOWNTIME?\n\nBanyak pemimpin manufaktur berfokus pada adopsi teknologi terbaru untuk meningkatkan profit.\n\nNamun dalam praktiknya, peningkatan kinerja sering kali bukan berasal dari menambah, melainkan dari mengurangi pemborosan.\n\nContinuous Improvement dimulai dari langkah sederhana:\n- Gemba Walk: Lihat langsung masalah di lapangan\n- Keterlibatan Tim: Bangun budaya problem solving\n- Standarisasi: Kunci praktik terbaik sebagai standar kerja\n\nDari 8 waste di atas, mana yang paling sering Anda temui di industri Anda?\n\n#Manufacturing #ContinuousImprovement #LeanManufacturing #OperationsExcellence #Efisiensi #DOWNTIME #Kaizen #IndustrialEngineering",
  },
  {
    image: "/insight/insight4.jpg",
    tag: "VSM",
    title: "Value Stream Mapping",
    caption:
      "Banyak proses terlihat sibuk: meeting penuh, approval panjang, laporan jalan.\nNamun hasilnya tetap sama — lead time lama, inventory menumpuk, customer menunggu.\n\nDi sinilah Value Stream Mapping (VSM) berperan.\n\nVSM memetakan aliran end-to-end dari permintaan customer hingga produk/jasa diterima, mencakup aliran material, informasi, dan waktu.\n\nFakta di lapangan:\n- < 20% aktivitas benar-benar bernilai tambah\n- Sisanya adalah waiting, rework, overprocessing, dan handoff yang tidak perlu.\n\nVSM tidak mencari siapa yang salah, tetapi membuka waste yang tertanam dalam sistem kerja.\n\nVSM adalah cermin untuk melihat realita proses apa adanya.\n\nPelajari cara membongkar waste tersembunyi lewat Workshop Value Stream Mapping. DM kami untuk detail program.\n\n#ValueStreamMapping #LeanManagement #WasteReduction #OperationalExcellence #ContinuousImprovement #SupplyChain",
  },
  {
    image: "/insight/insight5.jpg",
    tag: "SUPPLY CHAIN",
    title: "Missed Planning Crisis",
    caption:
      "Kenapa supply chain sering gagal, padahal forecasting sudah 'cukup akurat'?\n\nJawabannya sering kali bukan pada angka forecast, melainkan pada missed planning.\n\nBeberapa masalah yang sering terjadi:\n- Planning dibuat terlalu statis (bulanan, tidak adaptif)\n- Data historis dipercaya tanpa mempertimbangkan konteks aktual\n- Sistem planning ada, tetapi tidak digunakan dalam keputusan harian\n- Tidak ada kejelasan: deviasi terjadi karena salah rencana atau salah eksekusi\n\nPraktik sederhana namun berdampak:\n- Rolling planning, bukan one-shot plan\n- Planning freeze zone yang jelas\n- Event-based planning (cuaca, promo, regulasi, disruption)\n- Accountability: setiap deviasi harus punya sebab\n\nSupply chain yang tangguh bukan yang paling akurat merencanakan, melainkan yang paling cepat belajar dan beradaptasi.\n\n#SupplyChain #Logistics #Planning #OperationalExcellence #SupplyChainManagement #LogistikIndonesia",
  },
  {
    image: "/insight/insight6.jpg",
    tag: "MRP",
    title: "MRP: Jantung Supply Chain",
    caption:
      "Dalam supply chain modern, MRP bukan hanya alat hitung kebutuhan material.\nIa adalah fondasi stabilitas operasional.\n\nTanpa MRP yang solid, organisasi akan mudah terjebak pada:\n- Stockout & overinventory\n- Produksi tidak sinkron dengan demand\n- Lead time tidak terkendali\n- Biaya operasional yang terus meningkat\n\nSebaliknya, MRP yang efektif mampu menjadi:\n- Decision driver, bukan sekadar reporting tool\n- Penghubung antara demand, produksi, dan procurement\n- Enabler untuk service level yang lebih konsisten\n- Fondasi menuju digital supply chain yang resilien\n\nApakah MRP di perusahaan Anda sudah menjadi strategic decision driver? Atau masih sekadar dashboard monitoring?\n\n#SupplyChain #MRP #OperationsManagement #InventoryManagement #DigitalSupplyChain #OperationalExcellence #LeanCoreConsulting",
  },
  {
    image: "/insight/insight7.png",
    tag: "MRP",
    title: "MRP: Jantung Supply Chain",
    caption:
      "Dalam supply chain modern, MRP bukan hanya alat hitung kebutuhan material.\nIa adalah fondasi stabilitas operasional.\n\nTanpa MRP yang solid, organisasi akan mudah terjebak pada:\n- Stockout & overinventory\n- Produksi tidak sinkron dengan demand\n- Lead time tidak terkendali\n- Biaya operasional yang terus meningkat\n\nSebaliknya, MRP yang efektif mampu menjadi:\n- Decision driver, bukan sekadar reporting tool\n- Penghubung antara demand, produksi, dan procurement\n- Enabler untuk service level yang lebih konsisten\n- Fondasi menuju digital supply chain yang resilien\n\nApakah MRP di perusahaan Anda sudah menjadi strategic decision driver? Atau masih sekadar dashboard monitoring?\n\n#SupplyChain #MRP #OperationsManagement #InventoryManagement #DigitalSupplyChain #OperationalExcellence #LeanCoreConsulting",
  },
  {
    image: "/insight/insight8.png",
    tag: "SRM",
    title: "Supplier Relationship Management: Dari Transaksi ke Strategic Partnership",
    caption:
      "Banyak organisasi masih melihat supplier sebagai cost center.\n\nPadahal, dengan pendekatan SRM yang matang, supplier dapat menjadi:\n- Mitra jangka panjang berbasis kepercayaan\n- Pihak yang berbagi risiko & insentif secara selaras\n- Co-creator dalam inovasi dan peningkatan kinerja\n\nManfaat nyata dari SRM yang terstruktur:\n✔ Risiko pasokan menurun\n✔ Konflik kontraktual berkurang\n✔ Peningkatan inovasi & improvement\n✔ Respons pasar lebih cepat\n\nPertanyaannya: apakah hubungan supplier Anda masih transaksional, atau sudah strategis?\n\n#SupplierRelationshipManagement #SupplyChainStrategy #ProcurementExcellence #BusinessTransformation #LeanManagement #Leadership",
  },
  {
    image: "/insight/insight9.jpg",
    tag: "TPM",
    title: "Mengapa Banyak Implementasi TPM Gagal di Perusahaan Manufaktur?",
    caption:
      "Banyak perusahaan mengadopsi Total Productive Maintenance (TPM) dengan tujuan meningkatkan produktivitas, mengurangi downtime, dan mencapai zero breakdown.\n\nNamun dalam praktiknya, tidak sedikit implementasi TPM yang berhenti di tengah jalan — atau sekadar menjadi slogan di dinding pabrik.\n\nBeberapa penyebab yang sering terjadi:\n\n• TPM dianggap hanya program maintenance\nPadahal TPM melibatkan seluruh organisasi, terutama operator melalui autonomous maintenance.\n\n• Kurangnya komitmen manajemen\nTPM bukan sekadar program teknis, tetapi perubahan budaya kerja.\n\n• Fokus pada tools, bukan mindset\nChecklist dan form ada, tetapi budaya ownership terhadap mesin belum terbentuk.\n\n• Target terlalu ambisius tanpa fondasi\nBanyak perusahaan ingin langsung mencapai OEE kelas dunia tanpa stabilisasi proses terlebih dahulu.\n\n• Tidak terintegrasi dengan sistem operasional lain\nTPM seharusnya berjalan bersama Lean Manufacturing, Quality Management, dan Continuous Improvement.\n\nPada akhirnya, TPM gagal bukan karena konsepnya salah — tetapi karena implementasinya tidak menyentuh akar budaya organisasi.\n\nJika dijalankan dengan disiplin dan keterlibatan seluruh level organisasi, TPM tetap menjadi salah satu pendekatan paling kuat untuk meningkatkan reliability dan operational excellence.\n\nPertanyaannya: Apakah TPM di perusahaan Anda sudah menjadi budaya, atau masih sekadar program?\n\n#Manufacturing #TPM #OperationalExcellence #LeanManufacturing #ContinuousImprovement",
  },
  {
    image: "/insight/insight10.png",
    tag: "Inventory",
    title: "Stok Optimal Bukan yang Terbanyak — Tapi yang Paling Tepat",
    caption:
      "Banyak perusahaan masih melihat stok bahan baku hanya sebagai persediaan yang harus selalu tersedia di gudang.\n\nPadahal dalam praktik operasi modern, inventory adalah instrumen strategis yang memengaruhi efisiensi biaya sekaligus kelancaran produksi.\n\nDalam praktiknya, perusahaan sering terjebak pada dua kondisi ekstrem.\n\nOverstock menyebabkan biaya penyimpanan meningkat, cash flow tertekan, dan risiko barang menjadi obsolete. Sebaliknya, understock dapat mengganggu produksi, memperpanjang lead time, bahkan menyebabkan kehilangan peluang pasar.\n\nKarena itu, pengelolaan stok tidak cukup hanya dengan menambah atau mengurangi persediaan. Yang lebih penting adalah mengoptimalkan stok melalui:\n- Perencanaan berbasis data permintaan\n- Perhitungan safety stock yang tepat\n- Kolaborasi yang baik dengan pemasok\n\nPada akhirnya, tujuan utama manajemen inventory adalah menemukan keseimbangan antara efisiensi biaya dan kontinuitas operasi.\n\nDalam supply chain modern, stok yang optimal bukan yang paling banyak — tetapi yang paling tepat.\n\n#SupplyChainManagement #InventoryManagement #OperationsManagement #SupplyChain #Manufacturing",
  },
];

export default function Insights() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #004276;
          --navy-dark: #002d52;
          --navy-light: #005a9e;
          --yellow: #FACC15;
          --yellow-light: #FEF08A;
          --yellow-dark: #CA8A04;
          --white: #FFFFFF;
          --off-white: #F8FAFC;
          --gray-100: #F1F5F9;
          --gray-200: #E2E8F0;
          --gray-500: #64748B;
          --gray-700: #334155;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .insights-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--off-white);
          color: var(--gray-700);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          background-color: var(--navy);
          background-image: url('/insight.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          padding: 120px 48px 100px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-overlay {
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

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .hero-accent {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }

        .hero-accent-2 {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%);
          bottom: -100px;
          left: -50px;
          pointer-events: none;
        }

        .hero-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--yellow);
          margin-bottom: 28px;
        }

        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--yellow);
          opacity: 0.6;
        }

        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 800;
          color: var(--white);
          line-height: 1.05;
          letter-spacing: -0.02em;
          position: relative;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: var(--yellow);
        }

        .hero-subtitle {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          max-width: 520px;
          line-height: 1.7;
          position: relative;
          margin-bottom: 48px;
        }

        .hero-scroll {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .hero-scroll-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.35);
        }

        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(250,204,21,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        .hero-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, var(--off-white));
        }

        /* ── SECTION HEADER ── */
        .section-header {
          padding: 80px 48px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: var(--navy-light);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: var(--yellow);
        }

        .section-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .section-desc {
          font-size: 15px;
          font-weight: 300;
          color: var(--gray-500);
          max-width: 440px;
          line-height: 1.65;
        }

        .section-rule {
          margin-top: 40px;
          height: 1px;
          background: linear-gradient(to right, var(--yellow), var(--gray-200), transparent);
        }

        /* ── GRID ── */
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
          padding: 48px 48px 80px;
          max-width: 1200px;
          margin: 0 auto;
          /* align-items: start so cards don't stretch to match tallest */
          align-items: start;
        }

        /* ── CARD ── */
        /*
          Key fix: remove fixed height on card-wrapper.
          Use a flip container that adapts to content height.
          We achieve the flip effect by keeping both faces in the DOM
          but using visibility + rotateY. The front face is the natural
          height driver; the back mirrors that with min-height.
        */
        .card-wrapper {
          position: relative;
          cursor: pointer;
          /* perspective for 3D flip */
          perspective: 1200px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 4px;
          overflow: hidden;
        }

        /* FRONT — natural height, in flow */
        .card-front {
          position: relative; /* in normal flow → sets card height */
          background: var(--white);
          border: 1px solid var(--gray-200);
          box-shadow: 0 4px 24px rgba(0,66,118,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .card-wrapper:not(.flipped):hover .card-front {
          box-shadow: 0 12px 40px rgba(0,66,118,0.15);
          transform: translateY(-4px);
        }

        /* Image: use aspect-ratio so full image shows, no cropping */
        .card-image-wrap {
          position: relative;
          width: 100%;
          /* Portrait infographic images — use 4:5 ratio to show most content */
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--gray-100);
          flex-shrink: 0;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .card-wrapper:not(.flipped):hover .card-image-wrap img {
          transform: scale(1.03);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(0,42,78,0.55) 100%);
        }

        .card-num {
          position: absolute;
          top: 16px;
          left: 16px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
        }

        .card-tag-front {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--yellow);
          color: var(--navy);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .card-front-content {
          padding: 24px 24px 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-top: 3px solid var(--yellow);
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.35;
        }

        .card-read-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--navy);
          border: 1.5px solid var(--navy);
          padding: 8px 16px;
          border-radius: 2px;
          width: fit-content;
          transition: background 0.2s, color 0.2s;
        }

        .card-wrapper:not(.flipped):hover .card-read-cta {
          background: var(--navy);
          color: var(--yellow);
        }

        .card-read-arrow {
          transition: transform 0.2s;
        }

        .card-wrapper:not(.flipped):hover .card-read-arrow {
          transform: translateX(4px);
        }

        /* BACK — absolutely positioned, same size as front */
        .card-back {
          position: absolute;
          inset: 0;
          background: var(--navy);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          overflow: hidden;
        }

        .card-back-header {
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .card-back-tag {
          background: var(--yellow);
          color: var(--navy);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .card-close {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          width: 30px;
          height: 30px;
          border-radius: 2px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }

        .card-close:hover {
          background: var(--yellow);
          color: var(--navy);
          border-color: var(--yellow);
        }

        .card-back-body {
          padding: 20px 24px 24px;
          overflow-y: auto;
          flex: 1;
          scrollbar-width: thin;
          scrollbar-color: rgba(250,204,21,0.3) transparent;
        }

        .card-back-body::-webkit-scrollbar { width: 3px; }
        .card-back-body::-webkit-scrollbar-track { background: transparent; }
        .card-back-body::-webkit-scrollbar-thumb { background: rgba(250,204,21,0.4); border-radius: 2px; }

        .card-back-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 14px;
          line-height: 1.35;
        }

        .card-back-caption {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.72);
          white-space: pre-wrap;
          line-height: 1.75;
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

        .wa-float-label { display: none; }
        @media (min-width: 768px) { .wa-float-label { display: inline; } }

        @media (max-width: 768px) {
          .hero { padding: 80px 24px 80px; }
          .section-header { padding: 56px 24px 36px; }
          .insights-grid { grid-template-columns: 1fr; padding: 36px 24px 56px; gap: 20px; }
        }
      `}</style>

      <div className="insights-page">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="hero-accent" />
          <div className="hero-accent-2" />

          <p className="hero-eyebrow">LCC KNOWLEDGE HUB</p>

          <h1 className="hero-title">
            Business
            <span> Insights</span>
          </h1>

          <p className="hero-subtitle">
            Strategic intelligence and operational frameworks curated for
            executive decision-makers navigating complex business landscapes.
          </p>

          <div className="hero-scroll">
            <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
            <div className="hero-scroll-line" />
          </div>

          <div className="hero-bottom-fade" />
        </section>

        {/* ── SECTION HEADER ── */}
        <div className="section-header">
          <p className="section-eyebrow">FEATURED ARTICLES</p>
          <h2 className="section-title">Latest Perspectives</h2>
          <p className="section-desc">
            Click the card to read the full insight from our operational
            practitioners.
          </p>
          <div className="section-rule" />
        </div>

        {/* ── GRID ── */}
        <div className="insights-grid">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`card-wrapper${flipped === index ? " flipped" : ""}`}
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div className="card-inner">
                {/* FRONT — natural height, drives card size */}
                <div className="card-face card-front">
                  <div className="card-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="card-image-overlay" />
                    <span className="card-num">0{index + 1}</span>
                    <span className="card-tag-front">{item.tag}</span>
                  </div>
                  <div className="card-front-content">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-read-cta">
                      READ INSIGHT
                      <span className="card-read-arrow">→</span>
                    </div>
                  </div>
                </div>

                {/* BACK — absolutely fills the same space as front */}
                <div className="card-face card-back">
                  <div className="card-back-header">
                    <span className="card-back-tag">{item.tag}</span>
                    <button
                      className="card-close"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlipped(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <div className="card-back-body">
                    <h3 className="card-back-title">{item.title}</h3>
                    <p className="card-back-caption">{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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