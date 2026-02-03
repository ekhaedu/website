import React from "react";
import { Card } from "../ui/Card";
import { BrainCircuit, CheckCircle2 } from "lucide-react";
export function StudentDiscovery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" />
              <Card className="relative p-5 md:p-8 border-slate-200 bg-white">
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

          <div className="flex-1 order-1 lg:order-2">
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
              Before the first subject class, every student undergoes a
              mandatory learning psychology session led by an{" "}
              <span className="text-foreground font-semibold">
                Expert Learning Psychologist
              </span>
              . We help understand your child&apos;s unique learning style,
              attention span, and comfort level.
            </p>

            <ul className="space-y-4">
              {[
                "Educational and supportive, not medical",
                "Helps match the perfect teaching style",
                "Detailed summary shared with parents via WhatsApp",
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
    </section>
  );
}
