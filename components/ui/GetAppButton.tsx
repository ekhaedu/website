"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { Smartphone, Sparkles } from "lucide-react";
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

  return (
    <>
      {useCustomButton ? (
        <Button
          size="lg"
          className={className}
          rightIcon={rightIcon}
          onClick={() => setIsOpen(true)}
        >
          {children || "Get the App"}
        </Button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={
            className ||
            "gradient-trust text-white px-6 py-2.5 text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet/20 hover:-translate-y-0.5 transition-all duration-300"
          }
        >
          {children || "Get the App"}
        </button>
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Coming Soon!"
      >
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--color-violet)]/20 blur-xl rounded-full scale-150 transition-transform duration-500" />
            <div className="w-24 h-24 rounded-3xl gradient-engage flex items-center justify-center relative z-10 shadow-2xl">
              <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--color-peach)]" />
              <h4 className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight">
                Launching Soon
              </h4>
              <Sparkles className="w-5 h-5 text-[var(--color-peach)]" />
            </div>
            <p className="text-[var(--color-slate-warm)] max-w-sm mx-auto leading-relaxed text-base">
              The Ekha app is in its final stages. Available soon on
              iOS & Android.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full sm:w-auto mt-4 gradient-trust text-white font-semibold tracking-wide px-12 py-4 rounded-xl hover:shadow-lg hover:shadow-violet/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Got it!
          </button>
        </div>
      </Modal>
    </>
  );
}
