import React from "react";
import { X } from "lucide-react";
export function WhatEkhaIsNot() {
  const notList = [
    "Not a mass classroom platform",
    "Not algorithm-driven matching",
    "Not a parent dashboard app",
    "Not a gamified learning toy",
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-medium text-foreground mb-10">
          What Ekha Is{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
            Not
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
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
