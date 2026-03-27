import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHUVAN B N",
  description: "Full-stack developer specialized in high-performance distributed systems, AI infrastructure, and decentralized protocols.",
  keywords: ["Bhuvan B N", "Full-stack Developer", "AI Engineer", "Web3 Developer", "Systems Architect", "Blockchain", "Distributed Systems"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-[#FAFAFA] font-sans antialiased selection:bg-white/10 selection:text-white">
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
