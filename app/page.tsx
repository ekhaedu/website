import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "../components/sections/Hero";
import { GetAppButton } from "../components/ui/GetAppButton";
import Image from "next/image";

// Lazy load below-fold sections — they won't block initial render
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="cursor-pointer">
            <Image
              src="/ekha_black.png"
              alt="Ekha"
              width={240}
              height={80}
              className="h-full -ml-5 lg:-ml-15 w-35 lg:w-60 object-contain hover:opacity-80 transition-opacity"
              priority
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
