import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200">
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-200">
            <h2 className="text-4xl font-bold text-foreground uppercase mb-2">
              Have Questions?
            </h2>
            <p className="text-slate-500 font-mono mb-8">
              INITIATE COMMUNICATION SEQUENCE
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="NAME"
                  className="bg-white border border-slate-300 p-4 text-black placeholder-slate-400 focus:outline-none focus:border-neon-purple font-mono text-sm"
                />

                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-white border border-slate-300 p-4 text-black placeholder-slate-400 focus:outline-none focus:border-neon-purple font-mono text-sm"
                />
              </div>
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full bg-white border border-slate-300 p-4 text-black placeholder-slate-400 focus:outline-none focus:border-neon-purple font-mono text-sm"
              />

              <Button
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Links Grid */}
          <div className="grid grid-cols-2">
            <div className="border-r border-b border-slate-200 p-8 flex flex-col justify-center items-center hover:bg-slate-200 transition-colors group cursor-pointer">
              <Twitter className="w-8 h-8 text-slate-500 group-hover:text-black mb-4 transition-colors" />
              <span className="font-mono text-sm text-slate-500 uppercase">
                Twitter
              </span>
            </div>
            <div className="border-b border-slate-200 p-8 flex flex-col justify-center items-center hover:bg-slate-200 transition-colors group cursor-pointer">
              <Linkedin className="w-8 h-8 text-slate-500 group-hover:text-black mb-4 transition-colors" />
              <span className="font-mono text-sm text-slate-500 uppercase">
                LinkedIn
              </span>
            </div>
            <div className="border-r border-slate-200 p-8 flex flex-col justify-center items-center hover:bg-slate-200 transition-colors group cursor-pointer">
              <Instagram className="w-8 h-8 text-slate-500 group-hover:text-black mb-4 transition-colors" />
              <span className="font-mono text-sm text-slate-500 uppercase">
                Instagram
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center items-center hover:bg-slate-200 transition-colors group cursor-pointer">
              <Mail className="w-8 h-8 text-slate-500 group-hover:text-black mb-4 transition-colors" />
              <span className="font-mono text-sm text-slate-500 uppercase">
                Email
              </span>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-xs uppercase">
          <div>© 2024 Ekha Learning Systems. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
