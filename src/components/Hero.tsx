"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  ArrowDown,
  Clock,
  MapPin,
  Sparkles,
  Layers,
  Cpu,
  Radio,
  CreditCard,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "@/components/Toast";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { showToast } = useToast();

  // Dynamic live IST clock (New Delhi)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setCurrentTime(timeString);
      } catch {
        setCurrentTime("IST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      showToast("Email copied to clipboard!", PERSONAL_INFO.email, "success");

      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
          colors: ["#2f5bff", "#11110f", "#d9ff57"],
        });
      } catch {}

      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast(
        "Unable to copy",
        "Please manually copy: " + PERSONAL_INFO.email,
        "error"
      );
    }
  };

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("experience");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-16 sm:pb-24 border-b border-[#11110f]/10">
      <div className="page-shell">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-mono tracking-wide text-[#696962] uppercase mb-6 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#2f5bff]" />
          Full-Stack & Systems Developer · Real-Time Architecture
        </motion.p>

        {/* Large Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#11110f] leading-[1.05] sm:leading-[1.02] mb-10 max-w-5xl"
        >
          I architect scalable backend pipelines{" "}
          <span className="font-serif italic font-normal text-[#3f3f3a]">
            and build resilient real-time systems.
          </span>
        </motion.h1>

        {/* Two-Column Intro & Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start mb-16 pt-8 border-t border-[#11110f]/10"
        >
          <div className="md:col-span-8">
            <p className="text-lg sm:text-xl text-[#3f3f3a] leading-relaxed">
              I’m <strong className="text-[#11110f] font-bold">{PERSONAL_INFO.name}</strong>. I specialize in high-throughput transaction engines, sub-millisecond distributed protocols (WebSockets & WebRTC), and modern data workflows across JavaScript, React, Node.js, SQL, and AWS infrastructure.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
            <a
              href="#experience"
              onClick={scrollToExperience}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#11110f] hover:text-[#2f5bff] transition-colors"
            >
              <span>Review my experience</span>
              <span className="text-base group-hover:translate-y-0.5 transition-transform">
                ↓
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full border border-[#11110f]/20 hover:border-[#11110f] bg-white text-[#11110f] transition-all active:scale-95 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#696962]" />
                  <span>Copy email ({PERSONAL_INFO.email})</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Live Status Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 sm:p-8 rounded-2xl bg-white border border-[#11110f]/12 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6 items-center"
        >
          {/* Status 1: Current Employment */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#2f5bff]/10 text-[#2f5bff] shrink-0 mt-0.5">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#696962] block mb-0.5">
                Current Role
              </span>
              <h3 className="text-sm font-bold text-[#11110f] leading-snug">
                Software Developer Intern
              </h3>
              <p className="text-xs text-[#55554e] font-medium">
                TruesTech IT Solution Pvt Ltd.
              </p>
            </div>
          </div>

          {/* Status 2: Real-time Location & Clock */}
          <div className="flex items-start gap-3.5 sm:border-l sm:border-[#11110f]/10 sm:pl-6">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#696962] block mb-0.5">
                Location & Time
              </span>
              <h3 className="text-sm font-bold text-[#11110f] leading-snug flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#696962]" />
                New Delhi, India
              </h3>
              <p className="text-xs text-[#55554e] font-mono">
                IST: <span className="font-semibold text-[#11110f]">{currentTime || "Loading..."}</span>
              </p>
            </div>
          </div>

          {/* Status 3: Availability */}
          <div className="flex items-start gap-3.5 sm:border-l sm:border-[#11110f]/10 sm:pl-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#696962] block mb-0.5">
                Status & Relocation
              </span>
              <h3 className="text-sm font-bold text-[#11110f] leading-snug">
                Open to SWE Roles
              </h3>
              <p className="text-xs text-emerald-600 font-medium">
                Open to Relocation & Immediate Hire
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
