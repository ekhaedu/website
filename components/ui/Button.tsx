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
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-none cursor-pointer";
  const variants = {
    primary:
      "bg-transparent from-black to-slate-500 bg-linear-to-b border-black text-white hover:bg-none hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]",
    secondary:
      "bg-transparent border border-slate-300  text-slate-700 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]",
    ghost: "bg-transparent text-slate-600 hover:text-black hover:bg-slate-100",
    white: "bg-white text-black hover:bg-slate-200",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-sm",
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
