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
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Notes & Session Replays",
      headline: "Learning That Stays With You",
      description:
        "Notes available after every class. Replays are time-limited and non-downloadable, helping students revise at their own pace.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exams & Rewards",
      headline: "Performance That Gets Rewarded",
      description:
        "Top-performing students receive free coins every month based strictly on exam performance. Real learning, real rewards.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality & Accountability",
      headline: "Accountability on Both Sides",
      description:
        "Students rate teachers, and teachers rate students. Ratings are private and used for quality control to ensure respectful learning.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Homework Companion",
      headline: "24/7 Doubts & Curiosity",
      description:
        "Kids can chat with our AI anytime for homework help or just to explore new topics. It's safe, instant, and always helps clear doubts.",
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Webinars",
      headline: "Beyond Daily Classes",
      description:
        "Occasional webinars for exposure and career awareness. Optional participation to explore possibilities beyond textbooks.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Full Syllabus Access",
      headline: "All Chapters, All Units",
      description:
        "Access the complete syllabus for SCERT, State, and ICSE boards. Every chapter and unit is at your fingertips, so you never miss a beat.",
    },
  ];

  return (
    <section className="py-32 bg-background border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase leading-none sticky top-32">
              What
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
                [ You Get ]
              </span>
            </h2>
          </div>

          <div className="lg:w-2/3">
            <div className="border-t border-slate-200">
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
