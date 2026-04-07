"use client";

import React from "react";
import { User, Users, Calendar, X, ChevronRight } from "lucide-react";
import { LazyVideo } from "../ui/LazyVideo";

export function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const steps = [
    {
      icon: <User className="w-8 h-8 md:w-12 md:h-12" />,
      title: "AI Discovery Session",
      description:
        "A fun AI chat maps your child's strengths and interests before they ever meet a teacher.",
      stat: "01",
      details: {
        heading: "Smart Capability Analysis",
        points: [
          "Fun chat — no boring placement tests",
          "Builds a capability profile for the teacher",
          "Teacher creates a personalized learning plan",
          "Identifies strengths, interests & learning style",
        ],
      },
    },
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
      title: "The Perfect Mentor Match",
      description:
        "Free trial with every teacher. Switch anytime if the fit isn't right.",
      stat: "02",
      details: {
        heading: "Finding the Right Mentor",
        points: [
          "Free trial session before committing",
          "Switch teachers anytime",
          "Vetted teachers with proven experience",
          "Matched on personality & subject expertise",
        ],
      },
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Discipline Meets Flexibility",
      description:
        "Pick your own schedule. Reschedule when needed. Build a daily learning habit.",
      stat: "03",
      details: {
        heading: "Flexible Yet Consistent",
        points: [
          "Choose a schedule that works for your family",
          "Reschedule with notice — no rigid lock-ins",
          "Build habits with consistent daily slots",
          "Track progress to keep momentum",
        ],
      },
    },
  ];

  return (
    <section className="py-32 bg-white relative border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="md:hidden mb-8 relative z-10 overflow-visible">
          <span className="text-sm tracking-wide text-[var(--color-violet)] mb-4 block font-medium">
            Benefits for the Child
          </span>
          <div className="relative">
            <h2 className="text-5xl font-bold text-[var(--color-foreground)] leading-tight pr-28">
              The Ekha <span className="gradient-text-trust">Advantage</span>
            </h2>
            <div className="absolute -right-4 -bottom-6 w-42 h-42">
              <LazyVideo
                src="/mascot/advantages.mp4"
                poster="/mascot/advantages.png"
                height={300}
                width={200}
                className="w-full h-full object-contain pointer-events-none select-none"
                autoPlay
                loop
                muted
                preload="none"
              />
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex pointer-events-none select-none flex-col relative md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 pb-8">
          <div>
            <span className="text-[var(--color-violet)] text-sm tracking-wide font-medium mb-2 block">
              Benefits for the Child
            </span>
            <h2 className="text-3xl md:text-7xl font-bold text-[var(--color-foreground)] leading-none">
              The Ekha
              <br />
              <span className="gradient-text-trust">Advantage</span>
            </h2>
          </div>
          <LazyVideo
            src="/mascot/advantages.mp4"
            poster="/mascot/advantages.png"
            height={1000}
            width={500}
            className="-bottom-14 relative pointer-events-none select-none object-contain"
            autoPlay
            loop
            muted
            preload="none"
          />
          <p
            className="text-slate-400 max-w-md text-right text-base mt-8 md:mt-0 decorative-slashes"
            aria-hidden="true"
          >
            Built for Focus
            <br />
            <span className="decorative-slashes" aria-hidden="true">
              Consistent Growth
            </span>
          </p>
          <div className="h-px bg-slate-100 w-full absolute bottom-0" />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-0 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="border-t border-slate-200 py-6">
              <div className="flex items-start gap-5">
                <span className="text-sm text-black mt-1">{step.stat}</span>
                <div className="flex-1">
                  <div className="text-[var(--color-violet)] mb-2">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2 mt-3">
                    {step.details.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[var(--color-violet)] rounded-full mt-1.5 shrink-0" />
                        <span className="text-black text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-slate-200" />
        </div>

        {/* Desktop Layout */}
        <div
          className={`hidden md:flex flex-col md:flex-row gap-10 md:h-[340px] transition-all duration-500 ease-in-out ${
            expandedIndex !== null ? "md:gap-0" : "md:gap-6"
          }`}
        >
          {steps.map((step, index) => {
            const isExpanded = expandedIndex === index;
            const isHidden = expandedIndex !== null && expandedIndex !== index;

            const flexValue = isExpanded
              ? "1 0 100%"
              : isHidden
                ? "0 0 0px"
                : "1 0 33%";

            return (
              <div
                key={index}
                onClick={() => {
                  if (window.innerWidth >= 768) {
                    setExpandedIndex(isExpanded ? null : index);
                  }
                }}
                className={`group relative bg-white border border-slate-200 rounded-2xl
                  md:cursor-pointer cursor-default hover:border-[var(--color-violet)] hover:shadow-lg hover:shadow-violet/10 overflow-hidden
                  ${isHidden ? "pointer-events-none border-0" : ""}
                  w-full h-auto
                  md:h-full md:flex-[var(--d-flex)]
                `}
                style={
                  {
                    "--d-flex": flexValue,
                    opacity: isHidden ? 0 : 1,
                    padding: isHidden ? 0 : undefined,
                    margin: isHidden ? 0 : undefined,
                    transition:
                      "flex 0.5s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease",
                  } as React.CSSProperties
                }
              >
                <div
                  className={`absolute inset-0 bg-[var(--color-violet-light)] transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                />

                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(null);
                    }}
                    className="hidden md:block absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-slate-100 rounded-full transition-colors backdrop-blur-xs"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                )}

                <div
                  className={`relative z-10 transition-all duration-500
                    flex flex-col
                    ${isExpanded ? "md:flex-row md:items-center md:h-full" : "md:flex-col md:justify-between md:h-full"}
                    ${isHidden ? "md:opacity-0 md:invisible" : "md:opacity-100 md:visible"}
                  `}
                >
                  <div
                    className={`p-6 md:p-8 transition-all duration-500 flex flex-col justify-center
                      ${isExpanded ? "md:w-[35%] md:border-r md:border-slate-200 md:shrink-0 md:h-full" : "w-full md:h-full"}
                    `}
                  >
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <span
                        className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${isExpanded ? "text-[var(--color-violet)]" : "text-slate-300 group-hover:text-[var(--color-foreground)]"}`}
                      >
                        {step.stat}
                      </span>
                      {!isExpanded && (
                        <ChevronRight className="hidden md:block w-5 h-5 text-slate-400 group-hover:text-[var(--color-violet)] transition-colors" />
                      )}
                    </div>

                    <div
                      className={`mb-3 md:mb-4 transition-all duration-300 ${isExpanded ? "text-[var(--color-violet)]" : "text-[var(--color-foreground)] opacity-50 group-hover:opacity-100"}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold text-[var(--color-foreground)] mb-2 md:mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`
                    p-6 md:p-8 md:pl-12 md:w-[65%]
                    hidden
                    ${isExpanded ? "md:block animate-[fadeSlideIn_0.6s_ease-out_forwards]" : "md:hidden"}
                  `}
                  >
                    <h4 className="text-base md:text-lg font-bold text-[var(--color-foreground)] mb-3 md:mb-4 hidden md:block">
                      {step.details.heading}
                    </h4>

                    <ul className="space-y-2 md:space-y-3">
                      {step.details.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[var(--color-violet)] rounded-full mt-1.5 md:mt-2 shrink-0" />
                          <span className="text-black text-sm">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 w-full h-1 gradient-engage transform transition-transform duration-500 hidden md:block rounded-full ${isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
