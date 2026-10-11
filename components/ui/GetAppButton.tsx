"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Check } from "lucide-react";
import { Button } from "./Button";

interface GetAppButtonProps {
  children?: React.ReactNode;
  className?: string;
  useCustomButton?: boolean;
  rightIcon?: React.ReactNode;
}

export function GetAppButton({
  children,
  className,
  useCustomButton = false,
  rightIcon,
}: GetAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("Grade 6–8 (Middle School)");
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 8) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 400);
  };

  return (
    <>
      {useCustomButton ? (
        <Button
          size="lg"
          className={className}
          rightIcon={rightIcon}
          onClick={() => setIsOpen(true)}
        >
          {children || "Claim Free Trial Session"}
        </Button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={
            className ||
            "gradient-trust text-white px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-[#7477FF]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          }
        >
          {children || "Claim Free Trial Session"}
        </button>
      )}

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={submitted ? "Trial Reserved!" : "Claim Your Free Trial Session"}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 px-2 text-center space-y-6 animate-[fadeIn_0.5s_ease-out]">
            <div className="w-16 h-16 rounded-full bg-[#E6FBF5] text-[#059669] flex items-center justify-center shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                You&apos;re All Set! 🎉
              </h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                We&apos;ve reserved Rohan&apos;s free 1-on-1 trial session in <strong className="text-slate-900">{selectedSubject}</strong>.
                Our learning coordinator will share the session link and mentor match directly to <strong className="text-slate-900">{phoneNumber}</strong> on WhatsApp.
              </p>
            </div>

            <div className="w-full max-w-sm bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-left space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>100% Free Trial with Subject Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>No credit card or upfront payment needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Early Access App download link included</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full max-w-sm gradient-trust text-white font-bold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 py-2">
            <div className="space-y-1">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Experience a live interactive session with a vetted specialist. Zero payment required, zero subscription lock-ins.
              </p>
            </div>

            {/* Subject Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Select Subject
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Mathematics", "Science", "Coding", "English"].map((subj) => (
                  <button
                    type="button"
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      selectedSubject === subj
                        ? "border-[#7477FF] bg-[#EEF0FF] text-[#7477FF] font-bold shadow-xs"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>{subj}</span>
                    {selectedSubject === subj && <CheckCircle2 className="w-3.5 h-3.5 text-[#7477FF]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Grade Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Student Grade
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Grade 1–5 (Primary)",
                  "Grade 6–8 (Middle School)",
                  "Grade 9–10 (Secondary / Board Exam)",
                  "Grade 11–12 (Higher Secondary)",
                ].map((grade) => (
                  <button
                    type="button"
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      selectedGrade === grade
                        ? "border-[#7477FF] bg-[#EEF0FF] text-[#7477FF] font-bold shadow-xs"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>{grade}</span>
                    {selectedGrade === grade && <CheckCircle2 className="w-3.5 h-3.5 text-[#7477FF]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Number Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Parent&apos;s WhatsApp Number
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#7477FF] focus:bg-white focus:ring-2 focus:ring-[#7477FF]/20 transition-all font-medium"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                We will send your trial link & session confirmation directly to your WhatsApp.
              </p>
            </div>

            {/* Reassurance Guarantee */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
              <span>Zero sales pressure. No credit card required. Free 1st class.</span>
            </div>

            {/* Action CTA */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 gradient-trust text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-[#7477FF]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Confirm Free Trial Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
