"use client";

import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, PlayCircle, Sparkles, ShieldCheck, Star } from "lucide-react";
import { GetAppButton } from "../ui/GetAppButton";
import { PhoneFrame } from "../phone/PhoneFrame";
import { MentorMatchScreen } from "../phone/screens/MentorMatchScreen";

export function Hero() {
  const handleScrollToHowItWorks = () => {
    const el = document.getElementById("product-showcase") || document.getElementById("the-ekha-advantage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-20 sm:pb-28 overflow-hidden bg-white">
      {/* Soft radial aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(112,111,211,0.12) 0%, rgba(255,126,95,0.06) 45%, transparent 70%)",
        }}
      />

      {/* Modern subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,111,211,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(112,111,211,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-6 animate-[fadeIn_0.8s_ease-out_both]">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide text-[var(--color-violet)] bg-[var(--color-violet-light)] px-4 sm:px-5 py-2 rounded-full font-semibold border border-[var(--color-violet)]/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-peach)]" />
              Admissions Open · LKG – Class 12
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-[var(--color-foreground)] leading-[1.08] sm:leading-[1] mb-6 tracking-tight max-w-4xl">
            Master Every Subject <br className="hidden sm:inline" />
            <span className="gradient-text-trust">One-on-One</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto font-normal">
            The only platform with complete transparency. No algorithms. No forced matches. Just you, your child, and the perfect teacher.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mb-12 sm:mb-16">
            <GetAppButton
              useCustomButton
              className="w-full sm:w-auto shadow-lg shadow-violet/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get the App
            </GetAppButton>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<PlayCircle className="w-4 h-4" />}
              onClick={handleScrollToHowItWorks}
            >
              How Ekha Works
            </Button>
          </div>

          {/* Mobile & Desktop App Showcase Frame */}
          <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto animate-[fadeIn_1s_ease-out_0.3s_both]">
            {/* Floating Trust Badges */}
            <div className="absolute -left-4 sm:-left-24 top-16 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-800">100% Vetted</div>
                <div className="text-[9px] text-slate-500">Free Trial Session</div>
              </div>
            </div>

            <div className="absolute -right-4 sm:-right-24 bottom-24 z-30 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10">
              <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-800">4.9 / 5 Rating</div>
                <div className="text-[9px] text-slate-500">Verified Parent Feedback</div>
              </div>
            </div>

            {/* Embedded Phone Mockup */}
            <PhoneFrame glowColor="rgba(59, 91, 165, 0.25)">
              <MentorMatchScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
