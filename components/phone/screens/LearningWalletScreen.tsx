"use client";

import React from "react";
import { Coins, Flame, ArrowUpRight, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export function LearningWalletScreen() {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-3.5 pt-2 flex flex-col justify-between text-xs overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-semibold text-slate-100 text-[11px]">
          <Coins className="w-3.5 h-3.5 text-amber-400" />
          Ekha Learning Wallet
        </div>
        <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5">
          <ShieldCheck className="w-3 h-3" />
          Escrow Protected
        </span>
      </div>

      {/* Main Balance Card */}
      <div className="relative overflow-hidden rounded-2xl p-3.5 bg-gradient-to-br from-indigo-900/60 via-slate-800 to-slate-850 border border-violet-500/30 shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] text-slate-400">Available Balance</span>
          <div className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[9px] flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            1 Coin = ₹1
          </div>
        </div>

        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="text-2xl font-extrabold text-white tracking-tight">₹1,450</span>
          <span className="text-xs text-amber-300 font-medium">1,450 Coins</span>
        </div>

        <p className="text-[10px] text-slate-300 leading-snug">
          Pay strictly for completed classes. Unused coins can be withdrawn anytime.
        </p>
      </div>

      {/* 7-Day Streak & Bonus Card */}
      <div className="bg-gradient-to-r from-orange-950/40 via-slate-800 to-violet-950/40 border border-orange-500/30 rounded-xl p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[var(--color-peach)] flex items-center justify-center text-white shadow-sm">
            <Flame className="w-4 h-4 fill-white" />
          </div>
          <div>
            <div className="font-semibold text-white text-[10px]">7-Day Streak Active!</div>
            <div className="text-[9px] text-slate-400">+50 Bonus Coins unlocked</div>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
          <Trophy className="w-3.5 h-3.5 text-amber-300" />
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button className="gradient-trust text-white py-2 px-3 rounded-xl font-semibold text-[10px] flex items-center justify-center gap-1 shadow-sm">
          Add Coins
        </button>
        <button className="bg-slate-800 border border-slate-700 text-slate-200 py-2 px-3 rounded-xl font-semibold text-[10px] flex items-center justify-center gap-1">
          Cash Out <ArrowUpRight className="w-3 h-3 text-emerald-400" />
        </button>
      </div>

      <div className="text-[9px] text-center text-slate-400">
        100% Transparent · Zero Hidden Multipliers
      </div>
    </div>
  );
}
