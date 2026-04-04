import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'glass' | 'accent';
}
export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}: CardProps) {
  const baseStyles =
    'rounded-2xl transition-all duration-300 relative overflow-hidden';
  const variants = {
    default: 'bg-white border border-slate-200 shadow-sm',
    hover:
      'bg-white border border-slate-200 shadow-sm hover:border-[var(--color-violet)] hover:shadow-lg hover:shadow-violet/10 group',
    glass: 'bg-white/60 backdrop-blur-md border border-white/50 shadow-sm',
    accent: 'bg-white border-2 border-[var(--color-violet)] shadow-md shadow-violet/10'
  };
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </div>
  );
}