"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
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
      } catch { }

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
        {/* Large Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-[#11110f] leading-[1.05] sm:leading-[1.02] mb-10 max-w-5xl"
        >
          I architect low-latency microservices{" "}
          <span className="font-serif italic font-normal text-[#3f3f3a]">
            and build resilient distributed systems.
          </span>
        </motion.h1>

        {/* Two-Column Intro & Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start mb-16 pt-8 border-t border-[#11110f]/10"
        >
          <div className="md:col-span-8">
            <p className="text-lg sm:text-xl text-[#3f3f3a] leading-relaxed">
              I’m <strong className="text-[#11110f] font-bold">{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.bio}
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

        {/* Editorial Metadata Rail (Non-Card Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-10 border-t border-[#11110f]/10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Item 01: Current Role */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#696962] mb-2 flex items-center gap-2">
              <span className="text-[#2f5bff] font-bold">01</span>
              <span className="opacity-40">/</span>
              <span>Current Engagement</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#11110f] tracking-tight">
              Software Developer Intern
            </h3>
            <p className="text-xs sm:text-sm text-[#55554e] font-mono mt-1">
              TruesTech IT Solution Pvt Ltd.
            </p>
          </div>

          {/* Item 02: Location & Live IST Telemetry */}
          <div className="md:col-span-4 md:border-l md:border-[#11110f]/10 md:pl-8 lg:pl-12">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#696962] mb-2 flex items-center gap-2">
              <span className="text-[#2f5bff] font-bold">02</span>
              <span className="opacity-40">/</span>
              <span>Location &amp; Local Time</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#11110f] tracking-tight flex items-center gap-2">
              <span>New Delhi, India</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </h3>
            <p className="text-xs sm:text-sm text-[#55554e] font-mono mt-1">
              IST (UTC+5:30) · <span className="font-semibold text-[#11110f]">{currentTime || "Loading..."}</span>
            </p>
          </div>

          {/* Item 03: Status & Relocation */}
          <div className="md:col-span-4 md:border-l md:border-[#11110f]/10 md:pl-8 lg:pl-12">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#696962] mb-2 flex items-center gap-2">
              <span className="text-[#2f5bff] font-bold">03</span>
              <span className="opacity-40">/</span>
              <span>Availability Status</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#11110f] tracking-tight">
              Open to Backend / SWE Roles
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700 font-mono mt-1 font-medium">
              Immediate Start · Open to Relocation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
