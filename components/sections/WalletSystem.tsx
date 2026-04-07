"use client";

import React from "react";
import {
  Coins,
  Shield,
  ArrowDownLeft,
  ChevronDown,
  Flame,
  Trophy,
  Star,
  Sparkles,
} from "lucide-react";
import { LazyVideo } from "../ui/LazyVideo";

export function WalletSystem() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [celebratingIndex, setCelebratingIndex] = React.useState<number | null>(
    null,
  );

  const items = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Earn Coins",
      desc: "1 Coin = 1 Rupee. Simple and transparent.",
      value: "1:1",
      detail:
        "Use coins to book classes instantly. No complex calculations or hidden multipliers. What you see is what you pay.",
      color: "var(--color-violet)",
      emoji: "🪙",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Sound",
      desc: "Coins held safely until the class is completed.",
      value: "Protected",
      detail:
        "Coins are held securely when you schedule a class and only used after it's successfully completed. Full protection from cancellations.",
      color: "var(--color-trust-blue)",
      emoji: "🛡️",
    },
    {
      icon: <ArrowDownLeft className="w-6 h-6" />,
      title: "Cash Out Anytime",
      desc: "Unused coins sent to your bank whenever you want.",
      value: "24/7",
      detail:
        "Unused coins can be withdrawn to your bank account at any time. No lock-in periods, no questions asked.",
      color: "var(--color-peach)",
      emoji: "💸",
    },
  ];

  const handleItemHover = (index: number) => {
    setCelebratingIndex(index);
    setTimeout(() => setCelebratingIndex(null), 1000);
  };

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col relative lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 z-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[var(--color-violet-light)] text-[var(--color-violet)] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Your Learning Wallet
              </div>
              <div className="relative">
                <h2 className="text-5xl relative z-10 md:text-7xl font-bold text-[var(--color-foreground)] leading-tight md:leading-none mb-4 md:mb-8 pr-28 md:pr-0">
                  Transparent <br />
                  <span className="gradient-text-trust">Credits</span>
                </h2>
                <div className="absolute -right-4 -bottom-4 w-42 h-42 md:hidden">
                  <LazyVideo
                    src="/mascot/coins.mp4"
                    poster="/mascot/coins.png"
                    height={300}
                    width={200}
                    className="w-full z-0 h-full object-contain pointer-events-none select-none"
                    autoPlay
                    loop
                    muted
                    preload="none"
                  />
                </div>
              </div>
              <p className="text-black text-base md:text-lg mb-6 md:mb-10 max-w-md leading-relaxed">
                1 coin = 1 rupee. Pay only for completed classes. No hidden
                fees, no lock-ins.
              </p>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden md:inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none rounded-xl cursor-pointer gradient-trust text-white hover:shadow-lg hover:shadow-violet/20 hover:-translate-y-0.5 px-8 py-3 text-sm"
              >
                <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
          <LazyVideo
            src="/mascot/coins.mp4"
            poster="/mascot/coins.png"
            height={1800}
            width={700}
            className="hidden lg:block -bottom-14 h-full absolute z-5 left-[18%] object-contain pointer-events-none select-none"
            autoPlay
            loop
            muted
            preload="none"
          />
          <div className="lg:w-1/2 w-full z-10">
            {/* Streak & Badge Bar */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[var(--color-violet-light)] to-[var(--color-peach-light)] rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-peach)] flex items-center justify-center animate-streak-glow">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-foreground)]">
                    7-Day Streak!
                  </div>
                  <div className="text-xs text-slate-500">
                    Keep learning to earn bonus coins
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-violet)] flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--color-trust-blue)] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-slate-500 font-medium ml-1 hidden sm:inline">
                  +3 badges
                </span>
              </div>
            </div>

            {/* Credits Cards */}
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 p-6 rounded-2xl group hover:border-[var(--color-violet)] hover:shadow-lg hover:shadow-violet/10 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => handleItemHover(i)}
                >
                  {/* Confetti particles on hover */}
                  {celebratingIndex === i && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      {[...Array(6)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: [
                              "var(--color-violet)",
                              "var(--color-peach)",
                              "var(--color-trust-blue)",
                              "#FFD700",
                              "#FF69B4",
                              "#00CED1",
                            ][j],
                            left: `${20 + j * 12}%`,
                            top: "30%",
                            animation: `confetti-fall 0.8s ease-out ${j * 0.05}s forwards`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-black text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div
                        className="font-bold text-lg"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-500 text-sm border-t border-slate-100 pt-4 pl-18 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-slate-100 py-4 bg-slate-50 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-slate-400 text-sm"
            >
              <span>✨ Simple</span>
              <span className="text-[var(--color-peach)]">·</span>
              <span>Fair</span>
              <span className="text-[var(--color-violet)]">·</span>
              <span>Transparent</span>
              <span className="text-[var(--color-trust-blue)]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
