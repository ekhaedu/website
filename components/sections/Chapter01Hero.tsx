"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GetAppButton } from "../ui/GetAppButton";
import { LazyVideo } from "../ui/LazyVideo";
import { PhoneFrame } from "../phone/PhoneFrame";
import { MentorMatchScreen } from "../phone/screens/MentorMatchScreen";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export function Chapter01Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        pillRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          trustRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToCuriosity = () => {
    const el = document.getElementById("chapter-curiosity");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="chapter-01"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-8 overflow-hidden bg-white select-none"
    >
      {/* Soft Ambient Radial Light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(129, 140, 248, 0.14) 0%, rgba(116, 119, 255, 0.08) 35%, rgba(255, 140, 66, 0.05) 60%, transparent 80%)",
        }}
      />

      {/* Refined Modern Micro-Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(116, 119, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 65%, transparent 100%)",
        }}
      />

      {/* Top Main Hero Content Stack */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 w-full space-y-4 sm:space-y-6">
        {/* Announcement Pill */}
        <div ref={pillRef} className="opacity-0">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-xl px-3.5 sm:px-4 py-1.5 rounded-full border border-slate-200/90 shadow-xs hover:border-[#7477FF]/40 transition-all duration-300">
            <div className="flex items-center gap-1.5 text-xs font-black tracking-tight text-slate-900 border-r border-slate-200 pr-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7477FF]/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7477FF]" />
              </span>
              <span>
                EKHA<span className="text-[#7477FF]">.</span>
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9F43]" />
              <span>Personalized 1-on-1 Mentorship</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-bold text-[#7477FF] bg-[#EEF0FF] px-2 py-0.5 rounded-full border border-[#7477FF]/25">
              Foundational to High School
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          ref={headlineRef}
          className="opacity-0 text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold sm:font-black text-slate-950 leading-[1.1] sm:leading-[1.04] tracking-[-0.03em] max-w-3xl mx-auto"
        >
          Learning is a Journey. <br />
          <span className="relative inline-block mt-0.5 sm:mt-1">
            <span className="gradient-text-trust">Let&apos;s Discover Yours.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#7477FF]/40"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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

        {/* Subtitle */}
        <p
          ref={copyRef}
          className="opacity-0 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal px-2"
        >
          A live learning platform built on radical transparency: personal vetted teachers, collaborative interactive whiteboard, and coin escrow with zero subscription traps.
        </p>

        {/* Subject Discovery Strip */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-0.5 pb-0.5">
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

        {/* Action CTAs */}
        <div
          ref={ctaRef}
          className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-sm sm:max-w-md mx-auto pt-1"
        >
          <GetAppButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-trust text-white px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#7477FF]/25 hover:shadow-[#7477FF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group">
            <span>Claim Free Trial Session</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </GetAppButton>

          <button
            onClick={handleScrollToCuriosity}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-slate-800 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200/90 hover:border-[#7477FF]/30 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-5 h-5 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#7477FF] group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-[#7477FF] ml-0.5" />
            </div>
            <span>See How It Works</span>
          </button>
        </div>

        {/* Social Proof & Reassurance */}
        <div
          ref={trustRef}
          className="opacity-0 inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs text-slate-600 bg-slate-50/70 border border-slate-200/60 px-4 py-2 rounded-2xl shadow-2xs mx-auto"
        >
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669] shrink-0" />
            <span>Dedicated 1-on-1 Mentorship</span>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7477FF] shrink-0" />
            <span>Free Trial With Every Mentor</span>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C42] shrink-0" />
            <span>No Lock-In Contracts</span>
          </div>
        </div>
      </div>

      {/* Layered Visual Preview Anchor */}
      <div
        ref={visualRef}
        className="opacity-0 z-10 w-full max-w-4xl mx-auto my-6 flex items-center justify-center relative"
      >
        {/* Mascot Animation Sidekick (Floating on desktop) */}
        <div className="hidden lg:block absolute -left-12 bottom-0 w-36 h-36 z-20 pointer-events-none animate-float">
          <LazyVideo
            src="/mascot/mobile.mp4"
            poster="/mascot/mobile.png"
            width={160}
            height={160}
            className="w-full h-full object-contain drop-shadow-xl"
            autoPlay
            loop
            muted
            preload="none"
          />
        </div>

        {/* Center Live Phone Whiteboard Preview */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19.5] relative transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl rounded-[48px]">
          <PhoneFrame glowColor="rgba(116, 119, 255, 0.35)">
            <MentorMatchScreen />
          </PhoneFrame>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="z-10 pt-1">
        <button
          onClick={handleScrollToCuriosity}
          className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#7477FF] bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 hover:border-[#7477FF]/30 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
        >
          <span>Explore how your child learns</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#7477FF] animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
