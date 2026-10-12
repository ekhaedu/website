import React from "react";
import Image from "next/image";
import { X } from "../ui/expo-icons";

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-10 flex items-center justify-center gap-2">
          What
          <Image
            src="/ekha_black.png"
            alt="Ekha"
            width={160}
            height={50}
            className="h-10 sm:h-12 w-auto object-contain hidden sm:inline"
            loading="lazy"
          />
          <span className="sm:hidden font-extrabold text-[var(--color-violet)]">Ekha</span>
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
              <span className="text-slate-600 font-medium text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
