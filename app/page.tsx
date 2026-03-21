import React from "react";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { StudentDiscovery } from "../components/sections/StudentDiscovery";
import { CareerGuidance } from "../components/sections/CareerGuidance";
import { WalletSystem } from "../components/sections/WalletSystem";
import { ParentLoop } from "../components/sections/ParentLoop";
import { FeaturesGrid } from "../components/sections/FeaturesGrid";
import { WhatEkhaIsNot } from "../components/sections/WhatEkhaIsNot";
import DownloadApp from "../components/sections/DownloadApp";
import { Footer } from "../components/sections/Footer";
import { GetAppButton } from "../components/ui/GetAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-purple selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="cursor-pointer">
            <img
              src="./ekha.png"
              alt="Ekha"
              className="h-full -ml-5 lg:-ml-15 w-35 lg:w-60 object-contain hover:opacity-80 transition-opacity"
            />
          </div>
          <GetAppButton />
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <FeaturesGrid />
        <WalletSystem />
        <StudentDiscovery />
        <CareerGuidance />
        <ParentLoop />
        <WhatEkhaIsNot />
        <DownloadApp />
      </main>

      <Footer />
    </div>
  );
}
