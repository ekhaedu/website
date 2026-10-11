import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "../components/ui/Navbar";
import { StickyActionBar } from "../components/ui/StickyActionBar";
import { Chapter01Hero } from "../components/sections/Chapter01Hero";

// Dynamic imports for optimized bundle splitting & smooth hydration
const Chapter02Curiosity = dynamic(
  () =>
    import("../components/sections/Chapter02Curiosity").then((mod) => ({
      default: mod.Chapter02Curiosity,
    })),
  { ssr: true }
);

const Chapter03Story = dynamic(
  () =>
    import("../components/sections/Chapter03Story").then((mod) => ({
      default: mod.Chapter03Story,
    })),
  { ssr: true }
);

const Chapter04Product = dynamic(
  () =>
    import("../components/sections/Chapter04Product").then((mod) => ({
      default: mod.Chapter04Product,
    })),
  { ssr: true }
);

const Chapter05Trust = dynamic(
  () =>
    import("../components/sections/Chapter05Trust").then((mod) => ({
      default: mod.Chapter05Trust,
    })),
  { ssr: true }
);

const Chapter06Objections = dynamic(
  () =>
    import("../components/sections/Chapter06Objections").then((mod) => ({
      default: mod.Chapter06Objections,
    })),
  { ssr: true }
);

const Chapter07Conversion = dynamic(
  () =>
    import("../components/sections/Chapter07Conversion").then((mod) => ({
      default: mod.Chapter07Conversion,
    })),
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
      className="min-h-screen bg-white text-[var(--color-foreground)] overflow-x-hidden selection:bg-[#7477FF]/20 selection:text-[#7477FF]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Global Glassmorphic Sticky Navigation */}
      <Navbar />

      {/* Main 7-Chapter Animated Storytelling Experience */}
      <main id="main-content">
        {/* Chapter 01: First Impression (The Hook) */}
        <Chapter01Hero />

        {/* Chapter 02: Create Curiosity (Interactive 2D Demos: Math, Science, Stories) */}
        <Chapter02Curiosity />

        {/* Chapter 03: The Learning Story (Discovery -> Mentor Match -> Personalized Habits) */}
        <Chapter03Story />

        {/* Chapter 04: Explore The Real Product (Whiteboard, Notes, AI Companion, Syllabus) */}
        <Chapter04Product />

        {/* Chapter 05: Build Parent Trust (Dark WhatsApp Recap Simulator & Trust Pillars) */}
        <Chapter05Trust />

        {/* Chapter 06: Transparent Economics & FAQ (1 Coin = ₹1 Escrow, Comparison Table, FAQ) */}
        <Chapter06Objections />

        {/* Chapter 07: Final Conversion (Celebratory Mascot, App Download, WhatsApp Pass) */}
        <Chapter07Conversion />
      </main>

      {/* Floating Conversion Quick-Action Bar */}
      <StickyActionBar />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
