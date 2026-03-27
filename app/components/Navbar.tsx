"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="max-w-7xl w-full px-6 flex gap-8">
        {/* Spacer for the sidebar column */}
        <div className="hidden lg:block lg:w-[380px] lg:flex-shrink-0" />
        
        {/* Navbar Content - Matches bento-card styling and width */}
        <div className="flex-1 flex items-center gap-10 px-8 py-3 rounded-[32px] bg-[#0c0c0c]/80 backdrop-blur-2xl border border-[#1a1a1a] pointer-events-auto shadow-2xl">
          <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity select-none group">
            BBN<span className="text-blue-500 group-hover:animate-pulse">.</span>
          </Link>
          
          <div className="flex items-center gap-6 text-[11px] uppercase font-bold tracking-[0.25em] text-white/30">
            <Link href="https://github.com/BHUVANBN" target="_blank" className="hover:text-white transition-colors">Forge</Link>
            <Link href="https://linkedin.com/in/bhuvanbn" target="_blank" className="hover:text-white transition-colors">Career</Link>
            <button
              onClick={() => {
                const mailto = "mailto:bhuvanbn01@gmail.com?subject=Collaboration&body=Let's%20build%20something%20ambitious";
                const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=bhuvanbn01@gmail.com&su=Collaboration&body=Let's%20build%20something%20ambitious";
                
                window.location.href = mailto;
                
                setTimeout(() => {
                  window.open(gmail, "_blank");
                }, 1000);
              }}
              className="hover:text-white transition-colors uppercase outline-none"
            >
              Talk
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
