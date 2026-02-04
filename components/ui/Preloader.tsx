"use client";

import React, { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Ensure smooth transition even if load is instant
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 600);
      }, 1000); // Minimum 1s display time for the brand
    };

    // Check if loaded already
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
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      {/* Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Animated Image Container */}
      <div className="relative z-10 overflow-hidden p-4">
        <div className="animate-[slideUpReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <img
            src="/ekha_black.png"
            alt="Ekha"
            className="w-48 md:w-80 object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute inset-0 -translate-x-full animate-[shine_2s_ease-in-out_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 blur-xl" />
      </div>
    </div>
  );
}
