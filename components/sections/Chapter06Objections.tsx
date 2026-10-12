"use client";

import React, { useState } from "react";
import {
  Coins,
  ChevronDown,
  ArrowRight,
} from "../ui/expo-icons";
import { GetAppButton } from "../ui/GetAppButton";

const FAQS = [
  {
    q: "Is the first trial class really free?",
    a: "Yes. Every student receives a 100% free trial session with any mentor of their choice. You do not need to enter a credit card or commit to future classes.",
  },
  {
    q: "How does the Coin Wallet work?",
    a: "1 Coin strictly equals ₹1 Rupee. When you book a class, coins are held safely in escrow. Coins are only deducted after the live class successfully concludes. Any unused coin balance can be withdrawn back to your bank account anytime.",
  },
  {
    q: "What happens if we need to reschedule a class?",
    a: "Family plans change. You can reschedule any upcoming session with prior notice through the app without losing your coins or paying penalties.",
  },
  {
    q: "How are Ekha mentors selected and vetted?",
    a: "Educators undergo rigorous subject mastery assessments, teaching demonstrations, and background checks. Only educators who demonstrate both deep conceptual clarity and genuine patience are matched with students.",
  },
  {
    q: "What devices do we need to attend classes?",
    a: "Ekha works smoothly on any standard tablet, laptop, desktop computer, or smartphone. No specialized hardware or expensive drawing tablets are required.",
  },
  {
    q: "Which boards and grades are covered?",
    a: "We support foundational learning through high school across SCERT, State Board, CBSE, and ICSE curricula in Mathematics, Sciences, Coding, and Languages.",
  },
];

export function Chapter06Objections() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="chapter-pricing"
      className="py-24 sm:py-32 bg-white border-t border-slate-100 select-none relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF3EC] text-[#B43403] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#FF8C42]/20 shadow-xs">
            <Coins className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>06 · Transparent Economics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Everything Is Clear Before You Begin.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            No subscriptions. No multi-year loan contracts. 1 Coin = 1 Rupee held safely in escrow.
          </p>
        </div>

        {/* 1. Wallet Lifecycle Flow Diagram */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-14 shadow-sm">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[11px] font-bold text-[#FF8C42] uppercase tracking-wider block">
              Escrow Protection Lifecycle
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Pay Only for Classes You Complete
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#EEF0FF] text-[#7477FF] font-black text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900">1 Coin = ₹1 Rupee</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Add coins as needed. No confusing point conversion multipliers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#FFF3EC] text-[#FF8C42] font-black text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900">Held in Safe Escrow</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Coins lock when you schedule a class, protecting both family and teacher.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#E6FBF5] text-[#059669] font-black text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900">Class Concludes</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Coins are deducted only after the session concludes successfully.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#FEF9EC] text-[#FF9F43] font-black text-xs flex items-center justify-center">
                4
              </div>
              <h4 className="text-sm font-bold text-slate-900">Withdraw Anytime</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Unused balance can be refunded back to your bank account 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Conventional vs Ekha Comparison Matrix */}
        <div className="mb-16">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[11px] font-bold text-[#7477FF] uppercase tracking-wider block">
              Clear Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Conventional Online Tuition vs. The Ekha Model
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl border border-slate-200 overflow-hidden text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-bold text-slate-700 w-1/3">Key Dimension</th>
                  <th className="p-4 font-bold text-slate-400 w-1/3">Conventional Tuition</th>
                  <th className="p-4 font-bold text-[#7477FF] w-1/3 bg-[#EEF0FF]/50">
                    The Ekha Model ✨
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Payment Commitment</td>
                  <td className="p-4 text-slate-500">Long-term subscription or multi-month lock-in</td>
                  <td className="p-4 font-semibold text-slate-900 bg-[#EEF0FF]/20">
                    Pay per completed class. Zero lock-in contracts.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Class Format</td>
                  <td className="p-4 text-slate-500">Mass video lectures with passive observation</td>
                  <td className="p-4 font-semibold text-slate-900 bg-[#EEF0FF]/20">
                    1-on-1 collaborative digital whiteboard & live pens.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Mentor Chemistry</td>
                  <td className="p-4 text-slate-500">Fixed teacher regardless of child&apos;s connection</td>
                  <td className="p-4 font-semibold text-slate-900 bg-[#EEF0FF]/20">
                    Free trial with every mentor. Switch anytime in 1 tap.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Parent Updates</td>
                  <td className="p-4 text-slate-500">Quarterly reports or complex dashboards</td>
                  <td className="p-4 font-semibold text-slate-900 bg-[#EEF0FF]/20">
                    Direct narrative WhatsApp summary after every class.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Unused Balance</td>
                  <td className="p-4 text-slate-500">Often non-refundable once purchased</td>
                  <td className="p-4 font-semibold text-slate-900 bg-[#EEF0FF]/20">
                    100% of unused coin balance withdrawable to bank.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Accessible FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wider block">
              Common Questions
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#7477FF]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-[fadeIn_0.3s_ease-out]">
                      <div className="pt-3">{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <GetAppButton className="gradient-trust text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2">
              <span>Book Your Free Trial Session</span>
              <ArrowRight className="w-4 h-4" />
            </GetAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
