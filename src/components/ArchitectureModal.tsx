"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Server,
  Radio,
  Monitor,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ArchitectureModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchitectureModal({
  project,
  isOpen,
  onClose,
}: ArchitectureModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#11110f]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#11110f] text-[#f4f3ef] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#2f5bff]/10 text-[#2f5bff] border border-[#2f5bff]/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{project.title}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#2f5bff]/20 text-[#2f5bff] border border-[#2f5bff]/30">
                    System Architecture
                  </span>
                </h3>
                <p className="text-xs text-[#8f8f89] font-mono">
                  Real-Time Signaling &amp; P2P Media Mesh Pipeline
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#8f8f89] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Interactive Visual Flowchart */}
            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 relative overflow-hidden">
              <div className="text-xs font-mono font-semibold text-[#d9ff57] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Distributed Pipeline Flow</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Node 1: Electron Desktop Client */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#2f5bff] mb-2">
                    <Monitor className="w-4 h-4" />
                    <span className="text-xs font-bold font-mono">Peer A (Host)</span>
                  </div>
                  <p className="text-xs text-[#bcbcb5] mb-3">
                    Electron Desktop Shell captures 1080p @ 60 FPS screen buffer via native OS display hooks.
                  </p>
                  <span className="text-[11px] font-mono text-[#8f8f89] bg-black/40 px-2 py-1 rounded border border-white/10">
                    Hardware Accel H.264/VP9
                  </span>
                </div>

                {/* Node 2: Node.js WebSocket Cluster */}
                <div className="p-4 rounded-xl bg-white/5 border border-[#2f5bff]/40 flex flex-col justify-between relative shadow-[0_0_20px_rgba(47,91,255,0.15)]">
                  <div className="flex items-center gap-2 text-[#2f5bff] mb-2">
                    <Server className="w-4 h-4" />
                    <span className="text-xs font-bold font-mono">Signaling Cluster</span>
                  </div>
                  <p className="text-xs text-[#bcbcb5] mb-3">
                    Node.js &amp; WebSockets broker SDP Offer/Answer handshakes &amp; trickle ICE candidates in &lt;15ms.
                  </p>
                  <span className="text-[11px] font-mono text-[#2f5bff] bg-[#2f5bff]/10 px-2 py-1 rounded border border-[#2f5bff]/20">
                    STUN / TURN Relays
                  </span>
                </div>

                {/* Node 3: Connected Peer */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#d9ff57] mb-2">
                    <Radio className="w-4 h-4" />
                    <span className="text-xs font-bold font-mono">Peer B (Client)</span>
                  </div>
                  <p className="text-xs text-[#bcbcb5] mb-3">
                    Direct UDP WebRTC peer mesh with adaptive jitter buffer &amp; Web Audio spectrum analysis.
                  </p>
                  <span className="text-[11px] font-mono text-[#8f8f89] bg-black/40 px-2 py-1 rounded border border-white/10">
                    Zero-Relay P2P Stream
                  </span>
                </div>
              </div>

              {/* Data stream indicator line */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#bcbcb5]">
                <span className="flex items-center gap-1.5 text-[#d9ff57]">
                  <span className="w-2 h-2 rounded-full bg-[#d9ff57] animate-ping" />
                  Direct Encrypted P2P Media Stream (DTLS-SRTP)
                </span>
                <span className="text-[#8f8f89] hidden sm:inline">E2EE Authenticated</span>
              </div>
            </div>

            {/* Architectural Highlights Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architectureHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/4 border border-white/8 hover:border-white/20 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2f5bff] shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#bcbcb5] leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Performance Spec Table */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/10">
              <div className="text-xs font-mono font-semibold text-[#8f8f89] uppercase tracking-wider mb-3">
                System Specifications &amp; Resilience
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
                <div className="p-3 rounded-lg bg-white/4 border border-white/8">
                  <div className="text-xs text-[#8f8f89]">Latency</div>
                  <div className="text-sm font-bold text-[#d9ff57] mt-0.5">&lt;15 ms</div>
                </div>
                <div className="p-3 rounded-lg bg-white/4 border border-white/8">
                  <div className="text-xs text-[#8f8f89]">Framerate</div>
                  <div className="text-sm font-bold text-white mt-0.5">60 FPS 1080p</div>
                </div>
                <div className="p-3 rounded-lg bg-white/4 border border-white/8">
                  <div className="text-xs text-[#8f8f89]">Protocol</div>
                  <div className="text-sm font-bold text-[#2f5bff] mt-0.5">WebRTC / WSS</div>
                </div>
                <div className="p-3 rounded-lg bg-white/4 border border-white/8">
                  <div className="text-xs text-[#8f8f89]">Encryption</div>
                  <div className="text-sm font-bold text-white mt-0.5">DTLS-SRTP</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
