import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { GetAppButton } from "../ui/GetAppButton";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pb-16 overflow-hidden bg-[#050505] md:bg-background">
      {/* Desktop grid pattern */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      {/* Mobile grid pattern (dark) */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center text-center w-full animate-[fadeIn_1s_ease-out_0.5s_both]">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-6 block">
            Education Reimagined
          </span>

          <h1 className="text-6xl font-bold text-white leading-14 mb-8 tracking-tighter uppercase">
            Master <br />
            Every Subject <br />
            <span
              style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}
            >
              One-on-One
            </span>
          </h1>

          <p className="text-sm font-light leading-relaxed max-w-[280px] text-white/60 mb-12">
            The only platform with complete transparency. No algorithms. No
            forced matches. Just your child and the perfect teacher.
          </p>

          <GetAppButton className="bg-white text-black px-6 py-3 font-mono text-xs uppercase tracking-tighter hover:bg-white/80 transition-colors">
            Get the App
          </GetAppButton>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:flex flex-col items-center text-center max-w-5xl mx-auto animate-[fadeIn_1s_ease-out_0.5s_both]">
          <div className="mb-8 animate-pulse">
            <span className="text-neon-purple font-mono text-[10px] md:text-sm tracking-widest md:tracking-[0.2em] uppercase border border-neon-purple/30 px-3 py-1 md:px-4">
              Admissions Open • LKG - Class 12
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9 ] mb-8 tracking-tighter uppercase">
            Master Every
            <br />
            Subject
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
              [ One-on-One ]
            </span>
          </h1>

          <p className="text-xs my-5 md:text-base text-slate-600 md:my-12 leading-relaxed max-w-2xl font-mono uppercase tracking-wide">
            The only platform with complete transparency. No algorithms. No
            forced matches. Just you, your child, and the perfect teacher.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md">
            <GetAppButton
              useCustomButton
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get the App
            </GetAppButton>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              leftIcon={<PlayCircle className="w-5 h-5" />}
            >
              How Ekha Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
