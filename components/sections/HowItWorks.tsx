"use client";

import React from "react";
import { User, Users, Calendar, X, ChevronRight } from "lucide-react";

export function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const steps = [
    {
      icon: <User className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Undivided Attention (1:1)",
      description:
        "Your child is the sole focus. Starts with a free, compulsory Student Discovery session to map their needs.",
      stat: "01",
      details: {
        heading: "True 1:1 Learning Experience",
        points: [
          "No group classes, no distractions – just your child and their mentor",
          "Personalized pacing based on your child's learning speed",
          "Free Student Discovery session to understand strengths & gaps",
          "Curriculum adapted to individual goals, not generic syllabi",
        ],
      },
    },
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
      title: "The Perfect Mentor Match",
      description:
        "We find the teacher your child actually connects with. Free first introductory session with every teacher.",
      stat: "02",
      details: {
        heading: "Finding the Right Mentor",
        points: [
          "Free trial session with every new teacher before committing",
          "Switch mentors anytime if the fit isn't right",
          "Vetted teachers with proven teaching experience",
          "Match based on teaching style, personality, and subject expertise",
        ],
      },
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Discipline Meets Flexibility",
      description:
        "A structured routine that fits your life. Consistent slots help build the habit of daily learning.",
      stat: "03",
      details: {
        heading: "Flexible Yet Consistent",
        points: [
          "Choose your own class schedule that works for your family",
          "Reschedule with advance notice – no rigid lock-ins",
          "Build learning habits with consistent daily/weekly slots",
          "Progress tracking to keep momentum strong",
        ],
      },
    },
  ];

  return (
    <section className="py-32 bg-background relative border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b border-slate-200 pb-8">
          <div>
            <span className="text-neon-purple font-mono text-sm tracking-widest uppercase mb-2 block">
              Benefits for the Child
            </span>
            <h2 className="text-3xl md:text-7xl font-bold text-foreground uppercase leading-none">
              The Ekha
              <br />
              Advantage
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-right font-mono text-sm mt-8 md:mt-0">
            {"// BUILT FOR FOCUS"}
            <br />
            {"// CONSISTENT GROWTH"}
          </p>
        </div>

        {/* 
          Main Card Container 
          - Desktop Fixed Height: h-[340px]
        */}
        <div
          className={`flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out md:h-[340px] ${
            expandedIndex !== null ? "md:gap-0" : "md:gap-6"
          }`}
        >
          {steps.map((step, index) => {
            const isExpanded = expandedIndex === index;
            const isHidden = expandedIndex !== null && expandedIndex !== index;

            return (
              <div
                key={index}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`group relative bg-slate-50 border border-slate-200 hover:border-neon-purple cursor-pointer overflow-hidden
                  ${isHidden ? "pointer-events-none border-0" : ""}
                `}
                style={{
                  // Desktop Width Animation
                  flex: isExpanded
                    ? "1 0 100%"
                    : isHidden
                      ? "0 0 0px" // Shrink to 0
                      : "1 0 33%", // Default 1/3

                  // Opacity
                  opacity: isHidden ? 0 : 1,

                  // Margin/Padding removal for hidden items
                  padding: isHidden ? 0 : undefined,
                  margin: isHidden ? 0 : undefined,

                  // Transition settings
                  transition:
                    "flex 0.5s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease",
                }}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-neon-purple/5 transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                />

                {/* Close Button */}
                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(null);
                    }}
                    className="absolute top-4 right-4 z-50 p-2 bg-slate-50/50 hover:bg-slate-200 rounded-full transition-colors backdrop-blur-xs"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                )}

                {/* Internal Content Wrapper */}
                <div
                  className={`relative z-10 h-full transition-all duration-500
                    ${isExpanded ? "flex flex-col md:flex-row md:items-center" : "flex flex-col justify-between"}
                    ${isHidden ? "opacity-0 invisible" : "opacity-100 visible"}
                  `}
                >
                  {/* Left Side Content */}
                  <div
                    className={`p-6 md:p-8 transition-all duration-500 h-full flex flex-col justify-center
                      ${isExpanded ? "md:w-[35%] md:border-r md:border-slate-200 md:shrink-0" : "w-full"}
                    `}
                  >
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <span
                        className={`font-mono text-2xl md:text-4xl transition-colors duration-300 ${isExpanded ? "text-neon-purple" : "text-slate-400 group-hover:text-foreground"}`}
                      >
                        {step.stat}
                      </span>
                      {!isExpanded && (
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-neon-purple transition-colors" />
                      )}
                    </div>

                    <div
                      className={`mb-3 md:mb-4 transition-all duration-300 ${isExpanded ? "text-neon-purple" : "text-foreground opacity-50 group-hover:opacity-100"}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg md:text-2xl font-medium text-foreground mb-2 md:mb-3 uppercase leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 font-mono text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Right Side - Expanded Details */}
                  {isExpanded && (
                    <div className="p-6 md:p-8 md:pl-12 md:w-[65%] animate-[fadeSlideIn_0.6s_ease-out_forwards]">
                      <h4 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4 uppercase">
                        {step.details.heading}
                      </h4>
                      <ul className="space-y-2 md:space-y-3">
                        {step.details.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3"
                            style={{
                              opacity: 0,
                              animation: `fadeSlideIn 0.4s ease-out ${i * 100 + 100}ms forwards`,
                            }}
                          >
                            <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-1.5 md:mt-2 shrink-0" />
                            <span className="text-slate-600 font-mono text-xs md:text-sm">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Border Line */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-neon-purple to-transparent transform transition-transform duration-500 ${isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
