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
export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neon-purple selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-bold text-foreground tracking-tighter uppercase">
            Ekha<span className="text-neon-purple">.</span>
          </div>
          <button className="border border-black px-6 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
            Get App
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <FeaturesGrid />
        <WalletSystem />
        {/* Keeping other sections but they might need style updates later if requested.
             For now, they will inherit the global black theme but might look slightly off
             without specific refactoring. I'll comment them out to focus on the requested
             redesigned sections to ensure the aesthetic is consistent, or keep them if
             they don't break the layout too much. Let's keep them for content completeness
             but acknowledge they might need a pass later. */}
        <StudentDiscovery />
        <CareerGuidance />
        <ParentLoop />
        <WhatEkhaIsNot />
      </main>

      <Footer />
    </div>
  );
}
