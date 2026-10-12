"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneShowcase } from "../phone/PhoneShowcase";
import {
  Sparkles,
  Bot,
  Users,
  Coins,
  MessageCircle,
  BookOpen,
  CheckCircle2,
} from "../ui/expo-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURE_STEPS = [
  {
    id: "discovery",
    badge: "01 · Step One",
    title: "Smart AI Discovery Session",
    tagline: "Free & Compulsory for Every Student",
    description:
      "Before meeting a teacher, a fun AI conversation maps your child's cognitive strengths, pacing, and visual learning style — without boring placement tests.",
    points: [
      "Natural conversation rather than stressful exams",
      "Identifies whether your child prefers visual or step-by-step methods",
      "Generates a clear capability profile shared with their teacher",
    ],
    icon: Bot,
    color: "var(--color-violet)",
    bgLight: "var(--color-violet-light)",
    watermark: "DISCOVERY",
  },
  {
    id: "mentor",
    badge: "02 · Step Two",
    title: "1-on-1 Vetted Teacher Matching",
    tagline: "Free Trial With Every Single Teacher",
    description:
      "Your child is paired with a subject specialist matched to their learning style. If the chemistry isn't 100% right, switch teachers anytime with zero hassle.",
    points: [
      "Vetted educators with proven subject expertise",
      "Interactive 1-on-1 digital board and audio/video",
      "No long-term contracts — switch mentors whenever needed",
    ],
    icon: Users,
    color: "var(--color-trust-blue)",
    bgLight: "var(--color-trust-blue-light)",
    watermark: "MENTOR",
  },
  {
    id: "wallet",
    badge: "03 · Step Three",
    title: "Transparent Coin Wallet",
    tagline: "1 Coin = ₹1 · Pay Only for Completed Classes",
    description:
      "No hidden fees, no subscriptions. Coins are held in safe escrow and only deducted after a class successfully concludes. Unused balance can be withdrawn anytime.",
    points: [
      "Strict 1:1 Rupee valuation with zero confusing math",
      "Escrow protection prevents billing for cancelled sessions",
      "Streak bonuses & achievement rewards incentivize daily habits",
    ],
    icon: Coins,
    color: "var(--color-peach)",
    bgLight: "var(--color-peach-light)",
    watermark: "WALLET",
  },
  {
    id: "parent-loop",
    badge: "04 · Step Four",
    title: "Parent AI Updates via WhatsApp",
    tagline: "Honest Summaries, Not Confusing Graphs",
    description:
      "After every session, parents receive a plain-English WhatsApp summary explaining what was learned, homework assigned, and next steps with 100% transparency.",
    points: [
      "Clear narrative recaps delivered directly to WhatsApp",
      "Direct homework tasks and upcoming schedule times",
      "One-tap 'Show me why' for deep-dive session analytics",
    ],
    icon: MessageCircle,
    color: "#10b981",
    bgLight: "#ecfdf5",
    watermark: "UPDATES",
  },
  {
    id: "syllabus",
    badge: "05 · Step Five",
    title: "Full Syllabus Access & Class Replays",
    tagline: "SCERT, State & ICSE Curriculums Covered",
    description:
      "Complete textbook alignment with instant class replay access and downloadable PDF revision notes so no concept is ever lost.",
    points: [
      "Full coverage from LKG to Class 12",
      "7-day session replays for post-class revision",
      "Structured formula sheets and concise teacher notes",
    ],
    icon: BookOpen,
    color: "var(--color-violet)",
    bgLight: "var(--color-violet-light)",
    watermark: "SYLLABUS",
  },
];

export function PhoneShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const lastStepRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "showcase-trigger",
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const count = FEATURE_STEPS.length;
          const newIndex = Math.min(
            count - 1,
            Math.max(0, Math.floor(self.progress * count))
          );
          if (newIndex !== lastStepRef.current) {
            lastStepRef.current = newIndex;
            setActiveStep(newIndex);
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const handleJumpToStep = (index: number) => {
    lastStepRef.current = index;
    setActiveStep(index);
    const st = ScrollTrigger.getById("showcase-trigger");
    if (st && sectionRef.current) {
      const stepProgress = (index + 0.1) / FEATURE_STEPS.length;
      const targetScroll = st.start + stepProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const currentFeature = FEATURE_STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      id="product-showcase"
      className="relative w-full h-[220vh] bg-slate-50 border-t border-slate-200/80"
    >
      {/* Sticky Native Viewport Container — Pinned by GPU Compositor */}
      <div className="sticky top-0 w-full h-screen max-h-screen flex flex-col justify-between overflow-hidden relative z-10 py-4 sm:py-8">
        {/* Top Scroll Scrub Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 z-30">
          <div
            ref={progressBarRef}
            className="h-full gradient-engage origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Dynamic Watermark in Background */}
        <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-[90px] sm:text-[140px] md:text-[200px] font-black uppercase text-slate-900/[0.035] select-none pointer-events-none transition-all duration-700 tracking-tighter leading-none -z-10 text-right">
          {currentFeature.watermark}
        </div>

        {/* Ambient Gradient Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full pointer-events-none opacity-25 transition-colors duration-700 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${currentFeature.color} 0%, transparent 68%)`,
          }}
        />

        {/* Header Bar */}
        <div className="container mx-auto px-4 shrink-0 text-center relative z-20">
          <div className="inline-flex items-center gap-2 bg-[var(--color-violet-light)] text-[var(--color-violet)] px-3.5 py-1 rounded-full text-xs font-semibold mb-2 border border-[var(--color-violet)]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-peach)]" />
            Scroll-Driven Showcase
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-tight">
            Experience Ekha <span className="gradient-text-trust">Screen by Screen</span>
          </h2>

          {/* Interactive Step Switcher Pills */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto py-2 no-scrollbar mt-2">
            {FEATURE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => handleJumpToStep(idx)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "gradient-trust text-white shadow-md shadow-violet/20 scale-105"
                      : "bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <step.icon className={`w-3 h-3 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{step.badge.split(" · ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN PINNED CONTENT AREA (Side-by-side Desktop, Stacked Mobile) */}
        {/* ========================================================= */}
        <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 lg:gap-16 relative z-20 min-h-0">
          {/* Content Column (Desktop: Left; Mobile: Bottom) */}
          <div className="order-2 md:order-1 w-full md:w-1/2 max-w-lg shrink-0 relative flex flex-col justify-center">
            {/* Smooth Hardware-Accelerated Cards Stack */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px]">
              {FEATURE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;

                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 p-5 sm:p-7 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] flex flex-col justify-between ${
                      isSelected
                        ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                        : "opacity-0 translate-y-2 pointer-events-none z-0"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                            {step.badge}
                          </span>
                          <div className="text-xs sm:text-sm font-bold text-[var(--color-violet)]">
                            {step.tagline}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[var(--color-foreground)] mb-1.5 leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 hidden sm:block">
                      {step.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone Mockup Column (Desktop: Right; Mobile: Top) */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center relative shrink-0">
            <div className="w-full max-w-[240px] sm:max-w-[270px] md:max-w-[320px] lg:max-w-[340px] transform-gpu">
              <PhoneShowcase activeScreen={activeStep} />
            </div>
          </div>
        </div>

        {/* Bottom Scroll Instruction Indicator */}
        <div className="container mx-auto px-4 shrink-0 text-center relative z-20 pb-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Scroll mouse wheel or swipe to scrub showcase ({activeStep + 1}/5)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
