"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Zap, Radio, Users } from "lucide-react";
import { METRIC_HIGHLIGHTS } from "@/data/portfolioData";

const ICON_MAP = {
  CreditCard,
  Zap,
  Radio,
  Users,
};

export default function BentoMetrics() {
  return (
    <section id="metrics" className="py-20 border-b border-[#11110f]/10">
      <div className="page-shell">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-wider text-[#696962] mb-2">
            Engineering Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#11110f]">
            Quantified impact &amp; verified results.
          </h2>
        </div>

        {/* 4-Column Editorial Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRIC_HIGHLIGHTS.map((metric, index) => {
            const Icon = ICON_MAP[metric.iconName as keyof typeof ICON_MAP] || Zap;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-white border border-[#11110f]/12 flex flex-col justify-between hover:border-[#11110f]/30 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#f4f3ef] border border-[#11110f]/10 text-[#55554e]">
                      {metric.source}
                    </span>
                    <Icon className="w-4 h-4 text-[#2f5bff]" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold text-[#11110f] tracking-tight mb-2 group-hover:text-[#2f5bff] transition-colors">
                    {metric.value}
                  </div>

                  <h3 className="text-sm font-bold text-[#11110f] mb-2">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-xs text-[#696962] leading-relaxed pt-4 border-t border-[#11110f]/8 mt-4">
                  {metric.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
