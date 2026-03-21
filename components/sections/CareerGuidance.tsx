"use client";

import React from "react";
import { Bot, UserCheck, ChevronDown } from "lucide-react";

export function CareerGuidance() {
  const [expandedCard, setExpandedCard] = React.useState<"ai" | "human" | null>(
    null,
  );

  const toggleCard = (card: "ai" | "human") => {
    setExpandedCard((prev) => (prev === card ? null : card));
  };

  return (
    <section className="py-24 bg-[#050505] md:bg-white">
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="md:hidden text-left mb-12 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-4 block">
            Career Guidance
          </span>
          <h2 className="text-5xl font-bold text-white mb-4 uppercase leading-12">
            Tech Assists. Humans {""}
            <span
              style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}
            >
              Guide.
            </span>
          </h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            AI identifies your child&apos;s strengths. A real expert calls you
            to explain the roadmap. Included free.
          </p>
        </div>

        {/* Desktop Header (unchanged) */}
        <div className="hidden md:block text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Technology Assists.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
              Humans Guide.
            </span>
          </h2>
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold font-mono border border-green-200 uppercase tracking-wide">
            Included Free for Every Student
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine AI analysis with human expertise to provide the most
            accurate career guidance for your child.
          </p>
        </div>

        {/* Mobile Cards (dark editorial) */}
        <div className="md:hidden space-y-0 relative z-10">
          {/* AI Analysis */}
          <div className="border-t border-white/10 py-6">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Step 1: AI Chat
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Your child chats with our AI to explore their interests. It
                  creates a summary of their passions and strengths.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Finds what they&apos;re truly passionate about
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Highlights their natural strengths
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Creates a detailed profile for expert review
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Human Expert */}
          <div className="border-t border-white/10 py-6">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 flex-shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  Step 2: Expert Call
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  A career specialist reviews the AI report, then calls you
                  directly to explain the guidance clearly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Professional validation of AI findings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Direct call with you to explain the roadmap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/50 text-sm">
                      Clear next steps for your child&apos;s journey
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <button 
              onClick={() => document.getElementById('parent-loop')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-white/80 transition-colors"
            >
              Next Chapter
            </button>
          </div>
        </div>

        {/* Desktop Cards (unchanged) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* AI Analysis Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl transform transition-transform group-hover:scale-[1.02]" />
            <div className="relative p-8 h-full border border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 text-black">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                AI Analysis
              </h3>
              <p className="text-slate-600 mb-6">
                Students chat with our advanced AI inside the app to explore
                interests. The AI prepares a structured summary of their
                inclinations and strengths.
              </p>
              <button
                onClick={() => toggleCard("ai")}
                className="flex items-center text-sm text-foreground font-medium hover:text-neon-purple transition-colors cursor-pointer"
              >
                <span>Data-driven insights</span>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCard === "ai" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Inline Expansion */}
              <div
                className={`grid transition-all duration-500 ease-out ${expandedCard === "ai" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-slate-200 space-y-3 text-slate-600 text-sm">
                    <p>
                      Our advanced AI interacts with your child through natural
                      conversations, quizzes, and interest-based scenarios.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-foreground">
                          Interest Parsing:
                        </strong>{" "}
                        Identifies underlying passions beyond just school
                        subjects.
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Strength Mapping:
                        </strong>{" "}
                        Highlights cognitive and creative strengths.
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Report Generation:
                        </strong>{" "}
                        Creates a detailed profile for the human expert to
                        review.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Human Expert Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl transform transition-transform group-hover:scale-[1.02]" />
            <div className="relative p-8 h-full border border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 text-black">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Human Expert Review
              </h3>
              <p className="text-slate-600 mb-6">
                A career guidance specialist reviews the AI report. Parents
                receive a direct phone call where guidance is explained clearly
                and responsibly.
              </p>
              <button
                onClick={() => toggleCard("human")}
                className="flex items-center text-sm text-foreground font-medium hover:text-neon-purple transition-colors cursor-pointer"
              >
                <span>Personalized consultation</span>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCard === "human" ? "rotate-180" : ""}`}
                />
              </button>

              {/* Inline Expansion */}
              <div
                className={`grid transition-all duration-500 ease-out ${expandedCard === "human" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-slate-200 space-y-3 text-slate-600 text-sm">
                    <p>
                      Technology provides the data, but humans provide the
                      wisdom. Our certified career counselors review the AI
                      findings.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-foreground">
                          Expert Analysis:
                        </strong>{" "}
                        We validate the AI&apos;s findings with professional
                        intuition.
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Parent Consultation:
                        </strong>{" "}
                        We call you directly to explain the roadmap.
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Actionable Path:
                        </strong>{" "}
                        You get clear next steps for your child&apos;s academic
                        journey.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
