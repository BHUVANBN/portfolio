"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Shield, Cpu, Box, Code, MapPin, ExternalLink, GraduationCap, Trophy, Monitor, Terminal } from "lucide-react";
import Image from "next/image";
import { Github as GithubIcon, Linkedin as LinkedinIcon, Twitter as TwitterIcon } from "./Icons";

const socialLinks = [
  { name: "Twitter", href: "https://x.com/bhuvanbn01", icon: <TwitterIcon className="w-5 h-5" /> },
  { name: "GitHub", href: "https://github.com/BHUVANBN", icon: <GithubIcon className="w-5 h-5" /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/bhuvanbn", icon: <LinkedinIcon className="w-5 h-5" /> },
  { name: "Email", href: "mailto:bhuvanbn01@gmail.com?subject=Collaboration&body=Let's%20build%20something%20ambitious", icon: <Mail className="w-5 h-5" /> },
];

const mainProjects = [
  {
    title: "AgriLink: Blockchain Powered Farmland Integration System",
    tag: "Blockchain / Smart Contracts",
    desc: "A decentralized ecosystem for land mapping and automated escrow, ensuring transparency in agricultural transactions.",
    href: "https://github.com/BHUVANBN/AgriLink",
    icon: <Shield className="w-4 h-4" />,
    images: [
      "/projects/Screenshot From 2026-03-27 04-11-27.png",
      "/projects/Screenshot From 2026-03-27 04-11-45.png",
      "/projects/Screenshot From 2026-03-27 04-15-11.png"
    ]
  },
  {
    title: "TestForge: Distributed Test Execution Engine",
    tag: "Systems / Rust",
    desc: "Engineered for high-concurrency verification of distributed workloads, focusing on throughput and system stability.",
    href: "https://github.com/BHUVANBN/TestForge",
    icon: <Box className="w-4 h-4" />,
    imagePosition: "left",
    images: [
      "/projects/Screenshot From 2026-03-27 05-10-19.png",
      "/projects/Screenshot From 2026-03-27 05-10-53.png",
      "/projects/Screenshot From 2026-03-27 05-11-14.png"
    ]
  },
  {
    title: "Parkinson's Severity Detection using EMG & AI",
    tag: "Healthcare / Machine Learning",
    desc: "Peer-reviewed research implementation for real-time Parkinson's classification via optimized neural architectures.",
    href: "https://github.com/BHUVANBN/Parkinsons-Detection",
    icon: <Cpu className="w-4 h-4" />,
    images: [
      "/projects/1761667732698.jpeg",
      "/projects/1761667732785.jpeg",
      "/projects/1761667732883.jpeg"
    ]
  },
  {
    title: "FileMon: Real-time File Monitoring & Recovery System",
    tag: "Systems / C",
    desc: "A production-grade Linux CLI tool for real-time file monitoring and automated recovery, leveraging the kernel inotify API and multi-threading.",
    href: "https://github.com/BHUVANBN/FileMon",
    icon: <Monitor className="w-4 h-4" />
  },
  {
    title: "k8s-wizard: Interactive Kubernetes YAML Generator",
    tag: "DevOps / TypeScript",
    desc: "A developer-focused CLI that generates schema-accurate Kubernetes manifests through an interactive, prompt-driven flow guided by OpenAPI specs.",
    href: "https://github.com/BHUVANBN/k8s-wizard",
    icon: <Terminal className="w-4 h-4" />
  },
  {
    title: "Mini-LLM: Local RAG Knowledge Base AI / Retrieval-Augmented Generation",
    tag: "AI / Retrieval-Augmented Generation",
    desc: "Fully offline AI pipeline utilizing ChromaDB, Ollama, and LangChain for private enterprise document intelligence and secure knowledge management.",
    href: "https://github.com/BHUVANBN/MiniLLM",
    icon: <Code className="w-4 h-4" />,
    imagePosition: "left",
    images: [
      "/projects/1759323900572.jpeg",
      "/projects/1759323900855.jpeg"
    ]
  }
];

export default function BentoProfile() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 font-sans flex flex-col lg:flex-row gap-8 relative">

      {/* 
         On Desktop: This sidebar is Fixed to the screen. 
         On Mobile: Standard vertical card.
      */}
      <aside className="w-full lg:w-[380px] lg:flex-shrink-0">
        <div className="lg:fixed lg:top-32 lg:w-[380px] space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bento-card flex flex-col items-center text-center overflow-hidden"
          >
            <div className="w-full relative border-b border-white/5 bg-[#0a0a0a]">
              <img
                src="/Gemini_Generated_Image_3npki23npki23npk.png"
                alt="Bhuvan B N"
                className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 w-full">
              <h1 className="text-4xl font-extrabold tracking-tighter mb-4 text-gradient">Bhuvan B N</h1>
              <p className="text-white/40 text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3" /> Mysuru, India
              </p>
              <p className="text-sm font-medium text-white/60 leading-relaxed mb-8">
                I build software with AI and explore new technologies driven by curiosity and fascination
              </p>

              <div className="grid grid-cols-4 gap-3 w-full">
                {socialLinks.map(s => {
                  const isEmail = s.name === "Email";
                  const handleContact = (e: React.MouseEvent) => {
                    if (isEmail) {
                      e.preventDefault();
                      const mailto = "mailto:bhuvanbn01@gmail.com?subject=Collaboration&body=Let's%20build%20something%20ambitious";
                      const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=bhuvanbn01@gmail.com&su=Collaboration&body=Let's%20build%20something%20ambitious";
                      window.location.href = mailto;
                      setTimeout(() => { window.open(gmail, "_blank"); }, 1000);
                    }
                  };

                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      onClick={isEmail ? handleContact : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center text-white/50 hover:text-white"
                    >
                      {s.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </aside>

      {/* Main Content (Offset on Desktop) */}
      <main className="flex-1 space-y-6">

        {/* Expertise Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bento-card p-12 bg-gradient-to-br from-white/[0.03] to-transparent items-center justify-center flex flex-col text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 uppercase">Software <br /> <span className="text-white/40">Engineer</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["C / C++", "Python", "JavaScript", "Rust", "React", "PostgreSQL", "Linux", "AI/ML", "AWS", "DevOps", "Blockchain", "CI/CD", "Website Design"].map(skill => (
              <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bento-card p-12 bg-white/[0.02]"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-12">Professional Experience</h2>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between gap-6 group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-extrabold text-2xl tracking-tight text-white">Skillonx Edtech Pvt Ltd</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none">Web Developer Intern</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Architected a multi-tenant project management platform. Designed secured REST APIs with RBAC and optimized MongoDB pipelines, achieving a ~30% reduction in dashboard latency.
                </p>
              </div>
              <div className="text-white/20 font-mono text-xs font-bold uppercase tracking-widest pt-2 shrink-0">
                Oct 2025 — Jan 2026
              </div>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-6 group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-extrabold text-2xl tracking-tight text-white">Swifty9</h3>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest leading-none">Technical Lead Intern</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Led development of a production Next.js platform. Developed an admin panel for zero-deployment content updates and built fault-tolerant data pipelines with custom validation middleware.
                </p>
              </div>
              <div className="text-white/20 font-mono text-xs font-bold uppercase tracking-widest pt-2 shrink-0">
                Aug 2025 — Feb 2026
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section Header */}
        <div className="pt-12 px-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-6 uppercase">Projects</h2>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainProjects.map((p, index) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bento-card group p-6 flex flex-col justify-between min-h-[280px] relative overflow-hidden"
            >
              {/* Conditional Background Images Stack */}
              {p.images && (
                <div className={`absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${p.imagePosition === 'left' ? 'left-0' : 'right-0'}`}>
                  {p.images[0] && (
                    <div className={`absolute top-[10%] w-[180px] h-[120px] rounded-lg border border-white/5 shadow-2xl overflow-hidden z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ${p.imagePosition === 'left' ? '-left-12 rotate-[-12deg]' : '-right-12 rotate-[12deg]'}`}>
                      <Image src={p.images[0]} alt="" fill className="object-cover" />
                    </div>
                  )}
                  {p.images[1] && (
                    <div className={`absolute bottom-[-10%] w-[200px] h-[140px] rounded-lg border border-white/5 shadow-2xl overflow-hidden z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-75 ${p.imagePosition === 'left' ? '-left-8 rotate-[8deg]' : '-right-8 rotate-[-8deg]'}`}>
                      <Image src={p.images[1]} alt="" fill className="object-cover" />
                    </div>
                  )}
                  {p.images[2] && (
                    <div className={`absolute top-[40%] w-[220px] h-[160px] rounded-lg border border-white/5 shadow-2xl overflow-hidden z-0 opacity-50 transition-transform duration-700 delay-150 ${p.imagePosition === 'left' ? 'left-[-100px] rotate-[-25deg] group-hover:translate-x-[20px]' : 'right-[-100px] rotate-[25deg] group-hover:translate-x-[-20px]'}`}>
                      <Image src={p.images[2]} alt="" fill className="object-cover" />
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between items-start mb-12 relative z-20">
                <div className="p-4 rounded-2xl bg-white/5 text-white/40 group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-extrabold text-2xl tracking-tight">{p.title}</h3>
                </div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-bold">{p.tag}</p>
                <p className="text-sm text-white/60 leading-relaxed font-medium">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements & Validation List Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bento-card p-12"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-12">Validation & Achievements</h2>
          <div className="space-y-6">
            {[
              { title: "Research Publication - IJRAR", desc: "Author of 'Smart Agricultural Land Integration System Using Blockchain'. Proposed Ethereum + IPFS decentralized land management (Peer-Reviewed)." },
              { title: "Special Prize - HACK FUSION 1.0", desc: "24-hr Gen-AI Hackathon. Built Local LLM: a fully offline, privacy-first AI assistant via quantized models." },
              { title: "1st Runner-Up - HAXLR8", desc: "24-hr Hackathon. Shipped a Gen-AI + API farmer supply-chain solution, competing with 60+ teams." },
              { title: "1st Place - Web Designing Competition 2K25", desc: "BGSIT (Adichunchanagiri University). Innovative Tourism App for Mysuru using Next.js." },
              { title: "Certified Chief Information Officer (CCIO)", desc: "ISAC India | NPTEL: Cyber Security & Privacy - Elite Certificate." },
              { title: "Qualified GATE 2026", desc: "Data Science & AI focus. Advanced mathematical and algorithmic foundations." },
              { title: "Academic Excellence", desc: "9.14 CGPA in Information Science & Engineering — Class of 2026." },
            ].map(item => (
              <div key={item.title} className="group border-l border-white/5 pl-8 hover:border-white/20 transition-all">
                <h3 className="font-normal text-xl mb-1 tracking-tight text-white/90">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bento-card p-8 bg-white/5 border-white/10 group cursor-pointer hover:bg-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4">Ready to build.</h2>
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest font-bold">Currently exploring systems-level challenges.</p>
          </div>
          <button
            onClick={() => {
              const mailto = "mailto:bhuvanbn01@gmail.com?subject=Collaboration%20Inquiry&body=Let's%20build%20something%20ambitious";
              const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=bhuvanbn01@gmail.com&su=Collaboration%20Inquiry&body=Let's%20build%20something%20ambitious";

              window.location.href = mailto;

              setTimeout(() => {
                window.open(gmail, "_blank");
              }, 1000);
            }}
            className="px-10 py-4 bg-white text-black font-extrabold rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-all outline-none"
          >
            Contact Me
          </button>
        </motion.div>

      </main>
    </div>
  );
}
