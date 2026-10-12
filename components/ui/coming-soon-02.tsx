// Coming Soon 2 from Hirael <https://hirael.com/blocks/not-found/coming-soon-02>
// MIT · Mohammad Shehadeh · https://github.com/MohammadShehadeh/hirael

"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "@/components/ui/coming-soon-02-utils/sparkles";

export interface ComingSoon02Props {
  badge?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
}

const Headline = ({ text = "Something new is on the way" }: { text?: string }) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const half = Math.floor(words.length / 2);

  return (
    <h1
      data-slot="coming-soon-title"
      className="max-w-xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl md:text-7xl text-balance"
    >
      {words.map((word, wordIndex) => {
        return (
          <span
            key={`word-${wordIndex}`}
            className={cn(
              "inline-block whitespace-nowrap",
              wordIndex < half ? "text-muted-foreground" : "text-foreground"
            )}
          >
            {word.split("").map((char, charIndex) => {
              const letterIndex =
                words
                  .slice(0, wordIndex)
                  .reduce((acc, w) => acc + w.length, 0) + charIndex;

              return (
                <motion.span
                  key={`char-${wordIndex}-${charIndex}`}
                  className="inline-block"
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          filter: "blur(12px)",
                          y: 14,
                        }
                  }
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + letterIndex * 0.035,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 ? (
              <span className="inline-block">&nbsp;</span>
            ) : null}
          </span>
        );
      })}
    </h1>
  );
};

const ComingSoon02 = ({
  badge = "Launching soon · Ekha Learning",
  headline = "Something new is on the way",
  description = "Ekha is expanding with an all-new interactive learning experience: vetted 1-on-1 mentors, real-time collaborative classrooms, and personalized growth journeys for students. We are putting the finishing touches together now.",
  ctaText = "Coming soon",
}: ComingSoon02Props) => {
  const reduce = useReducedMotion();

  return (
    <section
      data-slot="coming-soon"
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background pt-24"
    >
      {/* Smooth Background Section Aura Animation */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_65%)]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      <motion.div
        data-slot="coming-soon-body"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center md:px-10"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={
            reduce
              ? false
              : { opacity: 0, filter: "blur(8px)", scale: 0.9, y: 10 }
          }
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <Badge
            variant="outline"
            data-slot="coming-soon-badge"
            className="rounded-full bg-card/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm"
          >
            {badge}
          </Badge>
        </motion.div>

        <Headline text={headline} />

        <motion.p
          data-slot="coming-soon-description"
          className="mt-2 max-w-xl text-pretty text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed px-4 sm:px-0"
          initial={
            reduce ? false : { opacity: 0, filter: "blur(8px)", y: 14 }
          }
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        >
          {description}
        </motion.p>

        <motion.div
          data-slot="coming-soon-actions"
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
          initial={
            reduce ? false : { opacity: 0, filter: "blur(8px)", y: 16 }
          }
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          <Badge
            variant="outline"
            data-slot="coming-soon-cta"
            className="rounded-full px-5 py-2 text-sm font-medium"
          >
            {ctaText}
          </Badge>
        </motion.div>
      </motion.div>

      {/* Horizon with Smooth Entrance */}
      <motion.div
        data-slot="coming-soon-horizon"
        aria-hidden
        className="pointer-events-none relative -mt-32 h-96 w-full shrink-0 overflow-hidden [mask-image:radial-gradient(50%_50%,black,transparent)] after:absolute after:-start-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-border after:bg-card after:content-['']"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          data-slot="coming-soon-horizon-glow"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_oklch,var(--primary)_40%,transparent),transparent_70%)] opacity-40"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
        />
        <Sparkles
          density={4}
          size={1.4}
          color="var(--primary)"
          className="[mask-image:radial-gradient(50%_50%,black,transparent_85%)]"
        />
      </motion.div>
    </section>
  );
};

export default ComingSoon02;
