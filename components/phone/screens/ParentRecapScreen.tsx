"use client";

import React, { useState } from "react";
import {
  Clock,
  Award,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "../../ui/expo-icons";

export function ParentRecapScreen() {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const options = [
    { id: 0, text: "x = -2,  x = 3", correct: true },
    { id: 1, text: "x = 2,  x = -3", correct: false },
    { id: 2, text: "x = 1,  x = -6", correct: false },
  ];

  return (
    <div className="h-full w-full bg-[#111113] text-white p-3 pt-12 pb-3 flex flex-col justify-between text-xs overflow-hidden select-none font-barlow">
      {/* 1. Header (Exact HomeworkModal.tsx) */}
      <div className="flex items-center justify-between shrink-0 mb-2 pb-1 border-b border-white/5">
        <div>
          <div className="text-white -tracking-[1px] font-black text-lg uppercase leading-tight">
            POLYNOMIALS EX 4.2
          </div>
          <div className="text-white/40 font-medium text-[9px] uppercase tracking-wider">
            MATHEMATICS · CLASS 10
          </div>
        </div>

        <button className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Homework Info & Progress Card (Exact HomeworkModal.tsx) */}
      <div className="bg-[#18181A] rounded-2xl p-2.5 mb-2 border border-white/5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            {/* Due Date Pill */}
            <div className="bg-[#B185FF]/10 text-[#B185FF] font-semibold text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#B185FF]/20">
              <Clock className="w-2.5 h-2.5" />
              <span>Due: Tomorrow, 4 PM</span>
            </div>
            {/* XP Reward Badge */}
            <div className="bg-[#F8CC61]/10 text-[#F8CC61] font-bold text-[8px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#F8CC61]/20">
              <Award className="w-2.5 h-2.5" />
              <span>+50 XP</span>
            </div>
          </div>

          <span className="text-white/40 font-bold text-[9px]">1 / 5</span>
        </div>

        {/* Real Progress Bar */}
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#BCF3FE] rounded-full w-[25%]" />
        </div>
      </div>

      {/* 3. Question & Multi-Choice Container (Exact HomeworkModal.tsx) */}
      <div className="bg-[#1A1A1A] rounded-[22px] p-3 border border-white/5 flex-1 flex flex-col justify-between my-0.5 shadow-md">
        <div>
          {/* Question Tag & AI Tutor Button */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="bg-white/10 text-white/80 font-bold text-[8px] tracking-widest uppercase px-2.5 py-0.5 rounded-full">
              QUESTION 1
            </span>

            <button className="bg-[#BCF3FE]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#BCF3FE]/20 text-[#BCF3FE] font-bold text-[8px] hover:bg-[#BCF3FE]/20 transition-colors">
              <Zap className="w-2.5 h-2.5 fill-[#BCF3FE]" />
              <span>AI Tutor</span>
            </button>
          </div>

          {/* Question Prompt */}
          <p className="text-white font-medium text-[11px] leading-relaxed mb-3">
            Find the roots of the quadratic polynomial <strong className="text-white font-bold">f(x) = x² − x − 6</strong>.
          </p>

          {/* Multiple-Choice Options */}
          <div className="space-y-1.5">
            {options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full p-2 rounded-xl flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? "bg-[#BCF3FE]/15 border border-[#BCF3FE] shadow-xs"
                      : "bg-[#222225] border border-white/5 opacity-80 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono ${
                      isSelected
                        ? "text-[#BCF3FE] font-bold"
                        : "text-white/80 font-medium"
                    }`}
                  >
                    {opt.text}
                  </span>

                  {isSelected ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-[#BCF3FE] flex items-center justify-center text-slate-900">
                      <CheckCircle2 className="w-3 h-3 text-[#0F172A]" />
                    </div>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Navigation Controls (Exact HomeworkModal.tsx) */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button className="flex-1 ml-2 bg-[#BCF3FE] text-[#0F172A] font-bold text-[9px] uppercase tracking-wider rounded-full py-1.5 px-3 flex items-center justify-center gap-1 shadow-md hover:scale-102 transition-transform">
            <span>Next Question</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
