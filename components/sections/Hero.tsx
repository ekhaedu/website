import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { GetAppButton } from "../ui/GetAppButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pb-16 overflow-hidden bg-[var(--color-navy)] md:bg-white">
      {/* Desktop - soft radial gradient */}
      <div className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(112,111,211,0.08) 0%, rgba(255,126,95,0.04) 40%, transparent 70%)"
        }}
      />
      {/* Desktop grid pattern */}
      <div className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(112,111,211,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(112,111,211,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
        }}
      />
      {/* Mobile - warm navy grid */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(112,111,211,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(112,111,211,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center text-center w-full animate-[fadeIn_1s_ease-out_0.5s_both]">
          <span className="inline-flex items-center gap-2 text-sm tracking-wide text-[var(--color-violet-light)] mb-6 bg-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Education Reimagined
          </span>

          <h1 className="text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Master <br />
            Every Subject <br />
            <span className="gradient-text-violet" style={{ WebkitTextFillColor: "transparent" }}>
              One-on-One
            </span>
          </h1>

          <p className="text-base font-light leading-relaxed max-w-[320px] text-white/70 mb-10">
            The only platform with complete transparency. No algorithms. No
            forced matches. Just your child and the perfect teacher.
          </p>

          <GetAppButton className="gradient-trust text-white px-8 py-4 text-sm font-semibold rounded-xl hover:shadow-lg transition-all">
            Get the App
          </GetAppButton>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-center text-center max-w-5xl mx-auto animate-[fadeIn_1s_ease-out_0.5s_both]">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-[var(--color-violet)] text-sm tracking-wide bg-[var(--color-violet-light)] px-5 py-2 rounded-full font-medium">
              <Sparkles className="w-4 h-4" />
              Admissions Open · LKG – Class 12
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-[var(--color-foreground)] leading-[0.9] mb-8 tracking-tight">
            Master Every
            <br />
            Subject
            <br />
            <span className="gradient-text-trust">
              One-on-One
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 my-5 md:my-12 leading-relaxed max-w-2xl">
            The only platform with complete transparency. No algorithms. No
            forced matches. Just you, your child, and the perfect teacher.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
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
