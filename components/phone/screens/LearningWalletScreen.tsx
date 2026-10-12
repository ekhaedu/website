"use client";

import React, { useState } from "react";
import { PlusCircle, ArrowUpRight, X, Wifi, Coins } from "../../ui/expo-icons";

export function LearningWalletScreen() {
  const [showTopup, setShowTopup] = useState(false);

  return (
    <div className="h-full w-full bg-[#111113] text-white p-3 pt-12 pb-3 flex flex-col justify-between text-xs overflow-hidden select-none font-barlow">
      {/* 1. Header (wallet.tsx) */}
      <div className="flex items-center justify-between shrink-0 mb-1">
        <div>
          <span className="text-white uppercase font-black text-xl tracking-tight leading-none block">
            {showTopup ? "TOP UP WALLET" : "WALLET"}
          </span>
          <span className="text-white/40 text-[8px] font-medium">
            {showTopup ? "Choose a coin package to continue" : "1 Coin = ₹1 Escrow"}
          </span>
        </div>
        <button
          onClick={() => setShowTopup(!showTopup)}
          className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {showTopup ? <X className="w-3.5 h-3.5" /> : <Coins className="w-3 h-3 text-[#F8CC61]" />}
        </button>
      </div>

      {/* 2. Signature Debit/Credit EMV Card (wallet.tsx) */}
      <div className="bg-gradient-to-br from-[#FF6B6B] via-[#FF7E5F] to-[#FF9F43] rounded-2xl p-3 text-white shadow-xl relative overflow-hidden shrink-0">
        {/* Chip & Contactless */}
        <div className="flex items-center justify-between mb-2">
          {/* Metallic EMV Chip */}
          <div className="w-8 h-5 rounded bg-gradient-to-r from-[#E2E2E2] via-[#B8B8B8] to-[#E2E2E2] border border-white/60 p-0.5 flex items-center justify-center shadow-xs">
            <div className="w-full h-full border border-black/30 rounded-[2px] grid grid-cols-2 gap-0.5 bg-amber-100/40" />
          </div>
          {/* NFC Contactless Symbol */}
          <div className="rotate-90 text-white/80">
            <Wifi className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Learning Balance */}
        <div className="mb-2">
          <div className="uppercase font-bold text-[7.5px] tracking-[2px] text-white/80 mb-0.5">
            LEARNING BALANCE
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-black text-2xl tracking-[1.5px] text-white leading-none">
              1,450
            </span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded text-[7.5px] font-black tracking-wider uppercase">
              COINS
            </span>
          </div>
        </div>

        {/* Cardholder */}
        <div className="pt-1.5 border-t border-white/20 flex items-center justify-between text-[8px]">
          <div>
            <div className="text-[7px] uppercase text-white/60 font-semibold">
              CARDHOLDER
            </div>
            <div className="font-bold uppercase tracking-wider text-white">
              ROHAN SHARMA
            </div>
          </div>
          <span className="font-bold text-white/90">1 COIN = ₹1</span>
        </div>
      </div>

      {/* 3. Package Cards from BuyCoinsModal.tsx */}
      <div className="space-y-1.5 shrink-0 my-0.5">
        {/* Most Popular Package (BuyCoinsModal.tsx) */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#331515] to-[#1F0808] border-2 border-[#FF6B6B]/50 p-2.5 shadow-md">
          {/* Most Popular Badge */}
          <div className="absolute -top-2 right-3 bg-[#FF6B6B] px-2 py-0.5 rounded-full shadow-xs border border-[#FF6B6B]">
            <span className="text-white font-black text-[7px] tracking-widest uppercase">
              Most Popular
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#E53935] flex items-center justify-center text-white shadow-xs shrink-0">
                <Coins className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-black text-white text-sm leading-tight">
                  500
                </div>
                <div className="text-[#FF6B6B] font-bold text-[7.5px] uppercase tracking-wider">
                  Ekha Coins
                </div>
              </div>
            </div>

            <button className="bg-[#FF6B6B] text-white font-black text-[10px] py-1 px-3.5 rounded-xl shadow-xs hover:scale-105 transition-transform">
              ₹500
            </button>
          </div>
        </div>

        {/* Standard Package (BuyCoinsModal.tsx) */}
        <div className="rounded-xl bg-gradient-to-br from-[#1c1c1e] to-[#121212] border border-white/10 p-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 shrink-0">
              <Coins className="w-3.5 h-3.5 text-white/70" />
            </div>
            <div>
              <div className="font-bold text-white text-xs leading-tight">
                100
              </div>
              <div className="text-white/40 font-semibold text-[7.5px] uppercase tracking-wider">
                Ekha Coins
              </div>
            </div>
          </div>

          <button className="bg-white/10 text-white font-bold text-[9px] py-1 px-3 rounded-lg hover:bg-white/20 transition-colors">
            ₹100
          </button>
        </div>
      </div>

      {/* 4. Action Buttons (Recharge & Withdraw) */}
      <div className="grid grid-cols-2 gap-2 shrink-0">
        <button
          onClick={() => setShowTopup(true)}
          className="bg-[#F65F50] text-white py-1.5 px-3 rounded-full font-bold text-[9px] flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <PlusCircle className="w-3 h-3" />
          <span>Top up Wallet</span>
        </button>
        <button className="bg-white text-black py-1.5 px-3 rounded-full font-bold text-[9px] flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform">
          <ArrowUpRight className="w-3 h-3" />
          <span>Withdraw</span>
        </button>
      </div>
    </div>
  );
}
