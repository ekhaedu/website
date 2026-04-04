"use client";

import React from "react";
import { Loader2 } from "lucide-react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-violet/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl cursor-pointer";
  const variants = {
    primary:
      "gradient-trust text-white hover:shadow-lg hover:shadow-violet/20 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-transparent border-2 border-[var(--color-violet)] text-[var(--color-violet)] hover:bg-[var(--color-violet-light)] hover:shadow-md",
    ghost: "bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-cream-dark)] rounded-lg",
    white: "bg-white text-[var(--color-foreground)] hover:bg-[var(--color-cream-dark)] shadow-sm hover:shadow-md",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
