"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Play,
  Volume2,
  Lock,
  UserCheck,
  RefreshCw,
} from "lucide-react";

export function Chapter05Trust() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section
      id="chapter-trust"
      className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-100 select-none relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#E6FBF5] text-[#064E3B] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#3EE8B6]/30 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>05 · Peace of Mind for Parents</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Know How Your Child Is Growing.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            No confusing graphs or dashboards you never open. Honest, plain-English learning summaries delivered straight to your WhatsApp after every single class.
          </p>
        </div>

        {/* Main Split Layout: WhatsApp Simulator on Left, Trust Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left WhatsApp Simulator Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#0B141A] rounded-3xl border border-slate-300/80 shadow-2xl overflow-hidden text-white font-sans">
              {/* WhatsApp App Header Bar */}
              <div className="bg-[#202C33] p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7477FF] flex items-center justify-center font-black text-white text-sm shadow-sm">
                    E
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      <span>Ekha Learning Updates</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white font-bold">
                        ✓
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">Verified Business Account</div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-medium">Today</div>
              </div>

              {/* Chat Canvas with Wallpaper */}
              <div className="p-4 space-y-3.5 min-h-[380px] bg-[#0B141A] relative flex flex-col justify-between">
                {/* Simulated Narrative Bubble */}
                <div className="bg-[#202C33] rounded-2xl rounded-tl-xs p-4 border border-white/5 space-y-2.5 text-xs text-slate-200 shadow-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-bold text-[#3EE8B6] text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Session Recap · Grade 10 Mathematics
                    </span>
                    <span className="text-[9px] text-slate-400">6:02 PM</span>
                  </div>

                  <p className="leading-relaxed">
                    Hi Mrs. Sharma! Rohan had an excellent 1-on-1 session with <strong className="text-white">Dr. Ananya</strong> today! 🎉
                  </p>

                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 space-y-1 text-[11px]">
                    <div>• <strong className="text-slate-100">Topic Mastered:</strong> Polynomial Roots & Factoring</div>
                    <div>• <strong className="text-slate-100">Practice Score:</strong> 8/10 on live whiteboard</div>
                    <div>• <strong className="text-slate-100">Homework:</strong> Exercise 4.2 (Q 1–5 in app notes)</div>
                  </div>

                  <p className="leading-relaxed text-slate-300">
                    Next class scheduled for <strong className="text-white">Thursday at 5:00 PM</strong>. Replay is ready in the Ekha app!
                  </p>

                  {/* Simulated Voice Note Bar */}
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-3 bg-black/20 p-2 rounded-xl">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 cursor-pointer hover:bg-emerald-600 transition-colors"
                    >
                      {isPlayingAudio ? <Volume2 className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4 ml-0.5 fill-white" />}
                    </button>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-slate-200">
                        {isPlayingAudio ? "Playing teacher voice recap..." : "Teacher Voice Note (0:12)"}
                      </div>
                      <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                        <div
                          className={`h-full bg-emerald-400 ${
                            isPlayingAudio ? "w-3/4 animate-pulse" : "w-1/3"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Label */}
                <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-white/5">
                  Representative post-session recap delivered automatically after every class.
                </div>
              </div>
            </div>
          </div>

          {/* Right Trust Pillars Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Pillar 1: Rigorous Vetting */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#EEF0FF] text-[#7477FF] flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Rigorous Mentor Vetting & Capability Demonstration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every educator completes a strict multi-step vetting process: subject mastery verification, interactive communication assessment, and real-time teaching demonstrations.
                </p>
              </div>
            </div>

            {/* Pillar 2: Daily WhatsApp Loop */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E6FBF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Direct Daily WhatsApp Recaps
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You stay informed without interrupting your workday. Summaries explain what was taught, homework tasks assigned, and exactly what concepts to review next.
                </p>
              </div>
            </div>

            {/* Pillar 3: Child Safety & Recording */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEF9EC] text-[#FF9F43] flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Child Safety & Encrypted Cloud Recordings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sessions are conducted 1-on-1 in a secure, distraction-free environment. All sessions are logged with strict child privacy compliance and 7-day replay availability.
                </p>
              </div>
            </div>

            {/* Pillar 4: Flexible Mentor Chemistry Guarantee */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF3EC] text-[#FF8C42] flex items-center justify-center shrink-0 mt-0.5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Chemistry Guarantee — Switch Mentors Anytime
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every child clicks with a different teaching personality. If the chemistry isn&apos;t 100% right after any class, switch mentors in 1 tap with zero cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
