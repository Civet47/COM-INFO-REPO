import React from 'react';
import { cn } from '../utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8 text-[6px]',
    md: 'w-12 h-12 text-[9px]',
    lg: 'w-24 h-24 text-[18px]'
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "relative rounded-full bg-brand-black flex items-center justify-center overflow-hidden shadow-lg border-2 border-brand-gold/20",
        sizes[size]
      )}>
        {/* Simplified representation of the heritage pattern in the circle background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-brand-red rotate-45 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-full h-1/4 bg-brand-blue -rotate-45 translate-y-1/2" />
          <div className="absolute top-1/2 left-0 w-1/4 h-full bg-brand-gold -translate-x-1/2" />
        </div>
        
        <div className="relative text-white font-bold leading-none text-center select-none">
          <div className="tracking-tighter">CLASH</div>
          <div className="text-[0.6em] opacity-80 uppercase font-medium border-t border-b border-white/20 my-0.5 py-0.5">OF</div>
          <div className="tracking-tighter flex items-center justify-center gap-0.5">
            MINDS
            <span className="bg-brand-gold text-brand-black px-0.5 rounded-[1px] text-[0.8em]">KE</span>
          </div>
        </div>
      </div>
      {size !== 'sm' && (
        <div className="flex flex-col leading-none">
          <span className="font-bold tracking-tighter text-brand-black uppercase">Clash of Minds</span>
          <span className="text-[10px] uppercase tracking-widest text-brand-red font-semibold">Resource Hub</span>
        </div>
      )}
    </div>
  );
}
