import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import { getPortfolioProjects } from "@/lib/projects-db";
import { Analytics } from '@vercel/analytics/next';

export default async function Home() {
  // Fast 10ms query to MongoDB
  const projects = await getPortfolioProjects();

  return (
    <main className="relative min-h-screen bg-[#f4f3ef] text-[#11110f] selection:bg-[#2f5bff] selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Projects projects={projects} />
      <Skills />
      <ContactSection />
      <Analytics />
    </main>
  );
}
