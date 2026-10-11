"use client";

import React from "react";
import { Video, Mic, Share2, Star, ShieldCheck, Check } from "lucide-react";

export function MentorMatchScreen() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-3.5 pt-2 flex flex-col justify-between text-xs overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span className="font-semibold text-slate-100 text-[11px]">1-on-1 Live Class</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-medium border border-emerald-500/30 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          Free Trial
        </span>
      </div>

      {/* Teacher Profile Card */}
      <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full gradient-trust flex items-center justify-center font-bold text-white text-xs border border-white/20">
            AS
          </div>
          <div>
            <div className="font-semibold text-white text-[11px] leading-tight">
              Dr. Ananya Sharma
            </div>
            <div className="text-[9px] text-slate-400">Physics & Math Specialist</div>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/30 px-1.5 py-0.5 rounded-md text-[10px] text-amber-300 font-semibold">
          <Star className="w-2.5 h-2.5 fill-amber-300" />
          4.9
        </div>
      </div>

      {/* Live Interactive Whiteboard Canvas */}
      <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-3 my-2 flex flex-col justify-between aspect-[4/3]">
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-b border-slate-800/60 pb-1">
          <span>Board #1 · Polynomial Factorization</span>
          <span className="text-[var(--color-peach)]">Real-time Sync</span>
        </div>

        {/* Math Visualization */}
        <div className="my-auto text-center space-y-1">
          <div className="font-mono text-sm font-bold text-violet-300 tracking-wider">
            f(x) = (x + 2)(x − 3)
          </div>
          <div className="text-[10px] text-emerald-400 font-medium">
            Roots: x = -2, x = 3 ✓
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div className="w-4/5 h-full gradient-engage rounded-full" />
          </div>
        </div>

        {/* Teacher video miniature */}
        <div className="absolute right-2 bottom-2 w-14 h-14 rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shadow-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-4 h-4 rounded-full bg-violet-500/80 mx-auto mb-0.5" />
            <span className="text-[8px] text-slate-300 font-medium">Teacher</span>
          </div>
        </div>
      </div>

      {/* Class Action Bar */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white">
            <Mic className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white">
            <Video className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white">
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
          <Check className="w-3 h-3 text-emerald-400" />
          Switch teacher anytime
        </span>
      </div>
    </div>
  );
}
