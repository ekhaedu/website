"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneFrame } from "../phone/PhoneFrame";
import { AIDiscoveryScreen } from "../phone/screens/AIDiscoveryScreen";
import { MentorMatchScreen } from "../phone/screens/MentorMatchScreen";
import { LearningWalletScreen } from "../phone/screens/LearningWalletScreen";
import {
  Sparkles,
  Bot,
  Users,
  Coins,
  ArrowRight,
} from "../ui/expo-icons";
import { GetAppButton } from "../ui/GetAppButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_STAGES = [
  {
    id: "discovery",
    number: "01",
    tagline: "Free & Compulsory for Every Student",
    title: "The AI Discovery Session",
    kidCopy: "A friendly 10-minute chat with our mascot that maps your favorite subjects and learning style—no scary placement tests.",
    parentCopy: "Uncovers whether your child learns best through visual models or logical steps, identifying concept gaps before class 1.",
    icon: Bot,
    color: "#7477FF",
    bgLight: "#EEF0FF",
    screenIndex: 0,
  },
  {
    id: "mentor",
    number: "02",
    tagline: "Free Trial With Every Mentor",
    title: "The Perfect Mentor Match",
    kidCopy: "Meet a mentor who actually understands your pace and draws solutions live on a collaborative digital whiteboard.",
    parentCopy: "100% vetted subject specialists with demonstrated teaching capability. If the chemistry isn't 100% right, switch mentors anytime with zero hassle.",
    icon: Users,
    color: "#3EE8B6",
    bgLight: "#E6FBF5",
    screenIndex: 1,
  },
  {
    id: "learning",
    number: "03",
    tagline: "Transparent Escrow & Daily Growth",
    title: "Personalized Daily Habits",
    kidCopy: "Keep your notes, revisit tricky topics with 7-day replays, and earn streak rewards for consistent learning habits.",
    parentCopy: "1 Coin = ₹1 escrow pricing with zero subscriptions. Honest narrative summaries delivered straight to your WhatsApp after every class.",
    icon: Coins,
    color: "#FF8C42",
    bgLight: "#FFF3EC",
    screenIndex: 2,
  },
];

export function Chapter03Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Only apply GSAP ScrollTrigger pinning on desktop (min-width: 768px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const stageIndex = Math.min(
            STORY_STAGES.length - 1,
            Math.floor(progress * STORY_STAGES.length)
          );
          if (stageIndex !== activeStageRef.current) {
            activeStageRef.current = stageIndex;
            setActiveStage(stageIndex);
          }
        },
      });
    });

    return () => mm.revert();
  }, []);

  const currentStage = STORY_STAGES[activeStage];

  return (
    <section
      ref={containerRef}
      id="chapter-story"
      className="relative w-full bg-white border-t border-slate-100 select-none overflow-hidden"
    >
      {/* Dynamic Background Watermark */}
      <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 text-[100px] sm:text-[180px] font-black uppercase text-slate-900/[0.03] select-none pointer-events-none transition-all duration-700 tracking-tighter leading-none -z-10 text-right">
        {currentStage.id}
      </div>

      <div className="container mx-auto px-4 max-w-6xl min-h-screen flex flex-col justify-center py-16 sm:py-20">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 shrink-0">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF0FF] text-[#7477FF] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#7477FF]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>03 · The 3-Step Journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            From Curiosity to Confidence.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            How a structured, transparent process guides your child from their first discovery chat to ongoing academic growth.
          </p>

          {/* Step Selector Pills for direct tap */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {STORY_STAGES.map((st, i) => {
              const isSelected = activeStage === i;
              return (
                <button
                  type="button"
                  key={st.id}
                  onClick={() => {
                    activeStageRef.current = i;
                    setActiveStage(i);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "gradient-trust text-white shadow-md shadow-[#7477FF]/25 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>Step {st.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Split Layout: Left Narrative, Right Screen Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center flex-1">
          {/* Left Narrative Column (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6 flex flex-col justify-center">
            {STORY_STAGES.map((st, i) => {
              const isSelected = activeStage === i;
              const Icon = st.icon;

              return (
                <div
                  key={st.id}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-500 ${
                    isSelected
                      ? "bg-white border-slate-200 shadow-xl shadow-slate-900/5 opacity-100 translate-y-0 scale-100"
                      : "hidden md:block bg-slate-50/60 border-transparent opacity-40 hover:opacity-70 scale-98"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0"
                      style={{ backgroundColor: st.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Stage {st.number}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: st.color }}
                      >
                        {st.tagline}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                    {st.title}
                  </h3>

                  {/* Dual Audience Balance */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        For the Student:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {st.kidCopy}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EEF0FF]/60 border border-[#7477FF]/15">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7477FF] block mb-0.5">
                        For the Parent:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {st.parentCopy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <GetAppButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-trust text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer">
                <span>Start with Free Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </GetAppButton>
            </div>
          </div>

          {/* Right Phone Device Column (6 cols) */}
          <div className="md:col-span-6 lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-[290px] sm:max-w-[320px] aspect-[9/19.5] shadow-2xl rounded-[48px] relative transition-transform duration-500">
              <PhoneFrame glowColor={currentStage.color}>
                {activeStage === 0 && <AIDiscoveryScreen />}
                {activeStage === 1 && <MentorMatchScreen />}
                {activeStage === 2 && <LearningWalletScreen />}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
