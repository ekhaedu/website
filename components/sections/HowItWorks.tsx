import React from "react";
import { User, Users, Calendar, ArrowUpRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <User className="w-12 h-12 text-foreground" />,
      title: "Undivided Attention (1:1)",
      description:
        "Your child is the sole focus. Starts with a free, compulsory Student Discovery session to map their needs.",
      stat: "01",
    },
    {
      icon: <Users className="w-12 h-12 text-neon-purple" />,
      title: "The Perfect Mentor Match",
      description:
        "We find the teacher your child actually connects with. Free first introductory session with every teacher. When they love their teacher, they love learning.",
      stat: "02",
    },
    {
      icon: <Calendar className="w-12 h-12 text-foreground" />,
      title: "Discipline Meets Flexibility",
      description:
        "A structured routine that fits your life. Consistent slots help build the habit of daily learning.",
      stat: "03",
    },
  ];

  return (
    <section className="py-32 bg-background relative border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-8">
          <div>
            <span className="text-neon-purple font-mono text-sm tracking-widest uppercase mb-2 block">
              Benefits for the Child
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase leading-none">
              The Ekha
              <br />
              Advantage
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-right font-mono text-sm mt-8 md:mt-0">
            {"// BUILT FOR FOCUS"}
            <br />
            {"// CONSISTENT GROWTH"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative h-[500px] bg-slate-50 border border-slate-200 hover:border-neon-purple transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-4xl text-slate-400 group-hover:text-foreground transition-colors">
                    {step.stat}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-neon-purple transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-medium text-foreground mb-4 uppercase leading-none">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-mono text-sm leading-relaxed border-l-2 border-slate-200 pl-4 group-hover:border-neon-purple transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
