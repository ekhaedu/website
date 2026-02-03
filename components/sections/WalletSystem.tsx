"use client";

import React from "react";
import { Coins, Lock, ArrowDownLeft, ChevronDown } from "lucide-react";

export function WalletSystem() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section className="py-32 bg-background overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block border border-neon-purple/50 px-3 py-1 text-neon-purple font-mono text-xs mb-6 uppercase">
              Secure Transaction Protocol
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-foreground uppercase leading-none mb-8">
              Transparent
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
                [ Credits ]
              </span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-md font-mono">
              Ekha uses a straightforward coin-based wallet system designed for
              trust. You only pay for what you learn.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none rounded-none cursor-pointer bg-transparent from-black to-slate-500 bg-linear-to-b border-black text-white hover:bg-none hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] px-8 py-3 text-sm"
            >
              <span>{isExpanded ? "Show Less" : "Know More"}</span>
              <ChevronDown
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Coins className="w-6 h-6" />,
                  title: "COIN BOOKING",
                  desc: "1 Coin = 1 Rupee. Simple conversion.",
                  value: "1:1 RATIO",
                  detail:
                    "Use coins to book classes instantly. No complex calculations or hidden multipliers.",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "SECURE ESCROW",
                  desc: "Coins locked on schedule, deducted on completion.",
                  value: "LOCKED",
                  detail:
                    "Coins are locked when you schedule a class and only deducted after it's successfully completed. Full protection from cancellations.",
                },
                {
                  icon: <ArrowDownLeft className="w-6 h-6" />,
                  title: "INSTANT WITHDRAWAL",
                  desc: "Unused coins sent to bank anytime (charges may apply).",
                  value: "24/7",
                  detail:
                    "Unused coins can be withdrawn to your bank account at any time. No lock-in periods.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 p-6 group hover:border-neon-purple transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-neon-purple group-hover:border-neon-purple transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground uppercase mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm font-mono">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="text-neon-purple font-mono font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>

                  {/* Inline Expansion per item */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-500 text-sm border-t border-slate-200 pt-4 pl-18">
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

      <div className="mt-20 border-y border-slate-200 py-4 bg-slate-50 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-slate-500 font-mono text-sm uppercase"
            >
              <span>{"/// TRUSTED TRANSACTIONS"}</span>
              <span className="text-neon-purple">★</span>
              <span>NO HIDDEN FEES</span>
              <span className="text-neon-purple">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
