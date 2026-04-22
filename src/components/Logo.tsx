import React from 'react';
import { cn } from '../utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-32 h-32'
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "relative rounded-full overflow-hidden shadow-xl border-2 border-brand-gold/20 bg-brand-black",
        sizes[size]
      )}>
        <img 
          src="/logo.png" 
          alt="Clash of Minds KE Logo" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to simpler icon/text if image is missing
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Simple fallback if img fails to load or is not present yet */}
        <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
          <span className="font-bold text-[0.5em]">CM</span>
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
