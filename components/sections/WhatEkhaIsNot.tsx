import React from "react";
import { X } from "lucide-react";
export function WhatEkhaIsNot() {
  const notList = [
    "Not a mass classroom platform",
    "Not pre-recorded video lessons",
    "Not a parent dashboard app",
    "Not a gamified learning toy",
  ];

  return (
    <section className="py-20 bg-[#050505] md:bg-slate-50 md:border-y md:border-slate-200">
      <div className="container mx-auto px-4 text-center">
        {/* Mobile Title */}
        <h2 className="md:hidden text-2xl font-medium text-white mb-10 uppercase">
          What Ekha Is{" "}
          <span style={{ WebkitTextStroke: '1.5px white', color: 'transparent' }}>Not</span>
        </h2>

        {/* Desktop Title (unchanged) */}
        <h2 className="hidden md:flex text-2xl font-medium text-foreground mb-10 items-center justify-center gap-2">
          What
          <img
            src="/ekha_black.png"
            alt="Ekha"
            className="h-48 -mb-15 -mt-12 -ml-15 -mr-19 object-contain"
          />
          Is{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
            Not
          </span>
        </h2>

        {/* Mobile Items (dark editorial) */}
        <div className="md:hidden flex flex-wrap justify-center gap-3">
          {notList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-white/10 px-5 py-3"
            >
              <div className="w-5 h-5 border border-white/20 flex items-center justify-center">
                <X className="w-3 h-3 text-white/40" />
              </div>
              <span className="text-white/60 font-mono text-xs uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>

        {/* Desktop Items (unchanged) */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8">
          {notList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                <X className="w-3 h-3 text-slate-500" />
              </div>
              <span className="text-slate-600 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
