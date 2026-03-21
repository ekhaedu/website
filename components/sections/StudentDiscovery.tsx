import React from "react";
import { Card } from "../ui/Card";
import { BrainCircuit, CheckCircle2 } from "lucide-react";
export function StudentDiscovery() {
  return (
    <section className="py-24 bg-[#050505] md:bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Card Area */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" />
              {/* Mobile Card (dark editorial) */}
              <div className="md:hidden border border-white/10 p-6 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 shrink-0">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm font-medium uppercase tracking-wide">
                      Discovery Session Report
                    </h4>
                    <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
                      Sent to Parent via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="space-y-0">
                  {[
                    {
                      label: "Learning Style",
                      value: "Visual & Interactive",
                    },
                    {
                      label: "Attention Span",
                      value: "High in short bursts",
                    },
                    {
                      label: "Comfort Level",
                      value: "Very confident",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-t border-white/10"
                    >
                      <span className="text-white/40 text-sm font-mono">
                        {item.label}
                      </span>
                      <span className="font-medium text-white text-sm">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Card (unchanged) */}
              <Card className="hidden md:block relative p-5 md:p-8 border-slate-200 bg-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-black font-mono font-medium">
                      Discovery Session Report
                    </h4>
                    <p className="text-slate-500 font-mono text-xs">
                      Sent to Parent via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Learning Style",
                      value: "Visual & Interactive",
                      color: "text-foreground",
                    },
                    {
                      label: "Attention Span",
                      value: "High in short bursts",
                      color: "text-foreground",
                    },
                    {
                      label: "Comfort Level",
                      value: "Very confident",
                      color: "text-foreground",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 rounded-lg bg-slate-50"
                    >
                      <span className="text-slate-500 text-sm">
                        {item.label}
                      </span>
                      <span className={`font-medium ${item.color}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Text Area */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Mobile Text (dark editorial) */}
            <div className="md:hidden relative z-10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-4 block">
                Free Discovery Session
              </span>
              <h2 className="text-5xl font-bold text-white mb-4 uppercase">
                Every Journey Begins with{" "}
                <span
                  style={{
                    WebkitTextStroke: "1.5px white",
                    color: "transparent",
                  }}
                >
                  Understanding
                </span>
              </h2>
              <div className="inline-block border border-white/20 text-white/60 px-4 py-1 text-[10px] font-mono mb-4 uppercase tracking-widest">
                Free & Compulsory for Every Student
              </div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Before class starts, every student has a fun session with our{" "}
                <span className="text-white font-medium">
                  trained counsellors
                </span>{" "}
                to understand how they learn best.
              </p>

              <ul className="space-y-3">
                {[
                  "Fun and stress-free interaction for the child",
                  " AI builds a capability profile for the teacher",
                  "Teacher customizes lessons based on this data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Text (unchanged) */}
            <div className="hidden md:block">
              <h2 className="text-2xl md:text-4xl font-medium text-foreground mb-4 leading-tight">
                Every Journey Begins with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
                  Understanding
                </span>
              </h2>
              <div className="inline-block bg-neon-purple/10 text-neon-purple px-4 py-1 rounded-full text-xs font-bold mb-4 font-mono border border-neon-purple/20">
                FREE & COMPULSORY FOR EVERY STUDENT
              </div>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                Before the first subject class, every student undergoes a fun
                and interactive discovery session with our{" "}
                <span className="text-foreground font-semibold">
                  Smart AI Companion
                </span>
                . We help understand your child&apos;s unique learning style,
                capability, and interests through a natural conversation.
              </p>

              <ul className="space-y-4">
                {[
                  "Fun and stress-free interaction for the child",
                  " AI builds a capability profile for the teacher",
                  "Teacher customizes lessons based on this data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
