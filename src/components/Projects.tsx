"use client";

import React from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS, ProjectItem } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const displayProjects =
    projects && projects.length > 0 ? projects : FEATURED_PROJECTS;

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#11110f]/10">
      <div className="page-shell">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#696962] font-semibold">
              Featured Engineering
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-[#11110f] leading-[1.02] max-w-3xl">
            Backend systems
            <span className="font-serif italic font-normal text-[#2f5bff]">
              {" "}
              &amp;{" "}
            </span>
            architectures.
          </h2>

          <p className="text-sm md:text-base text-[#696962] max-w-xl mt-2">
            A selection of production-grade systems I&apos;ve designed and
            shipped — focused on distributed backends, real-time
            infrastructure, and clean transactional guarantees.
          </p>
        </motion.div>

        {/* Project List */}
        <div>
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
