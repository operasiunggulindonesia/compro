import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeanCore Consulting",
  description: "Transforming operations and elevating performance.",
  icons: {
    icon: [
      { url: "/lcc1.png", sizes: "70x70", type: "image/png" },
      // { url: "/lcc1.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/lcc1.png",
    apple: "/lcc1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="pt-14 flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
