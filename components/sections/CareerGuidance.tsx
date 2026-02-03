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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
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
