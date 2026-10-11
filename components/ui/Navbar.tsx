"use client";

import React, { useState, useEffect } from "react";
import { GetAppButton } from "./GetAppButton";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Interactive Demo", href: "#chapter-curiosity" },
  { label: "How It Works", href: "#chapter-story" },
  { label: "The App", href: "#chapter-product" },
  { label: "For Parents", href: "#chapter-trust" },
  { label: "Pricing & FAQ", href: "#chapter-pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white/60 backdrop-blur-xs border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#chapter-01"
          onClick={(e) => handleLinkClick(e, "#chapter-01")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#7477FF] transition-colors">
            EKHA<span className="text-[#7477FF]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-bold text-[#7477FF] bg-[#EEF0FF] px-2 py-0.5 rounded-full border border-[#7477FF]/20">
            1-on-1 Learning
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-[#7477FF] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <GetAppButton className="gradient-trust text-white px-4 lg:px-5 py-2 text-xs font-bold rounded-full shadow-sm hover:shadow-md hover:shadow-[#7477FF]/20 transition-all cursor-pointer flex items-center gap-1.5">
            <span>Claim Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </GetAppButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <GetAppButton className="gradient-trust text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-xs cursor-pointer">
            <span>Free Trial</span>
          </GetAppButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-bold text-slate-700 hover:text-[#7477FF] py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100">
              <GetAppButton className="w-full gradient-trust text-white py-3 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2">
                <span>Book Free Trial Session</span>
                <ArrowRight className="w-4 h-4" />
              </GetAppButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
