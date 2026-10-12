"use client";

import React from "react";
import { Mic, Send } from "../../ui/expo-icons";

export function AIDiscoveryScreen() {
  return (
    <div className="h-full w-full bg-[#111113] text-white p-3 pt-12 pb-3 flex flex-col justify-between text-xs overflow-hidden select-none font-barlow">
      {/* 1. Header (MascotChat.tsx / Solo-Sync) */}
      <div className="flex items-center justify-between shrink-0 mb-1 pb-1.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#7477FF]/20 border border-[#7477FF]/40 flex items-center justify-center text-sm">
            🧬
          </div>
          <div>
            <div className="font-bold text-white text-xs leading-none flex items-center gap-1.5">
              Ekha AI Companion
              <span className="w-1.5 h-1.5 rounded-full bg-[#3EE8B6] animate-pulse" />
            </div>
            <div className="text-[8px] text-white/40 mt-0.5">Solo-Sync Discovery Session</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#7477FF]/20 text-[#A5A6F6] text-[8px] font-bold border border-[#7477FF]/30">
          Step 1 of 3
        </span>
      </div>

      {/* 2. Interactive Dialogue (MascotChat.tsx) */}
      <div className="space-y-2 shrink-0 my-auto">
        {/* AI Message Bubble */}
        <div className="flex items-start gap-1.5 max-w-[90%]">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
            🤖
          </div>
          <div className="bg-[#1E1E24] border border-white/5 rounded-2xl rounded-tl-xs p-2.5 text-[11px] leading-relaxed text-white/90 shadow-sm">
            Hi Rohan! 👋 Let&apos;s discover how your brain learns best. When tackling tricky math problems, what clicks first?
          </div>
        </div>

        {/* User Response Bubble */}
        <div className="flex justify-end">
          <div className="bg-[#7477FF] text-white rounded-2xl rounded-tr-xs p-2.5 text-[11px] leading-relaxed max-w-[85%] shadow-md font-medium">
            I understand much faster when I see visual step-by-step diagrams! 📐
          </div>
        </div>

        {/* Real Ekha DNA Profile Generated Card (DnaCard.tsx) */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F3460] via-[#16213E] to-[#1A1A2E] p-2.5 border border-[#BCF3FE]/20 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">🧬</span>
              <span className="text-white/70 uppercase font-black text-[8px] tracking-[1.5px]">
                YOUR DNA LEARNING PROFILE
              </span>
            </div>
            <span className="text-[#3EE8B6] font-bold text-[8px]">96% Confident</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-black/30 rounded-lg p-1.5 border border-white/5">
              <div className="text-[7px] text-white/40 uppercase font-bold">Style</div>
              <div className="font-bold text-[#BCF3FE] text-[9px] mt-0.5">
                Visual & Interactive
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-1.5 border border-white/5">
              <div className="text-[7px] text-white/40 uppercase font-bold">Pacing</div>
              <div className="font-bold text-[#A78BFA] text-[9px] mt-0.5">
                25m Focus Bursts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Input & Voice Assistant Bar (MascotChat.tsx) */}
      <div className="flex items-center gap-2 pt-1 shrink-0">
        <div className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-full py-1.5 px-3 flex items-center justify-between text-white/40 text-[10px]">
          <span>Type or speak...</span>
          <Mic className="w-3.5 h-3.5 text-white/60" />
        </div>
        <div className="w-7 h-7 rounded-full bg-[#3EE8B6] flex items-center justify-center text-black font-bold shadow-sm">
          <Send className="w-3 h-3 fill-black text-black ml-0.5" />
        </div>
      </div>
    </div>
  );
}
