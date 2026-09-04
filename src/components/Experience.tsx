"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES, EDUCATION_LIST } from "@/data/portfolioData";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 border-b border-[#11110f]/10">

      <div className="page-shell">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[#696962] mb-2">
            Experience &amp; Career
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#11110f]">
            Building &amp; delivering production systems.
          </h2>
        </div>

        {/* Timeline Rows */}
        <div className="mb-20">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLatest={index === 0}
            />
          ))}
        </div>

        {/* Education Credentials Grid */}
        <div id="education" className="pt-10 border-t border-[#11110f]/10">
          <div className="flex items-center gap-3 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#11110f] tracking-tight">
                Education &amp; Academic Background
              </h3>
              <p className="text-xs sm:text-sm text-[#696962] font-mono">
                University degree programs &amp; formal engineering foundation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-white border border-[#11110f]/12 flex flex-col justify-between hover:border-[#11110f]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#f4f3ef] border border-[#11110f]/10 text-[#11110f]">
                      {edu.badgeText || edu.status}
                    </span>
                    <span className="text-xs font-mono text-[#696962] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#2f5bff]" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#11110f] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#55554e] mb-4">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#11110f]/8 flex items-center justify-between text-xs font-mono text-[#696962]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span className="font-semibold text-emerald-700">
                    {edu.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
