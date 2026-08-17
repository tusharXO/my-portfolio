"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  ArrowUp,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "@/components/Toast";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { showToast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setEmailCopied(true);
      showToast("Email copied to clipboard!", PERSONAL_INFO.email, "success");

      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#d9ff57", "#2f5bff", "#ffffff"],
        });
      } catch { }

      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      showToast(
        "Unable to copy",
        "Please manually copy: " + PERSONAL_INFO.email,
        "error"
      );
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setPhoneCopied(true);
      showToast("Phone number copied!", PERSONAL_INFO.phone, "success");
      setTimeout(() => setPhoneCopied(false), 2500);
    } catch {
      showToast(
        "Unable to copy",
        "Please manually copy: " + PERSONAL_INFO.phone,
        "error"
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Project%20Enquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    showToast("Opening email client...", "Ready to send message", "info");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const primaryLinks = [
    {
      title: "Direct Email",
      sublabel: "Start a conversation",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
    },
    {
      title: "LinkedIn",
      sublabel: "Professional network",
      value: "linkedin.com/in/tusharkumarx",
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
    },
    {
      title: "GitHub",
      sublabel: "Code & repositories",
      value: "github.com/tusharXO",
      href: PERSONAL_INFO.github,
      icon: Github,
    },
    {
      title: "Phone / WhatsApp",
      sublabel: "Direct contact",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
  ];

  return (
    <footer id="contact" className="section-dark pt-24 pb-12">
      <div className="page-shell">
        {/* Contact Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#d9ff57] mb-3">
            Hiring or planning a build?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Let’s talk about what you’re{" "}
            <span className="font-serif italic font-normal text-[#d9ff57]">
              building next.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#bcbcb5] mt-4 leading-relaxed">
            I am available for full-time software engineering opportunities, contract builds, and distributed system collaborations.
          </p>
        </div>

        {/* 1-Click Copy Values Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 p-8 rounded-2xl bg-white/4 border border-white/10">
          <div>
            <span className="text-xs font-mono text-[#8f8f89] uppercase tracking-wider block mb-2">
              Email Address
            </span>
            <div className="flex items-center justify-between gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-[#d9ff57] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all active:scale-95 shrink-0"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#d9ff57]" />
                    <span className="text-[#d9ff57]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-6">
            <span className="text-xs font-mono text-[#8f8f89] uppercase tracking-wider block mb-2">
              Phone / WhatsApp
            </span>
            <div className="flex items-center justify-between gap-4">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-[#d9ff57] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all active:scale-95 shrink-0"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#d9ff57]" />
                    <span className="text-[#d9ff57]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column: Social Links & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Primary Channels Grid */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#8f8f89] mb-4">
                Connect Across The Internet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primaryLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="p-5 rounded-xl bg-white/4 border border-white/8 hover:border-[#d9ff57]/50 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-4 h-4 text-[#d9ff57]" />
                        <ArrowUpRight className="w-4 h-4 text-[#8f8f89] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">
                          {item.title}
                        </strong>
                        <small className="text-xs text-[#8f8f89]">
                          {item.sublabel}
                        </small>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-white/3 border border-white/8 text-xs text-[#8f8f89] font-mono leading-relaxed">
              <span className="text-[#d9ff57] font-semibold">Open to Relocation</span>: Available for on-site, hybrid, and remote engineering positions worldwide.
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-white/4 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#d9ff57]" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs text-[#8f8f89] mb-6">
              Submitting opens a pre-composed message in your default email client.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#bcbcb5] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#55554e] text-sm focus:outline-none focus:border-[#d9ff57] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#bcbcb5] mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#55554e] text-sm focus:outline-none focus:border-[#d9ff57] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#bcbcb5] mb-1.5">
                  Message / Project Note
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about the engineering role or architecture project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#55554e] text-sm focus:outline-none focus:border-[#d9ff57] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#d9ff57] text-[#11110f] font-bold text-sm hover:bg-[#e4ff85] transition-colors flex items-center justify-center gap-2 active:scale-98 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Start Conversation</span>
              </button>
            </form>
          </div>
        </div>

        {/* Site Footer Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8f8f89]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base tracking-tighter">
              TK<span className="text-[#d9ff57]">.</span>
            </span>
            <span>© {new Date().getFullYear()} Tushar Kumar. Designed and built with intent.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-[#d9ff57] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
