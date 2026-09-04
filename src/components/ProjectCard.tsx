"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const categoryAccents: Record<
  string,
  { dot: string; badge: string; text: string }
> = {
  "Enterprise Backend & Distributed APIs": {
    dot: "bg-[#2f5bff]",
    badge: "bg-[#2f5bff]/10 text-[#1d3fc4] border-[#2f5bff]/20",
    text: "text-[#1d3fc4]",
  },
  "Real-Time Systems & Desktop Engineering": {
    dot: "bg-[#d9ff57]",
    badge: "bg-[#11110f] text-[#d9ff57] border-[#11110f]",
    text: "text-[#3f3f3a]",
  },
};

const defaultAccent = {
  dot: "bg-[#11110f]",
  badge: "bg-[#11110f]/5 text-[#3f3f3a] border-[#11110f]/15",
  text: "text-[#3f3f3a]",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic arrow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 18, mass: 0.4 };
  const arrowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const arrowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const accent = categoryAccents[project.category] ?? defaultAccent;
  const indexLabel = String(index + 1).padStart(2, "0");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div
        className={cn(
          "relative grid grid-cols-12 gap-x-6 gap-y-6 md:gap-x-10 py-10 md:py-14",
          "border-t border-[#11110f]/15 transition-colors duration-500",
          isHovered && "border-[#11110f]/35"
        )}
      >
        {/* Animated hairline that draws in on scroll */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute top-0 left-0 right-0 h-px bg-[#11110f]"
        />

        {/* LEFT: Index, Title, Category */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          {/* Index + Category row */}
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "font-serif italic text-2xl md:text-3xl leading-none transition-colors duration-300",
                isHovered ? "text-[#2f5bff]" : "text-[#11110f]/40"
              )}
            >
              {indexLabel}
            </span>
            <span className="h-px flex-1 bg-[#11110f]/10" />
          </div>

          {/* Title */}
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-[#11110f] leading-[0.95] mt-2">
            {project.title}
          </h3>

          {/* Tagline (serif italic for editorial weight) */}
          <p className="font-serif italic text-base md:text-lg text-[#696962] leading-snug max-w-md">
            {project.tagline}
          </p>
        </div>

        {/* RIGHT: Description + Tech + CTA */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-6 md:pl-4">
          {/* Description */}
          <p className="text-[15px] md:text-base text-[#3f3f3a] leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md",
                  "bg-transparent text-[#3f3f3a] border border-[#11110f]/12",
                  "transition-all duration-300",
                  isHovered && "border-[#11110f]/30 text-[#11110f]"
                )}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/cta relative inline-flex items-center gap-2.5",
                "text-sm font-semibold text-[#11110f] py-1",
                "transition-colors duration-300 hover:text-[#2f5bff]"
              )}
            >
              <Github className="w-4 h-4" />
              <span>View Project</span>
              <motion.span
                style={{ x: arrowX, y: arrowY }}
                className="inline-flex"
              >
                <ArrowUpRight
                  className={cn(
                    "w-4 h-4 transition-transform duration-500",
                    "group-hover/cta:rotate-12"
                  )}
                />
              </motion.span>
              {/* Animated underline */}
              <span
                className={cn(
                  "absolute left-0 right-7 -bottom-0.5 h-px bg-current",
                  "origin-left transition-transform duration-500 ease-out",
                  isHovered ? "scale-x-100" : "scale-x-0"
                )}
              />
            </a>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#696962]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Open Source
            </span>
          </div>
        </div>

        {/* Corner index for desktop (top-right, large faint serif) */}
        <span
          aria-hidden
          className={cn(
            "hidden md:block absolute top-8 right-0",
            "font-serif italic text-7xl lg:text-8xl leading-none",
            "transition-all duration-700 ease-out select-none pointer-events-none",
            isHovered
              ? "text-[#11110f]/8 translate-y-0"
              : "text-[#11110f]/4 -translate-y-1"
          )}
        >
          {indexLabel}
        </span>
      </div>
    </motion.article>
  );
}
