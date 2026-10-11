"use client";

import React, { useState } from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { GetAppButton } from "../ui/GetAppButton";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Send,
  Check,
} from "lucide-react";

// Apple Logo SVG
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" fill="currentColor" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
  </svg>
);

// Google Play Logo SVG
const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-68 57.9 68 57.9 58.9-34.1c16.3-9.4 16.3-38.2 0-47.6zM404.3 325.3l-58.9-34.1-60.1 60.1 119 68.2z" />
  </svg>
);

export function Chapter07Conversion() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 8) {
      setIsSent(true);
    }
  };

  return (
    <section
      id="chapter-conversion"
      className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-[#EEF0FF]/40 border-t border-slate-100 select-none relative overflow-hidden"
    >
      {/* Decorative Radial Backdrop Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7477FF]/15 via-[#818CF8]/10 to-[#3EE8B6]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mascot Celebration Animation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              {/* Soft Pulsing Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7477FF]/20 to-[#FF8C42]/20 blur-2xl animate-pulse" />

              {/* Celebrating Mascot Video */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <LazyVideo
                  src="/mascot/advantages.mp4"
                  poster="/mascot/advantages.png"
                  width={380}
                  height={380}
                  className="w-full h-full object-contain drop-shadow-2xl animate-float"
                  autoPlay
                  loop
                  muted
                  preload="none"
                />
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-2 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-lg shadow-black/5 flex items-center gap-1.5 text-xs font-bold text-slate-800 z-20">
                <span className="text-base">🚀</span>
                <span>Free Trial Included</span>
              </div>

              <div className="absolute bottom-4 -left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-lg shadow-black/5 flex items-center gap-1.5 text-xs font-bold text-slate-800 z-20">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Zero Subscription Traps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, CTA & Direct Link (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 bg-[#EEF0FF] text-[#7477FF] px-3.5 py-1 rounded-full text-xs font-bold border border-[#7477FF]/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span>07 · Your Child&apos;s Journey Begins</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Your Child&apos;s Next Learning Adventure{" "}
              <span className="gradient-text-trust">Starts Here.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Join families exploring a calmer, more personal approach to education. Connect with a vetted 1-on-1 mentor today with a 100% free trial session—no credit card required.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GetAppButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-trust text-white px-8 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-xl shadow-[#7477FF]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-100 transition-all cursor-pointer">
                <span>Claim Free Trial Session</span>
                <ArrowRight className="w-5 h-5" />
              </GetAppButton>

              <a
                href="#chapter-curiosity"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-4 rounded-2xl text-sm font-semibold border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>Re-explore Interactive Demo</span>
              </a>
            </div>

            {/* Direct App Link Delivery via WhatsApp / SMS */}
            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#7477FF]" />
                  <span>Get App Link &amp; Free Trial Pass on WhatsApp</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Instant SMS / WhatsApp</span>
              </div>

              {!isSent ? (
                <form onSubmit={handleSendLink} className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Enter parent mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#7477FF] focus:bg-white transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    <span>Send Link</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-[#E6FBF5] border border-[#3EE8B6]/40 flex items-center justify-between text-xs text-[#064E3B]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Download link &amp; trial pass sent to +91 {phoneNumber}!</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setPhoneNumber("");
                    }}
                    className="text-[11px] underline text-emerald-800 cursor-pointer"
                  >
                    Change
                  </button>
                </div>
              )}

              <p className="text-[10px] text-slate-400 mt-2">
                🔒 We respect your privacy. No marketing spam, guaranteed.
              </p>
            </div>

            {/* App Store Availability Cards (Official Rollout & Early Access) */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-500 block mb-3 uppercase tracking-wider text-center lg:text-left">
                Available Across All Devices
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <GetAppButton
                  useCustomButton={false}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2.5 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <GooglePlayIcon className="w-4 h-4 fill-current text-white" />
                  <div className="text-left leading-tight">
                    <span className="text-[9px] text-slate-400 block font-normal">Get it on</span>
                    <span className="text-xs font-bold">Google Play</span>
                  </div>
                </GetAppButton>

                <GetAppButton
                  useCustomButton={false}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2.5 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <AppleIcon className="w-4 h-4 fill-current text-white" />
                  <div className="text-left leading-tight">
                    <span className="text-[9px] text-slate-400 block font-normal">Download on</span>
                    <span className="text-xs font-bold">App Store</span>
                  </div>
                </GetAppButton>
              </div>
            </div>

            {/* Final 4 Reassurance Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3EE8B6] shrink-0" />
                <span className="font-medium">100% Free 1st Class</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#7477FF] shrink-0" />
                <span className="font-medium">No Credit Card Needed</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#FF8C42] shrink-0" />
                <span className="font-medium">1 Coin = ₹1 Escrow</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3EE8B6] shrink-0" />
                <span className="font-medium">Switch Mentor Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
