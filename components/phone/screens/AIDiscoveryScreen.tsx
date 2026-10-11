"use client";

import React from "react";
import { Sparkles, Bot, CheckCircle2, Zap } from "lucide-react";

export function AIDiscoveryScreen() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-4 pt-2 flex flex-col justify-between text-xs overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg gradient-engage flex items-center justify-center text-white">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-slate-100 flex items-center gap-1.5">
              Ekha AI Companion
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-slate-400">Discovery Session · Free</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[var(--color-violet)]/20 text-[var(--color-violet-light)] text-[10px] font-medium border border-[var(--color-violet)]/30">
          Step 1 of 3
        </span>
      </div>

      {/* Chat Dialogue */}
      <div className="my-auto space-y-2.5 py-2">
        {/* AI Message */}
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-[var(--color-violet)] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="bg-slate-800/90 border border-slate-700/60 rounded-2xl rounded-tl-xs p-2.5 text-[11px] leading-relaxed text-slate-200 max-w-[88%] shadow-sm">
            Hi Rohan! 👋 Let&apos;s discover how your brain learns best. When tackling tricky math problems, what clicks first?
          </div>
        </div>

        {/* User Choice Response */}
        <div className="flex justify-end">
          <div className="gradient-trust text-white rounded-2xl rounded-tr-xs p-2.5 text-[11px] leading-relaxed max-w-[85%] shadow-md">
            I understand much faster when I see visual step-by-step diagrams!
          </div>
        </div>

        {/* AI Real-time Insight Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-violet-500/30 rounded-xl p-2.5 space-y-2 mt-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[var(--color-violet-light)] font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 text-[var(--color-peach)]" />
              Live Capability Profile
            </span>
            <span className="text-emerald-400 font-semibold">96% Confident</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-slate-900/80 rounded-lg p-1.5 border border-slate-700/50">
              <div className="text-[9px] text-slate-400">Style</div>
              <div className="font-semibold text-white text-[10px]">Visual & Interactive</div>
            </div>
            <div className="bg-slate-900/80 rounded-lg p-1.5 border border-slate-700/50">
              <div className="text-[9px] text-slate-400">Pacing</div>
              <div className="font-semibold text-white text-[10px]">25m Focus Bursts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-slate-300">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          No boring tests
        </span>
        <span className="text-[var(--color-peach)] font-medium">Ready for Teacher</span>
      </div>
    </div>
  );
}
