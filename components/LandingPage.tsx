import React from "react";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { StudentDiscovery } from "../components/sections/StudentDiscovery";
import { CareerGuidance } from "../components/sections/CareerGuidance";
import { WalletSystem } from "../components/sections/WalletSystem";
import { ParentLoop } from "../components/sections/ParentLoop";
import { FeaturesGrid } from "../components/sections/FeaturesGrid";
import { WhatEkhaIsNot } from "../components/sections/WhatEkhaIsNot";
import { Footer } from "../components/sections/Footer";
import { GetAppButton } from "../components/ui/GetAppButton";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-foreground)]" style={{ fontFamily: "var(--font-body)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight">
            Ekha<span className="text-[var(--color-violet)]">.</span>
          </div>
          <GetAppButton />
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <FeaturesGrid />
        <WalletSystem />
        <StudentDiscovery />
        <CareerGuidance />
        <ParentLoop />
        <WhatEkhaIsNot />
      </main>

      <Footer />
    </div>
  );
}
