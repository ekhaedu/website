import React from "react";
import { Coins, Lock, ArrowDownLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
export function WalletSystem() {
  return (
    <section className="py-32 bg-background overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block border border-neon-purple/50 px-3 py-1 text-neon-purple font-mono text-xs mb-6 uppercase">
              Secure Transaction Protocol
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-foreground uppercase leading-none mb-8">
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
            <Button rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Wallet
            </Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Coins className="w-6 h-6" />,
                  title: "COIN BOOKING",
                  desc: "1 Coin = 1 Rupee. Simple conversion.",
                  value: "1:1 RATIO",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "SECURE ESCROW",
                  desc: "Coins locked on schedule, deducted on completion.",
                  value: "LOCKED",
                },
                {
                  icon: <ArrowDownLeft className="w-6 h-6" />,
                  title: "INSTANT WITHDRAWAL",
                  desc: "Unused coins sent to bank anytime.",
                  value: "24/7",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 p-6 flex items-center justify-between group hover:border-neon-purple transition-colors"
                >
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
