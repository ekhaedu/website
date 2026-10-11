"use client";

import React from "react";
import { Sparkles, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";

export function ParentRecapScreen() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-3.5 pt-2 flex flex-col justify-between text-xs overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-slate-100 text-[11px] flex items-center gap-1">
              Ekha Updates
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[9px] text-slate-400">Parent Loop via WhatsApp</div>
          </div>
        </div>
        <span className="text-[9px] text-slate-400">4:32 PM</span>
      </div>

      {/* WhatsApp Narrative Card */}
      <div className="my-auto bg-[#1b272f] border border-emerald-500/20 rounded-2xl p-3 space-y-2 shadow-md">
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[10px]">
          <Sparkles className="w-3.5 h-3.5" />
          AI Session Summary · Today
        </div>

        <p className="text-slate-200 text-[11px] leading-relaxed">
          Rohan had an outstanding math session today! 🎉 He mastered polynomial basics and scored <strong className="text-white">8/10</strong> on practice questions.
        </p>

        {/* Action Items */}
        <div className="bg-[#111c22] rounded-xl p-2 border border-slate-800 space-y-1 text-[10px]">
          <div className="text-slate-300">
            📝 <strong className="text-white">Homework:</strong> Exercise 4.2 (Q1-5)
          </div>
          <div className="text-slate-300">
            ⏰ <strong className="text-white">Next Class:</strong> Tomorrow, 4:30 PM
          </div>
        </div>

        {/* Show Me Why Preview */}
        <div className="pt-1 flex items-center justify-between text-[10px] text-emerald-300 font-medium">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            95% Active Engagement
          </span>
          <span className="flex items-center">
            Details <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Bottom Transparency Notice */}
      <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>No raw metric guesswork</span>
        <span className="text-emerald-400 font-medium">Clear & Actionable</span>
      </div>
    </div>
  );
}
