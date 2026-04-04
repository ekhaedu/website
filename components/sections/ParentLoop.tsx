"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";

export function ParentLoop() {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <section id="parent-loop" className="py-24 bg-[var(--color-navy)] md:bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative w-screen">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* WhatsApp Mockup */}
          <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="bg-[#0b141a] rounded-3xl md:border md:border-slate-200 border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#202c33] p-4 flex items-center gap-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-full gradient-trust flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    Ekha Updates
                  </div>
                  <div className="text-slate-400 text-xs">Business Account</div>
                </div>
              </div>

              <div className="relative p-4 space-y-4 min-h-[300px] z-0 overflow-hidden bg-[#0b141a]">
                {/* WhatsApp Wallpaper Overlay */}
                <div
                  className="absolute inset-0 -z-10 opacity-[0.07] invert"
                  style={{
                    backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
                    backgroundSize: "cover",
                  }}
                />

                <div className="flex justify-center relative z-10">
                  <span className="bg-[#202c33] text-slate-400 text-xs px-3 py-1 rounded-lg shadow-sm">
                    Today
                  </span>
                </div>

                {/* AI Narrative Summary */}
                <div className="bg-[#202c33] rounded-lg rounded-tl-none p-4 max-w-[85%] shadow-sm relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[var(--color-peach)]" />
                    <span className="text-xs font-semibold text-[var(--color-peach)]">AI Session Summary</span>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed mb-3">
                    Rohan had a great math session today! 🎉 He mastered polynomial basics and scored <strong className="text-white">8/10</strong> on practice questions. He&apos;s ready to move to factorization next.
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    📝 <strong className="text-white">Homework:</strong> Exercise 4.2 (Q1-5)
                    <br />
                    ⏰ <strong className="text-white">Next class:</strong> Tomorrow, 4:30 PM
                  </p>

                  {/* Expandable raw data */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-1.5 text-[var(--color-violet-light)] text-xs font-medium hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Show me the details</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-400 ${showDetails ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                    <div className="space-y-2 border-t border-white/10 pt-3">
                      <div className="bg-[#111b21] p-2.5 rounded-md border-l-3 border-green-500">
                        <div className="text-[10px] text-green-400 font-bold mb-0.5">Engagement</div>
                        <div className="text-slate-300 text-xs">Very active, answered most questions correctly</div>
                      </div>
                      <div className="bg-[#111b21] p-2.5 rounded-md border-l-3 border-blue-500">
                        <div className="text-[10px] text-blue-400 font-bold mb-0.5">Progress</div>
                        <div className="text-slate-300 text-xs">Mastered standard identities, needs factorization practice</div>
                      </div>
                      <div className="bg-[#111b21] p-2.5 rounded-md border-l-3 border-yellow-500">
                        <div className="text-[10px] text-yellow-400 font-bold mb-0.5">Teacher Note</div>
                        <div className="text-slate-300 text-xs">Focused and disciplined throughout the session</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 text-right mt-2">
                    4:32 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 order-1 z-10 lg:order-2">
            {/* Mobile Text */}
            <div className="md:hidden relative z-10">
              <span className="text-sm tracking-wide text-[var(--color-trust-blue-light)] mb-4 block font-medium">
                For Parents
              </span>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Witness Their{" "}
                <span className="gradient-text-violet" style={{ WebkitTextFillColor: "transparent" }}>
                  Potential Unfold
                </span>
              </h2>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                No more guessing. Get friendly, AI-powered session summaries that tell you exactly how your child is doing — not just raw data.
              </p>

              <div className="space-y-0">
                {[
                  {
                    title: "AI-powered summaries",
                    desc: "Easy-to-read session recaps, not confusing metrics",
                  },
                  {
                    title: "Honest progress tracking",
                    desc: "Know strengths and areas that need work",
                  },
                  {
                    title: "Homework & next steps",
                    desc: "Clear action items after every class",
                  },
                  {
                    title: "\"Show me why\" transparency",
                    desc: "Tap to see the raw data behind every summary",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-white/10 py-4 flex items-start gap-4"
                  >
                    <span className="text-xs text-white/30 mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-white/10" />
              </div>
            </div>

            {/* Desktop Text */}
            <div className="hidden md:block">
              <div className="inline-flex items-center gap-2 bg-[var(--color-trust-blue-light)] text-[var(--color-trust-blue)] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <MessageCircle className="w-4 h-4" />
                AI-Powered Updates
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-6">
                Witness Their{" "}
                <span className="gradient-text-trust">
                  Potential Unfold
                </span>
              </h2>
              <p className="text-slate-500 xl:w-1/2 text-lg mb-8 leading-relaxed">
                No more raw metrics to decipher. Our AI translates every session into a clear, friendly summary — so you always know how your child is doing.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "AI-powered summaries",
                    desc: "Easy-to-read session recaps, not confusing metrics",
                  },
                  {
                    title: "Honest progress tracking",
                    desc: "Know strengths and areas that need work",
                  },
                  {
                    title: "Homework & next steps",
                    desc: "Clear action items after every class",
                  },
                  {
                    title: "\"Show me why\" transparency",
                    desc: "Tap to see the raw data behind every summary",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "var(--color-trust-blue)" }} />
                    <div>
                      <h4 className="text-[var(--color-foreground)] font-medium">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <LazyVideo
            src="/mascot/mobile.mp4"
            poster="/mascot/mobile.png"
            height={1200}
            width={700}
            className="hidden xl:block -right-32 h-full absolute z-1 object-contain pointer-events-none select-none"
            autoPlay
            loop
            muted
            preload="none"
          />
        </div>
      </div>
    </section>
  );
}
