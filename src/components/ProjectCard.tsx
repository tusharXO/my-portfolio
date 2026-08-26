"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/icons";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-white border border-[#11110f]/12 p-8 sm:p-10 shadow-sm hover:border-[#11110f]/25 transition-all"
    >
      <div className="flex flex-col justify-between h-full">
        <div>

          {/* Title & Tagline */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#11110f] tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-[#2f5bff] font-mono mb-4">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#55554e] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Contributions List */}
          <div className="space-y-2.5 mb-6 pt-4 border-t border-[#11110f]/8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#696962] mb-3">
              Key Technical Implementation
            </h4>
            {project.detailedPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3f3f3a] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#2f5bff] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[#11110f]/8 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#f4f3ef] text-[#3f3f3a] border border-[#11110f]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11110f] text-white font-semibold text-xs hover:bg-[#2f5bff] transition-all active:scale-95 shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
