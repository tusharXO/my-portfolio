"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import SkillBadge from "@/components/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-[#11110f]/10">
      <div className="page-shell">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[#696962] mb-2">
            Technical Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#11110f]">
            Backend engineering &amp; distributed systems.
          </h2>
        </div>

        {/* Skill Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-white border border-[#11110f]/12 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#11110f] mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#696962] mb-5">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      highlight={skill.highlight}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote notes */}
        <div className="p-6 rounded-2xl bg-white border border-[#11110f]/10 text-xs sm:text-sm text-[#55554e] font-mono leading-relaxed">
          <strong className="text-[#11110f] font-bold">Specialized Engineering Practices:</strong>{" "}
          Idempotent payment webhook dispatching, multi-rail gateway integration, ACID MySQL schemas with row-level locking, automated transactional checkout pipelines (@Transactional), Swagger/OpenAPI documentation, PM2 Cluster Mode process management, and containerized Docker CI/CD deployments on AWS EC2.
        </div>
      </div>
    </section>
  );
}
