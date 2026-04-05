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
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-10 flex items-center justify-center gap-2">
          What
          <img
            src="/ekha_black.png"
            alt="Ekha"
            className="h-48 -mb-15 -mt-12 -ml-15 -mr-19 object-contain hidden md:inline"
          />
          <span className="md:hidden">Ekha</span>
          {" "}Is{" "}
          <span className="gradient-text-trust">
            Not
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {notList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--color-peach)]/30 transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-[var(--color-peach-light)] flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[var(--color-peach)]" />
              </div>
              <span className="text-slate-600 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
