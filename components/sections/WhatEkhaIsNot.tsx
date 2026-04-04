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
    <section className="py-20 bg-[var(--color-navy)] md:bg-slate-50 md:border-y md:border-slate-100">
      <div className="container mx-auto px-4 text-center">
        {/* Mobile Title */}
        <h2 className="md:hidden text-2xl font-semibold text-white mb-10">
          What Ekha Is{" "}
          <span className="gradient-text-violet" style={{ WebkitTextFillColor: "transparent" }}>Not</span>
        </h2>

        {/* Desktop Title */}
        <h2 className="hidden md:flex text-2xl font-semibold text-[var(--color-foreground)] mb-10 items-center justify-center gap-2">
          What
          <img
            src="/ekha_black.png"
            alt="Ekha"
            className="h-48 -mb-15 -mt-12 -ml-15 -mr-19 object-contain"
          />
          Is{" "}
          <span className="gradient-text-trust">
            Not
          </span>
        </h2>

        {/* Mobile Items */}
        <div className="md:hidden flex flex-wrap justify-center gap-3">
          {notList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-white/15 px-5 py-3 rounded-full bg-white/5"
            >
              <div className="w-5 h-5 rounded-full bg-[var(--color-peach)]/20 flex items-center justify-center">
                <X className="w-3 h-3 text-[var(--color-peach)]" />
              </div>
              <span className="text-white/70 text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Desktop Items */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6">
          {notList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--color-peach)]/30 transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-[var(--color-peach-light)] flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[var(--color-peach)]" />
              </div>
              <span className="text-slate-600 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
