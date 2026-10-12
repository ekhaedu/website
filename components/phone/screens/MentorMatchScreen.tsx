"use client";

import React, { useState, useRef } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Edit3,
  Target,
  PhoneOff,
  RotateCcw,
} from "../../ui/expo-icons";

interface Stroke {
  id: string;
  points: { x: number; y: number }[];
  color: string;
  width: number;
}

export function MentorMatchScreen() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [activeColor, setActiveColor] = useState("#7477FF");
  const [userStrokes, setUserStrokes] = useState<Stroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Drawing event handlers for interactive canvas
  const getCoordinates = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 280 / rect.width;
    const scaleY = 175 / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const coords = getCoordinates(e);
    setCurrentStroke({
      id: Math.random().toString(),
      points: [coords],
      color: activeColor,
      width: 2.5,
    });
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDrawing || !currentStroke) return;
    e.preventDefault();
    const coords = getCoordinates(e);
    setCurrentStroke((prev) =>
      prev ? { ...prev, points: [...prev.points, coords] } : null
    );
  };

  const handlePointerUp = () => {
    if (currentStroke && currentStroke.points.length > 0) {
      setUserStrokes((prev) => [...prev, currentStroke]);
    }
    setIsDrawing(false);
    setCurrentStroke(null);
  };

  const renderPathD = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    return points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, "");
  };

  return (
    <div className="h-full w-full bg-[#111113] text-white p-3 pt-12 pb-3 flex flex-col justify-between text-xs overflow-hidden select-none font-barlow">
      {/* 1. Exact Ekha Live Whiteboard Header (Whiteboard.tsx) */}
      <div className="flex items-center justify-between shrink-0 mb-1.5 px-1">
        <div className="flex items-center gap-2">
          {/* Pulsating Live Dot */}
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping absolute opacity-75" />
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] relative" />
          </div>
          <span className="font-bold text-white text-[10px] uppercase tracking-[1.2px]">
            LIVE WHITEBOARD
          </span>
          <span className="bg-[#7477FF]/20 text-[#A5A6F6] text-[8px] font-bold px-1.5 py-0.2 rounded border border-[#7477FF]/30">
            Page 1 / 1
          </span>
        </div>

        {/* Lesson Tag & Clear Canvas button */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setUserStrokes([])}
            className="p-1 rounded bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            title="Reset student strokes"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
          <div className="text-[8px] text-white/40 font-medium">
            Math · Polynomials
          </div>
        </div>
      </div>

      {/* 2. Authentic Whiteboard Canvas (Whiteboard.tsx) */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-white/10 flex-1 max-h-[185px] touch-none">
        {/* Subtle coordinate dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Interactive SVG Whiteboard */}
        <svg
          ref={svgRef}
          viewBox="0 0 280 175"
          className="w-full h-full cursor-crosshair"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Coordinate Axes */}
          <line
            x1="20"
            y1="110"
            x2="260"
            y2="110"
            stroke="#94A3B8"
            strokeWidth="1.2"
            strokeDasharray="2,2"
          />
          <line
            x1="120"
            y1="15"
            x2="120"
            y2="165"
            stroke="#94A3B8"
            strokeWidth="1.2"
            strokeDasharray="2,2"
          />

          {/* Axes Arrowheads */}
          <polygon points="260,110 255,108 255,112" fill="#94A3B8" />
          <polygon points="120,15 118,20 122,20" fill="#94A3B8" />

          {/* Parabola Curve: y = (x+2)(x-3) */}
          <path
            d="M 50,35 C 80,155 160,155 190,35"
            stroke="#7477FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Root Intercept 1: x = -2 */}
          <circle cx="78" cy="110" r="4" fill="#3EE8B6" />
          <text
            x="78"
            y="126"
            textAnchor="middle"
            fill="#0F172A"
            fontSize="9"
            fontWeight="bold"
            fontFamily="var(--font-barlow), sans-serif"
          >
            x = -2
          </text>

          {/* Root Intercept 2: x = 3 */}
          <circle cx="162" cy="110" r="4" fill="#3EE8B6" />
          <text
            x="162"
            y="126"
            textAnchor="middle"
            fill="#0F172A"
            fontSize="9"
            fontWeight="bold"
            fontFamily="var(--font-barlow), sans-serif"
          >
            x = 3
          </text>

          {/* Teacher's Mathematical Formulas */}
          <text
            x="30"
            y="26"
            fill="#0F172A"
            fontSize="10"
            fontWeight="bold"
            fontFamily="var(--font-barlow), sans-serif"
          >
            f(x) = (x + 2)(x − 3)
          </text>
          <text
            x="30"
            y="40"
            fill="#059669"
            fontSize="8.5"
            fontWeight="600"
            fontFamily="var(--font-barlow), sans-serif"
          >
            Roots: x = -2, x = 3 ✓
          </text>

          {/* Teacher Live Pen Annotation Indicator */}
          <g transform="translate(186, 32)">
            <circle cx="0" cy="0" r="3.5" fill="#F65F50" />
            <rect
              x="6"
              y="-7"
              width="68"
              height="14"
              rx="4"
              fill="rgba(15,23,42,0.85)"
            />
            <text
              x="10"
              y="3"
              fill="#FFFFFF"
              fontSize="6.5"
              fontWeight="bold"
              fontFamily="var(--font-barlow), sans-serif"
            >
              Dr. Ananya drawing
            </text>
          </g>

          {/* User's interactive drawings */}
          {userStrokes.map((s) => (
            <path
              key={s.id}
              d={renderPathD(s.points)}
              stroke={s.color}
              strokeWidth={s.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {currentStroke && (
            <path
              d={renderPathD(currentStroke.points)}
              stroke={currentStroke.color}
              strokeWidth={currentStroke.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>

        {/* Canvas Toolbar overlay in bottom corner */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/20 z-10">
          <span className="text-[7.5px] text-white/80 font-bold uppercase tracking-wider mr-0.5">
            Color:
          </span>
          <button
            onClick={() => setActiveColor("#7477FF")}
            className={`w-3 h-3 rounded-full bg-[#7477FF] border ${
              activeColor === "#7477FF" ? "border-white scale-110" : "border-transparent"
            }`}
          />
          <button
            onClick={() => setActiveColor("#F65F50")}
            className={`w-3 h-3 rounded-full bg-[#F65F50] border ${
              activeColor === "#F65F50" ? "border-white scale-110" : "border-transparent"
            }`}
          />
          <button
            onClick={() => setActiveColor("#10B981")}
            className={`w-3 h-3 rounded-full bg-[#10B981] border ${
              activeColor === "#10B981" ? "border-white scale-110" : "border-transparent"
            }`}
          />
          <span className="text-[7px] text-white/50 pl-1 border-l border-white/20">
            Draw here!
          </span>
        </div>
      </div>

      {/* 3. Real-Time Video Call Feeds (VideoCallModal.tsx) */}
      <div className="grid grid-cols-2 gap-2 shrink-0 my-1">
        {/* Remote Teacher Video Tile */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-2 h-[82px] relative overflow-hidden flex flex-col justify-between shadow-md">
          {/* Teacher Avatar / Cam Simulation */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7477FF] to-[#A78BFA] flex items-center justify-center font-bold text-white text-xs border border-white/20 shadow-sm shrink-0">
              AS
            </div>
            <div className="overflow-hidden">
              <div className="font-bold text-white text-[10px] truncate leading-tight">
                Dr. Ananya Sharma
              </div>
              <div className="text-[7.5px] text-white/50 truncate">
                Physics & Math Specialist
              </div>
            </div>
          </div>

          {/* Bottom Live Waveform & Status */}
          <div className="flex items-center justify-between bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 text-[8px]">
            <span className="flex items-center gap-1 text-[#3EE8B6] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3EE8B6]" />
              Speaking
            </span>
            {/* Audio waveform visualization */}
            <div className="flex items-center gap-0.5">
              <span className="w-0.5 h-2 bg-[#3EE8B6] rounded-full animate-pulse" />
              <span className="w-0.5 h-3 bg-[#3EE8B6] rounded-full animate-pulse delay-75" />
              <span className="w-0.5 h-1.5 bg-[#3EE8B6] rounded-full animate-pulse delay-150" />
            </div>
          </div>
        </div>

        {/* Local Student (You) Video Tile */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-2 h-[82px] relative overflow-hidden flex flex-col justify-between shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs border border-white/10 shrink-0">
              R
            </div>
            <div className="overflow-hidden">
              <div className="font-bold text-white text-[10px] leading-tight">
                You (Rohan)
              </div>
              <div className="text-[7.5px] text-white/50">Student View</div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 text-[8px]">
            <span className="text-white/60 font-medium">Camera Active</span>
            <span className="text-[#A78BFA] font-bold">HD</span>
          </div>
        </div>
      </div>

      {/* 4. Timestamp Dots Pill (useSessionTimestamps.ts in VideoCallModal) */}
      <div className="bg-black/40 border border-white/5 rounded-xl px-2.5 py-1 flex items-center justify-between shrink-0 text-[8.5px]">
        <div className="flex items-center gap-1.5 text-white/80 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
          <span>Dot Bookmarked: <strong>Roots Formula (14m)</strong></span>
        </div>
        <span className="text-[#A78BFA] font-bold">2 Dots</span>
      </div>

      {/* 5. Exact Video Call Floating Control Bar (VideoCallModal.tsx) */}
      <div className="bg-white rounded-full py-1.5 px-3 flex items-center justify-between shadow-xl shrink-0 mx-1">
        {/* Toggle Mic */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            isMuted ? "bg-red-100 text-red-600" : "bg-[#F3F4F6] text-slate-800"
          }`}
          title="Toggle Microphone"
        >
          {isMuted ? (
            <MicOff className="w-3.5 h-3.5" />
          ) : (
            <Mic className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Toggle Video */}
        <button
          onClick={() => setIsVideoEnabled(!isVideoEnabled)}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            !isVideoEnabled ? "bg-red-100 text-red-600" : "bg-[#F3F4F6] text-slate-800"
          }`}
          title="Toggle Video"
        >
          {!isVideoEnabled ? (
            <VideoOff className="w-3.5 h-3.5" />
          ) : (
            <Video className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Whiteboard Button (Active Purple from VideoCallModal) */}
        <button
          className="w-7 h-7 rounded-full bg-[#EDE9FE] text-[#8B5CF6] flex items-center justify-center shadow-xs"
          title="Whiteboard Active"
        >
          <Edit3 className="w-3.5 h-3.5" />
        </button>

        {/* Add Timestamp Dot Bookmark */}
        <button
          className="w-7 h-7 rounded-full bg-[#F3F4F6] text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors"
          title="Add Dot Bookmark"
        >
          <Target className="w-3.5 h-3.5" />
        </button>

        {/* End Call (Red button from VideoCallModal) */}
        <button
          className="w-7 h-7 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-sm hover:bg-red-600 transition-colors"
          title="End Call"
        >
          <PhoneOff className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
