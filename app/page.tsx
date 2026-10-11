import React from "react";
import dynamic from "next/dynamic";
import { HeroExperienceSection } from "../components/sections/HeroExperienceSection";

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
      <main>
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
