"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GetAppButton } from "../ui/GetAppButton";
import { PhoneShowcase } from "../phone/PhoneShowcase";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
  Bot,
  Coins,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
} from "../ui/expo-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FEATURE_STEPS = [
  {
    id: "mentor",
    badge: "01 · Step One",
    title: "1-on-1 Vetted Teacher Matching",
    tagline: "Interactive Whiteboard · Free Trial With Every Mentor",
    description:
      "Your child solves problems live on a real-time collaborative canvas with top vetted subject specialists. If the chemistry isn't 100% right, switch mentors anytime with zero hassle.",
    points: [
      "Interactive digital whiteboard with live math plotting & tools",
      "Vetted educators with proven subject expertise",
      "No long-term contracts — switch mentors whenever needed",
    ],
    icon: Users,
    color: "#7477FF",
    bgLight: "#EEF0FF",
    textColor: "#312E81",
    watermark: "CLASSROOM",
  },
  {
    id: "discovery",
    badge: "02 · Step Two",
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
    color: "#A78BFA",
    bgLight: "#F5F2FE",
    textColor: "#312E81",
    watermark: "DISCOVERY",
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
    color: "#FF8C42",
    bgLight: "#FFF3EC",
    textColor: "#B43403",
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
    color: "#3EE8B6",
    bgLight: "#E6FBF5",
    textColor: "#064E3B",
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
    color: "#4FD1FF",
    bgLight: "#EBF9FF",
    textColor: "#0F172A",
    watermark: "SYLLABUS",
  },
];

export function HeroExperienceSection() {
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Showcase Animated Elements
  const showcaseHeaderRef = useRef<HTMLDivElement>(null);
  const showcaseCardsRef = useRef<HTMLDivElement>(null);
  const floatingBadgesRef = useRef<HTMLDivElement>(null);

  // Phone Anchors & Elements
  const initialPhoneSlotRef = useRef<HTMLDivElement>(null);
  const showcasePhoneSlotRef = useRef<HTMLDivElement>(null);
  const movingPhoneRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  const lastStepRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const calculateDeltas = () => {
        if (!initialPhoneSlotRef.current || !showcasePhoneSlotRef.current) {
          return { deltaX: 0, deltaY: 0, scale: 0.82 };
        }
        const iRect = initialPhoneSlotRef.current.getBoundingClientRect();
        const sRect = showcasePhoneSlotRef.current.getBoundingClientRect();

        const iCenterX = iRect.left + iRect.width / 2;
        const iCenterY = iRect.top + iRect.height / 2;
        const sCenterX = sRect.left + sRect.width / 2;
        const sCenterY = sRect.top + sRect.height / 2;

        const deltaX = sCenterX - iCenterX;
        const deltaY = sCenterY - iCenterY;

        const isMobile = window.innerWidth < 768;
        const targetScale = isMobile ? 0.82 : sRect.width / (iRect.width || 1);

        return { deltaX, deltaY, scale: targetScale };
      };

      const { deltaX, deltaY, scale } = calculateDeltas();

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          id: "hero-showcase-master",
          trigger: stageContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;

            // Update scrub progress bar
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${p})`;
            }

            // Phase 1 (0 to 0.28): Scale down phone and dock into showcase
            // Phase 2 (0.28 to 1.0): Step scrubbing in showcase
            if (p < 0.28) {
              if (lastStepRef.current !== 0) {
                lastStepRef.current = 0;
                setActiveStep(0);
              }
            } else {
              const stepProgress = (p - 0.28) / 0.72;
              const count = FEATURE_STEPS.length;
              const idx = Math.min(
                count - 1,
                Math.max(0, Math.floor(stepProgress * count))
              );
              if (idx !== lastStepRef.current) {
                lastStepRef.current = idx;
                setActiveStep(idx);
              }
            }
          },
        },
      });

      // 1. Floating trust badges fade out
      scrollTl.to(
        floatingBadgesRef.current,
        {
          opacity: 0,
          scale: 0.8,
          ease: "power2.inOut",
          duration: 0.12,
          pointerEvents: "none",
        },
        0
      );

      // 2. The Phone smoothly scales down and glides into the showcase slot
      scrollTl.to(
        movingPhoneRef.current,
        {
          x: deltaX,
          y: deltaY,
          scale: scale,
          ease: "power2.inOut",
          duration: 0.28,
        },
        0
      );

      // 3. Showcase Header smoothly slides in from top
      scrollTl.fromTo(
        showcaseHeaderRef.current,
        {
          opacity: 0,
          y: -25,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 0.28,
          pointerEvents: "auto",
        },
        0
      );

      // 4. Showcase Step Details Card smoothly slides in from below
      scrollTl.fromTo(
        showcaseCardsRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
          duration: 0.28,
          pointerEvents: "auto",
        },
        0
      );

      // 5. Timeline duration for scrubbing through the 5 steps
      scrollTl.to({}, { duration: 0.72 });

      // Handle window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, stageContainerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const handleScrollToShowcase = () => {
    const el = document.getElementById("product-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJumpToStep = (index: number) => {
    lastStepRef.current = index;
    setActiveStep(index);
    const st = ScrollTrigger.getById("hero-showcase-master");
    if (st && stageContainerRef.current) {
      const stepFraction = (index + 0.1) / FEATURE_STEPS.length;
      const targetProgress = 0.28 + stepFraction * 0.72;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const currentFeature = FEATURE_STEPS[activeStep];

  return (
    <div id="hero" className="relative w-full bg-white select-none">
      {/* ========================================================= */}
      {/* SCREEN 1: FULL-SCREEN HERO SECTION (100dvh) */}
      {/* Balanced, beautiful, rich typography, zero awkward voids */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden bg-white">
        {/* Soft radial aura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 18%, rgba(116,119,255,0.14) 0%, rgba(255,140,66,0.06) 42%, transparent 70%)",
          }}
        />

        {/* Refined modern micro-grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(116, 119, 255, 0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
          }}
        />

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto z-10 w-full space-y-4 sm:space-y-6">
          {/* Top Brand & Announcement Capsule */}
          <div className="animate-[fadeIn_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-xl px-3.5 sm:px-4 py-1.5 rounded-full border border-slate-200/90 shadow-xs hover:border-[#7477FF]/40 transition-all duration-300">
              <div className="flex items-center gap-1.5 text-xs font-black tracking-tight text-slate-900 border-r border-slate-200 pr-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7477FF]/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7477FF]" />
                </span>
                <span>EKHA<span className="text-[#7477FF]">.</span></span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9F43]" />
                <span>Admissions Open · LKG to Class 12</span>
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] font-bold text-[#7477FF] bg-[#EEF0FF] px-2 py-0.5 rounded-full border border-[#7477FF]/25">
                2026–27
              </span>
            </div>
          </div>

          {/* High-Impact Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold sm:font-black text-slate-950 leading-[1.1] sm:leading-[1.04] tracking-[-0.03em] max-w-3xl mx-auto">
            Master Every Subject <br />
            <span className="relative inline-block mt-0.5 sm:mt-1">
              <span className="gradient-text-trust">One-on-One</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#7477FF]/40"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C75 3 225 3 298 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal px-2">
            India&apos;s only 100% transparent live learning platform. Direct teacher matching, interactive whiteboard, and coin escrow with zero forced subscriptions.
          </p>

          {/* Subject Pills Preview Strip */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 pb-1">
            {[
              "📐 Mathematics",
              "⚡ Physics",
              "🧪 Chemistry",
              "💻 Coding",
              "📖 English",
              "CBSE & ICSE",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-[#7477FF]/40 hover:text-[#7477FF] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Ergonomic Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-sm sm:max-w-md mx-auto pt-1">
            <GetAppButton
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-trust text-white px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#7477FF]/25 hover:shadow-[#7477FF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
            >
              <span>Get the App</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </GetAppButton>

            <button
              onClick={handleScrollToShowcase}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-slate-800 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200/90 hover:border-[#7477FF]/30 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-5 h-5 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#7477FF] group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-[#7477FF] ml-0.5" />
              </div>
              <span>How Ekha Works</span>
            </button>
          </div>

          {/* Social Proof & Reassurance Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs text-slate-600 bg-slate-50/70 border border-slate-200/60 px-4 py-2 rounded-2xl shadow-2xs mx-auto">
            <div className="flex items-center gap-1 font-medium text-slate-700">
              <div className="flex items-center text-[#F8CC61]">
                <Star className="w-3 h-3 fill-[#F8CC61]" />
                <Star className="w-3 h-3 fill-[#F8CC61]" />
                <Star className="w-3 h-3 fill-[#F8CC61]" />
                <Star className="w-3 h-3 fill-[#F8CC61]" />
                <Star className="w-3 h-3 fill-[#F8CC61]" />
              </div>
              <span className="font-bold text-slate-900">4.9/5</span>
              <span className="text-slate-400">· 2,500+ Parents</span>
            </div>

            <span className="hidden sm:inline text-slate-300">•</span>

            <div className="flex items-center gap-1 text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <span>Free Trial With Every Mentor</span>
            </div>

            <span className="hidden sm:inline text-slate-300">•</span>

            <div className="flex items-center gap-1 text-slate-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7477FF] shrink-0" />
              <span>No Contracts</span>
            </div>
          </div>

          {/* Bottom Scroll Prompt */}
          <div className="pt-2">
            <button
              onClick={handleScrollToShowcase}
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#7477FF] bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 hover:border-[#7477FF]/30 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
            >
              <span>Explore Interactive Whiteboard</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#7477FF] animate-bounce group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SCREEN 2+: MOBILE GSAP SCROLLTRIGGER STAGE */}
      {/* Starts on the next screen with the phone centered, then scales down */}
      {/* ========================================================= */}
      <div
        ref={stageContainerRef}
        id="product-showcase"
        className="relative w-full h-[280vh] bg-white border-t border-slate-100/90"
      >
        {/* Sticky Fullscreen Stage (Pinned by GPU Compositor) */}
        <div className="sticky top-0 w-full h-[100dvh] max-h-screen overflow-hidden flex flex-col justify-between relative z-10 py-2 sm:py-4 select-none">
          {/* Top Scroll Scrub Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-200/80 z-40">
            <div
              ref={progressBarRef}
              className="h-full gradient-engage origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* Ambient Lighting */}
          <div
            className="absolute inset-0 pointer-events-none transition-colors duration-700 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, rgba(116,119,255,0.12) 0%, rgba(255,140,66,0.06) 45%, transparent 70%)",
            }}
          />

          {/* Subtle Grid */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(116, 119, 255, 0.12) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            }}
          />

          {/* Dynamic Watermark in Background */}
          <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-[80px] sm:text-[140px] md:text-[190px] font-black uppercase text-slate-900/[0.035] select-none pointer-events-none transition-all duration-700 tracking-tighter leading-none -z-10 text-right">
            {currentFeature.watermark}
          </div>

          {/* Ambient Gradient Glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full pointer-events-none opacity-25 transition-colors duration-700 -z-10"
            style={{
              background: `radial-gradient(circle, ${currentFeature.color} 0%, transparent 68%)`,
            }}
          />

          {/* ======================================================= */}
          {/* SHOWCASE HEADER: Fades and Slides In with GSAP */}
          {/* ======================================================= */}
          <div
            ref={showcaseHeaderRef}
            className="container mx-auto px-4 shrink-0 text-center relative z-20 pt-1 opacity-0 -translate-y-6"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#EEF0FF] text-[#7477FF] px-3 py-0.5 rounded-full text-xs font-semibold mb-1 border border-[#7477FF]/20 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#FF8C42]" />
              Scroll-Driven Showcase
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-tight">
              Experience Ekha <span className="gradient-text-trust">Screen by Screen</span>
            </h2>

            {/* Interactive Step Switcher Pills */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto py-1 no-scrollbar mt-1 pointer-events-auto">
              {FEATURE_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleJumpToStep(idx)}
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "gradient-trust text-white shadow-md shadow-[#7477FF]/25 scale-105"
                        : "bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200 hover:border-[#7477FF]/40 hover:bg-white"
                    }`}
                  >
                    <step.icon className={`w-3 h-3 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{step.badge.split(" · ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ======================================================= */}
          {/* MAIN STAGE ROW (Cards on Left, Showcase Phone Slot on Right) */}
          {/* ======================================================= */}
          <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 lg:gap-14 relative z-20 min-h-0">
            {/* Step Details Cards Stack (Left on Desktop, Bottom on Mobile) */}
            <div
              ref={showcaseCardsRef}
              className="order-2 md:order-1 w-full md:w-1/2 max-w-lg shrink-0 relative flex flex-col justify-center pointer-events-auto opacity-0 translate-y-8"
            >
              <div className="relative w-full h-[160px] sm:h-[200px] md:h-[260px]">
                {FEATURE_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isSelected = activeStep === idx;

                  return (
                    <div
                      key={step.id}
                      className={`absolute inset-0 p-4 sm:p-6 md:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] flex flex-col justify-between ${
                        isSelected
                          ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                          : "opacity-0 translate-y-2 pointer-events-none z-0"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
                            style={{ backgroundColor: step.color }}
                          >
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          <div>
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {step.badge}
                            </span>
                            <div
                              className="text-xs sm:text-sm font-bold"
                              style={{ color: step.color }}
                            >
                              {step.tagline}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-[var(--color-foreground)] mb-1 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {step.description}
                        </p>
                      </div>

                      <ul className="space-y-1 sm:space-y-1.5 border-t border-slate-100 pt-2 hidden sm:block">
                        {step.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Showcase Phone Target Slot (Right on Desktop, Center on Mobile) */}
            <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center relative shrink-0">
              <div
                ref={showcasePhoneSlotRef}
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[330px] aspect-[9/19.5] pointer-events-none opacity-0"
              />
            </div>
          </div>

          {/* ======================================================= */}
          {/* THE MASTER ANIMATING PHONE */}
          {/* Starts centered at full scale, then smoothly scales down with GSAP */}
          {/* ======================================================= */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <div
              ref={initialPhoneSlotRef}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] aspect-[9/19.5] pointer-events-auto"
            >
              {/* Floating Trust Badges (Fades out with GSAP) */}
              <div
                ref={floatingBadgesRef}
                className="absolute inset-0 pointer-events-none z-40 transition-opacity duration-300"
              >
                <div className="absolute -left-3 sm:-left-20 top-14 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 pointer-events-auto">
                  <div className="w-6 h-6 rounded-lg bg-[#3EE8B6]/20 flex items-center justify-center text-[#059669]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-800">100% Vetted</div>
                    <div className="text-[8px] text-slate-500">Free Trial Session</div>
                  </div>
                </div>

                <div className="absolute -right-3 sm:-right-20 bottom-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 pointer-events-auto">
                  <div className="w-6 h-6 rounded-lg bg-[#F8CC61]/25 flex items-center justify-center text-[#FF9F43]">
                    <Star className="w-3.5 h-3.5 fill-[#F8CC61]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-slate-800">4.9 / 5 Rating</div>
                    <div className="text-[8px] text-slate-500">Verified Parent Feedback</div>
                  </div>
                </div>
              </div>

              {/* The animating phone that smoothly scales down */}
              <div
                ref={movingPhoneRef}
                className="w-full h-full transform-gpu will-change-transform origin-center"
              >
                <PhoneShowcase activeScreen={activeStep} />
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="container mx-auto px-4 shrink-0 text-center relative z-20 pb-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-400 bg-white/70 backdrop-blur-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-slate-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Scroll mouse wheel or swipe to scrub showcase ({activeStep + 1}/5)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
