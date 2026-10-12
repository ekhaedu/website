"use client";

import React, { useState } from "react";
import { PhoneFrame } from "../phone/PhoneFrame";
import { MentorMatchScreen } from "../phone/screens/MentorMatchScreen";
import { ParentRecapScreen } from "../phone/screens/ParentRecapScreen";
import { AIDiscoveryScreen } from "../phone/screens/AIDiscoveryScreen";
import { SyllabusReplaysScreen } from "../phone/screens/SyllabusReplaysScreen";
import { GetAppButton } from "../ui/GetAppButton";
import {
  Sparkles,
  Edit3,
  Video,
  BookOpen,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "../ui/expo-icons";

const PRODUCT_TABS = [
  {
    id: "whiteboard",
    label: "Interactive Whiteboard",
    icon: Edit3,
    badge: "1-on-1 Canvas",
    headline: "Real-Time Collaborative Problem Solving",
    description:
      "Your child solves problems live with their mentor. Multi-color pens, geometric coordinate plotting, and instant equation breakdowns make abstract concepts tangible.",
    color: "#7477FF",
    glow: "rgba(116, 119, 255, 0.35)",
    screen: MentorMatchScreen,
  },
  {
    id: "notes",
    label: "Notes & Homework",
    icon: BookOpen,
    badge: "Mastery Tracking",
    headline: "Targeted Practice & Homework Review",
    description:
      "Structured exercises aligned with classroom textbooks. Instant problem checks, clear solution keys, and XP rewards keep students intrinsically motivated.",
    color: "#3EE8B6",
    glow: "rgba(62, 232, 182, 0.35)",
    screen: ParentRecapScreen,
  },
  {
    id: "ai",
    label: "AI Companion",
    icon: Bot,
    badge: "24/7 Learning Support",
    headline: "Doubts Cleared, Curiosity Sparked",
    description:
      "A friendly companion that explains difficult homework questions step-by-step long after the live class ends, adapting explanations to your child's cognitive profile.",
    color: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.35)",
    screen: AIDiscoveryScreen,
  },
  {
    id: "syllabus",
    label: "Syllabus & Replays",
    icon: Video,
    badge: "Full Curriculum",
    headline: "Classroom Alignment & 7-Day Replays",
    description:
      "Complete coverage of SCERT, State, and ICSE boards. Missed a class or need revision before exams? Watch session recordings anytime.",
    color: "#4FD1FF",
    glow: "rgba(79, 209, 255, 0.35)",
    screen: SyllabusReplaysScreen,
  },
];

export function Chapter04Product() {
  const [activeTabId, setActiveTabId] = useState("whiteboard");

  const currentTab = PRODUCT_TABS.find((t) => t.id === activeTabId) || PRODUCT_TABS[0];
  const ActiveScreen = currentTab.screen;

  return (
    <section
      id="chapter-product"
      className="py-24 sm:py-32 bg-white border-t border-slate-100 select-none relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF0FF] text-[#7477FF] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#7477FF]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>04 · The App Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            This Is What Learning with Ekha Feels Like.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Real software built for deep student focus, joyful interaction, and zero algorithmic distractions.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {PRODUCT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;

              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 scale-102"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#7477FF]" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Product Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-12 mb-12 shadow-sm">
          {/* Left Details Info (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTab.color }} />
              <span>{currentTab.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {currentTab.headline}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentTab.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Zero advertisements or distracting video feeds.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Crystal-clear two-way audio & collaborative canvas.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Full curriculum textbook chapter alignment.</span>
              </div>
            </div>

            <div className="pt-3">
              <GetAppButton className="gradient-trust text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2">
                <span>Explore Live with a Free Mentor Trial</span>
                <ArrowRight className="w-4 h-4" />
              </GetAppButton>
            </div>
          </div>

          {/* Right Phone Showcase (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[310px] aspect-[9/19.5] shadow-2xl rounded-[48px] relative transition-transform duration-500">
              <PhoneFrame glowColor={currentTab.glow}>
                <ActiveScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* 4 Feature Deep-Dive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EEF0FF] text-[#7477FF] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Distraction-Free</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              100% child-safe environment with zero external ads, links, or algorithm recommendations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#E6FBF5] text-[#059669] flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Live Digital Canvas</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Math plotting, geometric formulas, and live step-by-step problem deconstruction.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF3EC] text-[#FF8C42] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">7-Day Session Replays</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every class is recorded securely so your child can re-watch complex explanations before exams.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FEF9EC] text-[#FF9F43] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Chemistry Guarantee</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              If the teaching fit isn&apos;t 100% right, switch mentors anytime with zero questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
