"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Zap, BookOpen, Lightbulb, RotateCcw } from "lucide-react";

type SubjectType = "math" | "science" | "story";

export function Chapter02Curiosity() {
  const [activeSubject, setActiveSubject] = useState<SubjectType>("math");

  // Math Interactive Demo State
  const [mathRevealed, setMathRevealed] = useState(false);
  const [activeSquarePart, setActiveSquarePart] = useState<string | null>(null);

  // Science Interactive Demo State
  const [switchClosed, setSwitchClosed] = useState(true);

  // Story Interactive Demo State
  const [selectedCharacter, setSelectedCharacter] = useState("A Curious Robot");
  const [selectedSetting, setSelectedSetting] = useState("An Ancient Palace");
  const [selectedConflict, setSelectedConflict] = useState("A Missing Energy Crystal");

  return (
    <section
      id="chapter-curiosity"
      className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-100 select-none relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#EEF0FF] text-[#7477FF] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#7477FF]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>02 · Interactive Preview</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Every Child Learns Differently.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Choose a subject below to test-drive how an Ekha mentor turns complex formulas and concepts into hands-on, playful discovery.
          </p>
        </div>

        {/* 3 Interactive Pathway Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
          {/* Option A: Mathematics */}
          <button
            type="button"
            onClick={() => setActiveSubject("math")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
              activeSubject === "math"
                ? "bg-white border-[#7477FF] shadow-lg shadow-[#7477FF]/10 ring-2 ring-[#7477FF]/20 -translate-y-1"
                : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">📐</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  activeSubject === "math"
                    ? "bg-[#EEF0FF] text-[#7477FF]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                Visual Thinking
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Mathematics: The Mystery
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Why does (a+b)² work? Don&apos;t just memorize formulas—build the geometric square puzzle.
            </p>
          </button>

          {/* Option B: Science */}
          <button
            type="button"
            onClick={() => setActiveSubject("science")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
              activeSubject === "science"
                ? "bg-white border-[#3EE8B6] shadow-lg shadow-[#3EE8B6]/10 ring-2 ring-[#3EE8B6]/30 -translate-y-1"
                : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">⚡</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  activeSubject === "science"
                    ? "bg-[#E6FBF5] text-[#064E3B]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                Curiosity-Led
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Science: The Experiment
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              What powers a light bulb? Flip the virtual circuit switch and trace electron flow live.
            </p>
          </button>

          {/* Option C: Stories & English */}
          <button
            type="button"
            onClick={() => setActiveSubject("story")}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
              activeSubject === "story"
                ? "bg-white border-[#FF8C42] shadow-lg shadow-[#FF8C42]/10 ring-2 ring-[#FF8C42]/20 -translate-y-1"
                : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">📖</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  activeSubject === "story"
                    ? "bg-[#FFF3EC] text-[#B43403]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                Creative Spark
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Stories: Expression
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect characters and story sparks on an idea board to write compelling essays with confidence.
            </p>
          </button>
        </div>

        {/* Live Interactive Playground Stage */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {/* ========================================================= */}
          {/* PLAYGROUND A: MATHEMATICS GEOMETRIC PUZZLE */}
          {/* ========================================================= */}
          {activeSubject === "math" && (
            <div className="space-y-6 animate-[fadeIn_0.4s_ease-out]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#7477FF] uppercase tracking-wider">
                    Algebra Illustrated Geometrically
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    (a + b)² = a² + 2ab + b²
                  </h4>
                </div>
                <button
                  onClick={() => setMathRevealed(!mathRevealed)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold gradient-trust text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{mathRevealed ? "Reset Square" : "Deconstruct Equation"}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Visual Square Grid Interactive SVG */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                    {/* (a+b) x (a+b) Box */}
                    <div className="w-full h-full grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-1.5 p-1.5 bg-slate-200 rounded-xl">
                      {/* Box 1: a^2 */}
                      <div
                        onClick={() => setActiveSquarePart("a2")}
                        className={`rounded-lg p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                          activeSquarePart === "a2" || mathRevealed
                            ? "bg-[#7477FF] text-white shadow-md scale-[1.01]"
                            : "bg-[#7477FF]/80 text-white hover:bg-[#7477FF]"
                        }`}
                      >
                        <span className="text-xl font-black">a²</span>
                        <span className="text-[10px] opacity-80">(area: a × a)</span>
                      </div>

                      {/* Box 2: a*b */}
                      <div
                        onClick={() => setActiveSquarePart("ab1")}
                        className={`rounded-lg p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                          activeSquarePart === "ab1" || mathRevealed
                            ? "bg-[#FF8C42] text-white shadow-md scale-[1.01]"
                            : "bg-[#FF8C42]/80 text-white hover:bg-[#FF8C42]"
                        }`}
                      >
                        <span className="text-base font-black">ab</span>
                        <span className="text-[9px] opacity-80">a × b</span>
                      </div>

                      {/* Box 3: b*a */}
                      <div
                        onClick={() => setActiveSquarePart("ab2")}
                        className={`rounded-lg p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                          activeSquarePart === "ab2" || mathRevealed
                            ? "bg-[#FF8C42] text-white shadow-md scale-[1.01]"
                            : "bg-[#FF8C42]/80 text-white hover:bg-[#FF8C42]"
                        }`}
                      >
                        <span className="text-base font-black">ab</span>
                        <span className="text-[9px] opacity-80">b × a</span>
                      </div>

                      {/* Box 4: b^2 */}
                      <div
                        onClick={() => setActiveSquarePart("b2")}
                        className={`rounded-lg p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                          activeSquarePart === "b2" || mathRevealed
                            ? "bg-[#3EE8B6] text-slate-900 shadow-md scale-[1.01]"
                            : "bg-[#3EE8B6]/80 text-slate-900 hover:bg-[#3EE8B6]"
                        }`}
                      >
                        <span className="text-base font-black">b²</span>
                        <span className="text-[9px] opacity-80">b × b</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-3 font-medium">
                    Tap any quadrant to isolate its geometric contribution!
                  </span>
                </div>

                {/* Explanation Notes */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#EEF0FF] border border-[#7477FF]/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7477FF] mb-1">
                      <Lightbulb className="w-4 h-4" />
                      <span>The Ekha Teaching Method</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Instead of cramming rules, children see that a square of side (a+b) splits into four geometric rectangles: one large square a², two equal rectangles ab + ab (2ab), and one small square b².
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#7477FF]" />
                      <span>Large square area: <strong>a²</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#FF8C42]" />
                      <span>Two side rectangles: <strong>ab + ba = 2ab</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#3EE8B6]" />
                      <span>Small corner square: <strong>b²</strong></span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400 font-semibold block">
                      Teacher Match Principle:
                    </span>
                    <p className="text-xs text-slate-600">
                      Paired with educators who teach mathematical reasoning rather than rote memory tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* PLAYGROUND B: SCIENCE ELECTRIC CIRCUIT */}
          {/* ========================================================= */}
          {activeSubject === "science" && (
            <div className="space-y-6 animate-[fadeIn_0.4s_ease-out]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                    Hands-On Virtual Physics
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Closed vs Open Electrical Circuit
                  </h4>
                </div>
                <button
                  onClick={() => setSwitchClosed(!switchClosed)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    switchClosed
                      ? "bg-[#E6FBF5] text-[#064E3B] border border-[#3EE8B6] hover:bg-[#3EE8B6]/20"
                      : "gradient-trust text-white hover:shadow-md"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{switchClosed ? "Disconnect Switch (Open)" : "Connect Switch (Close Circuit)"}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Virtual Circuit Schematic Visual */}
                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-white flex flex-col items-center justify-center relative min-h-[240px]">
                  {/* Schematic Wire Loop */}
                  <div className="w-full max-w-xs h-36 border-2 border-dashed border-slate-700 rounded-2xl relative flex items-center justify-between px-6 py-4">
                    {/* Battery */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-14 bg-gradient-to-t from-slate-700 to-amber-500 rounded-md border border-white/20 flex flex-col justify-between items-center py-1 text-[8px] font-bold">
                        <span>+</span>
                        <span className="text-[7px]">9V</span>
                        <span>-</span>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1">Battery</span>
                    </div>

                    {/* Switch (Top Wire) */}
                    <div
                      onClick={() => setSwitchClosed(!switchClosed)}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 cursor-pointer hover:border-white transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[9px] text-slate-400">Switch:</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 rounded ${
                          switchClosed ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                        }`}
                      >
                        {switchClosed ? "CLOSED (ON)" : "OPEN (OFF)"}
                      </span>
                    </div>

                    {/* Dual Light Bulbs */}
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            switchClosed
                              ? "bg-amber-400 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.8)] scale-110"
                              : "bg-slate-800 text-slate-600"
                          }`}
                        >
                          💡
                        </div>
                        <span className="text-[9px] text-slate-400 mt-1">Bulb 1</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            switchClosed
                              ? "bg-amber-400 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.8)] scale-110"
                              : "bg-slate-800 text-slate-600"
                          }`}
                        >
                          💡
                        </div>
                        <span className="text-[9px] text-slate-400 mt-1">Bulb 2</span>
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Electron Animation Indicator */}
                  <div className="mt-4 text-center">
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                        switchClosed
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {switchClosed
                        ? "⚡ Current Flowing: 0.45A · Complete Closed Loop"
                        : "⭕ Current Halted: Infinite Resistance at Open Switch"}
                    </span>
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#E6FBF5] border border-[#3EE8B6]/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#064E3B] mb-1">
                      <Zap className="w-4 h-4 text-[#059669]" />
                      <span>Why Live Simulations Matter</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Physics formulas become second nature when students manipulate physical variables on screen. By toggling switches and seeing real-time resistance, children understand current flow intuitively before exams.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>Live plotting & schematic tools right inside the whiteboard.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>No abstract memorization — children test hypotheses live.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* PLAYGROUND C: STORIES & ENGLISH IDEA BOARD */}
          {/* ========================================================= */}
          {activeSubject === "story" && (
            <div className="space-y-6 animate-[fadeIn_0.4s_ease-out]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#FF8C42] uppercase tracking-wider">
                    Creative Writing & Essay Thinking
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Story Arc Builder
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Tap options below to see narrative branch out
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Selection Prompts */}
                <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      1. Choose Protagonist
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["A Curious Robot", "A Medieval Astrologist", "A Detective Pigeon"].map(
                        (char) => (
                          <button
                            type="button"
                            key={char}
                            onClick={() => setSelectedCharacter(char)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                              selectedCharacter === char
                                ? "bg-[#FF8C42] text-white shadow-xs font-bold"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {char}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      2. Choose Setting
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["An Ancient Palace", "A Submerged Coral City", "A Space Observatory"].map(
                        (set) => (
                          <button
                            type="button"
                            key={set}
                            onClick={() => setSelectedSetting(set)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                              selectedSetting === set
                                ? "bg-[#7477FF] text-white shadow-xs font-bold"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {set}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      3. Choose Inciting Incident
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {["A Missing Energy Crystal", "A Whispering Library Book", "An Inverted Gravity Glitch"].map(
                        (conf) => (
                          <button
                            type="button"
                            key={conf}
                            onClick={() => setSelectedConflict(conf)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                              selectedConflict === conf
                                ? "bg-[#3EE8B6] text-slate-900 shadow-xs font-bold"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {conf}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Real-Time Generated Narrative Web Preview */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF8C42] border-b border-white/10 pb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Story Hook Generated Live on Whiteboard:</span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-200 font-serif italic">
                    &ldquo;Under the moonlit towers of <strong className="text-[#A78BFA] not-italic">{selectedSetting}</strong>,{" "}
                    <strong className="text-[#FF8C42] not-italic">{selectedCharacter}</strong> uncovered{" "}
                    <strong className="text-[#3EE8B6] not-italic">{selectedConflict}</strong>. With time running out, they had to decode the secret glyphs before morning broke.&rdquo;
                  </p>

                  <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                    Mentors use live mind-mapping to help students overcome the blank page fear and build vocabulary naturally.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
