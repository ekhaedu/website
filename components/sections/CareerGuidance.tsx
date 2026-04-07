"use client";

import React from "react";
import { Bot, UserCheck, ChevronDown, Sparkles } from "lucide-react";

export function CareerGuidance() {
  const [expandedCard, setExpandedCard] = React.useState<"ai" | "human" | null>(null);

  const toggleCard = (card: "ai" | "human") => {
    setExpandedCard((prev) => (prev === card ? null : card));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-[var(--color-foreground)] mb-4">
            Technology Assists.{" "}
            <span className="gradient-text-trust">
              Humans Guide.
            </span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-green-200">
            <Sparkles className="w-4 h-4" />
            Included Free for Every Student
          </div>
          <p className="text-black text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We combine AI analysis with human expertise to provide the most
            accurate career guidance for your child.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* AI Analysis Card */}
          <div className="relative group">
            <div className="relative p-8 h-full border border-slate-200 rounded-2xl bg-white hover:border-[var(--color-violet)] hover:shadow-lg hover:shadow-violet/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl gradient-engage flex items-center justify-center mb-6 text-white">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                AI Analysis
              </h3>
              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
                Students chat with our advanced AI inside the app to explore
                interests. The AI prepares a structured summary of their
                inclinations and strengths.
              </p>
              <button
                onClick={() => toggleCard("ai")}
                className="flex items-center text-sm text-[var(--color-violet)] font-medium hover:text-[var(--color-violet-dark)] transition-colors cursor-pointer"
              >
                <span>Data-driven insights</span>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCard === "ai" ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${expandedCard === "ai" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-slate-100 space-y-3 text-slate-500 text-sm">
                    <p>
                      Our advanced AI interacts with your child through natural
                      conversations, quizzes, and interest-based scenarios.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-[var(--color-foreground)]">Interest Parsing:</strong>{" "}
                        Identifies underlying passions beyond just school subjects.
                      </li>
                      <li>
                        <strong className="text-[var(--color-foreground)]">Strength Mapping:</strong>{" "}
                        Highlights cognitive and creative strengths.
                      </li>
                      <li>
                        <strong className="text-[var(--color-foreground)]">Report Generation:</strong>{" "}
                        Creates a detailed profile for the human expert to review.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Human Expert Card */}
          <div className="relative group">
            <div className="relative p-8 h-full border border-slate-200 rounded-2xl bg-white hover:border-[var(--color-trust-blue)] hover:shadow-lg hover:shadow-trust-blue/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-trust-blue)] flex items-center justify-center mb-6 text-white">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                Human Expert Review
              </h3>
              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
                A career guidance specialist reviews the AI report. Parents
                receive a direct phone call where guidance is explained clearly
                and responsibly.
              </p>
              <button
                onClick={() => toggleCard("human")}
                className="flex items-center text-sm text-[var(--color-trust-blue)] font-medium hover:text-[var(--color-trust-blue-dark)] transition-colors cursor-pointer"
              >
                <span>Personalized consultation</span>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCard === "human" ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${expandedCard === "human" ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-slate-100 space-y-3 text-slate-500 text-sm">
                    <p>
                      Technology provides the data, but humans provide the
                      wisdom. Our certified career counselors review the AI findings.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-[var(--color-foreground)]">Expert Analysis:</strong>{" "}
                        We validate the AI&apos;s findings with professional intuition.
                      </li>
                      <li>
                        <strong className="text-[var(--color-foreground)]">Parent Consultation:</strong>{" "}
                        We call you directly to explain the roadmap.
                      </li>
                      <li>
                        <strong className="text-[var(--color-foreground)]">Actionable Path:</strong>{" "}
                        You get clear next steps for your child&apos;s academic journey.
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
