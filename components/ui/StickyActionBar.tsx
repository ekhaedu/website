"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GetAppButton } from "./GetAppButton";

export function StickyActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Show after scrolling past hero (450px) and hide within 400px of page bottom
      const nearBottom = scrollY + winHeight > docHeight - 400;
      if (scrollY > 500 && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Action Bar"
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 transform-gpu ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-4 bg-white/95 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200/90 shadow-2xl shadow-slate-900/15 ring-1 ring-black/5">
        {/* Desktop Trust Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-700 font-medium border-r border-slate-200 pr-3">
          <div className="w-5 h-5 rounded-full bg-[#E6FBF5] text-[#059669] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span>Free Trial With Every Mentor · 100% Escrow</span>
        </div>

        {/* Mobile Mini Indicator */}
        <div className="flex md:hidden items-center gap-1.5 text-[11px] font-bold text-slate-900 pl-1">
          <span className="w-2 h-2 rounded-full bg-[#7477FF] animate-pulse" />
          <span>EKHA</span>
        </div>

        {/* Quick CTA */}
        <GetAppButton className="gradient-trust text-white text-xs sm:text-xs font-bold px-4 sm:px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap">
          <span>Claim Free Trial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </GetAppButton>
      </div>
    </aside>
  );
}
