"use client";

import React, { useState } from "react";
import {
  Video,
  Award,
  ShieldCheck,
  MessageSquare,
  MonitorPlay,
  Plus,
  Minus,
} from "../ui/expo-icons";

export function FeaturesGrid() {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Notes & Session Replays",
      headline: "Learning That Stays With You",
      description:
        "Instant access to detailed class notes and time-limited replays. Revise complex concepts at your own pace.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exams & Rewards",
      headline: "Performance That Gets Rewarded",
      description:
        "Top-performing students earn free wallet coins monthly. Real progress deserves real, tangible rewards.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Control",
      headline: "Accountability on Both Sides",
      description:
        "A private two-way rating system ensures every single session is respectful, productive, and high-quality.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "24/7 AI Companion",
      headline: "Doubts Cleared, Curiosity Sparked",
      description:
        "Safe, instant homework help anytime. Our AI clears doubts and sparks curiosity long after the live class ends.",
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Exclusive Webinars",
      headline: "Beyond Daily Classes",
      description:
        "Special guest sessions focused on career awareness and modern skills. Learning that goes far beyond the textbook.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Full Syllabus Access",
      headline: "All Chapters, All Units",
      description:
        "Unlimited access to SCERT, State, and ICSE curriculums. Every chapter and unit organized for a seamless journey.",
    },
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Title Area */}
          <div className="lg:w-1/3">
            <div className="">
              <span className="text-sm tracking-wide text-[var(--color-violet)] mb-4 block font-medium">
                Included Features
              </span>
              <h2 className="text-5xl font-bold text-[var(--color-foreground)] leading-tight md:leading-none md:sticky md:top-32">
                What
                <br className="" />{" "}
                <span className="gradient-text-trust">You Get</span>
              </h2>
            </div>
          </div>

          <div className="lg:w-2/3">
            {/* Mobile Accordion */}
            <div className="md:hidden space-y-3 relative z-10">
              {features.map((feature, index) => {
                const isOpen = mobileExpanded === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 p-5 cursor-pointer ${
                      isOpen
                        ? "bg-slate-50 border-[var(--color-violet)] shadow-sm"
                        : "bg-white border-slate-200/90"
                    }`}
                    onClick={() =>
                      setMobileExpanded(isOpen ? null : index)
                    }
                  >
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-[var(--color-violet)] text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-base font-bold text-[var(--color-foreground)] leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <span
                        className={`text-xl font-bold transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-[var(--color-violet)]" : "text-slate-400"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        isOpen
                          ? "max-h-48 opacity-100 mt-3 pt-3 border-t border-slate-200/70"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <h4 className="text-xs font-semibold text-[var(--color-violet)] mb-1">
                        {feature.headline}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Accordion */}
            <div className="hidden md:block border-t border-slate-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-b border-slate-200 group cursor-pointer transition-colors hover:bg-slate-50 rounded-lg"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={`p-5 md:p-8 transition-all duration-500 ${activeFeature === index ? "py-8 md:py-12" : "py-6 md:py-8"}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="text-black text-xs md:text-sm font-medium">
                          0{index + 1}
                        </span>
                        <h3
                          className={`text-lg md:text-3xl font-semibold transition-colors ${activeFeature === index ? "text-[var(--color-foreground)]" : "text-slate-400"}`}
                        >
                          {feature.title}
                        </h3>
                      </div>
                      <div
                        className={`transition-transform duration-300 ${activeFeature === index ? "rotate-180 text-[var(--color-violet)]" : "text-slate-400"}`}
                      >
                        {activeFeature === index ? <Minus /> : <Plus />}
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? "max-h-64 md:max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="pl-0 md:pl-12 max-w-xl mt-2 md:mt-0">
                        <h4 className="text-[var(--color-violet)] text-base mb-2 font-semibold">
                          {feature.headline}
                        </h4>
                        <p className="text-black leading-relaxed text-base md:text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
