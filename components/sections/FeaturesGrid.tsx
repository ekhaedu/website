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
} from "lucide-react";
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
      headline: "24/7 Doubts & Curiosity",
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
    <section className="py-32 bg-[#050505] md:bg-background md:border-t md:border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Title Area */}
          <div className="lg:w-1/3">
            {/* Mobile Title */}
            <div className="md:hidden mb-8 relative z-10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-4 block">
                Included Features
              </span>
              <h2 className="text-5xl font-bold text-white uppercase leading-[0.85]">
                What You&nbsp;
                <span
                  style={{
                    WebkitTextStroke: "1.5px white",
                    color: "transparent",
                  }}
                >
                  Get
                </span>
              </h2>
            </div>
            {/* Desktop Title */}
            <h2 className="hidden md:block text-4xl md:text-6xl font-bold text-foreground uppercase leading-none sticky top-32">
              What
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
                [ You Get ]
              </span>
            </h2>
          </div>

          <div className="lg:w-2/3">
            {/* Mobile Accordion (dark editorial) */}
            <div className="md:hidden space-y-0 border-t border-white/10 relative z-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 py-6 cursor-pointer"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-white">
                      {feature.title}
                    </h3>
                    <span className="text-xl font-light text-white/60">
                      {mobileExpanded === index ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      mobileExpanded === index
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Accordion (unchanged) */}
            <div className="hidden md:block border-t border-slate-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-b border-slate-200 group cursor-pointer transition-colors hover:bg-slate-50"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={`p-5 md:p-8 transition-all duration-500 ${activeFeature === index ? "py-8 md:py-12" : "py-6 md:py-8"}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="font-mono text-slate-500 text-xs md:text-sm">
                          0{index + 1}
                        </span>
                        <h3
                          className={`text-lg md:text-3xl font-medium uppercase transition-colors ${activeFeature === index ? "text-foreground" : "text-slate-500"}`}
                        >
                          {feature.title}
                        </h3>
                      </div>
                      <div
                        className={`transition-transform duration-300 ${activeFeature === index ? "rotate-180 text-neon-purple" : "text-slate-400"}`}
                      >
                        {activeFeature === index ? <Minus /> : <Plus />}
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? "max-h-64 md:max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="pl-0 md:pl-12 max-w-xl mt-2 md:mt-0">
                        <h4 className="text-neon-purple font-mono text-xs md:text-sm mb-2 uppercase tracking-wider">
                          {feature.headline}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
