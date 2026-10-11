"use client";

import React from "react";
import { BookOpen, Video, FileText, CheckCircle2, Download } from "lucide-react";

export function SyllabusReplaysScreen() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-3.5 pt-2 flex flex-col justify-between text-xs overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-semibold text-slate-100 text-[11px]">
          <BookOpen className="w-3.5 h-3.5 text-[var(--color-violet)]" />
          Full Syllabus & Replays
        </div>
        <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[9px] font-medium border border-indigo-500/30">
          ICSE / SCERT
        </span>
      </div>

      {/* Chapters List */}
      <div className="space-y-2 my-auto">
        {/* Chapter 1: Replay Ready */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-violet)]/20 text-[var(--color-violet-light)] flex items-center justify-center">
              <Video className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-white text-[10px]">Polynomials & Roots</div>
              <div className="text-[9px] text-slate-400">Class Replay · 48 mins</div>
            </div>
          </div>
          <span className="text-[9px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Replay Ready
          </span>
        </div>

        {/* Chapter 2: Notes Download */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-[var(--color-peach)] flex items-center justify-center">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-white text-[10px]">Class Notes & Formulas</div>
              <div className="text-[9px] text-slate-400">PDF Summary · 12 Pages</div>
            </div>
          </div>
          <button className="text-[9px] text-white gradient-engage px-2 py-1 rounded-md font-medium flex items-center gap-1">
            <Download className="w-2.5 h-2.5" /> PDF
          </button>
        </div>

        {/* Chapter 3: Upcoming Unit */}
        <div className="bg-slate-850/60 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-slate-300 text-[10px]">Quadratic Equations</div>
              <div className="text-[9px] text-slate-500">Unit 5 · Starts Monday</div>
            </div>
          </div>
          <span className="text-[9px] text-slate-400">Next</span>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          100% Curricular Coverage
        </span>
        <span className="text-[var(--color-violet-light)] font-medium">Revisit anytime</span>
      </div>
    </div>
  );
}
