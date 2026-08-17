"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Capabilities", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollHeight > 0) {
        setScrollProgress(currentScrollY / totalScrollHeight);
      }

      setScrolled(currentScrollY > 20);

      // Auto-hide on downward scroll (>100px), show on upward scroll
      if (currentScrollY > 120 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Top 2px Blue Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#2f5bff] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* 2. Fixed Site Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 bg-[#f4f3ef]/90 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-b border-[#11110f]/10 shadow-sm" : "border-b border-transparent",
          headerVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="page-shell h-20 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center text-2xl font-black tracking-tighter text-[#11110f] focus:outline-none"
            aria-label="Tushar Kumar, home"
          >
            <span>TK</span>
            <span className="text-[#2f5bff] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-125">
              .
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#55554e]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-[#11110f] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Resume Download Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Tushar_Kumar_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#11110f]/20 hover:border-[#11110f] text-[#11110f] hover:bg-[#11110f]/5 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Let's talk CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#11110f] text-[#f4f3ef] hover:bg-[#2f5bff] hover:text-white transition-all shadow-sm active:scale-95"
            >
              <span>Let&apos;s talk</span>
              <span className="text-xs">↗</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#11110f] hover:bg-[#11110f]/5 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[#11110f]/10 bg-[#f4f3ef] px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col gap-4 mb-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-[#11110f] hover:text-[#2f5bff] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#8f8f89]">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#11110f]/10 flex flex-col gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Tushar_Kumar_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold border border-[#11110f] text-[#11110f] hover:bg-[#11110f]/5 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="text-xs text-[#696962] font-mono mt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-[#11110f] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="mt-0.5">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
