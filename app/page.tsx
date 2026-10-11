import React from "react";
import dynamic from "next/dynamic";
import { HeroExperienceSection } from "../components/sections/HeroExperienceSection";
import { GetAppButton } from "../components/ui/GetAppButton";
import Image from "next/image";

const HowItWorks = dynamic(
  () =>
    import("../components/sections/HowItWorks").then((mod) => ({
      default: mod.HowItWorks,
    })),
  { ssr: true }
);

const FeaturesGrid = dynamic(
  () =>
    import("../components/sections/FeaturesGrid").then((mod) => ({
      default: mod.FeaturesGrid,
    })),
  { ssr: true }
);

const WalletSystem = dynamic(
  () =>
    import("../components/sections/WalletSystem").then((mod) => ({
      default: mod.WalletSystem,
    })),
  { ssr: true }
);

const StudentDiscovery = dynamic(
  () =>
    import("../components/sections/StudentDiscovery").then((mod) => ({
      default: mod.StudentDiscovery,
    })),
  { ssr: true }
);

const CareerGuidance = dynamic(
  () =>
    import("../components/sections/CareerGuidance").then((mod) => ({
      default: mod.CareerGuidance,
    })),
  { ssr: true }
);

const ParentLoop = dynamic(
  () =>
    import("../components/sections/ParentLoop").then((mod) => ({
      default: mod.ParentLoop,
    })),
  { ssr: true }
);

const WhatEkhaIsNot = dynamic(
  () =>
    import("../components/sections/WhatEkhaIsNot").then((mod) => ({
      default: mod.WhatEkhaIsNot,
    })),
  { ssr: true }
);

const DownloadApp = dynamic(
  () => import("../components/sections/DownloadApp"),
  { ssr: true }
);

const Footer = dynamic(
  () =>
    import("../components/sections/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  { ssr: true }
);

export default function Home() {
  return (
    <div
      className="min-h-screen bg-transparent text-[var(--color-foreground)]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-xs transition-all">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="cursor-pointer flex items-center" aria-label="Ekha Home">
            <Image
              src="/ekha_black.png"
              alt="Ekha"
              width={180}
              height={56}
              className="h-10 sm:h-12 w-auto object-contain hover:opacity-85 transition-opacity"
              priority
            />
          </a>
          <GetAppButton />
        </div>
      </nav>

      <main className="pt-20">
        <HeroExperienceSection />
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
