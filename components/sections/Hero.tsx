import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, PlayCircle } from "lucide-react";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-pulse">
            <span className="text-neon-purple font-mono text-sm tracking-[0.2em] uppercase border border-neon-purple/30 px-4 py-1">
              System Online • LKG to Class 12
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] mb-8 tracking-tighter uppercase">
            One-on-One
            <br />
            Learning
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
              [ Platform ]
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 my-12 leading-relaxed max-w-2xl font-mono uppercase tracking-wide">
            Ekha is a one-on-one learning and guidance app where students choose
            teachers freely, parents receive clear updates via WhatsApp, and
            academic performance is genuinely rewarded.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get the App
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<PlayCircle className="w-5 h-5" />}
            >
              How Ekha Works
            </Button>
          </div>

          {/* <div className="mt-20 relative w-full max-w-4xl aspect-[2/1] border-x border-slate-200 bg-gradient-to-b from-slate-100/0 via-slate-100/50 to-slate-100/0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-neon-purple/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-48 h-48 border border-black/20 rotate-45" />
              <div className="absolute w-32 h-32 bg-neon-purple/10 blur-xl" />
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-between px-8 pb-8 font-mono text-xs text-slate-500 uppercase">
              <div>System Status: Active</div>
              <div>Latency: 12ms</div>
              <div>Encryption: Enabled</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
