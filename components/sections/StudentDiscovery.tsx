import React from "react";
import { Card } from "../ui/Card";
import { BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";

export function StudentDiscovery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Card Area */}
          <div className="flex-1 order-2 lg:order-1">
            <Card className="relative p-5 md:p-8 border-slate-200 bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-engage flex items-center justify-center text-white">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[var(--color-foreground)] font-medium">
                    Discovery Session Report
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Sent to Parent via WhatsApp
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Learning Style", value: "Visual & Interactive", color: "var(--color-violet)" },
                  { label: "Attention Span", value: "High in short bursts", color: "var(--color-trust-blue)" },
                  { label: "Comfort Level", value: "Very confident", color: "var(--color-peach)" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 rounded-xl bg-slate-50"
                  >
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="font-medium text-[var(--color-foreground)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Text Area */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl md:text-4xl font-semibold text-[var(--color-foreground)] mb-4 leading-tight">
              Every Journey Begins with{" "}
              <span className="gradient-text-trust">
                Understanding
              </span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-[var(--color-violet-light)] text-[var(--color-violet)] px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-[var(--color-violet)]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Free & Compulsory for Every Student
            </div>
            <p className="text-slate-500 text-base md:text-lg mb-6 leading-relaxed">
              Before the first subject class, every student undergoes a fun
              and interactive discovery session with our{" "}
              <span className="text-[var(--color-foreground)] font-semibold">
                Smart AI Companion
              </span>
              . We help understand your child&apos;s unique learning style,
              capability, and interests through a natural conversation.
            </p>

            <ul className="space-y-4">
              {[
                "Fun and stress-free interaction for the child",
                "AI builds a capability profile for the teacher",
                "Teacher customizes lessons based on this data",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[var(--color-violet)]" />
                  <span className="text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
