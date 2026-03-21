"use client";
// Force HMR update

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 500); // Matches transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!mounted) return null;

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none delay-300"}`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className={`bg-white/95 backdrop-blur-3xl border-t sm:border-l border-white/20 shadow-2xl w-full sm:max-w-[480px] h-[85vh] sm:h-full relative overflow-hidden flex flex-col rounded-t-[32px] sm:rounded-none ring-1 ring-black/5 transition-transform duration-500 ease-out ${
          isAnimating
            ? "translate-y-0 sm:translate-x-0"
            : "translate-y-full sm:translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-purple via-blue-500 to-neon-purple opacity-50" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-200 rounded-full sm:hidden" />

        <div className="flex items-center justify-between p-6 sm:p-8 pb-4 mt-2 sm:mt-0">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-neon-purple uppercase tracking-widest">
              /// System Panel
            </span>
            <h3 className="text-2xl font-medium text-foreground uppercase tracking-tight leading-none">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="group p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer relative"
            aria-label="Close panel"
          >
            <X className="w-5 h-5 text-slate-400 group-hover:text-foreground transition-colors" />
          </button>
        </div>

        <div className="flex-1 p-6 sm:p-8 pt-0 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
