import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'glass' | 'neon';
}
export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}: CardProps) {
  const baseStyles =
  'rounded-none transition-all duration-300 relative overflow-hidden';
  const variants = {
    default: 'bg-black border border-slate-800',
    hover:
    'bg-black border border-slate-800 hover:border-neon-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group',
    glass: 'bg-black/50 backdrop-blur-md border border-slate-800',
    neon: 'bg-black border border-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.2)]'
  };
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {/* Corner accents for tech feel */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50 pointer-events-none" />

      {children}
    </div>);

}