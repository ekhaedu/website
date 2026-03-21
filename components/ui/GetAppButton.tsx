"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { Smartphone } from "lucide-react";
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
          {children || "Get App"}
        </Button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={
            className ||
            "border border-white px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors rounded-full"
          }
        >
          {children || "Get App"}
        </button>
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="System Notice"
      >
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-neon-purple/20 blur-xl rounded-full scale-150 transition-transform duration-500" />
            <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
              <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-3xl font-bold text-foreground tracking-tight uppercase">
              Launching Soon
            </h4>
            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed font-mono text-sm uppercase">
              The Ekha app is in final stages of deployment. Available soon on
              iOS & Android.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full sm:w-auto mt-4 bg-foreground text-background font-bold tracking-wider uppercase px-12 py-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white hover:text-neon-purple transition-all duration-300"
          >
            Acknowledge
          </button>
        </div>
      </Modal>
    </>
  );
}
