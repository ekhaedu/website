"use client";
import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-50 pt-20 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden">
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-200">
            <h2 className="text-4xl font-bold text-[var(--color-foreground)] mb-2">
              Have Questions?
            </h2>
            <p className="text-slate-500 mb-8">
              We&apos;d love to hear from you
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white border border-slate-200 p-4 rounded-xl text-[var(--color-foreground)] placeholder-slate-400 focus:outline-none focus:border-[var(--color-violet)] focus:ring-2 focus:ring-violet/20 text-sm transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white border border-slate-200 p-4 rounded-xl text-[var(--color-foreground)] placeholder-slate-400 focus:outline-none focus:border-[var(--color-violet)] focus:ring-2 focus:ring-violet/20 text-sm transition-all"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white border border-slate-200 p-4 rounded-xl text-[var(--color-foreground)] placeholder-slate-400 focus:outline-none focus:border-[var(--color-violet)] focus:ring-2 focus:ring-violet/20 text-sm transition-all"
              />
              <Button
                type="button"
                onClick={() => window.location.href = "mailto:ekha.edu@gmail.com"}
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Social Links Grid */}
          <div className="grid grid-cols-2">
            {[
              { icon: Twitter, label: "Twitter", color: "var(--color-violet)" },
              { icon: Linkedin, label: "LinkedIn", color: "var(--color-trust-blue)" },
              { icon: Instagram, label: "Instagram", color: "var(--color-peach)" },
              { icon: Mail, label: "Email", color: "var(--color-violet)" },
            ].map((social, i) => (
              <div
                key={i}
                className={`${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-r" : ""} border-slate-200 p-8 flex flex-col justify-center items-center hover:bg-slate-100 transition-all duration-300 group cursor-pointer`}
              >
                <social.icon
                  className="w-8 h-8 text-slate-400 mb-4 transition-all duration-300"
                />
                <span className="text-sm text-slate-500 group-hover:text-[var(--color-foreground)] transition-colors font-medium">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
          <div>© 2026 Ekha Learning Platform. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
