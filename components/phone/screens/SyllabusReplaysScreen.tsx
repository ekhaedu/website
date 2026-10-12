"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Home,
  BookOpen,
  Edit3,
  User,
} from "../../ui/expo-icons";

export function SyllabusReplaysScreen() {
  const [activeTab, setActiveTab] = useState<"current" | "book">("current");

  return (
    <div className="h-full w-full bg-[#111113] text-white p-3 pt-12 pb-2.5 flex flex-col justify-between text-xs overflow-hidden select-none font-barlow">
      {/* 1. Header & Tabs (app/user/classes/index.tsx) */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-black shrink-0 shadow-sm">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-white font-black text-base uppercase tracking-tight">
            CLASSES
          </span>
        </div>

        {/* Tab Toggle (Current Classes vs Book Session) */}
        <div className="flex items-center bg-[#18181A] rounded-xl p-0.5 border border-white/5 text-[9px] font-bold">
          <button
            onClick={() => setActiveTab("current")}
            className={`flex-1 py-1 rounded-lg text-center transition-colors ${
              activeTab === "current"
                ? "bg-white/10 text-white shadow-xs"
                : "text-white/40 hover:text-white"
            }`}
          >
            Current Classes
          </button>
          <button
            onClick={() => setActiveTab("book")}
            className={`flex-1 py-1 rounded-lg text-center transition-colors ${
              activeTab === "book"
                ? "bg-white/10 text-white shadow-xs"
                : "text-white/40 hover:text-white"
            }`}
          >
            Book Session
          </button>
        </div>
      </div>

      {/* 2. Authentic Session Cards List (CurrentClasses.tsx) */}
      <div className="space-y-2 shrink-0 my-auto">
        {/* Card 1: Mathematics - Live Now (bg: #5AD65A, text: #064E3B) */}
        <div className="bg-[#5AD65A] rounded-[20px] p-3 text-[#064E3B] shadow-lg relative overflow-hidden">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-1">
            <div className="inline-flex items-center gap-1.5 bg-black/15 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] animate-pulse" />
              <span className="font-bold text-[8px] tracking-wider uppercase">
                LIVE NOW
              </span>
            </div>
            <span className="text-[8px] font-bold opacity-75 uppercase">
              1-on-1 Class
            </span>
          </div>

          {/* Subject & Topic */}
          <div className="text-[8px] uppercase tracking-wider font-semibold opacity-80">
            MATHEMATICS · POLYNOMIALS
          </div>
          <div className="text-base font-black uppercase tracking-tight leading-tight mb-2">
            FACTORIZATION & ROOTS
          </div>

          {/* Teacher Info & Join Button */}
          <div className="flex items-center justify-between pt-1.5 border-t border-[#064E3B]/20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-[9px]">
                AS
              </div>
              <div>
                <div className="font-bold text-[9.5px] leading-tight">
                  Dr. Ananya Sharma
                </div>
                <div className="text-[7.5px] opacity-75 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  <span>Today, 4:30 PM · 45 mins</span>
                </div>
              </div>
            </div>

            <button className="bg-white/20 hover:bg-white/30 border border-[#064E3B] rounded-full py-1 px-3 text-[9px] font-black uppercase tracking-wider transition-colors shadow-xs">
              Join Now
            </button>
          </div>
        </div>

        {/* Card 2: English - Upcoming (bg: #A78BFA, text: #312E81) */}
        <div className="bg-[#A78BFA] rounded-[20px] p-3 text-[#312E81] shadow-md relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <div className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#312E81] bg-[#312E81]/10">
              <span className="font-bold text-[8px] tracking-wider uppercase">
                UPCOMING
              </span>
            </div>
            <span className="text-[8.5px] font-black">2h 15m until class</span>
          </div>

          <div className="text-[8px] uppercase tracking-wider font-semibold opacity-80">
            ENGLISH · COMPOSITION
          </div>
          <div className="text-base font-black uppercase tracking-tight leading-tight mb-2">
            PERSUASIVE ESSAYS
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-[#312E81]/20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#312E81] text-white flex items-center justify-center font-bold text-[9px]">
                SJ
              </div>
              <div>
                <div className="font-bold text-[9.5px] leading-tight">
                  Sarah Jenkins
                </div>
                <div className="text-[7.5px] opacity-75">
                  Tomorrow, 5:00 PM · 45 mins
                </div>
              </div>
            </div>

            <span className="text-[8px] font-bold uppercase opacity-80">
              Scheduled
            </span>
          </div>
        </div>
      </div>

      {/* 3. Floating App Navigation Pill (CustomTabBar.tsx - Classes/BookOpen active) */}
      <div className="bg-[#1A1A1A]/95 border border-white/10 rounded-full py-1.5 px-4 flex items-center justify-between shadow-lg mx-2 shrink-0">
        <div className="text-white/40">
          <Home className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center justify-center w-7 h-6 rounded-full bg-white/15 text-white">
          <BookOpen className="w-3.5 h-3.5" />
        </div>
        <div className="text-white/40">
          <Edit3 className="w-3.5 h-3.5" />
        </div>
        <div className="text-white/40">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
