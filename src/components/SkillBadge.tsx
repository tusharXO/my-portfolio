"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  highlight?: boolean;
}

export default function SkillBadge({
  name,
  highlight = false,
}: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono transition-all",
        highlight
          ? "bg-white text-[#11110f] border border-[#11110f]/20 font-semibold shadow-2xs"
          : "bg-[#f4f3ef] text-[#55554e] border border-[#11110f]/8"
      )}
    >
      {name}
    </span>
  );
}
