import { Button } from "@/components/ui/Button";
import {
  Smartphone,
  Globe,
  BookOpen,
  GraduationCap,
  Layout,
  Monitor,
  Tablet,
  Sparkles,
} from "lucide-react";

// Apple Logo
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" fill="currentColor" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
  </svg>
);

// Google Play Logo
const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-68 57.9 68 57.9 58.9-34.1c16.3-9.4 16.3-38.2 0-47.6zM404.3 325.3l-58.9-34.1-60.1 60.1 119 68.2z" />
  </svg>
);

export default function DownloadApp() {
  return (
    <section className="relative py-32 bg-white overflow-hidden border-y border-slate-100">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Smartphone className="absolute top-10 left-10 w-16 h-16 text-[var(--color-violet-light)] -rotate-12 opacity-60" />
        <BookOpen className="absolute top-20 left-[15%] w-12 h-12 text-[var(--color-peach-light)] rotate-45 opacity-50" />
        <Tablet className="absolute top-12 right-12 w-20 h-20 text-[var(--color-trust-blue-light)] rotate-12 opacity-60" />
        <GraduationCap className="absolute top-32 right-[20%] w-10 h-10 text-[var(--color-violet-light)] -rotate-12 opacity-50" />
        <Monitor className="absolute bottom-20 left-20 w-14 h-14 text-[var(--color-peach-light)] rotate-6 opacity-50" />
        <Layout className="absolute bottom-10 left-[25%] w-10 h-10 text-[var(--color-trust-blue-light)] -rotate-12 opacity-40" />
        <Globe className="absolute bottom-16 right-16 w-16 h-16 text-[var(--color-violet-light)] -rotate-45 opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <span className="text-sm tracking-wide text-[var(--color-violet)] mb-4 block font-medium">
            Coming Soon
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-foreground)] mb-6">
            Learn Anytime,{" "}
            <span className="gradient-text-trust">
              Anywhere
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Access your personalized learning plan, attend live classes, and
            track progress seamlessly across all your devices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              disabled
              className="h-14 px-6 w-full sm:w-auto min-w-[200px] bg-slate-100 text-slate-400 cursor-not-allowed flex items-center justify-center gap-3 rounded-xl border border-slate-200"
            >
              <AppleIcon className="w-6 h-6 fill-current mb-0.5" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium">Coming Soon to</span>
                <span className="text-base font-bold">App Store</span>
              </div>
            </Button>

            <Button
              size="lg"
              disabled
              className="h-14 px-6 w-full sm:w-auto min-w-[200px] bg-slate-100 text-slate-400 cursor-not-allowed flex items-center justify-center gap-3 rounded-xl border border-slate-200"
            >
              <GooglePlayIcon className="w-5 h-5 fill-current ml-0.5" />
              <div className="flex flex-col items-start leading-none ml-1">
                <span className="text-[10px] font-medium">Coming Soon to</span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </Button>

            <Button
              size="lg"
              disabled
              className="h-14 px-6 w-full sm:w-auto min-w-[200px] bg-slate-100 text-slate-400 cursor-not-allowed flex items-center justify-center gap-3 rounded-xl border border-slate-200"
            >
              <Monitor className="w-6 h-6 text-slate-400" />
              <span className="font-medium text-base">Coming Soon to Web</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
