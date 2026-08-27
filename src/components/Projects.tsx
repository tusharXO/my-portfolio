"use client";

import React from "react";
import { FEATURED_PROJECTS, ProjectItem } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const displayProjects =
    projects && projects.length > 0 ? projects : FEATURED_PROJECTS;

  return (
    <section id="projects" className="py-20 border-b border-[#11110f]/10">
      <div className="page-shell">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[#696962] mb-2">
            Featured Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#11110f]">
            Backend systems &amp; architectures.
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-10">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
