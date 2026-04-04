"use client";

import React, { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 600);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Soft grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,111,211,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(112,111,211,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
        }}
      />

      {/* Violet/peach glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(112,111,211,0.12) 0%, rgba(255,126,95,0.06) 50%, transparent 100%)",
          filter: "blur(80px)"
        }}
      />

      {/* Animated Image Container */}
      <div className="relative z-10 overflow-hidden p-4">
        <div className="animate-[slideUpReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <img
            src="/ekha_black.png"
            alt="Ekha"
            className="w-48 md:w-80 object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute inset-0 -translate-x-full animate-[shine_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 blur-xl" />
      </div>
    </div>
  );
}
