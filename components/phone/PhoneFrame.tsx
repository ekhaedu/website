"use client";

import React from "react";
import { Wifi, BatteryMedium, Signal } from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function PhoneFrame({
  children,
  className = "",
  glowColor = "rgba(112, 111, 211, 0.2)",
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto select-none transform-gpu ${className}`}>
      {/* Dynamic Ambient Glow */}
      <div
        className="absolute -inset-4 rounded-[52px] blur-xl opacity-50 transition-colors duration-500 pointer-events-none will-change-[background-color]"
        style={{ backgroundColor: glowColor }}
      />

      {/* Outer Phone Shell */}
      <div className="relative rounded-[46px] p-[10px] bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset] ring-1 ring-black/40">
        {/* Subtle Outer Edge Highlights (Titanium rim) */}
        <div className="absolute inset-0 rounded-[46px] border border-white/10 pointer-events-none" />

        {/* Side Button Accents (Left: Volume; Right: Power) */}
        <div className="absolute -left-[13px] top-28 w-[3px] h-10 bg-slate-700 rounded-l-md opacity-80" />
        <div className="absolute -left-[13px] top-42 w-[3px] h-10 bg-slate-700 rounded-l-md opacity-80" />
        <div className="absolute -right-[13px] top-32 w-[3px] h-14 bg-slate-700 rounded-r-md opacity-80" />

        {/* Inner Screen Bezel */}
        <div className="relative rounded-[38px] overflow-hidden bg-slate-950 aspect-[9/19.5] w-full max-w-[320px] sm:max-w-[340px] border border-black/80 flex flex-col justify-between">
          {/* Status Bar */}
          <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight shrink-0 bg-transparent">
            <span>9:41</span>

            {/* Dynamic Island Pill */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 h-[22px] w-[92px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-900" />
            </div>

            <div className="flex items-center gap-1.5 opacity-90">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <BatteryMedium className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content Viewport */}
          <div className="relative z-10 flex-1 overflow-hidden flex flex-col">
            {children}
          </div>

          {/* Home Indicator Bar */}
          <div className="relative z-30 pb-2 pt-1 flex justify-center shrink-0 bg-transparent">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>

          {/* Screen Glaze Reflection */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-25 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
        </div>
      </div>
    </div>
  );
}
