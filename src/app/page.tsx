import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f3ef] text-[#11110f] selection:bg-[#2f5bff] selection:text-white">
      {/* 1. Sticky Editorial Navbar with Scroll Progress Bar */}
      <Navbar />

      {/* 2. Hero Section with Headline & Live Location Clock */}
      <Hero />

      {/* 3. Professional Experience & Academic Credentials Timeline */}
      <Experience />

      {/* 4. Featured Projects & Architecture Blueprint (NEXUS RTC) */}
      <Projects />

      {/* 5. Capabilities & Categorized Skills */}
      <Skills />

      {/* 6. Connect & Contact Footer */}
      <ContactSection />
    </main>
  );
}
