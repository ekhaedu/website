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
} from "lucide-react";

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
  },
];

export function PhoneShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // Responsive animation config
      const mm = gsap.matchMedia();

      // MOBILE CONFIG (max-width: 767px): Light scroll-driven reveal + step tracking
      mm.add("(max-width: 767px)", () => {
        const stepElements = gsap.utils.toArray<HTMLElement>(".mobile-feature-step");

        stepElements.forEach((stepEl, index) => {
          ScrollTrigger.create({
            trigger: stepEl,
            start: "top 65%",
            end: "bottom 45%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
          });
        });

        if (!prefersReducedMotion && phoneWrapperRef.current) {
          gsap.fromTo(
            phoneWrapperRef.current,
            { y: 20, scale: 0.96 },
            {
              y: -10,
              scale: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
              },
            }
          );
        }
      });

      // DESKTOP CONFIG (min-width: 768px): Pinned presentation sequence
      mm.add("(min-width: 768px)", () => {
        const stepElements = gsap.utils.toArray<HTMLElement>(".desktop-feature-step");

        stepElements.forEach((stepEl, index) => {
          ScrollTrigger.create({
            trigger: stepEl,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
          });
        });

        if (!prefersReducedMotion && phoneWrapperRef.current) {
          gsap.to(phoneWrapperRef.current, {
            rotation: 1.5,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product-showcase"
      className="relative py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background radial gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(112,111,211,0.15) 0%, rgba(59,91,165,0.08) 40%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--color-violet-light)] text-[var(--color-violet)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[var(--color-violet)]/20 shadow-xs">
            <Sparkles className="w-4 h-4 text-[var(--color-peach)]" />
            Interactive Product Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--color-foreground)] tracking-tight leading-tight mb-4">
            Experience Ekha <br />
            <span className="gradient-text-trust">Screen by Screen</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            From your child&apos;s first fun discovery session to verified 1-on-1 live mentoring and instant parent WhatsApp summaries.
          </p>

          {/* Interactive Mobile Step Switcher Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto py-3 px-1 no-scrollbar mt-6 -mx-4 sm:mx-0">
            {FEATURE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "gradient-trust text-white shadow-md shadow-violet/20 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <step.icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{step.badge.split(" · ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT (Natural scroll with sticky phone preview) */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          {/* Sticky Phone Viewport Container */}
          <div className="sticky top-20 z-20 pt-2 pb-4 bg-slate-50/90 backdrop-blur-md">
            <div ref={phoneWrapperRef} className="max-w-[290px] mx-auto transition-transform duration-300">
              <PhoneShowcase activeScreen={activeStep} />
            </div>
            {/* Active Feature Name Pill under Phone */}
            <div className="text-center mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[var(--color-foreground)] shadow-xs">
                {FEATURE_STEPS[activeStep].title}
              </span>
            </div>
          </div>

          {/* Mobile Content Feature Cards (trigger activeStep on scroll) */}
          <div className="space-y-8 mt-6 relative z-10">
            {FEATURE_STEPS.map((step, index) => {
              const isCurrent = activeStep === index;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`mobile-feature-step p-6 rounded-2xl bg-white border transition-all duration-300 shadow-sm ${
                    isCurrent
                      ? "border-[var(--color-violet)] ring-2 ring-[var(--color-violet)]/15 shadow-md"
                      : "border-slate-200 opacity-80"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {step.badge}
                      </span>
                      <div className="text-xs font-semibold text-[var(--color-violet)]">
                        {step.tagline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-3">
                    {step.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
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

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Side-by-side pinned storytelling) */}
        {/* ======================================================== */}
        <div ref={containerRef} className="hidden md:flex gap-12 lg:gap-16 items-start relative">
          {/* Left Column: Feature Content Steps */}
          <div className="w-1/2 space-y-24 py-8">
            {FEATURE_STEPS.map((step, index) => {
              const isCurrent = activeStep === index;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`desktop-feature-step p-8 rounded-3xl bg-white border transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? "border-[var(--color-violet)] shadow-xl shadow-violet/10 ring-2 ring-[var(--color-violet)]/20 scale-[1.02]"
                      : "border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-90"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {step.badge}
                      </span>
                      <div className="text-xs font-semibold text-[var(--color-violet)]">
                        {step.tagline}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] mb-3 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                    {step.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pinned Sticky Phone Frame */}
          <div className="w-1/2 sticky top-28 flex flex-col items-center justify-center py-4 relative" style={{ perspective: "1200px" }}>
            {/* Cinematic Watermark Typography */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] lg:text-[160px] font-black uppercase text-slate-900/[0.03] select-none pointer-events-none transition-all duration-700 tracking-tighter leading-none -z-10 text-right pr-6">
              {FEATURE_STEPS[activeStep].id}
            </div>

            <div
              className="max-w-[340px] w-full transition-transform duration-500 ease-out"
              style={{
                transform: `rotateY(${activeStep % 2 === 0 ? "-3deg" : "3deg"}) rotateX(2deg)`,
              }}
            >
              <PhoneShowcase activeScreen={activeStep} />
            </div>

            {/* Desktop Step Navigation Pill */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FEATURE_STEPS[activeStep].color }} />
                <span>Step {activeStep + 1} of {FEATURE_STEPS.length}: {FEATURE_STEPS[activeStep].title}</span>
              </div>

              {/* Desktop Indicator Dots */}
              <div className="flex items-center gap-2">
                {FEATURE_STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? "w-8 bg-[var(--color-violet)]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to feature ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
