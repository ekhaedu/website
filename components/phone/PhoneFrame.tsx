"use client";

import React from "react";
interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

{/* Exact Apple SF Symbols: Cellular 4-Bars */}
function IosCellularIcon({ className = "w-[17px] h-[11px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="7.5" width="3" height="3.5" rx="0.75" />
      <rect x="4.5" y="5" width="3" height="6" rx="0.75" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="0.75" />
      <rect x="13.5" y="0" width="3" height="11" rx="0.75" />
    </svg>
  );
}

{/* Exact Apple SF Symbols: Wi-Fi Arcs */}
function IosWifiIcon({ className = "w-[16px] h-[11px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Base dot */}
      <circle cx="8" cy="10.2" r="1.2" fill="currentColor" />
      {/* Inner arc */}
      <path
        d="M4.6 6.8C5.55 5.85 6.7 5.35 8 5.35C9.3 5.35 10.45 5.85 11.4 6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Outer arc */}
      <path
        d="M1.5 3.5C3.25 1.7 5.5 0.7 8 0.7C10.5 0.7 12.75 1.7 14.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

{/* Exact Apple SF Symbols: Battery Pill with Terminal Pin */}
function IosBatteryIcon({ className = "w-[25px] h-[12px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer battery body outline */}
      <rect
        x="0.75"
        y="0.75"
        width="20.5"
        height="10.5"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeOpacity="0.45"
      />
      {/* Full charge interior */}
      <rect
        x="2.5"
        y="2.5"
        width="17"
        height="7"
        rx="2"
        fill="currentColor"
      />
      {/* Positive terminal cap */}
      <path
        d="M23 4.25C23.6 4.55 24 5.2 24 6C24 6.8 23.6 7.45 23 7.75V4.25Z"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

export function PhoneFrame({
  children,
  className = "",
  glowColor = "rgba(112, 111, 211, 0.2)",
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto select-none transform-gpu ${className}`}>
      {/* Dynamic Ambient Glow Behind Phone */}
      <div
        className="absolute -inset-4 rounded-[56px] blur-2xl opacity-40 transition-colors duration-500 pointer-events-none will-change-[background-color]"
        style={{ backgroundColor: glowColor }}
      />

      {/* Hardware Buttons — Integrated sleek metallic slivers hugging chassis perimeter */}
      {/* Left: Action Button */}
      <div className="absolute -left-[2px] top-[96px] w-[2.5px] h-[22px] bg-[#4a4b54] rounded-l-[2px] shadow-[inset_-1px_0_1px_rgba(0,0,0,0.6)] z-0" />
      {/* Left: Volume Up Button */}
      <div className="absolute -left-[2px] top-[134px] w-[2.5px] h-[46px] bg-[#4a4b54] rounded-l-[2px] shadow-[inset_-1px_0_1px_rgba(0,0,0,0.6)] z-0" />
      {/* Left: Volume Down Button */}
      <div className="absolute -left-[2px] top-[190px] w-[2.5px] h-[46px] bg-[#4a4b54] rounded-l-[2px] shadow-[inset_-1px_0_1px_rgba(0,0,0,0.6)] z-0" />
      {/* Right: Side / Power Button */}
      <div className="absolute -right-[2px] top-[150px] w-[2.5px] h-[64px] bg-[#4a4b54] rounded-r-[2px] shadow-[inset_1px_0_1px_rgba(0,0,0,0.6)] z-0" />

      {/* Outer Titanium Chassis (iPhone 15 Pro / 16 Pro Natural Titanium precision rim) */}
      <div className="relative rounded-[54px] p-[3px] bg-gradient-to-b from-[#8a8b94] via-[#3a3b43] to-[#18191d] shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_25px_60px_-15px_rgba(0,0,0,0.6),0_12px_24px_-8px_rgba(0,0,0,0.4)] ring-1 ring-black/90 z-10">
        {/* Inner Titanium Accent Ring */}
        <div className="relative rounded-[51px] p-[3px] bg-[#0c0d10] shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.1)]">
          {/* Top Micro Speaker Earpiece Slit */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-[#1a1a20] rounded-full z-40 opacity-80 pointer-events-none" />

          {/* Active OLED Screen Viewport (Ultra-slim 3mm uniform bezel) */}
          <div className="relative rounded-[47px] overflow-hidden bg-[#111113] aspect-[9/19.5] w-full max-w-[320px] sm:max-w-[340px] shadow-inner">
            {/* Screen Content Viewport (Edge-to-edge full surface like real iOS) */}
            <div className="absolute inset-0 z-10 overflow-hidden flex flex-col font-barlow">
              {children}
            </div>

            {/* Status Bar Overlay (Exact Apple iOS layout) */}
            <div className="absolute top-0 inset-x-0 z-30 pt-3.5 px-6 flex items-center justify-between text-white text-[13px] font-semibold tracking-tight shrink-0 bg-transparent select-none pointer-events-none">
              {/* Time */}
              <span className="font-semibold tracking-tight pl-1 font-sans">9:41</span>

              {/* Dynamic Island (Exact Apple proportions & TrueDepth sensor lens) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2.5 h-[28px] w-[88px] bg-black rounded-full flex items-center justify-center shadow-sm border border-black pointer-events-auto">
                {/* TrueDepth Camera Lens Reflection */}
                <div className="absolute right-3 w-[10px] h-[10px] rounded-full bg-[#08080d] border border-white/15 flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#1a243e]/90" />
                </div>
              </div>

              {/* Status Icons: Cellular (4 bars), Wi-Fi, Apple Battery */}
              <div className="flex items-center gap-2 pr-1 opacity-95">
                <IosCellularIcon />
                <IosWifiIcon />
                <IosBatteryIcon />
              </div>
            </div>

            {/* iOS Home Indicator Bar Overlay */}
            <div className="absolute bottom-0 inset-x-0 z-30 pb-2.5 pt-1 flex justify-center shrink-0 bg-transparent select-none pointer-events-none">
              <div className="w-32 h-[4.5px] bg-white/70 rounded-full" />
            </div>

            {/* Screen Glaze Reflection (Ultra-subtle metallic glass reflection) */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-20 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] rounded-[47px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
