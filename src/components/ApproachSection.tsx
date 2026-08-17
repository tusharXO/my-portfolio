"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Database, Network } from "lucide-react";

export default function ApproachSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Concurrency & Process Balance",
      desc: "Deploying microservices across multi-core cloud instances with PM2 cluster mode and IPC coordination for continuous sub-20ms latency.",
    },
    {
      icon: Database,
      title: "ACID Ledger & Event Logging",
      desc: "Pairing strict relational row-level locking for zero double-spend financial balances with asynchronous MongoDB audit streams.",
    },
    {
      icon: Network,
      title: "Real-Time Mesh Protocols",
      desc: "Orchestrating custom WebSockets signaling clusters handling 10,000+ daily SDP/ICE exchanges for low-latency peer-to-peer WebRTC streaming.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Cryptography",
      desc: "Securing mission-critical REST endpoints with AES-256 payload encryption, RSA asymmetric signatures, and proactive Telegram alerting bots.",
    },
  ];

  return (
    <section className="section-dark py-24 border-b border-white/10">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-wider text-[#d9ff57] mb-3">
              Engineering Approach
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ownership from architecture design to production release.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-[#bcbcb5] leading-relaxed mb-6 font-normal">
              I bring structural clarity to complex systems. Whether optimizing transaction throughput under heavy load or engineering low-latency desktop collaboration tools, I prioritize reliable concurrency, data integrity, and clean abstractions.
            </p>
            <p className="text-sm sm:text-base text-[#8f8f89] leading-relaxed">
              My background spans the entire product lifecycle: from relational database schema modeling and cryptographic payload hardening to intuitive real-time UI dashboards and containerized CI/CD deployments on AWS.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/4 border border-white/8 hover:border-[#d9ff57]/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-[#d9ff57]/10 text-[#d9ff57] w-fit mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#bcbcb5] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
