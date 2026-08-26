"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isLatest?: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isLatest = false,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={cn(
        "transition-all duration-300 relative group cursor-pointer",
        isLatest
          ? "bg-[#2f5bff] text-white p-6 sm:p-10 rounded-2xl shadow-lg mb-8"
          : "py-10 border-t border-[#11110f]/10"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        {/* Left Column: Period */}
        <div className="md:col-span-3">
          <p
            className={cn(
              "text-xs sm:text-sm font-mono tracking-tight",
              isLatest ? "text-white/80" : "text-[#696962]"
            )}
          >
            {experience.period}
          </p>
        </div>

        {/* Right Column: Title, Company Name (Normal Text), Summary, and Expandable Content */}
        <div className="md:col-span-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-tight",
                  isLatest ? "text-white" : "text-[#11110f]"
                )}
              >
                {experience.role}
              </h3>

              <div className="mb-4">
                <p
                  className={cn(
                    "text-sm sm:text-base font-semibold",
                    isLatest
                      ? "text-[#d9ff57]"
                      : "text-[#2f5bff]"
                  )}
                >
                  {experience.company} – {experience.location}
                </p>
              </div>

              {/* 1-Sentence Summary */}
              <p
                className={cn(
                  "text-sm sm:text-base leading-relaxed max-w-3xl",
                  isLatest ? "text-white/90" : "text-[#55554e]"
                )}
              >
                {experience.description}
              </p>
            </div>

            {/* Top-Right Expand Indicator */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className={cn(
                "p-2 rounded-full transition-all shrink-0 mt-1",
                isLatest
                  ? "text-[#d9ff57] hover:bg-white/10"
                  : "text-[#11110f]/60 hover:text-[#11110f] hover:bg-[#11110f]/5"
              )}
              aria-label={expanded ? "Collapse details" : "Expand details"}
            >
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  expanded ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          </div>

          {/* Expandable Dropdown Details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden pt-6 mt-6 border-t border-current/15"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Key Achievements */}
                <div className="space-y-3 mb-6">
                  <h4
                    className={cn(
                      "text-xs font-mono font-bold uppercase tracking-wider mb-3",
                      isLatest ? "text-white/80" : "text-[#696962]"
                    )}
                  >
                    Key Production Contributions
                  </h4>
                  {experience.achievements.map((point, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed",
                        isLatest ? "text-white/95" : "text-[#3f3f3a]"
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "w-4 h-4 shrink-0 mt-0.5",
                          isLatest ? "text-[#d9ff57]" : "text-[#2f5bff]"
                        )}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {experience.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "text-xs font-mono px-2.5 py-1 rounded-md",
                        isLatest
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-white text-[#3f3f3a] border border-[#11110f]/10"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
