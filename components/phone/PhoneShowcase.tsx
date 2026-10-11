"use client";

import React from "react";
import { PhoneFrame } from "./PhoneFrame";
import { AIDiscoveryScreen } from "./screens/AIDiscoveryScreen";
import { MentorMatchScreen } from "./screens/MentorMatchScreen";
import { LearningWalletScreen } from "./screens/LearningWalletScreen";
import { ParentRecapScreen } from "./screens/ParentRecapScreen";
import { SyllabusReplaysScreen } from "./screens/SyllabusReplaysScreen";

export interface PhoneShowcaseProps {
  activeScreen?: number;
  className?: string;
}

const SCREENS = [
  {
    component: AIDiscoveryScreen,
    glow: "rgba(112, 111, 211, 0.35)", // Violet
    name: "AI Discovery",
  },
  {
    component: MentorMatchScreen,
    glow: "rgba(59, 91, 165, 0.35)", // Trust Blue
    name: "Mentor Match",
  },
  {
    component: LearningWalletScreen,
    glow: "rgba(255, 126, 95, 0.35)", // Peach
    name: "Learning Wallet",
  },
  {
    component: ParentRecapScreen,
    glow: "rgba(16, 185, 129, 0.35)", // Emerald
    name: "Parent Recap",
  },
  {
    component: SyllabusReplaysScreen,
    glow: "rgba(112, 111, 211, 0.35)", // Violet
    name: "Syllabus & Replays",
  },
];

export function PhoneShowcase({
  activeScreen = 0,
  className = "",
}: PhoneShowcaseProps) {
  const safeIndex = Math.max(0, Math.min(activeScreen, SCREENS.length - 1));
  const current = SCREENS[safeIndex];

  return (
    <PhoneFrame className={className} glowColor={current.glow}>
      <div className="relative w-full h-full">
        {SCREENS.map((item, idx) => {
          const ScreenComponent = item.component;
          const isActive = idx === safeIndex;

          return (
            <div
              key={item.name}
              className={`absolute inset-0 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${
                isActive
                  ? "opacity-100 scale-100 pointer-events-auto z-10"
                  : "opacity-0 scale-98 pointer-events-none z-0"
              }`}
              aria-hidden={!isActive}
            >
              <ScreenComponent />
            </div>
          );
        })}
      </div>
    </PhoneFrame>
  );
}
