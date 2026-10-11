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
    component: MentorMatchScreen,
    glow: "rgba(116, 119, 255, 0.4)", // Ekha Blue (#7477FF)
    name: "Mentor Match",
  },
  {
    component: AIDiscoveryScreen,
    glow: "rgba(167, 139, 250, 0.4)", // Ekha Purple (#A78BFA)
    name: "AI Discovery",
  },
  {
    component: LearningWalletScreen,
    glow: "rgba(255, 140, 66, 0.4)", // Ekha Orange (#FF8C42)
    name: "Learning Wallet",
  },
  {
    component: ParentRecapScreen,
    glow: "rgba(62, 232, 182, 0.4)", // Ekha Mint (#3EE8B6)
    name: "Parent Recap",
  },
  {
    component: SyllabusReplaysScreen,
    glow: "rgba(79, 209, 255, 0.4)", // Ekha Soft Blue (#4FD1FF)
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
