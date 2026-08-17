"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Workflow,
  Radio,
} from "lucide-react";
import { Github } from "@/components/icons";
import { ProjectItem } from "@/data/portfolioData";
import ArchitectureModal from "@/components/ArchitectureModal";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-white border border-[#11110f]/12 p-8 sm:p-10 shadow-sm hover:border-[#11110f]/30 hover:shadow-md transition-all"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Header Category & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#f4f3ef] border border-[#11110f]/10 text-[#11110f]">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2f5bff]/8 text-[#2f5bff] font-semibold flex items-center gap-1.5">
                  <Radio className="w-3 h-3 animate-pulse" />
                  Live WebSockets Signaling
                </span>
              </div>

              <div className="text-xs font-mono text-[#696962] hidden sm:block">
                Flagship Project
              </div>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#11110f] tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-base font-semibold text-[#2f5bff] font-mono mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-base text-[#55554e] leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Metrics Mini-Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#f4f3ef] border border-[#11110f]/8 font-mono"
                >
                  <div className="text-xs text-[#696962]">{m.label}</div>
                  <div className="text-base font-bold text-[#11110f] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Deep Implementation Points */}
            <div className="space-y-3 mb-8 bg-[#f4f3ef]/50 p-6 rounded-xl border border-[#11110f]/8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#696962] mb-3">
                Key Technical Achievements
              </h4>
              {project.detailedPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3f3f3a]">
                  <CheckCircle2 className="w-4 h-4 text-[#2f5bff] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-[#11110f]/8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#f4f3ef] text-[#3f3f3a] border border-[#11110f]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Architecture Diagram Trigger */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11110f] text-white font-semibold text-xs hover:bg-[#2f5bff] transition-all active:scale-95 shadow-sm"
            >
              <Workflow className="w-4 h-4" />
              <span>System Architecture Diagram</span>
            </button>

            {/* GitHub Repo Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#11110f] font-semibold text-xs border border-[#11110f]/20 hover:border-[#11110f] hover:bg-[#f4f3ef] transition-all active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {/* External Link */}
            <a
              href={project.demoUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#55554e] hover:text-[#11110f] transition-all"
            >
              <span>View Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Interactive Architecture Modal */}
      <ArchitectureModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
